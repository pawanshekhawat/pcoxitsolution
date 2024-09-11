import React, { useState } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import HeaderThree from "../component/header/HeaderThree";
import Footer from "../component/footer/Footer";
import Toggle from "../component/Toggle/Toggle";

import { useTranslation } from 'react-i18next';

const ServiceDetails = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };
 
    const [isDark, setIsDark] = useState(true);


    return (
        <div className={isDark ? "active-dark" : "active-light"}>
            {/* Start Pagehelmet  */}
            <PageHelmet pageTitle=' Import-Export Services & Logistics Solutions'/>
            {/* End Pagehelmet  */}

            <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />

            {/* Start Breadcrump Area */}
            <div className="rn-page-title-area pt--120 pb--190 bg_image" data-black-overlay="5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="rn-page-title text-center pt--100">
                                <h2 className="title" >{t('hr_services_0')}</h2>
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
                                    <div className="row sercice-details-content pb--80 align-items-start">
                                        <div className="col-lg-6 col-12">
                                            <div className="thumb">
                                                <img className="w-100" src="/assets/images/service/hrservice01.JPG" alt="Service Images" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                        <div className="title">
                                                <h4 className="title">{t('hr_services_1_head')}</h4>
                                                <div className="mb-3" style={{fontSize:'15px'}}>{t('hr_services_1_desc')}</div>
                                                <ul className="liststyle">
                                                    <li>{t('hr_services_1_li1')}</li> <br />
                                                    <li>{t('hr_services_1_li2')}</li>  <br />
                                                    <li>{t('hr_services_1_li3')}</li>  <br />
                                                    <li>{t('hr_services_1_li4')}</li>  <br />
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                    {/* End Single Area */}

                                    {/* Start Single Area */}
                                    <div className="row sercice-details-content pb--80 align-items-start">
                                        <div className="col-lg-6 col-12 mt-2">
                                            <div className="title">
                                                <h4 className="title">{t('hr_services_2_head')}</h4>
                                                <div className="mb-3" style={{fontSize:'15px'}}>{t('hr_services_2_desc')}</div>
                                                <ul className="liststyle">
                                                    <li>{t('hr_services_2_li1')}</li> <br />
                                                    <li>{t('hr_services_2_li2')}</li>  <br />
                                                    <li>{t('hr_services_2_li3')}</li>  <br />
                                                    <li>{t('hr_services_2_li4')}</li>  <br />
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12 order-1 order-lg-2">
                                            <div className="thumb position-relative">
                                                <img className="w-100" src="/assets/images/service/hrservice02.JPG" alt="Service Images" />
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    {/* End Single Area */}

                                     {/* Start Single Area */}
                                     <div className="row sercice-details-content pb--80 align-items-start">
                                        <div className="col-lg-6 col-12">
                                            <div className="thumb">
                                                <img className="w-100" src="/assets/images/service/hrservice03.JPG"  alt="Service Images" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12 mt-2">
                                        <div className="title">
                                                <h4 className="title">{t('hr_services_3_head')}</h4>
                                                <div className="mb-3" style={{fontSize:'15px'}}>{t('hr_services_3_desc')}</div>
                                                <ul className="liststyle">
                                                    <li>{t('hr_services_3_li1')}</li> <br />
                                                    <li>{t('hr_services_3_li2')}</li>  <br />
                                                    <li>{t('hr_services_3_li3')}</li>  <br />
                                                    <li>{t('hr_services_3_li4')}</li>  <br />
                                                </ul>
                                            </div>
                                            {/* <div className="title">
                                            <p>{t('hr_services_5')}</p>

                                            <p>{t('hr_services_6')}</p>

                                                {/* <h4 className="title">Proceess of metel</h4>
                                                <ul className="liststyle">
                                                    <li>Yet this above sewed flirted opened ouch</li>
                                                    <li>Goldfinch realistic sporadic ingenuous</li>
                                                    <li>Abominable this abidin far successfully then like piquan</li>
                                                    <li>Risus commodo viverra</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                </ul> */}
                                            {/* </div> */}
                                        </div>
                                    </div>
                                    {/* End Single Area */}
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
