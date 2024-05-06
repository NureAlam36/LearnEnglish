import React, { useState, useEffect } from 'react'
import { View, Text, Image, FlatList, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import { Stack } from 'expo-router'

import { COLORS, FONT } from "@/constants";

import { useRoute } from '@react-navigation/native';
import idiomsAndPhrases from '@/data/idioms-and-phrases.json';

const index = () => {
    const route = useRoute();
    const { slug } = route.params as any;

    const screenWidth = Dimensions.get('window').width;
    const adjustedWidth = screenWidth - 50;

    const [topicName, setTopicName] = useState<any>('');
    const [phrases, setPhrases] = useState<any>([]);

    useEffect(() => {
        idiomsAndPhrases.forEach(item => {
            if (item.category === slug) {
                setTopicName(item.category);
                setPhrases(item.phrases);
            }
        });
    }, []);

    return (
        <React.Fragment>
            <Stack.Screen
                options={{
                    title: 'Vocabulary',
                    headerTitle: () => <Text style={{ fontSize: 18, color: 'white', fontFamily: FONT.medium, }}>Beginning With ‘{topicName.toUpperCase()}’</Text>,
                    headerStyle: { backgroundColor: '#5495fb' }
                }}
            />
            <View>
                <FlatList
                    data={phrases}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity style={[styles.item, index % 2 === 0 ? styles.itemEven : null]} activeOpacity={0.7}>
                            <View style={{ transform: 'rotate(180deg)' }}>
                                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3298/3298618.png' }} style={{ width: 20, height: 20 }} />
                            </View>
                            <View style={{ width: adjustedWidth }}>
                                <Text style={[styles.text, { marginBottom: 8 }]}>{item.en} - {item.bn}</Text>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>Example:</Text> {item.example}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    item: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        alignItems: 'flex-start',
        flex: 1,
    },
    text: {
        fontSize: 16,
        fontFamily: FONT.regular,
        color: COLORS.gray,
    },
    itemEven: {
        backgroundColor: '#f6f6f6',
    }
})

export default index