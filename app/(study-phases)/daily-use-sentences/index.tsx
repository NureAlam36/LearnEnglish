import React, { useState, useEffect } from 'react'
import { View, Image, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { Link } from "expo-router";
import { COLORS, FONT } from "@/constants";
import { FontAwesome } from '@expo/vector-icons';
import { useColorSchemeContext } from "@/context/ColorSchemeContext";

import dailyUseSentences from '@/data/daily-use-sentences.json'

import ContentHeader from "@/components/Headers/ContentHeader";

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

// Create a stack navigator
const Stack = createStackNavigator();

import Sentences from './sentences'

const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "Introducing yourself",
        link: "tenses",
        image: "https://cdn-icons-png.flaticon.com/512/5238/5238399.png"
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f61",
        title: "Greetings",
        link: "parts-of-speech",
        image: "https://cdn-icons-png.flaticon.com/512/5238/5238399.png"
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f62",
        title: "Saying goodbye",
        link: "articles",
        image: "https://cdn-icons-png.flaticon.com/512/5238/5238399.png"
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Learning English",
        link: "right-forms-of-verbs",
        image: "https://cdn-icons-png.flaticon.com/512/5238/5238399.png"
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f64",
        title: "Small talk",
        link: "number",
        image: "https://cdn-icons-png.flaticon.com/512/5238/5238399.png"
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f65",
        title: "Agreeing or disagreeing",
        link: "word",
        image: "https://cdn-icons-png.flaticon.com/512/5238/5238399.png"
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f66",
        title: "Family and friends",
        link: "modifiers",
        image: "https://cdn-icons-png.flaticon.com/512/5238/5238399.png"
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f66",
        title: "Work",
        link: "narration",
        image: "https://cdn-icons-png.flaticon.com/512/5238/5238399.png"
    }, {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f66",
        title: "School",
        link: "narration",
        image: "https://cdn-icons-png.flaticon.com/512/5238/5238399.png"
    }, {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f66",
        title: "Health",
        link: "narration",
        image: "https://cdn-icons-png.flaticon.com/512/5238/5238399.png"
    }, {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f66",
        title: "Weather",
        link: "narration",
        image: "https://cdn-icons-png.flaticon.com/512/5238/5238399.png"
    }, {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f66",
        title: "Saying thank you",
        link: "narration",
        image: "https://cdn-icons-png.flaticon.com/512/5238/5238399.png"
    }, {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f66",
        title: "Apologizing",
        link: "narration",
        image: "https://cdn-icons-png.flaticon.com/512/5238/5238399.png"
    }, {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f66",
        title: "Inviting to eat",
        link: "narration",
        image: "https://cdn-icons-png.flaticon.com/512/5238/5238399.png"
    }, {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f66",
        title: "Eating at a Restaurant",
        link: "narration",
        image: "https://cdn-icons-png.flaticon.com/512/5238/5238399.png"
    }
];

const Index = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                ...TransitionPresets.SlideFromRightIOS,
                headerShown: false
            }}>

            <Stack.Screen name="phrasesCategory_screen" component={Categories} options={{ header: () => <ContentHeader title="Daily Use Sentences" />, headerShown: true }} />
            <Stack.Screen name="dailyUseSentences_screen" component={Sentences} />
        </Stack.Navigator>
    );
}

const Categories = ({ navigation }: any) => {
    const { colorScheme } = useColorSchemeContext();
    const [categories, setCategories] = useState<any>([]);

    useEffect(() => {
        dailyUseSentences.forEach((sentences) => {
            const category = {
                name: sentences.category,
                link: sentences.link,
                totalItems: sentences.sentences.length || 0,
                image: sentences.image || 'https://www.nuiteq.com/hubfs/Sentences.png'
            }

            setCategories((categories: any) => [...categories, category]);
        })
    }, [])

    // console.log(categories);

    return (
        <View style={[styles.sectionContainer, { backgroundColor: colorScheme === 'light' ? '#f2f2f2' : COLORS.darkPrimary }]}>
            <View style={{}}>
                <Text style={[styles.sectionTitle, { color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText }]}>Categories</Text>
            </View>
            <FlatList
                data={categories}
                renderItem={({ item }) => (
                    //@ts-ignore
                    <TouchableOpacity onPress={() => navigation.navigate('dailyUseSentences_screen', { slug: item.link })} activeOpacity={0.7} style={[styles.itemContainer, { backgroundColor: colorScheme === 'light' ? '#fff' : COLORS.darkSecondary }]}>
                        <View style={styles.item}>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                                <View style={styles.item_icon_wraper}>
                                    <Image style={styles.item_icon} source={{ uri: item.image }} />
                                </View>
                                <View>
                                    <Text style={[styles.title, { color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText }]}>{item.name}</Text>
                                    <Text style={{ color: COLORS.gray2 }}>{item.totalItems} Sentences</Text>
                                </View>
                            </View>
                            <FontAwesome name="arrow-circle-right" size={24} color={COLORS.primary} />
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{ paddingBottom: 20, gap: 10 }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        padding: 10
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
        padding: 5,
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

    },
    item_icon: {
        width: 30,
        height: 30,
    },
    title: {
        fontSize: 14,
        fontFamily: FONT.medium,
        marginBottom: 3
    },
});

export default Index