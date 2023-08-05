package tn.esprit.persistance.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import tn.esprit.persistance.entities.Location;
import tn.esprit.persistance.entities.User;

public interface LocationRepository extends MongoRepository<Location, String> {

	List<Location> findByUser(User user);
}
