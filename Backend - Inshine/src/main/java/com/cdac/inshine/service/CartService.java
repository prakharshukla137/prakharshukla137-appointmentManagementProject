package com.cdac.inshine.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cdac.inshine.dao.CartDao;
import com.cdac.inshine.model.CartEntity;
import jakarta.transaction.Transactional;

@Service
@Transactional
public class CartService implements CartServiceImpl {
	
	@Autowired
	private CartDao cartdao;
	
	public CartService() {
		System.out.println("In def constructor ... "+getClass().getName());	
	}


	@Override
	public CartEntity addcart(CartEntity cart) {
		if(cart.getCart_id() <= 0) {
			throw new RuntimeException("Id cannot be <= 0");
		}
		
			return cartdao.save(cart);
	}

	@Override
	public List<CartEntity> findAllcart() {
		return cartdao.findAll();
	}

	@Override
	public Optional<CartEntity> findcartId(int cartid) {
		return cartdao.existsById(cartid) ? cartdao.findById(cartid) : null;
	}

	@Override
	public List<CartEntity> deletecart(int cartid) {
		cartdao.deleteById(cartid);
		return cartdao.findAll();
	}

	@Override
	public CartEntity updatecart(CartEntity cart) {
		return cartdao.save(cart);
	}




}
