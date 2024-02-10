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

