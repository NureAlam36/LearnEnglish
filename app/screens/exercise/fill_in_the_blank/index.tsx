import React, { useState, useEffect } from 'react'
import { View, Image, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
// import { Stack } from 'expo-router'
import { Link } from "expo-router";
import { COLORS, FONT } from "@/constants";
import { Octicons, MaterialIcons, Feather } from '@expo/vector-icons';
import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import FillInTheBlank from '@/data/fill-in-the-blank.json';

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Excercises from './exercises';

import ContentHeader from '@/components/Headers/ContentHeader';

const HomeScreen = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                ...TransitionPresets.SlideFromRightIOS
            }}
        >
            <Stack.Screen
                name="Exercises"
                component={MainHomeScreen}
                options={{
                    title: 'Exercises',
                    headerStyle: { backgroundColor: '#5495fb' },
                    headerTitleStyle: { color: '#fff', fontFamily: FONT.medium },
                    headerShown: false
                }}
            />
            <Stack.Screen name="Screen1" component={Excercises} options={{
                title: 'Fill In The Blank',
                headerStyle: { backgroundColor: '#5495fb' },
                headerTitleStyle: { color: '#fff', fontFamily: FONT.medium },
                headerShown: false
            }} />
        </Stack.Navigator>
    );
};

const Progress = () => {
    const { colorScheme, theme } = useColorSchemeContext();

    return <View style={{ marginTop: 5, width: 200, }}>
        <View style={{ backgroundColor: COLORS.gray2, height: 5, borderRadius: 50 }}></View>
        <View style={{ position: 'absolute', backgroundColor: COLORS.primary, height: 5, width: '50%', borderRadius: 50 }}></View>
    </View>
}

const MainHomeScreen = ({ navigation }: any) => {
    const { colorScheme, theme } = useColorSchemeContext();
    const [lesions, setLesions] = useState<any>([]);

    useEffect(() => {
        FillInTheBlank.forEach((item) => {
            setLesions((lesions: any) => [...lesions, {
                name: item.category,
                link: item.link,
            }]);
        })
    }, []);

    return (
        <React.Fragment>
            <ContentHeader title="Fill In The Blank" />

            <View style={[styles.sectionContainer, { backgroundColor: colorScheme === 'light' ? '#f7f9fc' : COLORS.darkPrimary }]}>
                <View style={{ padding: 10 }}>
                    {/* <View style={{ marginBottom: 10, marginTop: 8, marginHorizontal: 15, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Octicons name="checklist" size={24} color={COLORS.gray} />
                        <Text style={[styles.sectionTitle, { color: colorScheme === 'light' ? COLORS.gray : COLORS.lightText }]}>Lesions</Text>
                    </View> */}
                    <FlatList
                        data={lesions}
                        renderItem={({ item }) => (
                            //@ts-ignore
                            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Screen1', { link: item.link })} style={[styles.itemContainer, { backgroundColor: colorScheme === 'light' ? '#fff' : COLORS.darkSecondary, borderWidth: 1, borderColor: theme.borderColor }]}>
                                <View style={styles.item}>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                        <View style={styles.item_icon_wraper}>
                                            <Text style={styles.item_icon}>{item.name.charAt(0)}</Text>
                                        </View>

                                        <View>
                                            <Text style={[styles.title, { color: colorScheme === 'light' ? COLORS.gray : COLORS.lightText }]}>{item.name}</Text>
                                            {/* <Progress /> */}
                                        </View>

                                    </View>
                                    <View
                                        style={{
                                            backgroundColor: "#e5f5ff",
                                            width: 30,
                                            height: 30,
                                            borderRadius: 50,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Feather name="chevron-right" size={20} color={COLORS.primary} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        contentContainerStyle={{ gap: 10 }}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
    },
    // sectionTitle: {
    //     fontSize: 17,
    //     marginTop: 5,
    //     marginBottom: 10,
    //     fontFamily: FONT.bold,
    // },
    itemContainer: {
        borderRadius: 10,
        padding: 10,
    },
    item: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
    },
    item_icon_wraper: {
        width: 50,
        height: 50,
        backgroundColor: COLORS.primary,
        padding: 8,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
    },
    item_icon: {
        textAlign: 'center',
        fontFamily: FONT.bold,
        fontSize: 16,
        color: '#fff',
    },
    title: {
        fontSize: 15,
        fontFamily: FONT.medium,
        marginBottom: 3
    },
});

export default HomeScreen