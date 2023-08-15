package com.example.first.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.first.model.Television;

import java.util.List;
import java.util.Optional;

@Repository
public interface TelevisionRepository extends JpaRepository<Television, Long> {

}
