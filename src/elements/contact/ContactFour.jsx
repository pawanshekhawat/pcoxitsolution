import React, { lazy } from "react";
import { useTranslation } from 'react-i18next';

const MainForm = lazy(() => import("./MainForm"));
const ImageWithPriority = lazy(() => import("../../component/common/ImageWithPriority"));

const ContactFour = () => {

    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === 'ar';
    return (
        <div className="contact-form--1">
            <div className="container aboutRspnContainer">
                <div className="row row--35 align-items-start">
                    <div className="col-lg-6 order-2 order-lg-1">
                        <div className="contactHeadTitleForm section-title mb--50 sm-mb-0" style={{ textAlign: isArabic ? 'right' : 'left' }}>
                            <h2 className="title section-title">{t('formcont1')}</h2>
                            <p className="description">{t('formdesc')}</p>
                        </div>
                        <div className="form-wrapper">
                            <MainForm />
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2">
                        <div className="thumbnail mb_md--30 mb_sm--30">
                            <ImageWithPriority loading="eager" src="/assets/images/about/about-6.webp" alt="trydo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactFour;
