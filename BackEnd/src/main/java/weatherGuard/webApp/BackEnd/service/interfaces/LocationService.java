package weatherGuard.webApp.BackEnd.service.interfaces;

import java.util.List;

import weatherGuard.webApp.BackEnd.persistance.entities.Location;

public interface LocationService {

	List<Location> retrieveAllLocations();
	Location addLocation (Location u);
	Location updateLocation (Location u);
	Location retrieveLocation (String idLocation);
	String deleteLocation (String idLocation);
}
