import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import Voice from '@react-native-voice/voice';

const SpeechToTextScreen = () => {
    const [originalText, setOriginalText] = useState('');
    const [transcribedText, setTranscribedText] = useState('');
    const [accuracy, setAccuracy] = useState(0);


    const startSpeechToText = async () => {
        try {
            setTranscribedText('');
            await Voice.start('en-US');
        } catch (error) {
            console.error(error);
        }
    };

    const stopSpeechToText = async () => {
        try {
            await Voice.stop();
        } catch (error) {
            console.error(error);
        }
    };

    const onSpeechResults = (event) => {
        const transcribed = event.value[0];
        setTranscribedText(transcribed);
        calculateAccuracy(originalText, transcribed);
    };

    const calculateAccuracy = (original, transcribed) => {
        // Simple accuracy calculation based on character count
        const originalLength = original.length;
        const transcribedLength = transcribed.length;
        const commonChars = original.split('').filter((char, index) => char === transcribed[index]).length;
        const accuracyPercentage = (commonChars / originalLength) * 100;
        setAccuracy(accuracyPercentage.toFixed(2));
    };

    const originalTextChanged = (text) => {
        setOriginalText(text);
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Original Text:</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
                onChangeText={originalTextChanged}
                value={originalText}
                placeholder="Enter original text"
            />
            <Text>Transcribed Text:</Text>
            <Text>{transcribedText}</Text>
            <Text>Accuracy: {accuracy}%</Text>
            <Button title="Start Speech to Text" onPress={startSpeechToText} />
            <Button title="Stop Speech to Text" onPress={stopSpeechToText} />
        </View>
    );
};

export default SpeechToTextScreen;
