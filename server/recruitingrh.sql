CREATE DATABASE IF NOT EXISTS recruitingrh;
USE recruitingrh;

CREATE TABLE `aspirantes` (
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


INSERT INTO `aspirantes` (`dni`, `nombre`, `apellido`, `email`, `telefono`, `url_linkedin`, `fecha_de_nacimiento`, `sexo`, `imagen`, `profesion_id`, `createdAt`, `updatedAt`) VALUES
(50964685, 'Jose', 'Bonucci', 'josebonucci.12@gmail.com', '3874532629', 'https://www.linkedin.com/in/jose-bonucci-12b90as', '1993-08-26', 'masculino', '', 1, '2024-02-01 11:49:14', '2024-02-01 11:49:14');


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
  ADD PRIMARY KEY (`dni`);

ALTER TABLE `profesiones`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `profesiones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;
