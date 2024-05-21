import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import { COLORS, FONT } from "../../../constants";
import { Feather } from '@expo/vector-icons';

import { useColorSchemeContext } from "@/context/ColorSchemeContext";

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import ContentHeader from "@/components/Headers/ContentHeader";

import shortStories from '@/data/story/short-stories.json';
import motivationalStories from '@/data/story/motivational-stories.json';

// Create a stack navigator
const Stack = createStackNavigator();

import Story from './story';

const Categories = ({ navigation, route }: any) => {
    const { slug } = route.params;
    const { colorScheme, theme } = useColorSchemeContext();
    const [categoryName, setCategoryName] = useState<string>('');
    const [stories, setStories] = useState<any>([]);
    const [categories, setCategories] = useState<any>([]);



    useEffect(() => {
        switch (slug) {
            case 'short-stories':
                setStories(shortStories);
                break;
            case 'motivational-stories':
                setStories(motivationalStories);
                break;
            default:
                break;
        }
    }, []);

    useEffect(() => {
        stories.forEach((story: any) => {
            const category = {
                id: story.id,
                title: story.title
            }


            setCategoryName("Short Stories")
            setCategories((categories: any) => [...categories, category]);
        })
    }, [stories])

    return (
        <React.Fragment>
            <ContentHeader title={categoryName} />

            <View style={[styles.container, { backgroundColor: colorScheme === 'light' ? '#f2f2f2' : COLORS.darkPrimary }]}>
                {/* <Text style={[styles.sectionTitle, { color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText }]}></Text> */}
                <FlatList
                    data={categories}
                    renderItem={({ item }) => (
                        // @ts-ignore
                        <TouchableOpacity onPress={() => navigation.navigate('story_content_screen', { slug: slug, id: item.id })} activeOpacity={0.7} style={[styles.itemContainer, { backgroundColor: colorScheme === 'light' ? '#fff' : COLORS.darkSecondary, borderWidth: 1, borderColor: theme.borderColor }]}>
                            <View style={styles.item}>
                                <View style={styles.imageWraper}>
                                    <Image
                                        style={styles.image}
                                        source={require('@/assets/images/reading-a-book.png')}
                                        resizeMode="contain"
                                    />
                                </View>
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
        paddingHorizontal: 5,
        paddingVertical: 5
    },
    item: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    imageWraper: {
        display: "flex",
        alignItems: "center",
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 5,
    },
    title: {
        fontSize: 14,
        fontFamily: FONT.medium,
        color: "#1f1f1f",
    }
});

export default Categories;
