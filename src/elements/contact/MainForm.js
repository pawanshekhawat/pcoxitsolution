import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Select from 'react-select';
import ContactPopUp from './ContactPopUp';
import { useTranslation } from 'react-i18next';

const Result = () => <p className="success-message">Thank you! We will get back to you soon.</p>;

function MainForm() {
    const [result, showResult] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleInputChange = (e) => {
        if (e && e.target) {
            const { name, value } = e.target;
            setFormData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    const sendEmail = async (e) => {
        e.preventDefault();

        const postData = {
            fname: formData.fname,
            lname: formData.lname,
            email: formData.email,
            phone: formData.phone,
            message: formData.message
        };

        try {
            await emailjs.sendForm(
                'service_p4x3hv8',
                'template_jgfr42f',
                e.target,
                'user_jrfTH2e0Ely35ZCVFdT9S'
            );

            // Send POST request
            await fetch(`http://localhost:5000/api/contact/register-contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(postData),
            });

            showResult(true);
            setPopupOpen(true);  // Open the pop-up after successful submission
        } catch (error) {
            console.error('Error:', error);
        }

        e.target.reset();
    };

    const closePopup = () => {
        setPopupOpen(false);
        showResult(false); // Reset the result state when the pop-up is closed
    };

    const options = [
        { value: 'technical', label: 'Technical' },
        { value: 'marketing', label: 'Marketing' },
        { value: 'construction', label: 'Construction' },
        { value: 'programming', label: 'Programming' }
    ];

    const { t } = useTranslation();

    return (
        <>
            <form onSubmit={sendEmail}>
                <div className="rn-form-group">
                    <input
                        type="text"
                        name="fname"
                        value={formData.fname}
                        placeholder="Enter your first name"
                        required
                        onChange={handleInputChange}
                    />
                </div>
                <div className="rn-form-group">
                    <input
                        type="text"
                        name="lname"
                        value={formData.lname}
                        placeholder="Enter your last name"
                        required
                        onChange={handleInputChange}
                    />
                </div>

                <div className="rn-form-group">
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        placeholder="Enter your email address"
                        required
                        onChange={handleInputChange}
                    />
                </div>

                <div className="rn-form-group">
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        placeholder="Phone number with country code"
                        required
                        onChange={handleInputChange}
                    />
                </div>

                <div className="rn-form-group">
                    <textarea
                        name="message"
                        value={formData.message}
                        placeholder="Enter your message"
                        required
                        onChange={handleInputChange}
                    />
                </div>

                <div className="rn-form-group">
                    <button className="rn-button-style--2 btn-solid" type="submit">
                        Submit Now
                    </button>
                </div>
            </form>

            {/* Pop-up component with the result message */}
            <ContactPopUp isOpen={popupOpen} onClose={closePopup}>
                {result && <Result />}
            </ContactPopUp>
        </>
    );
}

export default MainForm;
