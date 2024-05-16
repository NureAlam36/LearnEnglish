import React from 'react'
import { View, Image, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
// import { Stack } from 'expo-router'
import { Link } from "expo-router";
import { COLORS, FONT } from "@/constants";
import { useColorSchemeContext } from "@/context/ColorSchemeContext";

import ContentHeader from "@/components/Headers/ContentHeader";

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

// Create a stack navigator
const Stack = createStackNavigator();

const DATA = [
    {
        id: 0,
        title: "Person",
        screen: "person_screen",
    },
    {
        id: 1,
        title: "Tenses",
        screen: "tenses_screen",
    },
    {
        id: 2,
        title: "Parts of Speech",
        screen: "partsOfSpeech_screen",
    },
    {
        id: 3,
        title: "Articles",
        screen: "articles_screen",
    },
    {
        id: 4,
        title: "Right Forms of Verbs",
        screen: "rightFormsOfVerbs_screen",
    },
    {
        id: 5,
        title: "Sentence",
        screen: "sentence_screen",
    },
    {
        id: 6,
        title: "Number",
        screen: "number_screen",
    },
    {
        id: 7,
        title: "Word",
        screen: "word_screen",
    },
    {
        id: 8,
        title: "Modifiers",
        screen: "modifiers_screen",
    },
    {
        id: 9,
        title: "Narration",
        screen: "narration_screen",
    },
];

import Person from "./(pages)/person";
import Tenses from "./tenses/index";
import PartsOfSpeech from "./(pages)/parts-of-speech";
import Articles from "./(pages)/articles";
import RightFormsOfVerbs from "./(pages)/right-forms-of-verbs";
import Sentence from "./(pages)/sentence";
import Number from "./(pages)/number";
// import Word from "./(pages)/word";
import Modifiers from "./(pages)/modifiers";
import Narration from "./(pages)/narration";


const TabOneScreen = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                ...TransitionPresets.SlideFromRightIOS,
                headerShown: false
            }}>

            <Stack.Screen name="grammer_topics_screen" component={Index} options={{ header: () => <ContentHeader title="Grammer" />, headerShown: true }} />
            <Stack.Screen name="person_screen" component={Person} options={{ header: () => <ContentHeader title="Person" />, headerShown: true }} />
            <Stack.Screen name="tenses_screen" component={Tenses} />
            <Stack.Screen name="partsOfSpeech_screen" component={PartsOfSpeech} options={{ header: () => <ContentHeader title="Parts of speech" />, headerShown: true }} />
            <Stack.Screen name="articles_screen" component={Articles} options={{ header: () => <ContentHeader title="Article" />, headerShown: true }} />
            <Stack.Screen name="rightFormsOfVerbs_screen" component={RightFormsOfVerbs} options={{ header: () => <ContentHeader title="Right Form of Verbs" />, headerShown: true }} />
            <Stack.Screen name="sentence_screen" component={Sentence} options={{ header: () => <ContentHeader title="Sentence" />, headerShown: true }} />
            <Stack.Screen name="number_screen" component={Number} options={{ header: () => <ContentHeader title="Number" />, headerShown: true }} />
            {/* <Stack.Screen name="word_screen" component={Word} options={{ header: () => <ContentHeader title="Word" />, headerShown: true }} /> */}
            <Stack.Screen name="modifiers_screen" component={Modifiers} options={{ header: () => <ContentHeader title="Modifiers" />, headerShown: true }} />
            <Stack.Screen name="narration_screen" component={Narration} options={{ header: () => <ContentHeader title="Narration" />, headerShown: true }} />
        </Stack.Navigator>
    );
}

const Index = ({ navigation }: any) => {
    const { colorScheme } = useColorSchemeContext();

    return (
        <React.Fragment>
            <View style={{ flex: 1, backgroundColor: colorScheme === 'light' ? '#f2f2f2' : COLORS.darkPrimary }}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => (
                        //@ts-ignore
                        <TouchableOpacity onPress={() => navigation.navigate(item.screen)} activeOpacity={0.7} style={[styles.itemContainer, { backgroundColor: colorScheme === 'light' ? '#fff' : COLORS.darkSecondary }]}>
                            <View style={styles.item}>
                                <Text style={styles.item_icon}>{item.title.charAt(0)}</Text>
                                <Text style={[styles.title, { color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText }]}>{item.title}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={{ padding: 10, gap: 10 }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 10,
    },
    sectionTitle: {
        fontSize: 18,
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
    },
});

export default TabOneScreen