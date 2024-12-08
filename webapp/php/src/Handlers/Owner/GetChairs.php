<?php

declare(strict_types=1);

namespace IsuRide\Handlers\Owner;

use Fig\Http\Message\StatusCodeInterface;
use IsuRide\Database\Model\ChairWithDetail;
use IsuRide\Database\Model\Owner;
use IsuRide\Handlers\AbstractHttpHandler;
use IsuRide\Model\OwnerGetChairs200Response;
use IsuRide\Model\OwnerGetChairs200ResponseChairsInner;
use IsuRide\Response\ErrorResponse;
use PDO;
use PDOException;
use Redis;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

class GetChairs extends AbstractHttpHandler
{
    public function __construct(
        private readonly PDO $db,
        private readonly Redis $redis,
    ) {
    }

    /**
     * @param ServerRequestInterface $request
     * @param ResponseInterface $response
     * @param array<string, string> $args
     * @return ResponseInterface
     * @throws \Exception
     */
    public function __invoke(
        ServerRequestInterface $request,
        ResponseInterface $response,
        array $args
    ): ResponseInterface {
        $owner = $request->getAttribute('owner');
        assert($owner instanceof Owner);

        $cached = $this->redis->get('owner_chairs:' . $owner->id);
        if ($cached !== false) {
            $_ownerChairs = json_decode($cached, true);
            $res = new OwnerGetChairs200Response();
            return $this->writeJson($response, $res->setChairs($_ownerChairs));
        }

        /** @var ChairWithDetail[] $chairs */
        $chairs = [];
        try {
            $ownerChairs = [];
            $stmt = $this->db->prepare("SELECT * FROM chairs WHERE owner_id = ?");
            $stmt->execute([$owner->id]);
            $ownerChairs = $stmt->fetchAll(PDO::FETCH_ASSOC);

            $placeHolders = implode(',', array_fill(0, count($ownerChairs), '?'));
            $stmt = $this->db->prepare("SELECT * FROM chair_locations WHERE chair_id IN ($placeHolders) ORDER BY created_at");
            $stmt->execute(array_column($ownerChairs, 'id'));
            $locations = $stmt->fetchAll(PDO::FETCH_ASSOC);

            $locationColumns = [];
            $prevLocations = [];
            foreach ($locations as $location) {
                $chairId = $location['chair_id'];
                $locationColumns[$chairId]['total_distance'] ??= 0;
                $locationColumns[$chairId]['total_distance_updated_at'] ??= null;

                if (isset($prevLocations[$chairId])) {
                    $locationColumns[$chairId]['total_distance'] += abs($location['latitude'] - $prevLocations[$chairId]['latitude']);
                    $locationColumns[$chairId]['total_distance'] += abs($location['longitude'] - $prevLocations[$chairId]['longitude']);
                }

                $locationColumns[$chairId]['total_distance_updated_at'] = $location['created_at'];
                $prevLocations[$chairId] = [
                    'latitude' => $location['latitude'],
                    'longitude' => $location['longitude']
                ];
            }

            foreach ($ownerChairs as $ownerChair) {
                $additionalColumn = $locationColumns[$ownerChair['id']] ?? [];
                $ownerChair['total_distance'] = $additionalColumn['total_distance'] ?? 0;
                $ownerChair['total_distance_updated_at'] = $additionalColumn['total_distance_updated_at'] ?? null;
                $chairs[] = $ownerChair;
            }
        } catch (PDOException $e) {
            return (new ErrorResponse())->write(
                $response,
                StatusCodeInterface::STATUS_INTERNAL_SERVER_ERROR,
                $e
            );
        }
        $res = new OwnerGetChairs200Response();
        $ownerChairs = [];
        foreach ($chairs as $row) {
            $chair = new ChairWithDetail(
                id: $row['id'],
                ownerId: $row['owner_id'],
                name: $row['name'],
                accessToken: $row['access_token'],
                model: $row['model'],
                isActive: (bool)$row['is_active'],
                createdAt: $row['created_at'],
                updatedAt: $row['updated_at'],
                totalDistance: (int)$row['total_distance'],
                totalDistanceUpdatedAt: $row['total_distance_updated_at']
            );
            $ownerChair = new OwnerGetChairs200ResponseChairsInner();
            $ownerChair->setId($chair->id)
                ->setName($chair->name)
                ->setModel($chair->model)
                ->setActive($chair->isActive)
                ->setRegisteredAt($chair->createdAtUnixMilliseconds())
                ->setTotalDistance($chair->totalDistance);
            if ($chair->isTotalDistanceUpdatedAt()) {
                $ownerChair->setTotalDistanceUpdatedAt($chair->totalDistanceUpdatedAtUnixMilliseconds());
            }
            $ownerChairs[] = $ownerChair;
        }
        $this->redis->set('owner_chairs:' . $owner->id, json_encode($ownerChairs), ['ex' => 2]);
        return $this->writeJson($response, $res->setChairs($ownerChairs));
    }
}
