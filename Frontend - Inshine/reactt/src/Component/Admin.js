import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../Css/Admin.css'

export default function Admin() {
  return (
    <div id='admin'>
      <div className='row'>
        <div className='col-xl-2'>

          <div class="sidebar">
            <div class="logo-details">
              <i class='bx bxl-c-plus-plus'></i>
              <span class="logo_name">INSHINE</span>
              <img  id='beauty'   src="https://png.pngtree.com/png-clipart/20220430/original/pngtree-beauty-logo-png-image_7601948.png" alt='beauty' ></img>
            </div>
            <ul class="nav-links">

              <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  USERS
                </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><Link to="/admin/showuser">Show User</Link></div>
      {/* <div class="accordion-body">Remove User</div> */}
    </div> 
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        SERVICES
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
    <div class="accordion-body"><Link to="/admin/addcategory">Add Category</Link></div>
      <div class="accordion-body"><Link to="/admin/addservice">Add Services</Link></div>
      <div class="accordion-body"><Link to="/admin/showservice">Show Services</Link></div>
      
      {/* <div class="accordion-body">Update Services</div> */}

    </div>
  </div>
  
</div>

            </ul>
          </div>
        </div>

        <div className='col-xl-10' id='xx1'>
                
          <section class="home-section">

              <Outlet></Outlet>
           
          </section>
        </div>
      </div>
    </div>
  )
}
