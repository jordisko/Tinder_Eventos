package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Evento;
import com.example.demo.repository.EventoRepository;

@Service
public class EventoService {
	@Autowired
	EventoRepository eventoRepository;
	
	public List<Evento> findAllEventos() {
		return eventoRepository.findAll();
	}

	public Optional<Evento> findEventoById(Long id) {
		return eventoRepository.findById(id);
	}

	public Evento saveEvento(Evento evento) {
		eventoRepository.save(evento);
		return evento;
	}

	public String deleteEvento(Long id) {
		if (eventoRepository.findById(id).isPresent()) {
			eventoRepository.deleteById(id);
			return "Evento eliminado correctamente.";
		}
		return "Error! El evento no existe";
	}

	public String updateEvento(Evento eventoUpdated) {
		Long num = eventoUpdated.getIdEvento();
		if (eventoRepository.findById(num).isPresent()) {
			Evento eventoToUpdate = new Evento();
			eventoToUpdate.setIdEvento(eventoUpdated.getIdEvento());
			eventoToUpdate.setNombreEvento(eventoUpdated.getNombreEvento()); 
			eventoToUpdate.setDescripcionEvento(eventoUpdated.getDescripcionEvento());
			eventoToUpdate.setCodigoPostalLocalizacionEvento(eventoUpdated.getCodigoPostalLocalizacionEvento());
			eventoToUpdate.setPersonasMaxEvento(eventoUpdated.getPersonasMaxEvento());
			eventoToUpdate.setFechaEvento(eventoUpdated.getFechaEvento());
			eventoToUpdate.setDireccionLocalizacionEvento(eventoUpdated.getDireccionLocalizacionEvento());
			eventoToUpdate.setNumeroLocalizacionEvento(eventoUpdated.getNumeroLocalizacionEvento());
			eventoRepository.save(eventoToUpdate);
			return "Evento modificado";
		}
		return "Error al modificar el Evento";
	}

}