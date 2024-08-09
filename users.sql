-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema users_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema users_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `users_db` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8mb3 ;
USE `users_db` ;

-- -----------------------------------------------------
-- Table `users_db`.`tipo_documento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `users_db`.`tipo_documento` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `sigla` VARCHAR(10) NOT NULL,
  `descripcion` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `users_db`.`persona`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `users_db`.`persona` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tipo_documento_id` INT NOT NULL,
  `documento` VARCHAR(30) NOT NULL,
  `nombres` VARCHAR(70) NOT NULL,
  `apellidos` VARCHAR(70) NOT NULL,
  `telefono` VARCHAR(20) NOT NULL,
  `direccion` VARCHAR(60) NOT NULL,
  `estado` TINYINT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_persona_tipo_documento1_idx` (`tipo_documento_id` ASC) VISIBLE,
  CONSTRAINT `fk_persona_tipo_documento1`
    FOREIGN KEY (`tipo_documento_id`)
    REFERENCES `users_db`.`tipo_documento` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `users_db`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `users_db`.`usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_usuario` INT NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `estado` TINYINT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_table1_table2_idx` (`id_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_table1_table2`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `users_db`.`persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO `users_db`.`tipo_documento` (sigla, descripcion) VALUES ("CC", "Cedula de Ciudadania");
INSERT INTO `users_db`.`tipo_documento` (sigla, descripcion) VALUES ("TI", "Tarjeta de Identidad");


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
