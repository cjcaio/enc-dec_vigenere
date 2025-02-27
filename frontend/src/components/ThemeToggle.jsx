import React from 'react';
import { useState, useEffect } from 'react';

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    return (
        <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'transparent',
                color: 'inherit'
            }}
        >
            {isDarkMode ? '☀️' : '🌙'}
        </button>
    );
};

export default ThemeToggle;