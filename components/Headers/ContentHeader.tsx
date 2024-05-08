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
        <React.Fragment>
            <ExpoStack.Screen
                options={{
                    headerShown: true,
                    header: () => <View style={[styles.header, { backgroundColor: '#1bb285' }]}>
                        <View style={styles.headerContent}>
                            <View style={{ display: 'flex', flexDirection: 'row', alignContent: 'center' }}>
                                <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
                                    <Ionicons name="arrow-back-outline" size={24} color="white" />
                                </TouchableOpacity>
                                <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: '#fff', fontFamily: FONT.bold, fontSize: 20 }}>{title ? title : 'Learn English'}</Text>
                                </View>
                            </View>
                            <View>
                                <Ionicons name="notifications-outline" size={28} color="white" />
                            </View>
                        </View>
                    </View>
                }}
            />
        </React.Fragment>
    );

}

const styles = StyleSheet.create({
    header: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        paddingHorizontal: 20,
        height: 100,
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20,
    },
    headerContent: {
        paddingVertical: 10,
        gap: 8,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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