package com.cdac.inshine.service;

import java.util.List;
import java.util.Optional;
import com.cdac.inshine.model.LocationEntity;


public interface LocationServiceimpl {

	// add location
	LocationEntity addlocation(LocationEntity location);
	
	// find all location
	List<LocationEntity> findAllocation();
	
	// find all location by id
	Optional<LocationEntity> findlocationId(int locationid);
	
	//Delete location by ID
	List<LocationEntity> deletelocation(int locationid);
	
	//update location by ID
	LocationEntity updatelocation(LocationEntity location);
}


