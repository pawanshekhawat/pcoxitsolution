import React, { Component, useState } from "react";
import { useTranslation } from "react-i18next";

// class ContactThree extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             rnName: '',
//             rnEmail: '',
//             rnSubject: '',
//             rnMessage: '',
//         };
//     }
//     render(){
//         return(
//             <div className="contact-form--1">
//                 <div className="container">
//                     <div className="row row--35 align-items-start">
//                         <div className="col-lg-6 order-2 order-lg-1">
//                             <div className="section-title text-left mb--50">
//                                 <h2 className="title">{this.props.contactTitle}</h2>
//                                 <p className="description"> Please share your details and one of our recruitment specialists will contact you shortly.</p>
//                             </div>
//                             <div className="form-wrapper">
//                                 <form>
//                                     <label htmlFor="item01">
//                                         <input
//                                             type="text"
//                                             name="name"
//                                             id="item01"
//                                             value={this.state.rnName}
//                                             onChange={(e)=>{this.setState({rnName: e.target.value});}}
//                                             placeholder="Enter your name *"
//                                         />
//                                     </label>

//                                     <label htmlFor="item02">
//                                         <input
//                                             type="text"
//                                             name="email"
//                                             id="item02"
//                                             value={this.state.rnEmail}
//                                             onChange={(e)=>{this.setState({rnEmail: e.target.value});}}
//                                             placeholder="Enter your email address *"
//                                         />
//                                     </label>

//                                     <label htmlFor="item03">
//                                         <input
//                                             type="phone"
//                                             name="phone"
//                                             id="item03"
//                                             value={this.state.rnPhone}
//                                             onChange={(e)=>{this.setState({rnPhone: e.target.value});}}
//                                             placeholder="Phone number with country code *"
//                                         />
//                                     </label>



//                                     <label htmlFor="item04">
//                                         <input
//                                             type="text"
//                                             name="company"
//                                             id="item04"
//                                             value={this.state.rnCompany}
//                                             onChange={(e)=>{this.setState({rnCompany: e.target.value});}}
//                                             placeholder="Enter your company name"
//                                         />
//                                     </label>


//                                     <label htmlFor="item05">
//                                         <textarea
//                                             type="text"
//                                             id="item05"
//                                             name="jobtitle"
//                                             value={this.state.rnJobtitle}
//                                             onChange={(e)=>{this.setState({rnJobtitle: e.target.value});}}
//                                             placeholder="Enter your title"
//                                         />
//                                     </label>

//                                     <label htmlFor="item06">
//                                         <textarea
//                                             type="text"
//                                             id="item06"
//                                             name="message"
//                                             value={this.state.rnMessage}
//                                             onChange={(e)=>{this.setState({rnMessage: e.target.value});}}
//                                             placeholder="How can we help you?"
//                                         />
//                                     </label>
//                                     <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Submit</button>
//                                 </form>
//                             </div>
//                         </div>
//                         <div className="col-lg-6 order-1 order-lg-2">
//                             <div className="thumbnail mb_md--30 mb_sm--30">
//                                 <img src={`${this.props.contactImages}`} alt="trydo"/>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
// export default ContactThree;

const ContactThree = (props) => {
    const [state, setState] = useState({
        rnName: '',
        rnEmail: '',
        rnPhone: '',
        rnCompany: '',
        rnJobtitle: '',
        rnMessage: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const { t } = useTranslation();

    return (
        <div className="contact-form--1">
            <div className="container">
                <div className="row row--35 align-items-start">
                    <div className="col-lg-6 order-2 order-lg-1">
                        <div className="section-title text-left mb--50">
                            <h2 className="title">{props.contactTitle}</h2>
                            <p className="description">{t('user_indication_title_message')}</p>
                        </div>
                        <div className="form-wrapper">
                            <form>
                                <label htmlFor="item01">
                                    <input
                                        type="text"
                                        name="rnName"
                                        id="item01"
                                        value={state.rnName}
                                        onChange={handleChange}
                                        placeholder="Enter your name *"
                                    />
                                </label>

                                <label htmlFor="item02">
                                    <input
                                        type="text"
                                        name="rnEmail"
                                        id="item02"
                                        value={state.rnEmail}
                                        onChange={handleChange}
                                        placeholder="Enter your email address *"
                                    />
                                </label>

                                <label htmlFor="item03">
                                    <input
                                        type="phone"
                                        name="rnPhone"
                                        id="item03"
                                        value={state.rnPhone}
                                        onChange={handleChange}
                                        placeholder="Phone number with country code *"
                                    />
                                </label>

                                <label htmlFor="item04">
                                    <input
                                        type="text"
                                        name="rnCompany"
                                        id="item04"
                                        value={state.rnCompany}
                                        onChange={handleChange}
                                        placeholder="Enter your company name"
                                    />
                                </label>

                                <label htmlFor="item05">
                                    <textarea
                                        type="text"
                                        id="item05"
                                        name="rnJobtitle"
                                        value={state.rnJobtitle}
                                        onChange={handleChange}
                                        placeholder="Enter your title"
                                    />
                                </label>

                                <label htmlFor="item06">
                                    <textarea
                                        type="text"
                                        id="item06"
                                        name="rnMessage"
                                        value={state.rnMessage}
                                        onChange={handleChange}
                                        placeholder="How can we help you?"
                                    />
                                </label>
                                <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2">
                        <div className="thumbnail mb_md--30 mb_sm--30">
                            <img src={`${props.contactImages}`} alt="trydo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactThree;
