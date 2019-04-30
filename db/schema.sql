-- initialize the Database

DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;


/* Create a table for all your star wars characters */
CREATE TABLE burgers (
	id Int( 11 ) AUTO_INCREMENT NOT NULL,
	burgerName VARCHAR( 255) NOT NULL,
	devoured BOOLEAN NOT NULL DEFAULT FALSE,
	PRIMARY KEY ( id )
);