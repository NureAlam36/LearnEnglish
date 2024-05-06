import React from 'react'
import { View, Image, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { Stack } from 'expo-router'
import { Link } from "expo-router";
import { COLORS, FONT } from "@/constants";
import { useColorSchemeContext } from "@/context/ColorSchemeContext";

const DATA = [
    {
        id: 0,
        title: "Person",
        link: "person",
    },
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
        title: "Sentence",
        link: "sentence",
    },
    {
        id: 6,
        title: "Number",
        link: "number",
    },
    {
        id: 7,
        title: "Word",
        link: "word",
    },
    {
        id: 8,
        title: "Modifiers",
        link: "modifiers",
    },
    {
        id: 9,
        title: "Narration",
        link: "narration",
    },
];

const index = () => {
    const { colorScheme } = useColorSchemeContext();

    return (
        <React.Fragment>
            <Stack.Screen
                options={{
                    headerTitle: () => <Text style={{ fontSize: 18, color: 'white', fontFamily: FONT.medium, }}>Grammer</Text>,
                    headerStyle: { backgroundColor: '#5495fb' }
                }}
            />
            <View style={{ flex: 1, backgroundColor: colorScheme === 'light' ? '#f2f2f2' : COLORS.darkPrimary }}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => (
                        //@ts-ignore
                        <Link href={`/grammer/${item.link}`} style={[styles.itemContainer, { backgroundColor: colorScheme === 'light' ? '#fff' : COLORS.darkSecondary }]} asChild>
                            <TouchableOpacity activeOpacity={0.7}>
                                <View style={styles.item}>
                                    <Text style={styles.item_icon}>{item.title.charAt(0)}</Text>
                                    <Text style={[styles.title, { color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText }]}>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        </Link>
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
        backgroundColor: '#5495fb',
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

export default index