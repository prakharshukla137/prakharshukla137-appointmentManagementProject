package com.cdac.inshine.controller;

import java.util.ArrayList;

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

import com.cdac.inshine.dao.CartDao;
import com.cdac.inshine.dao.RegisterDao;
import com.cdac.inshine.dao.ServicesDao;
import com.cdac.inshine.dto.LoginDetails;
import com.cdac.inshine.model.CartEntity;
import com.cdac.inshine.model.RegisterEntity;
import com.cdac.inshine.service.CartService;

@RestController
@RequestMapping()
@CrossOrigin
public class CartController {
	@Autowired
	private CartService cartservice;
	@Autowired
	private ServicesDao servicedao;
	
	
	public CartController() {
		System.err.println("In def constructor ..."+getClass().getName());
	}
	
	@PostMapping("/AddToCart")
	public ResponseEntity<?> addToCart(@RequestBody CartEntity cart) {
		System.err.println("service has been added to cart : "+cart);
		
		try{
			return new ResponseEntity<>(cartservice.addcart(cart), HttpStatus.OK);		
		}catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
			
	}
	
	@GetMapping("/cart/{userId}")
	public ResponseEntity<?> getAllSerices(@PathVariable String userId)
	{
//		var user_id = userId.split(",");
		ArrayList<Integer> result = new ArrayList<Integer>();
		for (String token : userId.split("[ ,]+"))
		    result.add(Integer.parseInt(token));
		
		
		System.out.println("Received Id : "+userId);
		try {
			return new ResponseEntity<>(servicedao.getAllSerices(result), HttpStatus.OK);
		} catch (Exception e) {
			System.out.println("In cart controller get cart catch block ");
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
		
//	@GetMapping("/cart/{cartId}")
//	public ResponseEntity<?> getcart(@PathVariable int cartId)
//	{
//		System.out.println("Received Id : "+cartId);
//		try {
//			return new ResponseEntity<>(cartservice.findcartId(cartId), HttpStatus.OK);
//		} catch (Exception e) {
//			System.out.println("In cart controller get cart catch block ");
//			e.printStackTrace();
//			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//		}
//	}
	
	@GetMapping("/cart")
	public ResponseEntity<?> getAllcart(){
		System.out.println("In get all users of class "+getClass().getName());
		try {
			return new ResponseEntity<>(cartservice.findAllcart(), HttpStatus.OK);
		}catch (Exception e) {
			System.out.println("IN catch block of  find all cart "+getClass().getName());
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@DeleteMapping("/cart/{cartId}")
	public ResponseEntity<?> deletecart(@PathVariable int cartId)
	{
		System.out.println("Received Id : "+cartId);
		try {
			return new ResponseEntity<>(cartservice.deletecart(cartId), HttpStatus.OK);
		} catch (Exception e) {
			System.out.println("In cart controller get cart catch block ");
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	
	@PutMapping("/cart")
	public CartEntity updatecart(@RequestBody CartEntity cart){
		
			return cartservice.updatecart(cart);
	}
	
	
	
	
}