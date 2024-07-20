'use client';
import React from "react";

import Link from "next/link";
function ServiceArea() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <section className="service-area sec-pad">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-4 col-xl-4">
              <div className="title">
                <span> OUR SERVICES</span>
                <h2>
                Smart Security Services for your live Saftey Secure your Premises with Confidence 
                </h2>
                <div className="cmn-btn">
                  <Link
                    onClick={scrollTop}
                    href={`/service`}
                  >
                    view all services
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-8 col-xl-8">
              <div className="row g-4">
                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <div className="single-service">
                    <span className="count">01</span>
                    <div className="service-icon">
                      <i>
                        <img
                          src={
                            
                            "/images/icons/service-icon-1.png"
                          }
                          alt="images"
                        />
                      </i>
                    </div>
                    <div className="service-content">
                      <h4>Smart CCTV Systems</h4>
                      <p>
                      Robust CCTV solutions
                      Protect your business & secure it with much confidence.
                      </p>
                      <Link
                        onClick={scrollTop}
                        href={`/service-details`}
                      >
                        read more
                        <i>
                          <img
                            src={
                              
                              "/images/icons/arrow-circle.png"
                            }
                            alt="images"
                          />
                        </i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <div className="single-service">
                    <span className="count">02</span>
                    <div className="service-icon">
                      <i>
                        <img
                          src={
                            
                            "/images/icons/service-icon-2.png"
                          }
                          alt="images"
                        />
                      </i>
                    </div>
                    <div className="service-content">
                      <h4>Access Control</h4>
                      <p>
                      Biometric fingerprint access control Experience seamless and secure entry.
                      </p>
                      <Link
                        onClick={scrollTop}
                        href={`/service-details`}
                      >
                        read more
                        <i>
                          <img
                            src={
                              
                              "/images/icons/arrow-circle.png"
                            }
                            alt="images"
                          />
                        </i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <div className="single-service">
                    <span className="count">03</span>
                    <div className="service-icon">
                      <i>
                        <img
                          src={
                            
                            "/images/icons/service-icon-3.png"
                          }
                          alt="images"
                        />
                      </i>
                    </div>
                    <div className="service-content">
                      <h4>Smart Intruder Alarms</h4>
                      <p>
                      Intruder Alarms - Protect Your Business with Advanced Alarm Systems.
                      </p>
                      <Link
                        onClick={scrollTop}
                        href={`/service-details`}
                      >
                        read more
                        <i>
                          <img
                            src={
                              
                              "/images/icons/arrow-circle.png"
                            }
                            alt="images"
                          />
                        </i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <div className="single-service">
                    <span className="count">04</span>
                    <div className="service-icon">
                      <i>
                        <img
                          src={
                            
                            "/images/icons/service-icon-4.png"
                          }
                          alt="images"
                        />
                      </i>
                    </div>
                    <div className="service-content">
                      <h4>Electric Gates</h4>
                      <p>
                      Secure your entrance in style - Electric Gates for effortless elegance and enhanced security.
                      </p>
                      <Link
                        onClick={scrollTop}
                        href={`/service-details`}
                      >
                        read more
                        <i>
                          <img
                            src={
                              
                              "/images/icons/arrow-circle.png"
                            }
                            alt="images"
                          />
                        </i>
                      </Link>
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

export default ServiceArea;
