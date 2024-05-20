import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
// import { Stack } from 'expo-router'
import { Link } from "expo-router";
import { COLORS, FONT, icons, images, SIZES } from "@/constants";
import { Feather, FontAwesome } from '@expo/vector-icons';

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import ContentHeader from '@/components/Headers/ContentHeader';

import PresentTense from './present-tense';
import PastTense from './past-tense';
import FutureTense from './future-tense';
import { useColorSchemeContext } from '@/context/ColorSchemeContext';

// Create a stack navigator
const Stack = createStackNavigator();

const DATA = [
    {
        id: 1,
        title: "Present Tense",
        screen: "presentTense_screen",
    },
    {
        id: 2,
        title: "Past Tense",
        screen: "pastTense_screen",
    },
    {
        id: 3,
        title: "Future Tense",
        screen: "futureTense_screen",
    }
];

const Index = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                ...TransitionPresets.SlideFromRightIOS,
                headerShown: false
            }}>

            <Stack.Screen name="tenses_main_screen" component={Tenses} options={{ header: () => <ContentHeader title="Tenses" />, headerShown: true }} />
            <Stack.Screen name="presentTense_screen" component={PresentTense} options={{ header: () => <ContentHeader title="Present Tense" />, headerShown: true }} />
            <Stack.Screen name="pastTense_screen" component={PastTense} options={{ header: () => <ContentHeader title="Past Tense" />, headerShown: true }} />
            <Stack.Screen name="futureTense_screen" component={FutureTense} options={{ header: () => <ContentHeader title="Future Tense" />, headerShown: true }} />
        </Stack.Navigator>
    );
}

const Tenses = ({ navigation }: any) => {
    const { colorScheme, theme } = useColorSchemeContext();

    return (
        <ScrollView style={[styles.container, { backgroundColor: theme.mainBg, flex: 1 }]}>
            <View>
                <Text style={[styles.heading_xl, { marginBottom: 10, color: theme.textPrimary }]}>What is tense?</Text>
                <Text style={[styles.text, { color: theme.textSecondary }]}>Tense in grammar refers to the form of a verb that indicates the time at which an action or event occurs. There are three main tenses: past, present, and future, each of which can be further divided to convey various nuances of time.</Text>

                <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24' }]}>Example –</Text>

                <View style={{ display: 'flex', gap: 5, marginBottom: 15, marginLeft: 20 }}>
                    <Text style={[styles.text, { color: theme.textSecondary }]}>• I eat rice. (Present)</Text>
                    <Text style={[styles.text, { color: theme.textSecondary }]}>• I ate rice. (Past) </Text>
                    <Text style={[styles.text, { color: theme.textSecondary }]}>• I will eat rice. (Future) </Text>
                </View>

                <Text style={[styles.text, { fontStyle: 'italic', color: theme.textSecondary }]}>Here in the above sentences indicate present, past and future actions respectively.</Text>

                <Text style={[styles.heading_lg, { marginTop: 20, marginBottom: 10, color: theme.textPrimary }]}>Types of Tense:</Text>

                <FlatList
                    data={DATA}
                    renderItem={({ item }) => (
                        //@ts-ignore
                        <TouchableOpacity onPress={() => navigation.navigate(item.screen)} activeOpacity={0.9} style={styles.itemContainer}>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 15, paddingRight: 10, width: '100%' }}>
                                <View style={styles.item}>
                                    <Text style={styles.item_icon}>{item.title.charAt(0)}</Text>
                                    <Text style={styles.title}>{item.title}</Text>
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
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={{ paddingBottom: 20 }}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    itemContainer: {
        flexDirection: "row",
        backgroundColor: "#fff",
        marginVertical: 5,
        borderRadius: 5,
        padding: 5,
    },
    item: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        margin: 5,
        gap: 10,
    },
    item_icon: {
        width: 38,
        height: 37,
        backgroundColor: COLORS.primary,
        borderRadius: 50,
        textAlign: 'center',
        paddingTop: 10,
        color: '#fff',
        fontFamily: FONT.medium,
    },
    title: {
        fontSize: 14,
        fontFamily: FONT.medium,
        color: "#1f1f1f",
    },

    text: {
        fontSize: 17,
        fontFamily: FONT.regular,
        color: '#242424'
    },
    heading_xl: {
        fontSize: 22,
        fontFamily: FONT.bold
    },
    heading_lg: {
        fontSize: 20,
        fontFamily: FONT.bold,
        color: COLORS.black
    },
    heading_md: {
        fontSize: 18,
        fontFamily: FONT.bold,
        color: COLORS.black
    }
});

export default Index