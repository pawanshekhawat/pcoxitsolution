
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Select from 'react-select';

const Result = () => {
    return (
        <p className="success-message">Your Message has been successfully sent. I will contact you soon.</p>
    )
}

function ContactForm() {
    const [registrationStatus, setRegistrationStatus] = useState('');
    const [username, setUsername] = useState('');
 

    async function register(ev) {
        ev.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/register', {
                method: 'POST',
                body: JSON.stringify({ username, name }),
                headers: { 'Content-Type': 'application/json' },
            });
            if (response.status === 200) {
                setRegistrationStatus('success');
            } else {
                setRegistrationStatus('failed');
            }
        } catch (error) {
            console.error('Error registering:', error);
            setRegistrationStatus('error');
        }
    }

    return (
        <form action="" onSubmit={register}>
             <div className="rn-form-group">
             <input type="text"
             placeholder="username"
             value={username}
             onChange={ev => setUsername(ev.target.value)}/>
            </div>



            <div className="rn-form-group">
                <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Submit Now</button>
            </div>

            <div className="rn-form-group">
                {registrationStatus === 'success' ? <Result /> : null}
                {registrationStatus === 'failed' ? <p className="error-message">Registration failed. Please try again later.</p> : null}
            </div>
        </form>
    );
}

export default ContactForm;

