package com.jpa.entities;

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
public class Eventos {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	@Column(name = "idEvento")
	Long idEvento;
	
	@Column(name = "descripcionEvento")
	Long descripcionEvento;
	
	@Column(name = "codigoPostalLocalizacionEvento")
	Long codigoPostalLocalizacionEvento;
	
	@Column(name = "personasMaxEvento")
	Long personasMaxEvento;
	
	@Column(name = "fechaEvento")
	Long fechaEvento;
	
	@Column(name = "direccionLocalizacionEvento")
	Long direccionLocalizacionEvento;
	
	@Column(name = "numeroLocalizacionEvento")
	Long numeroLocalizacionEvento;
}
