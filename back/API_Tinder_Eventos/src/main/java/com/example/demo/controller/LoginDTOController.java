package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.DTOs.LoginDTO;
import com.example.demo.services.DTOs.LoginService;

import lombok.extern.java.Log;

@Log
@RestController
public class LoginDTOController {
	@Autowired(required= false)
	LoginService loginService;
	
	@RequestMapping(path = "/login")
	public List<LoginDTO> getUsuarios() {
		log.info("Request a http://localhost:PORT/api/login(GET)");
		return loginService.findAllUsuarios();
	}


}
