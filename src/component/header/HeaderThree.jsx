import React from "react";
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiX, FiMenu } from "react-icons/fi";
import Scrollspy from 'react-scrollspy';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import MultiLang from "../MultiLang/MultiLang";
import { useTranslation } from "react-i18next";


const SocialShare = [
    { Social: <FaFacebookF />, link: 'https://www.facebook.com/' },
    { Social: <FaLinkedinIn />, link: 'https://www.linkedin.com/' },
    { Social: <FaInstagram />, link: 'https://www.instagram.com/alcaenat?igshid=MzRlODBiNWFlZA%3D%3D' },
    { Social: <FaTwitter />, link: 'https://twitter.com/' },
]

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
                return '/assets/images/logo/logo-light.png';
            case 'dark':
                return '/assets/images/logo/logo-dark.png';
            case 'symbol-dark':
                return '/assets/images/logo/white-trans.webp';
            case 'symbol-light':
                return '/assets/images/logo/logo-symbol-light.png';
            default:
                return '/assets/images/logo/logo.png';
        }
    };
    const { t } = useTranslation();

    return (
        <header className={`header-area header-style-two header--fixed ${color}`}>
            <div className="header-wrapper">
                <div className="header-left d-flex align-items-center">
                    <div className="logo">
                        <a href={homeLink}>
                            <img src={getMenuUrl()} alt="Digital Agency" />
                        </a>
                    </div>
                    <nav className="mainmenunav d-lg-block ml--50">
                        <Scrollspy className="mainmenu" items={['home', 'about', 'service', 'blog', 'contact']} currentClassName="is-current" offset={-200}>
                            <li><Link to="/">{t('home')}</Link></li>
                            <li><Link to="/about">{t('about')}</Link></li>
                            <li><Link to="/service">{t('services')}</Link></li>
                            <li><Link to="/blog">{t('blog')}</Link></li>
                            <li><Link to="/contact">{t('contact')}</Link></li>
                        </Scrollspy>
                    </nav>
                </div>
                <div className="header-right">
                    <div className="social-share-inner ">
                        <ul className="social-share social-style--2 color-white d-flex justify-content-start liststyle ">
                            <MultiLang />
                            {/* Assuming SocialShare is an array of objects with 'link' and 'Social' properties */}
                            {SocialShare.map((val, i) => (
                                <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className="header-btn">
                        <Link className="rn-btn" to="/jobseekers">
                            <span>{t('for_job_seekers')}</span>
                        </Link>
                    </div>
                    <div className="header-btn">
                        <Link className="rn-btn" to="/clientcontact">
                            <span>{t('for_client')}</span>
                        </Link>
                    </div>
                    <div className="humberger-menu d-block d-lg-none pl--20">
                        <span onClick={menuTrigger} className="menutrigger text-white"><FiMenu /></span>
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

