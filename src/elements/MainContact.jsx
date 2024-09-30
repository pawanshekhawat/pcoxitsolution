import React, { useContext, useState, useEffect } from "react";
import PageHelmet from "../component/common/Helmet";
import { FiHeadphones, FiMail, FiMapPin } from "react-icons/fi";
import GoogleMapReact from "google-map-react";
import BrandTwo from "../elements/BrandTwo";
import ContactFour from "./contact/ContactFour";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import HeaderThree from "../component/header/HeaderThree";
import Footer from "../component/footer/Footer";
import { Background } from "react-parallax";
import axios from "axios";

import Toggle from "../component/Toggle/Toggle";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../ThemeContext";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const MainContact = () => {
  // Move all hooks, including useTranslation, to the top level
  const { t } = useTranslation(); // Use at the top, not inside conditions
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Effect for dotlottie-player script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
    script.type = "module";
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // Simulate loading for 3 seconds
  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setLoading(false);
    };
    fetchData();
  }, []);

  // Handle input change for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/register-contact", formData);
      if (response.status === 201) {
        setStatus("Success");
        setFormData({
          fname: "",
          lname: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (error) {
      setStatus("Error: " + error.response.data.message);
    }
  };

  if (loading) {
    return (
      <div className={isDark ? "active-dark" : "active-light"}>
        <div style={{ width: "100vw", height: "100vh", display: "grid", placeItems: "center" }}>
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
      <PageHelmet pageTitle="Contact" />
      <HeaderThree homeLink="/" logo="symbol-dark" color="color-dark" />
      <div className="breadcrumb-area rn-bg-color ptb--180 bg_image contactUsBanner" data-black-overlay="8">
        <div className="container aboutRspnContainer">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="rn-address mainContactCards">
                <div className="icon">
                  <FiHeadphones />
                </div>
                <div className="inner">
                  <h4 className="title title1 mainContactCardText">{t("contact_num")}</h4>
                  <p>
                    <a className="mainContactCardText" href="tel:+91 7022987604">
                      Mobile: +91-7022987604
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_mobile--60">
              <div className="rn-address mainContactCards">
                <div className="icon">
                  <FiMail />
                </div>
                <div className="inner">
                  <h4 className="title title1 mainContactCardText">{t("email_add")}</h4>
                  <p>
                    <a className="mainContactCardText" href="support@pcoxgroup.in">
                      support@pcoxgroup.in
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--60">
              <div className="rn-address mainContactCards">
                <div className="icon">
                  <FiMapPin />
                </div>
                <div className="inner">
                  <h4 className="title title1 mainContactCardText">{t("location")}</h4>
                  <p>
                    <a className="mainContactCardText" href="https://maps.app.goo.gl/oizfgAiWvUE7hAca9" target="_blank">
                      Ilnnov8 Mantri commercio, 5th Floor, Tower-A
                      Bellandur ORR, Bengaluru, Karnataka 560103
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rn-contact-page ptb--120 bg_color--1 seprateBgSection">
        <ContactFour />
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

export default MainContact;
