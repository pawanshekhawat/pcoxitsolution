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
            <PageHelmet pageTitle='Business Consulting'/>
            {/* End Pagehelmet  */}

            <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />

            {/* Start Breadcrump Area */}
            <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--5" data-black-overlay="5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="rn-page-title text-center pt--100">
                                <h2 className="title" >Business Consulting</h2>
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

                                                <p>Welcome to our business consulting services, where expertise meets innovation! At our firm, we understand the dynamic challenges businesses face in today's competitive landscape. With a team of seasoned consultants, we offer strategic guidance tailored to your specific needs. Whether you're a startup looking to establish your market presence or an established corporation aiming for operational excellence, our comprehensive solutions empower you to achieve your goals.</p>

                                                <p>In the realm of business consulting, we redefine possibilities. Our dedicated team of professionals combines industry insights with creativity, delivering innovative solutions that drive business growth. We believe in not just meeting but exceeding client expectations. By leveraging our expertise in areas such as market research, strategic planning, and organizational development, we assist businesses in making informed decisions and staying ahead of the competition. Let us be your strategic partners, guiding you toward a future of unparalleled success and growth.</p>

                                               
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
