import React, { useState, useEffect } from 'react'
import { View, Image, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { Stack } from 'expo-router'
import { Clipboard } from 'react-native';
import { COLORS, FONT, icons, images, SIZES } from "@/constants";
import { Feather } from '@expo/vector-icons';

import { useRoute } from '@react-navigation/native';
import famousQuotations from '@/data/famous-quotations.json'

const index = () => {
    const route = useRoute();
    const { slug } = route.params as any;

    const [topicName, setTopicName] = useState<any>([]);
    const [quotes, setQuotes] = useState<any>([]);

    useEffect(() => {
        famousQuotations.forEach(quotes => {
            if (quotes.link === slug) {
                setTopicName(quotes.category);
                setQuotes(quotes.quotes);
            }
        });
    }, []);

    const copyToClipboard = (englishQuote: string, banglaQuote: string, author: string) => {
        const fullText = `"${englishQuote}"\n"${banglaQuote}"\n– ${author}`;
        Clipboard.setString(fullText);
        // Optionally, you can provide some feedback to the user that the text has been copied
        alert('Quote copied to clipboard!');
    };

    return (
        <React.Fragment>
            <Stack.Screen
                options={{
                    headerTitle: () => <Text style={{ fontSize: 18, color: 'white', fontFamily: FONT.medium, }}>{topicName}</Text>,
                    headerStyle: { backgroundColor: '#5495fb' }
                }}
            />
            <View style={styles.sectionContainer}>
                <FlatList
                    data={quotes}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.slide} activeOpacity={0.7}>
                            <Text style={styles.slideTextEnglish}>“{item.english}”</Text>
                            <Text style={styles.slideTextBangla}>“{item.bangla}”</Text>
                            <Text style={styles.slideTextAuthor}>– {item.author}</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'center', borderWidth: 1, width: 75, borderColor: COLORS.gray2, borderRadius: 5, paddingVertical: 3 }}>
                                <Feather name="copy" size={18} color="black" />
                                <Text style={{ fontFamily: FONT.regular, color: COLORS.gray }} onPress={() => copyToClipboard(item.english, item.bangla, item.author)}>Copy</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
        backgroundColor: '#f2f2f2',
        flex: 1,
        padding: 5,
        marginBottom: -20
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        borderRadius: 10,
        padding: 15,
        margin: 5,
        backgroundColor: '#fff'
    },
    slideTextEnglish: {
        color: COLORS.gray,
        fontSize: 18,
        marginBottom: 10,
    },
    slideTextBangla: {
        color: COLORS.gray,
        fontSize: 16,
    },
    slideTextAuthor: {
        textAlign: 'right',
        color: COLORS.gray,
        marginBottom: -5
    },
});

export default index