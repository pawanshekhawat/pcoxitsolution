import React, { Component } from "react";
import MainForm from "./MainForm";

class ContactFour extends Component {
    render(){
        return(
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <h2 className="title"  >Contact Us.</h2>
                                <p className="description"  >Looking for your dream job? Fill out the form below with your details, and our expert team will assist you in finding the perfect job opportunity tailored to your skills and aspirations</p>
                            </div>
                            <div className="form-wrapper">
                                <MainForm/>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="thumbnail mb_md--30 mb_sm--30">
                                <img src="/assets/images/about/about-6.jpg" alt="trydo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactFour;