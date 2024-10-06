import React, { useState, useContext, useEffect, lazy, Suspense } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import HeaderThree from "../component/header/HeaderThree";
import Footer from "../component/footer/Footer";
import Toggle from "../component/Toggle/Toggle";
import { FaMedapps } from 'react-icons/fa';
import { SiAmazonwebservices } from 'react-icons/si';
import { TbDeviceMobileCharging } from 'react-icons/tb';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { IoCloudCircleOutline } from 'react-icons/io5';
import { BiSupport } from 'react-icons/bi';
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../ThemeContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const serviceCards = [
  {
    id: 1,
    titleKey: "software_dev_1_head",
    icon: <FaMedapps />,
    link: "/service/software-development"
  },
  {
    id: 2,
    titleKey: "software_dev_2_head",
    icon: <SiAmazonwebservices />,
    link: "/service/web-app"
  },
  {
    id: 3,
    titleKey: "software_dev_3_head",
    icon: <TbDeviceMobileCharging />,
    link: "/service/mobile-app"
  },
  {
    id: 4,
    titleKey: "software_dev_4_head",
    icon: <IoIosAddCircleOutline />,
    link: "/service/software-integration"
  },
  {
    id: 5,
    titleKey: "software_dev_5_head",
    icon: <IoCloudCircleOutline />,
    link: "/service/cloud-based-solutions"
  },
  {
    id: 6,
    titleKey: "software_dev_6_head",
    icon: <BiSupport />,
    link: "/service/software-maintenance"
  }
];

const ServiceDetails = () => {
  const { t } = useTranslation();
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
    script.type = 'module';
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
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
      <div className={isDark ? "active-dark" : "active-light"}>
        <div style={{ width: '100vw', height: '100vh', display: 'grid', placeItems: 'center' }}>
          <dotlottie-player
            src="https://lottie.host/0544481e-fc88-4533-8112-736c6a8be8f8/zpUnJPdBr3.json"
            background="transparent"
            speed="1"
            style={{ width: '300px', height: '300px' }}
            loop
            autoplay
          />
        </div>
      </div>
    );
  }

  return (
    <div className={isDark ? "active-dark" : "active-light"}>
      <PageHelmet pageTitle="Software Development" />
      <Suspense fallback={<div>Loading...</div>}>
        <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />
      </Suspense>

      <div className="breadcrumb-area rn-bg-color bg_image bg_image-service2">
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

      <div className="rn-service-details pt--40 pb--120 bg_color--1">
        <div className="container portBlogArea">
          <h3 className="serviceHead">{t("software_dev_0_title")}</h3>
          <div className="serviceCards row">
            {serviceCards.map(({ id, titleKey, icon, link }) => (
              <div className="serviceCard card col-12 col-md-6 col-lg-3 mb-4" key={id}>
                <div className="card-body">
                  <a href={link} className="card-title h3 text-white serviceCardTitle">
                    {icon} <br />
                    {t(titleKey)}
                  </a>
                  <div className="btmBtn mt-3 d-flex">
                    <a href="/contact" className="cardBtn btn">{t("services_wwp_card_btn1")}</a>
                    <a href={link} className="cardBtn btn mx-2">{t("services_wwp_card_btn2")}</a>
                  </div>
                </div>
              </div>
            ))}
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
