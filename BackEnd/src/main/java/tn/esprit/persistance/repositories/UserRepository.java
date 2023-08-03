package tn.esprit.persistance.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import tn.esprit.persistance.entities.User;


public interface UserRepository extends MongoRepository<User, String> {
	
	public User findByEmail(String email);
}
