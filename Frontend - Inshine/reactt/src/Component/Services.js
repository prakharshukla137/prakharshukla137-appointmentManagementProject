import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Apiurl from '../Api'
import '../Css/Services.css'
import { useCookies } from 'react-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Services() {
  let navigate = useNavigate()
  const [cookies, setCookie] = useCookies(['cartproduct']);
  function myfunc(id){
    // alert(id);
    // setCookie('cartproduct', id, { path: '/' });
    var ans = cookies
    console.log(ans);
    if(Object.keys(ans).length === 0){
      setCookie('cartproduct', id, { path: '/' });
      // alert("product added in cart")
      toast.success("Service Added To Cart")
    }else

    {
      var newdata = ans["cartproduct"]+","+id;
      // console.log(newdata);
      setCookie('cartproduct', newdata, { path: '/' });
      // alert("Product updated in cart");
      toast.success("Service Added To Cart")
      
      
    }
    navigate("#")
  }
let params = useParams()
console.log(params);
let catid = params["id"]
console.log(catid);

  var [api,setapi]=useState([])
  useEffect(()=>{
    axios.get(Apiurl +`Services/${catid}`).then((result)=>{
      console.log(result);
      setapi(result.data)
    }).catch((err)=>{
      console.log(err);
    })
  },[])
  return (
    
    <>
        {/* 1. Hair Package */}
        <div id="d1" className="row" >
          <div className='row justify-content-md-center pb-lg-4 mb-lg-5'>           
            <div className='container text-center'>
            <h3 id='Selectservice'>Select Your Service</h3>
            </div>
          </div>
          <div class="container text-center" >
            <div class="row" >
            {
              api && api.length>0 && api.map(obj=>         
              <div  class="col-4">
                
                <div  className='d-block mb-4'>
                    <img  id='img'  style={{borderRadius:300, outerWidth:150,height:150}} src= {obj[0].image} alt='pic' />
                </div>
                <br/>
                <hr/>
                  <h4 id='descr'style={{fontFamily:'Times New Roman',fontWeight:'bold'}}>{obj[0].service_name}</h4>
                  
                  <h5 id='desc' style={{fontFamily:'Times New Roman',fontWeight:'bold'}}>₹ {obj[0].service_price}</h5>
          
                  <h5 id='desc' style={{fontFamily:'Times New Roman',fontWeight:'bold'}}>{obj[0].service_duration} min</h5> <hr/>
                  
                    <h5 id='description'>{obj[0].service_description}</h5>
                  
                    <button onClick={()=>{myfunc(obj[0].service_id)}} id='cart'>ADD SERVICE</button>
                    
             
                    <ToastContainer />
                  <br/>
              </div>
              )
            }
            </div>
          </div>
        </div>
    </>
  )
}
