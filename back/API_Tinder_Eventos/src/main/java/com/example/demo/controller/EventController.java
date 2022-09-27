package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.services.EventoService;
import com.example.demo.entities.Evento;


import lombok.extern.java.Log;

@Log
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController

public class EventController {
	@Autowired(required = false)
	EventoService eventoService;
	
	@RequestMapping(value = "/eventos")
	public List<Evento> getEventos(){
		log.info("Request a http://localhost:PORT/api/eventos(GET)");
		return eventoService.findAllEventos();
	}
	
	@RequestMapping(path = "/creareventos",method = RequestMethod.PUT)
	public void putEventos(@RequestBody(required=false)Evento evento){
		System.err.println(evento.toString());
		log.info("Request a http://localhost:PORT/api/creareventos(PUT)");
		eventoService.saveEvento(evento);
		System.out.println(evento);
	}
	@RequestMapping(path = "/eventos/{id}",method = RequestMethod.GET)
	public Optional<Evento> getEventoById(@PathVariable long id) {
		log.info("Request a http://localhost:PORT/api/eventos(GET)");
		return eventoService.findEventoById(id);}
	
}
