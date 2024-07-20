'use client'
import React from "react";
import Link from "next/link";
import { SRLWrapper } from "simple-react-lightbox";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
SwiperCore.use([Navigation, Autoplay]);

function PortfolioArea(props) {
  const portfolioSlider = {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 5000,
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      // when window width is >= 640px
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      // when window width is >= 1400px
      1400: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
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
      <SRLWrapper>
        <div className="portfolio-area sec-mar-top">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-7 col-xl-5">
                <div className={`title ${props.black}`}>
                  <span>NEWS ROOM</span>

                  <h2>LATEST BLOG FROM WATCH SECURITY</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper portfolio-slider">
            <Swiper
              {...portfolioSlider}
              pagination={{
                type: "bullets",
                clickable: true,
                // el:".swiper-pagination"
              }}
              className="swiper-wrapper"
            >
              <SwiperSlide className="swiper-slide">
                <div className="single-portfolio">
                  <div className="portfolio-data">
                    <a href="/home">
                      <img
                        src={
                          
                          "/images/headerimg.jpg"
                        }
                        alt="images"
                      />
                    </a>
                  </div>
                  <div className="portfolio-inner">
                    <span>Mastering Access Control</span>
                    <h4>Access control is a fundamental aspect of security in today’s world. It plays a crucial role in safeguarding our physical Read More</h4>

                    <div className="portfolio-hover">
                      <Link
                        onClick={scrollTop}
                        href={`/project-details`}
                        className="case-btn"
                      >
                        Read More »
                      </Link>
                      <a
                        data-lightbox="image1"
                        href={
                          
                          "/images/"
                        }
                      >
                        <i
                          alt="images"
                          src={
                            
                            "/images/portfolio/search-2.svg"
                          }
                          className="fas fa-search"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="single-portfolio">
                  <div className="portfolio-data">
                    <a href="#s">
                      <img
                        src={
                          
                          "/images/portfolio/portfolio-2.jpg"
                        }
                        alt="images"
                      />
                    </a>
                  </div>
                  <div className="portfolio-inner">
                    <span>The Power of Intruder Alarm Systems</span>
                    <h4>Security is a fundamental human need. Whether you’re a homeowner or a business owner, the peace of mind that comes</h4>
                    <div className="portfolio-hover">
                      <Link
                        onClick={scrollTop}
                        href={`/project-details`}
                        className="case-btn"
                      >
                        Read More »
                      </Link>
                      <a
                        data-lightbox="image1"
                        href={
                          
                          "/images/portfolio/portfolio-2.jpg"
                        }
                      >
                        <img
                          alt="images"
                          src={
                            
                            "/images/portfolio/search-2.svg"
                          }
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="single-portfolio">
                  <div className="portfolio-data">
                    <a href="#s">
                      <img
                        src={
                          
                          "/images/portfolio/portfolio-3.jpg"
                        }
                        alt="images"
                      />
                    </a>
                  </div>
                  <div className="portfolio-inner">
                    <span>The Essence of Security</span>
                    <h4>Security is not just a luxury; it’s a necessity. Whether you are a homeowner concerned about the safety of your</h4>
                    <div className="portfolio-hover">
                      <Link
                        onClick={scrollTop}
                        href={`/project-details`}
                        className="case-btn"
                      >
                        Read More »
                      </Link>
                      <a
                        data-lightbox="image1"
                        href={
                          
                          "/images/portfolio/portfolio-3.jpg"
                        }
                      >
                        <img
                          alt="images"
                          src={
                            
                            "/images/portfolio/search-2.svg"
                          }
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="single-portfolio">
                  <div className="portfolio-data">
                    <a href="#s">
                      <img
                        src={
                          
                          "/images/portfolio/portfolio-4.jpg"
                        }
                        alt="images"
                      />
                    </a>
                  </div>
                  <div className="portfolio-inner">
                    <span>Mastering Access Control</span>
                    <h4>Access control is a fundamental aspect of security in today’s world. It plays a crucial role in safeguarding our physical</h4>
                    <div className="portfolio-hover">
                      <Link
                        onClick={scrollTop}
                        href={`/project-details`}
                        className="case-btn"
                      >
                       Read More »
                      </Link>
                      <a
                        data-lightbox="image1"
                        href={
                          
                          "/images/portfolio/portfolio-4.jpg"
                        }
                      >
                        <img
                          alt="images"
                          src={
                            
                            "/images/portfolio/search-2.svg"
                          }
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="single-portfolio">
                  <div className="portfolio-data">
                    <a href="#s">
                      <img
                        src={
                          
                          "/images/portfolio/portfolio-5.jpg"
                        }
                        alt="images"
                      />
                    </a>
                  </div>
                  <div className="portfolio-inner">
                    <span>The Power of Intruder Alarm Systems</span>
                    <h4>Security is a fundamental human need. Whether you’re a homeowner or a business owner, the peace of mind that comes</h4>
                    <div className="portfolio-hover">
                      <Link
                        onClick={scrollTop}
                        href={`/project-details`}
                        className="case-btn"
                      >
                       Read More »
                      </Link>
                      <a
                        data-lightbox="image1"
                        href={
                          
                          "/images/portfolio/portfolio-5.jpg"
                        }
                      >
                        <img
                          alt="images"
                          src={
                            
                            "/images/portfolio/search-2.svg"
                          }
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="single-portfolio">
                  <div className="portfolio-data">
                    <a href="#s">
                      <img
                        src={
                          
                          "/images/portfolio/portfolio-3.jpg"
                        }
                        alt="images"
                      />
                    </a>
                  </div>
                  <div className="portfolio-inner">
                    <span>The Essence of Security</span>
                    <h4>Security is not just a luxury; it’s a necessity. Whether you are a homeowner concerned about the safety of your</h4>
                    <div className="portfolio-hover">
                      <Link
                        onClick={scrollTop}
                        href={`/project-details`}
                        className="case-btn"
                      >
                        Read More »
                      </Link>
                      <a
                        data-lightbox="image1"
                        href={
                          
                          "/images/portfolio/portfolio-3.jpg"
                        }
                      >
                        <i className="fas fa-search" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="swiper-pagination" />
            <div className="swiper-button-next" />
            <div className="swiper-button-prev" />
          </div>
        </div>
      </SRLWrapper>
    </>
  );
}

export default PortfolioArea;
