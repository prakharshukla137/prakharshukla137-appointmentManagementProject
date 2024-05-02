import React from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';
import Api from '../Api';
import { Link, useNavigate } from 'react-router-dom';
import '../Css/Login.css'

export default function Register() {

    let navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post(Api + 'register',data).then((result)=>{
            console.log(result);
            navigate('/login');
        }).catch((err)=>{
            console.log(err);
        })
    }
  return (
    // <section>
    // <div class="container">
    //     <form onSubmit={handleSubmit(onSubmit)}>
    //         <input type="text" class="form-control" placeholder="FullName" {...register("fullname", { required: true })}/>
    //         {errors.fullname?.type === 'required' && <p role="alert">Full Name  is required*</p>}
    //         <br/>
    //         <input type="tel" class="form-control" placeholder="Mobile Number" {...register("mobile", { required: true })}/>
    //         {errors.mobile?.type === 'required' && <p role="alert">Mobile Number is required*</p>}
    //         <br/>
    //         <input type="email" class="form-control" placeholder="emailId" {...register("email_id", { required: true })}/>
    //         {errors.email_id?.type === 'required' && <p role="alert">Email-Id is required*</p>}
    //         <br/>
    //         <input type="password" class="form-control" placeholder="password" {...register("password", { required: true })}/>
    //         {errors.password?.type === 'required' && <p role="alert" >Password is required*</p>}
    //         <br/>
    //         <button id='b' type="submit">Register</button>
    //     </form>
    // </div>
    // </section>
    <div id='login'>
        <div id='body' className="container">
        <div className="registration form">
          <header>Signup</header>
         

          <form action="/addcategory" method="Post" enctype = "multipart/form-data"  onSubmit={handleSubmit(onSubmit)}>

            <input type="text" class="form-control" name="fullname" placeholder="Enter your Full Name" {...register("fullname", { required: true })}/>
            {errors.fullname?.type === 'required' && <p role="alert">Full Name  is required*</p>}
            <input type="tel" class="form-control" name="mobile" placeholder="Enter your Mobile No" {...register("mobile", { required: true })}/>
            {errors.mobile?.type === 'required' && <p role="alert">Mobile Number is required*</p>}
            <input type="email" class="form-control" name="email_id" placeholder="Enter your Email-Id" {...register("email_id", { required: true })}/>
            {errors.email_id?.type === 'required' && <p role="alert">Email-Id is required*</p>}
            <input type="password" class="form-control" name="password" placeholder=" Enter the Password" {...register("password", { required: true })}/>
            {errors.password?.type === 'required' && <p role="alert" >Password is required*</p>}
           
            <button class="btn btn-primary">Register</button>
          </form>
          <div className="signup">
            <span className="signup">Already have an account?
              <label htmlFor="check"><Link to="/login">Login</Link></label>
            </span>
          </div>
        </div>
        </div>
    </div>
  )
}