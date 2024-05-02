package com.cdac.inshine.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cdac.inshine.dto.LoginDetails;
import com.cdac.inshine.model.RegisterEntity;
import com.cdac.inshine.service.JwtService;
import com.cdac.inshine.service.Users;

@CrossOrigin
@RestController
@RequestMapping
public class RegisterController {
	
	@Autowired
	private Users users; 
	@Autowired
	private JwtService jwtService;
	@Autowired
	private AuthenticationManager authenticationManager;
	
	public RegisterController() {

		System.err.println("In def consteuctor ..."+getClass().getName());
	}
	
	@PostMapping("/register")
	public ResponseEntity<?> registerUser(@RequestBody RegisterEntity user) {
		System.err.println("Received User for registration : "+user);
		try {
			return new ResponseEntity<>(users.addUser(user), HttpStatus.OK);
			
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.BAD_GATEWAY);
		}
		
	}
	
//	//Login method
//	@PostMapping("/login")
//	public 
//			RegisterEntity validUser = users.validateLoginDetails(loginCred);
//			ResponseEntity<?> validateLoginDetails(@RequestBody LoginDetails loginCred) {
//		try {
//			if(validUser==null) {
//				System.err.println("No user exist with given credentials ");
//			}
//			else
//				System.out.println("User validated");
//			return new ResponseEntity<>(validUser, HttpStatus.OK);
//		}catch (Exception e) {
//			e.printStackTrace();
//			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//		}
//		
//	}
	
    @PostMapping("/authenticate")
    public String authenticateAndGetToken(@RequestBody LoginDetails authRequest) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getpassword()));
        if (authentication.isAuthenticated()) {
            return jwtService.generateToken(authRequest.getUsername());
        } else {
            throw new UsernameNotFoundException("invalid user request !");
        }


    }
	
	
	
	
	
	
	
	@GetMapping("/getuser/{userID}")
	public ResponseEntity<?> getUser(@PathVariable int userID)
	{
		System.out.println("Received Id : "+userID);
		try {
			return new ResponseEntity<>(users.FindSystemUserById(userID), HttpStatus.OK);
		} catch (Exception e) {
			System.out.println("In register controller get user catch block ");
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping("/getAllUsers")
	public ResponseEntity<?> getAllUsers(){
		System.out.println("In get all users of class "+getClass().getName());
		try {
			return new ResponseEntity<>(users.getAllUsers(), HttpStatus.OK);
		}catch (Exception e) {
			System.out.println("IN catch block of getAll users "+getClass().getName());
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@DeleteMapping("/deleteuser/{userID}")
	public ResponseEntity<?> deleteUser(@PathVariable int userID)
	{
		System.out.println("Received Id : "+userID);
		try {
			return new ResponseEntity<>(users.deleteUser(userID), HttpStatus.OK);
		} catch (Exception e) {
			System.out.println("In system user controller get user catch block ");
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
