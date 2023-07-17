/*package weatherGuard.webApp.BackEnd.configuration;

import java.io.IOException;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class JwtUsernamePwdAuthFilter extends UsernamePasswordAuthenticationFilter {

	private final AuthenticationManager authManager;
	
	public JwtUsernamePwdAuthFilter(AuthenticationManager authManager) {
		super();
		this.authManager = authManager;
	}
	
	@Override
	public Authentication attemptAuthentication(HttpServletRequest request,HttpServletResponse response) throws AuthenticationException {
		try {
			UsernamePwdAuthRequest authReq = new ObjectMapper().readValue(request.getInputStream(), UsernamePwdAuthRequest.class);
			Authentication authentication = new UsernamePasswordAuthenticationToken(authReq.getUsername(), authReq);
			authManager.authenticate(authentication);
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
		return super.attemptAuthentication(request, response);
	}
}*/