package tn.esprit.persistance.entities;

import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Document(collection="users")
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    private String _id;
    private String firstName;
	private String lastName;
	private String email;
	private String password;
	private Date birthDate;
	private Role role;
	private String profilePicture;
	private String gender;
	private boolean active;
	
	@DBRef
	@JsonIgnore
    private List<Location> favouriteLocations;
	
	public List<Location> getFavouriteLocations() {
		return favouriteLocations;
	}

	public void setFavouriteLocations(List<Location> favouriteLocations) {
		this.favouriteLocations = favouriteLocations;
	}

	public User() {
		super();
	}

	public String get_id() {
		return _id;
	}

	public void set_id(String _id) {
		this._id = _id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Date getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(Date birthDate) {
		this.birthDate = birthDate;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public String getProfilePicture() {
		return profilePicture;
	}

	public void setProfilePicture(String profilePicture) {
		this.profilePicture = profilePicture;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public User(String firstName, String lastName, String email, String password, Date birthDate, Role role,
			String profilePicture, String gender) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.birthDate = birthDate;
		this.role = role;
		this.profilePicture = profilePicture;
		this.gender = gender;
	}

	@Override
	public String toString() {
		return "User [_id=" + _id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", password=" + password + ", birthDate=" + birthDate + ", role=" + role + ", profilePicture="
				+ profilePicture + ", gender=" + gender + "]";
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}
	
}