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
@Table(name = "Matches")
public class Match {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	@Column(name = "Idmatch")
	Long idMatch;
	
	@Column(name = "Usuarios_idusuario")
	Long usuarios_idUsuario;
	
	@Column(name = "Eventos_idevento")
	Long eventos_idEvento;
	
	@Column(name = "estadomatch")
	int estadoMatch;
	
	@Column(name = "estadoevento")
	String estadoEvento;

}
