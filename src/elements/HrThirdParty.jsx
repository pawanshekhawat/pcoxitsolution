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
            <PageHelmet pageTitle='HR Third Party Payroll Services'/>
            {/* End Pagehelmet  */}

            <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />

            {/* Start Breadcrump Area */}
            <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--5" data-black-overlay="5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="rn-page-title text-center pt--100">
                                <h2 className="title" >HR Third Party Payroll Services</h2>
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
                                                <img className="w-100" src="/assets/images/service/service-01.png" alt="Service Images" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div className="title">

                                                <p>	Welcome to our HR third-party payroll services! We are delighted to offer you a comprehensive and efficient solution to manage your payroll needs. As a trusted partner, we understand the importance of accurate and timely payroll processing, compliance with tax regulations, and maintaining confidentiality.</p>

                                                <p>Our payroll services are designed to simplify the payroll process for your organization, allowing you to focus on your core business activities. Whether you have a small team or a large workforce, we have the expertise and technology to handle your payroll requirements effectively.</p>

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
                                            <h4 className="title">Here are some key features and benefits of our HR third-party payroll services:</h4>

                                            <ul className="liststyle">
                                                    <li>1. Payroll Processing: Our team of payroll experts will handle all aspects of payroll processing, including calculating wages, deductions, and taxes. We ensure that your employees are paid accurately and on time, eliminating the stress and hassle of managing payroll in-house.</li> <br />
                                                    <li>2. Tax Compliance: Staying compliant with tax regulations can be complex and time-consuming. Our payroll services include tax calculations, deductions, and reporting to ensure that your organization remains compliant with local, state, and federal tax laws.</li>  <br />
                                                    <li>3. Direct Deposit and Payroll Distribution: We offer convenient and secure direct deposit options, allowing your employees to receive their pay electronically. We also provide payroll distribution services, including printing and delivering physical paychecks, if needed.</li>  <br />
                                                    <li>4. Employee Self-Service Portal: Our user-friendly online portal enables your employees to access their pay stubs, tax forms, and other payroll-related information anytime, anywhere. This self-service feature empowers your employees and reduces administrative tasks for your HR team.</li>  <br />
                                                 
                                                </ul> 

   
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12 order-1 order-lg-2">
                                            <div className="thumb position-relative">
                                                <img className="w-100" src="/assets/images/service/service-02.png" alt="Service Images" />
                                                <ModalVideo channel='youtube' isOpen={isOpen} videoId='ZOoVOfieAF8' onClose={() => setIsOpen(false)} />
                                                <button className="video-popup" onClick={openModal}><span className="play-icon"></span></button>
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
