// React Required
import React, { Component, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

// Create Import File
import './index.scss';

import PageScrollTop from './component/PageScrollTop';

// Dark Home Layout 
import DarkPortfolioLanding from './dark/PortfolioLanding';


// Element Layout
import Service from "./elements/Service";
import ServiceDetails from "./elements/ServiceDetails";
import HrConsulting from "./elements/HrConsulting";
import HrThirdParty from "./elements/HrThirdParty";
import SoftDev from "./elements/service/SoftDev";
import WebApp from "./elements/service/WebApp";
import MobApp from "./elements/service/MobApp";
import SoftInt from "./elements/service/SoftInt";
import CloudBased from "./elements/service/CloudBased";
import SoftMaintain from "./elements/service/SoftMaintain";
import SeoService from "./elements/service/SeoService"
import SocialService from "./elements/service/SocialService"
import PPCService from "./elements/service/PPCService"
import ContentService from "./elements/service/ContentService"

import About from "./elements/About";
import Blog from "./elements/Blog";
import BlogDetails3 from "./elements/BlogDetails3";
import BlogDetails4 from "./elements/BlogDetails4";
import BlogDetails5 from "./elements/BlogDetails5";
import error404 from "./elements/error404";


// Blocks Layout
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Cursor from './component/Cursor/Cursor'

import MainContact from './elements/MainContact';

// functions or methods to change the languages 
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

import { ThemeProvider } from './ThemeContext';

i18next
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        supportedLngs: ['en', 'ar', 'ge', 'es', 'zh', 'ja', 'es', 'vi', 'th', 'fil', 'id'],
        fallbackLng: 'en',
        debug: false,
        // Options for language detector
        detection: {
            order: ['path', 'cookie', 'htmlTag'],
            caches: ['cookie'],
        },
        react: { useSuspense: false },
        backend: {
            loadPath: '/assets/locales/{{lng}}/translation.json',
        },
    })

// const loadingMarkup = (
//     <div className="py-4 text-center">
//         <h3>Loading..</h3>
//     </div>
// )




class Root extends Component {
    render() {
        return (

            <ThemeProvider>
                <BrowserRouter basename={'/'}>
                    <PageScrollTop>
                        <Cursor className="cursor" />
                        <Switch>
                            {/* usable routes */}
                            <Route exact path={`${process.env.PUBLIC_URL}/`} component={DarkPortfolioLanding} />

                            <Route exact path={`${process.env.PUBLIC_URL}/about`} component={About} />

                            <Route exact path={`${process.env.PUBLIC_URL}/blog`} component={Blog} />
                            <Route exact path={`${process.env.PUBLIC_URL}/navigating-global-trade`} component={BlogDetails3} />
                            <Route exact path={`${process.env.PUBLIC_URL}/why-your-business-needs-custom-software`} component={BlogDetails4} />
                            <Route exact path={`${process.env.PUBLIC_URL}/boost-your-brand`} component={BlogDetails5} />

                            <Route exact path={`${process.env.PUBLIC_URL}/service`} component={Service} />

                            <Route exact path={`${process.env.PUBLIC_URL}/import-export-logistics-services`} component={ServiceDetails} />

                            <Route exact path={`${process.env.PUBLIC_URL}/software-development`} component={HrConsulting} />
                            <Route exact path={`${process.env.PUBLIC_URL}/service/software-development`} component={SoftDev} />
                            <Route exact path={`${process.env.PUBLIC_URL}/service/web-app`} component={WebApp} />
                            <Route exact path={`${process.env.PUBLIC_URL}/service/mobile-app`} component={MobApp} />
                            <Route exact path={`${process.env.PUBLIC_URL}/service/software-integration`} component={SoftInt} />
                            <Route exact path={`${process.env.PUBLIC_URL}/service/cloud-based-solutions`} component={CloudBased} />
                            <Route exact path={`${process.env.PUBLIC_URL}/service/software-maintenance`} component={SoftMaintain} />

                            <Route exact path={`${process.env.PUBLIC_URL}/digital-marketing`} component={HrThirdParty} />
                            <Route exact path={`${process.env.PUBLIC_URL}/service/search-engine-optimization`} component={SeoService} />
                            <Route exact path={`${process.env.PUBLIC_URL}/service/content-marketing`} component={ContentService} />
                            <Route exact path={`${process.env.PUBLIC_URL}/service/social-media-marketing`} component={SocialService} />
                            <Route exact path={`${process.env.PUBLIC_URL}/service/pay-per-click`} component={PPCService} />

                            <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={MainContact} />
                            <Route path={`${process.env.PUBLIC_URL}/404`} component={error404} />

                            <Route component={error404} />

                        </Switch>

                    </PageScrollTop>
                </BrowserRouter>
            </ThemeProvider>

        )
    }
}

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <Suspense>
        <Root />
    </Suspense>

);

serviceWorker.register();