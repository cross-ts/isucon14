CREATE TABLE `chair_locations` (
  `id` varchar(26) NOT NULL,
  `chair_id` varchar(26) NOT NULL COMMENT '椅子ID',
  `latitude` int NOT NULL COMMENT '経度',
  `longitude` int NOT NULL COMMENT '緯度',
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '登録日時',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='椅子の現在位置情報テーブル';

CREATE TABLE `chair_models` (
  `name` varchar(50) NOT NULL COMMENT '椅子モデル名',
  `speed` int NOT NULL COMMENT '移動速度',
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='椅子モデルテーブル';

CREATE TABLE `chairs` (
  `id` varchar(26) NOT NULL COMMENT '椅子ID',
  `owner_id` varchar(26) NOT NULL COMMENT 'オーナーID',
  `name` varchar(30) NOT NULL COMMENT '椅子の名前',
  `model` text NOT NULL COMMENT '椅子のモデル',
  `is_active` tinyint(1) NOT NULL COMMENT '配椅子受付中かどうか',
  `access_token` varchar(255) NOT NULL COMMENT 'アクセストークン',
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '登録日時',
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6) COMMENT '更新日時',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='椅子情報テーブル';

CREATE TABLE `coupons` (
  `user_id` varchar(26) NOT NULL COMMENT '所有しているユーザーのID',
  `code` varchar(255) NOT NULL COMMENT 'クーポンコード',
  `discount` int NOT NULL COMMENT '割引額',
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '付与日時',
  `used_by` varchar(26) DEFAULT NULL COMMENT 'クーポンが適用されたライドのID',
  PRIMARY KEY (`user_id`,`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='クーポンテーブル';

CREATE TABLE `owners` (
  `id` varchar(26) NOT NULL COMMENT 'オーナーID',
  `name` varchar(30) NOT NULL COMMENT 'オーナー名',
  `access_token` varchar(255) NOT NULL COMMENT 'アクセストークン',
  `chair_register_token` varchar(255) NOT NULL COMMENT '椅子登録トークン',
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '登録日時',
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6) COMMENT '更新日時',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `access_token` (`access_token`),
  UNIQUE KEY `chair_register_token` (`chair_register_token`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='椅子のオーナー情報テーブル';

CREATE TABLE `payment_tokens` (
  `user_id` varchar(26) NOT NULL COMMENT 'ユーザーID',
  `token` varchar(255) NOT NULL COMMENT '決済トークン',
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '登録日時',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='決済トークンテーブル';

CREATE TABLE `ride_statuses` (
  `id` varchar(26) NOT NULL,
  `ride_id` varchar(26) NOT NULL COMMENT 'ライドID',
  `status` enum('MATCHING','ENROUTE','PICKUP','CARRYING','ARRIVED','COMPLETED') NOT NULL COMMENT '状態',
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '状態変更日時',
  `app_sent_at` datetime(6) DEFAULT NULL COMMENT 'ユーザーへの状態通知日時',
  `chair_sent_at` datetime(6) DEFAULT NULL COMMENT '椅子への状態通知日時',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='ライドステータスの変更履歴テーブル';

CREATE TABLE `rides` (
  `id` varchar(26) NOT NULL COMMENT 'ライドID',
  `user_id` varchar(26) NOT NULL COMMENT 'ユーザーID',
  `chair_id` varchar(26) DEFAULT NULL COMMENT '割り当てられた椅子ID',
  `pickup_latitude` int NOT NULL COMMENT '配車位置(経度)',
  `pickup_longitude` int NOT NULL COMMENT '配車位置(緯度)',
  `destination_latitude` int NOT NULL COMMENT '目的地(経度)',
  `destination_longitude` int NOT NULL COMMENT '目的地(緯度)',
  `evaluation` int DEFAULT NULL COMMENT '評価',
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '要求日時',
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6) COMMENT '状態更新日時',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='ライド情報テーブル';

CREATE TABLE `settings` (
  `name` varchar(30) NOT NULL COMMENT '設定名',
  `value` text NOT NULL COMMENT '設定値',
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='システム設定テーブル';

CREATE TABLE `users` (
  `id` varchar(26) NOT NULL COMMENT 'ユーザーID',
  `username` varchar(30) NOT NULL COMMENT 'ユーザー名',
  `firstname` varchar(30) NOT NULL COMMENT '本名(名前)',
  `lastname` varchar(30) NOT NULL COMMENT '本名(名字)',
  `date_of_birth` varchar(30) NOT NULL COMMENT '生年月日',
  `access_token` varchar(255) NOT NULL COMMENT 'アクセストークン',
  `invitation_code` varchar(30) NOT NULL COMMENT '招待トークン',
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '登録日時',
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6) COMMENT '更新日時',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `access_token` (`access_token`),
  UNIQUE KEY `invitation_code` (`invitation_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='利用者情報テーブル';
