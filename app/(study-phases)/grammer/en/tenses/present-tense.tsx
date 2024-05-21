import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import { FONT, COLORS } from "@/constants";
import PreLoader from '@/components/PreLoader';
import { useColorSchemeContext } from '@/context/ColorSchemeContext';
import Divider from '@/components/Divider';


const PresentTense = () => {
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
                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>Present Tense</Text>
                <Text style={styles.text}>The present tense is a grammatical tense used to describe actions or events that are currently happening, habitual actions, general truths, and situations that are generally or always true. In English, the present tense includes four main forms:</Text >


                <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 10 }]}>1.  Simple Present:</Text>
                <View style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Usage:</Text> Describes habitual actions, general truths, and states of being.</Text>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Form:</Text> Base form of the verb (for he/she/it, add an  s or  es).</Text>

                    <Text style={[styles.heading_md, { marginTop: 5, marginBottom: 5, color: '#01636a', fontStyle: 'italic' }]}>Examples:</Text>

                    <View style={{ display: 'flex', gap: 5, marginLeft: 20 }}>
                        <Text style={styles.text}>• She  walks  to school every day. (habitual action)</Text>
                        <Text style={styles.text}>• The sun  rises  in the east. (general truth)</Text>
                        <Text style={styles.text}>• They  live  in New York. (state of being)</Text>
                    </View>
                </View>

                <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 10 }]}>2.  Present Continuous (Present Progressive):</Text>
                <View style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Usage:</Text> Describes actions that are currently in progress or ongoing.</Text>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Form:</Text> Am/Is/Are + verb ing.</Text>

                    <Text style={[styles.heading_md, { marginTop: 5, marginBottom: 5, color: '#01636a', fontStyle: 'italic' }]}>Examples:</Text>

                    <View style={{ display: 'flex', gap: 5, marginLeft: 20 }}>
                        <Text style={styles.text}>• She  is walking  to school right now. (current action)</Text>
                        <Text style={styles.text}>• They  are studying  for their exams. (ongoing action)</Text>
                    </View>
                </View>

                <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 10 }]}>3.  Present Perfect:</Text>
                <View style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Usage:</Text> Describes actions that occurred at an unspecified time in the past and have relevance to the present, or actions that started in the past and continue to the present.</Text>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Form:</Text> Has/Have + past participle of the verb.</Text>

                    <Text style={[styles.heading_md, { marginTop: 5, marginBottom: 5, color: '#01636a', fontStyle: 'italic' }]}>Examples:</Text>

                    <View style={{ display: 'flex', gap: 5, marginLeft: 20 }}>
                        <Text style={styles.text}>• She  has walked  to school. (action relevant to the present)</Text>
                        <Text style={styles.text}>• They  have lived  here for ten years. (action continuing to the present)</Text>
                    </View>
                </View>

                <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 10 }]}>4.  Present Perfect Continuous (Present Perfect Progressive):</Text>
                <View style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Usage:</Text> Describes actions that started in the past and continue into the present, often with an emphasis on the duration of the action.</Text>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Form:</Text> Has/Have been + verb ing.</Text>

                    <Text style={[styles.heading_md, { marginTop: 5, marginBottom: 5, color: '#01636a', fontStyle: 'italic' }]}>Examples:</Text>

                    <View style={{ display: 'flex', gap: 5, marginLeft: 20 }}>
                        <Text style={styles.text}>• She  has been walking  to school for 30 minutes. (action continuing with emphasis on duration)</Text>
                        <Text style={styles.text}>• They  have been studying  since morning. (ongoing action with emphasis on duration)</Text>
                    </View>
                </View>

                <Divider marginTop={20} marginBottom={20} />

                <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5 }]}> Key Points:</Text>
                <View style={{ borderWidth: 1, borderColor: theme.borderColor, marginTop: 10, marginBottom: 20, padding: 15 }}>
                    <View style={{ display: 'flex', gap: 15 }}>
                        <Text style={styles.text}>• The  simple present  is used for regular, habitual actions or universal truths.</Text>
                        <Text style={styles.text}>• The  present continuous  is used for actions happening at the moment of speaking or for temporary situations.</Text>
                        <Text style={styles.text}>• The  present perfect  connects past actions to the present moment.</Text>
                        <Text style={styles.text}>• The  present perfect continuous  emphasizes the duration of an activity that started in the past and is still continuing.</Text>
                    </View>
                </View>

                <Text style={styles.text}>Understanding these forms helps in accurately describing various types of actions and states in the present context.</Text>
            </View>
        </ScrollView>
            : <PreLoader />
    )
}

export default PresentTense