
DROP DATABASE IF EXISTS `baseDatosMeetOut` ;

CREATE DATABASE IF NOT EXISTS `baseDatosMeetOut`  ;
USE `baseDatosMeetOut` ;

DROP TABLE IF EXISTS `baseDatosMeetOut`.`Usuarios` ;

CREATE TABLE IF NOT EXISTS `baseDatosMeetOut`.`Usuarios` (
  `idUsuario` INT NOT NULL AUTO_INCREMENT,
  `nombreUsuario` VARCHAR(12) NOT NULL,
  `correoElectronico` VARCHAR(45) NOT NULL,
  `contraseñaUsuario` VARCHAR(45) NOT NULL,
  `fotoUsuario` VARCHAR(155) NULL,
  `descripcionUsuario` VARCHAR(155) NULL DEFAULT '\"Aún no he puesto mi descripción\'',
  `nombrePersona` VARCHAR(45) NULL,
  `apellidoPersona` VARCHAR(45) NULL,
  `codigoPostal` VARCHAR(45) NULL,
  PRIMARY KEY (`idUsuario`));

DROP TABLE IF EXISTS `baseDatosMeetOut`.`Eventos` ;

CREATE TABLE IF NOT EXISTS `baseDatosMeetOut`.`Eventos` (
  `idEvento` INT NOT NULL AUTO_INCREMENT,
  `descripcionEvento` VARCHAR(155) NOT NULL,
  `codigoPostalLocalizacionEvento` INT(5) NOT NULL,
  `personasMaxEvento` INT(5) NOT NULL,
  `fechaEvento` DATETIME NULL,
  `direccionLocalizacionEvento` VARCHAR(45) NULL,
  `numeroLocalizacionEvento` VARCHAR(15) NULL,
  PRIMARY KEY (`idEvento`));


DROP TABLE IF EXISTS `baseDatosMeetOut`.`Usuarios_has_Eventos` ;

CREATE TABLE IF NOT EXISTS `baseDatosMeetOut`.`Usuarios_has_Eventos` (
  `Usuarios_idUsuario` INT NOT NULL,
  `Eventos_idEvento` INT NOT NULL,
  `estadoMatch` VARCHAR(12) NOT NULL DEFAULT 'pendiente',
  `estadoEvento` VARCHAR(12) NULL,
  PRIMARY KEY (`Usuarios_idUsuario`, `Eventos_idEvento`),
  CONSTRAINT `fk_Usuarios_has_Eventos_Usuarios`
    FOREIGN KEY (`Usuarios_idUsuario`)
    REFERENCES `baseDatosMeetOut`.`Usuarios` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuarios_has_Eventos_Eventos1`
    FOREIGN KEY (`Eventos_idEvento`)
    REFERENCES `baseDatosMeetOut`.`Eventos` (`idEvento`)
    ON DELETE NO ACTION
    ON UPDATE cascade);
    







