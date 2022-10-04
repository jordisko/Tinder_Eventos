
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
  `fechaEvento` DATE NULL,
  `horaEvento` TIME NULL,
  `direccionLocalizacionEvento` VARCHAR(45) NULL,
  `tipoDeEvento` VARCHAR(55) NULL,
  `fotoEvento` longtext NULL,
  `estadoEvento` VARCHAR(12) NULL,
  PRIMARY KEY (`idEvento`));
  


DROP TABLE IF EXISTS `baseDatosMeetOut`.`Matches` ;

CREATE TABLE IF NOT EXISTS `baseDatosMeetOut`.`Matches` (
  `idMatch` INT NOT NULL AUTO_INCREMENT,
  `Usuarios_idUsuario` INT NOT NULL,
  `Eventos_idEvento` INT NOT NULL,
  `estadoMatch` tinyint NOT NULL DEFAULT 0,
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
INSERT INTO `Eventos` (`nombreEvento`,`descripcionEvento`,`codigoPostalLocalizacionEvento`,`personasMaxEvento`,`fechaEvento`,`horaEvento`,`direccionLocalizacionEvento`,`tipoDeEvento`,`fotoEvento`,`estadoEvento`)
VALUES
  ("Razzmatazz","Somos 2 personas en busca de grupo para ir juntos a perrear hasta el suelo","08018",5,"2022-10-05","23:00","C/ dels Almogàvers, 122","Disco","https://cdn.bueno-bonito-barcelona.com/wp-content/uploads/sites/2/2016/11/Razzmatazz-violet1.jpg","Disponible"),
  ("Pasear perritos","Venid todos a pasear nuestros perros y poder disfrutar de un buen dia con nuestros amigos perrunos","08013",10,"2022-10-04","16:30","Plaça Sagrada Família","Animales","https://img.huffingtonpost.com/asset/5d7bbeed230000e90352dc39.jpeg?cache=jcub7yj0cG&ops=1778_1000","Disponible"),
  ("Rankeds LOL","Somos un grupo que consiste en un ADC, Support y Top, en busca de Mid y Jungla para jugar competitivamente","08015 ",3,"2022-10-05","13:00","C/ de Sepúlveda, 84","Gaming","https://elitegamingcenter.com/wp-content/uploads/2020/09/barcelona_4.png","Disponible"),
  ("Parrillada Argentina","Quiero probar este restaurante bastante famoso de parrilladas argentinas pero no quiero ir sola, quien quiera apuntarse bienvenid@ sea :D","08013 ",4,"2022-10-08","13:00","Carrer de la Diputació, 379","Comida","https://media-cdn.tripadvisor.com/media/photo-s/0d/dd/35/34/photo1jpg.jpg","Disponible"),
  ("Curso Bootcamp Java","Aqui en Fundació Esplai estamos en busca de nuevos talentos que quieran innovarse en el mundo de la programacion. ¿Te apuntas?","08003",20,"2022-12-11","9:00","Carrer d'En Llàstics 2","Curso","https://formacio.fundesplai.org/wp-content/uploads/2020/09/Llastics_Formacio_Fundesplai_1.jpg","Disponible");

SELECT * from basedatosmeetout.eventos;
    
INSERT INTO `basedatosmeetout`.`usuarios` ( `nombreUsuario`, `correoElectronico`, `contraseniaUsuario`, `fotoUsuario`, `descripcionUsuario`, `nombrePersona`, `apellidoPersona`, `codigoPostal`) VALUES ('jordisko', 'jordicampos.97@gmail.com', '1234', 'https://i.imgur.com/58xTTQM.png', 'Hola, soy Jordi me apasiona la literatura austriaca del siglo XIX y la musica, con muchas ganas de conocer gente con gustos comunes :)', 'Jordi', 'Campos', '08031');
SELECT * from basedatosmeetout.usuarios;

select Usuarios_idUsuario from matches WHERE Eventos_idEvento = 1;


##SELECIONA LOS IDEVENTOS QUE AÚN NO HA DECIDIDO EL USUARIO, ADEMÁS COINCIDE EL CODIGO POSTAL
SELECT IdEvento  from eventos where IdEvento not in (select Eventos_idEvento from Matches where usuarios_idUsuario = 1) AND codigoPostalLocalizacionEvento =ANY(SELECT codigoPostal from usuarios where idUsuario =1);



