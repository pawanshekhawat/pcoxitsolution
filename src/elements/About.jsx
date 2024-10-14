import React, { useState, useContext, useEffect, lazy, Suspense } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../ThemeContext";
import DotlottieLoad from "../Dotlottie/Dotlottie.jsx";

const CounterOne = lazy(() => import("../elements/counters/CounterOne"));
const Testimonial = lazy(() => import("../elements/Testimonial"));
const HeaderThree = lazy(() => import("../component/header/HeaderThree"));
const Footer = lazy(() => import("../component/footer/Footer"));
const Toggle = lazy(() => import("../component/Toggle/Toggle"));

const About = () => {
  const { t, i18n  } = useTranslation();
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);
  
  const title = `${t("about_us")}`;

  useEffect(() => {
    const scriptId = "dotlottie-player-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src =
        "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
      script.type = "module";
      script.id = scriptId;
      document.head.appendChild(script);
    }

    // Cleanup when component unmounts
    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
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

  const isArabic = i18n.language === 'ar';

  return (
    <div className={isDark ? "active-dark" : "active-light"}>
      <PageHelmet pageTitle={t("about")} />
      <Suspense fallback={<DotlottieLoad />}>
        <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />
      </Suspense>
      <Breadcrumb title={t("about_us")} />

      <div className="rn-about-area ptb--120 bg_color--1 seprateBgSection">
        <div className="rn-about-wrapper">
          <div className="container aboutRspnContainer sdPadding">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="thumbnail">
                  <img
                    className="w-100"
                    src="/assets/images/about/about-3.webp"
                    alt="About Images"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-inner inner" style={{ textAlign: isArabic ? 'right' : 'left' }}>
                  <div className="section-title">
                    <h2 className="title section-title">{title}</h2>
                    <p className="aboutParaRspn">
                      {t("about_desc_1")}.
                      <br />
                      <br />
                      {t("about_desc_3")}
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt--30 aboutOtherParaContent" style={{ textAlign: isArabic ? 'right' : 'left' }}>
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="about-us-list">
                  <p className="aboutParaRspn">{t("about_desc_2")}</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="about-us-list">
                  <p className="aboutParaRspn">{t("about_desc_4")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rn-counterup-area pb--120 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center achivementAboutRspn" style={{ marginTop: "60px" }}>
                <h3 className="fontWeight500">{t("our_achiev")}</h3>
              </div>
            </div>
          </div>
          <Suspense fallback={<DotlottieLoad />}>
            <CounterOne />
          </Suspense>
        </div>
      </div>

      <div className="rn-testimonial-area bg_color--5 ptb--120 seprateBgSection">
        <div className="container">
          <Suspense fallback={<DotlottieLoad />}>
            <Testimonial />
          </Suspense>
        </div>
      </div>

      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>

      <div className="toggle-button">
        <Suspense fallback={<DotlottieLoad />}>
          <Toggle isChecked={isDark} handleChange={toggleTheme} />
        </Suspense>
      </div>

      <Footer />
    </div>
  );
};

export default About;
