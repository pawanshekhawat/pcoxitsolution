import React, { useState, useContext, useEffect } from "react";

import PageHelmet from "../component/common/Helmet";
import ModalVideo from "react-modal-video";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import HeaderThree from "../component/header/HeaderThree";
import Footer from "../component/footer/Footer";
import Toggle from "../component/Toggle/Toggle";
import { AiOutlineTruck } from "react-icons/ai";
import { LiaShipSolid } from "react-icons/lia";
import { PiAirplaneTiltLight } from "react-icons/pi";

import { useTranslation } from "react-i18next";
import { ThemeContext } from '../ThemeContext';

const ServiceDetails = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dynamically append the new script for dotlottie-player
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
    script.type = 'module';
    document.head.appendChild(script);

    // Cleanup when component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 3000));
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className={isDark ? "active-dark" : "active-light"} >
        {/* <div style={{ width: '100vw', height: "100vh", display: "grid", placeItems: "center" }}>
            <img src={LoaderGif} />
          </div> */}
        <div style={{ width: '100vw', height: '100vh', display: 'grid', placeItems: 'center' }}>
          <dotlottie-player
            src="https://lottie.host/0544481e-fc88-4533-8112-736c6a8be8f8/zpUnJPdBr3.json"
            background="transparent"
            speed="1"
            style={{ width: '300px', height: '300px' }}
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    );
  }
  return (
    <div className={isDark ? "active-dark" : "active-light"}>
      {/* Start Pagehelmet  */}
      <PageHelmet pageTitle=" Import-Export Services & Logistics Solutions" />
      {/* End Pagehelmet  */}

      <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />

      {/* Start Breadcrump Area */}
      <div
        className="breadcrumb-area rn-bg-color bg_image bg_image-service1"
      >
        <div className="overlayServices ptb--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rn-page-title text-center pt--100">
                  <h2 className="title section-title text-white">{t("impo_expo_services_0")}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrump Area */}

      {/* Start Page Wrapper */}
      <div className="rn-service-details ptb--120 bg_color--1 rn-about-area">
        <div>
          {/* Start Service Card Area */}
          <div className="container">
            <h3 className="serviceHead">
              {t("impo_expo_services_wwp_title")}
            </h3>
            <div className="serviceCards row">
              <div
                className="serviceCard card col-12 col-md-6 col-lg-3 mb-4"
              >
                <div className="card-body">
                  <a
                    href="#lt"
                    className="card-title h3 text-white serviceCardTitle"
                  >
                    <AiOutlineTruck className="reactIcons" /> <br />
                    {t("impo_expo_services_wwp_card1_title")}
                  </a>
                  <div className="btmBtn mt-3 d-flex">
                    <a href="/contact" className="cardBtn btn">
                      {t("services_wwp_card_btn1")}
                    </a>
                    <a href="#lt" className="cardBtn btn ml-4">
                      {t("services_wwp_card_btn2")}
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="serviceCard card col-12 col-md-6 col-lg-3 mb-4"
              >
                <div className="card-body">
                  <a
                    href="#st"
                    className="card-title h3 text-white serviceCardTitle"
                  >
                    <LiaShipSolid className="reactIcons" /> <br />
                    {t("impo_expo_services_wwp_card2_title")}
                  </a>
                  <div className="btmBtn mt-3 d-flex">
                    <a href="/contact" className="cardBtn btn">
                      {t("services_wwp_card_btn1")}
                    </a>
                    <a href="#st" className="cardBtn btn ml-4">
                      {t("services_wwp_card_btn2")}
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="serviceCard card col-12 col-md-6 col-lg-3 mb-4"
              >
                <div className="card-body">
                  <a
                    href="#at"
                    className="card-title h3 text-white serviceCardTitle"
                  >
                    <PiAirplaneTiltLight className="reactIcons" />
                    <br />
                    {t("impo_expo_services_wwp_card3_title")}
                  </a>
                  <div className="btmBtn mt-3 d-flex">
                    <a href="/contact" className="cardBtn btn">
                      {t("services_wwp_card_btn1")}
                    </a>
                    <a href="#at" className="cardBtn btn ml-4">
                      {t("services_wwp_card_btn2")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Service Card Area */}

          <div className="row pt--40 rn-about-area" id="lt">
            <div className="col-lg-12">
              <div className="service-details-inner">
                <div className="inner">
                  {/* Start Single Area */}
                  <section className=" seprateBgSection">
                    <div className="container px-4">
                      <div className="row g-4 align-items-center">
                        <div className="col-lg-6 order-lg-2">
                          <div className="position-relative h-100">
                            <img
                              className="img-fluid rounded my-3"
                              src="/assets/images/service/hrservice01.JPG"
                              alt="Service Images"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                          <h2 className="h3 fw-bold mb-4 serviceHeading">Land Transportation Services</h2>
                          <p className="text-muted mb-4">
                            At PCOX Internet Pvt Limited, We specialize in providing efficient and reliable land transportation solutions tailored to meet your specific logistics needs.
                          </p>
                          <ul className="list-unstyled mb-4">
                            <li className="d-flex align-items-center mb-2">
                              <svg className="mx-2 themeText" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              Land Transportation Optimization
                            </li>
                            <li className="d-flex align-items-center mb-2">
                              <svg className="mx-2 themeText" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              Cross-Border Solutions
                            </li>
                            <li className="d-flex align-items-center mb-2">
                              <svg className="mx-2 themeText" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              Dedicated Fleet Management
                            </li>
                            <li className="d-flex align-items-center mb-2">
                              <svg className="mx-2 themeText" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              Specialized Cargo Handling
                            </li>
                          </ul>
                          <div className="row mb-4 g-4 align-items-center">
                            <div className="col-md-6">
                              <div className="serviceCardProcess bg-light p-4 rounded">
                                <h3 className="h5 fw-semibold mb-3 serviceCardProcessTitle">Our Process</h3>
                                <ul className="list-unstyled">
                                  <li className="d-flex align-items-center mb-2 serviceCardProcessTitle">
                                    <span className="themeBgCircle text-white rounded-circle d-flex align-items-center justify-content-center mx-2" style={{ width: '24px', height: '24px' }}>1</span>
                                    Pickup and Packaging
                                  </li>
                                  <li className="d-flex align-items-center mb-2 serviceCardProcessTitle">
                                    <span className="themeBgCircle text-white rounded-circle d-flex align-items-center justify-content-center mx-2" style={{ width: '24px', height: '24px' }}>2</span>
                                    Route Planning
                                  </li>
                                  <li className="d-flex align-items-center mb-2 serviceCardProcessTitle">
                                    <span className="themeBgCircle text-white rounded-circle d-flex align-items-center justify-content-center mx-2" style={{ width: '24px', height: '24px' }}>3</span>
                                    Transportation
                                  </li>
                                  <li className="d-flex align-items-center mb-2 serviceCardProcessTitle">
                                    <span className="themeBgCircle text-white rounded-circle d-flex align-items-center justify-content-center mx-2" style={{ width: '24px', height: '24px' }}>4</span>
                                    Warehousing
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-6 mt-lg-0 my-md-0 mt-sm-3 mt-3">
                              <a href="/contact">
                                <div className="themeBg text-white p-4 rounded">
                                  <p className="h5 font-weight-lighter contactNum">Reach out for tailored land transportation solutions, from fleet management to cross-border services.</p>
                                  <div id="st" className="h3 fw-bold mb-0 text-white">Get in touch!</div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* End Single Area */}

                  {/* Start Single Area */}
                  <section className="">
                    <div className="container px-4">
                      <div className="row g-4 align-items-center">
                        <div className="col-lg-6 d-md-block">
                          <div className="position-relative h-100">
                            <img
                              className="img-fluid rounded my-3"
                              src="/assets/images/service/hrservice02.JPG"
                              alt="Sea Transportation"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <h2 className="h3 fw-bold mb-4 serviceHeading">Sea Transportation Services</h2>
                          <p className="text-muted mb-4">
                            At PCOX Internet Pvt Limited, we provide reliable and efficient sea transportation solutions, ensuring your cargo reaches its destination safely and on time.
                          </p>
                          <ul className="list-unstyled mb-4">
                            <li className="d-flex align-items-center mb-2">
                              <svg className="mx-2 themeText" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              Global Shipping Solutions
                            </li>
                            <li className="d-flex align-items-center mb-2">
                              <svg className="mx-2 themeText" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              Container Management
                            </li>
                            <li className="d-flex align-items-center mb-2">
                              <svg className="mx-2 themeText" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              Custom Clearance
                            </li>
                            <li className="d-flex align-items-center mb-2">
                              <svg className="mx-2 themeText" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              Cargo Tracking
                            </li>
                          </ul>
                          <div className="row mb-4 g-4">
                            <div className="col-md-6">
                              <div className="serviceCardProcess bg-light p-4 rounded">
                                <h3 className="h5 fw-semibold mb-3 serviceCardProcessTitle">Our Process</h3>
                                <ul className="list-unstyled">
                                  <li className="d-flex align-items-center mb-2 serviceCardProcessTitle">
                                    <span className="themeBgCircle text-white rounded-circle d-flex align-items-center justify-content-center mx-2" style={{ width: '24px', height: '24px' }}>1</span>
                                    Pickup and Packaging
                                  </li>
                                  <li className="d-flex align-items-center mb-2 serviceCardProcessTitle">
                                    <span className="themeBgCircle text-white rounded-circle d-flex align-items-center justify-content-center mx-2" style={{ width: '24px', height: '24px' }}>2</span>
                                    Route Planning
                                  </li>
                                  <li className="d-flex align-items-center mb-2 serviceCardProcessTitle">
                                    <span className="themeBgCircle text-white rounded-circle d-flex align-items-center justify-content-center mx-2" style={{ width: '24px', height: '24px' }}>3</span>
                                    Transportation
                                  </li>
                                  <li className="d-flex align-items-center mb-2 serviceCardProcessTitle">
                                    <span className="themeBgCircle text-white rounded-circle d-flex align-items-center justify-content-center mx-2" style={{ width: '24px', height: '24px' }}>4</span>
                                    Warehousing
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-6 mt-lg-0 my-md-0 mt-sm-3 mt-3">
                              <a href="/contact">
                                <div className="themeBg text-white p-4 rounded">
                                  <p className="h5 font-weight-lighter contactNum">Contact us for dependable sea transportation services and smooth customs clearance for your cargo.</p>
                                  <div id="at" className="h3 fw-bold mb-0 text-white">Get in touch!</div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* End Single Area */}

                  {/* Start Single Area */}
                  <section className=" seprateBgSection">
                    <div className="container px-4">
                      <div className="row g-4 align-items-center">
                        <div className="col-lg-6 order-lg-2">
                          <div className="position-relative h-100">
                            <img
                              className="img-fluid rounded my-3"
                              src="/assets/images/service/hrservice03.JPG"
                              alt="Air Transportation"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                          <h2 className="h3 fw-bold mb-4 serviceHeading">Air Transportation Services</h2>
                          <p className="text-muted mb-4">
                            At PCOX Internet Pvt Limited, we offer fast and efficient air transportation solutions for your urgent shipping needs, ensuring timely delivery worldwide.
                          </p>
                          <ul className="list-unstyled mb-4">
                            <li className="d-flex align-items-center mb-2">
                              <svg className="mx-2 themeText" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              Express Delivery
                            </li>
                            <li className="d-flex align-items-center mb-2">
                              <svg className="mx-2 themeText" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              Global Freight Solutions
                            </li>
                            <li className="d-flex align-items-center mb-2">
                              <svg className="mx-2 themeText" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              Dangerous Goods Handling
                            </li>
                            <li className="d-flex align-items-center mb-2">
                              <svg className="mx-2 themeText" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              Real-Time Tracking
                            </li>
                          </ul>
                          <div className="row mb-4 g-4">
                            <div className="col-md-6">
                              <div className="serviceCardProcess bg-light p-4 rounded">
                                <h3 className="h5 fw-semibold mb-3 serviceCardProcessTitle">Our Process</h3>
                                <ul className="list-unstyled">
                                  <li className="d-flex align-items-center mb-2 serviceCardProcessTitle">
                                    <span className="themeBgCircle text-white rounded-circle d-flex align-items-center justify-content-center mx-2" style={{ width: '24px', height: '24px' }}>1</span>
                                    Pickup and Packaging
                                  </li>
                                  <li className="d-flex align-items-center mb-2 serviceCardProcessTitle">
                                    <span className="themeBgCircle text-white rounded-circle d-flex align-items-center justify-content-center mx-2" style={{ width: '24px', height: '24px' }}>2</span>
                                    Route Planning
                                  </li>
                                  <li className="d-flex align-items-center mb-2 serviceCardProcessTitle">
                                    <span className="themeBgCircle text-white rounded-circle d-flex align-items-center justify-content-center mx-2" style={{ width: '24px', height: '24px' }}>3</span>
                                    Transportation
                                  </li>
                                  <li className="d-flex align-items-center mb-2 serviceCardProcessTitle">
                                    <span className="themeBgCircle text-white rounded-circle d-flex align-items-center justify-content-center mx-2" style={{ width: '24px', height: '24px' }}>4</span>
                                    Warehousing
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-6 mt-lg-0 my-md-0 mt-sm-3 mt-3">
                              <a href="/contact">
                                <div className="themeBg text-white p-4 rounded">
                                  <p className="h6 font-weight-lighter contactNum">Need fast air transport? Contact us for express delivery and real-time tracking for your urgent shipping needs.</p>
                                  <div className="h3 fw-bold mb-0 text-white">Get in touch!</div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* End Single Area */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Page Wrapper */}

      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}

      <div className="toggle-button">
        <Toggle isChecked={isDark} handleChange={toggleTheme} />
      </div>

      <Footer />
    </div>
  );
};

export default ServiceDetails;