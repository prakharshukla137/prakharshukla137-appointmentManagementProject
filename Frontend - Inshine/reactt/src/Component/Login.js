import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';
import Api from '../Api';
import { Link, useNavigate } from 'react-router-dom';
import '../Css/Login.css'
// import { toast } from 'react-toastify';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Login() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    // const [path, setPath] = useState("login")
    const [username, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const sucess = () => {
      toast("Login Sucessfully..");
    }
    const error = () => {
      toast("Somthing went Wrong!");
    }

    // const onSubmit = data => console.log(data);
    let navigate = useNavigate();
    const onSubmit = (data) => {
      // data.preventDefault();
    
 
      // alert()
      console.log(data);
      if (data.username.length == 0) {
        toast.warning("Please enter email");
      } else if (data.password.length == 0) {
        toast.warning("Please enter password");
      } else {
        const body = {
          username:data.username,
          password: data.password,
        };
      
      console.log(body);
      console.log(Api);
      axios.post(Api + 'authenticate',body).then((response)=>{
        console.log(response.data);
        const result = response.data;
        console.log(result);  
        if (result==""){
          toast.error(error);
          // alert("Invalid Credentials")
          
        }
        else
        {
          sessionStorage.setItem("session", JSON.stringify(result));
          toast.success("Successfully Logged In");
          toast.error(sucess);
          const { username } = result
          console.log(result);
          // sessionStorage['role'] = role
          sessionStorage.setItem("fullname",data.username) 
          sessionStorage['loginStatus'] = 1
          
          navigate('/');
        } 
       
      }).catch((err)=>{
          console.log(err);
      })
    }
      
  
}

  return (
    
    <div id='login'>
    <div id='body' className="container">
        <input type="checkbox" id="check" />
        <div className="login form">
          <header>Login</header>
          <form action="#" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" class="form-control"  placeholder="Enter your username" onChange={(e) => {
                  setEmail(e.target.value);
                }} {...register("username", { required: true })}/>
            {errors.username?.type === 'required' && <p role="alert">Username is required*</p>}
            <input type="password" class="form-control" placeholder="Enter your password" onChange={(e) => {
                  setPassword(e.target.value);
                }} {...register("password", { required: true })}/>
            {errors.password?.type === 'required' && <p role="alert" >Password is required*</p>}
            {/* <a href="#">Forgot password?</a> */}
            {/* <input type="button" className="button" typeof='onSubmit' defaultValue="Login" /> */}
            <button type="submit" className="btn btn-outline-primary w-100" onClick={sucess}> Login </button>
            <ToastContainer />
          </form>
          <div className="signup">
            <span className="signup">Don't have an account?
              <label htmlFor="check"><Link to="/register">Signup</Link></label>
            </span>
          </div>
          
        </div>
        
      </div>
      
      </div>
      
  )
}
