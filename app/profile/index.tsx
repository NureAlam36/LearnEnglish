import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import { COLORS, FONT } from "@/constants";
import AntDesign from '@expo/vector-icons/AntDesign';
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import CustomHeader from "@/components/Headers/CustomHeader";

import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import { useAuth } from '@/context/AuthContext';

const Divider = ({ marginTop = 0, marginBottom = 0, borderColor = '#ededed' }) => {
    const { colorScheme, theme } = useColorSchemeContext();

    return (
        <View style={{
            height: 1,
            backgroundColor: colorScheme === 'light' ? '#ebebeb' : borderColor,
            alignSelf: 'stretch',
            marginTop: marginTop,
            marginBottom: marginBottom,
        }} />
    )
}


const Profile = ({ navigation }: any) => {
    const { colorScheme, theme } = useColorSchemeContext();
    const { isAuthenticated, isVerified, logout } = useAuth();

    const handleLogOut = () => {
        logout();
    }

    const styles = StyleSheet.create({
        headerContent: {
            paddingVertical: 10,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            marginLeft: 20
        },
        backButton: {
            marginRight: 10,
            borderWidth: 1,
            borderColor: '#e1e1e1',
            borderRadius: 50,
            width: 35,
            height: 35,
            alignItems: 'center',
            justifyContent: 'center',
        },
        title: {
            fontSize: 18,
            fontWeight: 'bold',
        },

        sectionTitle: {
            fontSize: 16,
            marginBottom: 10,
            fontFamily: FONT.bold,
            color: colorScheme === 'light' ? COLORS.gray : COLORS.lightText
        },
        sectionWrap: {
            backgroundColor: colorScheme === 'light' ? '#f9f9f9' : COLORS.darkSecondary
        },
        row: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
        },
        item: {
            height: 50,
            justifyContent: 'center',
            paddingHorizontal: 15,
        },
        text: {
            fontSize: 15,
            fontFamily: FONT.medium,
            color: colorScheme === 'light' ? COLORS.gray : COLORS.lightText
        },
        itemIcon: {
            color: colorScheme === 'light' ? COLORS.darkText : '#d1d1d1'
        }
    })

    return <View style={{ backgroundColor: theme.bgPrimary, flex: 1 }}>
        <View style={{ backgroundColor: COLORS.primary }}>
            <LinearGradient
                colors={[COLORS.bgPrimary, COLORS.bgSecondary]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{ paddingTop: 10, borderBottomStartRadius: 25, borderBottomEndRadius: 25 }}
            >

                <CustomHeader title="Profile" paddingTop={1} />
                <View style={{ display: 'flex', flexDirection: 'row', gap: 20, alignItems: 'center', paddingHorizontal: 20, marginTop: 20, paddingBottom: 55 }}>
                    <View>
                        <LinearGradient
                            colors={['#43e97b', '#38f9d7']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={{ padding: 4, borderRadius: 50, marginBottom: 10, marginTop: 5 }}
                        >
                            <Image style={{ width: 65, height: 65, borderRadius: 50 }} source={{ uri: 'https://pics.craiyon.com/2023-06-20/89f79a8dee744596981e7417b8a7ea1d.webp' }} />
                        </LinearGradient>
                        {/* <Image source={{ uri: 'https://pics.craiyon.com/2023-06-20/89f79a8dee744596981e7417b8a7ea1d.webp' }} style={{ width: 65, height: 65, borderRadius: 50 }} /> */}
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
                        <View style={{ display: 'flex', }}>
                            <Text style={{ fontFamily: FONT.bold, fontSize: 20, color: 'white' }}>Nure Alam S.</Text>
                            <Text style={{ fontFamily: FONT.regular, color: 'white' }}>ID: 368547</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('edit_profile_screen')} activeOpacity={0.8}>
                            <AntDesign name="edit" size={20} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        </View>

        <View style={{ position: 'relative' }}>
            <View style={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'row', height: 100, position: 'absolute', top: 10, marginTop: -50, margin: 20, padding: 10, borderRadius: 20, borderWidth: 1, borderColor: colorScheme === 'light' ? '#ebebeb' : theme.borderColor, }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <View style={{ display: 'flex', alignItems: 'center', gap: 5, flex: 1, borderRightWidth: 1, borderRightColor: theme.borderColor }}>
                        <Text style={{ color: COLORS.gray, fontFamily: FONT.medium }}>Total Exam</Text>
                        <Text style={{ fontFamily: FONT.medium, fontSize: 17, color: COLORS.gray }}>10</Text>
                    </View>
                    <View style={{ display: 'flex', alignItems: 'center', gap: 5, flex: 1, borderRightWidth: 1, borderRightColor: theme.borderColor }}>
                        <Text style={{ color: COLORS.gray, fontFamily: FONT.medium }}>Passed</Text>
                        <Text style={{ fontFamily: FONT.medium, fontSize: 17, color: '#00c47d' }}>10</Text>
                    </View>
                    <View style={{ display: 'flex', alignItems: 'center', gap: 5, flex: 1, }}>
                        <Text style={{ color: COLORS.gray, fontFamily: FONT.medium }}>Failed</Text>
                        <Text style={{ fontFamily: FONT.medium, fontSize: 17, color: 'red' }}>10</Text>
                    </View>
                </View>
            </View>
        </View>


        <View style={{ paddingHorizontal: 15, paddingVertical: 10, marginTop: 70 }}>
            <Text style={styles.sectionTitle}>Personal Details</Text>

            <View style={{ backgroundColor: colorScheme === 'light' ? '#f9f9f9' : COLORS.darkSecondary, display: 'flex', gap: 10, padding: 10, borderRadius: 10, borderWidth: 1, borderColor: colorScheme === 'light' ? '#ebebeb' : theme.borderColor }}>
                <View style={{ display: 'flex', }}>
                    <Text style={{ color: COLORS.primary, fontFamily: FONT.regular, opacity: 0.7 }}>Email</Text>
                    <Text style={{ fontFamily: FONT.medium, fontSize: 16, color: theme.textSecondary, opacity: 0.9 }}>mdnurealamsiddiq36@gmail.com</Text>
                </View>
                <View style={{ display: 'flex', }}>
                    <Text style={{ color: COLORS.primary, fontFamily: FONT.regular, opacity: 0.7 }}>Mobile</Text>
                    <Text style={{ fontFamily: FONT.medium, fontSize: 16, color: theme.textSecondary, opacity: 0.9 }}>01303022200</Text>
                </View>
                <View style={{ display: 'flex', }}>
                    <Text style={{ color: COLORS.primary, fontFamily: FONT.regular, opacity: 0.7 }}>Member Since</Text>
                    <Text style={{ fontFamily: FONT.medium, fontSize: 16, color: theme.textSecondary, opacity: 0.9 }}>27 May 2024</Text>
                </View>
            </View>
        </View>

        <View style={{ paddingHorizontal: 15, paddingVertical: 10 }}>
            <Text style={styles.sectionTitle}>Pages</Text>
            <View style={[styles.sectionWrap, { borderWidth: 1, borderColor: colorScheme === 'light' ? '#ebebeb' : theme.borderColor, borderRadius: 10 }]}>
                <TouchableOpacity onPress={() => navigation.navigate('')} activeOpacity={0.7} style={styles.item}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                        <Ionicons name="reader-outline" size={24} style={styles.itemIcon} />
                        <Text style={styles.text}>Exam History</Text>
                    </View>
                </TouchableOpacity>
                <Divider borderColor={theme.borderColor} />
                <TouchableOpacity onPress={() => navigation.navigate('')} activeOpacity={0.7} style={styles.item}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                        <MaterialIcons name="password" size={24} style={styles.itemIcon} />
                        <Text style={styles.text}>Change Password</Text>
                    </View>
                </TouchableOpacity>
                <Divider borderColor={theme.borderColor} />

                <TouchableOpacity activeOpacity={0.7} style={styles.item} onPress={() => handleLogOut()}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                        <MaterialIcons name="logout" size={24} color="#d71f1f" />
                        <Text style={styles.text}>Logout</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </View>
}

export default Profile