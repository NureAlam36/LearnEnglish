import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar, Platform, TextInput } from 'react-native';
// import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import { COLORS, FONT } from "@/constants";

import { useNavigation } from '@react-navigation/native';

// import MaterialIcons from '@expo/vector-icons/MaterialIcons';
// import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';



import { Stack as ExpoStack } from "expo-router";
import { useColorSchemeContext } from '@/context/ColorSchemeContext';

const StoryHeader = ({ title }: any) => {
    const navigation = useNavigation() as any;
    const { colorScheme, theme } = useColorSchemeContext();

    return (
        <React.Fragment>
            <ExpoStack.Screen
                options={{
                    headerShown: true,
                    header: () => <View style={[styles.header, { backgroundColor: theme.mainBg }]}>
                        <View style={[styles.headerContent, { backgroundColor: '' }]}>
                            <Image source={{ uri: 'https://images.squarespace-cdn.com/content/v1/509982fae4b0f629c2b0bfa6/1623194049839-E4TCSI01PKWS8OACFWSL/lilly-rum-iyKVGRu79G4-unsplash.jpg' }} style={{ width: '100%', height: '100%' }} />
                            <View style={{ display: 'flex', position: 'absolute', width: '100%', height: '100%', top: 0, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 10 }}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                                    <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.backButton, { marginLeft: 20 }]} activeOpacity={0.7}>
                                        {/* <Ionicons name="arrow-back-outline" size={24} color="white" /> */}
                                        <Entypo name="chevron-small-left" size={30} color={COLORS.lightText} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.shareButton, { marginLeft: 20, borderWidth: 1, borderColor: theme.borderColor }]} activeOpacity={0.7}>
                                        {/* <Ionicons name="arrow-back-outline" size={24} color="white" /> */}
                                        <AntDesign name="sharealt" size={22} color={COLORS.lightText} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                                    <Text style={{ color: '#fff', fontFamily: FONT.bold, fontSize: 20, textAlign: 'center' }}>{title ? title : 'Learn English'}</Text>
                                </View>
                            </View>
                            {/* <TouchableOpacity onPress={() => navigation.navigate('notification_screen')} activeOpacity={0.7}>
                                <Ionicons name="notifications-outline" size={28} color="white" />
                            </TouchableOpacity> */}
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
        // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 10,
        // paddingHorizontal: 20,
        height: 150,
        borderBottomStartRadius: 15,
        borderBottomEndRadius: 15,
        // paddingVertical: 10,
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
        backgroundColor: COLORS.tertiary,
        borderRadius: 5
    },
    shareButton: {
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: COLORS.tertiary,
        borderRadius: 5,
        padding: 8
    }
});


export default StoryHeader