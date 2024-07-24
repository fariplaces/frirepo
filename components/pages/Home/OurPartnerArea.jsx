'use client';
import React from "react";
function OurPartnerArea() {
  return (
    <>
      <section className="our-partner">
        <div className="container-fluid g-0 overflow-hidden">
          <div className="row align-items-center g-0">
            <div className="col-12 col-xl-6">
              <div className="newsletter">
                <div className="subscribes">
                  <span>Get In Touch</span>
                  <h1>Subscribe Our</h1>
                  <h2>Watch Security</h2>
                  <div className="subscribe-form">
                    <form
                      onSubmit={(e) => e.preventDefault()}
                      action="#"
                      method="post"
                    >
                      <input
                        type="email"
                        name="email"
                        placeholder="Type Your Email"
                      />
                      <input type="submit" defaultValue="Connect" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-6">
              <div className="our-clients">
                <div className="row align-items-center">
                  <div className="col-md-6 col-lg-4 col-xl-6">
                    <div className="title">
                      <span>Our partner</span>
                      <h2>Protecting Your Business with Top-rated Security Solutions Nationwide</h2>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div className="single-client">
                      <img
                        src={
                          
                          "/images/partner1.PNG"
                        }
                        alt="images"
                      />
                      <div className="client-hover">
                        <span>Compassion</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div className="single-client">
                      <img
                        src={
                          
                          "/images/partner2.png"
                        }
                        alt="images"
                      />
                      <div className="client-hover">
                        <span>Commitment</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div className="single-client">
                      <img
                        src={
                         
                          "/images/partner3.png"
                        }
                        alt="images"
                      />
                      <div className="client-hover">
                        <span>Excellence</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div className="single-client">
                      <img
                        src={
                        
                          "/images/partner4.png"
                        }
                        alt="images"
                      />
                      <div className="client-hover">
                        <span>Team <br />Work</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div className="single-client">
                      <img
                        src={
                        
                          "/images/partner5.png"
                        }
                        alt="images"
                      />
                      <div className="client-hover">
                        <span>Value</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div className="single-client">
                      <img
                        src={
                       
                          "/images/partner6.png"
                        }
                        alt="images"
                      />
                      <div className="client-hover">
                        <span>Ethnicity</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div className="single-client">
                      <img
                        src={
                       
                          "/images/partner7.png"
                        }
                        alt="images"
                      />
                      <div className="client-hover">
                        <span>Trusted security</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div className="single-client">
                      <img
                        src={
                        
                          "/images/partner8.png"
                        }
                        alt="images"
                      />
                      <div className="client-hover">
                        <span>smart system</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div className="single-client">
                      <img
                        src={
                         
                          "/images/partner9.png"
                        }
                        alt="images"
                      />
                      <div className="client-hover">
                        <span>24/7 Hours Support</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div className="single-client">
                      <img
                        src={
                          
                          "/images/partner10.png"
                        }
                        alt="images"
                      />
                      <div className="client-hover">
                        <span>quality Services</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurPartnerArea;
