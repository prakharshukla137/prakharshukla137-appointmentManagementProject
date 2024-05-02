import React from 'react'
import { Link } from "react-router-dom";
// import { useCart } from "react-use-cart";

export default function Header() {



  return (

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div id='head' class="container-fluid">
 
    <a class="navbar-brand" href="#"><Link to="/" ><img src='./images/inshine_logo.png' style={{height:60,width:60,borderRadius:"80px"}} /></Link></a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul  class="navbar-nav me-auto mb-2 mb-lg-0">
       

        <li class="nav-item">
          <Link  class="nav-link" to="/">Home</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link" to="/aboutus">About Us</Link>
        </li>



        {!sessionStorage.getItem('fullname') && (
              <li class="nav-item">
              <Link class="nav-link" to="/login">Login</Link>
              </li>
          )}
  {/* {sessionStorage.getItem('fullname')} */}
        {sessionStorage.getItem('fullname') && (sessionStorage.getItem("fullname") === "shivani") && (
        <li class="nav-item">
        <Link class="nav-link" to="/admin">Admin-page</Link>
      </li>
          )}

        {sessionStorage.getItem('fullname') && (
              <li class="nav-item">
              <Link class="nav-link" to="/logout">Logout</Link>
              </li>
          )}
  
       
        <li class="nav-item">
          <Link class="nav-link" to="/bridal">Bridal</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contactus">Contact Us</Link>
        </li>
      </ul>
      <div class="d-flex align-items-center">
                            <a class="text-reset me-3">
                                <Link to="cart" style={{ color: "black", textDecoration: 'none' }} >
                                    <div>
                                         
                                    <i class="fa-solid fa-cart-shopping" style={{ fontSize: 30, cursor: "pointer" }} >
                                        {/* <span class="position-top translate-middle badge rounded-pill bg-danger" style={{ "font-size": "10px" }} >
                                            {totalItems}
                                        </span> */}
                                      </i>
                                    </div>
                                </Link>
                            </a>

                        </div>
    </div>
  </div>
</nav>
  )
}
