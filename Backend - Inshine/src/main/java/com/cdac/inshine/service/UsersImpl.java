package com.cdac.inshine.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.cdac.inshine.dao.RegisterDao;
import com.cdac.inshine.dto.LoginDetails;
import com.cdac.inshine.model.RegisterEntity;

@Service
public class UsersImpl implements Users {

	@Autowired
	private RegisterDao registerDao;// service class and dao class are now autowired  
	
	public UsersImpl() {
		System.out.println("In def constructor ... "+getClass().getName());
	}
@Autowired	
private  BCryptPasswordEncoder passwordEncoder;
    
//    public UsersImpl(BCryptPasswordEncoder passwordEncoder) {
//        this.passwordEncoder = passwordEncoder;
//    }

	@Override //done
	public List<RegisterEntity> getAllUsers() {
		
		return registerDao.findAll();	

	}
	
	@Override // done
	public RegisterEntity addUser(RegisterEntity user) {
		try {
			
			String rawPass= user.getPassword();
			String encPass=passwordEncoder.encode(rawPass);
			user.setPassword(encPass);
			
			return registerDao.save(user);
		}catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}	
	
	@Override //done
	public Optional<RegisterEntity> FindSystemUserById(int id) {
		
		return registerDao.existsById(id) ? registerDao.findById(id) : null;
	}
	
	@Override
	public List<RegisterEntity> deleteUser(int id) {
		
		registerDao.deleteById(id);
		return registerDao.findAll();
	}
//
//	if(user.getEmail_id().equals(loginCred.getemail_id()) && user.getPassword().equals(loginCred.getpassword())) {
//		return user;
//	@Override
//	public RegisterEntity validateLoginDetails(LoginDetails loginCred) {
//		List<RegisterEntity> registerUser = registerDao.findAll();
//		String rawPassword = loginCred.getPassword();
//		for(RegisterEntity user : registerUser) {
//			
//			if(registerUser!=null&& user.getEmail_id().equals(loginCred.getUsername()) && passwordEncoder.matches(rawPassword,user.getPassword())) {
//				return user;
//			}
//		}
//		return null;
//	}
	
	


	


	
}
