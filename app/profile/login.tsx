import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Platform, StatusBar, Image } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { COLORS, FONT } from "@/constants";
import { useColorSchemeContext } from '@/context/ColorSchemeContext';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import ContentHeader from '@/components/Headers/ContentHeader';

const initialLayout = { width: Dimensions.get('window').width };

const LoginForm = ({ theme }: any) => (
    <View style={styles.formContainer}>
        <Image source={{ uri: 'https://cdni.iconscout.com/illustration/premium/thumb/login-page-4468581-3783954.png?f=webp' }} style={{ width: 250, height: 250, alignSelf: 'center' }} />

        <TextInput
            style={[styles.input, { borderColor: theme.borderColor }]}
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor={theme.textSecondary}
        />
        <TextInput
            style={[styles.input, { borderColor: theme.borderColor }]}
            placeholder="Password"
            placeholderTextColor={theme.textSecondary}
            secureTextEntry
        />
        <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
    </View>
);

const SignUpForm = ({ theme }: any) => (
    <View style={styles.formContainer}>
        <Image source={{ uri: 'https://cdni.iconscout.com/illustration/premium/thumb/login-10299071-8333958.png?f=webp' }} style={{ width: 250, height: 250, alignSelf: 'center' }} />

        <TextInput
            style={[styles.input, { borderColor: theme.borderColor }]}
            placeholder="Name"
            placeholderTextColor={theme.textSecondary}
        />
        <TextInput
            style={[styles.input, { borderColor: theme.borderColor }]}
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor={theme.textSecondary}
        />
        <TextInput
            style={[styles.input, { borderColor: theme.borderColor }]}
            placeholder="Password"
            placeholderTextColor={theme.textSecondary}
            secureTextEntry
        />

        <TouchableOpacity style={styles.signUpButton}>
            <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
    </View>
);

const LoginSignUpScreen = ({ route }) => {
    const { action } = route.params;
    const { colorScheme, theme } = useColorSchemeContext();
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'login', title: 'Login' },
        { key: 'signup', title: 'Sign Up' },
    ]);

    const renderScene = SceneMap({
        login: () => <LoginForm theme={theme} />,
        signup: () => <SignUpForm theme={theme} />,
    });

    useEffect(() => {
        if (action === 'login') {
            setIndex(0);
        } else {
            setIndex(1);
        }
    }, []);


    return (
        <React.Fragment>
            {/* <ContentHeader title="Profile" /> */}

            <View style={[styles.container, { backgroundColor: theme.mainBg, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }]}>
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={initialLayout}
                    renderTabBar={props => (
                        <TabBar
                            {...props}
                            indicatorStyle={{ backgroundColor: COLORS.primary }}
                            style={{ backgroundColor: theme.backgroundColor }}
                            labelStyle={{ color: theme.textPrimary }}
                        />
                    )}
                />
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

export default LoginSignUpScreen;
