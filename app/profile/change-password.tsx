import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { COLORS, FONT } from '@/constants'
import { useColorSchemeContext } from '@/context/ColorSchemeContext'
import ContentHeader from '@/components/Headers/ContentHeader'
import { useUser } from '@/context/UserContext'
import { useAuth } from '@/context/AuthContext'
import { useToast } from 'react-native-toast-notifications'

const ChangePassword = ({ navigation }: any) => {
    const toast = useToast();
    const { colorScheme, theme } = useColorSchemeContext();
    const { userData } = useUser();
    const { userAuthToken } = useAuth();

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPasswordChanged, setIsPasswordChanged] = useState(false);

    const handleChangePassword = async () => {
        if (password !== confirmPassword) {
            alert('Password does not match');
            return;
        }

        try {
            const response = await axios.post('http://192.168.0.117/web/english_go_pro/change_password.php', {
                action: 'change_password', email: userData.email, token: userAuthToken, password, confirm_password: confirmPassword
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            });

            // console.log(response.data);

            if (response.data.status === 'success') {
                setIsPasswordChanged(true);
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

    return (
        <React.Fragment>
            <ContentHeader title="Change Password" />

            <View style={{ flex: 1, backgroundColor: theme.mainBg }}>
                {
                    !isPasswordChanged ? <View style={{ flex: 1, paddingVertical: 20, paddingHorizontal: 40, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ marginBottom: 30 }}>
                            <Text style={{ fontFamily: FONT.bold, fontSize: 22, color: theme.headingSecondary }}>Change Password</Text>
                        </View>
                        <View style={{ width: '100%' }}>
                            <Text style={[styles.label, { marginBottom: 5, color: theme.textSecondary }]}>Current Password</Text>
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
                        </View>

                        <View style={{ width: '100%' }}>
                            <Text style={[styles.label, { marginBottom: 5, color: theme.textSecondary, marginTop: 0 }]}>Password</Text>
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

                        <View style={{ width: '100%' }}>
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

                            <TouchableOpacity style={styles.button} onPress={() => handleChangePassword()}>
                                <Text style={styles.buttonText}>Update Password</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                        : <View style={{ flex: 1, paddingVertical: 20, paddingHorizontal: 40, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ marginBottom: 50 }}>
                                <View style={{ marginBottom: 30, marginTop: 30 }}>
                                    <Image source={{ uri: 'https://miro.medium.com/v2/resize:fit:512/0*9ywnvEYNioUm3XSm.png' }} style={{ width: 80, height: 80, alignSelf: 'center' }} />
                                </View>
                                <Text style={[styles.headingText, { color: theme.headingPrimary, textAlign: 'center' }]}>Password Changed!</Text>
                                <Text style={[styles.description, { color: theme.textSecondary, textAlign: 'center' }]}>Your password has been changed successfully. You can now login with your new password</Text>
                            </View>
                            <View style={{ width: '100%' }}>
                                <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                                    <Text style={styles.buttonText}>Go Back</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                }
            </View>
        </React.Fragment>
    )
}

export default ChangePassword

const styles = StyleSheet.create({
    label: {
        marginTop: 20,
        paddingBottom: 5,
        fontFamily: FONT.regular
    },
    inputContainer: {

    },
    input: {
        height: 50,
        borderWidth: 1,
        paddingHorizontal: 15,
        borderRadius: 10,
        fontFamily: FONT.medium
    },
    iconContainer: {
        padding: 10,
    },
    button: {
        backgroundColor: COLORS.primary,
        padding: 15,
        borderRadius: 50,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontFamily: FONT.bold
    },
    headingText: {
        fontSize: 20,
        fontFamily: FONT.bold
    },
    description: {
        marginVertical: 10,
        fontFamily: FONT.regular
    },
})