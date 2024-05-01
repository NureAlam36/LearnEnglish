import React from 'react'
import { View, Image, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { Stack } from 'expo-router'
import { Link } from "expo-router";
import { COLORS, FONT, icons, images, SIZES } from "@/constants";


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

const index = () => {
    return (
        <React.Fragment>
            <Stack.Screen
                options={{
                    headerTitle: () => <Text style={{ fontSize: 18, color: 'white', fontFamily: FONT.medium, }}>Grammer</Text>,
                    headerStyle: { backgroundColor: '#5495fb' }
                }}
            />
            <View style={{ backgroundColor: '#f2f2f2', flex: 1 }}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => (
                        //@ts-ignore
                        <Link href={`/grammer/${item.link}`} style={styles.itemContainer} asChild>
                            <TouchableOpacity activeOpacity={0.7}>
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
        color: "#1f1f1f",
    },
});

export default index