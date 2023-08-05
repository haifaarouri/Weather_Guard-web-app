package tn.esprit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tn.esprit.persistance.entities.Location;
import tn.esprit.persistance.entities.User;
import tn.esprit.service.interfaces.LocationService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/location")
public class LocationController {
	
	@Autowired
	private LocationService locSer;
	
	@PostMapping(value="/saveLocation/{id}")
	public Location addLocation(@RequestBody Location u, @PathVariable String id) {
		return locSer.addLocation(u, id);
	}
	
	@GetMapping
	public List<Location> getLocations() {
		return locSer.retrieveAllLocations();
	}
	
	@GetMapping("/{locId}")
	public Location getLocationById(@PathVariable String locId) {
		return locSer.retrieveLocation(locId);
	}
	
	@PutMapping
	public Location editLocation(@RequestBody Location u) {
		return locSer.updateLocation(u);
	}
	
	@DeleteMapping("/{locId}")
	public String deleteLocation(@PathVariable String locId) {
		return locSer.deleteLocation(locId);
	}

	@PostMapping(value="/user-locations")
	public List<Location> getUserLocations(@RequestBody User u ) {
		return locSer.getLocationByUser(u);
	}
}
