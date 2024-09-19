import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';
import ContactPopUp from './ContactPopUp'; // Import the popup component

const Result = () => {
    return (
        <p className="success-message">Your Message has been successfully sent. I will contact you soon.</p>
    );
};

function MainForm({ props }) {
    const [result, showResult] = useState(false);
    const [showPopup, setShowPopup] = useState(false); // State to show/hide the popup
    const [FormData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
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
                    setShowPopup(true); // Show popup after submission

                    // Hide the popup after 10 seconds
                    setTimeout(() => {
                        setShowPopup(false);
                    }, 10000);
                },
                (error) => {
                    console.log(error.text);
                }
            );

        e.target.reset(); // Reset form after submission
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
                    <input
                        type="text"
                        name="phone"
                        value={FormData.phone}
                        placeholder="Phone number with country code"
                        required
                        onChange={handleInputChange}
                    />
                </div>

                <div className="rn-form-group">
                    <textarea
                        name="message"
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
            <ContactPopUp isOpen={showPopup} onClose={() => setShowPopup(false)}>
                <p>Your form has been successfully submitted!</p>
            </ContactPopUp>
        </>
    );
}

export default MainForm;
