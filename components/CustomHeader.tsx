import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar, Platform } from 'react-native';
import Octicons from '@expo/vector-icons/Octicons';
import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import { COLORS, FONT } from "@/constants";

import { useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';

const CustomHeader = ({ title }: any) => {
    const { colorScheme } = useColorSchemeContext();

    const navigation = useNavigation();

    const handleBackPress = () => {
        navigation.goBack();
    };

    return (
        <View style={[styles.header, { backgroundColor: colorScheme === 'light' ? '#fff' : COLORS.darkPrimary }]}>
            <View style={styles.headerContent}>
                <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color={colorScheme === 'light' ? COLORS.darkPrimary : '#fff'} />
                </TouchableOpacity>
                <Text style={[styles.title, { color: colorScheme === 'light' ? COLORS.darkPrimary : '#fff' }]}>{title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    headerContent: {
        paddingVertical: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
    },
    backButton: {
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#e1e1e1',
        borderRadius: 50,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});


export default CustomHeader