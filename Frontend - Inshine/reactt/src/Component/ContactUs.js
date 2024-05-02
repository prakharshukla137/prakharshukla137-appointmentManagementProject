import React from "react";
import '../Css/ContactUs.css';

function ContactUs() {
    return (
        <div>


            <body>
                <section class="banner-bottom py-5">
                    <div id="contact" class="container py-md-5">
                        <h3 id="contactus" class="title-wthree mb-lg-5 mb-4 text-center">Contact Us </h3>
                        <div class="row contact_information">
                            <div class="col-md-6">
                                <div class="contact_right p-lg-5 p-4">
                                    <form action="#" method="post">
                                        <div class="field-group">

                                            <div class="content-input-field">
                                                <input name="text1" id="text1" type="email" value="" placeholder="User Email" required=""/>
                                            </div>
                                        </div>
                                        <div class="field-group">

                                            <div class="content-input-field">
                                                <input name="text1" id="text3" type="text" value="" placeholder="User Phone" required=""/>
                                            </div>
                                        </div>
                                        <div class="field-group">
                                            <div class="content-input-field">
                                                <textarea placeholder="Your Message Here..." required=""></textarea>
                                            </div>
                                        </div>
                                        <div class="content-input-field">
                                            <button type="submit" class="btn">Submit</button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                            <div class="col-md-6 contact_left p-4">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.2136855548047!2d73.84802401491636!3d20.041490386541426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddea68870d56c7%3A0xdcdd72fe89fc2e94!2sMET%20Bhujbal%20Knowledge%20City!5e0!3m2!1sen!2sin!4v1677060408358!5m2!1sen!2sin"></iframe>
                            </div>

                            <div class="col-lg-4 col-md-6 mt-lg-4 contact-inn-w3pvt">
                               
                                <div class="mt-5 information-wthree">
                                    
                                    <h4 class="text-uppercase mb-4"><span class="fa fa-comments"></span> Communication</h4>
                                    <p style={{fontWeight:'bold'}}  class="cont-wthree-para mb-3 text-capitalize">For general queries , please email us at <a href="mailto:info@example.com" style={{color:'rgb(169, 179, 248'}}>support@inshine.com</a></p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 mt-lg-4 contact-inn-w3pvt">
                                <div class="mt-5 information-wthree">
                                    <h4 class="text-uppercase mb-4"><span class="fa fa-life-ring"></span> Technical Support</h4>
                                    <p style={{fontWeight:'bold'}} class="cont-wthree-para mb-3 text-capitalize">we are ready to help! if you have any queries   <label style={{fontSize:'17px', color:' rgb(169, 179, 248)'}}>Tel : +91 9399125462  </label>.</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 mt-lg-4 contact-inn-w3pvt">
                                <div class="mt-5 information-wthree">
                                    <h4 class="text-uppercase mb-4"><span class="fa fa-map"></span> Others</h4>
                                    <p style={{fontWeight:'bold'}} class="cont-wthree-para mb-3 text-capitalize">Working Days :<label style={{fontSize:'17px', color:' rgb(169, 179, 248)'}}>Monday-Saturday | 10:00 AM - 7:00 PM </label>
                                        </p>
                                        
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



            </body>

        </div>
    );
}

export default ContactUs;
