import React, { Component } from "react";
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";

const SocialShare = [
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/'},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/'},
]

class Footer extends Component{
    render(){
        return(
            <React.Fragment>
                <footer className="footer-area">
                    <div className="footer-wrapper">
                        <div className="row align-items-end row--0">
                            <div className="col-lg-6">
                                <div className="footer-left">
                                    <div className="inner">
                                        <span>Ready To Do This</span>
                                        <h2>Let's get <br /> to work</h2>
                                        <a className="rn-button-style--2" href="/contact">
                                            <span>Contact Us</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="footer-right" data-black-overlay="6">
                                    <div className="row">
                                        {/* Start Single Widget  */}
                                        <div className="col-lg-4 col-sm-4 col-12">
                                            <div className="footer-link">
                                                <h4>Find Jobs</h4>
                                                <ul className="ft-link">
                                                <li><a href="/contact">Jobs Abu Dhabi</a></li>
                                                    <li><a href="/contact">Jobs in Dubai</a></li>
                                                    <li><a href="/contact">Jobs in Algeria</a></li>
                                                    <li><a href="/contact">Jobs in Behrain</a></li>
                                                    
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-sm-4 col-12">
                                            <div className="footer-link">
                                                <h4></h4>
                                                <ul className="ft-link">
                                                    <li><a href="/contact">Jobs in Egypt</a></li>
                                                    <li><a href="/contact">Jobs in India</a></li>
                                                    <li><a href="/contact">Jobs in Iraq</a></li>
                                                    <li><a href="/contact">Jobs in Jordan</a></li>
                                                    
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-sm-6 col-12">
                                            <div className="footer-link">
                                                <h4></h4>
                                                <ul className="ft-link">
                                                    <li><a href="/portfolio">Jobs in Kuwait</a></li>
                                                    <li><a href="/about">Jobs in Lebanon</a></li>
                                                    <li><a href="/contact">Jobs in Libya</a></li>
                                                    <li><a href="/contact">Jobs in Morocco</a></li>
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                        {/* End Single Widget  */}
                                        {/* Start Single Widget  */}
                                        {/* <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                                            <div className="footer-link">
                                                <h4>Say Hello</h4>
                                                <ul className="ft-link">
                                                    <li><a href="mailto:admin@example.com">admin@example.com</a></li>
                                                    <li><a href="mailto:hr@example.com">hr@example.com</a></li>
                                                </ul>

                                                <div className="social-share-inner">
                                                    <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                                                        {SocialShare.map((val , i) => (
                                                            <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                                        ))}
                                                    </ul>
                                                </div> 
                                            </div>
                                        </div> */}
                                        {/* End Single Widget  */}

                                        <div className="col-lg-12">
                                            <div className="copyright-text">
                                            <p>Copyright © 2023-24 alcaenat. All Rights Reserved.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}
export default Footer;