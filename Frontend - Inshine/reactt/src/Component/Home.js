import React, { useEffect, useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../Css/Home.css'
import { Link } from 'react-router-dom';
import Apiurl from '../Api'
import axios from 'axios';

export default function Home() {

  var [api,setapi]=useState([])
  useEffect(()=>{
    axios.get(Apiurl +'getAllcategory').then((result)=>{
      console.log(result.data);
      setapi(result.data)
    }).catch((err)=>{
      console.log(err);
    })
  },[])
  return (
  
    <div >
      {/* slider start */}

      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={3000}>
            <img src="./images/pro1.jpeg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval={3000}>
            <img src="./images/pro2.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval={3000}>
            <img src="./images/pro3.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
      {/* slider end */}

      {/* Service start */}
      <section id='s2'>
        <div id="d2" className="row" >
          <div className='row justify-content-md-center pb-lg-4 mb-lg-5'>           
            <div className='container text-center'>
              <h2 id='welcome' className='mb-md-2' style={{fontWeight:'bold'}} >Welcome </h2>
              <h4  id='wel'className='mb-md-2'  >To a Full Beauty & Co Experience </h4>
              <hr/>
            </div>
          </div>
          <div class="container text-center">
            <div class="row">
            {
              api && api.length>0 && api.map(obj=>         
              <div  class="col-4">
                <div className='d-block mb-4'>
                  <Link to={'/services/' + obj.category_id}>
                    <img  id='img'  style={{borderRadius:300, outerWidth:150,height:150}} src= {obj.image} alt='hair' ></img>
                  </Link>
                </div>
                  <h4>{obj.category_name}</h4> <br/>
              </div> 
              )
            }
            </div>
          </div>
        </div>
      </section>
      {/* Service End */}
             {/* Third Section start */}<br/>
             <hr/>
      <div className='text-center'>
        <br />
        <span><h3 style={{fontStyle:"oblique",color:"GrayText",fontWeight:"600"}}>Home Salon Service</h3></span>
        <br />
        <span><h1 style={{fontWeight:"900"}}>Frequently Asked Questions</h1></span>
        <br />

          {/* Accordian Start */}

        <div className='container'>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                How can I book salon at home ?
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                You can book HOME SALON services from our website/app and browse through the categories of services provided by HOME SALON. click the service you need, choose your date and time preference. You will be asked to make a payment for the service, you will get service at home.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Does Home Salon offer all kinds of Beauty Salon services in ?
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                Our HOME SALON beautician in and provide best salon services, including but not limited to bridal makeup, waxing, threading, hair care, skin clean up, facial bleach, manicure, pedicure, party makeup, de-tan treatment and spa treatment. If you have any special requests, you can discuss them with our beautician. The makeup artist will do those during your session.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingEleven">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                Does Home Salon beauticians providing beauty salon at home in bring their own beauty kit?
                </button>
              </h2>
              <div id="collapseEleven" class="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                Yes, our Home Salon beauticians will get their own beauty products and facials. You don't have to worry about arranging them before service. If you wish to use your own products, you can do that too. Please inform the beautician about it, once they call for the service.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                Do Home Salon near me accept online payments?
                </button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                Yes, Home Salon beauty salon services at home provide multiple payment options including online payment like paytm, gpay, phonepe. And we accept cash also.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFive">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                Does your Home Salon beautician, are reliable and well professional?
                </button>
              </h2>
              <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                Yes, our Team of beauticians, are well trained and Very efficient in giving satisfactory output home beauty salon at reasonable cost.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingSix">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                Should I need to make advance booking with a best beauty salon near me ?
                </button>
              </h2>
              <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                Yes, you have to book your service at Home Salon app or website. it is recommended to take an appointment at least a two hours before beauty parlour service required to you. 
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingSeven">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                Which products kit do Home Salon beauty salons use for best bridal makeup? 
                </button>
              </h2>
              <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                Our all best beauty professional Generally, use the best, safe, and hygienic products depending upon your skin type. Some may even offer certain brands that you can choose from while book beauty services. Brands which are most famous are likeAroma Magic Gold Facial Kit, Nature's Essence Magic Fruit Facial Kit, VLCC Gold Radiance Facial Kit, Jovees Fruit mini Facial Value Kit, VLCC Papaya Fruit Facial Kit, Biotique Party Glow Facial Kit for Instant Glow, VLCC Diamond Facial Kit, Aroma Magic Bridal Glow Facial Kit, Lakme Absolute Perfect Radiance Facial Kit, O3+ Bridal Facial Kit, lotus Herbals Radiant Gold Cellular Glow Facial Kit, O3+, Lotus, Kit.So, trust these all bridal makeup kits in Dehradun to look best at your wedding and flawless in all your wedding photos.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingEight">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                Home Salon offering how many types of beauty services for women under beauty parlour services at home?
                </button>
              </h2>
              <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                Home Salon offer best beauty services like hair cutting, hair colour, hair styling, hair keratin, etc. for hair colouring, there are four types of hair Color- Temporary, Semi-permanent, Demi-permanent and Permanent. A temporary Color will stain or coat the outside of the hair shaft, and as the name implies, it will wash out in one or two shampoos. Weuse the best, safe, and hygienic hair colouring products depending upon your skin type. Hair colour Brands which are most famous to refresh your look are likeGarnier Olia Permanent Hair Color, L'Oréal Paris Excellence Crème Hair Color, Clairol Natural Instincts Semi-Permanent Hair Color, Wella Color Charm Liquid Hair Color, Clairol Nice 'n Easy Root Touch-Up. Please do confirm this at the time of service booking.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingNine">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                Do Home Salon salons providing beauty parlour services at home offer combo deals?
                </button>
              </h2>
              <div id="collapseNine" class="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                Yes, Home Salon various beauty parlours offer package deals and great discounts. which will be intimated to you once our beautician visits your home. 
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTen">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                Do Home Salon bridal makeup artists bring hair accessories or the clients have to arrange them? 
                </button>
              </h2>
              <div id="collapseTen" class="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                Best Bride Hairstyling is a special part of any bridal makeup. The accessories required to get the desired hairstyle are usually brought by our bridal makeup artists and the charges for the same will be included in the bridal makeup package cost. Though, if you want, you can bring your own accessories as per your requirement. Discuss about this with our makeup artist in advance.
                </div>
              </div>
            </div>
          </div>
          <br />
          {/* Accordian End */}
        </div>
      </div>
      <br/>
          {/* Third Section end */}
    </div>
    
  )
}
