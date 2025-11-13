import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [darkModeEnabled, setDarkModeEnabled] = useState(false);

    const toggleDarkMode = () => {
        setDarkModeEnabled(prevState => !prevState);
    };

    const theme = {
        darkModeEnabled,
        toggleDarkMode,
        // You can add theme colors here to be used throughout the app
        colors: {
            light: {
                background: '#ffffff',
                text: '#000000',
                primary: '#3498db',
                border: '#eee',
            },
            dark: {
                background: '#333333',
                text: '#ffffff',
                primary: '#3498db',
                border: '#555',
            },
        },
    };

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
};
