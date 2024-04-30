import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, Button } from 'react-native';
import { Stack } from 'expo-router';
import { FontAwesome5, Entypo, AntDesign } from '@expo/vector-icons';
import * as Speech from 'expo-speech';
import { COLORS, FONT } from "@/constants";


const Index = () => {
    const [inputText, setInputText] = useState('');
    const [translatedText, setTranslatedText] = useState('');
    const [language, setLanguage] = useState('en');

    const speakText = (text: string) => {
        Speech.speak(text, { language: 'bn' });
    };

    const changeLanguage = () => {
        if (language === 'en') {
            setLanguage('bn');
        } else {
            setLanguage('en');
        }

        setInputText(translatedText);
        setTranslatedText(inputText);

        translateText();
    }

    const translateText = async () => {
        if (inputText.trim() === '') {
            Alert.alert('Error', 'Please enter some text.');
            return;
        }
        try {
            const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${language}&tl=${language === 'en' ? 'bn' : 'en'}&dt=t&q=${encodeURIComponent(inputText)}`);
            const data = await response.json();
            if (data && data[0] && data[0][0] && data[0][0][0]) {
                setTranslatedText(data[0][0][0]);
            } else {
                Alert.alert('Error', 'Failed to translate text.');
            }
        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'Failed to translate text.');
        }
    };

    useEffect(() => {
        translateText();
    }, [inputText]);

    console.log(language);


    return (
        <React.Fragment>
            <Stack.Screen
                options={{
                    title: 'Text To Speech',
                    headerTitle: () => <Text style={{ fontSize: 18, color: 'white', fontFamily: FONT.medium }}>Translator</Text>,
                    headerStyle: { backgroundColor: '#5495fb' },
                    headerRight: () => (
                        <View style={styles.headerStyle}>
                            {/* <FontAwesome5 name="exchange-alt" size={24} color="white" /> */}
                        </View>
                    )
                }}
            />
            <View style={{ margin: 20 }}>
                <View style={{ display: 'flex', alignSelf: 'center', flexDirection: 'row', alignItems: 'center', gap: 30, marginBottom: 30 }}>
                    <Button title={language === 'en' ? 'English' : 'Bangla'} />
                    <FontAwesome5 name="exchange-alt" size={24} color={COLORS.gray2} onPress={() => changeLanguage()} />
                    <Button title={language === 'en' ? 'Bangla' : 'English'} />
                </View>

                <View style={{ position: 'relative' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 15 }}>
                        <Text style={{ color: COLORS.gray, fontFamily: FONT.regular, fontSize: 16 }}>Translate From ({language === 'en' ? 'English' : 'Bangla'})</Text>
                    </View>

                    <TextInput
                        style={[styles.textInput, { marginBottom: 15, }]}
                        multiline
                        placeholder="Enter text here..."
                        value={inputText}
                        onChangeText={(text) => setInputText(text)}
                    />

                    <View style={{ position: 'absolute', right: 10, bottom: 25, backgroundColor: COLORS.primary, width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                        <AntDesign style={{}} name="sound" size={20} color="white" onPress={() => speakText(inputText)} />
                    </View>
                </View>

                <View style={{ position: 'relative' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 15 }}>
                        <Text style={{ color: COLORS.gray, fontFamily: FONT.regular, fontSize: 16 }}>Translate To ({language === 'en' ? 'Bangla' : 'English'})</Text>
                    </View>

                    <TextInput
                        style={styles.textInput}
                        multiline
                        placeholder=""
                        value={inputText === '' ? '' : translatedText}
                    />
                    <View style={{ position: 'absolute', right: 10, bottom: 10, backgroundColor: COLORS.primary, width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                        <AntDesign style={{}} name="sound" size={20} color="white" onPress={() => speakText(translatedText)} />
                    </View>
                </View>
            </View>
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center',
    },
    textInput: {
        backgroundColor: COLORS.white,
        padding: 10,
        borderRadius: 10,
        minHeight: 200,
        borderWidth: 1,
        borderColor: COLORS.gray2,
        fontSize: 16,
        fontFamily: FONT.regular,
        color: COLORS.gray,
    },
    button: {
        backgroundColor: COLORS.primary,
        padding: 15,
        borderRadius: 50,
        margin: 20,
        width: 60,
        height: 60,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: COLORS.white,
        display: 'flex',
    },
});

export default Index;