package com.jpa.entities.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jpa.entities.Usuario;
import com.jpa.services.UsuarioService;

import lombok.extern.java.Log;

@Log
@RestController
@RequestMapping
public class LoginController {
	@Autowired(required= false)
	UsuarioService usuarioService;
	
	@RequestMapping(value = "/usuarios")
	public List<Usuario> getUsuarios() {
		log.info("Request a http://localhost:PORT/api/usuarios(GET)");
		return usuarioService.findAllUsuarios();
	}

}
