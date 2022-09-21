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
@Table(name = "Match")
public class Match {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	@Column(name = "Idmatch")
	Long idMatch;
	
	@Column(name = "Usuarios_idusuario")
	String usuarios_idUsuario;
	
	@Column(name = "Eventos_idevento")
	String eventos_idEvento;
	
	@Column(name = "estadomatch")
	int estadoMatch;
	
	@Column(name = "estadoevento")
	String estadoEvento;

}
