'use client';
import React from "react";
import Link from "next/link";

function NewsLatterArea(props) {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <section className="latest-news sec-mar">
        <div className="container">
          <div className="row gx-4">
            <div className="col-md-6 col-lg-4 col-xl-4">
              <div className="signle-news">
                <div className="tag">
                  <Link onClick={scrollTop} href={"#"}>
                    ATOMASZ
                  </Link>
                </div>
                <div className="post-img">
                  <Link
                    onClick={scrollTop}
                    href={`/blog-details`}
                  >
                    <img
                      src={ "/images/post/post-1.jpg"}
                      alt="img"
                    />
                  </Link>
                </div>
                <div className="news-content">
                  <div className="author">
                    <div className="author-pic">
                      <img
                        src={
                           "/images/atoma.jpg"
                        }
                        alt="images"
                      />
                    </div>
                    <div className="author-info">
                      <h5>Posted by, Alen Jodge</h5>
                      <span>05 January, 2022</span>
                    </div>
                  </div>
                  <h3>
                    <Link
                      onClick={scrollTop}
                      href={`/blog-details`}
                    >
                        <p>
                    Positive: Professionalism, Punctually, Quality, Responsiveness, Value Hassan and it team have been recommended to my by the company who provided my gate. I can say I could not
                    recommend them enough for their swift and professional services.And very reason-able prices!! If i need anything in the future
                    </p>
                    </Link>
                  </h3>
                  {/* <p>
                    Aptent taciti sociosqu ad litora torquent pi himenaeos.
                    Praesent nec neque at dolor ti venenatis consectetur eu quis
                    ex.
                  </p> */}
                  <div className="view-btn">
                    <Link
                      onClick={scrollTop}
                      href={`/blog-details`}
                    >
                      View details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-4">
              <div className="signle-news">
                <div className="tag">
                  <Link onClick={scrollTop} href={"/"}>
                    MIKE MORGAN
                  </Link>
                </div>
                <div className="post-img">
                  <Link
                    onClick={scrollTop}
                    href={`/blog-details`}
                  >
                    <img
                      src={ "/images/post/post-2.jpg"}
                      alt="images"
                    />
                  </Link>
                </div>
                <div className="news-content">
                  <div className="author">
                    <div className="author-pic">
                      <img
                        src={
                           "/images/morgan.jpg"
                        }
                        alt="images"
                      />
                    </div>
                    <div className="author-info">
                      <h5>Posted by, Kim karden</h5>
                      <span>05 January, 2022</span>
                    </div>
                  </div>
                  <h3>
                    <Link
                      onClick={scrollTop}
                      href={`/blog-details`}
                    >
                      <p>It is the first time I have used Hassan and his team and mu expectations have been exceeded. The professional-ism and quality of the work has been fantastic and also the customer
                      care has been great. I would definitely use the team again in the future, for example if i update my alarams system and I highly recommend the team.</p>
                    </Link>
                  </h3>
                  {/* <p>
                    Aptent taciti sociosqu ad litora torquent pi himenaeos.
                    Praesent nec neque at dolor ti venenatis consectetur eu quis
                    ex.
                  </p> */}
                  <div className="view-btn">
                    <Link
                      onClick={scrollTop}
                      href={`/blog-details`}
                    >
                      View details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-4">
              <div className={`title ${props.black}`}>
                <span>TESTIMONIAL</span>
                <h2>LOVES FROM SPECIAL CLIENTS</h2>
                <div className="cmn-btn">
                  <Link
                    onClick={scrollTop}
                    href={`/blog`}
                  >
                    View All Client
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

export default NewsLatterArea;
