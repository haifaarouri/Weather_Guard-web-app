package tn.esprit.service.interfaces;

import java.util.List;

import tn.esprit.persistance.entities.Location;
import tn.esprit.persistance.entities.User;

public interface LocationService {

	List<Location> retrieveAllLocations();
	Location addLocation (Location u, String userId);
	Location updateLocation (Location u);
	Location retrieveLocation (String idLocation);
	String deleteLocation (String idLocation);
	List<Location> getLocationByUser (User u);
}
