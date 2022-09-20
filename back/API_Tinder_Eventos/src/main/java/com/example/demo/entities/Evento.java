package com.example.demo.entities;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "eventos")
public class Evento {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	@Column(name = "idevento")
	Long idEvento;
	
	@Column(name = "descripcionevento")
	String descripcionEvento;
	
	@Column(name = "codigopostallocalizacionevento")
	String codigoPostalLocalizacionEvento;
	
	@Column(name = "personasmaxevento")
	int personasMaxEvento;
	
	@Column(name = "fechaevento")
	Date fechaEvento;
	
	@Column(name = "direccionlocalizacionevento")
	String direccionLocalizacionEvento;
	
	@Column(name = "numerolocalizacionevento")
	String numeroLocalizacionEvento;
}
