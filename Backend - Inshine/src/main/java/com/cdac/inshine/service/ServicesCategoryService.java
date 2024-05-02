package com.cdac.inshine.service;


import java.io.IOException;
//import java.util.Base64;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import com.cdac.inshine.dao.ServicesCategoryDao;
import com.cdac.inshine.model.RegisterEntity;
import com.cdac.inshine.model.ServicesCategoryEntity;
import com.cdac.inshine.model.ServicesEntity;

import jakarta.transaction.Transactional;
import org.springframework.util.StringUtils;
import java.util.Base64;



@Service
@Transactional
public class ServicesCategoryService implements ServicesCategoryServiceimpl {

	@Autowired
	private ServicesCategoryDao servicesCategoryDao;
//	@Autowired
//	private ServicesCategoryEntity  servicesCategoryEntity;
	
	public ServicesCategoryService() {
		System.out.println("In def constructor ... "+getClass().getName());	}
	

	/*@Override
	public ServicesCategoryEntity addServicesCategory(ServicesCategoryEntity servicesCategory) {
		if(servicesCategory.getCategory_id() <= 0) {
			throw new RuntimeException("Id cannot be <= 0");MultipartFile file,String name
		}
		
		return servicesCategoryDao.save(servicesCategory);
	}*/
	
//	public ServicesCategoryEntity  saveProductToDB(MultipartFile file,String name)
//	{
//		ServicesCategoryEntity p = new ServicesCategoryEntity();
//		String fileName = StringUtils.cleanPath(file.getOriginalFilename());
//		if(fileName.contains(".."))
//		{
//			System.out.println("not a a valid file");
//		}
//		try {
//			p.setImage(Base64.getEncoder().encodeToString(file.getBytes()));
//		} catch (IOException e) {
//			e.printStackTrace();
//		}		
//        p.setCategory_name(name);
//        
//        return servicesCategoryDao.save(p);
//	}

	@Override
	public List<ServicesCategoryEntity> findAllServicesCategoryList() {
		
		return servicesCategoryDao.findAll();
	}
		

	@Override
	public Optional<ServicesCategoryEntity> findServicesCategoryId(int servicesCategoryid) {
	
		return servicesCategoryDao.existsById(servicesCategoryid)? servicesCategoryDao.findById(servicesCategoryid) : null;
	}

	@Override
	public List<ServicesCategoryEntity> deleteServicesCategory(int servicesCategoryid) {
		
		servicesCategoryDao.deleteById(servicesCategoryid);
		return servicesCategoryDao.findAll();
	}


	@Override
	public ServicesCategoryEntity addServicesCategory(ServicesCategoryEntity servicesCategory) {
	
//		if(servicesCategory.getCategory_id() <= 0) {
//			throw new RuntimeException("Id cannot be <= 0");
//		}
		
		return servicesCategoryDao.save(servicesCategory);
	}

	
}
