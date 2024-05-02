package com.cdac.inshine.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.inshine.model.CartEntity;

public interface CartDao extends JpaRepository<CartEntity, Integer> {

}
