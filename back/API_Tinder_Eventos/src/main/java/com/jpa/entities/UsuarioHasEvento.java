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
@Table(name = "usuariosHasEventos")
public class UsuarioHasEvento {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	@Column(name = "Usuarios_idUsuario")
	Long usuarios_idUsuario;
	
	@Column(name = "Eventos_idEvento")
	Long eventos_idEvento;
	
	@Column(name = "estadoMatch")
	Long estadoMatch;
	
	@Column(name = "estadoEvento")
	Long estadoEvento;

}
