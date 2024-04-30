import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Stack } from 'expo-router';
import { FontAwesome, Entypo, AntDesign } from '@expo/vector-icons';
import * as Speech from 'expo-speech';
import { COLORS, FONT } from "@/constants";

import * as FileSystem from 'expo-file-system';


const Index = () => {
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
                    headerRight: () => (
                        <View style={styles.headerStyle}>
                            <FontAwesome style={{ color: '#fff' }} name="save" size={24} color="black" />
                            <Entypo style={{ color: '#fff' }} name="dots-three-vertical" size={24} color="black" />
                        </View>
                    )
                }}
            />
            <TextInput
                style={styles.textInput}
                multiline
                placeholder="Enter text here..."
                value={inputText}
                onChangeText={setInputText}
            />
            <TouchableOpacity style={styles.button} onPress={speakText}>
                <Text style={styles.buttonText}><AntDesign name="sound" size={24} color="white" /></Text>
            </TouchableOpacity>
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
        margin: 20,
        borderRadius: 10,
        minHeight: 250,
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