package com.jpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jpa.entities.Usuarios;

@Repository
public interface EventosRepository extends JpaRepository<Eventos, Long> {}

