import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Platform, StatusBar, Image } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { COLORS, FONT } from "@/constants";
import { useColorSchemeContext } from '@/context/ColorSchemeContext';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import ContentHeader from '@/components/Headers/ContentHeader';
import { LinearGradient } from "expo-linear-gradient";

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

// Create a stack navigator
const Stack = createStackNavigator();

const initialLayout = { width: Dimensions.get('window').width };

import Login from '@/app/profile/login'
import Verify from '@/app/profile/verify';
import { useAuth } from '@/context/AuthContext';

const Index = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                ...TransitionPresets.SlideFromRightIOS,
                headerShown: false
            }}>

            <Stack.Screen name="login_modal_screen" component={LoginSignUpScreen} options={{ headerShown: false }} />
            <Stack.Screen name="login_screen" component={Login} />
            <Stack.Screen name="verify_screen" component={Verify} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

const LoginSignUpScreen = ({ navigation }: any) => {
    const { colorScheme, theme } = useColorSchemeContext();
    const { isAuthenticated, isVerified } = useAuth();

    return (
        <React.Fragment>
            {/* <ContentHeader title="Profile" /> */}


            <View style={{ flex: 1, backgroundColor: COLORS.primary, justifyContent: 'space-between' }}>
                {/* <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <Image source={{ uri: 'https://cdni.iconscout.com/illustration/premium/thumb/create-account-6333606-5230166.png?f=webp' }} style={{ width: 250, height: 250, alignSelf: 'center' }} />
                </View> */}
                <LinearGradient
                    colors={[COLORS.bgPrimary, COLORS.bgSecondary]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={{ padding: 5, flex: 1 }}
                >
                    <View style={{ alignItems: 'center', marginTop: 50 }}>
                        <Image source={{ uri: 'https://cdni.iconscout.com/illustration/premium/thumb/create-account-6333606-5230166.png?f=webp' }} style={{ width: 250, height: 250, alignSelf: 'center' }} />
                    </View>
                    {/* <Image style={{ width: 60, height: 60, borderRadius: 50 }} source={{ uri: 'https://st3.depositphotos.com/1158045/15590/i/450/depositphotos_155909994-stock-photo-young-beautiful-woman-smiling.jpg' }} /> */}
                </LinearGradient>


                <View style={{ backgroundColor: theme.bgPrimary, flex: 0, padding: 30, paddingBottom: 40, marginTop: -30, borderTopStartRadius: 18, borderTopEndRadius: 18, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ alignItems: 'center', marginBottom: 40 }}>
                        <Text style={{ fontFamily: FONT.bold, fontSize: 27, color: theme.textPrimary }}>Welcome</Text>
                        <Text style={{ fontFamily: FONT.regular, fontSize: 16, color: theme.textSecondary }}>Please login or sign up to continue</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('login_screen', { action: 'login' })} activeOpacity={0.8} style={{
                        height: 50,
                        paddingVertical: 12,
                        borderRadius: 50,
                        alignItems: 'center',
                        marginBottom: 15,
                        justifyContent: 'center',
                        width: '100%',
                        borderWidth: 2,
                        // borderColor: theme.borderColor,
                        borderColor: colorScheme === 'light' ? '#dddddd' : theme.borderColor,
                        backgroundColor: colorScheme === 'light' ? '#fff' : theme.bgSecondary
                    }}>
                        <Text style={{ fontFamily: FONT.bold, fontSize: 16, color: theme.textPrimary }}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('login_screen', { action: 'signup' })} activeOpacity={0.8} style={{
                        backgroundColor: COLORS.primary,
                        height: 50,
                        paddingVertical: 12,
                        borderRadius: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                    }}>
                        <Text style={{ fontFamily: FONT.bold, fontSize: 16, color: '#fff' }}>Create Account</Text>
                    </TouchableOpacity>

                    <View style={{ width: '100%', marginTop: 30 }}>
                        <Text style={[styles.orSignUpWith, { color: theme.textSecondary, opacity: 0.8 }]}>or sign up with</Text>

                        <View style={styles.socialButtons}>
                            <TouchableOpacity activeOpacity={0.8} style={[styles.socialButton, styles.googleButton, { backgroundColor: theme.bgGraySecondary }]}>
                                <FontAwesome5 name="google" size={20} color="#db4437" />
                                <Text style={[styles.socialButtonText, { color: theme.textSecondary }]}>Google</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8} style={[styles.socialButton, styles.facebookButton, { backgroundColor: theme.bgGraySecondary }]}>
                                <FontAwesome6 name="facebook-f" size={20} color="#3b5998" />
                                <Text style={[styles.socialButtonText, { color: theme.textSecondary }]}>Facebook</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </React.Fragment>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    formContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        height: 50,
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 15,
        borderRadius: 50,
        color: COLORS.lightWhite
    },
    forgotPassword: {
        alignItems: 'flex-end',
        marginBottom: 24,
    },
    forgotPasswordText: {
        color: '#1e90ff',
    },
    loginButton: {
        backgroundColor: COLORS.primary,
        height: 50,
        textAlignVertical: 'center',
        paddingVertical: 12,
        borderRadius: 50,
        alignItems: 'center',
        marginBottom: 24,
        justifyContent: 'center',
        width: '100%',
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    orLoginWith: {
        textAlign: 'center',
        marginBottom: 16,
        fontSize: 16,
    },
    socialButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    socialButton: {
        flex: 1,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center'
    },
    googleButton: {
        marginRight: 8,
    },
    facebookButton: {
        marginLeft: 8,
    },
    socialButtonText: {
        fontSize: 16,
    },
    signUpButton: {
        backgroundColor: COLORS.primary,
        height: 50,
        textAlignVertical: 'center',
        paddingVertical: 12,
        borderRadius: 50,
        alignItems: 'center',
        marginBottom: 24,
        justifyContent: 'center',
        width: '100%',
    },
    signUpButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    orSignUpWith: {
        textAlign: 'center',
        marginBottom: 16,
        fontSize: 16,
    },
    login: {
        alignItems: 'center',
    },
    loginText: {
        color: '#1e90ff',
    },
});

export default Index;
