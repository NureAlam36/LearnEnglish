import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { COLORS, FONT } from "@/constants";
import { Stack } from 'expo-router'
import { useRoute } from '@react-navigation/native';

import { Link } from "expo-router";

import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import { conversations } from '@/data/conversations.json';
import ContentHeader from "@/components/Headers/ContentHeader";

const StudyPhases = ({ navigation }: any) => {
    const route = useRoute();
    const { colorScheme } = useColorSchemeContext();
    const { slug } = route.params as any;

    const [topics, setTopics] = useState<any>([]);

    useEffect(() => {
        conversations.filter((conversation) => {
            if (conversation.link === slug) {

                conversation.topics.forEach((item) => {
                    const topic = {
                        id: item.id,
                        name: item.name,
                    }

                    // console.log(topic);
                    setTopics((topics: any) => [...topics, topic]);
                })
            }
        })
    }, [])

    // console.log(topics);

    return (
        <React.Fragment>
            <ContentHeader title="Chapter List" />

            <View style={[styles.sectionContainer, { backgroundColor: colorScheme === 'light' ? '#f2f2f2' : COLORS.darkPrimary }]}>
                <Text style={[styles.sectionTitle, { color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText }]}>Chapter List</Text>
                <FlatList
                    data={topics}
                    renderItem={({ item, index }) => (
                        // @ts-ignore
                        <TouchableOpacity onPress={() => navigation.navigate('conversations_screen', { id: item.id, slug: slug })} activeOpacity={0.7} style={[styles.itemContainer, { backgroundColor: colorScheme === 'light' ? '#fff' : COLORS.darkSecondary }]}>
                            <View style={styles.item}>
                                <View style={styles.itemIcon}>
                                    <Text
                                        style={styles.itemSn}>{item.id}</Text>
                                </View>
                                <Text style={[styles.title, { color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText }]}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ gap: 10 }}
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
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        margin: 5,
    },
    itemIcon: {
        width: 45,
        height: 45,
        backgroundColor: '#5495fb',
        borderRadius: 10,
    },
    itemSn: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 16,
        fontFamily: FONT.medium,
        color: '#fff',
    },
    title: {
        fontSize: 14,
        fontFamily: FONT.medium,
        textAlign: 'center'
    },
});

export default StudyPhases;
