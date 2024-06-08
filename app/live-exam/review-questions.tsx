import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useColorSchemeContext } from '@/context/ColorSchemeContext';
import { COLORS, FONT } from "@/constants";
import ContentHeader from '@/components/Headers/ContentHeader';

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

const ReviewQuestions = () => {
    const route = useRoute();
    const { id } = route.params as any;
    const { colorScheme, theme } = useColorSchemeContext();

    const [loading, setIsLoading] = useState(true);
    const [questions, setQuestions] = useState<any>([]);
    const [submitedAnswers, setSubmitedAnswers] = useState<any>({ "1": "is", "2": "My / surname", "3": "I is", "4": "His / He’s", "5": "is / His" });

    useEffect(() => {
        setQuestions(DATA.questions);
        setIsLoading(false);
    }, []);

    const getSelectedOption = (questionId: number) => {
        const selectedOption = submitedAnswers[questionId];

        if (selectedOption) {
            return selectedOption;
        }

        return false;
    }

    return (
        <React.Fragment>
            <ContentHeader title="Review Questions" fontSize={17} fontFamily={FONT.medium} />

            <View style={{ backgroundColor: theme.mainBg, flex: 1 }}>
                <FlatList
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
                                                backgroundColor: colorScheme === 'light' ? '#f2f2f2' : '',
                                                borderWidth: 1,
                                                borderColor: submitedAnswers[item.id] === item.id ? theme.borderColor : '#a1a1a13b',
                                                // backgroundColor: colorScheme === 'light' ? '#fff' : theme.bgSecondary
                                            },
                                            getSelectedOption(item.id) ? (
                                                getSelectedOption(item.id) === item.answer && option === item.answer ? styles.correctOption : getSelectedOption(item.id) === option ? styles.incorrectOption : option === item.answer ? styles.correctOption : {}
                                            ) : { borderColor: item.answer === option ? COLORS.primary : '#a1a1a13b' }

                                        ]}>
                                        <Text style={[styles.optionText, { color: theme.textSecondary }]}>{option}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={{ gap: 15, padding: 10 }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </React.Fragment>
    )
}

export default ReviewQuestions

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