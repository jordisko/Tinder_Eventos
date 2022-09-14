package com.example.demo.entities;

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
	Long descripcionEvento;
	
	@Column(name = "codigopostallocalizacionevento")
	Long codigoPostalLocalizacionEvento;
	
	@Column(name = "personasmaxevento")
	Long personasMaxEvento;
	
	@Column(name = "fechaevento")
	Long fechaEvento;
	
	@Column(name = "direccionlocalizacionevento")
	Long direccionLocalizacionEvento;
	
	@Column(name = "numerolocalizacionevento")
	Long numeroLocalizacionEvento;
}
