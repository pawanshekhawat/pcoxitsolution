import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';
// import ContactPopUp from './ContactPopUp'; // Import the popup component'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const Result = () => {
    return (
        <p className="success-message">Your Message has been successfully sent. I will contact you soon.</p>
    );
};

function MainForm({ props }) {
    const [value, setValue] = useState();
    const [error, setError] = useState(false);
    const [result, showResult] = useState(false);
    // const [showPopup, setShowPopup] = useState(false); // State to show/hide the popup
    const [FormData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleInputChange = (e) => {
        // Check if the event is from PhoneInput (it might not have 'e.target')
        if (typeof e === 'string') {
            // This is the phone input case, where 'e' is the phone number string
            setFormData({ ...FormData, phone: e });
        } else {
            // For regular inputs, handle like normal
            const { name, value } = e.target;
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const sendEmail = async (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_ugq0h5p',
                'template_gzsif4t',
                e.target,
                'zBxfkmAk1QRYw3STT'
            )
            .then(
                (result) => {
                    console.log(result.text);
                    showResult(true);
                    // setShowPopup(true); 

                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                },
                (error) => {
                    console.log(error.text);
                }
            );

        e.target.reset();
        setFormData = {
            fname: "",
            lname: "",
            email: "",
            phone: "",
            message: ""
        }
    };

    const { t } = useTranslation();

    return (
        <>
            <form method="POST" onSubmit={sendEmail}>
                <div className="rn-form-group">
                    <input
                        type="text"
                        name="fname"
                        value={FormData.fname}
                        placeholder="Enter your first name"
                        required
                        onChange={handleInputChange}
                    />
                </div>
                <div className="rn-form-group">
                    <input
                        type="text"
                        name="lname"
                        value={FormData.lname}
                        placeholder="Enter your last name"
                        required
                        onChange={handleInputChange}
                    />
                </div>

                <div className="rn-form-group">
                    <input
                        type="email"
                        name="email"
                        value={FormData.email}
                        placeholder="Enter your email address"
                        required
                        onChange={handleInputChange}
                    />
                </div>

                <div className="rn-form-group">
                    <PhoneInput className="phoneInput"
                        country={"in"}
                        type="text"
                        value={FormData.phone}
                        autoFormat={true}
                        // onlyCountries={["in", "us", "gb", "ae"]}
                        
                        inputClass="w"
                        placeholder="Phone number with country code"
                        required
                        name="phone"
                        onChange={handleInputChange}
                    />
                </div>

                <div className="rn-form-group">
                    <textarea
                        name="message"
                        className='textAreaPadd'
                        value={FormData.message}
                        placeholder="Enter your message"
                        required
                        onChange={handleInputChange}
                    />
                </div>
                <div className="rn-form-group">
                    <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">
                        Submit Now
                    </button>
                </div>
                <div className="rn-form-group">
                    {result ? <Result /> : null}
                </div>
            </form>

            {/* Show popup when form is submitted successfully */}
            {/* <ContactPopUp isOpen={showPopup} onClose={() => setShowPopup(false)}>
                <p>Thanks for reaching out! <br/>
                Your response has been successfully recorded</p>
            </ContactPopUp> */}
        </>
    );
}

export default MainForm;
