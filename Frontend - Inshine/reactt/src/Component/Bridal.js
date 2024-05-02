import React from "react";
import "../Css/Style.css";

export default function Bridal() {
  return (
    <div>
      {/* slidder-start */}
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={3000}>
            <img
              src="./images/bridalslide1.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval={3000}>
            <img
              src="./images/bridalslide2.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval={3000}>
            <img src="./images/bridalslide3.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <br/>

      {/* slidder-end */}
      <div className="text-center">
          <p><h4 id="bridalH" style={{fontFamily:"revert"}}> Bridal Makeup</h4></p><br/>
          

          {/* <p><h1>Bridal Makeup</h1></p><br/> */}

          <p style={{width:'60%', marginLeft:315, color:'gray', }}><h5 id="bridal1">"Your wedding look is incomplete without bridal makeup. Browse through our blogs for tons of ideas and inspirations for the perfect makeup look for your special day"</h5></p>

      </div>
      <br/>
      <hr/>
      <br/>

    <div>
      <div className="row">
        <div className="col-6">
          <img src="./images/bridal_center.jpg" style={{width:'600px', height:'500px'}}></img>
        </div>
        <div className="col-6" >
          <p style={{width:'60%', textAlign:'center', marginLeft:100, color:' rgb(224, 178, 141', }} ><h1>Services & Pricing </h1></p><hr/>
          {/* <p className="text-center"><h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </h5></p> */}

          <br/>

        <div className="row">

        <div className="col-6">
          <h2 id="bridal"> Silver Light Bride</h2><br/>
          <p>• BRIDAL MAKEUP.................<span style={{color:'rgb(206, 166, 92)'}}>RS.5000</span></p>
          <p>• HAIR STYLE.........................<span style={{color:'rgb(206, 166, 92)'}}>RS.1500</span></p>
          <p>• FACE GROOMING...............<span style={{color:'rgb(206, 166, 92)'}}>RS.1800</span></p>
          <p>• SAREE DRAPING.................<span style={{color:'rgb(206, 166, 92)'}}>RS.1000</span></p>
          <p>• BRIDAL MAKE OVER...........<span style={{color:'rgb(206, 166, 92)'}}>RS.8000</span></p>
        </div>
        
        <div  className="col-6">
          <h2 id="bridal"> Golden Kiss Bride</h2><br/>
          <p>• HD BRIDE MAKEUP.............<span style={{color:'rgb(206, 166, 92)'}}>RS.14000</span></p>
          <p>• HAIR STYLING.....................<span style={{color:'rgb(206, 166, 92)'}}>RS.8000</span></p>
          <p>• FAUX LASH..........................<span style={{color:'rgb(206, 166, 92)'}}>RS.3000</span></p>
          <p>• BROW DESIGN....................<span style={{color:'rgb(206, 166, 92)'}}>RS.11000</span></p>
          <p>• BRIDAL DRESSING.............<span style={{color:'rgb(206, 166, 92)'}}>RS.9000</span></p>
        </div>

        </div>

        </div>
      </div>
      <br/>
      <br/>

      <div className="text-center">
          <p id="welcome" ><h1><b>Our Portfolio</b></h1></p><hr/>
      </div>

      <br/>
      <br/>

      <div>
      <div className="row">
          <div className="col-4">
              <img src="./images/bridal1.jpg"></img>
          </div>
          <div className="col-4">
              <img src="./images/bridal2.jpg"></img>
          </div>
          <div className="col-4">
              <img src="./images/bridal3.jpg"></img>
          </div>
        </div>
        <br/>
        <div className="row">
            <div className="col-4">
                  <img src="./images/bridal4.jpg"></img>
            </div>
            <div className="col-4">
                  <img src="./images/bridal5.jpg"></img>
            </div>
            <div className="col-4">
                  <img src="./images/bridal6.jpeg"></img>
            </div>
        </div>
        <br/>
        <div className="row">
            <div className="col-4">
                  <img src="./images/bridal7.jpg"></img>
            </div>
            <div className="col-4">
                  <img src="./images/bridal8.jpg"></img>
            </div>
            <div className="col-4">
                  <img src="./images/bridal9.jpg"></img>
            </div>
        </div>

        </div>
    </div>

    </div>
  );
}
