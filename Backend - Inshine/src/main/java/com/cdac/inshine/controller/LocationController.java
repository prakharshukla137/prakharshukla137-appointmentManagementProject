package com.cdac.inshine.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cdac.inshine.model.LocationEntity;
import com.cdac.inshine.service.LocationService;

@CrossOrigin
@RestController
@RequestMapping
public class LocationController {
	
	@Autowired
	LocationService locationService;
	
	public LocationController() {
		System.err.println("In def consteuctor ..."+getClass().getName());
	}
	
	
	@PostMapping("/location")
	public ResponseEntity<?> addLocation(@RequestBody LocationEntity location) {
		System.err.println("location has been added : "+location);
		
		try{
			return new ResponseEntity<>(locationService.addlocation(location), HttpStatus.OK);		
		}catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
			
	}
	
	@GetMapping("/location")
	public ResponseEntity<?> findAllocation(){
		System.out.println("In get all location of class "+getClass().getName());
		try {
			return new ResponseEntity<>(locationService.findAllocation(), HttpStatus.OK);
		}catch (Exception e) {
			System.out.println("IN catch block of getAll location "+getClass().getName());
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	
	@GetMapping("/location/{locationId}")
	public ResponseEntity<?> findlocationId(@PathVariable int locationId)
	{
		System.out.println("Received Id : "+locationId);
		try {
			return new ResponseEntity<>(locationService.findlocationId(locationId), HttpStatus.OK);
		} catch (Exception e) {
			System.out.println("In location Details controller get location catch block ");
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("/location/{locationId}")
	public ResponseEntity<?> deletelocation(@PathVariable int locationId)
	{
		System.out.println("Received Id : "+locationId);
		try {
			return new ResponseEntity<>(locationService.deletelocation(locationId), HttpStatus.OK);
		} catch (Exception e) {
			System.out.println("In location Details controller get location catch block ");
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@PutMapping("/location")
	public LocationEntity  updatelocation(@RequestBody LocationEntity location){
		
			return locationService.updatelocation(location);
	}
	
	

}
