import React, { useState, useContext, useEffect, lazy, Suspense, useMemo } from "react";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Helmet from "../component/common/Helmet";
import TextLoop from "react-text-loop";
import Toggle from "../component/Toggle/Toggle";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../ThemeContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BgVid from "../../public/assets/images/bg/homeBGVid.mp4";

const BlogSlider = lazy(() => import("../elements/blog/BlogSlider.jsx"));
const DotlottieLoad = lazy(() => import("../Dotlottie/Dotlottie.jsx"));
const HeaderThree = lazy(() => import("../component/header/HeaderThree"));
const Footer = lazy(() => import("../component/footer/Footer"));
const PortfolioList = lazy(() => import("../elements/portfolio/PortfolioList"));
const ServiceList = lazy(() => import("../elements/service/ServiceList"));
const ContactFour = lazy(() => import("../elements/contact/ContactFour"));

const SlideList = [
  {
    textPosition: "text-left",
    category: "Trusted by over 400+ companies.",
    description: "",
    buttonText: "",
    buttonLink: "",
  },
];

const PortfolioLanding = ({ value }) => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Memoized values
  const memoizedSlideList = useMemo(() => SlideList, []);
  const memoizedClassName = useMemo(() => ({
    containerClass: isDark ? "active-dark" : "active-light",
    textDirection: isArabic ? "text-right" : ""
  }), [isDark, isArabic]);

  // Function to handle screen size changes
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 575); // Set mobile if screen size
  };

  useEffect(() => {
    // Dynamically append the new script for dotlottie-player
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
    script.type = "module";
    document.head.appendChild(script);
    console.log("homepage useeffect1");
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
    console.log("homepage useeffect2");

    fetchData();
  }, []);

  // Add resize event listener
  useEffect(() => {
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Listen to resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on unmount
    };
  }, []);

  if (loading) {
    return <DotlottieLoad />;
  }

  return (
    <div className={isDark ? "active-dark" : "active-light"}>
      <Helmet pageTitle="PCOX Internet Pvt. Ltd." />
      <Suspense fallback={<DotlottieLoad />}>
        <Suspense fallback={<DotlottieLoad />}>
          <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />
        </Suspense>
        {/* Start Slider Area   */}
      </Suspense>
      <div id="home" className="fix">
        <div className="slider-wrapper">
          {/* Start Single Slide */}
          {memoizedSlideList.map((value, index) => (
            <div className="home-overlay">
              <div
                className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image"
                key={index}
              >
                <video
                  loading="lazy"
                  src={BgVid}
                  autoPlay
                  loop
                  muted
                  className="homeBGvid"
                  playsinline
                ></video>
                <div className="container homeHeroContent">
                  <div className="row">
                    <div className="col-lg-12">
                      <div
                        className={`inner ${value.textPosition} ${memoizedClassName.textDirection}
                          }`}
                      >
                        {value.category ? (
                          <span
                            className={`homePageHeroTitlesSpan title text-white ${memoizedClassName.textDirection}
                              }`}
                          >
                            {t("home_hero_sec_desc")}
                          </span>
                        ) : (
                          ""
                        )}
                        <h1
                          className={`homePageHeroTitles title ${memoizedClassName.textDirection}
                            }`}
                        >
                          {t("home_hero_sec_title")} <br />
                          <TextLoop
                            className={`loopTextBox ${memoizedClassName.textDirection}
                              }`}
                          >
                            <span className="homePageLoopText">
                              {t("Software-Development")}
                            </span>
                            <span className="homePageLoopText">
                              {t("home_hero_sec_loop2")}
                            </span>
                            <span className="homePageLoopText">
                              {t("home_hero_sec_loop3")}
                            </span>
                          </TextLoop>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* End Single Slide */}
        </div>
      </div>
      {/* End Slider Area   */}

      {/* <MultiLang /> */}

      {/* Start Service Area  */}
      <div id="service" className="fix">
        <div className="service-area creative-service-wrapper ptb--120  bg_color--5 seprateBgSection ptb-sm--80">
          <div className="containerService container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                  <h2 className="title section-title">{t("our_services")}</h2>
                  <p className="homeServiceP">{t("our_services_message")}</p>
                </div>
              </div>
            </div>
            <div className="row creative-service">
              <div className="col-lg-12">
                <Suspense fallback={<DotlottieLoad />}>
                  <ServiceList
                    item="6"
                    column="col-lg-4 col-md-6 col-sm-6 col-12 text-left"
                  />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Service Area  */}

      {/* Start Portfolio Area */}
      <div id="portfolio" className="fix">
        <div className="portfolio-area ptb--120 bg_color--1">
          <div className="portfolio-sacousel-inner">
            <div className="container aboutRspnContainer">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                    <h2 className="title section-title">
                      {t("industries_we_serve")}
                    </h2>
                    <p className="iwsParaRspn">
                      {t("industries_we_serve_message")}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <Suspense fallback={<DotlottieLoad />}>
                  <PortfolioList
                    styevariation="text-center mt--40"
                    column="col-lg-4 col-md-6 col-sm-6 col-12"
                    item="6"
                  />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Portfolio Area */}

      {/* Start Blog Area */}
      <div id="blog" className="fix">
        <div className="rn-blog-area ptb--120 bg_color--5 mb-dec--30 seprateBgSection">
          <div className="container portBlogArea">
            <div className="row align-items-end">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="section-title text-center">
                  <h2 className="blogMainTitle">{t("latest_blog")}</h2>
                  <p className="blogParaRspn">
                    {t("latest_blog_message_1")} <br />
                    {t("latest_blog_message_2")}
                  </p>
                </div>
              </div>
            </div>
            <BlogSlider />
          </div>
        </div>
      </div>
      {/* End Blog Area */}

      {/* Start COntact Area */}
      <div id="contact" className="fix">
        <div className="rn-contact-area ptb--120 bg_color--1">
          <ContactFour />
        </div>
      </div>
      {/* End COntact Area */}
      <Suspense fallback={<DotlottieLoad />}>
        <Footer />
      </Suspense>
      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>

      {/* End Back To Top */}

      {/* theme toggle start */}

      <div className="toggle-button">
        <Toggle isChecked={isDark} handleChange={toggleTheme} />
      </div>
    </div>
  );
};

export default PortfolioLanding;
