package com.cdac.inshine.service;


import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cdac.inshine.dao.ServicesDao;
import com.cdac.inshine.model.ServicesEntity;
import jakarta.transaction.Transactional;



@Service
@Transactional
public class ServicesService implements ServicesServiceimpl{
	@Autowired
	private ServicesDao servicesDao;
	
	public ServicesService() {		
		System.out.println("In def constructor ... "+getClass().getName());	
		}

	@Override
	public ServicesEntity addServices(ServicesEntity service) {
//		if(service.getService_id() <= 0) {
//			throw new RuntimeException("Id cannot be <= 0");
//		}
		
		return servicesDao.save(service);
	}

	@Override
	public List<ServicesEntity> findAllServices() {
		return servicesDao.findAll();
	}

	@Override
	public Optional<ServicesEntity> findServicesId(int serviceid) {
		
		return servicesDao.existsById(serviceid)? servicesDao.findById(serviceid) : null;
	}

	@Override
	public List<ServicesEntity> deleteServices(int serviceid) {
		servicesDao.deleteById(serviceid);
		return servicesDao.findAll();
	}

//	@Override
//	public ServicesEntity updateServices(ServicesEntity service) {
//		if(service.getService_id() <= 0) {
//			throw new RuntimeException("Id cannot be <= 0");
//		}
//		
//		return servicesDao.save(service);
//		
//	}

	

}
