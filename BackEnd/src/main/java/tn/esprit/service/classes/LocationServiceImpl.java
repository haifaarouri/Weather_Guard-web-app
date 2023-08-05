package tn.esprit.service.classes;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;
import tn.esprit.persistance.entities.Location;
import tn.esprit.persistance.entities.User;
import tn.esprit.persistance.repositories.LocationRepository;
import tn.esprit.persistance.repositories.UserRepository;
import tn.esprit.service.interfaces.LocationService;

@Service
@Slf4j
public class LocationServiceImpl implements LocationService{
	
	@Autowired
	private LocationRepository locRep;
	
	@Autowired
	private UserRepository userRep;

	@Override
	public List<Location> retrieveAllLocations() {
		return locRep.findAll();
	}

	/*@Override
	public Location addLocation(Location u) {
		return locRep.save(u);
	}*/
	
	@Override
	public Location addLocation (Location l, String userId) {
		User user = userRep.findById(userId).orElseThrow(
                () -> new IllegalArgumentException("User not found with id: " + userId));

        l.setUser(user);
        
        Location savedLocation = locRep.save(l);
        
        if (user.getFavouriteLocations() == null) {
            user.setFavouriteLocations(new ArrayList<>());
        } else {
        	int occ = 0;
        	for(int i= 0; i<user.getFavouriteLocations().size() ;i++) {
        		if (user.getFavouriteLocations().get(i).getCity_name() == savedLocation.getCity_name() ) {
        			occ++;
            	}
        	}
        	if (occ == 1) {
        		user.getFavouriteLocations().add(savedLocation);
    	        userRep.save(user);
        	}
        }
        return savedLocation;
	}

	@Override
	public Location updateLocation(Location u) {
		Location l = locRep.findById(u.get_id()).get();
		l.setCity_name(u.getCity_name());
		l.setCountry_code(u.getCountry_code());
		l.setLatitude(u.getLatitude());
		l.setLongitude(u.getLongitude());
		l.setPopulation(u.getPopulation());
		l.setSunrise(u.getSunrise());
		l.setSunset(u.getSunset());
		l.setWeatherDataList(u.getWeatherDataList());
		return locRep.save(l);
	}

	@Override
	public Location retrieveLocation(String idLocation) {
		return locRep.findById(idLocation).get();
	}

	@Override
	public String deleteLocation(String idLocation) {
		locRep.deleteById(idLocation);
		return "Location with id : "+ idLocation + " is deleted successfully !";
	}

	@Override
	public List<Location> getLocationByUser (User u) {
		List<Location> list = locRep.findByUser(u);
		return list;
	}

}
