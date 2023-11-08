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
            <PageHelmet pageTitle='HR Consulting' />
            {/* End Pagehelmet  */}

            <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />

            {/* Start Breadcrump Area */}
            <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--5" data-black-overlay="5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="rn-page-title text-center pt--100">
                                <h2 className="title" >Our HR Consulting</h2>
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
                                                <p className="description">Welcome to our HR consulting services website! We are delighted to have you here. At our firm, we specialize in providing comprehensive and tailored HR solutions to businesses of all sizes and industries. Whether you are a startup, a small business, or a multinational corporation, we are here to support you in all your HR needs. </p>

                                                <p>Our team of experienced HR consultants understands the challenges that businesses face in managing their human resources effectively. We offer a wide range of services designed to help you optimize your HR processes, enhance employee engagement, and drive organizational success.</p>



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
                                                <p>One of our key areas of expertise is HR strategy and planning. We work closely with our clients to develop HR strategies that align with their overall business objectives. By understanding your unique needs and goals, we can help you create a roadmap for attracting, developing, and retaining top talent. Our consultants will guide you in designing effective performance management systems, implementing employee development programs, and establishing compensation and benefits structures that are competitive in the market.</p>

                                                <p>Another crucial aspect of our HR consulting services is talent acquisition and management. We understand that finding the right people for your organization is crucial for its success. </p>





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

                                    {/* Start Single Area */}
                                    <div className="row sercice-details-content pb--80 align-items-center">
                                        <div className="col-lg-6 col-12">
                                            <div className="thumb">
                                                <img className="w-100" src="/assets/images/service/service-01.png" alt="Service Images" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div className="title">
                                                <p>Our team utilizes a combination of innovative sourcing strategies, rigorous screening processes, and behavioral assessments to identify candidates who not only possess the necessary skills but also fit well with your company culture. We can also assist you in building a strong employer brand and developing effective onboarding programs to ensure a smooth transition for new hires.</p>

                                                <p>In addition to talent acquisition, we also provide guidance on employee engagement and retention. We believe that engaged employees are the key to a thriving organization. Our consultants can help you design and implement employee engagement initiatives, conduct surveys to gather feedback, and develop strategies to enhance employee satisfaction and loyalty. We also offer training and development programs to empower your employees and foster a culture of continuous learning.
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

                                    {/* Start Single Area */}
                                    <div className="row sercice-details-content align-items-center">
                                        <div className="col-lg-6 col-12">
                                            <div className="title">
                                                <p>Lastly, we understand the importance of compliance and risk management in today's complex business environment. Our HR consultants stay up to date with the latest laws and regulations to ensure that your organization remains compliant. We can assist you in developing HR policies and procedures, conducting audits, and providing guidance on legal and ethical issues.</p>

                                                <p>Partnering with us means gaining access to a team of dedicated HR professionals who are passionate about helping you achieve your business goals. We are committed to delivering exceptional service, customized solutions, and measurable results. </p>

                                                <p>So, whether you need assistance with HR strategy, talent management, employee engagement, or compliance, we are here to support you every step of the way. Contact us today to learn more about our HR consulting services and how we can help your organization thrive.
                                                </p>





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
