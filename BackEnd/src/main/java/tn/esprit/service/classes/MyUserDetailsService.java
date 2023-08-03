package tn.esprit.service.classes;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import tn.esprit.persistance.entities.Role;
import tn.esprit.persistance.entities.User;
import tn.esprit.service.interfaces.UserService;

@Service
public class MyUserDetailsService implements UserDetailsService {
	
	@Autowired
	private UserService userService;
	
	@Override
	@Transactional
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = this.userService.findUserByEmail(username);
		List<GrantedAuthority> authorities = getUserAuthority();
		return new org.springframework.security.core.userdetails.User(
				user.getEmail(),user.getPassword(),user.isActive(),true, true, true, authorities);
	}
	
	private List<GrantedAuthority> getUserAuthority(){
		Set<GrantedAuthority> roles = new HashSet<GrantedAuthority>();
		roles.add(new SimpleGrantedAuthority(Role.admin.toString()));
		roles.add(new SimpleGrantedAuthority(Role.simpleUser.toString()));
		roles.add(new SimpleGrantedAuthority(Role.ANAM.toString()));
		roles.add(new SimpleGrantedAuthority(Role.BNSP.toString()));
		roles.add(new SimpleGrantedAuthority(Role.CONASUR.toString()));
		roles.add(new SimpleGrantedAuthority(Role.DGPC.toString()));
		roles.add(new SimpleGrantedAuthority(Role.DGRE.toString()));
		roles.add(new SimpleGrantedAuthority(Role.SAP.toString()));
		return new ArrayList<>(roles);
	}

}
