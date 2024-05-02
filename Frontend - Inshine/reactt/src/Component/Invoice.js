import React, { useRef,useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import '../Css/Invoice.css';
import Apiurl from '../Api'
import axios from 'axios';

function Invoice(props) {

    var [api,setapi]=useState([])
  useEffect(()=>{
    axios.get(Apiurl +`invoice`).then((result)=>{
      console.log(result.data);
      setapi(result.data)
    }).catch((err)=>{
      console.log(err);
    })
  },[])

    const {
        items,
        cartTotal,
    } = useCart();

    const Logout = (event)=>{
        localStorage.clear();
        alert("Successfully Logout....");
        window.location = 'http://localhost:3000/';
    }

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    var xyz = JSON.parse(localStorage.getItem("customerLoginDetails"));
    // var paymentDet = JSON.parse(localStorage.getItem("paymentDetails"));
    // console.log(xyz[0].customerId);
    // console.log(xyz[0].fullname);
    // console.log(xyz[0].mobine);
    // console.log(xyz[0].emailId);
    // console.log(paymentDet);

    return (
        <div>

            <div class="container">
                <div class="row gutters">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="card">
                            <div class="card-body p-0">
                                <div class="invoice-container">
                                    <div class="invoice-header">


                                        <div class="btn-toolbar justify-content-between" style={{ paddingTop: "20px" }}>
                                            {/* <div class="btn-group">
                                                <button class="btn btn-primary"><i class="icon-download"></i>Download</button>&nbsp;
                                                <button class="btn btn-primary"><i class="icon-download"></i>Print</button>
                                            </div> */}
                                            <div class="input-group">
                                                <button class="btn btn-primary" onClick={Logout} ><i class="icon-download"></i> Logout </button>
                                            </div>
                                        </div>

                                        <br /><br />


                                        <div class="row gutters">
                                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                                <p class="invoice-logo">
                                                    Invoice
                                                </p>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6">
                                                <address class="text-right">
                                                    Inshine Beauty Parlor, Amritdham, Nashik, Maharastra.<br />
                                                    422003
                                                </address>
                                            </div>
                                        </div>


                                        <div class="row gutters">
                                            {/* <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                                                <div class="invoice-details">
                                                    <address>
                                                        {/* <p>{xyz[0].firstName} {xyz[0].lastName}</p> */}
                                                        {/* {xyz[0].completeAddress} */}
                                                    {/* </address> */}
                                                {/* </div>
                                            </div> */} 
                                            <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                                                <div class="invoice-details">
                                                    <div class="invoice-num">
                                                        <div>Invoice - </div>
                                                        <div>{date}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="invoice-body">

                                        <div class="row gutters">
                                            <div class="col-lg-12 col-md-12 col-sm-12">
                                                <div class="table-responsive">
                                                    <table class="table custom-table m-0">
                                                        <thead>
                                                            <tr>
                                                                <th>Services</th>    
                                                                {/* <th>Quantity</th> */}
                                                                <th>Sub Total</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                api && api.length>0 && api.map(obj=>
                                                                    <tr  >

                                                                            <td>{obj.service_name}</td>                                                  
                                                                           
                                                                            <td>{obj.price}</td>
                                                                        </tr>
                                                                )
                                                                // items.map((item, index) => {
                                                                //     return (
                                                                //         <tr key={index} >

                                                                //             <td>{item.service_name}</td>                                                  
                                                                //             {/* <td>{item.quantity}</td> */}
                                                                //             <td>{item.quantity * item.price}</td>
                                                                //         </tr>
                                                                //     )
                                                                // })
                                                            }
                                                        </tbody>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                            <td colspan="2">
                                                                <h5 class="text-success"><strong>Grand Total</strong></h5>
                                                            </td>
                                                            <td>
                                                                <h5 class="text-success"><strong>₹{cartTotal}</strong></h5>
                                                            </td>
                                                        </tr>



                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="invoice-footer">
                                        Thank you for you Coming.
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
}

export default Invoice;