import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { COLORS, FONT } from "@/constants";
import { useColorSchemeContext } from '@/context/ColorSchemeContext';
import { useAuth } from '@/context/AuthContext';
import { useToast } from 'react-native-toast-notifications';
import { useUser } from '@/context/UserContext';
// import { useUser } from '@/context/UserContext';

const Verify = ({ route, navigation }: any) => {
    const toast = useToast();
    const { name, email, password, otp } = route.params;
    const { colorScheme, theme } = useColorSchemeContext();
    const { isVerified, setIsVerified } = useAuth();
    const [code, setCode] = useState<any>(['', '', '', '']);
    const [isModalOpen, setIsModalOpen] = useState(true);

    const { setIsAuthenticated, setUserToken } = useAuth();
    const { updateUserData } = useUser();

    const handleVerify = async () => {
        const verification_code = code.join('');

        if (verification_code.length !== 4) {
            toast.show('Please enter a valid 4 digit code', {
                type: 'danger',
                placement: 'bottom',
            });
            return;
        }

        if (verification_code !== otp) {
            toast.show('Verification code does not match', {
                type: 'danger',
                placement: 'bottom',
            });
            return;
        }

        try {
            const response = await axios.post('http://192.168.0.117/web/english_go_pro/register.php', {
                action: 'confirm_registration', name, email, password, otp: verification_code
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

    const handleChange = (index: number, value: string) => {
        const updatedCode = [...code];
        updatedCode[index] = /^\d$/.test(value) ? value : '';
        setCode(updatedCode);
    };

    return (
        <View style={{ backgroundColor: theme.mainBg, flex: 1 }}>
            <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
                <View>
                    <Image source={{ uri: 'https://www.pngall.com/wp-content/uploads/8/Verification-PNG-Pic.png' }} style={{ width: 140, height: 140, alignSelf: 'center' }} />
                </View>
                <View style={{ marginTop: 50, marginBottom: 30 }}>
                    <Text style={{ fontSize: 22, color: theme.headingPrimary, fontFamily: FONT.bold, marginBottom: 5 }}>Verify your email</Text>
                    <Text style={{ fontSize: 14, color: theme.textSecondary, fontFamily: FONT.regular }}>Please enter the 4 digit code sent to <Text style={{ fontFamily: FONT.medium }}>{email}</Text></Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    {Array.from({ length: 4 }, (_, index) => (
                        <TextInput
                            key={index}
                            style={[
                                {
                                    flex: 1,
                                    height: 40,
                                    borderColor: colorScheme === 'light' ? '#e1e1e1' : theme.borderColor,
                                    borderWidth: 1,
                                    color: theme.textSecondary,
                                    textAlign: 'center',
                                },
                                index === 0 ? { borderTopLeftRadius: 5, borderBottomLeftRadius: 5 } : {},
                                index === 1 || index === 2 || index === 3 ? { borderLeftWidth: 0 } : {},
                                index === 3 ? { borderTopRightRadius: 5, borderBottomRightRadius: 5 } : {},
                            ]}
                            maxLength={1}
                            keyboardType="number-pad"
                            value={code[index]}
                            onChangeText={(value) => handleChange(index, value)}
                        />
                    ))}
                </View>
                <TouchableOpacity style={{ alignItems: 'center', marginTop: 35 }} activeOpacity={0.8}>
                    <Text style={{ color: theme.textSecondary, fontFamily: FONT.medium }}>Resend Code</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleVerify()} style={{ backgroundColor: COLORS.primary, padding: 10, marginTop: 20, borderRadius: 50, height: 50, alignItems: 'center', justifyContent: 'center' }} activeOpacity={0.8}>
                    <Text style={{ color: COLORS.white, fontFamily: FONT.medium }}>Verify</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Verify

const styles = StyleSheet.create({

})