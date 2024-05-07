import React, { useState, useEffect } from 'react'
import { View, Image, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { Stack } from 'expo-router'
import { Link } from "expo-router";
import { COLORS, FONT } from "@/constants";
import { Octicons, MaterialIcons } from '@expo/vector-icons';
import { useColorSchemeContext } from "@/context/ColorSchemeContext";

import FillInTheBlank from '@/data/fill-in-the-blank.json';

const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "Prepositions",
        link: "prepositions",
        image: "https://i.pinimg.com/originals/ff/fb/48/fffb481f28a395fb8ad93e7ecd8f2ec7.png"
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f61",
        title: "Articles",
        link: "articles",
        image: "https://i.pinimg.com/originals/ff/fb/48/fffb481f28a395fb8ad93e7ecd8f2ec7.png"
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f62",
        title: "Modifiers",
        link: "modifiers",
        image: "https://i.pinimg.com/originals/ff/fb/48/fffb481f28a395fb8ad93e7ecd8f2ec7.png"
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Pronouns",
        link: "pronouns",
        image: "https://i.pinimg.com/originals/ff/fb/48/fffb481f28a395fb8ad93e7ecd8f2ec7.png"
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f64",
        title: "\"Wh\" questions",
        link: "number",
        image: "https://i.pinimg.com/originals/ff/fb/48/fffb481f28a395fb8ad93e7ecd8f2ec7.png"
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f65",
        title: "Subject-Verb Agreement",
        link: "word",
        image: "https://i.pinimg.com/originals/ff/fb/48/fffb481f28a395fb8ad93e7ecd8f2ec7.png"
    }
];

const index = () => {
    const { colorScheme } = useColorSchemeContext();
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
            <Stack.Screen
                options={{
                    headerTitle: () => <Text style={{ fontSize: 18, color: 'white', fontFamily: FONT.medium, }}>Fill In The Blank</Text>,
                    headerStyle: { backgroundColor: '#5495fb' }
                }}
            />
            <View style={[styles.sectionContainer, { backgroundColor: colorScheme === 'light' ? '#fff' : COLORS.darkPrimary }]}>
                <View style={{ marginBottom: 10, marginTop: 8, marginHorizontal: 15, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <Octicons name="checklist" size={24} color={COLORS.gray} />
                    <Text style={[styles.sectionTitle, { color: colorScheme === 'light' ? COLORS.gray : COLORS.lightText }]}>Lesions</Text>
                </View>
                <FlatList
                    data={lesions}
                    renderItem={({ item }) => (
                        //@ts-ignore
                        <Link href={`/exercise/fill_in_the_blank/${item.link}`} style={[styles.itemContainer, { backgroundColor: colorScheme === 'light' ? '#f7f9fc' : COLORS.darkSecondary }]} asChild>
                            <TouchableOpacity activeOpacity={0.7}>
                                <View style={styles.item}>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                        <View style={styles.item_icon_wraper}>
                                            <Text style={styles.item_icon}>{item.name.charAt(0)}</Text>
                                        </View>
                                        <View>
                                            <Text style={[styles.title, { color: colorScheme === 'light' ? COLORS.gray : COLORS.lightText }]}>{item.name}</Text>
                                        </View>
                                    </View>
                                    <View style={{ borderWidth: 1, borderColor: COLORS.primary, paddingVertical: 2, paddingHorizontal: 5, borderRadius: 5 }}>
                                        <MaterialIcons name="arrow-forward-ios" size={20} color={COLORS.gray} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </Link>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={{ gap: 10 }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        padding: 5,
    },
    sectionTitle: {
        fontSize: 17,
        marginTop: 5,
        marginBottom: 10,
        fontFamily: FONT.bold,
    },
    itemContainer: {
        borderRadius: 10,
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
        fontSize: 14,
        fontFamily: FONT.medium,
        marginBottom: 3
    },
});

export default index