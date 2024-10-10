import React from "react";
import { FiX, FiMenu } from "react-icons/fi";
import Scrollspy from 'react-scrollspy';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import MultiLang from "../MultiLang/MultiLang";
import { useTranslation } from "react-i18next";

const HeaderThree = (props) => {
    const { logo, color = 'default-color', homeLink } = props;

    useEffect(() => {
        window.addEventListener('load', () => {
            console.log('All assets are loaded');
        });

        const handleScroll = () => {
            const value = window.scrollY;
            const headerFixed = document.querySelector('.header--fixed');
            if (value > 100) {
                headerFixed.classList.add('sticky');
            } else {
                headerFixed.classList.remove('sticky');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const elements = document.querySelectorAll('.has-droupdown > a');

        const handleClick = function () {
            this.parentElement.querySelector('.submenu').classList.toggle('active');
            this.classList.toggle('open');
        };

        elements.forEach((el) => {
            el.addEventListener('click', handleClick);
        });

        return () => {
            elements.forEach((el) => {
                el.removeEventListener('click', handleClick);
            });
        };
    }, []);

    function menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }

    function CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open')
    }

    const getMenuUrl = () => {
        switch (logo) {
            case 'light':
                return '/assets/images/logo/white-trans.webp';
            case 'dark':
                return '/assets/images/logo/white-trans.webp';
            case 'symbol-dark':
                return '/assets/images/logo/white-trans.webp';
            case 'symbol-light':
                return '/assets/images/logo/white-trans.webp';
            default:
                return '/assets/images/logo/white-trans.webp';
        }
    };
    const { t } = useTranslation();

    return (
        <header className={`header-area header-style-two header--fixed ${color} px--120`}>
            <div className="header-wrapper">
                <div className="header-left d-flex align-items-center">
                    <div className="logo">
                        <a href={homeLink}>
                            <img src={getMenuUrl()} width={180} alt="Digital Agency" className="homeLogo" />
                        </a>
                    </div>
                    <nav className="mainmenunav d-lg-block ml--50">
                        <Scrollspy className="mainmenu" items={['home', 'about', 'service', 'blog', 'contact']} currentClassName="is-current" offset={-200}>
                            <li><a href="/">{t('home')}</a></li>
                            <li><a href="/about">{t('about')}</a></li>
                            <li><a href="/service">{t('services')}</a></li>
                            <li><a href="/blog">{t('blog')}</a></li>
                            <li><a href="/contact">{t('contact')}</a></li>
                        </Scrollspy>
                    </nav>
                </div>
                <div className="header-right">
                    <div className="social-share-inner">
                        <ul className="social-share social-style--2 color-white d-flex justify-content-start liststyle align-items-center">
                            <MultiLang />
                            {/* {SocialShare.map((val, i) => (
                                <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                            ))} */}
                        </ul>
                    </div>
                  
                    <div className="humberger-menu d-block d-lg-none pl--20">
                        <span onClick={menuTrigger} className="menutrigger text-white"><FiMenu className="hamBurger" /></span>
                    </div>
                    <div className="close-menu d-block d-lg-none">
                        <span onClick={CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderThree;

