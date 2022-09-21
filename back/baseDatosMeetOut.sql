
DROP DATABASE IF EXISTS `baseDatosMeetOut` ;

CREATE DATABASE IF NOT EXISTS `baseDatosMeetOut`  ;
USE `baseDatosMeetOut` ;

DROP TABLE IF EXISTS `baseDatosMeetOut`.`Usuarios` ;

CREATE TABLE IF NOT EXISTS `baseDatosMeetOut`.`Usuarios` (
  `idUsuario` INT NOT NULL AUTO_INCREMENT,
  `nombreUsuario` VARCHAR(12) NOT NULL,
  `correoElectronico` VARCHAR(45) NOT NULL,
  `contraseniaUsuario` VARCHAR(45) NOT NULL,
  `fotoUsuario` VARCHAR(155) NULL,
  `descripcionUsuario` VARCHAR(155) NULL DEFAULT '\"Aún no he puesto mi descripción\'',
  `nombrePersona` VARCHAR(45) NULL,
  `apellidoPersona` VARCHAR(45) NULL,
  `codigoPostal` VARCHAR(45) NULL,
  PRIMARY KEY (`idUsuario`));

DROP TABLE IF EXISTS `baseDatosMeetOut`.`Eventos` ;

CREATE TABLE IF NOT EXISTS `baseDatosMeetOut`.`Eventos` (
  `idEvento` INT NOT NULL AUTO_INCREMENT,
  `nombreEvento` VARCHAR(30) NOT NULL,
  `descripcionEvento` VARCHAR(155) NOT NULL,
  `codigoPostalLocalizacionEvento` INT(5) NOT NULL,
  `personasMaxEvento` INT(5) NOT NULL,
  `fechaEvento` DATETIME NULL,
  `direccionLocalizacionEvento` VARCHAR(45) NULL,
  `numeroLocalizacionEvento` VARCHAR(15) NULL,
  `tipoDeEvento` VARCHAR(55) NULL,
  `fotoEvento` VARCHAR(155) NULL,
  PRIMARY KEY (`idEvento`));
  


DROP TABLE IF EXISTS `baseDatosMeetOut`.`Match` ;

CREATE TABLE IF NOT EXISTS `baseDatosMeetOut`.`Match` (
  `idMatch` INT NOT NULL AUTO_INCREMENT,
  `Usuarios_idUsuario` INT NOT NULL,
  `Eventos_idEvento` INT NOT NULL,
  `estadoMatch` tinyint NOT NULL DEFAULT 0,
  `estadoEvento` VARCHAR(12) NULL,
  PRIMARY KEY (`idMatch`),
  CONSTRAINT `fk_Match_Usuarios`
    FOREIGN KEY (`Usuarios_idUsuario`)
    REFERENCES `baseDatosMeetOut`.`Usuarios` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Match_Eventos1`
    FOREIGN KEY (`Eventos_idEvento`)
    REFERENCES `baseDatosMeetOut`.`Eventos` (`idEvento`)
    ON DELETE NO ACTION
    ON UPDATE cascade);

#INSERT iNTO basedatosmeetout.usuarios(nombreUsuario, correoElectronico, contraseniaUsuario, fotoUsuario, descripcionUsuario, nombrePersona, apellidoPersona, codigoPostal)
#VALUES


SELECT * from basedatosmeetout.usuarios;
    








