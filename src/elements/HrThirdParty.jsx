import React, { useState, useContext, useEffect } from "react";

import PageHelmet from "../component/common/Helmet";
import ModalVideo from "react-modal-video";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import HeaderThree from "../component/header/HeaderThree";
import Footer from "../component/footer/Footer";
import Toggle from "../component/Toggle/Toggle";
import { RiSeoLine } from "react-icons/ri";
import { BiBookContent } from "react-icons/bi";
import { IoShareSocialSharp } from "react-icons/io5";
import { TbClick } from "react-icons/tb";

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
      <PageHelmet pageTitle="HR Third Party Payroll Services" />
      {/* End Pagehelmet  */}

      <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />

      {/* Start Breadcrump Area */}
      <div
        className="breadcrumb-area rn-bg-color bg_image bg_image-service3"
      >
        <div className="overlayServices ptb--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rn-page-title text-center pt--100">
                  <h2 className="title section-title text-white">{t("thirt_party_0")}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrump Area */}

      {/* Start Page Wrapper */}
      <div className="rn-service-details ptb--120 bg_color--1">
        <div className="container">
          {/* Start Service Card Area */}
          <h3 className="serviceHead">In Digital Marketing, Here's what we provide</h3>
          <div className="serviceCards row">
            <div
              className="serviceCard card col-12 col-md-6 col-lg-3 mb-4"

            >
              <div className="card-body">
                <a
                  href="/service/search-engine-optimization"
                  className="card-title h3 text-white serviceCardTitle"
                >
                  <RiSeoLine className="reactIcons" /> <br />
                  Search Engine Optimization (SEO)
                </a>
                <div className="btmBtn mt-3 d-flex">
                  <a
                    href="/contact"
                    className="cardBtn btn"

                  >
                    {t("services_wwp_card_btn1")}
                  </a>
                  <a
                    href="/service/search-engine-optimization"
                    className="cardBtn btn ml-4"

                  >
                    {t("services_wwp_card_btn2")}
                  </a>
                </div>
              </div>
            </div>
            <div
              className="serviceCard card col-12 col-md-6 col-lg-3 mb-4"

            >
              <div className="card-body">
                <a href="/service/content-marketing" className="card-title h3 text-white serviceCardTitle">
                  <BiBookContent className="reactIcons" /> <br />
                  Strategic Content Marketing
                </a>
                <div className="btmBtn mt-3 d-flex">
                  <a
                    href="/contact"
                    className="cardBtn btn"

                  >
                    {t("services_wwp_card_btn1")}
                  </a>
                  <a
                    href="/service/content-marketing"
                    className="cardBtn btn ml-4"

                  >
                    {t("services_wwp_card_btn2")}
                  </a>
                </div>
              </div>
            </div>
            <div
              className="serviceCard card col-12 col-md-6 col-lg-3 mb-4"

            >
              <div className="card-body">
                <a href="/service/social-media-marketing" className="card-title h3 text-white serviceCardTitle">
                  <IoShareSocialSharp className="reactIcons" /> <br />
                  Social Media Marketing
                </a>
                <div className="btmBtn mt-3 d-flex">
                  <a
                    href="/contact"
                    className="cardBtn btn"

                  >
                    {t("services_wwp_card_btn1")}
                  </a>
                  <a
                    href="/service/social-media-marketing"
                    className="cardBtn btn ml-4"
                  >
                    {t("services_wwp_card_btn2")}
                  </a>
                </div>
              </div>
            </div>
            <div
              className="serviceCard card col-12 col-md-6 col-lg-3 mb-4"

            >
              <div className="card-body">
                <a href="/service/pay-per-click" className="card-title h3 text-white serviceCardTitle">
                  <TbClick className="reactIcons" /> <br />
                  Pay-Per-Click (PPC) Advertising
                </a>
                <div className="btmBtn mt-3 d-flex">
                  <a
                    href="/contact"
                    className="cardBtn btn"

                  >
                    {t("services_wwp_card_btn1")}
                  </a>
                  <a
                    href="/service/pay-per-click"
                    className="cardBtn btn ml-4"

                  >
                    {t("services_wwp_card_btn2")}
                  </a>
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
        <Toggle isChecked={isDark} handleChange={toggleTheme} />      </div>

      <Footer />
    </div>
  );
};

export default ServiceDetails;
