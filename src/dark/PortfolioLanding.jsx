import React, { useState } from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Helmet from "../component/common/Helmet";
import TextLoop from "react-text-loop";
import HeaderThree from "../component/header/HeaderThree";
import Footer from "../component/footer/Footer";
import TabTwo from "../elements/tab/TabTwo";
import ContactThree from "../elements/contact/ContactThree";
import PortfolioList from "../elements/portfolio/PortfolioList";
import ServiceList from "../elements/service/ServiceList";

import BlogContent from "../elements/blog/BlogContent";
// import MultiLang from '../component/MultiLang/MultiLang';


import Toggle from '../component/Toggle/Toggle';

// import { UsageState } from 'webpack'







const SlideList = [
    {
        textPosition: 'text-left',
        category: 'Trusted by over 400+ companies.',
        description: '',
        buttonText: '',
        buttonLink: ''
    }

]
const PortfolioLanding = () => {
    let title = 'About Us'
        // description = `Welcome to our overseas recruitment company! We are a leading global HR recruitment company that specializes in connecting talented individuals with exciting job opportunities overseas. At our company, we understand the challenges and complexities of finding the right talent for international positions. That's why we are here to simplify the process and help both employers and job seekers navigate the global job market with ease.`;
    const PostList = BlogContent.slice(0, 3);

    // const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDark, setIsDark] = useState(true);

    return (
        <div className={isDark ? "active-dark" : "active-light"}>
            <Helmet pageTitle="Alcaenat" />

            <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />
            {/* Start Slider Area   */}

            <div id="home" className="fix">
                <div className="slider-wrapper">
                    {/* Start Single Slide */}
                    {SlideList.map((value, index) => (
                        <div className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25" key={index}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className={`inner ${value.textPosition}`}>
                                            {value.category ? <span>{value.category}</span> : ''}
                                            <h1 className="title">Looking for Overseas Recruitment Agency? <br />
                                                <TextLoop>
                                                    <span> HR Services.</span>
                                                    <span> HR Consulting.</span>
                                                    <span> Business Consulting.</span>
                                                </TextLoop>{" "}
                                            </h1>
                                            {/* <h2>based in USA.</h2> */}
                                            {/* {value.description ? <p className="description">{value.description}</p> : ''}
                                            {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''} */}
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






            {/* Start About Area */}
            <div id="about" className="fix">
                <div className="about-area ptb--120  bg_color--1">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/about/about-8.jpg" alt="About Images" />
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">{title}</h2>
                                            <p className="description">Welcome to our overseas recruitment website! We are thrilled to have you here. At our HR services, we strive to connect talented individuals with exciting job opportunities abroad. Whether you are a job seeker looking for a new adventure or an employer seeking skilled professionals, we are here to assist you every step of the way.  With our extensive network and expertise in international recruitment, we have successfully placed candidates in various industries across the globe.</p>
                                            <p className="description">Our team of dedicated HR professionals understands the unique challenges and opportunities that come with working in a foreign country. We take pride in providing personalized services that cater to the specific needs of both job seekers and employers.  For job seekers, we offer a wide range of resources to help you find the perfect job overseas. Our team will work closely with you to understand your skills, aspirations, and preferences. We will then match you with suitable job opportunities in countries that align with your goals.</p>
                                        </div>
                                        <div className="row mt--30">
                                            <TabTwo tabStyle="tab-style--1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* End About Area */}

            {/* Start Service Area  */}
            <div id="service" className="fix">
                <div className="service-area creative-service-wrapper ptb--120 bg_color--5" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                                    <h2 className="title">Our Services</h2>
                                    <p>Welcome to our overseas recruitment website! We are thrilled to have you here. </p>
                                </div>
                            </div>
                        </div>
                        <div className="row creative-service">
                            <div className="col-lg-12">
                                <ServiceList item="6" column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" />
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
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                                        <h2 className="title">Industries We Serve</h2>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <PortfolioList styevariation="text-center mt--40" column="col-lg-4 col-md-6 col-sm-6 col-12" item="6" />
                            </div>
                            {/* <div className="row">
                                <div className="col-lg-12">
                                    <div className="view-more-btn mt--60 mt_sm--30 text-center">
                                        <a className="rn-button-style--2 btn-solid" href="/blog"><span>View More</span></a>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* End Portfolio Area */}

            {/* Start Blog Area */}
            <div id="blog" className="fix">
                <div className="rn-blog-area ptb--120 bg_color--5 mb-dec--30">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="section-title text-center">
                                    <h2>Latest Blog</h2>
                                    <p>Discover expert insights and valuable tips on cybersecurity, <br /> technology trends, and business strategies in our informative blog section </p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--60 mt_sm--40">
                            {PostList.map((value, i) => (
                                <div className="col-lg-4 col-md-6 col-12" key={i}>
                                    <div className="blog blog-style--1">
                                        <div className="thumbnail">
                                            <a href="/byod-security-policy-best-practices">
                                                <img className="w-100" src={`/assets/images/blog/blog-${value.images}.jpg`} alt="Blog Images" />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <p className="blogtype">{value.category}</p>
                                            <h4 className="title"><a href="/byod-security-policy-best-practices">{value.title}</a></h4>
                                            <div className="blog-btn">
                                                <a className="rn-btn text-white" href="/byod-security-policy-best-practices">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* End Blog Area */}

            {/* Start COntact Area */}
            <div id="contact" className="fix">
                <div className="rn-contact-area ptb--120 bg_color--1">
                    <ContactThree contactImages="/assets/images/about/about-9.jpg" contactTitle="We Would Love To Hear From You" />
                </div>
            </div>
            {/* End COntact Area */}

            <Footer />
            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>


            {/* End Back To Top */}

            {/* theme toggle start */}

            <div className="toggle-button">
              
                    <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
             
            </div>






        </div>
    )
}

export default PortfolioLanding;
