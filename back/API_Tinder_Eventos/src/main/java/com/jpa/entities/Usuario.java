package com.jpa.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "usuarios")
public class Usuario {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	@Column(name = "idusuario")
	Long idUsuario;
	
	@Column(name = "nombreusuario")
	String nombreUsuario;
	
	@Column(name = "correoelectronico")
	String correoElectronico;
	
	@Column(name = "contraseniausuario")
	String contraseniaUsuario;
	
	@Column(name = "fotousuario")
	String fotoUsuario;
	
	@Column(name = "descripcionusuario")
	String descripcionUsuario;
	
	@Column(name = "nombrepersona")
	String nombrePersona;
	
	@Column(name = "apellidopersona")
	String apellidoPersona;
	
	@Column(name = "codigopostal")
	String codigoPostal;
	
}
