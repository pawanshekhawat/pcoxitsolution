import React from 'react'
import { useTranslation } from "react-i18next";
import ImageWithPriority from '../../component/common/ImageWithPriority';

const LandTransport = () => {
    const { t } = useTranslation();

    return (
        <div className="container px-4">
            <div className="row g-4 align-items-center">
                <div className="col-lg-6 order-lg-2">
                    <div className="position-relative h-100">
                        <ImageWithPriority
                            loading="eager"
                            className="img-fluid rounded my-3"
                            src="/assets/images/service/hrservice01.webp"
                            alt="Service Images"
                        />
                    </div>
                </div>
                <div className="col-lg-6 order-lg-1">
                    <h2 className="h3 fw-bold mb-4 serviceHeading">
                        {t("landTransportationHeading")}
                    </h2>
                    <p className="text-muted mb-4">
                        {t("landTransportationDescription")}
                    </p>
                    <ul className="list-unstyled mb-4">
                        <li className="d-flex align-items-center mb-2">
                            <svg
                                className="mx-2 themeText"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            {t("landTransportationFeature1")}
                        </li>
                        <li className="d-flex align-items-center mb-2">
                            <svg
                                className="mx-2 themeText"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            {t("landTransportationFeature2")}
                        </li>
                        <li className="d-flex align-items-center mb-2">
                            <svg
                                className="mx-2 themeText"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            {t("landTransportationFeature3")}
                        </li>
                        <li className="d-flex align-items-center mb-2">
                            <svg
                                className="mx-2 themeText"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            {t("landTransportationFeature4")}
                        </li>
                    </ul>
                    <div className="row mb-4 g-4">
                        <div className="col-md-6">
                            <div className="serviceCardProcess bg-light p-4 rounded">
                                <h3 className="h5 fw-semibold mb-3 serviceCardProcessTitle">
                                    {t("landTransportationProcessTitle")}
                                </h3>
                                <ul className="list-unstyled">
                                    <li className="d-flex align-items-center mb-2 serviceCardProcessTitle">
                                        <span
                                            className="themeBgCircle text-white rounded-circle d-flex align-items-center justify-content-center mx-2"
                                            style={{ width: "24px", height: "24px" }}
                                        >
                                            1
                                        </span>
                                        {t("landTransportationProcess1")}
                                    </li>
                                    <li className="d-flex align-items-center mb-2 serviceCardProcessTitle">
                                        <span
                                            className="themeBgCircle text-white rounded-circle d-flex align-items-center justify-content-center mx-2"
                                            style={{ width: "24px", height: "24px" }}
                                        >
                                            2
                                        </span>
                                        {t("landTransportationProcess2")}
                                    </li>
                                    <li className="d-flex align-items-center mb-2 serviceCardProcessTitle">
                                        <span
                                            className="themeBgCircle text-white rounded-circle d-flex align-items-center justify-content-center mx-2"
                                            style={{ width: "24px", height: "24px" }}
                                        >
                                            3
                                        </span>
                                        {t("landTransportationProcess3")}
                                    </li>
                                    <li className="d-flex align-items-center mb-2 serviceCardProcessTitle">
                                        <span
                                            className="themeBgCircle text-white rounded-circle d-flex align-items-center justify-content-center mx-2"
                                            style={{ width: "24px", height: "24px" }}
                                        >
                                            4
                                        </span>
                                        {t("landTransportationProcess4")}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 mt-lg-0 my-md-0 mt-sm-3 mt-3">
                            <a href="/contact">
                                <div className="themeBg text-white p-4 rounded">
                                    <p className="h5 font-weight-lighter contactNum">
                                        {t("landTransportationContact")}
                                    </p>
                                    <div
                                        id="st"
                                        className="h3 fw-bold mb-0 text-white"
                                    >
                                        {t("landTransportationContactLink")}
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandTransport