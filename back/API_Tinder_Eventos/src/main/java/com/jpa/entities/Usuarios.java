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
@Table(name = "usuarios")
public class Usuarios {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	@Column(name = "idUsuario")
	Long idUsuario;
	
	@Column(name = "nombreUsuario")
	Long nombreUsuario;
	
	@Column(name = "correoElectronico")
	Long correoElectronico;
	
	@Column(name = "contraseniaUsuario")
	Long contraseniaUsuario;
	
	@Column(name = "fotoUsuario")
	Long fotoUsuario;
	
	@Column(name = "descripcionUsuario")
	Long descripcionUsuario;
	
	@Column(name = "nombrePersona")
	Long nombrePersona;
	
	@Column(name = "apellidoPersona")
	Long apellidoPersona;
	
	@Column(name = "codigoPostal")
	Long codigoPostal;
}
