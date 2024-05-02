import React from "react";
import "../Css/AboutUs.css";
import { Link } from "react-router-dom";



function AboutUs() {
  return (
    <div>
      <br />
      <div class="container">
        <div class="row">
          <div id="heading" class="col-6" >
          <br />
            <h2 className="text-center" style={{'font-family':"'Mynerve', cursive"}}>WHO </h2><br />
            <h2 className="text-center" style={{'font-family':"'Mynerve', cursive"}}>WE</h2><br />
            <h2 className="text-center" style={{'font-family':"'Mynerve', cursive"}}>ARE</h2><br /> 
          </div>
          
          <div id="detail" class="col-6">
            <p style={{'font-family':"'Mynerve', cursive"}}>
              At Inshine, we know each skin type is unique and needs
              individual attention to understand its needs. <br />
              <br />
              We are committed to
              bringing you differentiated yet effective products and
              experiences. We now bring to you the opportunity to Customise Your
              Own Facial Cream. It is a project which we started ten years ago,
              but were perhaps ahead of our time
            </p>
          </div>
          
        
        </div>
      </div>

      <br />

      <div className="container">
        <img
          src="./images/inner_salon5.jpeg"
          className="d-block w-100"
          alt="..."
          style={{ width: "2000px", height: "600px" }}
        />
      </div>
      <br />
      <hr/>

      <br />

      <div class="container">
        <div class="row">
          <div id="heading" class="col-6">
            <h2 className="text-center"style={{'font-family':"'Mynerve', cursive"}}>HOW </h2><br />
            <h2 className="text-center" style={{'font-family':"'Mynerve', cursive"}}>WE</h2><br />
            <h2 className="text-center" style={{'font-family':"'Mynerve', cursive"}}>DO</h2><br />
            <h2 className="text-center" style={{'font-family':"'Mynerve', cursive"}}>IT</h2><br />
          </div>
          <div id="detail" class="col-6">
            <p style={{'font-family':"'Mynerve', cursive"}}>
              At Inshine, we know each skin type is unique and needs
              individual attention to understand its needs. <br />
              <br />
              We are committed to
              bringing you differentiated yet effective products and
              experiences. We now bring to you the opportunity to Customise Your
              Own Facial Cream. It is a project which we started ten years ago,
              but were perhaps ahead of our time
            </p>
          </div>
          
        </div>
      </div>
      {/* <div class="container text-center">
        <p style={{ "text-align": "justify", fontSize: "18px" }}>
          <b>
            We have Experienced & Premium beauty professionals in the list of
            home salon. All beautician come on-board after pass our standard and
            cosmetics test.
          </b>
        </p>
      </div> */}

      <br />

      <div class="container text-center">
        <img
          src="./images/inner_salon2.jpg"
          style={{ width: "1100px", height: "400px" }}
        />
      </div>
      <br />
      <hr/>
      <br />

      <div class="container">
        <div class="row">
          <div id="heading" class="col-6">
            <h2 className="text-center" style={{'font-family':"'Mynerve', cursive"}}>WHAT </h2><br />
            <h2 className="text-center" style={{'font-family':"'Mynerve', cursive"}}>YOU</h2><br />
            <h2 className="text-center" style={{'font-family':"'Mynerve', cursive"}}>GET</h2><br />
          </div>
          <div id="detail" class="col-6">
            <p style={{'font-family':"'Mynerve', cursive"}}> <br/>
            Save 40-50% of your money compared to other local Salon.
           
            You will
            also get assured satisfaction with our services because your 
            hard-earned money deserves 100% satisfaction.
            </p>
          </div>
          
        </div>
      </div>

      {/* <div class="container text-center">
        <p style={{ "text-align": "justify", fontSize: "18px" }}>
          <b>
            Save 40-50% of your money compared to other local Salon. You will
            also get assured satisfaction with our services because your
            hard-earned money deserves 100% satisfaction.
          </b>
        </p>
      </div> */}

      <br />

      <div class="container">
        <div class="row">
          <div class="col-6">
            <img
              src="./images/inner_salon3.jpg"
              style={{
                width: "600px",
                height: "auto",
                border: "1px solid black",
                display: "flex",
              }}
            />
          </div>
          <div class="col-6">
            <img
              src="./images/inner_salon4.jpg"
              style={{
                width: "600px",
                height: "auto",
                border: "1px solid black",
                display: "flex",
              }}
            />
          </div>
        </div>
      </div>
      <br />
      <hr/>
      <br/>
      

      <div class="container">
        <div class="row">
          <div id="heading" class="col-6"><br />
            <h2 className="text-center" style={{'font-family':"'Mynerve', cursive", marginTop:'50px'}}>CUSTOMIZED</h2><br />
            <h2 className="text-center" style={{'font-family':"'Mynerve', cursive"}}>PRODUCTS</h2><br />
            
          </div>
          <div id="detail" class="col-6">
            <p style={{'font-family':"'Mynerve', cursive"}}>
            We will immerse each person into the Inshine, introducing them to our expert created questionnaire and an in-depth consultation with our Ayurveda experts, after which a designated R&D team will process your answers to determine a unique blend of clean, active ingredients. <br />
              <br />
              This final step is that your bespoke beauty formula will, after being especially designed for you, arrive at the comfort of your home, delivered to your doorstep.
            </p>
          </div>
        </div>
      </div>
      <br />


      <div className="container">
        <img
          src="./images/customize_products.jpg"
          className="d-block w-100"
          alt="..."
          style={{ width: "2000px", height: "600px" }}
        />
      </div>

      <br />
    </div>
  );
}

export default AboutUs;
