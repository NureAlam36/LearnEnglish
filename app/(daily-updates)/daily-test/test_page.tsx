import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import { COLORS, FONT } from "@/constants";
import { Audio } from 'expo-av';
import ProgressCircle from 'react-native-progress-circle'
//@ts-ignore
import { RadioButtonGroup, RadioButtonItem } from 'expo-radio-button';

import { Link } from 'expo-router';


import Feather from '@expo/vector-icons/Feather';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import ContentHeader from '@/components/Headers/ContentHeader';

const TestPage = ({ route }: any) => {
    const { level, day } = route.params || {};

    const [loading, setLoading] = useState(true)
    const [questions, setQuestions] = useState<any>([]);

    const { colorScheme } = useColorSchemeContext();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedValue, setSelectedValue] = useState<any>(null);
    const [showMessage, setShowMessage] = useState(false);
    const [optionsDisabled, setOptionsDisabled] = useState(false);
    const [totalCorrectAnswers, setTotalCorrectAnswers] = useState(0);
    const [totalWrongAnswers, setTotalWrongAnswers] = useState(0);
    const [timeRemaining, setTimeRemaining] = useState('00:10:00');
    // const [wrongIDs, setWrongIDs] = useState<any>([]);
    const [showResults, setShowResults] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<any>([]);

    useEffect(() => {
        // Fetch questions from the JSON file based on the level
        const fetchQuestions = async () => {
            try {
                const response = await fetch(`/data/daily-test/${level}.json`);
                const data = await response.json();

                data.forEach((item: any) => {
                    if (item.day === day) {
                        setQuestions(item.questions);
                    }
                })


                setLoading(false);
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };

        fetchQuestions();
    }, [level]);


    const calCulatePercentage = () => {
        const percentage = (totalCorrectAnswers / questions.length) * 100;

        return Math.round(percentage);
    }

    const handleNextQuestion = () => {
        if (currentIndex < questions.length - 1) {
        } else {
            setShowMessage(true);
        }

        setCurrentIndex(currentIndex + 1);
        const isCorrect = isOptionCorrect(selectedValue);

        if (isCorrect) {
            setTotalCorrectAnswers(totalCorrectAnswers + 1);
        } else {
            setTotalWrongAnswers(totalWrongAnswers + 1);
        }

        setSelectedOptions([...selectedOptions, { id: questions[currentIndex].id, selected: selectedValue }]);
        setSelectedValue(null);
    };

    const handleOptionSelect = (option: any, value: string, answer: string) => {
        setSelectedValue(value);
    };


    const isOptionCorrect = (option: any) => {
        return option === questions[currentIndex].answer;
    };

    const ReTest = () => {
        setCurrentIndex(0);
        setSelectedValue(null);
        setOptionsDisabled(false);
        setTotalCorrectAnswers(0);
        setTotalWrongAnswers(0);
        setShowMessage(false);
    }
    const getSelectedOption = (questionId: number) => {
        const selectedOption = selectedOptions.find((item: any) => item.id === questionId);

        return selectedOption?.selected;
    }

    console.log(selectedOptions);


    return (
        <React.Fragment>
            <ContentHeader title="" />

            <View style={{ flex: 1, backgroundColor: colorScheme === 'light' ? '#fff' : COLORS.darkPrimary }}>
                {
                    !showMessage && <View style={[styles.headerContainer, { backgroundColor: '#2a5298', marginTop: 15 }]}>
                        <View style={{}}>
                            <Text style={styles.scoreText}>Total Questions: {currentIndex + 1}/{questions.length}</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', alignSelf: 'center', gap: 15 }}>
                            <View style={{ display: 'flex', flexDirection: 'row', gap: 8, justifyContent: 'center', backgroundColor: '#fff', paddingVertical: 8, paddingHorizontal: 10, width: 100, borderRadius: 15 }}>
                                <Text style={{ color: '#00c47d', fontFamily: FONT.medium, fontSize: 16, letterSpacing: 1 }}>{timeRemaining}</Text>
                            </View>
                        </View>
                    </View>
                }

                <View style={{ padding: 15, marginTop: 20 }}>
                    {
                        !showMessage ? <View>
                            <Text style={[styles.questionText, { color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText }]}>
                                {questions[currentIndex]?.question}
                            </Text>

                            <FlatList
                                data={questions[currentIndex]?.options}
                                renderItem={({ item }) => (
                                    <TouchableOpacity
                                        activeOpacity={0.7}
                                        style={[
                                            styles.optionButton,
                                            {
                                                display: 'flex',
                                                flexDirection: 'row',
                                            }
                                        ]}
                                        onPress={() => handleOptionSelect(questions[currentIndex]?.id, item, questions[currentIndex]?.answer)}
                                    >
                                        <RadioButtonGroup
                                            selected={selectedValue}
                                            radioBackground={COLORS.primary}
                                        >
                                            <RadioButtonItem
                                                key={currentIndex}
                                                value={item}
                                                label={
                                                    <View></View>
                                                }
                                            />
                                        </RadioButtonGroup>
                                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <Text style={styles.optionText}>{item}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )}
                                keyExtractor={(item, index) => index.toString()}
                            />

                            {
                                !showMessage && <TouchableOpacity activeOpacity={0.7}
                                    style={[styles.nextButton, { backgroundColor: COLORS.primary, marginTop: 30, opacity: !optionsDisabled ? 0.7 : 1 }]}
                                    onPress={handleNextQuestion}
                                    disabled={!selectedValue}
                                >
                                    <Text style={styles.nextButtonText}>Next</Text>
                                </TouchableOpacity>
                            }
                        </View>
                            : !showResults ? <View>
                                <Text style={{ fontFamily: FONT.bold, fontSize: 25, textAlign: 'center', color: COLORS.gray }}>Your Score</Text>
                                <View style={{ display: 'flex', alignItems: 'center', marginTop: 30 }}>
                                    <ProgressCircle
                                        percent={calCulatePercentage()}
                                        radius={50}
                                        borderWidth={8}
                                        color={
                                            calCulatePercentage() >= 75 ? '#00c47d' :
                                                calCulatePercentage() >= 50 ? '#3399ff' :
                                                    calCulatePercentage() >= 25 ? '#ff9f1e' :
                                                        '#ff0000'
                                        }
                                        shadowColor="#999"
                                        bgColor="#fff"
                                    >
                                        <Text style={{ fontSize: 18 }}>{calCulatePercentage()}%</Text>
                                    </ProgressCircle>
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', alignSelf: 'center', gap: 50, marginTop: 20 }}>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                                        <Feather name="check-circle" size={24} color="#00c47d" />
                                        <Text style={{ color: '#00c47d', fontFamily: FONT.medium, fontSize: 15 }}>Correct: {totalCorrectAnswers}</Text>
                                    </View>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                                        <Fontisto name="close" size={24} color="#f37375" />
                                        <Text style={{ color: '#f37375', fontFamily: FONT.medium, fontSize: 15 }}>Correct: {totalWrongAnswers}</Text>
                                    </View>
                                </View>

                                <View style={{ display: 'flex', flexDirection: 'row', gap: 20, alignSelf: 'center', marginTop: 50 }}>
                                    {/* @ts-ignore */}
                                    <Link href={`/exercise/fill_in_the_blank/`} style={[styles.nextButton, { backgroundColor: '#00c47d', marginTop: 40, paddingHorizontal: 20 }]} asChild>
                                        <TouchableOpacity activeOpacity={0.7}>
                                            <Text style={styles.nextButtonText}>More Excercises</Text>
                                        </TouchableOpacity>
                                    </Link>
                                    <TouchableOpacity activeOpacity={0.7}
                                        style={[styles.nextButton, { backgroundColor: '#5495fb', marginTop: 40, paddingHorizontal: 20, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, }]}
                                        onPress={ReTest}
                                    >

                                        <MaterialCommunityIcons name="book-play-outline" size={24} color="white" />
                                        <Text style={styles.nextButtonText}>Re-Test</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={0.7}
                                        style={[styles.nextButton, { backgroundColor: '#00c47d', marginTop: 40, paddingHorizontal: 20, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, }]}
                                        onPress={() => setShowResults(true)}
                                    >

                                        {/* <MaterialCommunityIcons name="book-play-outline" size={24} color="white" /> */}
                                        <Text style={styles.nextButtonText}>Review Test</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                                : <FlatList
                                    data={questions}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity
                                            activeOpacity={0.7}
                                        // onPress={() => handleOptionSelect(questions[currentIndex]?.id, item, questions[currentIndex]?.answer)}
                                        >
                                            <Text style={[styles.questionText, { color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText }]}>
                                                {item.question}
                                            </Text>
                                            {item.options.map((option: any, optionIndex: any) => (
                                                <TouchableOpacity activeOpacity={0.7}
                                                    style={[
                                                        styles.optionButton,
                                                        {
                                                            display: 'flex',
                                                            flexDirection: 'row',
                                                        },
                                                        getSelectedOption(item.id) === item.answer && option === item.answer ? styles.correctOption : getSelectedOption(item.id) === option ? styles.incorrectOption : option === item.answer ? styles.correctOption : {}

                                                    ]}>
                                                    <RadioButtonGroup
                                                        selected={selectedValue}
                                                        radioBackground={COLORS.primary}
                                                    >
                                                        <RadioButtonItem
                                                            key={currentIndex}
                                                            value={option}
                                                            label={
                                                                <View style={styles.optionText}>{option}</View>
                                                            }
                                                        />
                                                    </RadioButtonGroup>
                                                </TouchableOpacity>
                                            ))}
                                            {/*  */}
                                        </TouchableOpacity>
                                    )}
                                    keyExtractor={(item, index) => index.toString()}
                                />
                    }

                </View>
            </View >
        </React.Fragment >
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        borderRadius: 10,
        marginHorizontal: 15
    },
    sectionTitle: {
        fontSize: 18,
        marginTop: 5,
        marginBottom: 30,
        fontFamily: FONT.bold,
    },
    headerText: {
        fontSize: 17,
        fontFamily: FONT.medium,
    },
    scoreText: {
        color: 'white',
        fontSize: 15,
        fontFamily: FONT.medium,
        letterSpacing: 2,
    },
    questionText: {
        fontSize: 16,
        fontFamily: FONT.medium,
        marginBottom: 20,
    },
    optionButton: {
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        backgroundColor: '#f2f2f2',
    },
    optionText: {
        fontSize: 16,
        fontFamily: FONT.regular,
        paddingHorizontal: 10,

    },
    correctOption: {
        backgroundColor: '#1bb285',
    },
    incorrectOption: {
        backgroundColor: '#f37375',
    },
    nextButton: {
        padding: 10,
        borderRadius: 50,
        marginBottom: 20,
        alignItems: 'center',
    },
    nextButtonText: {
        color: 'white',
        fontSize: 16,
        fontFamily: FONT.medium,
        textAlign: 'center',
        height: 30,
        lineHeight: 30,
    },
    messageText: {
        fontSize: 16,
        fontFamily: FONT.medium,
        textAlign: 'center',
    },
});

export default TestPage