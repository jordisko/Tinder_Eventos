package com.jpa.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jpa.entities.Usuario;
import com.jpa.repository.UsuarioRepository;

@Service
public class UsuarioService {
	@Autowired
	UsuarioRepository usuarioRepository;
	
	public List<Usuario> findAllUsuarios() {
		return usuarioRepository.findAll();
	}

	public Optional<Usuario> findUsuarioById(Long id) {
		return usuarioRepository.findById(id);
	}

	public Usuario saveUsuario(Usuario usuario) {
		usuarioRepository.save(usuario);
		return usuario;
	}

	public String deleteUsuario(Long id) {
		if (usuarioRepository.findById(id).isPresent()) {
			usuarioRepository.deleteById(id);
			return "Usuario eliminado correctamente.";
		}
		return "Error! El usuario no existe";
	}

	public String updateUsuario(Usuario usuarioUpdated) {
		Long num = usuarioUpdated.getIdUsuario();
		if (usuarioRepository.findById(num).isPresent()) {
			Usuario usuarioToUpdate = new Usuario();
			usuarioToUpdate.setIdUsuario(usuarioUpdated.getIdUsuario());
			usuarioToUpdate.setNombreUsuario(usuarioUpdated.getNombreUsuario());
			usuarioToUpdate.setCorreoElectronico(usuarioUpdated.getCorreoElectronico());
			usuarioToUpdate.setContraseniaUsuario(usuarioUpdated.getContraseniaUsuario());
			usuarioToUpdate.setFotoUsuario(usuarioUpdated.getFotoUsuario());
			usuarioToUpdate.setDescripcionUsuario(usuarioUpdated.getDescripcionUsuario());
			usuarioToUpdate.setNombrePersona(usuarioUpdated.getNombrePersona());
			usuarioToUpdate.setApellidoPersona(usuarioUpdated.getApellidoPersona());
			usuarioToUpdate.setCodigoPostal(usuarioUpdated.getCodigoPostal());
			usuarioRepository.save(usuarioToUpdate);
			return "Usuario modificado";
		}
		return "Error al modificar el Usuario";
	}

}