import React, { Component } from "react";
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

import { useState } from "react";


const About = () => {

    let title = 'About Us'
    const [isDark, setIsDark] = useState(true);
    return (

        <div className={isDark ? "active-dark" : "active-light"}>
            <PageHelmet pageTitle='About' />

            <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />
            {/* Start Breadcrump Area */}
            <Breadcrumb title={'About'} />
            {/* End Breadcrump Area */}

            {/* Start About Area  */}
            <div className="rn-about-area ptb--120 bg_color--1">
                <div className="rn-about-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            <div className="col-lg-5">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/about/about-3.jpg" alt="About Images" />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <h2 className="title">{title}</h2>
                                        <p className="description">Welcome to our overseas recruitment company! We are a leading global HR recruitment company that specializes in connecting talented individuals with exciting job opportunities overseas.

                                            At our company, we understand the challenges and complexities of finding the right talent for international positions.

                                            <br />  <br />

                                            That's why we are here to simplify the process and help both employers and job seekers navigate the global job market with ease.

                                            With years of experience in the industry, we have built a strong network of international clients and candidates, enabling us to match the right talent with the right job, regardless of geographical boundaries.
                                            We work closely with both employers and job seekers to understand their unique needs, preferences, and goals, ensuring a seamless and successful recruitment process.
                                            <br /> </p>
                                    </div>
                                    <div className="row mt--30">
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="about-us-list">
                                                {/* <h3 className="title" style={{color:"#fff"}}>Who we are</h3> */}
                                                <p>Our team of dedicated and experienced professionals is committed to providing exceptional recruitment services. We leverage our expertise, industry knowledge, and cutting-edge technology to identify top talent, conduct thorough screenings, and facilitate smooth transitions for candidates relocating to new countries.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="about-us-list">
                                                {/* <h3 className="title" style={{color:"#fff"}}>Who we are</h3> */}
                                                <p>We take pride in our professionalism, integrity, and ethical conduct. We adhere to the highest standards of business practices, ensuring transparency, confidentiality, and fairness throughout the recruitment process. Our goal is to build long-term relationships with our clients and candidates, based on trust, mutual respect, and shared success.</p>
                                            </div>
                                        </div>
                                    </div>
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
                                <h3 className="fontWeight500">Our Fun Facts</h3>
                            </div>
                        </div>
                    </div>
                    <CounterOne />
                </div>
            </div>
            {/* End CounterUp Area */}

            {/* Start Finding Us Area  */}
            {/* <div className="rn-finding-us-area rn-finding-us bg_color--1">
                    <div className="inner">
                        <div className="content-wrapper">
                            <div className="content">
                                <h4 className="theme-gradient">Find Your Work Now</h4>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that.</p>
                                <a className="rn-btn btn-white" href="/about">Get Started</a>
                            </div>
                        </div>
                        <div className="thumbnail">
                            <div className="image">
                                <img src="/assets/images/about/finding-us-01.png" alt="Finding Images"/>
                            </div>
                        </div>
                    </div>
                </div> */}
            {/* End Finding Us Area  */}

              {/* Start Testimonial Area */}
            <div className="rn-testimonial-area bg_color--5 ptb--120">
                <div className="container">
                    <Testimonial />
                </div>
            </div>
            {/* End Testimonial Area */}

            {/* Start Team Area  */}
            <div className="rn-team-area bg_color--1 ptb--120">
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

                        {/* Start Single Team  */}
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
                        {/* End Single Team  */}


                        

                        {/* Start Single Team  */}
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
                        {/* End Single Team  */}

                        {/* Start Single Team  */}
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
                        {/* End Single Team  */}

                    </div>
                </div>
            </div>
            {/* End Team Area  */}

          

            {/* Start Brand Area */}
            <div className="rn-brand-area brand-separation bg_color--5 ptb--120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <BrandTwo />
                        </div>
                    </div>
                </div>
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

    )
}
export default About