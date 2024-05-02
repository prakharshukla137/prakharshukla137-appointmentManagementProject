package com.cdac.inshine.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;


@Entity
@Table(name = "service_category")
public class ServicesCategoryEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int category_id;
	private String category_name;	
	@Lob
//	@Column(columnDefinition = "MEDIUMBLOB")
	private String image;

	public ServicesCategoryEntity() {
		
	}

	public int getCategory_id() {
		return category_id;
	}

	public void setCategory_id(int category_id) {
		this.category_id = category_id;
	}

	public String getCategory_name() {
		return category_name;
	}

	public void setCategory_name(String category_name) {
		this.category_name = category_name;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	@Override
	public String toString() {
		return "ServicesCategoryEntity [category_id=" + category_id + ", category_name=" + category_name + ", image="
				+ image + "]";
	}	
	
	
 
	
	


}
