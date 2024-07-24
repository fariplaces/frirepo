import React from "react";
import Link from "next/link";

function BlogCart(props) {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <div className="col-12 col-lg-6 col-xl-6">
        <div className="signle-news">
          <div className="tag">
            <Link href="/" onClick={scrollTop}>
              {props.tag}
            </Link>
          </div>
          <div className="post-img">
            <Link href={`${process.env.PUBLIC_URL}/blog-details`} onClick={scrollTop}>
              <img src={props.postImg} alt="blog images" />
            </Link>
          </div>
          <div className="news-content">
            <div className="author">
              <div className="author-pic">
                <img src={props.authorIMG} alt="author images" />
              </div>
              <div className="author-info">
                <h5>Posted by, Alen Jodge</h5>
                <span>05 January, 2022</span>
              </div>
            </div>
            <h3>
              <Link href={`${process.env.PUBLIC_URL}/blog-details`} onClick={scrollTop}>
                Donec a porttitor phari sod tellus Nunc quis erosn.
              </Link>
            </h3>
            <p>
              Aptent taciti sociosqu ad litora torquent pi himenaeos. Praesent
              nec neque at dolor ti venenatis consectetur eu quis ex.
            </p>
            <div className="view-btn">
              <Link href={`${process.env.PUBLIC_URL}/blog-details`} onClick={scrollTop}>
                View details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogCart;
