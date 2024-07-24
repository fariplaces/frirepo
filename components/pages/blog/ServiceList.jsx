import React from "react";
import Link from "next/link";

function ServiceList() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="sidebar-widget">
      <h4>Services</h4>
      <ul className="service-list">
        <li>
          <Link href={`${process.env.PUBLIC_URL}/service-details`} passHref>
            <div onClick={scrollTop}>
              <i>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/icons/dash-circle-icon.svg"
                  }
                  alt="Web Design Icon"
                />
              </i>
              Web Design <span>(15)</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href={`${process.env.PUBLIC_URL}/service-details`} passHref>
            <div onClick={scrollTop}>
              <i>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/icons/dash-circle-icon.svg"
                  }
                  alt="Apps Development Icon"
                />
              </i>
              Apps Development <span>(18)</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href={`${process.env.PUBLIC_URL}/service-details`} passHref>
            <div onClick={scrollTop}>
              <i>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/icons/dash-circle-icon.svg"
                  }
                  alt="Software Development Icon"
                />
              </i>
              Software Development <span>(21)</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href={`${process.env.PUBLIC_URL}/service-details`} passHref>
            <div onClick={scrollTop}>
              <i>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/icons/dash-circle-icon.svg"
                  }
                  alt="Motion Graphics Icon"
                />
              </i>
              Motion Graphics <span>(25)</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href={`${process.env.PUBLIC_URL}/service-details`} passHref>
            <div onClick={scrollTop}>
              <i>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/icons/dash-circle-icon.svg"
                  }
                  alt="UI/UX Design Icon"
                />
              </i>
              UI/UX Design <span>(29)</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href={`${process.env.PUBLIC_URL}/service-details`} passHref>
            <div onClick={scrollTop}>
              <i>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/icons/dash-circle-icon.svg"
                  }
                  alt="Graphic Design Icon"
                />
              </i>
              Graphic Design <span>(31)</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ServiceList;
