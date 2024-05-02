package com.cdac.inshine.dao;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

//import com.cdac.inshine.model.RegisterEntity;
import com.cdac.inshine.model.ServicesEntity;

public interface ServicesDao extends JpaRepository<ServicesEntity, Integer> {
	
	
//	@Query("SELECT new ServicesEntity(S.service_name, S.service_price, S.service_description, S.service_duration, S.image) FROM CartEntity C JOIN ServicesEntity S ON S.service_id = C.service_id JOIN RegisterEntity R ON R.user_id = C.user_id WHERE R.user_id= :userId")
	@Query("SELECT new ServicesEntity(S.service_id, S.service_name, S.service_price, S.service_description, S.service_duration, S.image) FROM ServicesEntity S WHERE S.service_id in (:userId) ")
	List<ServicesEntity> getAllSerices(@Param("userId") ArrayList<Integer> result);
	
	}