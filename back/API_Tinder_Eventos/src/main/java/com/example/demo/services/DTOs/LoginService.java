package com.example.demo.services.DTOs;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Usuario;
import com.example.demo.entities.DTOs.LoginDTO;
import com.example.demo.repository.UsuarioRepository;

@Service
public class LoginService {
	@Autowired
	UsuarioRepository usuarioRepository;
	
	public List<LoginDTO> findAllUsuarios() {
		List<Usuario> usuarios = usuarioRepository.findAll();
		List<LoginDTO> loginsDTO = new ArrayList<LoginDTO>();
		LoginDTO loginDTO = new LoginDTO();
		usuarios.forEach(element -> {
			loginDTO.setIdUsuario(element.getIdUsuario());
			loginDTO.setNombreUsuario(element.getNombreUsuario());
			loginDTO.setCorreoElectronico(element.getCorreoElectronico());
			loginDTO.setContraseniaUsuario(element.getContraseniaUsuario());
			loginsDTO.add(loginDTO);
		});
		return loginsDTO;
	}
}

