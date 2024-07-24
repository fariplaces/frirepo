import React from "react";
import Link from "next/link";

function LatesNewsArea() {
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
                  <Link href="/" legacyBehavior>
                    <button onClick={scrollTop} className="tag-btn">Web Design</button>
                  </Link>
                </div>
                <div className="post-img">
                  <Link href={`${process.env.PUBLIC_URL}/blog-details`} legacyBehavior>
                    <button onClick={scrollTop} className="img-btn">
                      <img
                        src={process.env.PUBLIC_URL + "/images/post/post-1.jpg"}
                        alt="Web Design Post"
                      />
                    </button>
                  </Link>
                </div>
                <div className="news-content">
                  <div className="author">
                    <div className="author-pic">
                      <img
                        src={ "images/atoma.jpg"}
                        alt="Author"
                      />
                    </div>
                    <div className="author-info">
                      <h5>ATOMASZ</h5>
                      <span>05 January, 2021</span>
                    </div>
                  </div>
                  <h3>
                    <Link href={`${process.env.PUBLIC_URL}/blog-details`} legacyBehavior>
                      <button onClick={scrollTop} className="title-btn">
                      <p>
                    Positive: Professionalism, Punctually, Quality, Responsiveness, Value Hassan and it team have been recommended to my by the company who provided my gate. I can say I could not
                    recommend them enough for their swift and professional services.And very reason-able prices!! If i need anything in the future
                    </p>
                      </button>
                    </Link>
                  </h3>
                  {/* <p>
                    Aptent taciti sociosqu ad litora torquent pi himenaeos.
                    Praesent nec neque at dolor ti venenatis consectetur eu quis
                    ex.
                  </p> */}
                  <div className="view-btn">
                    <Link href={`${process.env.PUBLIC_URL}/blog-details`} legacyBehavior>
                      <button onClick={scrollTop} className="view-details-btn">View details</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-4">
              <div className="signle-news">
                <div className="tag">
                  <Link href="/" legacyBehavior>
                    <button onClick={scrollTop} className="tag-btn">Software</button>
                  </Link>
                </div>
                <div className="post-img">
                  <Link href={`${process.env.PUBLIC_URL}/blog_details`} legacyBehavior>
                    <button onClick={scrollTop} className="img-btn">
                      <img
                        src={process.env.PUBLIC_URL + "/images/post/post-2.jpg"}
                        alt="Software Post"
                      />
                    </button>
                  </Link>
                </div>
                <div className="news-content">
                  <div className="author">
                    <div className="author-pic">
                      <img
                        src={"images/morgan.jpg"}
                        alt="Author"
                      />
                    </div>
                    <div className="author-info">
                      <h5>MIKE MORGAN</h5>
                      <span>05 January, 2021</span>
                    </div>
                  </div>
                  <h3>
                    <Link href={`${process.env.PUBLIC_URL}/blog-details`} legacyBehavior>
                      <button onClick={scrollTop} className="title-btn">
                      <p>It is the first time I have used Hassan and his team and mu expectations have been exceeded. The professional-ism and quality of the work has been fantastic and also the customer
                      care has been great. I would definitely use the team again in the future, for example if i update my alarams system and I highly recommend the team.</p>
                      </button>
                    </Link>
                  </h3>
                 
                  <div className="view-btn">
                    <Link href={`${process.env.PUBLIC_URL}/blog-details`} legacyBehavior>
                      <button onClick={scrollTop} className="view-details-btn">View details</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-4">
              <div className="title black">
                <span>TESTIMONIAL</span>
                <h2>LOVES FROM SPECIAL CLIENTS</h2>
                <div className="cmn-btn">
                  <Link href={`${process.env.PUBLIC_URL}/blog`} legacyBehavior>
                    <button onClick={scrollTop} className="view-all-btn">View All Clients</button>
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

export default LatesNewsArea;
