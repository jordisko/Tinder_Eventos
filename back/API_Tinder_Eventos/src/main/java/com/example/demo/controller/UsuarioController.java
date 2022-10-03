package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Usuario;
import com.example.demo.services.UsuarioService;

import lombok.extern.java.Log;

@Log
@CrossOrigin(origins ="*", maxAge = 3600)
@RestController
@RequestMapping(produces="application/json")
public class UsuarioController {
	@Autowired(required= false)
	UsuarioService usuarioService;
	
	@RequestMapping(path = "/usuarios",method = RequestMethod.GET)
	public List<Usuario> getUsuarios() {
		log.info("Request a http://localhost:PORT/api/usuarios(GET)");
		return usuarioService.findAllUsuarios();
	}
	@RequestMapping(path = "/crearusuarios",method = RequestMethod.PUT)
	public void putUsuarios(@RequestBody(required=false) Usuario usuario){
		System.err.println(usuario.toString());
		log.info("Request a http://localhost:PORT/api/crearusuarios(PUT)");
		usuarioService.saveUsuario(usuario);
	}
	@RequestMapping(path = "/usuarios/{id}",method = RequestMethod.GET)
	public Optional<Usuario> getUsuarioById(@PathVariable long id) {
		log.info("Request a http://localhost:PORT/api/usuarios(GET)");
		return usuarioService.findUsuarioById(id);
}
	@RequestMapping(path = "/crearusuarios/{id}", method = RequestMethod.PUT)
	public void modificaUsuario(@PathVariable long id, @RequestBody(required=false) Usuario usuario){
		log.info("Request a http://localhost:PORT/api/crearusuarios(PUT)");
		usuarioService.updateUsuario(usuario);
	}
}
