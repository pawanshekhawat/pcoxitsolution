import React, { useState, useContext, useEffect } from "react";
import PageHelmet from "../../component/common/Helmet";
import HeaderThree from "../../component/header/HeaderThree";
import Footer from "../../component/footer/Footer";
import Toggle from "../../component/Toggle/Toggle";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";

import SDBredCrmb from "../../../public/assets/images/service/breadcrumbSD.jpg";

import { useTranslation } from "react-i18next";

import { ThemeContext } from "../../ThemeContext";

const SoftDev = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
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

  const pageTitle = "Software Development";

  const backgroundImages = {
    "Software Development": SDBredCrmb,
  };

  const backgroundImage = backgroundImages[pageTitle] || "none";

  return (
    <div className={isDark ? "active-dark" : "active-light"}>
      <PageHelmet pageTitle={pageTitle} />
      <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />
      <div className="bg_color--1">
        <div
          style={{
            height: "600px",
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="overlayServices">
            <div
              style={{
                height: "600px",
              }}
              className="d-flex flex-column align-items-center justify-content-center text-dark text-center"
            >
              <h1 className="display-4 text-white font-weight-bold mb-4 mx-auto serviceInTitile">
                {t("software_dev_1_head")}
              </h1>
              <p className="text-white mb-8 serviceInPara">
                {t("sd_main_desc")}
              </p>
              <div className="d-flex justify-content-center mb-4">
                <a
                  href="/contact"
                  className="getStBtn btn px-4 py-2 mt-3 rounded text-white"
                >
                  {t("get_started")}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container portBlogArea sdPadding pt--40">
          <div className="bg_color--1">
            <h2 className="display-4 text-center font-weight-normal mb-5 DevProgTilte DevProgTilte">
              {t("sd_process1_main_title")}
            </h2>
            <div className="row mx-auto">
              <div className="col-md-6 col-lg-6 mb-4">
                <div className="DevProg p-4 bg_color--5 rounded shadow-sm">
                  <h3 className="h3 font-weight-bold serviceProcHead">
                    {t("sd_process1_1_title")}
                  </h3>
                  <p>{t("sd_process1_1_desc")}</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 mb-4">
                <div className="DevProg p-4 bg_color--5 rounded shadow-sm">
                  <h3 className="h3 font-weight-bold serviceProcHead">
                    {t("sd_process1_2_title")}
                  </h3>
                  <p>{t("sd_process1_2_desc")}</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 mb-4">
                <div className="DevProg p-4 bg_color--5 rounded shadow-sm">
                  <h3 className="h3 font-weight-bold serviceProcHead">
                    {t("sd_process1_3_title")}
                  </h3>
                  <p>{t("sd_process1_3_desc")}</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 mb-4">
                <div className="DevProg p-4 bg_color--5 rounded shadow-sm">
                  <h3 className="h3 font-weight-bold serviceProcHead">
                    {t("sd_process1_4_title")}
                  </h3>
                  <p id="redirect">{t("sd_process1_4_desc")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3">
            <h2 className="display-4 text-center mb-5 DevProgTilte">
              {t("sd_solution1_title")}
            </h2>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="cardBtn2 p-3 rounded text-center">
                  {t("sd_solution1_1")}
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="cardBtn2 p-3 rounded text-center">
                  {t("sd_solution1_2")}
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="cardBtn2 p-3 rounded text-center">
                  {t("sd_solution1_3")}
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="cardBtn2 p-3 rounded text-center">
                  {t("sd_solution1_4")}
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="cardBtn2 p-3 rounded text-center">
                  {t("sd_solution1_5")}
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="cardBtn2 p-3 rounded text-center">
                  {t("sd_solution1_6")}
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="cardBtn2 p-3 rounded text-center">
                  {t("sd_solution1_7")}
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="cardBtn2 p-3 rounded text-center">
                  {t("sd_solution1_8")}
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="cardBtn2 p-3 rounded text-center">
                  {t("sd_solution1_9")}
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="cardBtn2 p-3 rounded text-center">
                  {t("sd_solution1_10")}
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="cardBtn2 p-3 rounded text-center">
                  {t("sd_solution1_11")}
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="cardBtn2 p-3 rounded text-center">
                  {t("sd_solution1_12")}
                </div>
              </div>
            </div>
          </div>

          <div className=" text-center">
            <h2 className="display-4 mb-4 DevProgTilte">
              {t("contact_us_bottom_title")}
            </h2>
            <p className="mb-2">{t("contact_us_bottom_desc")}</p>
            <a
              href="/contact"
              className="btn blog-btn rn-btn px-5 h3 font-weight-bold contactBlogBtn"
            >
              {t("contact_us_bottom_btn")}
            </a>
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

export default SoftDev;
