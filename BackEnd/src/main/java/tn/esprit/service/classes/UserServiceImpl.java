package tn.esprit.service.classes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;
import tn.esprit.persistance.entities.Role;
import tn.esprit.persistance.entities.User;
import tn.esprit.persistance.repositories.UserRepository;
import tn.esprit.service.interfaces.UserService;

@Service
@Slf4j
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserRepository userRep;
	
	public User findUserByEmail(String unserName) {
		return this.userRep.findByEmail(unserName);
	}
	
	public User addUser(User e) {
		User u = new User();
		u.setEmail(e.getEmail());
		u.setBirthDate(e.getBirthDate());
		u.setFirstName(e.getFirstName());
		u.setGender(e.getGender());
		u.setLastName(e.getLastName());
		u.setProfilePicture(e.getProfilePicture());
		u.setRole(Role.simpleUser);
		u.setPassword(e.getPassword());
		u.setActive(true);
		return this.userRep.save(u);
	}

	@Override
	public List<User> retrieveAllUsers() {
		return userRep.findAll();
	}

	@Override
	public User updateUser(User u) {
		User user = userRep.findById(u.get_id()).get();
		user.setBirthDate(u.getBirthDate());
		user.setEmail(u.getEmail());
		user.setFirstName(u.getFirstName());
		user.setGender(u.getGender());
		user.setLastName(u.getLastName());
		user.setPassword(u.getPassword());
		user.setProfilePicture(u.getProfilePicture());
		user.setRole(u.getRole());
		return userRep.save(user);
	}

	@Override
	public User retrieveUser(String idUser) {
		return userRep.findById(idUser).get();
	}

	@Override
	public String deleteUser(String idUser) {
		userRep.deleteById(idUser);
		return "User with the id : "+ idUser + " is deleted successfully !";
	}
	
}