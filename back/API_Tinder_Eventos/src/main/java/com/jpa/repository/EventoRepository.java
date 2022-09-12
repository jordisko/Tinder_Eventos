package com.jpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jpa.entities.Evento;

@Repository
public interface EventoRepository extends JpaRepository<Evento, Long> {}