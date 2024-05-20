import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
// import { Stack } from 'expo-router'
import { Link } from "expo-router";
import { COLORS, FONT } from "@/constants";
import { useColorSchemeContext } from "@/context/ColorSchemeContext";

import ContentHeader from "@/components/Headers/ContentHeader";

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import { Feather } from '@expo/vector-icons';
import { useCountryContext } from '@/context/CountryContext';

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

import BnPerson from "./bn/person";
import BnTenses from "./bn/tenses/index";
import BnPartsOfSpeech from "./bn/parts-of-speech";
import BnArticles from "./bn/articles";
import BnRightFormsOfVerbs from "./bn/right-forms-of-verbs";
import BnSentence from "./bn/sentence";
import BnNumber from "./bn/number";
// import Word from "./(pages)/word";
import BnModifiers from "./bn/modifiers";
import BnNarration from "./bn/narration";

import EnPerson from "./en/person";
import EnTenses from "./en/tenses/index";
import EnPartsOfSpeech from "./en/parts-of-speech";
import EnArticles from "./en/articles";
import EnRightFormsOfVerbs from "./en/right-forms-of-verbs";
import EnSentence from "./en/sentence";
import EnNumber from "./en/number";
// import Word from "./(pages)/word";
import EnModifiers from "./en/modifiers";
import EnNarration from "./en/narration";

// Create a stack navigator
const Stack = createStackNavigator();

const TabOneScreen = () => {
    const { country } = useCountryContext();

    return (
        <Stack.Navigator
            screenOptions={{
                ...TransitionPresets.SlideFromRightIOS,
                headerShown: false
            }}>

            <Stack.Screen name="grammer_topics_screen" component={Index} options={{ header: () => <ContentHeader title="Grammer" />, headerShown: true }} />
            <Stack.Screen name="person_screen" component={country === 'Bangladesh' ? BnPerson : EnPerson} options={{ header: () => <ContentHeader title="Person" />, headerShown: true }} />
            <Stack.Screen name="tenses_screen" component={country === 'Bangladesh' ? BnTenses : EnTenses} />
            <Stack.Screen name="partsOfSpeech_screen" component={country === 'Bangladesh' ? BnPartsOfSpeech : EnPartsOfSpeech} options={{ header: () => <ContentHeader title="Parts of speech" />, headerShown: true }} />
            <Stack.Screen name="articles_screen" component={country === 'Bangladesh' ? BnArticles : EnArticles} options={{ header: () => <ContentHeader title="Article" />, headerShown: true }} />
            <Stack.Screen name="rightFormsOfVerbs_screen" component={country === 'Bangladesh' ? BnRightFormsOfVerbs : EnRightFormsOfVerbs} options={{ header: () => <ContentHeader title="Right Form of Verbs" />, headerShown: true }} />
            <Stack.Screen name="sentence_screen" component={country === 'Bangladesh' ? BnSentence : EnSentence} options={{ header: () => <ContentHeader title="Sentence" />, headerShown: true }} />
            <Stack.Screen name="number_screen" component={country === 'Bangladesh' ? BnNumber : EnNumber} options={{ header: () => <ContentHeader title="Number" />, headerShown: true }} />
            {/* <Stack.Screen name="word_screen" component={Word} options={{ header: () => <ContentHeader title="Word" />, headerShown: true }} /> */}
            <Stack.Screen name="modifiers_screen" component={country === 'Bangladesh' ? BnModifiers : EnModifiers} options={{ header: () => <ContentHeader title="Modifiers" />, headerShown: true }} />
            <Stack.Screen name="narration_screen" component={country === 'Bangladesh' ? BnNarration : EnNarration} options={{ header: () => <ContentHeader title="Narration" />, headerShown: true }} />
        </Stack.Navigator>
    );
}

const Index = ({ navigation }: any) => {
    const { colorScheme, theme } = useColorSchemeContext();

    return (
        <React.Fragment>
            <View style={{ flex: 1, backgroundColor: colorScheme === 'light' ? '#f2f2f2' : COLORS.darkPrimary }}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => (
                        //@ts-ignore
                        <TouchableOpacity onPress={() => navigation.navigate(item.screen)} activeOpacity={0.7} style={[styles.itemContainer, { backgroundColor: colorScheme === 'light' ? '#fff' : COLORS.darkSecondary, borderWidth: 1, borderColor: theme.borderColor }]}>
                            <View style={styles.item}>
                                <Text style={styles.item_icon}>{item.title.charAt(0)}</Text>
                                <Text style={[styles.title, { color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText }]}>{item.title}</Text>
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
                                <Feather
                                    name="chevron-right"
                                    size={20}
                                    color={COLORS.primary}
                                />
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
        alignItems: 'center',
        borderRadius: 5,
        padding: 10,
    },
    item: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
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