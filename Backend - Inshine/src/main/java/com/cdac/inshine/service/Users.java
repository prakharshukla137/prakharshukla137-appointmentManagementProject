package com.cdac.inshine.service;

import java.util.List;
import java.util.Optional;

import com.cdac.inshine.dto.LoginDetails;
import com.cdac.inshine.model.RegisterEntity;


public interface Users {
	
	List<RegisterEntity> getAllUsers();

	Optional<RegisterEntity> FindSystemUserById(int id);

	RegisterEntity addUser(RegisterEntity user);
	
	List<RegisterEntity> deleteUser(int id);
	
//	RegisterEntity validateLoginDetails(LoginDetails loginCred);
}
