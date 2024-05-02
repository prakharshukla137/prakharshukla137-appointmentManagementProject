package com.cdac.inshine.service;

import java.util.List;
import java.util.Optional;
import com.cdac.inshine.model.CartEntity;

public interface CartServiceImpl {

	// add location
	CartEntity addcart(CartEntity cart);
	
	// find all location
	List<CartEntity> findAllcart();
	
	// find all location by id
	Optional<CartEntity> findcartId(int cartid);
	
	//Delete location by ID
	List<CartEntity> deletecart(int cartid);
	
	//update location by ID
	CartEntity updatecart(CartEntity cart);
}
