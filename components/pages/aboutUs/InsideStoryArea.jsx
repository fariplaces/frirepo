import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { buildStyles } from "react-circular-progressbar";

function InsideStoryArea() {
  const Singlepercentage = 90;
  const singleXmPercentage = 95;
  const singleXmlPercentage = 88;
  const circlebar = {
    text: {
      fill: "#f88",
      fontSize: "16px",
    },
  };
  return (
    <>
      <section className="about-area sec-mar">
        <div className="container">
          <div className="out-story">
            <div className="row">
              <div className="col-lg-6 col-xl-6">
                <div className="story-left">
                  <div className="office-group-img">
                    <img
                      src={ "/images/about2.png"}
                      alt="images"
                    />
                    <div className="cto-message-wrapper">
                      <div className="cto-message">
                        <p>
                        Watch Security is a leading provider of electronic security and alarm monitoring services for residential, small, and large businesses across the United Kingdom. 
                        </p>
                        <h4>
                          {/* Carlo Rabil. <span>CTO &amp; FOUNDER, Finibus</span> */}
                        </h4>
                        <img
                          src={
                            process.env.PUBLIC_URL + "/images/cto-signature.png"
                          }
                          alt="images"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-6">
                <div className="story-right">
                  <div className="title black">
                    <span>ABOUT US</span>
                    <h2 className="mb-15">
                    HELLO! HERE WE ARE -
                    </h2>
                  </div>
                  <p>
                 Watch Security is a leading provider of electronic security and alarm monitoring services for residential, small, and large businesses across the United Kingdom. With our commitment to safeguarding homes and businesses, we offer reliable and innovative security solutions tailored to meet the unique needs of our clients. Led by our dedicated Managing Director, Hassan Khan, and supported by a team of highly skilled and professional engineers, Watch Security has built a reputation for excellence in the industry. Our team brings together extensive expertise in electronic security systems, ensuring that our clients receive the highest level of protection and peace of mind.
                  </p>
                  <div className="story-skills">
                    <div className="story-skill">
                      <CircularProgressbar
                        {...circlebar}
                        valueStart={0}
                        styles={buildStyles({
                          pathTransition:
                            Singlepercentage === 0
                              ? "none"
                              : "stroke-dashoffset 0.5s ease 0s",
                        })}
                        strokeWidth={1}
                        value={Singlepercentage}
                        text={`${Singlepercentage}%`}
                        className="progress-bar-circle"
                      />

                      <span>Residential &amp; Commercial  </span>
                    </div>
                    <div className="story-skill">
                      <CircularProgressbar
                        strokeWidth={1}
                        value={singleXmPercentage}
                        text={`${singleXmPercentage}%`}
                        className="progress-bar-circle"
                      />

                      <span> Access Control  Barriers</span>
                    </div>
                    <div className="story-skill">
                      <CircularProgressbar
                        strokeWidth={1}
                        value={singleXmlPercentage}
                        text={`${singleXmlPercentage}%`}
                        className="progress-bar-circle"
                      />
                      <span>24/7 Support</span>
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

export default InsideStoryArea;
