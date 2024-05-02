package com.cdac.inshine.model;

import java.sql.Date;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
@Entity
@Table(name = "cart")
public class CartEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int cart_id;
	@ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
	private RegisterEntity user_id;
	@ManyToOne
    @JoinColumn(name = "service_id", referencedColumnName = "service_id")
	private ServicesEntity service_id;
	@ManyToOne
    @JoinColumn(name = "location_id", referencedColumnName = "location_id")
	private LocationEntity location_id;
	private Date date;
	
	private double subtotal;	
	public CartEntity() {
		
	}
	public CartEntity(int cart_id, RegisterEntity user_id, ServicesEntity service_id, LocationEntity location_id,
			Date date, double subtotal) {
		super();
		this.cart_id = cart_id;
		this.user_id = user_id;
		this.service_id = service_id;
		this.location_id = location_id;
		this.date = date;
		this.subtotal = subtotal;
	}
	public int getCart_id() {
		return cart_id;
	}

	public void setCart_id(int cart_id) {
		this.cart_id = cart_id;
	}

	public RegisterEntity getUser_id() {
		return user_id;
	}

	public void setUser_id(RegisterEntity user_id) {
		this.user_id = user_id;
	}

	public ServicesEntity getService_id() {
		return service_id;
	}

	public void setService_id(ServicesEntity service_id) {
		this.service_id = service_id;
	}

	public LocationEntity getLocation_id() {
		return location_id;
	}

	public void setLocation_id(LocationEntity location_id) {
		this.location_id = location_id;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	

	public double getSubtotal() {
		return subtotal;
	}

	public void setSubtotal(double subtotal) {
		this.subtotal = subtotal;
	}

	@Override
	public String toString() {
		return "cart [cart_id=" + cart_id + ", location_id=" + location_id + ", date=" + date 
				+ ", subtotal=" + subtotal + "]";
	}
	
	

}