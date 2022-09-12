package com.jpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jpa.entities.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {}
