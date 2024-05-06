import React, { useState, useEffect } from 'react'
import { View, Image, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { Stack } from 'expo-router'
import { Link } from "expo-router";
import { COLORS, FONT } from "@/constants";
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
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
    const route = useRoute();
    const { slug } = route.params as any;
    const { colorScheme } = useColorSchemeContext();
    const [exercises, setExercises] = useState<any>([]);



    useEffect(() => {
        FillInTheBlank.forEach((item) => {
            item.lesions.forEach((exercise) => {
                setExercises((exercises: any) => [...exercises, {
                    id: exercise.id,
                    name: exercise.name,
                    length: exercise.exercises.length,
                }]);
            })
        })
    }, []);

    // console.log(exercises);

    return (
        <React.Fragment>
            <Stack.Screen
                options={{
                    headerTitle: () => <Text style={{ fontSize: 18, color: 'white', fontFamily: FONT.medium, }}>Daily use Sentences</Text>,
                    headerStyle: { backgroundColor: '#5495fb' }
                }}
            />
            <View style={[styles.sectionContainer, { backgroundColor: colorScheme === 'light' ? '#fff' : COLORS.darkPrimary }]}>
                {/* <View>
                    <Text style={[styles.sectionTitle, { color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText }]}>Categories</Text>
                </View> */}
                <FlatList
                    data={exercises}
                    renderItem={({ item, index }) => (
                        //@ts-ignore
                        <Link href={`/exercise/fill_in_the_blank/${slug}/${item.id}`} style={[styles.itemContainer, { backgroundColor: colorScheme === 'light' ? '#f7f9fc' : COLORS.darkSecondary }]} asChild>
                            <TouchableOpacity activeOpacity={0.7}>
                                <View style={styles.item}>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                        <View style={styles.item_icon_wraper}>
                                            <Image style={styles.item_icon} source={{ uri: "https://i.pinimg.com/originals/ff/fb/48/fffb481f28a395fb8ad93e7ecd8f2ec7.png" }} />
                                        </View>
                                        <View>
                                            <Text style={[styles.title, { color: colorScheme === 'light' ? COLORS.gray : COLORS.lightText }]}>Exercise {index + 1}</Text>
                                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                                <Ionicons name="reader-outline" size={18} color={COLORS.gray2} />
                                                <Text style={{ color: COLORS.gray2, textAlign: 'center', fontSize: 14, fontFamily: FONT.medium }}>{exercises.length} Exercise</Text>
                                            </View>

                                        </View>
                                    </View>
                                    <View style={{ display: 'flex', flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                                        <View>
                                            <Text style={{ borderWidth: 1, borderColor: COLORS.primary, color: COLORS.gray, paddingVertical: 5, paddingHorizontal: 10, borderRadius: 5 }}>Start</Text>
                                        </View>
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
        fontSize: 18,
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

    },
    item_icon: {
        width: 35,
        height: 35,
    },
    title: {
        fontSize: 16,
        fontFamily: FONT.medium,
        marginBottom: 3
    },
});

export default index