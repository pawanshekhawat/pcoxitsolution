import React, { useState, useContext, useEffect, lazy, Suspense } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import { FiBox, FiGlobe, FiMonitor, FiChevronUp } from "react-icons/fi";
import ScrollToTop from "react-scroll-up";
import Footer from "../component/footer/Footer";

import Toggle from "../component/Toggle/Toggle";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../ThemeContext";
import DotlottieLoad from "../Dotlottie/Dotlottie.jsx";

const HeaderThree = lazy(() => import("../component/header/HeaderThree"));

const Service = () => {
  const { t } = useTranslation();

  const ServiceList = [
    {
      icon: <FiBox />,
      title: `${t("hr_services")}`,
      description: `${t("hr_services_message")}`,
      path: "/import-export-logistics-services",
    },
    {
      icon: <FiMonitor />,
      title: `${t("software_dev_1_head")}`,
      description: `${t("software_dev_message")}`,
      path: "/software-development",
    },
    {
      icon: <FiGlobe />,
      title: `${t("hr_third_party_payroll_services")}`,
      description: `${t("hr_third_party_payroll_services_message")}`,
      path: "/digital-marketing",
    },
  ];

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
      <PageHelmet pageTitle="Service" />
      <Suspense fallback={<DotlottieLoad />}>
        <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />
      </Suspense>

      {/* Start Breadcrump Area */}
      <Breadcrumb title={t("services")} />
      {/* End Breadcrump Area */}

      {/* Start Service Area */}
      <div className="service-area ptb--120 seprateBgSection">
        <div className="container aboutRspnContainer">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb--30">
                {/* <h2>{t('our_services')}</h2> */}
              </div>
            </div>
          </div>
          <div className="row service-one-wrapper">
            {ServiceList.map((val, i) => (
              <div
                className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 my-3"
                key={i}
              >
                <a href={val.path}>
                  <div className="serviceCard service service__style--2 bg_color--5 shadow-lg h-100">
                    <div className="icon">{val.icon}</div>
                    <div className="content">
                      <h3 className="title">{val.title}</h3>
                      <p>{val.description}</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End Service Area */}

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
export default Service;
