import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import { FONT, COLORS } from "@/constants";
import PreLoader from '@/components/PreLoader';
import { useColorSchemeContext } from '@/context/ColorSchemeContext';

const Divider = ({ marginTop = 0, marginBottom = 0, borderColor = '#cccccc' }) => {
    const { colorScheme, theme } = useColorSchemeContext();

    return (
        <View style={{
            height: 1,
            backgroundColor: colorScheme === 'light' ? borderColor : theme.borderColor,
            alignSelf: 'stretch',
            marginTop: marginTop,
            marginBottom: marginBottom,
        }} />
    )
}

const PastTense = () => {
    const { colorScheme, theme } = useColorSchemeContext();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 0);
    }, []);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.mainBg,
        },
        text: {
            fontSize: 17,
            fontFamily: FONT.regular,
            // color: '#242424'
            color: theme.textSecondary
        },
        noteText: {
            fontSize: 17,
            fontFamily: FONT.regular,
            color: '#242424'
        },
        heading_xl: {
            fontSize: 22,
            fontFamily: FONT.bold,
            color: theme.textPrimary
        },
        heading_lg: {
            fontSize: 20,
            fontFamily: FONT.bold,
            color: theme.textPrimary
        },
        heading_md: {
            fontSize: 18,
            fontFamily: FONT.bold,
            color: theme.textPrimary
        }
    })


    return (
        !loading ? <ScrollView style={styles.container}>
            <View style={{ padding: 15 }}>
                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>Past Tense</Text>
                <Text style={styles.text}>The past tense is used to describe actions or events that have already happened. In English, the past tense includes four main forms:</Text >


                <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 10 }]}>1. Simple Past:</Text>
                <View style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Usage:</Text> Describes actions that were completed in the past.</Text>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Form:</Text> Regular verbs add -ed to the base form; irregular verbs have various forms.</Text>

                    <Text style={[styles.heading_md, { marginTop: 5, marginBottom: 5, color: '#01636a', fontStyle: 'italic' }]}>Examples:</Text>

                    <View style={{ display: 'flex', gap: 5, marginLeft: 20 }}>
                        <Text style={styles.text}>• She walked to school yesterday. (completed action)</Text>
                        <Text style={styles.text}>• They went to the park last week. (completed action, irregular verb)</Text>
                    </View>
                </View>

                <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 10 }]}>2. Past Continuous (Past Progressive):</Text>
                <View style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Usage:</Text> Describes actions that were ongoing at a specific time in the past.</Text>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Form:</Text> Was/Were + verb-ing.</Text>

                    <Text style={[styles.heading_md, { marginTop: 5, marginBottom: 5, color: '#01636a', fontStyle: 'italic' }]}>Examples:</Text>

                    <View style={{ display: 'flex', gap: 5, marginLeft: 20 }}>
                        <Text style={styles.text}>• She was walking to school when it started to rain. (ongoing action at a specific past time)</Text>
                        <Text style={styles.text}>• They were playing soccer at 10 AM. (ongoing action at a specific past time)</Text>
                    </View>
                </View>

                <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 10 }]}>3. Past Perfect:</Text>
                <View style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Usage:</Text> Describes actions that were completed before another action in the past.</Text>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Form:</Text> Had + past participle of the verb.</Text>

                    <Text style={[styles.heading_md, { marginTop: 5, marginBottom: 5, color: '#01636a', fontStyle: 'italic' }]}>Examples:</Text>

                    <View style={{ display: 'flex', gap: 5, marginLeft: 20 }}>
                        <Text style={styles.text}>• She had walked to school before the bell rang. (action completed before another past action)</Text>
                        <Text style={styles.text}>• They had finished their homework before they went out to play. (action completed before another past action)</Text>
                    </View>
                </View>

                <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 10 }]}>4. Past Perfect Continuous (Past Perfect Progressive):</Text>
                <View style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Usage:</Text> Describes actions that were ongoing in the past up until another past action.</Text>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Form:</Text> Had been + verb-ing.</Text>

                    <Text style={[styles.heading_md, { marginTop: 5, marginBottom: 5, color: '#01636a', fontStyle: 'italic' }]}>Examples:</Text>

                    <View style={{ display: 'flex', gap: 5, marginLeft: 20 }}>
                        <Text style={styles.text}>• She had been walking to school for 30 minutes before it started to rain. (ongoing action up to a point in the past)</Text>
                        <Text style={styles.text}>• They had been studying for hours before the exam began. (ongoing action up to a point in the past)</Text>
                    </View>
                </View>

                <Divider marginTop={20} marginBottom={20} />

                <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5 }]}> Key Points:</Text>
                <View style={{ borderWidth: 1, borderColor: theme.borderColor, marginTop: 10, marginBottom: 20, padding: 15 }}>
                    <View style={{ display: 'flex', gap: 15 }}>
                        <Text style={styles.text}>• The simple past is used for actions that were completed in the past.</Text>
                        <Text style={styles.text}>• The past continuous is used for actions that were in progress at a specific time in the past.</Text>
                        <Text style={styles.text}>• The past perfect is used for actions that were completed before another past action.</Text>
                        <Text style={styles.text}>• The past perfect continuous emphasizes the duration of an action that was ongoing up until another past event.</Text>
                    </View>
                </View>

                <Text style={styles.text}>Understanding these forms helps in accurately describing various types of actions and states in the past context.</Text>
            </View>
        </ScrollView>
            : <PreLoader />
    )
}

export default PastTense