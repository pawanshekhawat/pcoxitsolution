import React from 'react'
import './Toggle.css'

export default function Toggle({ handleChange, isChecked }) {
    return (
        <div>
            <input
                type="checkbox"
                className="sr-only"
       
                id="darkmode-toggle"
                onChange={handleChange}
                checked={isChecked}
            />
            <label htmlFor="darkmode-toggle" className="toggle">
                <span>Toggle dark mode</span>
            </label>



        </div>
    )
}
