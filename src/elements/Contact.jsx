import React, { Component, useState } from "react";
import PageHelmet from "../component/common/Helmet";
import { FiHeadphones, FiMail, FiMapPin } from "react-icons/fi";
import ContactJob from "../elements/contact/ContactJob";
import BrandTwo from "../elements/BrandTwo";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import HeaderThree from "../component/header/HeaderThree";
import Footer from "../component/footer/Footer";
import { Background } from "react-parallax";

import Toggle from "../component/Toggle/Toggle";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Contact = () => {
    // static defaultProps = {
    //     center: {
    //         lat: 59.95,
    //         lng: 30.33
    //     },
    //     zoom: 11
    // };
    const [isDark, setIsDark] = useState(true);


    return (
        <div className={isDark ? "active-dark" : "active-light"}>

            <PageHelmet pageTitle='Contact' />

            {/* Start Breadcrump Aresa */}
            <HeaderThree homeLink="/" logo="symbol-dark" color="color-dark" />


            {/* End Breadcrump Area */}




            {/* Start Contact Page Area  */}
            <div className="rn-contact-page ptb--120 bg_color--1">
                <ContactJob targetValue='user' />
            </div>
            {/* End Contact Page Area  */}


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
    )
}

export default Contact