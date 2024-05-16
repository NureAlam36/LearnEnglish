import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Stack } from 'expo-router'

import { COLORS, FONT } from "@/constants";
import { questions as DATA } from '@/data/bcs-english.json';

import MCQComponent from '@/components/MCQComponent';
import { useColorSchemeContext } from "@/context/ColorSchemeContext";

import ContentHeader from '@/components/Headers/ContentHeader';

const MCQs = () => {
    const route = useRoute();
    const { id } = route.params as any;
    const { colorScheme } = useColorSchemeContext();
    const [isLoading, setIsLoading] = useState(true);
    const [questions, setQuestions] = useState<any>([]);


    const [pageTitle, setPageTitle] = useState<any>('BCS Preliminary');


    useEffect(() => {
        const itemsPerPage = 200;
        const startIdx = (id - 1) * itemsPerPage;
        const endIdx = id * itemsPerPage - 1;
        // setPageTitle();
        setPageTitle(`BCS Preliminary ${itemsPerPage * id - itemsPerPage + 1}- ${itemsPerPage * id}`);

        const currentPageData = DATA.slice(startIdx, endIdx + 1);

        setQuestions(currentPageData);
        setIsLoading(false);
    }, []);

    return (
        <React.Fragment>
            <ContentHeader title={pageTitle} />
            {
                !isLoading ? <View style={[styles.sectionContainer, { backgroundColor: colorScheme === 'light' ? '#f2f2f2' : COLORS.darkPrimary }]}>
                    <FlatList
                        data={questions}
                        renderItem={({ item, index }) => (
                            <MCQComponent item={item} index={index} />
                        )}
                        keyExtractor={(item) => item.id.toString()}
                        contentContainerStyle={{ gap: 10 }}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
                    : <ActivityIndicator size="large" color={COLORS.primary} />
            }

        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        padding: 10,
    }
})

export default MCQs;
