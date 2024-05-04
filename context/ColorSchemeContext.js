// ColorSchemeContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const COLOR_SCHEME_KEY = 'colorScheme';

const ColorSchemeContext = createContext();

export const useColorSchemeContext = () => useContext(ColorSchemeContext);

export const ColorSchemeProvider = ({ children }) => {
    const [colorScheme, setColorScheme] = useState('light'); // Set default value



    const toggleColorScheme = () => {
        setColorScheme(prevScheme => {
            const newScheme = prevScheme === 'light' ? 'dark' : 'light';
            // Save the new colorScheme value to AsyncStorage
            AsyncStorage.setItem(COLOR_SCHEME_KEY, newScheme);
            return newScheme;
        });
    };

    return (
        <ColorSchemeContext.Provider value={{ colorScheme, toggleColorScheme }}>
            {children}
        </ColorSchemeContext.Provider>
    );
};