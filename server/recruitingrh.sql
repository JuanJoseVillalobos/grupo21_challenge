CREATE DATABASE IF NOT EXISTS recruitingrh;
USE recruitingrh;

<<<<<<< HEAD
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
=======
CREATE TABLE `aspirantes` (
  `id` int(11) NOT NULL,
  `dni` int(11) UNIQUE NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `telefono` varchar(25) NOT NULL,
  `urlLinkedin` varchar(255) NOT NULL, 
  `fechaNacimiento` date NOT NULL,
  `sexo` varchar(255) NOT NULL,
  `imagen` varchar(255),
  `profesionId` int(11) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
)
>>>>>>> 517b3164d95b0dba0b9afa6c2e961c4f4c2f04c9

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

<<<<<<< HEAD
=======
INSERT INTO `aspirantes` (`id`, `dni`, `nombre`, `apellido`, `email`, `telefono`, `urlLinkedin`, `fechaNacimiento`, `sexo`, `imagen`, `profesionId`, `createdAt`, `updatedAt`) VALUES
(1, 50964685, 'Jose', 'Bonucci', 'josebonucci.12@gmail.com', '3874532629', 'https://www.linkedin.com/in/jose-bonucci-12b90as', '1993-08-26', 'masculino', '', 1, '2024-02-01 11:49:14', '2024-02-01 11:49:14'),
(2, 47439466, 'Lucía', 'Andrade', 'aymeandrade2006@gmail.com', 3884707993, 'https://www.linkedin.com/in/lucía-aymé-andrade-698b382b2/', '2006-09-19', 'femenino', '', 1, '2024-02-08 15:49:00', '2024-02-08 15:49:00')
(3, 43698776, 'Francisco', 'Paredes', 'franpa619@gmail.com', 3883330889, 'https://www.linkedin.com/in/francisco-paredes-354a2b26b/', '2001-10-15', 'masculino', , 1, '2024-02-08 15:53:00', '2024-02-08 15:53:00')
(4, 48016788, 'Giuliana', 'Bazzi', 'zulemanahir13@gmail.com', 3888573604, '', '2007-05-07', 'femenino', ' ', '1', '2024-02-08 15:55:00', '2024-02-08 15:55:00')


CREATE TABLE `profesiones` (
  `id` int(11) NOT NULL,
  `profesion` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) 

INSERT INTO `profesiones` (`id`, `profesion`) VALUES
(1, 'Abogado'),
(2, 'Arquitecto'),
(3, 'Botánico'),
(4, 'Computista'),
(5, 'Economista'),
(6, 'Técnico de sonido'),
(7, 'Profesor'),
(8, 'Linguista');


ALTER TABLE `aspirantes`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `profesiones`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `profesiones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;
>>>>>>> 517b3164d95b0dba0b9afa6c2e961c4f4c2f04c9
