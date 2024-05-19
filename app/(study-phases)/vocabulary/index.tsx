import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Dimensions, ActivityIndicator, Alert } from 'react-native';
import { Stack } from 'expo-router';

import { COLORS, FONT } from "@/constants";
import { useColorSchemeContext } from "@/context/ColorSchemeContext";

import vocabularyData from '@/data/vocabulary.json';

import ContentHeader from "@/components/Headers/ContentHeader";

const Index = () => {
    const { colorScheme, theme } = useColorSchemeContext();
    const [isLoading, setIsLoading] = useState(true);
    const screenWidth = Dimensions.get('window').width;
    const adjustedWidth = screenWidth - 50;
    const [vocabulary, setVocabulary] = useState<any>([]);

    useEffect(() => {
        setVocabulary(vocabularyData);
    }, []);

    const MemoizedListItem = React.memo(({ item, index }: any) => (
        <TouchableOpacity style={[styles.item, { backgroundColor: index % 2 === 0 ? (colorScheme === 'light' ? theme.bgPrimary : theme.mainBg) : theme.bgSecondary }]} activeOpacity={0.7}>
            <View style={{ transform: 'rotate(180deg)' }}>
                <Image source={require('@/assets/images/arrow-right.png')} style={{ width: 20, height: 20 }} />
            </View>
            <Text style={[styles.text, { width: adjustedWidth, color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText }]}>{item.en} - {item.bn}</Text>
        </TouchableOpacity>
    ));

    const renderFooter = () => isLoading && <View style={{ paddingVertical: 15 }}><ActivityIndicator size="large" color="#0000ff" /></View>;

    return (
        <React.Fragment>
            <ContentHeader title="Vocabulary" />

            <View style={{ flex: 1, backgroundColor: colorScheme === 'light' ? '#fff' : COLORS.darkSecondary }}>
                <FlatList
                    data={vocabulary}
                    renderItem={({ item, index }) => <MemoizedListItem item={item} index={index} />}
                    keyExtractor={(item: any) => item.id.toString()}
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
});

export default Index;
