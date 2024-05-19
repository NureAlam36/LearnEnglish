import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import Swiper from 'react-native-swiper';
import { Link } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, FONT } from "../../../constants";
import { AntDesign, Feather } from '@expo/vector-icons';

import famousQuotations from '@/data/famous-quotations.json'
import { useColorSchemeContext } from "@/context/ColorSchemeContext";

import ContentHeader from "@/components/Headers/ContentHeader";

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

// Create a stack navigator
const Stack = createStackNavigator();

import Quotations from './quotations';

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

const Index = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                ...TransitionPresets.SlideFromRightIOS,
                headerShown: false
            }}>

            <Stack.Screen name="phrasesCategory_screen" component={FamousQuotations} options={{ header: () => <ContentHeader title="Idioms and Phrases" />, headerShown: true }} />
            <Stack.Screen name="quotations_screen" component={Quotations} />
        </Stack.Navigator>
    );
}

const FamousQuotations = ({ navigation }: any) => {
    const { colorScheme, theme } = useColorSchemeContext();
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
    }, []);

    return (
        <React.Fragment>
            <ContentHeader title="Famous Quotations" />

            <View style={[styles.container, { backgroundColor: colorScheme === 'light' ? '#f2f2f2' : COLORS.darkPrimary }]}>
                <LinearGradient
                    colors={['#1e3c72', '#1e3c72', '#2a5298']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.swiper}
                >
                    <Swiper showsButtons={false} prevButton={<AntDesign name="left" size={24} color="white" />} nextButton={<AntDesign name="right" size={24} color="white" />} paginationStyle={styles.paginationContainer}>
                        {quotes.map((item) => (
                            <View style={styles.slide} key={item.id}>
                                <Text style={styles.slideTextEnglish}>“{item.english}”</Text>
                                <Text style={styles.slideTextBangla}>“{item.bangla}”</Text>
                                <Text style={styles.slideTextAuthor}>– {item.author}</Text>
                            </View>
                        ))}
                    </Swiper>
                </LinearGradient>
                <Text style={[styles.sectionTitle, { color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText }]}>Topics</Text>
                <FlatList
                    data={categories}
                    renderItem={({ item }) => (
                        // @ts-ignore
                        <TouchableOpacity onPress={() => navigation.navigate('quotations_screen', { slug: item.link })} activeOpacity={0.7} style={[styles.itemContainer, { backgroundColor: colorScheme === 'light' ? '#fff' : COLORS.darkSecondary, borderWidth: 1, borderColor: theme.borderColor }]}>
                            <View style={styles.item}>
                                <View style={styles.imageWraper}>
                                    <Image
                                        style={styles.image}
                                        source={{ uri: item.image }}
                                        resizeMode="contain"
                                    />
                                </View>
                                <Text style={[styles.title, { color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText }]}>{item.name}</Text>
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
                                <Feather name="chevron-right" size={20} color={COLORS.primary} />
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={2}
                    contentContainerStyle={{ paddingBottom: 20, gap: 10 }}
                    showsVerticalScrollIndicator={false}
                    columnWrapperStyle={{ gap: 10 }}
                />
            </View>
        </React.Fragment>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    sectionTitle: {
        fontSize: 18,
        marginBottom: 10,
        fontFamily: FONT.bold,
    },
    swiper: {
        height: 220,
        marginBottom: 20,
        borderRadius: 10
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        borderRadius: 10,
        paddingHorizontal: 10,
        margin: 5,
    },
    slideTextEnglish: {
        color: '#f5f5f5',
        fontSize: 18,
        marginBottom: 10,
    },
    slideTextBangla: {
        color: '#dcdcdc',
        fontSize: 16,
    },
    slideTextAuthor: {
        textAlign: 'right',
        color: '#f5f5f5',
    },
    paginationContainer: {
        position: 'absolute',
        bottom: 15,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#fff",
        borderRadius: 5,
        padding: 10
    },
    item: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        gap: 10
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

export default Index;
