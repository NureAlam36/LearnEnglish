import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native';
import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import { COLORS, FONT } from "@/constants";
import { Audio } from 'expo-av';
import ProgressCircle from 'react-native-progress-circle'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link } from 'expo-router';


import Feather from '@expo/vector-icons/Feather';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import FillInTheBlank from '@/data/fill-in-the-blank.json';
import ContentHeader from '@/components/Headers/ContentHeader';
import { Entypo, Ionicons } from '@expo/vector-icons';


const Exercise = ({ route, navigation }: any) => {
    const { categoryLink, lesionId } = route.params as any;
    const { colorScheme, theme } = useColorSchemeContext();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCompleted, setIsCompleted] = useState(false);
    const [optionsDisabled, setOptionsDisabled] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [totalQuestions, setTotalQuestions] = useState(0);
    const [totalCorrectAnswers, setTotalCorrectAnswers] = useState(0);
    const [totalWrongAnswers, setTotalWrongAnswers] = useState(0);

    const [categoryName, setCategoryName] = useState('');
    const [currentLesion, setCurrentLesion] = useState<any>('');
    const [lesionData, setLesionData] = useState<any>([]);

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
                            onPress: () => {
                                navigation.dispatch(e.data.action);
                            }
                        },
                    ],
                    { cancelable: false }
                );
            }
        });

        return unsubscribe;
    }, [navigation, isCompleted]);

    const calCulatePercentage = () => {
        const percentage = (totalCorrectAnswers / totalQuestions) * 100;

        return Math.round(percentage);
    }


    const updateExerciseData = async () => {
        try {
            let newData = [];

            // Retrieve existing data from AsyncStorage
            const data = await AsyncStorage.getItem('fill_in_the_blank_data');

            // Parse the data if it exists
            if (data) {
                newData = JSON.parse(data);
            }

            // Calculate the percentage
            const percentage = calCulatePercentage();

            if (percentage > 0) {
                // Filter out existing data for the same category and lesionId
                const filterData = newData.filter((item: any) => item.category !== categoryLink || item.lesion !== lesionId);

                // Push the new item with the calculated percentage
                filterData.push({ id: newData.length + 1, category: categoryLink, lesion: lesionId, score: { percentage: percentage } });

                // Update AsyncStorage with the updated data
                await AsyncStorage.setItem('fill_in_the_blank_data', JSON.stringify(filterData));
            }
        } catch (error) {
            console.error('Error updating exercise data:', error);
        }
    };

    useEffect(() => {
        updateExerciseData();
    }, [totalCorrectAnswers]);

    useEffect(() => {
        FillInTheBlank.forEach(category => {
            if (category.link === categoryLink) {
                setCategoryName(category.category);

                category.lesions.forEach(lesion => {
                    if (lesion.id === Number(lesionId)) {
                        setCurrentLesion(lesion.name);
                        setLesionData(lesion.exercises);
                        setTotalQuestions(lesion.exercises.length);
                    }
                });
            }
        });
    }, []);

    const handleNextQuestion = () => {
        if (currentIndex < lesionData.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setSelectedOption(null);
            setOptionsDisabled(false);
        } else {
            setIsCompleted(true);
        }
    };

    const handleOptionSelect = (option: any) => {
        setSelectedOption(option);
        setOptionsDisabled(true);

        const isCorrect = isOptionCorrect(option);

        if (!isMuted) {
            playSound(isCorrect);
        }

        if (isCorrect) {
            setTotalCorrectAnswers(totalCorrectAnswers + 1);
        } else {
            setTotalWrongAnswers(totalWrongAnswers + 1);
        }
    };

    const isOptionCorrect = (option: any) => {
        return option === lesionData[currentIndex].answer;
    };

    const playSound = async (isCorrect: any) => {
        try {
            const soundObject = new Audio.Sound();
            const soundPath = isCorrect ? require('@/assets/sound-effect/correct_sound_effect.mp3') : require('@/assets/sound-effect/wrong_sound_effect.mp3');
            await soundObject.loadAsync(soundPath);
            await soundObject.playAsync();
        } catch (error) {
            console.log('Error playing sound:', error);
        }
    };

    const ReTest = () => {
        setCurrentIndex(0);
        setSelectedOption(null);
        setOptionsDisabled(false);
        setTotalCorrectAnswers(0);
        setTotalWrongAnswers(0);
        setIsCompleted(false);
    }


    return (
        <React.Fragment>
            <ContentHeader title={currentLesion} />

            <View style={{ flex: 1, backgroundColor: colorScheme === 'light' ? '#fff' : COLORS.darkPrimary }}>
                {
                    !isCompleted && <View style={[styles.headerContainer, { backgroundColor: '#2a5298', marginTop: 15 }]}>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', alignSelf: 'center', gap: 15 }}>
                            <View style={{ display: 'flex', flexDirection: 'row', gap: 8, justifyContent: 'center', backgroundColor: '#fff', paddingVertical: 8, paddingHorizontal: 10, width: 90, borderRadius: 15 }}>
                                <Text style={{ color: '#00c47d', fontFamily: FONT.regular, fontSize: 16 }}>সঠিকঃ</Text>
                                <Text style={{ color: '#00c47d', fontFamily: FONT.medium, fontSize: 16 }}>{totalCorrectAnswers}</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', gap: 8, justifyContent: 'center', backgroundColor: '#fff', paddingVertical: 8, paddingHorizontal: 10, width: 90, borderRadius: 15 }}>
                                <Text style={{ color: 'red', fontFamily: FONT.regular, fontSize: 16 }}>ভুলঃ</Text>
                                <Text style={{ color: 'red', fontFamily: FONT.medium, fontSize: 16 }}>{totalWrongAnswers}</Text>
                            </View>
                        </View>
                        <View style={{ backgroundColor: '#0076db', paddingVertical: 8, paddingHorizontal: 10, borderRadius: 15 }}>
                            <Text style={styles.scoreText}>{currentIndex + 1}/{totalQuestions}</Text>
                        </View>
                    </View>
                }

                <View style={{ padding: 15, marginTop: 10 }}>
                    {
                        !isCompleted ? <View>
                            <View style={{
                                backgroundColor: COLORS.primary,
                                paddingVertical: 5,
                                paddingHorizontal: 10,
                                borderRadius: 50,
                                alignItems: 'center',
                                alignSelf: 'flex-start',
                                marginBottom: 2
                            }}>
                                <Text style={{ fontFamily: FONT.medium, color: COLORS.lightText }}>{categoryName}</Text>
                            </View>
                            <Text style={[styles.sectionTitle, { color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText }]}>Choose the correct answer</Text>
                            <Text style={[styles.questionText, { color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText }]}>
                                {lesionData[currentIndex]?.question}
                            </Text>

                            <FlatList
                                data={lesionData[currentIndex]?.options}
                                renderItem={({ item }) => (
                                    <TouchableOpacity
                                        activeOpacity={0.7}
                                        style={[
                                            styles.optionButton,
                                            selectedOption === item && (isOptionCorrect(item) ? styles.correctOption : styles.incorrectOption),
                                            selectedOption !== null && selectedOption !== item && (!isOptionCorrect(item) ? null : styles.correctOption),
                                        ]}
                                        onPress={() => handleOptionSelect(item)}
                                        disabled={isCompleted || optionsDisabled}
                                    >
                                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <Text style={styles.optionText}>{item}</Text>
                                            {selectedOption === item && (isOptionCorrect(item) ? <Feather name="check-circle" size={24} color="white" /> : <Fontisto name="close" size={24} color="white" />)}
                                            {selectedOption !== null && selectedOption !== item && (!isOptionCorrect(item) ? null : <Feather name="check-circle" size={24} color="white" />)}
                                        </View>
                                    </TouchableOpacity>
                                )}
                                keyExtractor={(item, index) => index.toString()}
                            />

                            {
                                !isCompleted && <TouchableOpacity activeOpacity={0.7}
                                    style={[styles.nextButton, { backgroundColor: COLORS.primary, marginTop: 30, opacity: !optionsDisabled ? 0.7 : 1 }]}
                                    onPress={handleNextQuestion}
                                    disabled={!selectedOption}
                                >
                                    <Text style={styles.nextButtonText}>Next</Text>
                                </TouchableOpacity>
                            }
                        </View>
                            : <View>
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
                                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                                            {/* <Feather name="check-circle" size={24} color="#00c47d" /> */}
                                            <Entypo name="check" size={24} color="#00c47d" />
                                            <Text style={{ color: '#00c47d', fontFamily: FONT.medium, fontSize: 15 }}>Correct: {totalCorrectAnswers}</Text>
                                        </View>
                                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                                            {/* <Fontisto name="close" size={24} color="#f37375" /> */}
                                            <Ionicons name="close" size={28} color="#f37375" />
                                            <Text style={{ color: '#f37375', fontFamily: FONT.medium, fontSize: 15 }}>Incorrect: {totalWrongAnswers}</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={{ display: 'flex', flexDirection: 'row', gap: 20, alignSelf: 'center', marginTop: 50 }}>
                                    {/* @ts-ignore */}
                                    <Link href={`/exercise/fill_in_the_blank/${categoryLink}`} style={[styles.nextButton, { backgroundColor: '#00c47d', marginTop: 40, paddingHorizontal: 20 }]} asChild>
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
                                </View>

                            </View>
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
        fontSize: 14,
        fontFamily: FONT.medium,
        letterSpacing: 3,
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
        fontFamily: FONT.medium,
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

export default Exercise;
