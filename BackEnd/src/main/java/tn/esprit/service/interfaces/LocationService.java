package tn.esprit.service.interfaces;

import java.util.List;

import tn.esprit.persistance.entities.Location;

public interface LocationService {

	List<Location> retrieveAllLocations();
	Location addLocation (Location u);
	Location updateLocation (Location u);
	Location retrieveLocation (String idLocation);
	String deleteLocation (String idLocation);
}
