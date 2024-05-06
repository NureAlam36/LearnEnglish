import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { Stack } from 'expo-router';
import { Link } from "expo-router";
import { COLORS, FONT } from "@/constants";
import { AntDesign } from '@expo/vector-icons';

import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import famousQuotations from '@/data/famous-quotations.json'

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
        title: "Movies and \nTV shows",
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
        title: "Health \nand fitness",
        link: "famous-quotations",
        image: "https://cdn-icons-png.flaticon.com/512/6314/6314351.png",
    }
];

const quotes = [
    {
        "id": "1",
        "english": "The only way to do great work is to love what you do.",
        "bangla": "ভাল কাজ করার একমাত্র উপায় হলো সেটা যে আপনি যা কাজ করেন তা ভালবাসেন।",
        "author": "Steve Jobs"
    },
    {
        "id": "2",
        "english": "In the end, it's not the years in your life that count. It's the life in your years.",
        "bangla": "শেষে, আপনার জীবনে কত বছর আছে তা গণনা করা যায় না। আপনার জীবনে কতটা জীবন আছে তা গণনা করা যায়।",
        "author": "Abraham Lincoln"
    },
    {
        "id": "3",
        "english": "Life is what happens when you're busy making other plans.",
        "bangla": "জীবন এটা কি ঘটে যখন আপনি অন্য পরিকল্পনা করতে ব্যস্ত।",
        "author": "John Lennon"
    },
    {
        "id": "4",
        "english": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "bangla": "জীবনে সর্বোত্তম মহিমা তাতে নেই যে কখনই পড়া না হওয়া, বরং পড়তে পড়তে উঠে ওঠা।",
        "author": "Nelson Mandela"
    },
    {
        "id": "5",
        "english": "Believe you can and you're halfway there.",
        "bangla": "আপনি যে করতে পারেন তার বিশ্বাস করুন এবং আপনি অর্ধেকপথে আছেন।",
        "author": "Theodore Roosevelt"
    }
]

const StudyPhases = () => {
    const { colorScheme } = useColorSchemeContext();
    const [categories, setCategories] = useState<any>([]);

    useEffect(() => {
        famousQuotations.forEach((quotations) => {
            const category = {
                name: quotations.category,
                link: quotations.link,
                image: quotations.image || 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
            }

            setCategories((categories: any) => [...categories, category]);
        })
    }, [])

    return (
        <React.Fragment>
            <Stack.Screen
                options={{
                    title: 'Famous Quotations',
                    headerTitle: () => <Text style={{ fontSize: 18, color: 'white', fontFamily: FONT.medium }}>BCS 10th - 45th</Text>,
                    headerStyle: { backgroundColor: '#5495fb' }
                }}
            />
            <View style={{ flex: 1, backgroundColor: colorScheme === 'light' ? '#f2f2f2' : COLORS.darkPrimary }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        Array.from({ length: 36 }, (_, index) => (
                            <Link href={`/bcs-solution/${index + 10}`} key={index} style={[styles.itemContainer, { backgroundColor: colorScheme === 'light' ? '#fff' : COLORS.darkSecondary }]} asChild>
                                <TouchableOpacity activeOpacity={0.7}>
                                    <View style={styles.item}>
                                        <View style={styles.imageWraper}>
                                            <Image
                                                style={styles.image}
                                                source={{ uri: "https://smartstore.beijerelectronics.com/-/media/inRiver/1/0/4/7/8/10478-1123.ashx?as=0&h=458&la=en&w=458&hash=8C51FFFFE43A1FEA225C1DB2F2DBC87D3F751AD0 " }}
                                                resizeMode="contain"
                                            />
                                        </View>
                                        <View>
                                            <Text style={[styles.title, { color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText }]}>{index + 10}th BCS Preliminary</Text>
                                            <Text style={[styles.title, { color: COLORS.gray2, marginTop: 3 }]}>English</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </Link>
                        ))
                    }
                </ScrollView>
            </View>
        </React.Fragment >
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        margin: 5,
        borderRadius: 5,
        padding: 5,
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        margin: 5,
        gap: 10,
    },
    imageWraper: {
        width: 50,
        height: 50,
        backgroundColor: '#e5f5ff',
        padding: 8,
        borderRadius: 10,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    title: {
        fontSize: 14,
        fontFamily: FONT.medium,
        color: "#1f1f1f",
    },
    sliderButton: {
        color: 'red', // Change this color as per your preference
        fontSize: 24,
    },
});

export default StudyPhases;
