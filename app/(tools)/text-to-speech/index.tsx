import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Stack } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import * as Speech from 'expo-speech';
import { COLORS, FONT } from "@/constants";
import { useColorSchemeContext } from "@/context/ColorSchemeContext";

const Index = () => {
    const { colorScheme } = useColorSchemeContext();
    const [inputText, setInputText] = useState('');

    const speakText = async () => {
        if (inputText.trim() === '') {
            Alert.alert('Error', 'Please enter some text.');
            return;
        }
        try {
            await Speech.speak(inputText, { language: 'en' });
        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'Failed to convert text to speech.');
        }
    };

    return (
        <React.Fragment>
            <Stack.Screen
                options={{
                    title: 'Text To Speech',
                    headerTitle: () => <Text style={{ fontSize: 18, color: 'white', fontFamily: FONT.medium }}>Text To Speech</Text>,
                    headerStyle: { backgroundColor: '#5495fb' },
                    // headerRight: () => (
                    //     <View style={styles.headerStyle}>
                    //         <FontAwesome style={{ color: '#fff' }} name="save" size={24} color="black" />
                    //         <Entypo style={{ color: '#fff' }} name="dots-three-vertical" size={24} color="black" />
                    //     </View>
                    // )
                }}
            />
            <View style={{ flex: 1, backgroundColor: colorScheme === 'light' ? '#fff' : COLORS.darkPrimary }}>
                <TextInput
                    style={[
                        styles.textInput,
                        {
                            backgroundColor: colorScheme === 'light' ? COLORS.white : COLORS.darkSecondary,
                            borderColor: colorScheme === 'light' ? COLORS.gray2 : 'transparent',
                            borderWidth: colorScheme === 'light' ? 1 : 0,
                            color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText
                        }
                    ]}
                    multiline
                    placeholder="Enter text here..."
                    placeholderTextColor={colorScheme === 'light' ? COLORS.gray : COLORS.gray2}
                    value={inputText}
                    onChangeText={setInputText}
                />


                <TouchableOpacity style={styles.button} onPress={speakText}>
                    <Text style={styles.buttonText}><AntDesign name="sound" size={24} color="white" /></Text>
                </TouchableOpacity>
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
        padding: 10,
        margin: 20,
        borderRadius: 10,
        minHeight: 250,
        fontSize: 16,
        fontFamily: FONT.regular,
    },
    lightStyle: {

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