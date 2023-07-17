package weatherGuard.webApp.BackEnd.persistance.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import weatherGuard.webApp.BackEnd.persistance.entities.User;

public interface UserRepository extends MongoRepository<User, String> {
	
}