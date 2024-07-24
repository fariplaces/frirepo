import React from "react";
import Link from "next/link";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CountUp from "react-countup";

function AboutArea() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const Singlepercentage = 85;
  const singleXmPercentage = 68;
  return (
    <>
      <section className="about-area sec-mar">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-6">
              <div className="about-left">
                <div className="title black">
                  <span>About us</span>
                  <h2 className="mb-15">Direction with our Watch Security.</h2>
                </div>
                <p>
                
At Watch Security, we understand that every property and business is unique. That’s why we take a personalised approach to security, working closely with our clients to assess their requirements and design customised solutions that address their specific concerns. Whether it’s installing state-of-the-art CCTV systems, access control solutions, or intruder alarms, we have the expertise to deliver reliable and effective security measures.
                </p>
                <div className="our-mission">
                  <div className="msn-icon">
                    <i>
                      <img
                        src={
                          
                          "/images/about.png"
                        }
                        alt="images"
                      />
                    </i>
                  </div>
                  <div className="msn-content">
                    <h5>Our Mission</h5>
                    <p>
                    Watch Security is a leading provider of electronic security and alarm monitoring services for residential, small, and large businesses across the United Kingdom.
                    </p>
                  </div>
                  <div className="cto">
                    {/* <img
                      src={ "/images/ctoFounder.png"}
                      alt="imgs"
                    /> */}
                  </div>
                </div>
                <div className="cmn-btn">
                  <Link onClick={scrollTop} href={`/about`}>About more</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="about-right">
                <div className="group-images">
                  <img
                    src={ "/images/about.png"}
                    alt="images"
                  />
                  <div className="about-top">
                    <img
                      src={ "/images/about3.png"}
                      alt="images"
                    />
                  </div>
                  <div className="about-skills">
                    <div className="signle-skill">
                      <CircularProgressbar
                        value={Singlepercentage}
                        text={`${Singlepercentage}%`}
                        className="progress-bar-circle"
                      />
                      <div className="skill-content">
                        <h6>web</h6>
                        {/* <p>Clean Design</p> */}
                      </div>
                    </div>
                    <div className="signle-skill xsm">
                      <CircularProgressbar
                        value={singleXmPercentage}
                        text={`${singleXmPercentage}%`}
                        className="progress-bar-circle"
                      />
                      <div className="skill-content">
                        <h6>App</h6>
                        {/* <p>Developing</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="features-count">
            <div className="row">
              <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3">
                <div className="single-count">
                  <i>
                    <img
                      src={ "/images/icons/count-1.png"}
                      alt="images"
                    />
                  </i>
                  <div className="counter">
                    <CountUp end={250} delay={2} duration={5} /> <sup>+</sup>
                  </div>
                  <p>Project Completed</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3">
                <div className="single-count">
                  <i>
                    <img
                      src={ "/images/icons/count-2.png"}
                      alt="images"
                    />
                  </i>
                  <div className="counter">
                    <CountUp end={150} delay={1} duration={5} /> <sup>+</sup>
                  </div>
                  <p>Satisfied Clients</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3">
                <div className="single-count">
                  <i>
                    <img
                      src={ "/images/icons/count-3.png"}
                      alt="images"
                    />
                  </i>
                  <div className="counter">
                    <CountUp end={150} delay={3} duration={5} /> <sup>+</sup>
                  </div>
                  <p>Expert Teams</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3">
                <div className="single-count xsm">
                  <i>
                    <img
                      src={ "/images/icons/count-4.png"}
                      alt="images"
                    />
                  </i>
                  <div className="counter">
                    <CountUp end={100} delay={4} duration={5} /> <sup>+</sup>
                  </div>
                  <p>Win Awards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutArea;
