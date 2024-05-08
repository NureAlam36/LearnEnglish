import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar, Platform, TextInput } from 'react-native';
import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import { COLORS, FONT } from "@/constants";

import { useNavigation } from '@react-navigation/native';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Stack as ExpoStack } from "expo-router";

const CustomHeader = ({ title }: any) => {
    const { colorScheme } = useColorSchemeContext();

    const navigation = useNavigation();

    const handleBackPress = () => {
        navigation.goBack();
    };

    return (
        <ExpoStack.Screen
            options={{
                headerShown: true,
                header: () => <View style={[styles.header, { backgroundColor: COLORS.primary }]}>
                    <View style={styles.headerContent}>
                        <View style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between' }}>
                            <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: '#fff', fontFamily: FONT.bold, fontSize: 20 }}>Learn English</Text>
                            </View>
                            <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
                                <Ionicons name="notifications-outline" size={28} color="white" />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TextInput placeholder="অনুসন্ধান করুন" style={{ width: '100%', height: 40, backgroundColor: '#fff', paddingVertical: 5, paddingHorizontal: 15, borderRadius: 50 }} />
                            <View style={{ position: 'absolute', right: 18, top: 8 }}>
                                <Feather name="search" size={22} color={COLORS.gray} />
                            </View>
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
        height: 150,
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20,
    },
    headerContent: {
        paddingVertical: 10,
        gap: 8,
    },
    backButton: {
        marginRight: 10,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    }
});


export default CustomHeader