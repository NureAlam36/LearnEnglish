import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text } from 'react-native'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    // const [userToken, setUserToken] = useState(null);

    useEffect(() => {
        const loadAuthState = async () => {
            try {
                const token = await AsyncStorage.getItem('userToken');
                if (token) {
                    setIsAuthenticated(true);
                }
            } catch (error) {
                console.error('Failed to load authentication state', error);
            } finally {
                setLoading(false);
            }
        };

        loadAuthState();
    }, []);

    const setUserToken = async (token) => {
        try {
            await AsyncStorage.setItem('userToken', token);
            setUserToken(token);
        } catch (error) {
            console.error('Failed to set user token and authentication state', error);
        }
    };

    const logout = async () => {
        try {
            await AsyncStorage.removeItem('userToken');
            setIsAuthenticated(false);
        } catch (error) {
            console.error('Error logging out', error);
        }
    };

    if (loading) {
        return <Text>Loading...</Text>;
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, setUserToken, setIsAuthenticated, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
