import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'

// @ts-ignore
import { RadioButtonGroup, RadioButtonItem } from 'expo-radio-button';
import { COLORS, FONT } from "@/constants";
import { LinearGradient } from 'expo-linear-gradient';

import { useColorSchemeContext } from "@/context/ColorSchemeContext";

const MCQComponent = ({ item, index }: any) => {
    const { colorScheme } = useColorSchemeContext();

    const [selectedOptions, setSelectedOptions] = useState<any>({});
    const [resultMessages, setResultMessages] = useState<any>({});

    const optionKeys = ['A', 'B', 'C', 'D', 'E'];

    const handleOptionSelect = (questionId: number, optionIndex: number, answer: string) => {
        setSelectedOptions({ ...selectedOptions, [questionId]: optionIndex });

        // Compare selected option with correct answer
        // const item = questions.find((item: any) => item.id === questionId);

        const selectedValue = item.options[optionIndex];

        const isCorrect = selectedValue === item?.answer;

        // Set result message for the selected MCQ
        setResultMessages({ ...resultMessages, [questionId]: isCorrect ? "Correct!" : "Incorrect!" });
    };
    return (
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
                selected={selectedOptions[item.id]}
                onSelected={(value: any) => handleOptionSelect(item.id, value, item.answer)}
                radioBackground="green"
            >
                {item.options.map((option: any, optionIndex: any) => (
                    <RadioButtonItem
                        key={optionIndex}
                        value={optionIndex}
                        label={
                            <View style={{ display: 'flex', flexDirection: 'row', gap: 5, marginLeft: 8 }}>
                                <Text style={[styles.fontMedium, { fontSize: 15, color: selectedOptions[item.id] === optionIndex ? (resultMessages[item.id] === "Correct!" ? "green" : "red") : COLORS.gray }]}>{optionKeys[optionIndex]})</Text>
                                <Text style={[styles.fontMedium, { fontSize: 15, color: selectedOptions[item.id] === optionIndex ? (resultMessages[item.id] === "Correct!" ? "green" : "red") : COLORS.gray }]}>{option}</Text>
                            </View>
                        }
                    />
                ))}
            </RadioButtonGroup>

            <View style={{ paddingTop: 10 }}>
                {resultMessages[item.id] && resultMessages[item.id] === "Correct!" && <Text style={[styles.title, styles.fontMedium, { color: "#01636a" }]}>Your answer is correct!</Text>}
                {resultMessages[item.id] && resultMessages[item.id] === "Incorrect!" && <Text style={[styles.title, { color: "green" }]}><Text style={styles.fontMedium}>Correct Answer:</Text> {item.answer}</Text>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10
    },
    title: {
        fontSize: 16,
        color: "#1f1f1f",
    },
    fontMedium: {
        fontFamily: FONT.medium,
    },
    fontBold: {
        fontFamily: FONT.bold,
    }
})

export default MCQComponent