import React, { useContext, useState } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import { FiBox, FiGlobe, FiMonitor, FiChevronUp } from "react-icons/fi";
import ScrollToTop from 'react-scroll-up';
import HeaderThree from "../component/header/HeaderThree";
import Footer from "../component/footer/Footer";

import Toggle from "../component/Toggle/Toggle";
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../ThemeContext';




const Service = () => {

    const { t } = useTranslation();

    const ServiceList = [
        {
            icon: <FiBox />,
            title: `${t('hr_services')}`,
            description: `${t('hr_services_message')}`,
            path: '/import-export-logistics-services'
        },
        {
            icon: <FiMonitor />,
            title: `${t('hr_consulting')}`,
            description: `${t('hr_consulting_message')}`,
            path: '/software-development'
        },
        {
            icon: <FiGlobe/>,
            title: `${t('hr_third_party_payroll_services')}`,
            description: `${t('hr_third_party_payroll_services_message')}`,
            path: '/digital-marketing'
        },
    
        // {
        //     icon: <FiMonitor />,
        //     title: `${t('business_consulting')}`,
        //     description: `${t('business_consulting_message')}`,
        //     path: '/business-consulting'
    
        // },
        // {
        //     icon: <FiUsers />,
        //     title: `${t('employment_training_and_development')}`,
        //     description: `${t('employment_training_and_development_message')}`,
        //     path: '/employee-training'
        // },
        // {
        //     icon: <FiMonitor />,
        //     title: `${t('hr_compilance_and_legal_support')}`,
        //     description: `${t('hr_compilance_and_legal_support_message')}`,
        //     path: '/hr-compliance'
    
        // }
    ];

    const { isDark, toggleTheme } = useContext(ThemeContext); 

    return (
        <div className={isDark ? "active-dark" : "active-light"}>
            <PageHelmet pageTitle='Service' />
            <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />

            {/* Start Breadcrump Area */}
            <Breadcrumb title={'Service'} />
            {/* End Breadcrump Area */}

            {/* Start Service Area */}
            <div className="service-area ptb--120 bg_color--5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center mb--30">
                                <h2>{t('our_services')}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row service-one-wrapper">
                        {ServiceList.map((val, i) => (
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                <a href={val.path}>
                                    <div className="service service__style--2 shadow-lg">
                                        <div className="icon">
                                            {val.icon}
                                        </div>
                                        <div className="content" >
                                            <h3 className="title">{val.title}</h3>
                                            <p>{val.description}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* End Service Area */}






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
export default Service;