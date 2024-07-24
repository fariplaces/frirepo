import React from "react";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";

SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay]);
function TestimonialArea() {
  const testimonialSlider = {
    slidesPerView: 1,
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };
  return (
    <>
      <section className="testimonial-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="swiper testimonial-slider">
                <Swiper
                  pagination={{
                    type: "fraction",
                  }}
                  {...testimonialSlider}
                  className="swiper-wrapper"
                >
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonial-content">
                      <div className="quote">
                        <i className="fas fa-quote-left" />
                      </div>
                      <div className="client-info">
                        <div className="client-pic">
                          <img
                            src={ "/images/about4.png"}
                            alt="images"
                          />
                        </div>
                        <div className="client-details">
                          <h4>Home Security</h4>
                          {/* <span>Executive CEO</span> */}
                        </div>
                      </div>
                      <p>
                        <i className="fas fa-quote-left" /> Experience Tranquility at Home: Elevate Security with Advanced Home Protection Solutions{" "}
                        <i className="fas fa-quote-right" />
                      </p>
                      <div className="rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonial-content">
                      <div className="quote">
                        <i className="fas fa-quote-left" />
                      </div>
                      <div className="client-info">
                        <div className="client-pic">
                          <img
                            src={
                               "/images/about5.png"
                            }
                            alt="images"
                          />
                        </div>
                        <div className="client-details">
                          <h4>Access Control</h4>
                          {/* <span>CTO Founder</span> */}
                        </div>
                      </div>
                      <p>
                        <i className="fas fa-quote-left" /> 
                        Empower Access Control: Fortify Your Spaces with State-of-the-Art Security Solutions{" "}
                        <i className="fas fa-quote-right" />
                      </p>
                      <div className="rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonial-content">
                      <div className="quote">
                        <i className="fas fa-quote-left" />
                      </div>
                      <div className="client-info">
                        <div className="client-pic">
                          <img
                            src={
                               "/images/about6.png"
                            }
                            alt="images"
                          />
                        </div>
                        <div className="client-details">
                          <h4>24/7 Support</h4>
                          {/* <span>Designer Head</span> */}
                        </div>
                      </div>
                      <p>
                        <i className="fas fa-quote-left" />Reliable 24/7 Support Around the Clock: Providing Assurance and Peace of Mind in Critical Moments.{" "}
                        <i className="fas fa-quote-right" />
                      </p>
                      <div className="rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="swiper-button-next" />
                <div className="swiper-button-prev" />
                <div className="swiper-pagination" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TestimonialArea;
