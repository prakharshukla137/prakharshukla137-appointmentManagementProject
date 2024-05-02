package com.cdac.inshine.service;

//import java.io.IOException;
import java.util.List;
import java.util.Optional;

//import org.springframework.web.multipart.MultipartFile;

import com.cdac.inshine.model.ServicesCategoryEntity;

public interface ServicesCategoryServiceimpl {

	// add category
	ServicesCategoryEntity addServicesCategory(ServicesCategoryEntity servicesCategory);
	
//	ServicesCategoryEntity addServicesCategory(MultipartFile file , ServicesCategoryEntity servicesategoryEntity) throws IOException;
	
	// find all category
	List<ServicesCategoryEntity> findAllServicesCategoryList();
	
	// find all category by id
	Optional<ServicesCategoryEntity> findServicesCategoryId(int servicesCategoryid);
	
	//Delete category by ID
	List<ServicesCategoryEntity> deleteServicesCategory(int servicesCategoryid);
}
