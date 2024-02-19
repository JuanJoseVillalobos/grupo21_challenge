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
(1, 'abogado', '2024-02-11 03:49:36', '2024-02-11 03:49:36', NULL),
(2, 'arquitecto', '2024-02-11 03:49:52', '2024-02-11 03:49:52', NULL),
(3, 'botánico', '2024-02-11 03:50:30', '2024-02-11 03:50:30', NULL),
(4, 'computista', '2024-02-11 03:50:44', '2024-02-11 03:50:44', NULL),
(5, 'economista', '2024-02-11 03:50:54', '2024-02-11 03:50:54', NULL),
(6, 'técnico de sonido', '2024-02-11 03:51:10', '2024-02-11 03:51:10', NULL),
(7, 'profesor', '2024-02-11 03:51:17', '2024-02-11 03:51:17', NULL),
(8, 'linguista', '2024-02-11 03:51:25', '2024-02-11 03:51:25', NULL),
(9, 'estudiante', '2024-02-19 21:41:59', '2024-02-19 21:41:59', NULL);

INSERT INTO `candidates` (`id`, `dni`, `name`, `surname`, `email`, `phoneNumber`, `linkedin`, `birthdate`, `gender`, `image`, `professionId`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 46934967, 'Juan', 'Villalobos', 'juanjosevillalobos.19@gmail.com', '3884091630', 'https://www.linkedin.com/in/juan-jos%C3%A9-villalobos-b98741265/', '2006-03-19', 'male', NULL, 9, '2024-02-11 03:57:59', '2024-02-19 21:42:18', NULL),
(2, 43698776, 'Francisco Javier', 'Paredes', 'franpa619@gmail.com', '3883330889', 'https://www.linkedin.com/in/francisco-paredes-354a2b26b/', '2001-10-15', 'male', NULL, 9, '2024-02-11 04:02:32', '2024-02-19 21:42:25', NULL),
(3, 48016788, 'Giuliana Nahir', 'Bazzi', 'zulemanahir13@gmail.com', '3888573604', NULL, '2007-05-07', 'female', NULL, 9, '2024-02-11 04:03:49', '2024-02-19 21:42:30', NULL),
(4, 47439466, 'Lucía Aymé', 'Andrade', 'aymeandrade2006@gmail.com', '3884707993', 'https://www.linkedin.com/in/luc%C3%ADa-aym%C3%A9-andrade-698b382b2/', '2006-09-19', 'female', NULL, 9, '2024-02-11 04:05:38', '2024-02-19 21:42:35', NULL);
