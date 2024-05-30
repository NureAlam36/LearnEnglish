import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Modal, Animated, Image, Button } from 'react-native';
import axios from 'axios';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { COLORS, FONT } from "@/constants";
import { useColorSchemeContext } from '@/context/ColorSchemeContext';
import { useAuth } from '@/context/AuthContext';
import { useUser } from '@/context/UserContext';
import ContentHeader from '@/components/Headers/ContentHeader';
import { ToastProvider, useToast } from 'react-native-toast-notifications';
import { useNavigation } from '@react-navigation/native';
import Toast from './toast'

const initialLayout = { width: Dimensions.get('window').width };

const ForgotPasswordModal = ({ isVisible, onClose }: any) => {
    const slideAnim = useRef(new Animated.Value(300)).current; // Initial position
    const { colorScheme, theme } = useColorSchemeContext();
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [inputOTP, setInputOTP] = useState(['', '', '', '']);
    const [isOtpVerified, setIsOtpVerified] = useState(false);

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [toastVisible, setToastVisible] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const showToast = (message: string) => {
        setToastMessage(message);
        setToastVisible(true);
        setTimeout(() => setToastVisible(false), 3000); // Hide toast after 3 seconds
    };

    useEffect(() => {
        if (isVisible) {
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(slideAnim, {
                toValue: 300,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    }, [isVisible]);

    const handleContinue = async () => {
        try {
            const response = await axios.post('http://192.168.0.117/web/english_go_pro/forget_password.php', {
                action: 'otp_request', email
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            });

            // console.log(response.data);

            if (response.data.status === 'success') {
                setOtp(response.data.otp);
                setStep(2);
            } else {
                showToast(response.data.message);
            }
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    }

    const handleInputOTP = (index: number, value: string) => {
        const updatedCode = [...inputOTP];
        updatedCode[index] = /^\d$/.test(value) ? value : '';
        setInputOTP(updatedCode);
    };

    const handleVerifyOTP = async () => {
        const otp_code = inputOTP.join('');

        if (otp !== otp_code) {
            showToast('Invalid OTP');
            return;
        }

        try {
            const response = await axios.post('http://192.168.0.117/web/english_go_pro/forget_password.php', {
                action: 'verify_otp', email, otp: otp_code
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            });

            // console.log(response.data);

            if (response.data.status === 'success') {
                setIsOtpVerified(true);
                setStep(3);
            } else {
                showToast(response.data.message);
            }
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    }

    const handleResetPassword = async () => {
        if (!password) {
            showToast('Please enter password');
            return;
        }

        if (!confirmPassword) {
            showToast('Please enter confirm password');
            return;
        }

        if (password !== confirmPassword) {
            showToast('Password does not match');
            return;
        }

        try {
            const response = await axios.post('http://192.168.0.117/web/english_go_pro/forget_password.php', {
                action: 'reset_password', email, password, confirm_password: confirmPassword
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            });

            // console.log(response.data);

            if (response.data.status === 'success') {
                setStep(4);
            } else {
                showToast(response.data.message);
            }
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    }

    return (
        <Modal
            transparent={true}
            visible={isVisible}
            animationType="none"
        >
            <View style={styles.modalOverlay}>
                <TouchableOpacity style={styles.modalOverlay} onPress={onClose} />
                <Animated.View style={[styles.modalContainer, { height: step === 1 ? 350 : step === 2 ? 350 : step === 3 ? 450 : 350, backgroundColor: theme.bgSecondary, transform: [{ translateY: slideAnim }] }]}>
                    {
                        step === 1 && <View style={{ flex: 1 }}>
                            <View style={{ flex: 1 }}>
                                <View style={styles.handleBar} />
                                <Text style={[styles.headingText, { color: theme.headingPrimary }]}>Forgot password</Text>
                                <Text style={[styles.description, { color: theme.textSecondary }]}>Enter your email for the verification process, we will send 4 digits code to your email.</Text>
                                <Text style={[styles.label, { marginBottom: 8, color: theme.textSecondary }]}>Email</Text>
                                <View style={styles.inputContainer}>
                                    <TextInput
                                        style={[styles.input, { borderColor: theme.borderPrimary, color: theme.textSecondary }]}
                                        placeholder="Enter your email"
                                        keyboardType="email-address"
                                        placeholderTextColor={theme.textSecondary}
                                        onChangeText={(text) => setEmail(text)}
                                    />
                                    <TouchableOpacity style={styles.iconContainer}>
                                        {/* Add your eye icon here */}
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.button} onPress={() => handleContinue()}>
                                <Text style={styles.buttonText}>Continue</Text>
                            </TouchableOpacity>
                        </View>
                    }
                    {
                        step === 2 && <View style={{ flex: 1 }}>
                            <View style={{ flex: 1 }}>
                                <View style={styles.handleBar} />
                                <Text style={[styles.headingText, { color: theme.headingPrimary }]}>Enter 4 Digits Code</Text>
                                <Text style={[styles.description, { color: theme.textSecondary }]}>Enter the 4 digits code that you received on your email.</Text>
                                <View style={[styles.codeContainer, { marginTop: 20, maxWidth: 250, alignSelf: 'center', gap: 10 }]}>
                                    {Array.from({ length: 4 }).map((_, index) => (
                                        <TextInput
                                            key={index}
                                            style={[styles.codeInput, { borderWidth: 1, borderColor: theme.borderPrimary }]}
                                            keyboardType="number-pad"
                                            maxLength={1}
                                            value={inputOTP[index]}
                                            onChangeText={(value) => handleInputOTP(index, value)}
                                        />
                                    ))}
                                </View>
                            </View>
                            <View style={{}}>
                                <TouchableOpacity style={styles.button} onPress={() => handleVerifyOTP()}>
                                    <Text style={styles.buttonText}>Verify OTP</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    }
                    {
                        step === 3 && <View style={{ flex: 1 }}>
                            <View style={{ flex: 1 }}>
                                <View style={styles.handleBar} />
                                <Text style={[styles.headingText, { color: theme.headingPrimary }]}>Forgot password</Text>
                                <Text style={[styles.description, { color: theme.textSecondary }]}>Enter your email for the verification process, we will send 4 digits code to your email.</Text>

                                <Text style={[styles.label, { marginBottom: 5, color: theme.textSecondary }]}>Password</Text>
                                <View style={styles.inputContainer}>
                                    <TextInput
                                        style={[styles.input, { borderColor: theme.borderPrimary, color: theme.textSecondary, marginBottom: 0 }]}
                                        placeholder=''
                                        placeholderTextColor={theme.textSecondary}
                                        secureTextEntry
                                        onChangeText={(text) => setPassword(text)}
                                    />
                                    <TouchableOpacity style={styles.iconContainer}>
                                        {/* Add your eye icon here */}
                                    </TouchableOpacity>
                                </View>

                                <Text style={[styles.label, { marginBottom: 5, color: theme.textSecondary, marginTop: 0 }]}>Confirm password</Text>
                                <View style={styles.inputContainer}>
                                    <TextInput
                                        style={[styles.input, { borderColor: theme.borderPrimary, color: theme.textSecondary }]}
                                        placeholder=''
                                        placeholderTextColor={theme.textSecondary}
                                        secureTextEntry
                                        onChangeText={(text) => setConfirmPassword(text)}
                                    />
                                    <TouchableOpacity style={styles.iconContainer}>
                                        {/* Add your eye icon here */}
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{}}>
                                <TouchableOpacity style={styles.button} onPress={() => handleResetPassword()}>
                                    <Text style={styles.buttonText}>Reset Password</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    }
                    {
                        step === 4 && <View style={{ flex: 1 }}>
                            <View style={{ flex: 1 }}>
                                <View style={styles.handleBar} />
                                <View style={{ marginBottom: 30, marginTop: 30 }}>
                                    <Image source={{ uri: 'https://miro.medium.com/v2/resize:fit:512/0*9ywnvEYNioUm3XSm.png' }} style={{ width: 80, height: 80, alignSelf: 'center' }} />
                                </View>
                                <Text style={[styles.headingText, { color: theme.headingPrimary, textAlign: 'center' }]}>Password Updated!</Text>
                                <Text style={[styles.description, { color: theme.textSecondary, textAlign: 'center' }]}>Your password has been reset successfully. Use your new password to log in.</Text>
                            </View>
                            <View style={{}}>
                                <TouchableOpacity style={styles.button} onPress={onClose}>
                                    <Text style={styles.buttonText}>Login</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    }
                </Animated.View>
                {/* <Button title="Show Toast" onPress={() => handleResponse({ data: { message: 'This is a toast message' } })} /> */}
                <Toast message={toastMessage} visible={toastVisible} />
            </View>
        </Modal>
    );
};

const LoginForm = ({ theme }: any) => {
    const navigation = useNavigation() as any;
    const toast = useToast();
    const { isAuthenticated, setIsAuthenticated, setUserToken } = useAuth();
    const { updateUserData } = useUser();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

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

            console.log(response.data);

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
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text style={[styles.forgotPasswordText, { color: theme.textSecondary }]}>Forgot your password?</Text>
            </TouchableOpacity>
            <ForgotPasswordModal
                isVisible={modalVisible}
                onClose={() => setModalVisible(false)}
            />
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
                            style={{ backgroundColor: theme.backgroundColor, width: 200, alignSelf: 'center' }}
                            labelStyle={{ color: theme.textPrimary, fontFamily: FONT.medium }}
                        />
                    )}
                />
            </View>
        </React.Fragment>
    );
};


const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        width: 300,
        height: 200,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
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
        fontFamily: FONT.medium
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
    modalContainer: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20
    },
    handleBar: {
        width: 60,
        height: 4,
        backgroundColor: '#ccc',
        borderRadius: 2.5,
        alignSelf: 'center',
        marginVertical: 10,
        marginTop: -5,
        marginBottom: 20
    },
    headingText: {
        fontSize: 20,
        fontFamily: FONT.bold
    },
    description: {
        marginVertical: 10,
        fontFamily: FONT.regular
    },
    label: {
        marginTop: 20,
        fontFamily: FONT.regular
    },
    inputContainer: {

    },
    iconContainer: {
        padding: 10,
    },
    button: {
        backgroundColor: COLORS.primary,
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontFamily: FONT.bold
    },
    codeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    codeInput: {
        borderRadius: 10,
        padding: 10,
        textAlign: 'center',
        width: '20%',
        fontSize: 18,
    },
});

export default LoginSignUpScreen;
