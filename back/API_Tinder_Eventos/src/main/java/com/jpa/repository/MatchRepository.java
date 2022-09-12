package com.jpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jpa.entities.Match;

@Repository
public interface MatchRepository extends JpaRepository<Match, Long> {}
