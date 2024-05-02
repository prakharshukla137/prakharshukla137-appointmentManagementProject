import React from 'react'
import { useState,useEffect} from 'react';
import axios from 'axios';
import Apiurl from '../Api';
import { Link } from 'react-router-dom';
import '../Css/ShowUser.css'

export default function ShowService() {
    var [api,setapi]=useState([])
    useEffect(()=>{
        axios.get(Apiurl + 'getAllServices').then((result)=>{
            console.log(result.data);
            setapi(result.data)
        })
        .catch((err)=>{
            console.log(err);
        });
    },[])

    
  return (
    <div>
      <div style={{marginLeft:'30%',textAlign:'center', fontWeight:'bold'}}><h2 id='show'>Our Services</h2> </div><hr/>
      <table style={{marginTop:'30px'}} class="table table-bordered">
  <thead>
    <tr style={{textAlign:'center', fontWeight:'bold'}}>
      <th scope="col">S.No</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Duration</th>
      <th scope="col">Description</th>

      {/* <th scope="col">ServiceAddOn</th> */}
      
    </tr>
  </thead>
  <tbody>
    {
        api && api.length>0 && api.map((obj,i) => 
            <tr>
                <td>{i+1}</td> 
                <td>{obj.service_name}</td>
                <td>{obj.service_price +'/-'}</td>
                <td>{obj.service_duration+'Min'}</td>
                <td>{'•'+obj.service_description}</td>
                {/* <td>{obj.serviceaddon}</td> */}
                <td><Link className='btn btn-dark' to= {'#'}>Edit</Link></td>
                <td><Link className='btn btn-danger'>Delete</Link></td>
                
            </tr>
            )
    }
  </tbody>
</table>
    </div>
  )
  }
