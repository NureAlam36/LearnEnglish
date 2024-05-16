import React, { useState, useEffect } from 'react'
import { Text, FlatList, View, StyleSheet } from 'react-native';
import { Stack } from 'expo-router'
import * as Speech from 'expo-speech';
import { COLORS, FONT } from '@/constants';
import { AntDesign, Feather } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import conversations from '@/data/conversations.json';
import ContentHeader from '@/components/Headers/ContentHeader';

const Conversation = () => {
    const route = useRoute();
    const { colorScheme } = useColorSchemeContext();
    const { id, slug } = route.params as any;

    const [topicName, setTopicName] = useState<any>([]);
    const [dialog, setDialog] = useState<any>([]);

    useEffect(() => {
        conversations.conversations.forEach(conversation => {
            if (conversation.link === slug) {
                const topic = conversation.topics.find(topic => topic.id === Number(id));

                if (topic) {
                    setTopicName(topic.name);
                    setDialog(topic.dialog);
                }
            }
        });
    }, []);

    const speakText = (text: string, person: string) => {
        if (person === '1st') {
            Speech.speak(text, { language: 'en', pitch: 0.8, rate: 0.8 });
        } else {
            Speech.speak(text, { language: 'en', pitch: 1.2, rate: 0.8 });
        }

    };


    const speakConversation = async () => {
        // Loop through each conversation item
        for (let i = 0; i < dialog.length; i++) {
            const conversation = dialog[i];

            if (i % 2 === 0) {
                await Speech.speak(conversation.text, { language: 'en', pitch: 0.8, rate: 0.8 });
            } else {
                await Speech.speak(conversation.text, { language: 'en', pitch: 1.2, rate: 0.8 });
            }
        }
    };

    return (
        <React.Fragment>
            {/* <Stack.Screen
                options={{
                    title: 'Daily Use Sentences',
                    headerTitle: () => <Text style={{ fontSize: 18, color: 'white', fontFamily: FONT.medium, }}>{topicName}</Text>,
                    headerStyle: { backgroundColor: '#5495fb' },
                    headerRight: () => <Feather name="play-circle" size={32} color="white" onPress={() => speakConversation()} />
                }}
            /> */}

            <ContentHeader title={topicName} />

            <View style={{ flex: 1, paddingHorizontal: 15, backgroundColor: colorScheme === 'light' ? '#f2f2f2' : COLORS.darkPrimary }}>
                <FlatList
                    data={dialog}
                    renderItem={({ item, index }) => (
                        <View style={[styles.item]}>
                            {
                                index % 2 === 0 ? <View style={{ alignItems: 'center', gap: 12, flexDirection: 'row' }}>
                                    <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                                        <Text style={{ fontFamily: FONT.medium, fontSize: 15, color: colorScheme === 'light' ? COLORS.gray : COLORS.gray2 }}>{item.speaker} :</Text>
                                        <AntDesign name="sound" size={24} color={COLORS.gray2} onPress={() => speakText(item.text, '1st')} />
                                    </View>
                                    <View style={{ backgroundColor: COLORS.primary, maxWidth: '90%', padding: 10, borderRadius: 5 }}>
                                        <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                                            <Text style={[styles.title, { color: 'white' }]}>{item.text}</Text>
                                        </View>
                                    </View>
                                </View>
                                    : <View style={{ alignItems: 'center', gap: 12, flexDirection: 'row' }}>
                                        <View style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                                            <Text style={{ fontFamily: FONT.medium, fontSize: 15, color: colorScheme === 'light' ? COLORS.gray : COLORS.gray2 }}>{item.speaker} :</Text>
                                            <AntDesign name="sound" size={24} color={COLORS.gray2} onPress={() => speakText(item.text, '2nd')} />
                                        </View>
                                        <View style={{ backgroundColor: '#eaeef6', maxWidth: '90%', padding: 10, borderRadius: 5 }}>
                                            <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                                                <Text style={styles.title}>{item.text}</Text>
                                            </View>
                                        </View>
                                    </View>
                            }
                        </View>
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
        display: 'flex',
        marginVertical: 15,
    },
    title: {
        fontSize: 16,
        color: COLORS.gray,
        fontFamily: FONT.regular,
    }
});

export default Conversation