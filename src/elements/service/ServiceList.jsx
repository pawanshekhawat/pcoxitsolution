import React, { Component, useState, useContext } from "react";

import { useTranslation } from "react-i18next";
import { FiBox, FiLayers, FiGlobe, FiMonitor } from "react-icons/fi";




const ServiceThree = (props) => {
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
            description: `${t('software_dev_message')}`,
            path: '/software-development'
        },
        {
            icon: <FiGlobe/>,
            title: `${t('hr_third_party_payroll_services')}`,
            description: `${t('hr_third_party_payroll_services_message')}`,
            path: '/digital-marketing'
        },
    
    ];
    const { column, item } = props;
    const ServiceContent = ServiceList.slice(0, item);

    return (
        <React.Fragment>
            <div className="row">
                {ServiceContent.map((val, i) => (
                    <div className={`${column}`} key={i}>
                        <a href={val.path}>
                            <div className="service service__style--2 shadow-lg">
                                <div className="icon">{val.icon}</div>
                                <div className="content">
                                    <h3 className="title">{val.title}</h3>
                                    <p>{val.description}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </React.Fragment>
    );
};

export default ServiceThree;

