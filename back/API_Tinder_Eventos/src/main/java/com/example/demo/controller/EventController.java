package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.services.EventoService;
import com.example.demo.entities.Evento;

import lombok.extern.java.Log;

@Log
@RestController
public class EventController {
	@Autowired(required = false)
	EventoService eventoservice;
	
	@RequestMapping(value = "/eventos")
	public List<Evento> getEventos(){
		log.info("Request a http://localhost:PORT/api/eventos(GET)");
		return eventoservice.findAllEventos();
	}
}
