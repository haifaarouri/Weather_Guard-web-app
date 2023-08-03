package tn.esprit.persistance.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import tn.esprit.persistance.entities.Location;

public interface LocationRepository extends MongoRepository<Location, String> {

}
