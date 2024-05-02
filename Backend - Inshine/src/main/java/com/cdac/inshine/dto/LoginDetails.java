package com.cdac.inshine.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginDetails {


	private String username;
	
	private String password;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

//	public String getemail_id() {
//		return email_id;
//	}
//
//	public void setemail_id(String email_id) {
//		this.email_id = email_id;
//	}
//
	public String getpassword() {
		return password;
	}

	public void setpassword(String password) {
		this.password = password;
	}


	
}
