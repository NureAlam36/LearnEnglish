import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import { FONT, COLORS } from "@/constants";

import PreLoader from '@/components/PreLoader';

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

const Person = () => {
    const [loading, setLoading] = useState(true);
    const { colorScheme, theme } = useColorSchemeContext();

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
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
        !loading ? <ScrollView style={[styles.container, { backgroundColor: theme.bgPrimary }]} showsVerticalScrollIndicator={false}>
            <View style={{ padding: 15 }}>
                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>Definition of Person:</Text>
                <Text style={styles.text}>In English grammar, person refers to the perspective or point of view from which a sentence is constructed. It helps us understand who is speaking, being spoken to, or being spoken about. Essentially, person revolves around the subject of a sentence, which is the noun or pronoun acting or being described.</Text >
                <Text style={[styles.text, { marginTop: 15 }]}>Imagine you are telling a story. If you say, “I went to the park,” the word “I” indicates that you, the speaker, are the sentence’s subject. In this case, you are using the first person. Likewise, if you say, “You should try this,” addressing someone directly, the word “you” signifies the second-person perspective. On the other hand, if you say, “She loves to dance,” focusing on someone other than yourself or the listener, the word “she” denotes the third-person perspective.</Text>

                <Divider marginTop={20} marginBottom={20} />

                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>Types of Person in English Grammar:</Text>
                <Text style={styles.text}>The three types of person in English grammar are:</Text>

                <Text style={[styles.heading_md, { marginTop: 20 }]}>1. First Person</Text>
                <Text style={[styles.text, { marginTop: 10 }]}>The first person perspective refers to the speaker or writer. It revolves around personal experiences, thoughts, or opinions. When using the first person, we employ pronouns like “I” or “we” to represent ourselves. For example:</Text>

                <View style={{ display: 'flex', gap: 5, marginTop: 10, marginBottom: 20, marginLeft: 15 }}>
                    <Text style={styles.text}>• “I love swimming in the ocean.”</Text>
                    <Text style={styles.text}>• “We are going to the movies later.”</Text>
                </View>

                <Text style={[styles.heading_md, { marginTop: 10 }]}>2. Second Person</Text>
                <Text style={[styles.text, { marginTop: 10 }]}>The second person perspective involves the listener or the person being directly addressed. It fosters a sense of interaction and engagement. The pronoun “you” is used to indicate the second person. For example:</Text>

                <View style={{ display: 'flex', gap: 5, marginTop: 10, marginBottom: 20, marginLeft: 15 }}>
                    <Text style={styles.text}>• “You should try this delicious cake recipe.”</Text>
                    <Text style={styles.text}>• “Did you enjoy the concert last night?”</Text>
                </View>

                <Text style={[styles.heading_md, { marginTop: 10 }]}>3. Third Person</Text>
                <Text style={[styles.text, { marginTop: 10 }]}>The third person revolves around someone or something being discussed. It takes a more objective stance and can include singular or plural subjects. Pronouns such as “he,” “she,” “it,” or “they” represent the third person. For example:</Text>

                <View style={{ display: 'flex', gap: 5, marginTop: 10, marginLeft: 15 }}>
                    <Text style={styles.text}>• “He is a talented musician.”</Text>
                    <Text style={styles.text}>• “They have completed their assignments.”</Text>
                </View>

                <Divider marginTop={20} marginBottom={20} />

                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>Identifying Grammatical Person:</Text>
                <Text style={styles.text}>To identify the grammatical person in a sentence, follow these steps:</Text>

                <View style={{ display: 'flex', gap: 10, marginTop: 15 }}>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>1. Locate the Subject:</Text> Identify the subject of the sentence. This is usually the noun or pronoun performing the action of the verb.</Text>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>2. Determine the Pronoun:</Text> If the subject is a pronoun, note which pronoun is used.</Text>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>3. Check Verb Conjugation:</Text> Look at the form of the verb to see how it agrees with the subject.</Text>
                </View>

                <Divider marginTop={20} marginBottom={20} />

                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>Additional Considerations:</Text>
                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Impersonal Constructions:</Text> Sometimes sentences use impersonal constructions like "one" (e.g., "One should always be honest"). Here, "one" functions as an indefinite pronoun.</Text>
                <Text style={[styles.text, { marginTop: 10 }]}><Text style={{ fontFamily: FONT.bold }}>Formal and Informal Variations:</Text> In some languages, there are different forms for formal and informal address (e.g., "tu" vs. "vous" in French), which affect second person identification.</Text>

                <Divider marginTop={20} marginBottom={20} />

                <Text style={styles.text}>Understanding and correctly identifying grammatical person is essential for proper sentence construction and clear communication. By following the steps above, you can determine whether a sentence is in the first, second, or third person, and ensure that verbs and pronouns are correctly aligned.</Text>
            </View>
        </ScrollView>
            : <PreLoader />
    )
}



export default Person