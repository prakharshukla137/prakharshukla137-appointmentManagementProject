package com.cdac.inshine.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cdac.inshine.dao.LocationDao;
import com.cdac.inshine.model.LocationEntity;
import jakarta.transaction.Transactional;

@Service
@Transactional
public class LocationService implements LocationServiceimpl {
	
	@Autowired
	private LocationDao locationDao;
	
	
	public LocationService() {
		System.out.println("In def constructor ... "+getClass().getName());	
	}


	@Override
	public LocationEntity addlocation(LocationEntity location) {
		if(location.getLocation_id() <= 0) {
			throw new RuntimeException("Id cannot be <= 0");
		}
		
		return locationDao.save(location);
	}


	@Override
	public List<LocationEntity> findAllocation() {
		return locationDao.findAll();		
	}

	@Override
	public Optional<LocationEntity> findlocationId(int locationid) {
		
		return locationDao.existsById(locationid) ? locationDao.findById(locationid) : null;
	}

	@Override
	public List<LocationEntity> deletelocation(int locationid) {
		locationDao.deleteById(locationid);
		return locationDao.findAll();
	}


	@Override
	public LocationEntity updatelocation(LocationEntity location) {
			return locationDao.save(location);
	}
	}
