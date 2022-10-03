package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Match;
import com.example.demo.repository.MatchRepository;

@Service
public class MatchService {
	@Autowired
	MatchRepository matchRepository;
	
	public List<Match> findAllMatchs() {
		return matchRepository.findAll();
	}

	public Optional<Match> findMatchById(Long id) {
		return matchRepository.findById(id);
	}

	public Match saveMatch(Match match) {
		matchRepository.save(match);
		return match;
	}

	public String deleteMatch(Long id) {
		if (matchRepository.findById(id).isPresent()) {
			matchRepository.deleteById(id);
			return "Match eliminado correctamente.";
		}
		return "Error! El match no existe";
	}

	public String updateMatch(Match matchUpdated) {
		Long num = matchUpdated.getIdMatch();
		if (matchRepository.findById(num).isPresent()) {
			Match matchToUpdate = new Match();
			matchToUpdate.setIdMatch(matchUpdated.getIdMatch());
			matchToUpdate.setUsuarios_idUsuario(matchUpdated.getUsuarios_idUsuario());
			matchToUpdate.setEventos_idEvento(matchUpdated.getEventos_idEvento());
			matchToUpdate.setEstadoMatch(matchUpdated.getEstadoMatch());
			matchToUpdate.setEstadoEvento(matchUpdated.getEstadoEvento());
			matchRepository.save(matchToUpdate);
			return "Match modificado";
		}
		return "Error al modificar el Match";
	}
	
	public List<Match> usuariosEnEvento(long idUsuario) {
			return matchRepository.usuariosEnEvento(idUsuario);
	}

}