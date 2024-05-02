package com.cdac.inshine.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "services")
public class ServicesEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int service_id;
	private String service_name;
	private double service_price;
	private String service_duration;
	private String service_description;
	private String image;
	@ManyToOne
    @JoinColumn(name = "category_id", referencedColumnName = "category_id")
	private ServicesCategoryEntity category_id;
	
	
	public ServicesEntity() {
		
	}
	
	public ServicesEntity(int service_id,String service_name, double service_price,String service_description,String service_duration,String image) {
		this.service_id=service_id;
		this.service_name = service_name;
		this.service_price = service_price;
		this.service_duration = service_duration;
		this.service_description = service_description;
		this.image = image;
		
	}

	public ServicesEntity(String service_name, double service_price,String service_description,String service_duration,String image) {
		this.service_name = service_name;
		this.service_price = service_price;
		this.service_duration = service_duration;
		this.service_description = service_description;
		this.image = image;
		
	}
	
	public int getService_id() {
		return service_id;
	}
	public void setService_id(int service_id) {
		this.service_id = service_id;
	}
	public String getService_name() {
		return service_name;
	}
	public void setService_name(String service_name) {
		this.service_name = service_name;
	}
	public double getService_price() {
		return service_price;
	}
	public void setService_price(double service_price) {
		this.service_price = service_price;
	}
	public String getService_duration() {
		return service_duration;
	}
	public void setService_duration(String service_duration) {
		this.service_duration = service_duration;
	}
	public String getService_description() {
		return service_description;
	}
	public void setService_description(String service_description) {
		this.service_description = service_description;
	}
	
	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public ServicesCategoryEntity getCategory_id() {
		return category_id;
	}
	public void setCategory_id(ServicesCategoryEntity category_id) {
		this.category_id = category_id;
	}
	@Override
	public String toString() {
		return "services [service_id=" + service_id + ", service_name=" + service_name + ", service_price="
				+ service_price + ", service_duration=" + service_duration + ", service_description="
				+ service_description + "]";
	}
	
}