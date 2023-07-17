package weatherGuard.webApp.BackEnd.persistance.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import weatherGuard.webApp.BackEnd.persistance.entities.Location;

public interface LocationRepository extends MongoRepository<Location, String> {

}
