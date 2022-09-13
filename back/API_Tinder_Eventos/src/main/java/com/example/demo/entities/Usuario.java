package com.example.demo.entities;

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
	
	@Column(name = "idUsuario")
	String idUsuario;
	
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
