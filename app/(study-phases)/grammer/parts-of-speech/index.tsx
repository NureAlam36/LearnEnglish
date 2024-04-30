import React from 'react'
import { View, Image, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { Stack } from 'expo-router'
import { Link } from "expo-router";
import { COLORS, FONT, icons, images, SIZES } from "@/constants";


const DATA = [
    {
        id: 1,
        title: "Nouns",
        link: "numns",
    },
    {
        id: 2,
        title: "Pronouns",
        link: "pronouns",
    },
    {
        id: 3,
        title: "Adjectives",
        link: "adjectives",
    },
    {
        id: 4,
        title: "Verbs",
        link: "verbs",
    },
    {
        id: 5,
        title: "Adverbs",
        link: "adverbs",
    },
    {
        id: 6,
        title: "Prepositions",
        link: "prepositions",
    },
    {
        id: 7,
        title: "Conjunctions",
        link: "conjunctions",
    },
    {
        id: 8,
        title: "Interjections",
        link: "interjections",
    },
];

const index = () => {
    return (
        <React.Fragment>
            <Stack.Screen
                options={{
                    headerTitle: () => <Text style={{ fontSize: 18, color: 'white', fontFamily: FONT.medium, }}>Parts of Speech</Text>,
                    headerStyle: { backgroundColor: '#5495fb' }
                }}
            />
            <View style={{ backgroundColor: '#f2f2f2', flex: 1 }}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => (
                        //@ts-ignore
                        <Link href={`/grammer/parts-of-speech/${item.link}`} style={styles.itemContainer} asChild>
                            <TouchableOpacity>
                                <View style={styles.item}>
                                    <Text style={styles.item_icon}>{item.title.charAt(0)}</Text>
                                    <Text style={styles.title}>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        </Link>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={{ paddingBottom: 20 }}
                />
            </View>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 10,
        marginBottom: -15,
    },
    sectionTitle: {
        fontSize: 18,
        marginBottom: 10,
        fontFamily: FONT.bold,
    },
    itemContainer: {
        flexDirection: "row",
        backgroundColor: "#fff",
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
        width: 38,
        height: 37,
        backgroundColor: '#5495fb',
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
});

export default index