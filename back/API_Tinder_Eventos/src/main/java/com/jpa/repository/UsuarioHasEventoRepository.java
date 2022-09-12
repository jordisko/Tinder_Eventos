package com.jpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jpa.entities.UsuarioHasEvento;

@Repository
public interface UsuarioHasEventoRepository extends JpaRepository<UsuarioHasEvento, Long> {}
