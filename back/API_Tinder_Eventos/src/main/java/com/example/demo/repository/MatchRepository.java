package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Match;

@Repository
public interface MatchRepository extends JpaRepository<Match, Long> {
	
	@Query(value = "SELECT m.Usuarios_idUsuario FROM matches m WHERE m.Eventos_idEvento = %?1% AND m.estadoMatch = 1", nativeQuery = true)
	List<Match> usuariosEnEvento(long idUsuario);
	
}
