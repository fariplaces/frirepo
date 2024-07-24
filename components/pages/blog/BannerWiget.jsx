import React from "react";
import Link from "next/link";

function BannerWiget() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <div className="widget-banner">
        <img
          src={process.env.PUBLIC_URL + "/images/widget-banner.jpg"}
          alt="bannerWiget"
        />
        <div className="banner-content">
          <div className="banner-inner">
            <h2>About Your Next Project.</h2>
            <div className="cmn-btn">
              <Link href={`${process.env.PUBLIC_URL}/contact`} onClick={scrollTop}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerWiget;
