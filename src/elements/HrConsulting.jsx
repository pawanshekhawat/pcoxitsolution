import React, { useState, useContext, useEffect, Suspense, lazy } from "react";

import PageHelmet from "../component/common/Helmet";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import HeaderThree from "../component/header/HeaderThree";
import Toggle from "../component/Toggle/Toggle";
import { FaMedapps } from "react-icons/fa";
import { SiAmazonwebservices } from "react-icons/si";
import { TbDeviceMobileCharging } from "react-icons/tb";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoCloudCircleOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import DotlottieLoad from "../Dotlottie/Dotlottie.jsx";

import { useTranslation } from "react-i18next";
import { ThemeContext } from "../ThemeContext";

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Footer = lazy(() => import("../component/footer/Footer"));
const ServiceDetails = () => {
  const { t } = useTranslation();
 

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
    return <DotlottieLoad />;
  }
  return (
    <div className={isDark ? "active-dark" : "active-light"}>
      {/* Start Pagehelmet  */}
      <PageHelmet pageTitle="Software Development" />
      {/* End Pagehelmet  */}

            <Suspense fallback={<DotlottieLoad />}>
        <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />
      </Suspense>

      {/* Start Breadcrump Area */}
      <div
        className="breadcrumb-area rn-bg-color bg_image bg_image-service2"
      >
        <div className="ptb--120 overlayServices">
          <div className="container portBlogArea">
            <div className="row">
              <div className="col-lg-12">
                <div className="rn-page-title text-center pt--100">
                  <h2 className="title section-title text-white">{t("software_dev_0")}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrump Area */}

      {/* Start Page Wrapper */}
      <div className="rn-service-details pt--40 pb--120 bg_color--1">
        <div className="container portBlogArea">
          {/* Start Service Card Area */}
          <h3 className="serviceHead">{t("software_dev_0_title")}</h3>
          <div className="serviceCards row">
            <div className="serviceCard card col-12 col-md-6 col-lg-3 mb-4">
              <div className="card-body">
                <a
                  href="/service/software-development"
                  className="card-title h3 text-white serviceCardTitle"
                >
                  <FaMedapps className="reactIcons" /> <br />
                  {t("software_dev_1_head")}
                </a>
                <div className="btmBtn mt-3">
                  <a href="/contact" className="cardBtn btn">
                    {t("services_wwp_card_btn1")}
                  </a>
                  <a
                    href="/service/software-development"
                    className="cardBtn btn mx-2"
                  >
                    {t("services_wwp_card_btn2")}
                  </a>
                </div>
              </div>
            </div>
            <div className="serviceCard card col-12 col-md-6 col-lg-3 mb-4">
              <div className="card-body">
                <a
                  href="/service/web-app"
                  className="card-title h3 text-white serviceCardTitle"
                >
                  <SiAmazonwebservices className="reactIcons" /> <br />
                  {t("software_dev_2_head")}
                </a>
                <div className="btmBtn mt-3 d-flex">
                  <a href="/contact" className="cardBtn btn">
                    {t("services_wwp_card_btn1")}
                  </a>
                  <a href="/service/web-app" className="cardBtn btn mx-2">
                    {t("services_wwp_card_btn2")}
                  </a>
                </div>
              </div>
            </div>
            <div className="serviceCard card col-12 col-md-6 col-lg-3 mb-4">
              <div className="card-body">
                <a
                  href="/service/mobile-app"
                  className="card-title h3 text-white serviceCardTitle"
                >
                  <TbDeviceMobileCharging className="reactIcons" />
                  <br />
                  {t("software_dev_3_head")}
                </a>
                <div className="btmBtn mt-3 d-flex">
                  <a href="/contact" className="cardBtn btn">
                    {t("services_wwp_card_btn1")}
                  </a>
                  <a href="/service/mobile-app" className="cardBtn btn mx-2">
                    {t("services_wwp_card_btn2")}
                  </a>
                </div>
              </div>
            </div>
            <div className="serviceCard card col-12 col-md-6 col-lg-3 mb-4">
              <div className="card-body">
                <a
                  href="/service/software-integration"
                  className="card-title h3 text-white serviceCardTitle"
                >
                  <IoIosAddCircleOutline className="reactIcons" /> <br />
                  {t("software_dev_4_head")}
                </a>
                <div className="btmBtn mt-3 d-flex">
                  <a href="/contact" className="cardBtn btn">
                    {t("services_wwp_card_btn1")}
                  </a>
                  <a
                    href="/service/software-integration"
                    className="cardBtn btn mx-2"
                  >
                    {t("services_wwp_card_btn2")}
                  </a>
                </div>
              </div>
            </div>
            <div className="serviceCard card col-12 col-md-6 col-lg-3 mb-4">
              <div className="card-body">
                <a
                  href="/service/cloud-based-solutions"
                  className="card-title h3 text-white serviceCardTitle"
                >
                  <IoCloudCircleOutline className="reactIcons" /> <br />
                  {t("software_dev_5_head")}
                </a>
                <div className="btmBtn mt-3 d-flex">
                  <a href="/contact" className="cardBtn btn">
                    {t("services_wwp_card_btn1")}
                  </a>
                  <a
                    href="/service/cloud-based-solutions"
                    className="cardBtn btn mx-2"
                  >
                    {t("services_wwp_card_btn2")}
                  </a>
                </div>
              </div>
            </div>
            <div className="serviceCard card col-12 col-md-6 col-lg-3 mb-4">
              <div className="card-body">
                <a
                  href="/service/software-maintenance"
                  className="card-title h3 text-white serviceCardTitle"
                >
                  <BiSupport className="reactIcons" /> <br />
                  {t("software_dev_6_head")}
                </a>
                <div className="btmBtn mt-3 d-flex">
                  <a href="/contact" className="cardBtn btn">
                    {t("services_wwp_card_btn1")}
                  </a>
                  <a
                    href="/service/software-maintenance"
                    className="cardBtn btn mx-2"
                  >
                    {t("services_wwp_card_btn2")}
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Service Card Area */}
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
