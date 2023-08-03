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
import tn.esprit.service.interfaces.LocationService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/location")
public class LocationController {
	
	@Autowired
	private LocationService locSer;
	
	@PostMapping(value="/saveLocation")
	public Location addLocation(@RequestBody Location u) {
		return locSer.addLocation(u);
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

}
