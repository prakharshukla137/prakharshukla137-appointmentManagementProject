package com.cdac.inshine.controller;

//import java.awt.PageAttributes.MediaType;
import java.io.IOException;

//import java.util.Collection;
//import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
//import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.cdac.inshine.model.LocationEntity;
import com.cdac.inshine.model.ServicesCategoryEntity;

//import com.cdac.inshine.model.RegisterEntity;

//import com.cdac.inshine.model.ServicesEntity;
import com.cdac.inshine.service.ServicesCategoryService;
//import com.cdac.inshine.service.Users;



@CrossOrigin
@RestController
@RequestMapping
public class ServicesCategoryController {

	@Autowired
	private ServicesCategoryService servicesCategoryService; 
	
	public ServicesCategoryController() {
		System.err.println("In def consteuctor ..."+getClass().getName());
	}
	
	@PostMapping("/addcategory")
	public ResponseEntity<?> addcategory(@RequestBody ServicesCategoryEntity ServicesCategory) {
		System.err.println("Category has been added to ServicesCategory : "+ServicesCategory);
		
		try{
			return new ResponseEntity<>(servicesCategoryService.addServicesCategory(ServicesCategory), HttpStatus.OK);		
		}catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
			
	}

	
	@GetMapping("/getcategory/{category_id}")
	public ResponseEntity<?> getcategory(@PathVariable int category_id)
	{
		System.out.println("Received Id : "+category_id);
		try {
			return new ResponseEntity<>(servicesCategoryService.findServicesCategoryId(category_id), HttpStatus.OK);
		} catch (Exception e) {
			System.out.println("In ServicesCategory Details controller get Category catch block ");
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping("/getAllcategory")
	public ResponseEntity<?> getAllcategory(){
		System.out.println("In get all category of class "+getClass().getName());
		try {
			return new ResponseEntity<>(servicesCategoryService.findAllServicesCategoryList(), HttpStatus.OK);
		}catch (Exception e) {
			System.out.println("IN catch block of getAll Category "+getClass().getName());
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	

	@DeleteMapping("/deletecategory/{category_id}")
	public ResponseEntity<?> deletecategory(@PathVariable int category_id)
	{
		System.out.println("Received Id : "+category_id);
		try {
			return new ResponseEntity<>(servicesCategoryService.deleteServicesCategory(category_id), HttpStatus.OK);
		} catch (Exception e) {
			System.out.println("In turf Details controller get turf catch block ");
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
		
	
	
	/*
	@GetMapping("/services/category")
	public Collection<ServicesCategoryEntity> servicesCategoryList(){
		return servicesCategoryService.getservicesCategoryList();
	}
	
	@GetMapping(value = "/services/category/{serviceCategoryId}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ServicesCategoryEntity getServiceCategory(@PathVariable int serviceCategoryId) {
		return servicesCategoryService.getservicesCategory(serviceCategoryId);
	}
	
	@PostMapping(value = "/services/category", 
			produces = MediaType.APPLICATION_JSON_VALUE, 
			consumes = MediaType.APPLICATION_JSON_VALUE)
	public ServicesCategoryEntity addServiceCategory(@RequestBody ServicesCategoryEntity serviceCategory) {
		servicesCategoryService.saveServicesCategory(serviceCategory);
		return serviceCategory;
	}
	
	@DeleteMapping(value = "/services/category/{serviceCategoryId}", produces = MediaType.APPLICATION_JSON_VALUE)
	public void deleteServiceCategory(@PathVariable int serviceCategoryId) {
		servicesCategoryService.deleteservicesCategory(serviceCategoryId);
		System.out.println("Successfully Deleted");
	}
	
//	@PutMapping(value = "/services/category/{serviceCategoryId}", produces = MediaType.APPLICATION_JSON_VALUE)
//	public void updateServicesCategory(@PathVariable int (serviceCategoryId) {
//		servicesCategoryService.updateservicesCategory(serviceCategoryId);
//	}
	*/
}
