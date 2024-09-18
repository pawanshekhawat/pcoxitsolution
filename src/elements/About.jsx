import React, { useState, useContext } from "react";

import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import BrandTwo from "../elements/BrandTwo";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import HeaderThree from "../component/header/HeaderThree";
import Footer from "../component/footer/Footer";
import Toggle from "../component/Toggle/Toggle";

import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../ThemeContext';


const About = () => {

    const { t } = useTranslation();

    let title =`${t('about_us')}`
     const { isDark, toggleTheme } = useContext(ThemeContext);


    return (

        <div className={isDark ? "active-dark" : "active-light"}>
            <PageHelmet pageTitle={t('about')} />

            <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />
            {/* Start Breadcrump Area */}
            <Breadcrumb title={t('about')} />
            {/* End Breadcrump Area */}

            {/* Start About Area  */}
            <div className="rn-about-area ptb--120 bg_color--1">
                <div className="rn-about-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            <div className="col-lg-6">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/about/about-3.jpg" alt="About Images" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <h2 className="title">{title}</h2>
                                        <p className="description">{t('about_desc_1')}.
                                            <br />  <br />
                                            {t('about_desc_3')}
                                            <br /> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--30">
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="about-us-list">
                                                {/* <h3 className="title" style={{color:"#fff"}}>Who we are</h3> */}
                                                <p>{t('about_desc_2')}</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="about-us-list">
                                                {/* <h3 className="title" style={{color:"#fff"}}>Who we are</h3> */}
                                                <p>{t('about_desc_4')}</p>
                                            </div>
                                        </div>
                                    </div>
                    </div>
                </div>
            </div>
            {/* End About Area  */}

            {/* Start CounterUp Area */}
            <div className="rn-counterup-area pb--120 bg_color--1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center" style={{ marginTop: "60px" }}>
                                <h3 className="fontWeight500">{t('our_achiev')}</h3>
                            </div>
                        </div>
                    </div>
                    <CounterOne />
                </div>
            </div>
            {/* End CounterUp Area */}

    

              {/* Start Testimonial Area */}
            <div className="rn-testimonial-area bg_color--5 ptb--120">
                <div className="container">
                    <Testimonial />
                </div>
            </div>
            {/* End Testimonial Area */}

            {/* Start Team Area  */}
            {/* <div className="rn-team-area bg_color--1 ptb--120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title service-style--3 text-center mb--25">
                                <h2 className="title">Skilled Team</h2>
                                <p>Meet our exceptional team of dedicated professionals, each bringing a unique set of skills and expertise to the table. Together, we strive towards excellence, innovation, and a shared commitment to exceeding expectations.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                    
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="team">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/team/team-01.jpg" alt="Blog Images" />
                                </div>
                                <div className="content">
                                    <h4 className="title">Jone Daniels</h4>
                                    <p className="designation">Recruitment Specialist:</p>
                                </div>
                                <ul className="social-icon" >
                                    <li><a href="https://www.facebook.com/"><FaFacebookF /></a></li>
                                    <li><a href="http://linkedin.com/"><FaLinkedinIn /></a></li>
                                    <li><a href="https://twitter.com/"><FaTwitter /></a></li>
                                </ul>
                            </div>
                        </div>
                   


                        

                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="team">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/team/team-02.jpg" alt="Blog Images" />
                                </div>
                                <div className="content">
                                    <h4 className="title">Maria allen</h4>
                                    <p className="designation">HR Manager</p>
                                </div>
                                <ul className="social-icon" >
                                    <li><a href="https://www.facebook.com/"><FaFacebookF /></a></li>
                                    <li><a href="http://linkedin.com/"><FaLinkedinIn /></a></li>
                                    <li><a href="https://twitter.com/"><FaTwitter /></a></li>
                                </ul>
                            </div>
                        </div>
                      

              
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="team">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/team/team-03.jpg" alt="Blog Images" />
                                </div>
                                <div className="content">
                                    <h4 className="title">Alex Hien</h4>
                                    <p className="designation">Training and Development Specialist:</p>
                                </div>
                                <ul className="social-icon" >
                                    <li><a href="https://www.facebook.com/"><FaFacebookF /></a></li>
                                    <li><a href="http://linkedin.com/"><FaLinkedinIn /></a></li>
                                    <li><a href="https://twitter.com/"><FaTwitter /></a></li>
                                </ul>
                            </div>
                        </div>


                    </div>
                </div>
            </div> */}
            {/* End Team Area  */}

          

            {/* Start Brand Area */}
            {/* <div className="rn-brand-area brand-separation bg_color--5 ptb--120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <BrandTwo />
                        </div>
                    </div>
                </div>
            </div> */}
            {/* End Brand Area */}

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

    )
}
export default About