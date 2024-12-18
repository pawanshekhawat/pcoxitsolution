import React, { useState, useContext, useEffect, Suspense, lazy } from "react";

import PageHelmet from "../component/common/Helmet";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import HeaderThree from "../component/header/HeaderThree";
import Toggle from "../component/Toggle/Toggle";
import { RiSeoLine } from "react-icons/ri";
import { BiBookContent } from "react-icons/bi";
import { IoShareSocialSharp } from "react-icons/io5";
import { TbClick } from "react-icons/tb";
import DotlottieLoad from "../Dotlottie/Dotlottie.jsx";

import { useTranslation } from "react-i18next";
import { ThemeContext } from "../ThemeContext";

const Footer = lazy(() => import("../component/footer/Footer"));
const ServiceDetails = () => {
  const { t } = useTranslation();

 

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
    return <DotlottieLoad />;
  }
  return (
    <div className={isDark ? "active-dark" : "active-light"}>
      <PageHelmet pageTitle={t("pageTitle")} />
            <Suspense fallback={<DotlottieLoad />}>
        <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />
      </Suspense>

      <div className="breadcrumb-area rn-bg-color bg_image bg_image-service3">
        <div className="overlayServices ptb--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rn-page-title text-center pt--100">
                  <h2 className="title section-title text-white">
                    {t("thirt_party_0")}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rn-service-details ptb--120 bg_color--1">
        <div className="container">
          <h3 className="serviceHead">{t("serviceDetailsHeader")}</h3>
          <div className="serviceCards row">
            <div className="serviceCard card col-12 col-md-6 col-lg-3 mb-4">
              <div className="card-body">
                <a
                  href="/service/search-engine-optimization"
                  className="card-title h3 text-white serviceCardTitle"
                >
                  <RiSeoLine className="reactIcons" /> <br />
                  {t("serviceCard1Title")}
                </a>
                <div className="btmBtn my-3 d-flex">
                  <a href="/contact" className="cardBtn btn mx-1">
                    {t("services_wwp_card_btn1")}
                  </a>
                  <a href="/service/search-engine-optimization" className="cardBtn btn mx-1">
                    {t("services_wwp_card_btn2")}
                  </a>
                </div>
              </div>
            </div>

            <div className="serviceCard card col-12 col-md-6 col-lg-3 mb-4">
              <div className="card-body">
                <a
                  href="/service/content-marketing"
                  className="card-title h3 text-white serviceCardTitle"
                >
                  <BiBookContent className="reactIcons" /> <br />
                  {t("serviceCard2Title")}
                </a>
                <div className="btmBtn my-3 d-flex">
                  <a href="/contact" className="cardBtn btn mx-1">
                    {t("services_wwp_card_btn1")}
                  </a>
                  <a href="/service/content-marketing" className="cardBtn btn mx-1">
                    {t("services_wwp_card_btn2")}
                  </a>
                </div>
              </div>
            </div>

            <div className="serviceCard card col-12 col-md-6 col-lg-3 mb-4">
              <div className="card-body">
                <a
                  href="/service/social-media-marketing"
                  className="card-title h3 text-white serviceCardTitle"
                >
                  <IoShareSocialSharp className="reactIcons" /> <br />
                  {t("serviceCard3Title")}
                </a>
                <div className="btmBtn my-3 d-flex">
                  <a href="/contact" className="cardBtn btn mx-1">
                    {t("services_wwp_card_btn1")}
                  </a>
                  <a href="/service/social-media-marketing" className="cardBtn btn mx-1">
                    {t("services_wwp_card_btn2")}
                  </a>
                </div>
              </div>
            </div>

            <div className="serviceCard card col-12 col-md-6 col-lg-3 mb-4">
              <div className="card-body">
                <a
                  href="/service/pay-per-click"
                  className="card-title h3 text-white serviceCardTitle"
                >
                  <TbClick className="reactIcons" /> <br />
                  {t("serviceCard4Title")}
                </a>
                <div className="btmBtn my-3 d-flex">
                  <a href="/contact" className="cardBtn btn mx-1">
                    {t("services_wwp_card_btn1")}
                  </a>
                  <a href="/service/pay-per-click" className="cardBtn btn mx-1">
                    {t("services_wwp_card_btn2")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>

      <div className="toggle-button">
        <Toggle isChecked={isDark} handleChange={toggleTheme} />
      </div>

      <Footer />
    </div>
  );
};

export default ServiceDetails;
