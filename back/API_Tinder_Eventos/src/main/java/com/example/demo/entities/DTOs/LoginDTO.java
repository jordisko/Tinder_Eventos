package com.example.demo.entities.DTOs;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class LoginDTO {
	Long idUsuario;
	String nombreUsuario;
	String correoElectronico;
	String contraseniaUsuario;
}
