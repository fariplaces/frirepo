'use client';
import React from "react";
import Link from "next/link";

function LetsTalkArea() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <section className="lets-talk sec-pad">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-9 col-lg-8 col-xl-7">
              <div className="title special">
                <span>OUR SOLUTIONS</span>
                <h2>
                  PROTECT YOUR HOME OR BUSINESS WITH OUR WATCH<br />
                  <b>SECURITY</b> SOLUTIONS
                </h2>
              </div>
            </div>
            <div className="col-md-3 col-lg-4 col-xl-5 text-end">
              <div className="getin-touch">
                <div className="cmn-btn">
                  <Link href="/contact" legacyBehavior>
                    <button onClick={scrollTop} className="btn">Get In Touch</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LetsTalkArea;
