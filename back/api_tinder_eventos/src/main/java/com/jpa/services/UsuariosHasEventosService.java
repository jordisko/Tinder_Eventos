package com.jpa.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jpa.repository.UsuariosHasEventosRepository;


@Service
public class UsuariosHasEventosService{
	@Autowired
	UsuariosHasEventosRepository usuariosHasEventosRepository;
	public List<UsuariosHasEventos> 
}