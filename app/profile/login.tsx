import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Platform, StatusBar, Image } from 'react-native';
import axios from 'axios';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { COLORS, FONT } from "@/constants";
import { useColorSchemeContext } from '@/context/ColorSchemeContext';
import { useAuth } from '@/context/AuthContext';
import { useUser } from '@/context/UserContext';
import ContentHeader from '@/components/Headers/ContentHeader';
import { ToastProvider, useToast } from 'react-native-toast-notifications';
import { useNavigation } from '@react-navigation/native';

const initialLayout = { width: Dimensions.get('window').width };

const LoginForm = ({ theme }: any) => {
    const navigation = useNavigation() as any;
    const toast = useToast();
    const { isAuthenticated, setIsAuthenticated, setUserToken } = useAuth();
    const { updateUserData } = useUser();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        // setIsAuthenticated(true);

        try {
            const response = await axios.post('http://192.168.0.117/web/english_go_pro/login.php', {
                type: 'core',
                email: email,
                password: password,
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            });

            // console.log(response.data);

            if (response.data.status === 'success') {
                setIsAuthenticated(true);
                setUserToken(response.data.token);
                updateUserData(response.data.user_data);

                navigation.navigate('profile_screen');
            } else {
                toast.show(response.data.message, {
                    type: 'danger',
                    placement: 'bottom',
                });
            }
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    }

    return <View style={styles.formContainer}>
        <Image source={{ uri: 'https://cdni.iconscout.com/illustration/premium/thumb/login-page-4468581-3783954.png?f=webp' }} style={{ width: 250, height: 250, alignSelf: 'center' }} />

        <TextInput
            style={[styles.input, { borderColor: theme.borderPrimary, color: theme.textSecondary }]}
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor={theme.textSecondary}
            onChangeText={(text) => setEmail(text)}
        />
        <TextInput
            style={[styles.input, { borderColor: theme.borderPrimary, color: theme.textSecondary }]}
            placeholder="Password"
            placeholderTextColor={theme.textSecondary}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
        />
        <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} activeOpacity={0.8} onPress={() => handleLogin()}>
            <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
    </View>
};

const SignUpForm = ({ theme }: any) => {
    const navigation = useNavigation() as any;
    const toast = useToast();
    const { setIsAuthenticated, setUserToken } = useAuth();
    const { updateUserData } = useUser();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRequestOTP = async () => {
        try {
            const response = await axios.post('http://192.168.0.117/web/english_go_pro/register.php', {
                action: 'request_otp', email
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            });

            // console.log(response.data);

            if (response.data.status === 'success') {
                navigation.navigate('verify_screen', { name, email, password, otp: response.data.otp });
            } else {
                toast.show(response.data.message, {
                    type: 'danger',
                    placement: 'bottom',
                });
            }
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    }

    return <View style={styles.formContainer}>
        <Image source={{ uri: 'https://cdni.iconscout.com/illustration/premium/thumb/login-10299071-8333958.png?f=webp' }} style={{ width: 250, height: 250, alignSelf: 'center' }} />

        <TextInput
            style={[styles.input, { borderColor: theme.borderPrimary, color: theme.textSecondary }]}
            placeholder="Name"
            placeholderTextColor={theme.textSecondary}
            onChangeText={(text) => setName(text)}
        />
        <TextInput
            style={[styles.input, { borderColor: theme.borderPrimary, color: theme.textSecondary }]}
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor={theme.textSecondary}
            onChangeText={(text) => setEmail(text)}
        />
        <TextInput
            style={[styles.input, { borderColor: theme.borderPrimary, color: theme.textSecondary }]}
            placeholder="Password"
            placeholderTextColor={theme.textSecondary}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
        />

        <TouchableOpacity style={styles.signUpButton} activeOpacity={0.8} onPress={() => handleRequestOTP()}>
            <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
    </View>
}

const LoginSignUpScreen = ({ route }: any) => {
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
            <ContentHeader title="Login/Sign Up" />

            <View style={[styles.container, { backgroundColor: theme.bgPrimary }]}>
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
        fontFamily: FONT.medium
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
    }
});

export default LoginSignUpScreen;
