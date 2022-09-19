package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Evento;

@Repository
public interface EventoRepository extends JpaRepository<Evento, Long> {}