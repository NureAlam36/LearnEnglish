// HomeScreen.js
import React from 'react';
import { View, Image, Text, FlatList, StyleSheet, TouchableOpacity, Button } from 'react-native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';


// import rearrangeSentences from '@/data/rearrange-sentences.json';
import { useColorSchemeContext } from "@/context/ColorSchemeContext";

import { COLORS, FONT } from "@/constants";

import FillInTheBlankScreen from './exercise/fill_in_the_blank';
import RearrangeScreen from './exercise/rearrange';


import CustomHeader from '@/components/Headers/CustomHeader';
import { Stack as ExpoStack } from 'expo-router';

const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "Fill In The Blank",
        link: "fill_in_the_blank",
        image: "https://image.winudf.com/v2/image/YXN1Lm1jcV9pY29uXzBfYzVkMzhmYzE/icon.png?w=&fakeurl=1"
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f61",
        title: "Rearrange",
        link: "rearrange",
        image: "https://cdn-icons-png.flaticon.com/512/1127/1127749.png"
    }
];

// Define stack navigator for nested screens within HomeScreen
const Stack = createStackNavigator();

import ContentHeader from "@/components/Headers/ContentHeader";

const HomeScreen = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                ...TransitionPresets.SlideFromRightIOS
            }}
        >
            <Stack.Screen name="Exercises" component={MainHomeScreen} />
            <Stack.Screen name="FillInTheBlank" component={FillInTheBlankScreen} options={{
                headerShown: false
            }} />
            <Stack.Screen name="Rearrange" component={RearrangeScreen} options={{
                title: 'Rearrange',
                headerStyle: { backgroundColor: '#5495fb' },
                headerTitleStyle: { color: '#fff', fontFamily: FONT.medium },
            }} />
        </Stack.Navigator>
    );
};

const MainHomeScreen = ({ navigation }: any) => {
    const { colorScheme } = useColorSchemeContext();

    return (
        <React.Fragment>
            <ContentHeader title="Exercise" />
            <View style={[styles.sectionContainer, { backgroundColor: colorScheme === 'light' ? '#f2f2f2' : COLORS.darkPrimary }]}>
                <TouchableOpacity onPress={() => navigation.navigate('FillInTheBlank')} activeOpacity={0.7} style={[styles.itemContainer, { backgroundColor: colorScheme === 'light' ? '#fff' : COLORS.darkSecondary }]}>
                    <View style={styles.item}>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                            <View style={styles.item_icon_wraper}>
                                <Image style={styles.item_icon} source={{ uri: 'https://image.winudf.com/v2/image/YXN1Lm1jcV9pY29uXzBfYzVkMzhmYzE/icon.png?w=&fakeurl=1' }} />
                            </View>
                            <View>
                                <Text style={[styles.title, { color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText }]}>Fill In The Blank</Text>
                            </View>
                        </View>
                        {/* <FontAwesome name="arrow-circle-right" size={24} color={COLORS.primary} /> */}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Rearrange')} activeOpacity={0.7} style={[styles.itemContainer, { backgroundColor: colorScheme === 'light' ? '#fff' : COLORS.darkSecondary }]}>
                    <View style={styles.item}>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                            <View style={styles.item_icon_wraper}>
                                <Image style={styles.item_icon} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1127/1127749.png' }} />
                            </View>
                            <View>
                                <Text style={[styles.title, { color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText }]}>Rearrange</Text>
                            </View>
                        </View>
                        {/* <FontAwesome name="arrow-circle-right" size={24} color={COLORS.primary} /> */}
                    </View>
                </TouchableOpacity>

            </View>
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        gap: 10,
        padding: 10,
    },
    sectionTitle: {
        fontSize: 18,
        marginTop: 5,
        marginBottom: 10,
        fontFamily: FONT.bold,
    },
    itemContainer: {
        flexDirection: "row",
        borderRadius: 5,
        padding: 10,
    },
    item: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 5,
        gap: 10,
    },
    item_icon_wraper: {
        width: 50,
        height: 50,
        backgroundColor: '#e5f5ff',
        padding: 8,
        borderRadius: 10,
    },
    item_icon: {
        width: 30,
        height: 30,
    },
    title: {
        fontSize: 15,
        fontFamily: FONT.medium
    },
});


export default HomeScreen;
