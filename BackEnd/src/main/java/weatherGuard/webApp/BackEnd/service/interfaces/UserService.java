package weatherGuard.webApp.BackEnd.service.interfaces;

import java.util.List;

import weatherGuard.webApp.BackEnd.persistance.entities.User;

public interface UserService {
	List<User> retrieveAllUsers();
	User addUser (User u);
	User updateUser (User u);
	User retrieveUser (String idUser);
	String deleteUser(String idUser);
}