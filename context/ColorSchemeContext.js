// ColorSchemeContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS } from '@/constants';

const COLOR_SCHEME_KEY = 'colorScheme';

const ColorSchemeContext = createContext();

export const useColorSchemeContext = () => useContext(ColorSchemeContext);

export const ColorSchemeProvider = ({ children }) => {
    const [colorScheme, setColorScheme] = useState('light');
    useEffect(() => {
        // Load the colorScheme value from AsyncStorage
        AsyncStorage.getItem(COLOR_SCHEME_KEY).then(scheme => {
            if (scheme) {
                setColorScheme(scheme);
            }
        });
    }, []);

    const toggleColorScheme = () => {
        setColorScheme(prevScheme => {
            const newScheme = prevScheme === 'light' ? 'dark' : 'light';
            // Save the new colorScheme value to AsyncStorage
            AsyncStorage.setItem(COLOR_SCHEME_KEY, newScheme);
            return newScheme;
        });
    };

    const theme = {
        mainBg: colorScheme === 'light' ? '#f2f2f2' : COLORS.darkPrimary,
        bgPrimary: colorScheme === 'light' ? '#fff' : COLORS.darkPrimary,
        bgSecondary: colorScheme === 'light' ? '#fff' : COLORS.darkSecondary,
        bgGraySecondary: colorScheme === 'light' ? '#f2f2f2' : COLORS.darkSecondary,

        text: colorScheme === 'light' ? '#fff' : '#000',
        textPrimary: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText,
        textSecondary: colorScheme === 'light' ? COLORS.gray : COLORS.lightWhite,
        headingPrimary: colorScheme === 'light' ? COLORS.black : COLORS.lightText,
        headingSecondary: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText,
        borderColor: colorScheme === 'light' ? '#ace8d9bd' : '#ace8d93b',
        borderPrimary: colorScheme === 'light' ? '#ebebeb' : '#ace8d93b',
        // ace8d9
    }

    return (
        <ColorSchemeContext.Provider value={{ colorScheme, theme, toggleColorScheme }}>
            {children}
        </ColorSchemeContext.Provider>
    );
};