import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import { COLORS, FONT } from "../../../constants";
import { Feather } from '@expo/vector-icons';

import famousQuotations from '@/data/famous-quotations.json'
import { useColorSchemeContext } from "@/context/ColorSchemeContext";

import ContentHeader from "@/components/Headers/ContentHeader";

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

// Create a stack navigator
const Stack = createStackNavigator();

import Topics from './topics';
import Story from './story';

const Index = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                ...TransitionPresets.SlideFromRightIOS,
                headerShown: false
            }}>

            <Stack.Screen name="phrasesCategory_screen" component={Categories} options={{ header: () => <ContentHeader title="Idioms and Phrases" />, headerShown: true }} />
            <Stack.Screen name="quotations_screen" component={Topics} />
            <Stack.Screen name="story_content_screen" component={Story} />
        </Stack.Navigator>
    );
}

const DATA = [
    {
        "id": 1,
        "category": "Sort Stories",
        "link": "short-stories",
        "image": "https://englisheasypractice.com/wp-content/uploads/2020/06/English-short-stories-download.png"
    }, {
        "id": 2,
        "category": "Motivational Stories",
        "link": "motivational-stories",
        "image": "https://englisheasypractice.com/wp-content/uploads/2020/06/English-short-stories-download.png"
    }, {
        "id": 3,
        "category": "Moral Stories",
        "link": "moral-stories",
        "image": "https://englisheasypractice.com/wp-content/uploads/2020/06/English-short-stories-download.png"
    }
]

const Categories = ({ navigation }: any) => {
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
            <ContentHeader title="Stories" />

            <View style={[styles.container, { backgroundColor: colorScheme === 'light' ? '#f2f2f2' : COLORS.darkPrimary }]}>
                <Text style={[styles.sectionTitle, { color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText }]}>Topics</Text>
                <FlatList
                    data={DATA}
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
                                <View>
                                    <Text style={[styles.title, { color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText, marginBottom: 3 }]}>{item.category}</Text>
                                    <Text style={[styles.title, { color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText, opacity: 0.7, fontSize: 12 }]}>10 Stories</Text>
                                </View>
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
                    numColumns={1}
                    contentContainerStyle={{ paddingBottom: 20, gap: 10 }}
                    showsVerticalScrollIndicator={false}
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
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#fff",
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    item: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    imageWraper: {
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 5,
    },
    title: {
        fontSize: 14,
        fontFamily: FONT.medium,
        color: "#1f1f1f",
    }
});

export default Index;
