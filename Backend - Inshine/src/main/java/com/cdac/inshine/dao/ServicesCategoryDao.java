package com.cdac.inshine.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.cdac.inshine.model.ServicesCategoryEntity;


public interface ServicesCategoryDao extends JpaRepository<ServicesCategoryEntity, Integer>{
	@Query("SELECT new ServicesEntity(S.service_id,S.service_name, S.service_price, S.service_description, S.service_duration, S.image) FROM ServicesCategoryEntity C JOIN ServicesEntity S ON S.category_id = C.category_id WHERE C.category_id= :catId")
	List<Object[]> getAllSericesByCategorty(@Param("catId") String catId);
}