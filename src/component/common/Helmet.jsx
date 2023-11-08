import React from "react";
import { Helmet } from 'react-helmet';

const PageHelmet = ({ pageTitle }) => {
    return (
        <React.Fragment>
            <Helmet>
                <title>{pageTitle} | International Placement Services Overseas Recruitment Agency</title>
                <meta name="description" content="Trydo – Multipurpose React Template is a multi-use React template. It is designed to go well with multi-purpose websites. Trydo React Template will create that various landing Template, Creative Agency, And Corporate Website." />
                <meta name="google-site-verification" content="Xhpv86yXyJAc_waEUJVhms1e6R9QTjXXkeiq_o-p90Q" />
                <meta name="google-site-verification" content="IVhpsF3jFcgJBFHZ3y15C7h_O7YPz3pa-4-PnsusfPo" />
            </Helmet>
        </React.Fragment>
    );
};

export default PageHelmet;
