import React, { Component } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";



function PortfolioList(props) {
    const { t } = useTranslation();
    const PortfolioListContent = [
        {
            image: 'image-1',
            category: `${t('building_construction')}`,
            title: `${t('building_construction_message')}`
        },
        {
            image: 'image-2',
            category: `${t('road_construction')}`,
            title: `${t('road_construction_message')}`
        },
        {
            image: 'image-3',
            category: `${t('oil_and_gas')}`,
            title: `${t('oil_and_gas_message')}`
        },
        {
            image: 'image-4',
            category: `${t('facility_management')}`,
            title: `${t('facility_management_message')}`
        },
        {
            image: 'image-5',
            category: `${t('security')}`,
            title: `${t('security_message')}`
        },
        {
            image: 'image-6',
            category: `${t('mep')}`,
            title: `${t('mep_message')}`
        }
    ]
    const { column, styevariation } = props;
    const list = PortfolioListContent.slice(0, props.item);

    return (
        <React.Fragment>
            {list.map((value, index) => (
                <div className={`${column}`} key={index}>
                    <div className={`portfolio ${styevariation}`}>
                        <div className="thumbnail-inner">
                            <div className={`thumbnail ${value.image}`}></div>
                            <div className={`bg-blr-image ${value.image}`}></div>
                        </div>
                        <div className="content">
                            <div className="inner">
                                <p>{value.category}</p>
                                <h4><a href="#">{value.title}</a></h4>
                                {/* <div className="portfolio-button">
                                        <a className="rn-btn" href="/portfolio-details">View Details</a>
                                    </div> */}
                            </div>
                        </div>
                        {/* <Link className="link-overlay" to="/portfolio-details"></Link> */}
                    </div>
                </div>
            ))}

        </React.Fragment>
    )
}
export default PortfolioList;