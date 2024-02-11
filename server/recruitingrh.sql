CREATE DATABASE IF NOT EXISTS recruitingrh;
USE recruitingrh;

CREATE TABLE `candidates` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `dni` int(11) NOT NULL UNIQUE,
  `name` varchar(50) NOT NULL,
  `surname` varchar(45) NOT NULL,
  `email` varchar(100) NOT NULL UNIQUE,
  `phoneNumber` varchar(30) DEFAULT NULL,
  `linkedin` varchar(100) DEFAULT NULL,
  `birthdate` date NOT NULL,
  `gender` enum('female','male','other') NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `professionId` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL
); 

CREATE TABLE `professions` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(35) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL
);
ALTER TABLE `candidates`
ADD CONSTRAINT `fk_professionId`
FOREIGN KEY (`professionId`)
REFERENCES `professions` (`id`);




INSERT INTO `professions` (`id`, `name`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'abogado', '2024-02-11 00:49:36', '2024-02-11 00:49:36', NULL),
(2, 'arquitecto', '2024-02-11 00:49:52', '2024-02-11 00:49:52', NULL),
(3, 'botánico', '2024-02-11 00:50:30', '2024-02-11 00:50:30', NULL),
(4, 'computista', '2024-02-11 00:50:44', '2024-02-11 00:50:44', NULL),
(5, 'economista', '2024-02-11 00:50:54', '2024-02-11 00:50:54', NULL),
(6, 'técnico de sonido', '2024-02-11 00:51:10', '2024-02-11 00:51:10', NULL),
(7, 'profesor', '2024-02-11 00:51:17', '2024-02-11 00:51:17', NULL),
(8, 'linguista', '2024-02-11 00:51:25', '2024-02-11 00:51:25', NULL);

