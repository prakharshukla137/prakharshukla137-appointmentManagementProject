package com.cdac.inshine.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.inshine.dao.ServicesCategoryDao;
//import com.cdac.inshine.dao.ServicesDao;
import com.cdac.inshine.model.ServicesEntity;
import com.cdac.inshine.service.ServicesService;

@RestController
@RequestMapping()
@CrossOrigin
public class ServicesController {
	
	@Autowired
	private ServicesService services;
	
//	@Autowired
//	private ServicesDao servicesdao;
	
	@Autowired
	private ServicesCategoryDao servicesCategoryDao;
	
	public ServicesController() {
		System.err.println("In def consteuctor ..."+getClass().getName());
	}
	

	
	@PostMapping("/Services")
	public ResponseEntity<?> addServices(@RequestBody ServicesEntity service) {
		System.err.println("Category has been added to ServicesCategory : "+service);
		
		try{
			return new ResponseEntity<>(services.addServices(service), HttpStatus.OK);		
		}catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
			
	}
	
	@GetMapping("/Services/{catId}")	
	public ResponseEntity<?> getAllSericesByCat(@PathVariable String catId)
	{
		System.out.println("Received Id : "+catId);
		try {
			return new ResponseEntity<>(servicesCategoryDao.getAllSericesByCategorty(catId), HttpStatus.OK);
		} catch (Exception e) {
			System.out.println("In services controller get services catch block ");
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	
	@GetMapping("/getAllServices")
	public ResponseEntity<?> getAllUsers(){
		System.out.println("In get all users of class "+getClass().getName());
		try {
			return new ResponseEntity<>(services.findAllServices(), HttpStatus.OK);
		}catch (Exception e) {
			System.out.println("IN catch block of getAll services "+getClass().getName());
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@DeleteMapping("/Services/{servicesId}") 
	public ResponseEntity<?> deleteUser(@PathVariable int servicesId)
	{
		System.out.println("Received Id : "+servicesId);
		try {
			return new ResponseEntity<>(services.deleteServices(servicesId), HttpStatus.OK);
		} catch (Exception e) {
			System.out.println("In services controller get services catch block ");
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	
}