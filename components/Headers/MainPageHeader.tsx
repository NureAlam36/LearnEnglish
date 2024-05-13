import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar, Platform, TextInput } from 'react-native';
// import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import { COLORS, FONT } from "@/constants";

// import { useNavigation } from '@react-navigation/native';

// import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Stack as ExpoStack } from "expo-router";

const CustomHeader = ({ navigation }: any) => {
    // const { colorScheme } = useColorSchemeContext();
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
                header: () => <View style={[styles.header, { backgroundColor: COLORS.primary }]}>
                    <View style={styles.headerContent}>
                        <View style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between', marginBottom: 5 }}>
                            <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: '#fff', fontFamily: FONT.bold, fontSize: 20 }}>Learn English</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('notification_screen')} style={styles.notificationButton}>
                                <Ionicons name="notifications-outline" size={28} color="white" />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TextInput onChangeText={(text) => setSearchKey(text)} placeholder="অনুসন্ধান করুন" style={{ width: '100%', height: 40, backgroundColor: '#fff', paddingVertical: 5, paddingHorizontal: 15, borderRadius: 50, color: COLORS.gray }} />
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
    header: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        paddingHorizontal: 20,
        height: 145,
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20,
    },
    headerContent: {
        paddingVertical: 10,
        gap: 8,
    },
    notificationButton: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});


export default CustomHeader