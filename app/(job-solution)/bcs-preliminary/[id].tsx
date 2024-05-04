import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Stack } from 'expo-router'

import { COLORS, FONT } from "@/constants";
import { questions as DATA } from '@/data/bcs-english.json';

import MCQComponent from '@/components/MCQComponent';

const MCQs = () => {
    const route = useRoute();
    const { id } = route.params as any;
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

    // Function to handle option selection


    if (isLoading) {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <ActivityIndicator size="large" color={COLORS.primary} />
            </View>
        );
    }

    return (
        <React.Fragment>
            <Stack.Screen
                options={{
                    headerTitle: () => <Text style={{ fontSize: 18, color: 'white', fontFamily: FONT.medium, }}>{pageTitle}</Text>,
                    headerStyle: { backgroundColor: '#5495fb' }
                }}
            />
            <View style={styles.sectionContainer}>
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
