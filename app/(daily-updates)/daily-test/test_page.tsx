import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native';
import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import { COLORS, FONT } from "@/constants";
import ProgressCircle from 'react-native-progress-circle'
//@ts-ignore
import { RadioButtonGroup, RadioButtonItem } from 'expo-radio-button';


import ContentHeader from '@/components/Headers/ContentHeader';

import BeginnerLevelData from '@/data/daily-test/beginner.json';
import IntermediateLevelData from '@/data/daily-test/intermediate.json';
import AdvancedLevelData from '@/data/daily-test/advanced.json';
import ExpertLevelData from '@/data/daily-test/expert.json';
import ProfessionalLevelData from '@/data/daily-test/professional.json';
import MasterLevelData from '@/data/daily-test/master.json';
import { Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const TestPage = ({ route, navigation }: any) => {
    const { colorScheme, theme } = useColorSchemeContext();
    const { level, day } = route.params || {};

    const [questions, setQuestions] = useState<any>([]);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedValue, setSelectedValue] = useState<any>(null);
    const [isCompleted, setIsCompleted] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState('00:00');
    const [optionsDisabled, setOptionsDisabled] = useState(false);
    const [totalCorrectAnswers, setTotalCorrectAnswers] = useState(0);
    const [totalWrongAnswers, setTotalWrongAnswers] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<any>([]);
    const [intervalID, setIntervalID] = useState<any>(null);

    useEffect(() => {
        const unsubscribe = navigation.addListener('beforeRemove', (e: any) => {
            if (!isCompleted) {
                e.preventDefault();

                Alert.alert(
                    'Confirm',
                    'Are you sure you want to leave this screen?',
                    [
                        {
                            text: 'Cancel',
                            onPress: () => null,
                            style: 'cancel',
                        },
                        {
                            text: 'OK',
                            onPress: () => navigation.dispatch(e.data.action),
                        },
                    ],
                    { cancelable: false }
                );
            }
        });

        return unsubscribe;
    }, [navigation, isCompleted]);

    useEffect(() => {
        switch (level) {
            case 'beginner':
                setQuestions(BeginnerLevelData[day - 1]?.questions || []);
                break;
            case 'intermediate':
                setQuestions(IntermediateLevelData[day - 1]?.questions || []);
                break;
            case 'advanced':
                setQuestions(AdvancedLevelData[day - 1]?.questions || []);
                break;
            case 'expert':
                setQuestions(ExpertLevelData[day - 1]?.questions || []);
                break;
            case 'professional':
                setQuestions(ProfessionalLevelData[day - 1]?.questions || []);
                break;
            case 'master':
                setQuestions(MasterLevelData[day - 1]?.questions || []);
                break;
            default:
                break;
        }
    }, []);

    const useCountdownTimer = () => {
        const totalDuration = 30 * questions.length; // Total duration in seconds
        let remainingTime = totalDuration;
        let interval: any;

        const startTimer = () => {
            interval = setInterval(() => {
                setTimeRemaining((time) => {
                    remainingTime -= 1;

                    if (remainingTime <= 0) {
                        clearInterval(interval);
                        setIsCompleted(true);
                    }

                    return `${Math.floor(remainingTime / 60)
                        .toString()
                        .padStart(2, '0')
                        }:${(remainingTime % 60)
                            .toString()
                            .padStart(2, '0')
                        }`;
                });
            }, 1000);

            setIntervalID(interval);
        };

        startTimer();

        return () => clearInterval(interval);
    }


    useEffect(() => {
        if (questions.length > 0) {
            useCountdownTimer();
        }
    }, [questions.length]);



    const calCulatePercentage = () => {
        const percentage = (totalCorrectAnswers / questions.length) * 100;

        return Math.round(percentage);
    }

    const handleNextQuestion = () => {
        if (currentIndex < questions.length - 1) {
        } else {
            setTimeRemaining('00:00');
            clearInterval(intervalID);
            setIsCompleted(true);
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
        clearInterval(intervalID);
        setCurrentIndex(0);
        setSelectedValue(null);
        setOptionsDisabled(false);
        setTotalCorrectAnswers(0);
        setTotalWrongAnswers(0);
        setIsCompleted(false);
        useCountdownTimer();
    }
    const getSelectedOption = (questionId: number) => {
        const selectedOption = selectedOptions.find((item: any) => item.id === questionId);

        return selectedOption?.selected;
    }

    return (
        <React.Fragment>
            <ContentHeader title="" />

            <View style={{ flex: 1, backgroundColor: theme.mainBg }}>
                {
                    !isCompleted && <View style={[styles.headerContainer, { backgroundColor: '#2a5298', marginTop: 15 }]}>
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

                <View style={{}}>
                    {
                        !isCompleted ? <View style={{ padding: 20 }}>
                            <Text style={[styles.questionText, { color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText }]}>
                                {questions[currentIndex]?.question}
                            </Text>

                            <FlatList
                                data={questions[currentIndex]?.options}
                                renderItem={({ item }) => (
                                    <View style={{
                                        borderRadius: 10,
                                        borderWidth: colorScheme === 'light' ? 1 : selectedValue === item ? 1 : 0,
                                        borderColor: selectedValue === item ? theme.borderColor : '#dddddd',
                                        backgroundColor: colorScheme === 'light' ? '#fff' : theme.bgSecondary
                                    }}>
                                        <RadioButtonGroup
                                            selected={selectedValue}
                                            radioBackground={COLORS.primary}
                                            onSelected={(value: any) => handleOptionSelect(questions[currentIndex]?.id, item, questions[currentIndex]?.answer)}
                                            containerStyle={styles.optionButton}
                                        >
                                            <RadioButtonItem
                                                key={currentIndex}
                                                value={item}
                                                label={
                                                    <Text style={{ color: theme.textSecondary, marginLeft: 10 }}>{item}</Text>
                                                }
                                            />
                                        </RadioButtonGroup>
                                    </View>
                                )}
                                keyExtractor={(item, index) => index.toString()}
                                contentContainerStyle={{ gap: 10 }}
                            />

                            {
                                !isCompleted && <TouchableOpacity activeOpacity={0.7}
                                    style={[styles.nextButton, { backgroundColor: COLORS.primary, marginTop: 30, opacity: !selectedValue ? 0.7 : 1 }]}
                                    onPress={handleNextQuestion}
                                    disabled={!selectedValue}
                                >
                                    <Text style={styles.nextButtonText}>Nextt</Text>
                                </TouchableOpacity>
                            }
                        </View>
                            : !showResults ? <View style={{ padding: 30 }}>
                                <Text style={{ fontFamily: FONT.bold, fontSize: 25, textAlign: 'center', color: theme.headingSecondary }}>Your Score</Text>

                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 30, backgroundColor: theme.bgSecondary, marginTop: 30, paddingHorizontal: 10, paddingVertical: 20, borderRadius: 10 }}>
                                    <View style={{ display: 'flex', alignItems: 'center' }}>
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
                                            bgColor={theme.bgSecondary}
                                        >
                                            <Text style={{ fontSize: 18, fontFamily: FONT.medium, color: theme.textPrimary }}>{calCulatePercentage()}%</Text>
                                        </ProgressCircle>
                                    </View>
                                    <View style={{ display: 'flex', gap: 10 }}>
                                        {
                                            questions.length - (totalCorrectAnswers + totalWrongAnswers) > 0 && <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                                                {/* <AntDesign name="export" size={24} color="#5495fb" /> */}
                                                <MaterialCommunityIcons name="square-rounded-outline" size={24} color="#5495fb" />
                                                <Text style={{ color: '#5495fb', fontFamily: FONT.medium, fontSize: 15 }}>Skipped: {questions.length - (totalCorrectAnswers + totalWrongAnswers)}</Text>
                                            </View>
                                        }
                                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                                            {/* <Feather name="check-circle" size={24} color="#00c47d" /> */}
                                            <Entypo name="check" size={24} color="#00c47d" />
                                            <Text style={{ color: '#00c47d', fontFamily: FONT.medium, fontSize: 15 }}>Correct: {totalCorrectAnswers}</Text>
                                        </View>
                                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                                            {/* <Fontisto name="close" size={24} color="#f37375" /> */}
                                            <Ionicons name="close" size={28} color="#f37375" />
                                            <Text style={{ color: '#f37375', fontFamily: FONT.medium, fontSize: 15 }}>Correct: {totalWrongAnswers}</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={{ display: 'flex', flexDirection: 'column', gap: 10, alignSelf: 'center', marginTop: 100 }}>
                                    <View style={{ display: 'flex', flexDirection: 'row', gap: 20, alignSelf: 'center' }}>
                                        <TouchableOpacity onPress={() => navigation.navigate('Categories_screen', { level: level })} activeOpacity={0.7} style={[styles.nextButton, { flex: 1, backgroundColor: '#00c47d', paddingHorizontal: 20 }]}>
                                            <Text style={styles.nextButtonText}>More</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity activeOpacity={0.7}
                                            style={[styles.nextButton, { backgroundColor: '#5495fb', paddingHorizontal: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, flex: 1 }]}
                                            onPress={ReTest}
                                        >

                                            {/* <MaterialCommunityIcons name="book-play-outline" size={24} color="white" /> */}
                                            <Text style={styles.nextButtonText}>Re-Test</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity activeOpacity={0.7}
                                        style={[styles.nextButton, { backgroundColor: theme.bgPrimary, borderWidth: 1, borderColor: '#00c47d', paddingHorizontal: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }]}
                                        onPress={() => setShowResults(true)}
                                    >
                                        <Text style={[styles.nextButtonText, { textAlign: 'center', color: theme.textSecondary }]}>Review Test</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                                : <FlatList
                                    data={questions}
                                    renderItem={({ item, index }) => (
                                        <TouchableOpacity
                                            activeOpacity={0.7}
                                            key={index}
                                            // onPress={() => handleOptionSelect(questions[currentIndex]?.id, item, questions[currentIndex]?.answer)}
                                            style={{ backgroundColor: colorScheme === 'light' ? '#fff' : theme.bgSecondary, padding: 15, borderRadius: 15 }}
                                        >
                                            <Text style={[styles.questionText, { color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText }]}>
                                                {index + 1}. {item.question}
                                            </Text>
                                            <View style={{ display: 'flex', gap: 10 }}>
                                                {item.options.map((option: any, optionIndex: any) => (
                                                    <TouchableOpacity activeOpacity={0.7} key={optionIndex}
                                                        style={[
                                                            styles.optionButton,
                                                            {
                                                                display: 'flex',
                                                                flexDirection: 'row',
                                                                // borderWidth: 1,
                                                                // borderColor: theme.borderColor,
                                                                backgroundColor: colorScheme === 'light' ? '#f2f2f2' : '',

                                                                borderWidth: colorScheme === 'light' ? 1 : selectedValue === item ? 1 : 0,
                                                                borderColor: selectedValue === item ? theme.borderColor : '#dddddd',
                                                                // backgroundColor: colorScheme === 'light' ? '#fff' : theme.bgSecondary
                                                            },
                                                            getSelectedOption(item.id) !== undefined && (
                                                                getSelectedOption(item.id) === item.answer && option === item.answer ? styles.correctOption : getSelectedOption(item.id) === option ? styles.incorrectOption : option === item.answer ? styles.correctOption : {}
                                                            )

                                                        ]}>
                                                        <Text style={[styles.optionText, { color: theme.textSecondary }]}>{ }{option}</Text>
                                                    </TouchableOpacity>
                                                ))}
                                            </View>
                                        </TouchableOpacity>
                                    )}
                                    keyExtractor={(item, index) => index.toString()}
                                    contentContainerStyle={{ gap: 15, padding: 10 }}
                                    showsVerticalScrollIndicator={false}
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
        flex: 1,
        padding: 15,
        borderRadius: 10,
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