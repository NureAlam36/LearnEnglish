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

const FutureTense = () => {
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
                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>Future Tense</Text>
                <Text style={styles.text}>TThe future tense is used to describe actions or events that will happen in the future. In English, the future tense includes four main forms:</Text >


                <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 10 }]}>1. Simple Future:</Text>
                <View style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Usage:</Text> Describes actions that will occur in the future.</Text>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Form:</Text> Will + base form of the verb.</Text>

                    <Text style={[styles.heading_md, { marginTop: 5, marginBottom: 5, color: '#01636a', fontStyle: 'italic' }]}>Examples:</Text>

                    <View style={{ display: 'flex', gap: 5, marginLeft: 20 }}>
                        <Text style={styles.text}>• She will walk to school tomorrow. (action that will happen)</Text>
                        <Text style={styles.text}>• They will travel to France next year. (action that will happen)</Text>
                    </View>
                </View>

                <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 10 }]}>2. Future Continuous (Future Progressive):</Text>
                <View style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Usage:</Text> Describes actions that will be ongoing at a specific time in the future.</Text>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Form:</Text> Will be + verb-ing.</Text>

                    <Text style={[styles.heading_md, { marginTop: 5, marginBottom: 5, color: '#01636a', fontStyle: 'italic' }]}>Examples:</Text>

                    <View style={{ display: 'flex', gap: 5, marginLeft: 20 }}>
                        <Text style={styles.text}>• She will be walking to school at 8 AM. (action that will be ongoing at a specific future time)</Text>
                        <Text style={styles.text}>• They will be studying at this time tomorrow. (action that will be ongoing at a specific future time)</Text>
                    </View>
                </View>

                <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 10 }]}>3. Future Perfect:</Text>
                <View style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Usage:</Text> Describes actions that will be completed before a specific time in the future.</Text>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Form:</Text> Will have + past participle of the verb.</Text>

                    <Text style={[styles.heading_md, { marginTop: 5, marginBottom: 5, color: '#01636a', fontStyle: 'italic' }]}>Examples:</Text>

                    <View style={{ display: 'flex', gap: 5, marginLeft: 20 }}>
                        <Text style={styles.text}>• She will have walked to school by 9 AM. (action that will be completed before a specific future time)</Text>
                        <Text style={styles.text}>• They will have finished their homework by dinner time. (action that will be completed before a specific future time)</Text>
                    </View>
                </View>

                <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 10 }]}>4. Future Perfect Continuous (Future Perfect Progressive):</Text>
                <View style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Usage:</Text> Describes actions that will be ongoing up until a specific time in the future, often with an emphasis on the duration.</Text>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Form:</Text> Will have been + verb-ing.</Text>

                    <Text style={[styles.heading_md, { marginTop: 5, marginBottom: 5, color: '#01636a', fontStyle: 'italic' }]}>Examples:</Text>

                    <View style={{ display: 'flex', gap: 5, marginLeft: 20 }}>
                        <Text style={styles.text}>• She will have been walking to school for 30 minutes by the time she arrives. (ongoing action up to a specific future time with emphasis on duration)</Text>
                        <Text style={styles.text}>• They will have been studying for hours by the time the exam starts. (ongoing action up to a specific future time with emphasis on duration)</Text>
                    </View>
                </View>

                <Divider marginTop={20} marginBottom={20} />

                <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5 }]}> Key Points:</Text>
                <View style={{ borderWidth: 1, borderColor: theme.borderColor, marginTop: 10, marginBottom: 20, padding: 15 }}>
                    <View style={{ display: 'flex', gap: 15 }}>
                        <Text style={styles.text}>• The simple future is used for actions that will happen in the future.</Text>
                        <Text style={styles.text}>• The future continuous is used for actions that will be in progress at a specific time in the future.</Text>
                        <Text style={styles.text}>• The future perfect is used for actions that will be completed before another action or time in the future.</Text>
                        <Text style={styles.text}>• The future perfect continuous emphasizes the duration of an action that will be ongoing up until a specific future time.</Text>
                    </View>
                </View>

                <Text style={styles.text}>Understanding these forms helps in accurately describing various types of actions and states in the future context.</Text>
            </View>
        </ScrollView>
            : <PreLoader />
    )
}

export default FutureTense