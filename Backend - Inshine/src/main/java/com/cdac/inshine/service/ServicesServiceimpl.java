package com.cdac.inshine.service;

import java.util.List;
import java.util.Optional;
import com.cdac.inshine.model.ServicesEntity;

public interface ServicesServiceimpl {

	// add location
	ServicesEntity addServices(ServicesEntity service);
	
	// find all location
	List<ServicesEntity> findAllServices();
	
	// find all location by id
	Optional<ServicesEntity> findServicesId(int serviceid);
	
	//Delete location by ID
	List<ServicesEntity> deleteServices(int serviceid);
	
//	//update location by ID
//	ServicesEntity updateServices(ServicesEntity service);
}
