import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import * as Speech from 'expo-speech';
import { MaterialIcons } from '@expo/vector-icons';

import { useRoute } from '@react-navigation/native';
import dailyUseSentences from '@/data/daily-use-sentences.json'
import { useColorSchemeContext } from "@/context/ColorSchemeContext";

import { COLORS, FONT } from "@/constants";
import ContentHeader from '@/components/Headers/ContentHeader';

const Index = () => {
    const route = useRoute();
    const { colorScheme } = useColorSchemeContext();
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


    return (
        <React.Fragment>
            <ContentHeader title={topicName} />

            <View style={{ flex: 1, backgroundColor: colorScheme === 'light' ? '#fff' : COLORS.darkSecondary }}>
                <FlatList
                    data={sentences}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item, index }) => (
                        <View style={[styles.item, { backgroundColor: index % 2 === 0 ? (colorScheme === 'light' ? '#f6f6f6' : COLORS.darkPrimary) : '' }]}>
                            <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', gap: 8 }} activeOpacity={0.6}>
                                <Text style={{ fontSize: 17, fontFamily: FONT.regular, color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText }}>{index + 1}.</Text>
                                <View style={{}}>
                                    <Text style={{ fontSize: 17, fontFamily: FONT.regular, marginBottom: 10, color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText }}>{item.english}</Text>
                                    <Text style={{ fontSize: 16, fontFamily: FONT.regular, color: colorScheme === 'light' ? COLORS.gray : COLORS.lightText }}>{item.bangla}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => speakText(item.english)}>
                                <MaterialIcons name="multitrack-audio" size={24} color={colorScheme === 'light' ? COLORS.gray : COLORS.lightText} />
                            </TouchableOpacity>
                        </View>
                    )
                    }
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </React.Fragment >
    )
}

const styles = StyleSheet.create({
    item: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        // borderBottomWidth: 1,
        // borderBottomColor: '#e1e1e1'
    },

    // itemEven: {
    //     backgroundColor: '#f6f6f6',
    // }
})

export default Index