import React from "react";
import "swiper/css/autoplay";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";

import Link from "next/link";
// import Swiper, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
// import { SwiperSlide } from "swiper/react";
// import Swi wiperSlide } from "swiper/react";
// SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay]);
// install Swiper modules
function HeroArea() {
  const HeroSlider = {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 0,
    loop: "true",
    clickable: true,
    autoplay: true,
    effect: "fade",
    centeredSlides: true,
    roundLengths: true,
    fadeEffect: {
      crossFade: true,
    },
  };
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <section className="hero-area">
        <div className="swiper hero-slider">
          <Swiper
            pagination={{
              type: "bullets",
              clickable: true,
            }}
            {...HeroSlider}
            loop={true}
            className="swiper-wrapper"
          >
            <SwiperSlide className="swiper-slide">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <div className="hero-content-wrapper">
                      <div className="hero-content-wrap">
                        <div className="hero-content-img">
                          <img
                            src={
                              
                              "/images/headerimg1.jpg"
                            }
                            alt="images"
                          />
                        </div>
                        <div className="hero-content">
                          <h2>Creative</h2>
                          <h1>
                          Home & Commercial Building  <span> Security Services.</span>
                          </h1>
                          <p>
                          Welcome to Watch Security Limited, the Experts in Electronic Security Systems and Electric Gates Installation Across the UK!
                          </p>
                          <Link
                            onClick={scrollTop}
                            href={`/about`}
                            className="about-btn"
                          >
                            About us
                          </Link>
                          <Link
                            onClick={scrollTop}
                            href={`/project-details`}
                            className="work-btn"
                          >
                            How we work
                          </Link>
                          <div className="slider-num">
                            <span>01</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <div className="hero-content-wrapper">
                      <div className="hero-content-wrap">
                        <div className="hero-content-img">
                          <img
                            src={
                              
                              "/images/headerimg2.webp"
                            }
                            alt="images"
                          />
                        </div>
                        <div className="hero-content">
                          <h2>Creative</h2>
                          <h1>
                          Home & Commercial Building  <span> Security Services.</span>
                          </h1>
                          <p>
                          
                          Welcome to Watch Security Limited, the Experts in Electronic Security Systems and Electric Gates Installation Across the UK!
                          </p>
                          <Link
                            onClick={scrollTop}
                            href={`/about`}
                            className="about-btn"
                          >
                            About us
                          </Link>
                          <Link
                            onClick={scrollTop}
                            href={`/project-details`}
                            className="work-btn"
                          >
                           VIEW SERVICES
                          </Link>
                          <div className="slider-num">
                            <span>02</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <div className="hero-content-wrapper">
                      <div className="hero-content-wrap">
                        <div className="hero-content-img">
                          <img
                            src={
                              
                              "/images/headerimg3.webp"
                            }
                            alt="images"
                          />
                        </div>
                        <div className="hero-content">
                          <h2>Creative</h2>
                          <h1>
                          Home & Commercial Building  <span> Security Services.</span>
                          </h1>
                          <p>
                          Welcome to Watch Security Limited, the Experts in Electronic Security Systems and Electric Gates Installation Across the UK!
                          </p>
                          <Link
                            onClick={scrollTop}
                            href={`/about`}
                            className="about-btn"
                          >
                            About us
                          </Link>
                          <Link
                            onClick={scrollTop}
                            href={`/project-details`}
                            className="work-btn"
                          >
                            How we work
                          </Link>
                          <div className="slider-num">
                            <span>03</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="swiper-pagination" />
        </div>
        <div className="social-media">
          <ul className="social-list">
            <li>
              <a rel="noopener noreferrer" href="https://www.facebook.com/">
                Facebook
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="https://www.instagram.com/">
                instagram
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="https://www.linkedin.com/">
                Linked in
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default HeroArea;
