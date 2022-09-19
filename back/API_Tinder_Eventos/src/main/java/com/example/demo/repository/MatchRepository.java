package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Match;

@Repository
public interface MatchRepository extends JpaRepository<Match, Long> {}
