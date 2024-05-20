import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';

import { COLORS, FONT } from "@/constants";
import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import { useCountryContext } from '@/context/CountryContext';

import vocabularyData from '@/data/en-vocabulary.json';

import ContentHeader from "@/components/Headers/ContentHeader";

// https://www.talkenglish.com/vocabulary/top-2000-vocabulary.aspx

const Index = () => {
    const { colorScheme, theme } = useColorSchemeContext();
    const { country } = useCountryContext();
    const [isLoading, setIsLoading] = useState(true);
    const screenWidth = Dimensions.get('window').width;
    const adjustedWidth = screenWidth - 50;
    const [vocabulary, setVocabulary] = useState<any>([]);

    useEffect(() => {
        setVocabulary(vocabularyData);
    }, []);

    const renderFooter = () => isLoading && <View style={{ paddingVertical: 15 }}><ActivityIndicator size="large" color="#0000ff" /></View>;

    return (
        <React.Fragment>
            <ContentHeader title="Vocabulary" />

            <View style={{ flexDirection: 'column', flex: 1, backgroundColor: theme.mainBg }}>
                <View style={[styles.tableHead, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: theme.mainBg, borderBottomWidth: 1, borderBottomColor: theme.borderColor }]}>
                    <Text style={{ flex: 1, maxWidth: 100, color: theme.textSecondary, fontFamily: FONT.bold }}>Word</Text>
                    <Text style={{ flex: 1, color: theme.textSecondary, fontFamily: FONT.bold }}>Type</Text>
                </View>
                <FlatList
                    data={vocabulary}
                    renderItem={({ item, index }) => (
                        <View style={[styles.tableData, { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: index % 2 === 0 ? theme.bgSecondary : null }]}>
                            <View style={{ width: 100 }}>
                                <Text style={{ color: theme.textSecondary, fontFamily: FONT.regular }}>{item.word}</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={{ color: theme.textSecondary, fontFamily: FONT.regular }}>{item.type}</Text>
                            </View>
                        </View>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                    ListFooterComponent={renderFooter}
                    onEndReached={() => setIsLoading(false)}
                    onEndReachedThreshold={0.1}
                />
            </View>

        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    item: {
        paddingVertical: 15,
        paddingHorizontal: 10,
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
    },
    tableHead: { height: 45, padding: 10, fontFamily: FONT.bold },
    tableData: { padding: 10, fontFamily: FONT.regular }
});

export default Index;
