import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Alert, Button } from 'react-native';
import { FontAwesome5, FontAwesome6, AntDesign } from '@expo/vector-icons';
import * as Speech from 'expo-speech';
import { COLORS, FONT } from "@/constants";
import { Clipboard } from 'react-native';

import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import ContentHeader from '@/components/Headers/ContentHeader';

const Index = () => {
    const { colorScheme } = useColorSchemeContext();
    const [inputText, setInputText] = useState('');
    const [translatedText, setTranslatedText] = useState('');
    const [language, setLanguage] = useState('en');

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
            // Alert.alert('Error', 'Please enter some text.');
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

    // console.log(language);

    const speakText = (text: string, language: string) => {
        Speech.speak(text, { language: language });
    };

    const copyToClipboard = (text: string) => {
        Clipboard.setString(text);
        alert('Quote copied to clipboard!');
    };


    return (
        <React.Fragment>
            <ContentHeader title="Translator" />

            <View style={{ flex: 1, padding: 15, backgroundColor: colorScheme === 'light' ? '#fff' : COLORS.darkPrimary }}>
                <View style={{ display: 'flex', alignSelf: 'center', flexDirection: 'row', alignItems: 'center', gap: 30, marginTop: 5, marginBottom: 30 }}>
                    <Button title={language === 'en' ? 'English' : 'Bangla'} />
                    <FontAwesome5 name="exchange-alt" size={24} color={COLORS.gray2} onPress={() => changeLanguage()} />
                    <Button title={language === 'en' ? 'Bangla' : 'English'} />
                </View>

                <View style={{ position: 'relative', marginBottom: 15 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                        <Text style={{ fontFamily: FONT.regular, fontSize: 16, color: colorScheme === 'light' ? COLORS.gray : COLORS.lightText }}>Translate From ({language === 'en' ? 'English' : 'Bangla'})</Text>
                    </View>

                    <TextInput
                        style={[
                            styles.textInput,
                            {
                                backgroundColor: colorScheme === 'light' ? COLORS.white : COLORS.darkSecondary,
                                borderColor: colorScheme === 'light' ? COLORS.gray2 : 'transparent',
                                borderWidth: colorScheme === 'light' ? 1 : 0,
                                color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText,
                                textAlignVertical: 'top'
                            }
                        ]}
                        multiline
                        placeholder="Enter text here..."
                        placeholderTextColor={colorScheme === 'light' ? COLORS.gray : COLORS.gray2}
                        value={inputText}
                        onChangeText={(text) => setInputText(text)}
                    />


                    <Text style={{ position: 'absolute', right: 10, bottom: 25, backgroundColor: COLORS.primary, width: 40, height: 40, verticalAlign: 'middle', textAlign: 'center', borderRadius: 50 }} onPress={() => speakText(inputText, language)}>
                        <AntDesign style={{}} name="sound" size={20} color="white" />
                    </Text>
                </View>

                <View style={{ position: 'relative' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                        <Text style={{ fontFamily: FONT.regular, fontSize: 16, color: colorScheme === 'light' ? COLORS.gray : COLORS.lightText }}>Translate To ({language === 'en' ? 'Bangla' : 'English'})</Text>
                    </View>

                    <TextInput
                        style={[
                            styles.textInput,
                            {
                                backgroundColor: colorScheme === 'light' ? COLORS.white : COLORS.darkSecondary,
                                borderColor: colorScheme === 'light' ? COLORS.gray2 : 'transparent',
                                borderWidth: colorScheme === 'light' ? 1 : 0,
                                color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText,
                                textAlignVertical: 'top'
                            }
                        ]}
                        multiline
                        placeholder=""
                        placeholderTextColor={colorScheme === 'light' ? COLORS.gray : COLORS.gray2}
                        value={inputText === '' ? '' : translatedText}
                    />
                    <View style={{ position: 'absolute', right: 10, bottom: 10, display: 'flex', flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end', gap: 15 }}>
                        <FontAwesome6 name="copy" size={24} color={colorScheme === 'light' ? COLORS.gray : COLORS.lightText} onPress={() => copyToClipboard(translatedText)} />
                        <Text style={{ backgroundColor: COLORS.primary, width: 40, height: 40, borderRadius: 50, verticalAlign: 'middle', textAlign: 'center' }} onPress={() => speakText(translatedText, language === 'en' ? 'bn' : 'en')}>
                            <AntDesign style={{}} name="sound" size={20} color="white" />
                        </Text>
                    </View>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontStyle: 'italic', color: colorScheme === 'light' ? COLORS.gray : COLORS.lightText }}>* The translation service is provided by Google. It may not be completely accurate.</Text>
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
        minHeight: 150,
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