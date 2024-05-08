import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar, Platform } from 'react-native';
import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import { COLORS, FONT } from "@/constants";
import Stack from 'expo-router/stack';
import { Audio } from 'expo-av';
import ProgressCircle from 'react-native-progress-circle'

import Fontisto from '@expo/vector-icons/Fontisto';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';

// import CustomHeader from '@/components/Headers/CustomHeader';
import ContentHeader from '@/components/Headers/ContentHeader';

const Exercise = () => {
    const { colorScheme } = useColorSchemeContext();
    const [totalQuestions, setTotalQuestions] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showMessage, setShowMessage] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [totalCorrectAnswers, setTotalCorrectAnswers] = useState(0);
    const [totalWrongAnswers, setTotalWrongAnswers] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState<any>([]);
    const [isChecked, setIsChecked] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [optionsDisabled, setOptionsDisabled] = useState(false);

    const DATA = [
        {
            id: 1,
            question: 'পাখিরা উড়তে পারে',
            options: ["Birds", "can", "fly"],
            answer: 'Birds can fly'
        },
        {
            id: 2,
            question: 'আমি বাংলা ভাষায় কথা বলতে পারি',
            options: ["I", "speak", "in", "Bengali"],
            answer: 'I speak in Bengali'
        }
    ];



    useEffect(() => {
        setTotalQuestions(DATA.length);
    }, []);

    const calCulatePercentage = () => {
        const percentage = (totalCorrectAnswers / totalQuestions) * 100;

        return Math.round(percentage);
    }

    const handleOptionSelect = (option: any) => {
        if (!optionsDisabled) {
            if (selectedOptions.includes(option)) {
                setSelectedOptions(selectedOptions.filter((selectedOption: any) => selectedOption !== option));
            } else {
                setSelectedOptions([...selectedOptions, option]);
            }
        }
    };

    const isOptionCorrect = () => {
        return selectedOptions.join(' ') === DATA[currentIndex].answer;
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

    const handleCheckQuestion = () => {
        setIsChecked(true);
        const isCorrect = isOptionCorrect();

        if (!isMuted) {
            playSound(isCorrect);
        }

        if (isCorrect) {
            setIsCorrect(true);
            setTotalCorrectAnswers(totalCorrectAnswers + 1);
        } else {
            setTotalWrongAnswers(totalWrongAnswers + 1);
        }
    }

    const handleNextQuestion = () => {
        if (currentIndex < DATA.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setSelectedOptions([]);
            setIsChecked(false);
            setIsCorrect(false);
        } else {
            setShowMessage(true);
        }
    };

    const ReTest = () => {
        setCurrentIndex(0);
        setSelectedOptions([]);
        setIsChecked(false);
        setIsCorrect(false);
        setTotalCorrectAnswers(0);
        setTotalWrongAnswers(0);
        setShowMessage(false);
        setOptionsDisabled(false);
    }


    return (
        <React.Fragment>
            <ContentHeader title="Rearrange Sentence" />

            <View style={{ flex: 1, backgroundColor: colorScheme === 'light' ? '#fff' : COLORS.darkPrimary }}>
                {
                    !showMessage && <View style={[styles.headerContainer, { backgroundColor: '#2a5298', marginTop: 15 }]}>
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

                <View style={{ padding: 15 }}>
                    {
                        !showMessage ?
                            <View>
                                <Text style={[styles.sectionTitle, { color: colorScheme === 'light' ? COLORS.gray : COLORS.lightText }]}>Rearrange words in the correct order to make a meaningful Sentence</Text>

                                <Text style={[styles.questionText, { color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText }]}>
                                    {DATA[currentIndex].question}
                                </Text>

                                <View style={{ minHeight: 57, borderBottomWidth: 1, borderBottomColor: '#e1e1e1', backgroundColor: '#f2f2f2', padding: 10 }}>
                                    <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 5 }}>
                                        {selectedOptions.map((option: any, index: any) => (
                                            <TouchableOpacity key={index} activeOpacity={0.7} style={styles.selectedOptionButton} onPress={() => handleOptionSelect(option)}>
                                                <Text style={{ fontFamily: FONT.medium }}>{option}</Text>
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                </View>

                                <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'center', gap: 5, paddingTop: 15 }}>
                                    {DATA[currentIndex].options.map((option, index) => (
                                        selectedOptions.includes(option) ? (
                                            <View key={index} style={[styles.optionButton, { borderWidth: 1, borderColor: '#f2f2f2' }]}>
                                                <Text style={{ fontFamily: FONT.medium, color: 'transparent' }}>{option}</Text>
                                            </View>
                                        ) : (
                                            <TouchableOpacity
                                                key={index}
                                                activeOpacity={0.7}
                                                style={[styles.optionButton, { borderWidth: 1, borderColor: '#e1e1e1', backgroundColor: '#f2f2f2' }]}
                                                onPress={() => handleOptionSelect(option)}
                                            >
                                                <Text style={{ fontFamily: FONT.medium }}>{option}</Text>
                                            </TouchableOpacity>
                                        )
                                    ))}
                                </View>
                            </View>
                            : <View style={{ marginTop: 50 }}>
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


                                <TouchableOpacity activeOpacity={0.7}
                                    style={[styles.nextButton, { backgroundColor: '#5495fb', marginTop: 100, paddingHorizontal: 20, display: 'flex', flexDirection: 'row', alignSelf: 'center', gap: 10, }]}
                                    onPress={ReTest}
                                >

                                    <MaterialCommunityIcons name="book-play-outline" size={24} color="white" />
                                    <Text style={styles.nextButtonText}>Start Again</Text>
                                </TouchableOpacity>

                            </View>
                    }
                </View>
            </View>

            <View style={{ flex: 0, backgroundColor: colorScheme === 'light' ? '#fff' : COLORS.darkPrimary }}>
                {
                    !showMessage && isChecked ? <View>
                        <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
                            <LinearGradient
                                colors={['#1e3c72', '#1e3c72', '#2a5298']}
                                start={{ x: 1, y: 1 }}
                                end={{ x: 1, y: 0 }}
                                style={{
                                    height: 150,
                                    borderRadius: 10,
                                    margin: 10
                                }}
                            >

                                <View style={{ marginTop: 5 }}>
                                    {
                                        isChecked && isCorrect ? (
                                            <View style={{ padding: 15, display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center', alignSelf: 'center' }}>
                                                <Image source={{ uri: 'https://cdn-icons-png.freepik.com/256/463/463574.png' }} style={{ width: 30, height: 30, alignSelf: 'center' }} />
                                                <Text style={{ fontFamily: FONT.medium, fontSize: 18, color: '#00c47d' }}>আপনার উত্তর সঠিক</Text>
                                            </View>
                                        ) : isChecked && !isCorrect ? (
                                            <View style={{ padding: 15, display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center', alignSelf: 'center' }}>
                                                <Image source={{ uri: 'https://cdn-icons-png.freepik.com/256/5610/5610967.png' }} style={{ width: 30, height: 30, alignSelf: 'center' }} />
                                                <Text style={{ fontFamily: FONT.medium, fontSize: 18, color: '#ff1f1f' }}>আপনার উত্তর সঠিক হয়নি!</Text>
                                            </View>
                                        ) : null
                                    }
                                </View>
                            </LinearGradient>
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={[styles.nextButton, { backgroundColor: '#5495fb', marginBottom: 30, opacity: selectedOptions.length === 0 ? 0.7 : 1 }]}
                            onPress={!isChecked ? handleCheckQuestion : handleNextQuestion}
                            disabled={selectedOptions.length === 0}
                        >
                            <Text style={styles.nextButtonText}>{!isChecked ? 'Check' : 'Next'}</Text>
                        </TouchableOpacity>
                    </View>
                        : <TouchableOpacity
                            activeOpacity={0.7}
                            style={[styles.nextButton, { backgroundColor: '#5495fb', marginBottom: 30, opacity: selectedOptions.length === 0 ? 0.7 : 1 }]}
                            onPress={!isChecked ? handleCheckQuestion : handleNextQuestion}
                            disabled={selectedOptions.length === 0}
                        >
                            <Text style={styles.nextButtonText}>{!isChecked ? 'Check' : 'Next'}</Text>
                        </TouchableOpacity>
                }
            </View>
        </React.Fragment>
    );
};

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
        fontStyle: 'italic'
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
        marginBottom: 10,
    },
    optionButton: {
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 10,
        backgroundColor: '#f2f2f2',
    },
    optionText: {
        fontSize: 16,
        fontFamily: FONT.medium,
        paddingHorizontal: 10,
    },
    selectedOptionButton: {
        backgroundColor: '#dedede',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#c9c9c9',
    },
    nextButton: {
        padding: 10,
        borderRadius: 50,
        margin: 20,
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
});

export default Exercise;
