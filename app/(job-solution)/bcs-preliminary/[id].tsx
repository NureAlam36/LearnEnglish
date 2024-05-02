import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
// @ts-ignore
import { RadioButtonGroup, RadioButtonItem } from 'expo-radio-button';
import { COLORS, FONT } from "@/constants";
import { questions as DATA } from '@/data/bcs-english.json';

import { LinearGradient } from 'expo-linear-gradient';

const MCQs = () => {
    const route = useRoute();
    const { id } = route.params as any;
    const [isLoading, setIsLoading] = useState(true);
    const [questions, setQuestions] = useState<any>([]);

    const optionKeys = ['A', 'B', 'C', 'D', 'E'];

    const [selectedOptions, setSelectedOptions] = useState<any>({}); // State to store selected options
    const [resultMessages, setResultMessages] = useState<any>({}); // State to store result messages for each MCQ

    useEffect(() => {
        const itemsPerPage = 200;
        const startIdx = (id - 1) * itemsPerPage;
        const endIdx = id * itemsPerPage - 1;

        const currentPageData = DATA.slice(startIdx, endIdx + 1);

        setQuestions(currentPageData);
        setIsLoading(false);
    }, []);

    // Function to handle option selection
    const handleOptionSelect = (questionId: number, optionIndex: number, answer: string) => {
        setSelectedOptions({ ...selectedOptions, [questionId]: optionIndex });

        // Compare selected option with correct answer
        const item = questions.find((item: any) => item.id === questionId);

        const selectedValue = item.options[optionIndex];

        const isCorrect = selectedValue === item?.answer;

        // Set result message for the selected MCQ
        setResultMessages({ ...resultMessages, [questionId]: isCorrect ? "Correct!" : "Incorrect!" });
    };

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
        <View style={styles.sectionContainer}>
            <FlatList
                data={questions}
                renderItem={({ item, index }) => (
                    <TouchableOpacity style={{}} activeOpacity={0.7}>
                        <View style={styles.item}>
                            <LinearGradient
                                colors={['#1e3c72', '#1e3c72', '#2a5298']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                style={{ minWidth: 100, paddingHorizontal: 10, paddingVertical: 6, borderBottomRightRadius: 10, borderTopLeftRadius: 10, position: 'absolute' }}
                            >
                                <Text style={[styles.fontMedium, { color: 'white' }]}>Question: {index + 1}</Text>
                            </LinearGradient>
                            <Text style={[styles.title, styles.fontMedium, { paddingTop: 20, marginBottom: 10, fontSize: 17 }]}><Text style={styles.fontBold}>{index + 1}.</Text> {item.question}</Text>
                            <RadioButtonGroup
                                containerStyle={{ gap: 10 }}
                                selected={selectedOptions[item.id]} // Set the selected option for this question
                                onSelected={(value: any) => handleOptionSelect(item.id, value, item.answer)} // Call handleOptionSelect when an option is selected
                                radioBackground="green"
                            >
                                {item.options.map((option: any, optionIndex: any) => (
                                    <RadioButtonItem
                                        key={optionIndex}
                                        value={optionIndex}
                                        label={
                                            <View style={{ display: 'flex', flexDirection: 'row', gap: 5, marginLeft: 8 }}>
                                                <Text style={[styles.fontMedium, { fontSize: 15, color: selectedOptions[item.id] === optionIndex ? (resultMessages[item.id] === "Correct!" ? "green" : "red") : "#1f1f1f" }]}>{optionKeys[optionIndex]})</Text>
                                                <Text style={[styles.fontMedium, { fontSize: 15, color: selectedOptions[item.id] === optionIndex ? (resultMessages[item.id] === "Correct!" ? "green" : "red") : "#1f1f1f" }]}>{option}</Text>
                                            </View>
                                        }
                                    />
                                ))}
                            </RadioButtonGroup>

                            {/* <Text style={[styles.title, { marginTop: 15 }]}>
                                <Text style={[styles.fontMedium, { color: resultMessages[item.id] === "Correct!" ? "green" : "#1f1f1f" }]}>Correct Answer:</Text> <Text style={[{ color: resultMessages[item.id] === "Correct!" ? "green" : (selectedOptions[item.id] === item.answerIndex ? "red" : "#1f1f1f") }]}>{item.options[item.answerIndex]}</Text>
                            </Text> */}

                            {/* Display result message for the selected MCQ */}
                            {/* {resultMessages[item.id] && <Text style={{ fontFamily: FONT.regular, fontSize: 16, color: resultMessages[item.id] === "Correct!" ? "green" : "red" }}>Your answer is correct!</Text>} */}
                            <View style={{ paddingTop: 10 }}>
                                {resultMessages[item.id] && resultMessages[item.id] === "Correct!" && <Text style={[styles.title, styles.fontMedium, { color: "#01636a" }]}>Your answer is correct!</Text>}
                                {resultMessages[item.id] && resultMessages[item.id] === "Incorrect!" && <Text style={[styles.title, { color: "green" }]}><Text style={styles.fontMedium}>Correct Answer:</Text> {item.answer}</Text>}
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ gap: 10 }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        padding: 10,
    },
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10
    },
    title: {
        fontSize: 16,
        color: "#1f1f1f",
    },
    fontRegular: {
        fontFamily: FONT.regular,
    },
    fontMedium: {
        fontFamily: FONT.medium,
    },
    fontBold: {
        fontFamily: FONT.bold,
    }
})

export default MCQs;
