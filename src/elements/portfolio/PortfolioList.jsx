import React, { Component, useState, useContext } from "react";

import { useTranslation } from "react-i18next";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiMentalHealthLine } from "react-icons/ri";
import { GrUserWorker } from "react-icons/gr";
import { AiOutlineBank } from "react-icons/ai";
import { GoTag } from "react-icons/go";
import { LiaBookSolid } from "react-icons/lia";

function PortfolioList(props) {
    const { t } = useTranslation();
    const PortfolioListContent = [
        {
            image: 'image-1',
            category: `${t('building_construction')}`,
            title: `${t('building_construction_message')}`,
            icon: <AiOutlineShoppingCart className="iwsContentCardMainIcon" />
        },
        {
            image: 'image-2',
            category: `${t('road_construction')}`,
            title: `${t('road_construction_message')}`,
            icon: <RiMentalHealthLine className="iwsContentCardMainIcon" />
        },
        {
            image: 'image-3',
            category: `${t('oil_and_gas')}`,
            title: `${t('oil_and_gas_message')}`,
            icon: <GrUserWorker className="iwsContentCardMainIcon" />
        },
        {
            image: 'image-4',
            category: `${t('facility_management')}`,
            title: `${t('facility_management_message')}`,
            icon: <AiOutlineBank className="iwsContentCardMainIcon" />
        },
        {
            image: 'image-5',
            category: `${t('security')}`,
            title: `${t('security_message')}`,
            icon: <GoTag className="iwsContentCardMainIcon" />
        },
        {
            image: 'image-6',
            category: `${t('mep')}`,
            title: `${t('mep_message')}`,
            icon: <LiaBookSolid className="iwsContentCardMainIcon" />

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
                        <div className="content ">
                            <p className="iwsContentCardIcon">{value.icon}</p>
                            <div className="inner iwsContentCard">
                                <h3 className="iwsContentCardTitle">{value.category} <br />
                                    {/* <p className="iwsContentCardPara">{value.title}</p> */}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </React.Fragment>
    )
}
export default PortfolioList;