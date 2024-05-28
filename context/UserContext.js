import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const loadUserData = async () => {
            try {
                const data = await AsyncStorage.getItem('userData');
                if (data) {
                    setUserData(JSON.parse(data));
                }
            } catch (error) {
                console.error('Failed to load user data', error);
            }
        };

        loadUserData();
    }, []);

    const updateUserData = async (newUserData) => {
        setUserData(newUserData);

        try {
            await AsyncStorage.setItem('userData', JSON.stringify(newUserData));
        } catch (error) {
            console.error('Failed to update user data', error);
        }
    }

    return (
        <UserContext.Provider value={{ userData, updateUserData }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
