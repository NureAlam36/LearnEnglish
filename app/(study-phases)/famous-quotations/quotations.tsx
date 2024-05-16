import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { Stack } from 'expo-router'
import { Clipboard } from 'react-native';
import { COLORS, FONT } from "@/constants";
import { Feather } from '@expo/vector-icons';

import { useRoute } from '@react-navigation/native';
import famousQuotations from '@/data/famous-quotations.json'

import { useColorSchemeContext } from "@/context/ColorSchemeContext";

import ContentHeader from "@/components/Headers/ContentHeader";

const index = () => {
    const route = useRoute();
    const { colorScheme } = useColorSchemeContext();
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
            <ContentHeader title={topicName} />

            <View style={[styles.sectionContainer, { backgroundColor: colorScheme === 'light' ? '#f2f2f2' : COLORS.darkPrimary }]}>
                <FlatList
                    data={quotes}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={[styles.item, { backgroundColor: colorScheme === 'light' ? '#fff' : COLORS.darkSecondary }]} activeOpacity={0.7}>
                            <Text style={[styles.textEn, { color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText }]}>“{item.english}”</Text>
                            <Text style={[styles.textBn, { color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText }]}>“{item.bangla}”</Text>
                            <Text style={[styles.textAuthor, { color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText }]}>– {item.author}</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'center', borderWidth: 1, width: 75, borderColor: '#5495fb', borderRadius: 5, paddingVertical: 3 }}>
                                <Feather name="copy" size={18} color={colorScheme === 'light' ? COLORS.gray : '#fff'} />
                                <Text style={{ fontFamily: FONT.regular, color: colorScheme === 'light' ? COLORS.gray : '#fff' }} onPress={() => copyToClipboard(item.english, item.bangla, item.author)}>Copy</Text>
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
        flex: 1,
        marginBottom: -20
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        borderRadius: 10,
        padding: 15,
        margin: 5,
    },
    textEn: {
        fontSize: 18,
        marginBottom: 10,
    },
    textBn: {
        fontSize: 16,
    },
    textAuthor: {
        textAlign: 'right',
        marginBottom: -5
    },
});

export default index