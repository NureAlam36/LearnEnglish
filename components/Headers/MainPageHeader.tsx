import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar, Platform, TextInput } from 'react-native';
// import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import { COLORS, FONT } from "@/constants";


// import { useNavigation } from '@react-navigation/native';

// import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Stack as ExpoStack } from "expo-router";
import { useColorSchemeContext } from '@/context/ColorSchemeContext';

const MainPageHeader = ({ navigation }: any) => {
    const { colorScheme, theme } = useColorSchemeContext();
    const [searchKey, setSearchKey] = useState('');

    const handleSearch = () => {
        if (searchKey.length > 0) {
            navigation.navigate('search_screen', { key: searchKey });
        }
    }


    return (
        <ExpoStack.Screen
            options={{
                headerShown: true,
                header: () => <View style={{ backgroundColor: theme.mainBg }}>
                    <View style={styles.headerContent}>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5 }}>
                            <View style={{ display: 'flex' }}>
                                <Text style={{ color: '#fff', fontFamily: FONT.bold, fontSize: 20 }}>English Go Pro</Text>
                                {/* <Text style={{ color: '#fff', fontFamily: FONT.medium, fontSize: 12, textAlign: 'right' }}>- Fast & Easy Way</Text> */}
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row-reverse', gap: 18 }}>
                                <TouchableOpacity onPress={() => navigation.navigate('settings_screen')} style={styles.notificationButton} activeOpacity={0.7}>
                                    {/* <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }} style={{ width: 32, height: 32 }} /> */}
                                    <Feather name="settings" size={24} color="white" />
                                </TouchableOpacity>
                                {/* <TouchableOpacity onPress={() => navigation.navigate('notification_screen')} style={styles.notificationButton}>
                                    <Ionicons name="notifications-outline" size={26} color="white" />
                                </TouchableOpacity> */}
                                {/* https://cdn-icons-png.flaticon.com/512/3135/3135715.png */}
                            </View>
                        </View>
                        <View>
                            <TextInput onChangeText={(text) => setSearchKey(text)} placeholder="Search" style={{ width: '100%', height: 40, backgroundColor: '#fff', paddingVertical: 5, paddingHorizontal: 15, borderRadius: 50, color: COLORS.gray }} />
                            <TouchableOpacity style={{ position: 'absolute', right: 18, top: 8 }} onPress={() => handleSearch()}>
                                <Feather name="search" size={22} color={COLORS.gray} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            }}
        />
    );

}

const styles = StyleSheet.create({
    headerContent: {
        height: 145,
        // @ts-ignore
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        gap: 8,
        backgroundColor: COLORS.primary,
        borderBottomStartRadius: 15,
        borderBottomEndRadius: 15,
        justifyContent: 'center',
    },
    notificationButton: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});


export default MainPageHeader