import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar, Platform } from 'react-native';
import Octicons from '@expo/vector-icons/Octicons';
import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import { COLORS, FONT } from "@/constants";

import { useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';

const CustomHeader = ({ title = 'English Go Pro', paddingTop = 0 }: any) => {
    const { colorScheme } = useColorSchemeContext();

    const navigation = useNavigation();

    const handleBackPress = () => {
        navigation.goBack();
    };

    return (
        <View style={[styles.headerContent, { paddingTop: paddingTop && Platform.OS === 'android' ? StatusBar.currentHeight : 0, }]}>
            <TouchableOpacity onPress={handleBackPress} style={[styles.backButton]}>
                <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            <Text style={[styles.title, { color: '#fff' }]}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContent: {
        // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        paddingHorizontal: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    backButton: {
        marginRight: 10,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.tertiary,
        borderRadius: 5
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});


export default CustomHeader