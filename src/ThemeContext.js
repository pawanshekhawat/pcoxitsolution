// ThemeContext.js
import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const ThemeContext = createContext();

// Create the provider component
export const ThemeProvider = ({ children }) => {
    // Check system preference for dark mode
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    // Initialize state based on system preference or local storage
    const [isDark, setIsDark] = useState(() => {
        // Retrieve saved preference from local storage
        const savedPreference = localStorage.getItem('theme');
        if (savedPreference) {
            return savedPreference === 'dark';
        }
        // Fallback to system preference
        return prefersDarkScheme;
    });

    // Toggle theme function
    const toggleTheme = () => {
        setIsDark((prevTheme) => {
            const newTheme = !prevTheme;
            // Save the preference to local storage
            localStorage.setItem('theme', newTheme ? 'dark' : 'light');
            return newTheme;
        });
    };

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
