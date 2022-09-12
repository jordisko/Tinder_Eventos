package com.jpa.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jpa.repository.EventosRepository;


@Service
public class EventosService{
	@Autowired
	EventosRepository eventoRepository;
	public List<Eventos> 
}