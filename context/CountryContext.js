// CountryContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const COUNTRY_KEY = 'country';

const CountryContext = createContext();

export const useCountryContext = () => useContext(CountryContext);

export const CountryProvider = ({ children }) => {
    const [country, setCountry] = useState('');

    useEffect(() => {
        AsyncStorage.getItem(COUNTRY_KEY).then(storedCountry => {
            if (storedCountry) {
                setCountry(storedCountry);
            }
        });
    }, []);

    const updateCountry = (newCountry) => {
        setCountry(newCountry);
        AsyncStorage.setItem(COUNTRY_KEY, newCountry);
    }

    return (
        <CountryContext.Provider value={{ country, updateCountry }}>
            {children}
        </CountryContext.Provider>
    );
};