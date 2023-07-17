package weatherGuard.webApp.BackEnd.service.classes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;
import weatherGuard.webApp.BackEnd.persistance.entities.User;
import weatherGuard.webApp.BackEnd.service.interfaces.UserService;
import weatherGuard.webApp.BackEnd.persistance.repositories.UserRepository;

@Service
@Slf4j
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserRepository userRep;

	@Override
	public User addUser(User u) {
		return userRep.save(u);
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