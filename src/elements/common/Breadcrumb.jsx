import React, { Component } from "react";
import { useTranslation } from 'react-i18next';

// Functional wrapper to use useTranslation
const BreadcrumbWrapper = (props) => {
  const { t } = useTranslation();  // This ensures that t is properly fetched
  return <Breadcrumb t={t} {...props} />;  // Pass t as a prop to the class component
}

class Breadcrumb extends Component {
    render() {
        const { title, parent, t } = this.props;  // Ensure t is destructured from props
        return (
            <React.Fragment>
                <div className="breadcrumb-area rn-bg-color ptb--120 bg_image" data-black-overlay="8">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb-inner pt--100">
                                    <h2 className="title section-title">{title}</h2>
                                    <ul className="page-list">
                                        <li className="breadcrumb-item">
                                            <a href={`${process.env.PUBLIC_URL}`}>{t("home")}</a>
                                        </li>
                                        {parent ? <li className="breadcrumb-item">{parent}</li> : ''}
                                        <b className="mx-3">/</b>
                                        <li className="breadcrumb-item active">{title}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BreadcrumbWrapper;
