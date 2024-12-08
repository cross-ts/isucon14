USE isuride;

-- alter table chair_locations add column location POINT GENERATED ALWAYS AS (ST_PointFromText(CONCAT("POINT(", latitude, " ", longitude, ")"))) STORED;

-- alter table rides add column pickup_location POINT GENERATED ALWAYS AS (ST_PointFromText(CONCAT("POINT(", pickup_latitude, " ", pickup_longitude, ")"))) STORED;
-- alter table rides add column destination_location POINT GENERATED ALWAYS AS (ST_PointFromText(CONCAT("POINT(", destination_latitude, " ", destination_longitude, ")"))) STORED;
