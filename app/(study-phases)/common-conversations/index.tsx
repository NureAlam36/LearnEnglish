import React, { useState, useEffect } from "react";
import {
    View,
    Image,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { COLORS, FONT, icons, images, SIZES } from "../../../constants";
import { Stack } from 'expo-router'
import { useColorSchemeContext } from "@/context/ColorSchemeContext";

import { Link } from "expo-router";

import { conversations } from '@/data/conversations.json';

const DATA = [
    {
        id: "1",
        title: "Travel",
        link: "travel",
        image:
            "https://cdn.iconscout.com/icon/premium/png-256-thumb/english-book-3465842-2900552.png",
    },
    {
        id: "2",
        title: "Food",
        link: "food",
        image:
            "https://cdn.iconscout.com/icon/premium/png-256-thumb/vocabulary-3599386-3015185.png?f=webp",
    },
    {
        id: "3",
        title: "Books",
        link: "books",
        image: "https://cdn-icons-png.flaticon.com/512/4039/4039248.png",
    },
    {
        id: "4",
        title: "Movies and TV shows",
        link: "story",
        image: "https://cdn-icons-png.flaticon.com/512/8750/8750683.png",
    },
    {
        id: "5",
        title: "Hobbies",
        link: "essential-phrases",
        image: "https://www.southlakebaptist.com/wp-content/uploads/Words-Icon.png",
    },
    {
        id: "6",
        title: "Technology",
        link: "common-conversations",
        image: "https://cdn-icons-png.flaticon.com/512/608/608968.png",
    },
    {
        id: "7",
        title: "Music",
        link: "proverbs",
        image:
            "https://overviewbible.com/wp-content/uploads/2014/06/proverbs-free-bible-icon.png-300x300.png",
    },
    {
        id: "8",
        title: "Health and fitness",
        link: "famous-quotations",
        image: "https://cdn-icons-png.flaticon.com/512/6314/6314351.png",
    },
    {
        id: "9",
        title: "Pets",
        link: "proverbs",
        image:
            "https://overviewbible.com/wp-content/uploads/2014/06/proverbs-free-bible-icon.png-300x300.png",
    },
    {
        id: "10",
        title: "Relationships",
        link: "proverbs",
        image:
            "https://overviewbible.com/wp-content/uploads/2014/06/proverbs-free-bible-icon.png-300x300.png",
    },
    {
        id: "11",
        title: "Education",
        link: "proverbs",
        image:
            "https://overviewbible.com/wp-content/uploads/2014/06/proverbs-free-bible-icon.png-300x300.png",
    },
    {
        id: "12",
        title: "Career",
        link: "proverbs",
        image:
            "https://overviewbible.com/wp-content/uploads/2014/06/proverbs-free-bible-icon.png-300x300.png",
    },
    {
        id: "13",
        title: "Current events",
        link: "proverbs",
        image:
            "https://overviewbible.com/wp-content/uploads/2014/06/proverbs-free-bible-icon.png-300x300.png",
    },
    {
        id: "14",
        title: "Nature and environment",
        link: "proverbs",
        image:
            "https://overviewbible.com/wp-content/uploads/2014/06/proverbs-free-bible-icon.png-300x300.png",
    },
    {
        id: "15",
        title: "Art and creativity",
        link: "proverbs",
        image:
            "https://overviewbible.com/wp-content/uploads/2014/06/proverbs-free-bible-icon.png-300x300.png",
    },
    {
        id: "16",
        title: "Culture",
        link: "proverbs",
        image:
            "https://overviewbible.com/wp-content/uploads/2014/06/proverbs-free-bible-icon.png-300x300.png",
    }, {
        id: "17",
        title: "Philosophy and spirituality",
        link: "proverbs",
        image:
            "https://overviewbible.com/wp-content/uploads/2014/06/proverbs-free-bible-icon.png-300x300.png",
    }, {
        id: "18",
        title: "Finance",
        link: "proverbs",
        image:
            "https://overviewbible.com/wp-content/uploads/2014/06/proverbs-free-bible-icon.png-300x300.png",
    }, {
        id: "18",
        title: "Fashion",
        link: "proverbs",
        image:
            "https://overviewbible.com/wp-content/uploads/2014/06/proverbs-free-bible-icon.png-300x300.png",
    }, {
        id: "20",
        title: "Social media",
        link: "proverbs",
        image:
            "https://overviewbible.com/wp-content/uploads/2014/06/proverbs-free-bible-icon.png-300x300.png",
    },
];

const StudyPhases = () => {
    const { colorScheme } = useColorSchemeContext();
    const [categories, setCategories] = useState<any>([]);

    useEffect(() => {
        conversations.forEach((conversation) => {
            const category = {
                name: conversation.category,
                link: conversation.link,
                image: conversation.image || 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
            }

            setCategories((categories: any) => [...categories, category]);
        })
    }, [])

    console.log(categories);


    return (
        <React.Fragment>
            <Stack.Screen
                options={{
                    title: 'Common Conversations',
                    headerTitle: () => <Text style={{ fontSize: 18, color: 'white', fontFamily: FONT.medium, }}>Common Conversations</Text>,
                    headerStyle: { backgroundColor: '#5495fb' }
                }}
            />
            <View style={[styles.sectionContainer, { backgroundColor: colorScheme === 'light' ? '#f2f2f2' : COLORS.darkSecondary }]}>
                <Text
                    style={[
                        styles.sectionTitle,
                        {
                            color: colorScheme === "light" ? COLORS.darkText : COLORS.lightText,
                        },
                    ]}
                >Topics</Text>
                <FlatList
                    data={categories}
                    renderItem={({ item }) => (
                        // @ts-ignore
                        <Link href={`/common-conversations/${item.link}`} style={[styles.itemContainer, { backgroundColor: colorScheme === 'light' ? '#fff' : COLORS.darkPrimary }]} asChild>
                            <TouchableOpacity activeOpacity={0.7}>
                                <View style={styles.item}>
                                    <View style={[styles.imageWraper, { backgroundColor: colorScheme === 'light' ? '#e5f5ff' : COLORS.darkSecondary }]}>
                                        <Image
                                            style={styles.image}
                                            source={{ uri: item.image }}
                                            resizeMode="contain"
                                        />
                                    </View>
                                    <Text style={[styles.title, { color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText }]}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        </Link>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={2}
                    contentContainerStyle={{ gap: 10 }}
                    columnWrapperStyle={{ gap: 10 }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        padding: 10,
    },
    sectionTitle: {
        fontSize: 18,
        marginBottom: 10,
        fontFamily: FONT.bold,
    },
    itemContainer: {
        flex: 1,
        borderRadius: 5,
        padding: 5,
    },
    item: {
        flex: 1,
        display: "flex",
        gap: 10,
        alignItems: "center",
        justifyContent: "center",
        margin: 5,
    },
    imageWraper: {
        width: '100%',
        height: 80,
        padding: 15,
        borderRadius: 10,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    title: {
        fontSize: 14,
        fontFamily: FONT.medium,
        color: COLORS.gray,
        textAlign: 'center'
    },
});

export default StudyPhases;
