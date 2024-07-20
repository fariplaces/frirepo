"use client";
import Link from "next/link";
/* eslint-disable no-unused-vars */
import React, { useEffect, useState,useReducer } from "react";
import AnimatedCursor from "react-animated-cursor";

/*---------Using reducer mange the active or inactive menu----------*/
const initialState = {activeMenu:''};

function reducer(state, action) {
  switch (action.type) {
    case 'homeOne':
      return {activeMenu: 'homeOne'};
    case 'service':
      return {activeMenu: 'service'};
    case 'projects':
      return {activeMenu: 'projects'};
    case 'blogs':
      return {activeMenu: 'blogs'};
    default:
      return {activeMenu: ''};
  }
}

function Header() {

  const [state, dispatch] = useReducer(reducer, initialState);

  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector(".position_top");
    const scrollTop = window.scrollY;
    scrollTop >= 200
      ? header.classList.add("sticky")
      : header.classList.remove("sticky");
  };

 /*----for single sidebar event use one state-------*/
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    if (sidebar === false || sidebar === 0) {
      setSidebar(1);
    } else {
      setSidebar(false);
    }
  };

  //  scroll top event
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <AnimatedCursor
        className="coursor"
        innerSize={8}
        outerSize={30}
        color="217, 10, 44"
        outerAlpha={0.5}
        innerScale={0.7}
        outerScale={1.5}
        clickables={[
          "a",
          "i",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          ".sub-menu",
          ".has-child",
          ".single-client",
          ".SRLControls",
        ]}
      />
      <header className="position_top">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col col-sm-3 col-md-3 col-lg-3 col-xl-2">
              <div className="logo">
                <Link onClick={scrollTop} href={"/"}>
                  <img
                    src={"/images/logo.png"}
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="col col-sm-5 col-md-6 col-lg-6 col-xl-8 text-end">
              <nav className={sidebar === 1 ? "main-nav slidenav" : "main-nav"}>
                <div className="mobile-menu-logo">
                  <Link onClick={scrollTop} href={"/"}>
                    <img
                      src={"/images/logo.png"}
                      alt=""
                    />
                  </Link>
                </div>
                <ul>
                  <li className="has-child active" onClick={() => dispatch({type: 'homeOne'})}>
                    <Link href={"/"} className={state.activeMenu ==='homeOne'?'active':''}>Home</Link>
                    <i className="bi bi-chevron-down" />
                    <ul
                      className={
                        state.activeMenu ==='homeOne'
                          ? "sub-menu d-block"
                          : "sub-menu d-none"
                      }
                    >
                      <li>
                        <Link onClick={scrollTop} href={"/"} className={state.activeMenu ==='homeOne'?'active':''}>
                          Home 01
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={scrollTop}
                          href={"/home2"}
                        >
                          Home 02
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link
                      onClick={scrollTop}
                      href={"/about"}
                    >
                      About us
                    </Link>
                  </li>
                  <li className="has-child" onClick={() => dispatch({type: 'service'})}>
                    <Link onClick={scrollTop} href={"/"}>
                      Services
                    </Link>
                    <i className="bi bi-chevron-down" />
                    <ul
                      className={
                        state.activeMenu ==='service'
                          ? "sub-menu d-block"
                          : "sub-menu d-none"
                      }
                    >
                      <li>
                        <Link
                          onClick={scrollTop}
                          href={"/service"}
                        >
                          Service
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={scrollTop}
                          href={"/service-details"}
                        >
                          Service Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-child" onClick={() => dispatch({type: 'projects'})}>
                    <Link onClick={scrollTop} href={"/"}>
                      Projects
                    </Link>
                    <i className="bi bi-chevron-down" />
                    <ul
                      className={
                        state.activeMenu ==='projects'
                          ? "sub-menu d-block"
                          : "sub-menu d-none"
                      }
                    >
                      <li>
                        <Link
                          onClick={scrollTop}
                          href={"/project"}
                        >
                          Project
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={scrollTop}
                          href={"/project-details"}
                        >
                          Project Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-child" onClick={() => dispatch({type: 'blogs'})}>
                    <Link href={"/"}>Blogs</Link>
                    <i className="bi bi-chevron-down" />
                    <ul
                      className={
                        state.activeMenu ==='blogs'
                          ? "sub-menu d-block"
                          : "sub-menu d-none"
                      }
                    >
                      <li>
                        <Link
                          onClick={scrollTop}
                          href={"/blog"}
                        >
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={scrollTop}
                          href={"/blog-standard"}
                        >
                          Blog standard
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={scrollTop}
                          href={"/blog-details"}
                        >
                          Blog Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-child" onClick={() => dispatch({type: 'pages'})}>
                    <Link href={"/"}>Pages</Link>
                    <i className="bi bi-chevron-down" />
                    <ul
                      className={
                        state.activeMenu ==='pages'
                          ? "sub-menu d-block"
                          : "sub-menu d-none"
                      }
                    >
                      <li>
                        <Link
                          onClick={scrollTop}
                          href={"/commingsoon"}
                        >
                          Comming soon
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={scrollTop}
                          href={"/error"}
                        >
                          Error 404
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link
                      onClick={scrollTop}
                      href={"/contact"}
                    >
                      Contact us
                    </Link>
                  </li>
                </ul>
                <div className="get-quate dn">
                  <div className="cmn-btn">
                    <Link
                      onClick={scrollTop}
                      href={"/contact"}
                    >
                      Get a quote
                    </Link>
                  </div>
                </div>
              </nav>
              <div className="mobile-menu">
                <div
                  onClick={showSidebar}
                  className={sidebar === 1 ? "cross-btn h-active" : "cross-btn"}
                >
                  <span className="cross-top" />
                  <span className="cross-middle" />
                  <span className="cross-bottom" />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-3 col-xl-2 text-end">
              <div className="get-quate">
                <div className="cmn-btn">
                  <Link
                    onClick={scrollTop}
                    href={"/contact"}
                  >
                    Get a quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
