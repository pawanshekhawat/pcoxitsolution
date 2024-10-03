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
import { ThemeContext } from "../ThemeContext";

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
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
    script.type = "module";
    document.head.appendChild(script);

    // Cleanup when component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className={isDark ? "active-dark" : "active-light"}>
        {/* <div style={{ width: '100vw', height: "100vh", display: "grid", placeItems: "center" }}>
            <img src={LoaderGif} />
          </div> */}
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "grid",
            placeItems: "center",
          }}
        >
          <dotlottie-player
            src="https://lottie.host/0544481e-fc88-4533-8112-736c6a8be8f8/zpUnJPdBr3.json"
            background="transparent"
            speed="1"
            style={{ width: "300px", height: "300px" }}
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
      <div className="breadcrumb-area rn-bg-color bg_image bg_image-service1">
        <div className="overlayServices ptb--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rn-page-title text-center pt--100">
                  <h2 className="title section-title text-white">
                    {t("impo_expo_services_0")}
                  </h2>
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
            <h3 className="serviceHead">{t("impo_expo_services_wwp_title")}</h3>
            <div className="serviceCards row">
              <div className="serviceCard card col-12 col-md-6 col-lg-3 mb-4">
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
              <div className="serviceCard card col-12 col-md-6 col-lg-3 mb-4">
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
              <div className="serviceCard card col-12 col-md-6 col-lg-3 mb-4">
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
                  {/* Start Land Transportation Area */}
                  <section className="seprateBgSection">
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
                          <h2 className="h3 fw-bold mb-4 serviceHeading">
                            {t("landTransportationHeading")}
                          </h2>
                          <p className="text-muted mb-4">
                            {t("landTransportationDescription")}
                          </p>
                          <ul className="list-unstyled mb-4">
                            <li className="d-flex align-items-center mb-2">
                              <svg
                                className="mx-2 themeText"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              {t("landTransportationFeature1")}
                            </li>
                            <li className="d-flex align-items-center mb-2">
                              <svg
                                className="mx-2 themeText"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              {t("landTransportationFeature2")}
                            </li>
                            <li className="d-flex align-items-center mb-2">
                              <svg
                                className="mx-2 themeText"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              {t("landTransportationFeature3")}
                            </li>
                            <li className="d-flex align-items-center mb-2">
                              <svg
                                className="mx-2 themeText"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              {t("landTransportationFeature4")}
                            </li>
                          </ul>
                          <div className="row mb-4 g-4 align-items-center">
                            <div className="col-md-6">
                              <div className="serviceCardProcess bg-light p-4 rounded">
                                <h3 className="h5 fw-semibold mb-3 serviceCardProcessTitle">
                                  {t("landTransportationProcessTitle")}
                                </h3>
                                <ul className="list-unstyled">
                                  <li className="d-flex align-items-center mb-2 serviceCardProcessTitle">
                                    <span
                                      className="themeBgCircle text-white rounded-circle d-flex align-items-center justify-content-center mx-2"
                                      style={{ width: "24px", height: "24px" }}
                                    >
                                      1
                                    </span>
                                    {t("landTransportationProcess1")}
                                  </li>
                                  <li className="d-flex align-items-center mb-2 serviceCardProcessTitle">
                                    <span
                                      className="themeBgCircle text-white rounded-circle d-flex align-items-center justify-content-center mx-2"
                                      style={{ width: "24px", height: "24px" }}
                                    >
                                      2
                                    </span>
                                    {t("landTransportationProcess2")}
                                  </li>
                                  <li className="d-flex align-items-center mb-2 serviceCardProcessTitle">
                                    <span
                                      className="themeBgCircle text-white rounded-circle d-flex align-items-center justify-content-center mx-2"
                                      style={{ width: "24px", height: "24px" }}
                                    >
                                      3
                                    </span>
                                    {t("landTransportationProcess3")}
                                  </li>
                                  <li className="d-flex align-items-center mb-2 serviceCardProcessTitle">
                                    <span
                                      className="themeBgCircle text-white rounded-circle d-flex align-items-center justify-content-center mx-2"
                                      style={{ width: "24px", height: "24px" }}
                                    >
                                      4
                                    </span>
                                    {t("landTransportationProcess4")}
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-6 mt-lg-0 my-md-0 mt-sm-3 mt-3">
                              <a href="/contact">
                                <div className="themeBg text-white p-4 rounded">
                                  <p className="h5 font-weight-lighter contactNum">
                                    {t("landTransportationContact")}
                                  </p>
                                  <div
                                    id="st"
                                    className="h3 fw-bold mb-0 text-white"
                                  >
                                    {t("landTransportationContactLink")}
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* End Land Transportation Area */}

                  {/* Start Sea Transportation Area */}
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
                          <h2 className="h3 fw-bold mb-4 serviceHeading">
                            {t("seaTransportationHeading")}
                          </h2>
                          <p className="text-muted mb-4">
                            {t("seaTransportationDescription")}
                          </p>
                          <ul className="list-unstyled mb-4">
                            <li className="d-flex align-items-center mb-2">
                              <svg
                                className="mx-2 themeText"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              {t("seaTransportationFeature1")}
                            </li>
                            <li className="d-flex align-items-center mb-2">
                              <svg
                                className="mx-2 themeText"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              {t("seaTransportationFeature2")}
                            </li>
                            <li className="d-flex align-items-center mb-2">
                              <svg
                                className="mx-2 themeText"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              {t("seaTransportationFeature3")}
                            </li>
                            <li className="d-flex align-items-center mb-2">
                              <svg
                                className="mx-2 themeText"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              {t("seaTransportationFeature4")}
                            </li>
                          </ul>
                          <div className="row mb-4 g-4">
                            <div className="col-md-6">
                              <div className="serviceCardProcess bg-light p-4 rounded">
                                <h3 className="h5 fw-semibold mb-3 serviceCardProcessTitle">
                                  {t("landTransportationProcessTitle")}
                                </h3>
                                <ul className="list-unstyled">
                                  <li className="d-flex align-items-center mb-2 serviceCardProcessTitle">
                                    <span
                                      className="themeBgCircle text-white rounded-circle d-flex align-items-center justify-content-center mx-2"
                                      style={{ width: "24px", height: "24px" }}
                                    >
                                      1
                                    </span>
                                    {t("seaTransportationProcess1")}
                                  </li>
                                  <li className="d-flex align-items-center mb-2 serviceCardProcessTitle">
                                    <span
                                      className="themeBgCircle text-white rounded-circle d-flex align-items-center justify-content-center mx-2"
                                      style={{ width: "24px", height: "24px" }}
                                    >
                                      2
                                    </span>
                                    {t("seaTransportationProcess2")}
                                  </li>
                                  <li className="d-flex align-items-center mb-2 serviceCardProcessTitle">
                                    <span
                                      className="themeBgCircle text-white rounded-circle d-flex align-items-center justify-content-center mx-2"
                                      style={{ width: "24px", height: "24px" }}
                                    >
                                      3
                                    </span>
                                    {t("seaTransportationProcess3")}
                                  </li>
                                  <li className="d-flex align-items-center mb-2 serviceCardProcessTitle">
                                    <span
                                      className="themeBgCircle text-white rounded-circle d-flex align-items-center justify-content-center mx-2"
                                      style={{ width: "24px", height: "24px" }}
                                    >
                                      4
                                    </span>
                                    {t("seaTransportationProcess4")}
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-6 mt-lg-0 my-md-0 mt-sm-3 mt-3">
                              <a href="/contact">
                                <div className="themeBg text-white p-4 rounded">
                                  <p className="h5 font-weight-lighter contactNum">
                                    {t("seaTransportationContact")}
                                  </p>
                                  <div
                                    id="st"
                                    className="h3 fw-bold mb-0 text-white"
                                  >
                                    {t("seaTransportationContactLink")}
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* End Sea Transportation Area */}
                  {/* Start Air Transportation Area */}
                  <section className="seprateBgSection">
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
                          <h2 className="h3 fw-bold mb-4 serviceHeading">
                            {t("airTransportationHeading")}
                          </h2>
                          <p className="text-muted mb-4">
                            {t("airTransportationDescription")}
                          </p>
                          <ul className="list-unstyled mb-4">
                            <li className="d-flex align-items-center mb-2">
                              <svg
                                className="mx-2 themeText"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              {t("airTransportationFeature1")}
                            </li>
                            <li className="d-flex align-items-center mb-2">
                              <svg
                                className="mx-2 themeText"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              {t("airTransportationFeature2")}
                            </li>
                            <li className="d-flex align-items-center mb-2">
                              <svg
                                className="mx-2 themeText"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              {t("airTransportationFeature3")}
                            </li>
                            <li className="d-flex align-items-center mb-2">
                              <svg
                                className="mx-2 themeText"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              {t("airTransportationFeature4")}
                            </li>
                          </ul>
                          <div className="row mb-4 g-4">
                            <div className="col-md-6">
                              <div className="serviceCardProcess bg-light p-4 rounded">
                                <h3 className="h5 fw-semibold mb-3 serviceCardProcessTitle">
                                  {t("landTransportationProcessTitle")}
                                </h3>
                                <ul className="list-unstyled">
                                  <li className="d-flex align-items-center mb-2 serviceCardProcessTitle">
                                    <span
                                      className="themeBgCircle text-white rounded-circle d-flex align-items-center justify-content-center mx-2"
                                      style={{ width: "24px", height: "24px" }}
                                    >
                                      1
                                    </span>
                                    {t("airTransportationProcess1")}
                                  </li>
                                  <li className="d-flex align-items-center mb-2 serviceCardProcessTitle">
                                    <span
                                      className="themeBgCircle text-white rounded-circle d-flex align-items-center justify-content-center mx-2"
                                      style={{ width: "24px", height: "24px" }}
                                    >
                                      2
                                    </span>
                                    {t("airTransportationProcess2")}
                                  </li>
                                  <li className="d-flex align-items-center mb-2 serviceCardProcessTitle">
                                    <span
                                      className="themeBgCircle text-white rounded-circle d-flex align-items-center justify-content-center mx-2"
                                      style={{ width: "24px", height: "24px" }}
                                    >
                                      3
                                    </span>
                                    {t("airTransportationProcess3")}
                                  </li>
                                  <li className="d-flex align-items-center mb-2 serviceCardProcessTitle">
                                    <span
                                      className="themeBgCircle text-white rounded-circle d-flex align-items-center justify-content-center mx-2"
                                      style={{ width: "24px", height: "24px" }}
                                    >
                                      4
                                    </span>
                                    {t("airTransportationProcess4")}
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-6 mt-lg-0 my-md-0 mt-sm-3 mt-3">
                              <a href="/contact">
                                <div className="themeBg text-white p-4 rounded">
                                  <p className="h5 font-weight-lighter contactNum">
                                    {t("airTransportationContact")}
                                  </p>
                                  <div
                                    id="st"
                                    className="h3 fw-bold mb-0 text-white"
                                  >
                                    {t("airTransportationContactLink")}
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* End Air Transportation Area */}
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
