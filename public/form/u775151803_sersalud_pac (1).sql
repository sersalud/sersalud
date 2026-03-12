-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 12-01-2026 a las 06:50:29
-- Versión del servidor: 11.8.3-MariaDB-log
-- Versión de PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `u775151803_sersalud_pac`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `formularios`
--

CREATE TABLE `formularios` (
  `id` int(11) NOT NULL,
  `paciente_id` int(11) NOT NULL,
  `nombre_completo` varchar(100) DEFAULT NULL,
  `registro_medico` varchar(50) DEFAULT NULL,
  `dpi` varchar(20) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `sexo` char(1) DEFAULT NULL,
  `estado_civil` varchar(30) DEFAULT NULL,
  `direccion` text DEFAULT NULL,
  `contacto_nombre` varchar(100) DEFAULT NULL,
  `contacto_parentesco` varchar(30) DEFAULT NULL,
  `contacto_telefonos` varchar(50) DEFAULT NULL,
  `procedimiento_nombre` varchar(255) DEFAULT NULL,
  `medico_responsable` varchar(100) DEFAULT NULL,
  `procedimiento_fecha` date DEFAULT NULL,
  `estatura` decimal(5,2) DEFAULT NULL,
  `peso` decimal(5,2) DEFAULT NULL,
  `procedimiento_area` varchar(100) DEFAULT NULL,
  `medicamentos` text DEFAULT NULL,
  `operaciones_previas` text DEFAULT NULL,
  `comentarios` text DEFAULT NULL,
  `fecha_guardado` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pacientes`
--

CREATE TABLE `pacientes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `codigo_verificacion` varchar(6) DEFAULT NULL,
  `verificado` tinyint(1) NOT NULL DEFAULT 0,
  `fecha_registro` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `formularios`
--
ALTER TABLE `formularios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `paciente_id` (`paciente_id`);

--
-- Indices de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `correo` (`correo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `formularios`
--
ALTER TABLE `formularios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `formularios`
--
ALTER TABLE `formularios`
  ADD CONSTRAINT `formularios_ibfk_1` FOREIGN KEY (`paciente_id`) REFERENCES `pacientes` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
