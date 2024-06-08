import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Stack } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, FONT } from "@/constants";
import axios from 'axios';
import { ToastProvider, useToast } from 'react-native-toast-notifications';
import ProgressCircle from 'react-native-progress-circle'
// @ts-ignore
import { RadioButtonGroup, RadioButtonItem } from 'expo-radio-button';
import MCQComponent from '@/components/MCQComponent';
import { useColorSchemeContext } from "@/context/ColorSchemeContext";

import ContentHeader from '@/components/Headers/ContentHeader';
import { AntDesign, Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const DATA: any = {
    "id": 1,
    "title": "Weakly exam",
    "description": "Advanced Mathematics Exam",
    "image": "https://i.ibb.co/0B8TwS4/kindpng-1971599.png",
    "status": "active",
    "questions_count": 50,
    "duration_minutes": 120,
    "examinees_count": 75,
    "start_time": "2021-09-10T10:00:00Z",
    "end_time": "2021-09-10T12:00:00Z",
    "settings": {
        "shuffle_questions": true,
        "shuffle_answers": true,
        "allow_back_navigation": false,
        "show_results_immediately": false,
        "passing_percentage": 60
    },
    "questions": [
        {
            "id": 1,
            "question": "Hello, what ______ your name?",
            "options": ["is", "are", "am", "be"],
            "answer": "is"
        },
        {
            "id": 2,
            "question": "______ name is Farhana. And my ______ is Rahman.",
            "options": [
                "Your / surname",
                "My / surname",
                "I / surname",
                "I / name"
            ],
            "answer": "My / surname"
        },
        {
            "id": 3,
            "question": "My name is Aisha. ______ Aisha Khan.",
            "options": ["My am", "I is", "I am", "I"],
            "answer": "I am"
        },
        {
            "id": 4,
            "question": "______ name is Fahim. ______ Fahim Ahmed.",
            "options": ["His / She", "His / He’s", "Her / She’s", "His / His"],
            "answer": "His / He’s"
        },
        {
            "id": 5,
            "question": "“Where ______ Emma from?” “______ from the US.”",
            "options": ["is / He’s", "is / His", "am / He’s", "is / She’s"],
            "answer": "is / She’s"
        },
        {
            "id": 6,
            "question": "______ are you from? Japan.",
            "options": ["What", "Who", "Where", "When"],
            "answer": "Where"
        },
        {
            "id": 7,
            "question": "Where ______ you ______ ?",
            "options": ["is / from", "are / in", "are / is", "are / from"],
            "answer": "are / from"
        },
        {
            "id": 8,
            "question": "______ from Bangladesh. I’m Rahman.",
            "options": ["I’m", "He’s", "You’re", "She’s"],
            "answer": "I’m"
        },
        {
            "id": 9,
            "question": "Pierre is a French boy. ______ from ______ .",
            "options": [
                "He’s / France",
                "His’s / French",
                "His / France",
                "He / France"
            ],
            "answer": "He’s / France"
        },
        {
            "id": 10,
            "question": "Lisa and Max are Americans. ______ from U.S.A.",
            "options": ["There", "Their", "They’re", "Their’re"],
            "answer": "They’re"
        },
        {
            "id": 11,
            "question": "“What ____ their _____?”\n\n“Alexander and Philip.”",
            "options": ["are/name", "is / name", "is / names", "are / names"],
            "answer": "are / names"
        },
        {
            "id": 12,
            "question": "I ______ 22 years old, but Reza ______ 20.",
            "options": ["am / am", "are / am", "am / is", "are / are"],
            "answer": "am / is"
        },
        {
            "id": 13,
            "question": "Mark______ 19, but Brian and Denis ______ 26 and 28.",
            "options": ["is / are", "are / is", "are / are", "am / are"],
            "answer": "is / are"
        },
        {
            "id": 14,
            "question": "“What ______ this?”\n\n“It's ______ umbrella.”",
            "options": ["are / a", "is / a", "is / an", "its / an"],
            "answer": "is / an"
        },
        {
            "id": 15,
            "question": "Oxford is ______ English university.",
            "options": ["an", "the", "a", "*"],
            "answer": "an"
        },
        {
            "id": 16,
            "question": "Toyotas ______ Japanese ______ .",
            "options": ["is a / car", "is / car", "are / cars", "is / cars"],
            "answer": "are / cars"
        },
        {
            "id": 17,
            "question": "“What is ______ ?”\n\n“She is a bank manager.”",
            "options": ["his job", "she job", "he job", "her job"],
            "answer": "her job"
        },
        {
            "id": 18,
            "question": "0/2/11/18/20 Find the correct alternative.",
            "options": [
                "oh / twelve / eighteen / twenty",
                "zero / two / one-one / eighteen / twenty",
                "zero / two / eleven / eighteen / twenty",
                "zero / two / eleven / eighty / twenty"
            ],
            "answer": "zero / two / eleven / eighteen / twenty"
        },
        {
            "id": 19,
            "question": "“How old is your aunt?”\n\n“______ is 29.”",
            "options": ["She", "He", "She’s", "He’s"],
            "answer": "She"
        },
        {
            "id": 20,
            "question": "“Where ______ she from?”\n\n“She ______ from Japan.”",
            "options": ["are / is", "is / is", "is / am", "are / are"],
            "answer": "is / is"
        }
    ]
}

const MCQs = ({ navigation }: any) => {
    const toast = useToast();
    const route = useRoute();
    const { id } = route.params as any;
    const { colorScheme, theme } = useColorSchemeContext();
    const [bodyColor, setBodyColor] = useState('#2a5298');
    const [isLoading, setIsLoading] = useState(true);
    const [questions, setQuestions] = useState<any>([]);
    const [intervalID, setIntervalID] = useState<any>(null);
    const [isCompleted, setIsCompleted] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState('00:00');
    const [pageTitle, setPageTitle] = useState<any>('BCS Preliminary');

    const [selectedOptions, setSelectedOptions] = useState<any>({});
    const [resultMessages, setResultMessages] = useState<any>({});
    const [totalCorrectAnswers, setTotalCorrectAnswers] = useState(0);
    const [totalWrongAnswers, setTotalWrongAnswers] = useState(0);
    const [result, setResult] = useState<any>({
        correct: 0,
        incorrect: 0,
        skipped: 0,
        total: 0
    });

    const getSelectedValueIndex = (questionId: number) => {
        const item = questions.find((item: any) => item.id === questionId);

        const selectedValue = selectedOptions[questionId];

        if (selectedValue) {
            return item.options.indexOf(selectedValue);
        }

        return false;
    }


    useEffect(() => {
        setQuestions(DATA.questions);
        setIsLoading(false);
    }, []);

    const useCountdownTimer = () => {
        let remainingTime = 1200;
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
            // useCountdownTimer();
        }
    }, [questions.length]);

    const optionKeys = ['A', 'B', 'C', 'D', 'E'];

    const handleOptionSelect = (questionId: number, optionIndex: number, answer: string) => {
        // Compare selected option with correct answer
        const item = questions.find((item: any) => item.id === questionId);

        const selectedValue = item.options[optionIndex];

        setSelectedOptions({ ...selectedOptions, [questionId]: selectedValue });

        const isCorrect = selectedValue === item?.answer;


        const isExist = selectedOptions.hasOwnProperty(questionId);

        if (!isExist) {
            if (isCorrect) {
                setResult({ ...result, correct: result.correct + 1 });
            } else {
                setResult({ ...result, incorrect: result.incorrect + 1 });
            }
            setResult({ ...result, total: result.total + 1 });
        }
    };

    const handleSubmit = async () => {
        if (result.total < questions.length) {
            const skipped = questions.length - result.total;
            setResult({ ...result, skipped });
        }

        console.log(selectedOptions);
        setBodyColor('');
        setIsCompleted(true);

        // try {
        //     const response = await axios.post('http://192.168.0.117/web/english_go_pro/exam.php', {
        //         type: 'submit_exam',
        //         exam_id: id,
        //         answers: selectedOptions
        //     }, {
        //         headers: {
        //             'Content-Type': 'application/x-www-form-urlencoded',
        //         }
        //     });

        //     console.log(response.data);

        //     // if (response.data.status === 'success') {
        //     //     setIsCompleted(true);
        //     // } else {
        //     //     toast.show(response.data.message, {
        //     //         type: 'danger',
        //     //         placement: 'bottom',
        //     //     });
        //     // }
        // } catch (error) {
        //     console.error('Error submitting data:', error);
        // }
    }

    const calCulatePercentage = () => {
        const percentage = (totalCorrectAnswers / questions.length) * 100;

        return Math.round(percentage);
    }

    useEffect(() => {
        console.log(selectedOptions);

    }, [selectedOptions]);

    return (
        <React.Fragment>
            <ContentHeader title={DATA.description} bodyColor={bodyColor} fontSize={17} fontFamily={FONT.medium} />
            {
                !isLoading ?
                    <View style={{ backgroundColor: theme.mainBg, flex: 1 }}>
                        {
                            !isCompleted && <View style={[styles.headerContainer, { backgroundColor: '#2a5298' }]}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', alignSelf: 'center', gap: 15 }}>

                                    <Text style={{ color: '#fff', fontFamily: FONT.medium, fontSize: 16, letterSpacing: 1 }}>{timeRemaining}</Text>
                                </View>

                                <View>
                                    <TouchableOpacity onPress={() => handleSubmit()} style={{ backgroundColor: COLORS.primary, paddingHorizontal: 20, paddingVertical: 10, borderRadius: 50 }}>
                                        <Text style={{ color: COLORS.lightText, textAlign: 'center', fontFamily: FONT.medium, fontSize: 14 }}>Submit</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        }
                        <View style={[styles.sectionContainer, {}]}>

                            {
                                !isCompleted ?
                                    <FlatList
                                        data={questions}
                                        renderItem={({ item, index }) => (
                                            <View style={[styles.item, { backgroundColor: colorScheme === 'light' ? '#fff' : COLORS.darkSecondary }]}>
                                                <Text style={[styles.title, styles.fontMedium, { marginBottom: 10, fontSize: 16, color: theme.textSecondary }]}><Text style={styles.fontBold}>{index + 1}.</Text> {item.question}</Text>

                                                {item.options.map((option: any, optionIndex: any) => (
                                                    <View key={optionIndex} style={{
                                                        borderRadius: 10,
                                                        borderWidth: 1,
                                                        borderColor: getSelectedValueIndex(item.id) === optionIndex ? theme.borderColor : '#a1a1a13b',
                                                        backgroundColor: colorScheme === 'light' ? '#fff' : theme.darkSecondary,
                                                        marginBottom: optionIndex === item.options.length - 1 ? 0 : 10,
                                                        padding: 12
                                                    }}>
                                                        <RadioButtonGroup
                                                            selected={getSelectedValueIndex(item.id) === optionIndex ? optionIndex : -1}
                                                            radioBackground={COLORS.primary}
                                                            onSelected={(value: any) => handleOptionSelect(item.id, value, item.answer)}
                                                        >
                                                            <RadioButtonItem
                                                                value={optionIndex}
                                                                label={


                                                                    <View style={{ display: 'flex', flexDirection: 'row', gap: 5, marginLeft: 8 }}>
                                                                        {/* <Text style={[styles.fontMedium, { fontSize: 15, color: theme.textSecondary }]}>{optionKeys[optionIndex]})</Text> */}
                                                                        <Text style={[styles.fontMedium, { fontSize: 14, color: theme.textSecondary }]}>{option}</Text>
                                                                    </View>
                                                                }

                                                            />
                                                        </RadioButtonGroup>
                                                    </View>
                                                ))}
                                            </View>
                                        )}
                                        keyExtractor={(item) => item.id.toString()}
                                        contentContainerStyle={{ gap: 10, padding: 10 }}
                                        showsVerticalScrollIndicator={false}
                                    />
                                    : <View style={{ padding: 30 }}>
                                        <Text style={{ fontFamily: FONT.bold, fontSize: 22, textAlign: 'center', color: theme.headingSecondary }}>Result Summary</Text>

                                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 30, backgroundColor: theme.bgSecondary, marginTop: 25, paddingHorizontal: 10, paddingVertical: 20, borderRadius: 10 }}>
                                            <View style={{ display: 'flex', alignItems: 'center' }}>
                                                <ProgressCircle
                                                    percent={calCulatePercentage()}
                                                    radius={45}
                                                    borderWidth={6}
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
                                            <View style={{ display: 'flex', gap: 8 }}>
                                                {
                                                    questions.length - (totalCorrectAnswers + totalWrongAnswers) > 0 && <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                                                        {/* <AntDesign name="export" size={24} color="#5495fb" /> */}
                                                        <MaterialCommunityIcons name="square-rounded-outline" size={22} color="#5495fb" />
                                                        <Text style={{ color: '#5495fb', fontFamily: FONT.regular, fontSize: 15 }}>Skipped: {questions.length - (totalCorrectAnswers + totalWrongAnswers)}</Text>
                                                    </View>
                                                }
                                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                                                    {/* <Feather name="check-circle" size={24} color="#00c47d" /> */}
                                                    <Entypo name="check" size={22} color="#00c47d" />
                                                    <Text style={{ color: '#00c47d', fontFamily: FONT.regular, fontSize: 15 }}>Correct: {totalCorrectAnswers}</Text>
                                                </View>
                                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                                                    {/* <Fontisto name="close" size={24} color="#f37375" /> */}
                                                    <Ionicons name="close" size={25} color="#f37375" />
                                                    <Text style={{ color: '#f37375', fontFamily: FONT.regular, fontSize: 15 }}>Correct: {totalWrongAnswers}</Text>
                                                </View>
                                            </View>
                                        </View>

                                        <View style={{ display: 'flex', alignItems: 'center', gap: 10, backgroundColor: theme.bgSecondary, marginTop: 15, padding: 20, borderRadius: 10 }}>
                                            <View style={{ display: 'flex', alignItems: 'center', gap: 10, borderBottomWidth: 1, borderBottomColor: theme.borderColor, paddingBottom: 10 }}>
                                                <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <Text style={{ fontFamily: FONT.regular, color: theme.textSecondary }}>Score</Text>
                                                    <Text style={{ color: theme.textSecondary, fontFamily: FONT.medium, fontSize: 15 }}>{result.correct}</Text>
                                                </View>
                                                <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <Text style={{ fontFamily: FONT.regular, color: theme.textSecondary }}>Cut Score</Text>
                                                    <Text style={{ color: theme.textSecondary, fontFamily: FONT.medium, fontSize: 15 }}>{result.correct}</Text>
                                                </View>
                                                <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <Text style={{ fontFamily: FONT.regular, color: theme.textSecondary }}>Total Score</Text>
                                                    <Text style={{ color: theme.textSecondary, fontFamily: FONT.medium, fontSize: 15 }}>{result.correct}</Text>
                                                </View>
                                            </View>
                                            <View>
                                                <Text style={{ fontFamily: FONT.medium, color: '#00c47d', fontSize: 16 }}>Your possition is 5th out of 10</Text>
                                            </View>
                                        </View>

                                        <View style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10, alignSelf: 'center', marginTop: 100 }}>
                                            <TouchableOpacity onPress={() => navigation.navigate('exam_leaderboard_screen', { id: DATA.id })} activeOpacity={0.8} style={{
                                                height: 50,
                                                paddingVertical: 12,
                                                borderRadius: 50,
                                                alignItems: 'center',
                                                marginBottom: 15,
                                                justifyContent: 'center',
                                                width: '100%',
                                                borderWidth: 1,
                                                borderColor: theme.borderPrimary,
                                                flexDirection: 'row',
                                                gap: 8
                                            }}>
                                                <Text style={{ fontFamily: FONT.regular, fontSize: 16, color: theme.textPrimary }}>See leaderboard</Text>
                                                <AntDesign name="arrowright" size={20} color={theme.textPrimary} />
                                            </TouchableOpacity>

                                            <TouchableOpacity onPress={() => navigation.navigate('review_questions_screen', { id: DATA.id })} activeOpacity={0.8} style={{
                                                backgroundColor: COLORS.primary,
                                                height: 50,
                                                paddingVertical: 12,
                                                borderRadius: 50,
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: '100%',
                                            }}>
                                                <Text style={{ fontFamily: FONT.medium, fontSize: 16, color: '#fff' }} >Review Questions</Text>
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                            }

                        </View>
                    </View>
                    : <ActivityIndicator size="large" color={COLORS.primary} />
            }

        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10
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
    sectionContainer: {
        flex: 1
    },
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10
    },
    title: {
        fontSize: 16,
    },
    fontMedium: {
        fontFamily: FONT.medium,
    },
    fontBold: {
        fontFamily: FONT.bold,
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
})

export default MCQs;
