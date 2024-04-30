import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { Stack } from 'expo-router'
import * as Speech from 'expo-speech';
import { MaterialIcons } from '@expo/vector-icons';

import { useRoute } from '@react-navigation/native';
import dailyUseSentences from '@/data/daily-use-sentences.json'

import { COLORS, FONT, icons, images, SIZES } from "@/constants";

const DATA = [
    {
        id: 1,
        english: 'What is your phone number?',
        bangla: 'আপনার ফোন নাম্বার কি?',
    },
    {
        id: 2,
        english: 'My phone number is...',
        bangla: 'আমার ফোন নাম্বার ...',
    },
    {
        id: 3,
        english: 'What is your email address?',
        bangla: 'আপনার ইমেইল ঠিকানা কি?',
    },
    {
        id: 4,
        english: 'My email address is...',
        bangla: 'আমার ইমেইল ঠিকানা ...',
    },
    {
        id: 5,
        english: 'What is the time?',
        bangla: 'এখন কত বাজে?',
    },
    {
        id: 6,
        english: 'It is ... o\'clock',
        bangla: 'এটা ... ঘণ্টা',
    },
    {
        id: 7,
        english: 'How much is this?',
        bangla: 'এটা কত?',
    },
    {
        id: 8,
        english: 'Where is the bathroom?',
        bangla: 'বাথরুম কোথায়?',
    },
    {
        id: 9,
        english: 'How do I get to ...?',
        bangla: 'আমি ... কিভাবে পৌঁছাব?',
    },
    {
        id: 10,
        english: 'Can you help me?',
        bangla: 'আপনি আমাকে সাহায্য করতে পারবেন?',
    },
];

const index = () => {
    const route = useRoute();
    const { slug } = route.params as any;

    const [topicName, setTopicName] = useState<any>([]);
    const [sentences, setSentences] = useState<any>([]);

    useEffect(() => {
        dailyUseSentences.forEach(sentences => {
            if (sentences.link === slug) {
                setTopicName(sentences.category);
                setSentences(sentences.sentences);
            }
        });
    }, []);

    const speakText = (text: string) => {
        Speech.speak(text, { language: 'en' });
    };

    console.log(sentences);


    return (
        <React.Fragment>
            <Stack.Screen
                options={{
                    title: 'Daily Use Sentences',
                    headerTitle: () => <Text style={{ fontSize: 18, color: 'white', fontFamily: FONT.medium, }}>{topicName}</Text>,
                    headerStyle: { backgroundColor: '#5495fb' }
                }}
            />
            <View>
                <FlatList
                    data={sentences}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item, index }) => (
                        <View style={[styles.item, index % 2 === 0 ? styles.itemEven : null]}>
                            <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', gap: 8 }} activeOpacity={0.6}>
                                <Text style={{ fontSize: 17, fontFamily: FONT.regular, color: COLORS.black }}>{index + 1}.</Text>
                                <View style={{}}>
                                    <Text style={{ fontSize: 17, fontFamily: FONT.regular, color: COLORS.black, marginBottom: 10 }}>{item.english}</Text>
                                    <Text style={{ fontSize: 16, fontFamily: FONT.regular, color: COLORS.gray }}>{item.bangla}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => speakText(item.english)}>
                                <MaterialIcons name="multitrack-audio" size={24} color={COLORS.gray} />
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    item: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1'
    },

    itemEven: {
        backgroundColor: '#f6f6f6',
    }
})

export default index