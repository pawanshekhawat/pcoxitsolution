import React, { Component, useState } from "react";
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
import axios from 'axios';

import Toggle from "../component/Toggle/Toggle";
import { useTranslation } from "react-i18next";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const MainContact = () => {
  const { t } = useTranslation();

  const [isDark, setIsDark] = useState(false);

  // State for form fields
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  });

  // State for form submission status
  const [status, setStatus] = useState("");

  // Handle input change
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
        // Clear the form fields
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

  return (
    <div className={isDark ? "active-dark" : "active-light"}>
      <PageHelmet pageTitle="Contact" />

      {/* Start Breadcrump Aresa */}
      <HeaderThree homeLink="/" logo="symbol-dark" color="color-dark" />
      <div className="rn-contact-top-area ptb--120 bg_color--5">
        <div className="container">
          <div className="row">
            {/* Start Single Address  */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="rn-address">
                <div className="icon">
                  <FiHeadphones />
                </div>
                <div className="inner">
                  <h4 className="title title1">{t("contact_num")}</h4>
                  <p>
                    <a href="tel:+91 7022987604">Mobile: +91-7022987604</a>
                  </p>
                </div>
              </div>
            </div>
            {/* End Single Address  */}

            {/* Start Single Address  */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_mobile--50">
              <div className="rn-address">
                <div className="icon">
                  <FiMail />
                </div>
                <div className="inner">
                  <h4 className="title title1">{t("email_add")}</h4>
                  <p>
                    <a href="support@pcoxgroup.in">support@pcoxgroup.in</a>
                  </p>
                </div>
              </div>
            </div>
            {/* End Single Address  */}

            {/* Start Single Address  */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50">
              <div className="rn-address">
                <div className="icon">
                  <FiMapPin />
                </div>
                <div className="inner">
                  <h4 className="title title1">{t("location")}</h4>

                  <p>
                    <a href="#" target="_blank">
                      Bangalore, Karnataka, India, 560103{" "}
                    </a>{" "}
                  </p>
                </div>
              </div>
            </div>
            {/* End Single Address  */}
          </div>
        </div>
      </div>
      <div className="rn-contact-page ptb--120 bg_color--1">
        <ContactFour />
      </div>
      {/* End Brand Area */}

      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}

      <div className="toggle-button">
        <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      </div>

      <Footer />
    </div>
  );
};

export default MainContact;
