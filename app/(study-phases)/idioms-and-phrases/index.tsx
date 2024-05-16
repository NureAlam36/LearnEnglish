import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
// import { Stack } from 'expo-router'
import { Link } from "expo-router";
import { COLORS, FONT } from "@/constants";
import { useColorSchemeContext } from "@/context/ColorSchemeContext";

import idiomsAndPhrases from '@/data/idioms-and-phrases.json';

import ContentHeader from "@/components/Headers/ContentHeader";

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import Phrases from './phrases';

// Create a stack navigator
const Stack = createStackNavigator();

const DATA = [
    {
        id: 1,
        title: "Tenses",
        link: "tenses",
    },
    {
        id: 2,
        title: "Parts of Speech",
        link: "parts-of-speech",
    },
    {
        id: 3,
        title: "Articles",
        link: "articles",
    },
    {
        id: 4,
        title: "Right Forms of Verbs",
        link: "right-forms-of-verbs",
    },
    {
        id: 5,
        title: "Number",
        link: "number",
    },
    {
        id: 6,
        title: "Word",
        link: "word",
    },
    {
        id: 7,
        title: "Modifiers",
        link: "modifiers",
    },
    {
        id: 8,
        title: "Narration",
        link: "narration",
    },
];

const Index = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                ...TransitionPresets.SlideFromRightIOS,
                headerShown: false
            }}>

            <Stack.Screen name="phrasesCategory_screen" component={PhrasesCategory} options={{ header: () => <ContentHeader title="Idioms and Phrases" />, headerShown: true }} />
            <Stack.Screen name="phrases_content_screen" component={Phrases} />
        </Stack.Navigator>
    );
}

const PhrasesCategory = ({ navigation }: any) => {
    const { colorScheme } = useColorSchemeContext();
    const [categories, setCategories] = useState<any>([]);

    useEffect(() => {
        idiomsAndPhrases.forEach((item) => {
            const category = {
                name: item.category,
            }

            setCategories((categories: any) => [...categories, category]);
        })
    }, []);

    return (
        <React.Fragment>
            {/* <ContentHeader title="Idioms & Phrases" /> */}

            <View style={[styles.sectionContainer, { backgroundColor: colorScheme === 'light' ? '#f2f2f2' : COLORS.darkPrimary }]}>
                <FlatList
                    data={categories}
                    renderItem={({ item }) => (
                        //@ts-ignore
                        <TouchableOpacity onPress={() => navigation.navigate('phrases_content_screen', { slug: item.name })} activeOpacity={0.7} style={[styles.itemContainer, { backgroundColor: colorScheme === 'light' ? '#fff' : COLORS.darkSecondary }]} asChild>
                            <View style={styles.item}>
                                <Text style={styles.item_icon}>{item.name.toUpperCase()}</Text>
                                <Text style={[styles.title, { color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText }]}>Idioms and Phrases Beginning With ‘{item.name.toUpperCase()}’</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={{ gap: 10 }}
                />
            </View>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1
    },
    itemContainer: {
        flexDirection: "row",
        margin: 5,
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
        width: 45,
        height: 45,
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#fff',
        fontFamily: FONT.medium,
    },
    title: {
        fontSize: 14,
        fontFamily: FONT.medium,
        color: "#1f1f1f",
    },
});

export default Index