package tn.esprit.persistance.repositories;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import tn.esprit.persistance.entities.FileData;

public interface FileDataRepository extends MongoRepository<FileData, String>{

	Optional<FileData> findByName(String fileName);
}
