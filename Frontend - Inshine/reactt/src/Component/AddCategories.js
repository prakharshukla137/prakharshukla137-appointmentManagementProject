

import React, { useEffect, useState } from "react";
import "../Css/AddService.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import Api from "../Api";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddService() {

  // const notify = () => {
  //   toast("Service Category Added Sucessfully..");
  // }
  var [api,setapi]=useState([])
  useEffect(()=>{
    axios.get(Api +'addcategory').then((result)=>{
      console.log(result.data);
      setapi(result.data)
    }).catch((err)=>{
      console.log(err);
    })
  },[])

  let navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    console.log(Api + "addcategory");
    data = JSON.stringify(data)
    data.category_id = +data.category_id
    data.category_id = {category_id:data.category_id}
    axios
      .post(Api + "addcategory", data)
      .then((result) => {
        console.log(result);
        // navigate("");
       toast.success("Service Category added sucessfully..")
      })
      .catch((err) => {
        console.log(err);
        toast.success("Service Category Not Added!")
      });
  };
  return (


          <form action="#" onSubmit={handleSubmit(onSubmit)}>
             <div style={{marginLeft:'30%',textAlign:'center', fontWeight:'bold'}}><h2 id='show'>Add Category </h2> </div>
             <hr/> <br/>
             
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                Name
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Enter the Category name"
                {...register("category_name", { required: true })}
              />
              {/* {errors.name?.type === "required" && (
                <p role="alert">Service Name is required*</p>
              )} */}
            </div>

            

            <div class="input-group mb-3">
              <label class="input-group-text" for="inputGroupFile01">
                Image URL
              </label>
              <input
                type="text"
                class="form-control"
                placeholder=" Enter Image URL"
                {...register("image", { required: true })}
              />{" "}
              <br />
              {/* {errors.image?.type === "required" && (
                <p role="alert">image is required*</p>
              )} */}
            </div>

           


            <br/>
            <button style={{marginLeft:'45%',width:'170px', textAlign: 'center'}} className="btn btn-primary">Submit</button>
            <ToastContainer />
          </form>

  );
}
