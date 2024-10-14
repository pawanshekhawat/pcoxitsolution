import React, { useState, useContext, useEffect, lazy, Suspense } from "react";
import Slider from "react-slick";
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

  // Function to handle screen size changes
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 575); // Set mobile if screen size
  };

  const BlogContent = [
    {
      id: "1",
      images: "01",
      title: `${t("blog_title")}`,
      category: `${t("blog_author")}`,
      bloglink: "/navigating-global-trade",
    },
    {
      id: "2",
      images: "02",
      title: `${t("management")}`,
      category: `${t("blog_author")}`,
      bloglink: "/why-your-business-needs-custom-software",
    },

    {
      id: "3",
      images: "03",
      title: `${t("design")}`,
      category: `${t("blog_author")}`,
      bloglink: "/boost-your-brand",
    },
  ];
  // description = `Welcome to our overseas recruitment company! We are a leading global HR recruitment company that specializes in connecting talented individuals with exciting job opportunities overseas. At our company, we understand the challenges and complexities of finding the right talent for international positions. That's why we are here to simplify the process and help both employers and job seekers navigate the global job market with ease.`;
  const PostList = BlogContent.slice(0, 3);

  // const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;

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

  // Slider settings
  const sliderServiceSettings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

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
          {SlideList.map((value, index) => (
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
                ></video>
                <div className="container homeHeroContent">
                  <div className="row">
                    <div className="col-lg-12">
                      <div
                        className={`inner ${value.textPosition} ${
                          isArabic ? "text-right" : ""
                        }`}
                      >
                        {value.category ? (
                          <span
                            className={`homePageHeroTitlesSpan title text-white ${
                              isArabic ? "text-right" : ""
                            }`}
                          >
                            {t("home_hero_sec_desc")}
                          </span>
                        ) : (
                          ""
                        )}
                        <h1
                          className={`homePageHeroTitles title ${
                            isArabic ? "text-right" : ""
                          }`}
                        >
                          {t("home_hero_sec_title")} <br />
                          <TextLoop
                            className={`loopTextBox ${
                              isArabic ? "text-right" : ""
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

            {isMobile ? (
              <div className="">
                <Slider {...sliderServiceSettings}>
                  {PostList.map((value) => (
                    <div
                      className="col-lg-4 col-md-6 col-sm-6 col-12"
                      key={value.id}
                    >
                      <div className="blog blog-style--1 Blogblur">
                        <div className="thumbnail blogImageBox">
                          <a href={`${value.bloglink}`}>
                            <img
                              className="w-100"
                              src={`/assets/images/blog/blog-${value.images}.webp`}
                              alt="Blog Images"
                            />
                          </a>
                        </div>
                        <div className="content">
                          <h4 className="title blogHomeTitle">
                            <a href={`${value.bloglink}`}>{value.title}</a>
                          </h4>
                          <p className="blogtype blogHomeTitleAuth">
                            {value.category}
                          </p>
                          <div className="blog-btn blogHomeBtnBox">
                            <a
                              className="rn-btn text-white blogHomeBtn"
                              href={`${value.bloglink}`}
                            >
                              {t("read_more")}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            ) : (
              <div className="row mt--60 mt_sm--40 h-full">
                {PostList.map((value, i) => (
                  <div className="col-lg-4 col-md-6 col-12" key={i}>
                    <div className="blog blog-style--1">
                      <div className="thumbnail blogImageBox">
                        <a href={`${value.bloglink}`}>
                          <img
                            className="w-100"
                            src={`/assets/images/blog/blog-${value.images}.webp`}
                            alt="Blog Images"
                          />
                        </a>
                      </div>
                      <div className="content" style={{ textAlign: isArabic ? 'right' : 'left' }}>
                        <h4 className="title">
                          <a href={`${value.bloglink}`}>{value.title}</a>
                        </h4>
                        <p className="blogtype">{value.category}</p>
                        <div className="blog-btn">
                          <a
                            className="rn-btn text-white"
                            href={`${value.bloglink}`}
                          >
                            {t("read_more")}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
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
