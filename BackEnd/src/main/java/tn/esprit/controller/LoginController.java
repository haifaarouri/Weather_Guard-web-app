package tn.esprit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;
import tn.esprit.service.classes.MyUserDetailsService;
import tn.esprit.service.interfaces.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/login")
@Slf4j
public class LoginController {
	
	@Autowired
	private MyUserDetailsService userService;
	@Autowired
	private UserService us;
	@Autowired
	private AuthenticationManager authenticationManager;
 
	@RequestMapping(value = "/authenticate/{username}/{password}", method = { RequestMethod.GET })
	public String authenticate(@PathVariable("username") String username, @PathVariable("password") String password) {
		try {
			UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(username, password);
			Authentication authentication = this.authenticationManager.authenticate(token);
			SecurityContextHolder.getContext().setAuthentication(authentication);
			UserDetails userDetails = this.userService.loadUserByUsername(username);
			System.out.println(userDetails);
			return this.us.findUserByEmail(username).getRole().toString();
		} catch (BadCredentialsException bce) {
			System.out.println(bce.getMessage());
			return "null";
 
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return "null";
		}
	}
}
