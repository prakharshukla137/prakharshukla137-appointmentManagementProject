import React,{useState, useEffect} from 'react'
import { useCookies } from 'react-cookie';
import Apiurl from '../Api'
import '../Css/Services.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Css/ShowUser.css'

export default function Carts() {
    const [cookies, setCookie] = useCookies(['cartproduct']);
    const [message,setmessage] = useState("");
    const [Api,setApi] = useState([]);
    const [Sum,setsum] = useState(0)

function myfunc(id){
    // alert(id);
    var ans = cookies["cartproduct"]
    console.log(ans, id);
    var record = ans.split(",")
    console.log(record);
    var result = record.indexOf(id.toString())
    console.log(result);
    record.splice(result,1)
    console.log(record);
    var finalAns = record.join(",")
    console.log(finalAns);
    setCookie('cartproduct', finalAns, { path: '/' });
    window.location.href = "http://localhost:3000/cart"
}
    useEffect(()=>{
        var ans = cookies
        console.log(ans);
        if(Object.keys(ans).length === 0){
         setmessage("No data found")

        }else
    console.log(ans['cartproduct']);
    axios.get(Apiurl +`cart/${ans['cartproduct']}`).then((result)=>{
        console.log(result.data);
        setApi(result.data)

        const total = result.data.reduce((total,obj)=>total =total + obj.service_price,0            
        )
        console.log(total);
        setsum(total)
        // setapi(result.data)
      }).catch((err)=>{
        console.log(err);
      })
      
        
    },[])




  return (
    <div >
      <br/>
            <div style={{marginLeft:'37.5%',textAlign:'center', fontWeight:'bold' }}><h2 id='show'>Your Cart</h2>  </div><br/><hr/>
            <div id='format'>
      <table class="table">
  <thead>
    <tr >
      {/* <th scope="col">Sno</th> */}
      <th scope="col">Image</th>
      <th scope="col">Service Name</th>
      <th scope="col">Duration</th>
      <th scope="col">Service Price</th>
      
      
     
    </tr>
    <br/>
  </thead>
  <tbody>
  

    {Api && Api.map((value)=>
    
    <tr >
         <td><img  id='img'  style={{borderRadius:200, outerWidth:150,height:100, width:100}} src= {value.image} alt='pic' /></td>
    <td scope="row">{value.service_name}</td>
    <td>{value.service_duration+" min"}</td>
    <td>{"₹"+value.service_price}/-</td>
   
 
    <td><button className='btn btn-danger' onClick={()=>{myfunc(value.service_id )}}>Delete</button></td>
  </tr>

    )
   

    }

    <tr>
        <td>
          <br/>
          <br/>
           <h4 style={{fontWeight:'bold', marginLeft:10}}>Subtotal:  ₹ {Sum}/-</h4> 
        </td>
    </tr>
    <tr>        
        <td>
            <button id = "checkout"type="submit" class="btn btn-primary m-4">
            <Link style={{color:'black', textDecoration:'none'}}to={"/payment"}>Checkout</Link>
            </button>
            <button id = "checkout"type="submit" class="btn btn-success m-4">
            <Link style={{color:'black', textDecoration:'none', }}to={"/"}>Add More Service</Link>
            </button>
        </td>
        
    </tr>
    
    
  </tbody>
</table>
</div>
    </div>
  )
}
