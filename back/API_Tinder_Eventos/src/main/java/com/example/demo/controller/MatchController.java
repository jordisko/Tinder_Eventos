package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Match;
import com.example.demo.services.MatchService;

import lombok.extern.java.Log;

@Log
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController

public class MatchController {
	@Autowired(required = false)
	MatchService matchService;
	
	@RequestMapping(value = "/matches")
	public List<Match> getMatches(){
		log.info("Request a http://localhost:PORT/api/matches(GET)");
		return matchService.findAllMatchs();
	}
	
	@RequestMapping(value = "/usuariosEnEvento/{idUsuario}")
	public List<Match> getUsuariosEnEvento(@PathVariable long idUsuario){
		log.info("Request a http://localhost:PORT/api/matches(GET)");
		return matchService.usuariosEnEvento(idUsuario);
	}
}
