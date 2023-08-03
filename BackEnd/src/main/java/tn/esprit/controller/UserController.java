package tn.esprit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tn.esprit.persistance.entities.User;
import tn.esprit.service.interfaces.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private UserService userSer;
	
	private BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
	
	@PostMapping(value="/saveUser")
	public User addUser(@RequestBody User u) {
		u.setPassword(bCryptPasswordEncoder.encode(u.getPassword()));
		return userSer.addUser(u);
	}
	
	@GetMapping
	public List<User> getUsers() {
		return userSer.retrieveAllUsers();
	}
	
	@GetMapping("/{userId}")
	public User getUserById(@PathVariable String userId) {
		return userSer.retrieveUser(userId);
	}
	
	@PutMapping
	public User editUser(@RequestBody User u) {
		return userSer.updateUser(u);
	}
	
	@DeleteMapping("/{userId}")
	public String deleteUser(@PathVariable String userId) {
		return userSer.deleteUser(userId);
	}
}

