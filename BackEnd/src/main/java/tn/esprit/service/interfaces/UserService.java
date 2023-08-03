package tn.esprit.service.interfaces;

import java.util.List;

import tn.esprit.persistance.entities.User;

public interface UserService {
	List<User> retrieveAllUsers();
	User addUser (User u);
	User updateUser (User u);
	User retrieveUser (String idUser);
	String deleteUser(String idUser);
	public User findUserByEmail(String email);
}