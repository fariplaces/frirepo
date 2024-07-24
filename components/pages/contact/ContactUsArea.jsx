import React from "react";


function ContactUsArea() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col col-xl-6">
            <div className="title black">
              <span>Get In Touch</span>
              <h2>WELL TRAINED WATCH SECURITY</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 col-xl-4">
            <div className="office-info">
              <div className="icon">
                <i className="bi bi-geo-alt" />
              </div>
              <h4>Phone</h4>
              <p>
              Our customer care is open from Mon-Fri, 10:00 am to 6:00 pm

South Yorkshire, S9 5AB, United Kingdom
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-4">
            <div className="office-info">
              <div className="icon">
                <i className="bi bi-telephone" />
              </div>
              <h4>Email</h4>
              <a href="tel:0123456789102">Our customer care is open from Mon-Fri, 10:00 am to 6:00 pm</a>
              <a href="tel:013456789102">0800 002 5272</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-4">
            <div className="office-info">
              <div className="icon">
                <i className="bi bi-envelope" />
              </div>
              <h4>Location</h4>
              <a href="mailto:info@example.com">Our customer care is open from Mon-Fri, 10:00 am to 6:00 pm</a>
              <a href="mailto:support@example.com">info@watchsecurityltd.co.uk</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUsArea;
