package weatherGuard.webApp.BackEnd.controller;

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

import weatherGuard.webApp.BackEnd.persistance.entities.User;
import weatherGuard.webApp.BackEnd.service.interfaces.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private UserService userSer;
	
	@PostMapping(value="/saveUser")
	public User addUser(@RequestBody User u) {
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
