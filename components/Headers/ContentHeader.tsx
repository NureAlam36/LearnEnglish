import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar, Platform, TextInput } from 'react-native';
// import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import { COLORS, FONT } from "@/constants";

import { useNavigation } from '@react-navigation/native';

// import MaterialIcons from '@expo/vector-icons/MaterialIcons';
// import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';


import { Stack as ExpoStack } from "expo-router";
import { useColorSchemeContext } from '@/context/ColorSchemeContext';

const ContentHeader = ({ title, borderRadius = 15, bodyColor = '', bgColor = '', fontFamily = '', fontSize = 20 }: any) => {
    const navigation = useNavigation() as any;
    const { colorScheme, theme } = useColorSchemeContext();

    return (
        <React.Fragment>
            <ExpoStack.Screen
                options={{
                    headerShown: true,
                    header: () => <View style={[styles.header, { backgroundColor: bodyColor ? bodyColor : theme.mainBg }]}>
                        <View style={[styles.headerContent, { backgroundColor: bgColor ? bgColor : COLORS.primary, borderBottomStartRadius: borderRadius, borderBottomEndRadius: borderRadius, }]}>
                            <View style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', flex: 1 }}>
                                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton} activeOpacity={0.7}>
                                    {/* <Ionicons name="arrow-back-outline" size={24} color="white" /> */}
                                    <Entypo name="chevron-small-left" size={30} color={COLORS.lightText} />
                                </TouchableOpacity>
                                <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: '#fff', fontFamily: fontFamily ? fontFamily : FONT.bold, fontSize: fontSize }}>{title ? title : 'Learn English'}</Text>
                                </View>
                            </View>
                            <View style={{}}>
                                <TouchableOpacity onPress={() => navigation.navigate('notification_screen')} activeOpacity={0.7}>
                                    <Ionicons name="notifications-outline" size={28} color="white" />
                                </TouchableOpacity>
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

    },
    headerContent: {
        //@ts-ignore
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 10,
        paddingHorizontal: 15,
        minHeight: 100,
        paddingVertical: 15,
        gap: 80,
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
        backgroundColor: COLORS.tertiary,
        borderRadius: 5
    }
});


export default ContentHeader