import React, { useState } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import HeaderThree from "../component/header/HeaderThree";
import Footer from "../component/footer/Footer";
import Toggle from "../component/Toggle/Toggle";

const ServiceDetails = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };
 
    const [isDark, setIsDark] = useState(true);


    return (
        <div className={isDark ? "active-dark" : "active-light"}>
            {/* Start Pagehelmet  */}
            <PageHelmet pageTitle='Hr Services'/>
            {/* End Pagehelmet  */}

            <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />

            {/* Start Breadcrump Area */}
            <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--5" data-black-overlay="5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="rn-page-title text-center pt--100">
                                <h2 className="title" >Our Hr Services</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Breadcrump Area */}

            {/* Start Page Wrapper */}
            <div className="rn-service-details ptb--120 bg_color--1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="service-details-inner">
                                <div className="inner">
                                    {/* Start Single Area */}
                                    <div className="row sercice-details-content pb--80 align-items-center">
                                        <div className="col-lg-6 col-12">
                                            <div className="thumb">
                                                <img className="w-100" src="/assets/images/service/hrservice01.JPG" alt="Service Images" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div className="title">
                                            <p className="description"  >Welcome to our overseas recruitment website! We are thrilled to have you here. At our HR services, we strive to connect talented individuals with exciting job opportunities abroad. Whether you are a job seeker looking for a new adventure or an employer seeking skilled professionals, we are here to assist you every step of the way.  </p>

                                                <p>With our extensive network and expertise in international recruitment, we have successfully placed candidates in various industries across the globe. Our team of dedicated HR professionals understands the unique challenges and opportunities that come with working in a foreign country. We take pride in providing personalized services that cater to the specific needs of both job seekers and employers.  For job seekers, we offer a wide range of resources to help you find the perfect job overseas. Our team will work closely with you to understand your skills, aspirations, and preferences. We will then match you with suitable job opportunities in countries that align with your goals.</p>


                                                {/* <h4 className="title">Proceess of metel</h4>
                                                <ul className="liststyle">
                                                    <li>Yet this above sewed flirted opened ouch</li>
                                                    <li>Goldfinch realistic sporadic ingenuous</li>
                                                    <li>Abominable this abidin far successfully then like piquan</li>
                                                    <li>Risus commodo viverra</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                </ul> */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Area */}

                                    {/* Start Single Area */}
                                    <div className="row sercice-details-content align-items-center">
                                    <div className="col-lg-6 col-12">
                                            <div className="title">
                                            <p className="description"  >For job seekers, we offer a wide range of resources to help you find the perfect job overseas. Our team will work closely with you to understand your skills, aspirations, and preferences. We will then match you with suitable job opportunities in countries that align with your goals. From resume writing and interview preparation to visa assistance and relocation support, we are committed to making your transition as smooth as possible.</p>

                                                <p>Employers, on the other hand, can rely on our expertise to find the right talent for their organizations. We understand that hiring internationally can be a complex process, which is why we handle everything from sourcing candidates to conducting interviews and managing the paperwork. Our goal is to connect you with highly qualified professionals who can contribute to the growth and success of your business.</p>


   
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12 order-1 order-lg-2">
                                            <div className="thumb position-relative">
                                                <img className="w-100" src="/assets/images/service/hrservice02.JPG" alt="Service Images" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Area */}

                                     {/* Start Single Area */}
                                     <div className="row sercice-details-content pb--80 align-items-center">
                                        <div className="col-lg-6 col-12">
                                            <div className="thumb">
                                                <img className="w-100" src="/assets/images/service/hrservice03.JPG"  alt="Service Images" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div className="title">
                                            <p>What sets us apart is our commitment to building long-term relationships with our clients. We believe in going beyond just filling job vacancies – we strive to create partnerships that last. Our team takes the time to understand your unique requirements and company culture, ensuring that we find candidates who not only have the necessary skills but also fit seamlessly into your organization.</p>

                                            <p>So, whether you are looking to explore new career opportunities overseas or seeking talented professionals to join your team, we invite you to partner with us. Together, we can make your international recruitment journey a rewarding and successful one. Contact us today to learn more about our HR services and how we can assist you in achieving your goals.
</p>

                                                {/* <h4 className="title">Proceess of metel</h4>
                                                <ul className="liststyle">
                                                    <li>Yet this above sewed flirted opened ouch</li>
                                                    <li>Goldfinch realistic sporadic ingenuous</li>
                                                    <li>Abominable this abidin far successfully then like piquan</li>
                                                    <li>Risus commodo viverra</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                </ul> */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Area */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Page Wrapper */}

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

export default ServiceDetails;
