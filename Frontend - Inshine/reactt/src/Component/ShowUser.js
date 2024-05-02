import React from 'react'
import { useState,useEffect} from 'react';
import axios from 'axios';
import Apiurl from '../Api';
import '../Css/ShowUser.css'
export default function ShowUser() {


    var [api,setapi]=useState([])
    useEffect(()=>{
        axios.get(Apiurl + 'getAllUsers').then((result)=>{
            console.log(result.data);
            setapi(result.data)
        })
        .catch((err)=>{
            console.log(err);
        });
    },[])
  return (
    <div >
      <div style={{marginLeft:'30%',textAlign:'center', fontWeight:'bold',  }}><h2 id='show'>User Detail</h2>  </div><hr/>
      <table style={{marginTop:'20px'}} class="table table-bordered">
  <thead >
    <tr style={{textAlign:'center', fontWeight:'bold',  }}>
      
      <th scope="col">S.No</th>
      <th scope="col">Name</th>
      <th scope="col">MobileNo</th>
      <th scope="col">EmailId</th>  
      <th scope="col">User Type</th>
      <th scope="col">Signup Date</th>
      
    </tr>
  </thead>
  <tbody>
    {
        api && api.length>0 && api.map((obj,i) => 
            <tr style={{textAlign:'center'  }}>
                <td>{i+1}</td>
                <td>{obj.fullname}</td>
                <td>{obj.mobile}</td>
                <td>{obj.email_id}</td>
                <td>{obj.user_type}</td>
                <td>{obj.created_at
                
                }</td>

                
                
            </tr>
            )
    }
  </tbody>
</table>
    </div>
  )
  }
