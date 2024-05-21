import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import { FONT, COLORS } from "@/constants";

import PreLoader from '@/components/PreLoader';
import Divider from '@/components/Divider';

// https://www.learnesl.net/what-are-modifiers-in-english/

const Modifiers = () => {
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
        },
        text: {
            fontSize: 17,
            fontFamily: FONT.regular,
            color: theme.textPrimary
        },
        heading_xl: {
            fontSize: 22,
            fontFamily: FONT.bold,
            color: theme.headingPrimary
        },
        heading_lg: {
            fontSize: 20,
            fontFamily: FONT.bold,
            color: theme.headingPrimary
        },
        heading_md: {
            fontSize: 18,
            fontFamily: FONT.bold,
            color: theme.headingPrimary
        }
    })

    return (
        !loading ? <ScrollView style={[styles.container, { backgroundColor: theme.bgPrimary }]} showsVerticalScrollIndicator={false}>
            <View style={{ padding: 15 }}>
                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>What are Modifiers</Text>
                <Text style={styles.text}>Modifiers are words or groups of words that add information about the nouns, pronouns and verbs of the sentence.</Text >

                <Text style={[styles.text, { marginTop: 20, marginBottom: 5 }]}>Modifiers add especial meaning to the sentence, they add color, vividness and interest.</Text>

                <Divider marginTop={20} marginBottom={20} />

                <Text style={[styles.heading_xl, { marginBottom: 5 }]}>Using Modifiers Correctly in Your Sentences</Text>
                <Text style={styles.text}>Modifiers give more information about something else in the sentence, and tell us more about the parts of a sentence. The two most important kinds of modifiers are adjective and adverbs.</Text>

                <Text style={[styles.heading_lg, { marginTop: 20, marginBottom: 5, color: '#01636a' }]}>Adjective:</Text>
                <Text style={styles.text}>An adjective modifies or gives more information about a noun or a pronoun appearing in a sentence.</Text>

                <View style={{ display: 'flex', gap: 5 }}>
                    <Text style={styles.text}>• A diligent worker.</Text>

                    <View style={{ display: 'flex', gap: 5 }}>
                        <Text style={styles.text}>Worker = noun</Text>
                        <Text style={styles.text}>Diligent = adjective (gives information or modifies a noun ‘worker’).</Text>
                    </View>
                </View>

                <Text style={[styles.heading_lg, { marginTop: 20, marginBottom: 5, color: '#01636a' }]}>Adverb:</Text>
                <Text style={styles.text}>An adverb modifies a verb, and adjective, or another adverb.</Text>

                <View style={{ display: 'flex', gap: 5, marginBottom: 15, marginTop: 10 }}>
                    <Text style={styles.text}>• She works diligently.</Text>

                    <View style={{ marginLeft: 15 }}>
                        <Text style={styles.text}>Works = verb, She = pronoun = subject , diligently = adverb (gives more information about the verb ‘works).</Text>
                    </View>
                </View>

                <View style={{ display: 'flex', gap: 5, marginBottom: 15 }}>
                    <Text style={styles.text}>• She is very diligent.</Text>

                    <View style={{ marginLeft: 15, display: 'flex', gap: 5 }}>
                        <Text style={styles.text}>Is = verb = linking verb (a linking verb describes something that a subject is), She = pronoun = subject,</Text>
                        <Text style={styles.text}>diligent = adjective (gives more information about the subject ‘she’).  very = adverb (modifies the adjective ‘diligent’).</Text>
                    </View>
                </View>

                <View style={{ display: 'flex', gap: 5 }}>
                    <Text style={styles.text}>• She works extremely diligently.</Text>

                    <View style={{ marginLeft: 15 }}>
                        <Text style={styles.text}>Works = verb = action verb,  she = pronoun = subject,  diligently = adverb, extremely = adverb (modifies the adverb in the sentence ‘diligently).</Text>
                    </View>
                </View>

                <Divider marginTop={20} marginBottom={20} />

                <Text style={styles.heading_xl}>Which to use an adjective or an adverb?:</Text>
                <Text style={styles.text}>In some sentences in English it can be a little tricky to figure out whether to use an adjective or adverb, here are a couple of rules which will help make it easier.</Text>

                <View style={{ marginTop: 15 }}>
                    <Text style={styles.text}>1. After an action verb, use and adverb. Remember that an action verb describes something that a subject does. Normally after action verbs an adjective is used.</Text>

                    <View style={{ display: 'flex', gap: 5 }}>
                        <Text style={styles.text}>• She is very diligent.</Text>
                    </View>
                </View>

                <View style={{ marginTop: 15, marginBottom: 15 }}>
                    <Text style={styles.text}>2. After a liking verb, use an adjective. Remember that a linking verb describes the state of being, it tells something that a subject is, rather than something that a subject does.</Text>

                    <View style={{ display: 'flex', gap: 5 }}>
                        <Text style={styles.text}>• She is diligent.</Text>
                    </View>
                </View>

                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Note:</Text> The most common linking verbs in in English is the verb to be but there are many other linking verbs in English: looks, seems, appears, feels, sounds all of these can be a linking verb. Remember these verbs can be used as an action verb, when used as action verb describe what the subject does and  when used as linking verb describes what the subject is.</Text>


                <View style={{ display: 'flex', gap: 5, marginTop: 15 }}>
                    <Text style={styles.text}>• She looks diligent. (linking verb)</Text>
                    <Text style={styles.text}>•  The are looking for a diligent worker. (action verb)</Text>
                </View>

                <Divider marginTop={20} marginBottom={20} />

                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>Common Mistakes With Using Modifiers</Text>
                <Text style={[styles.heading_md, { marginBottom: 10, color: '#01636a' }]}>The Correct use of “well”. </Text>

                <View style={{ display: 'flex', gap: 5 }}>
                    <Text style={styles.text}>Well is word can be used as an adjective, as an adverb as noun or interjection.</Text>
                    <Text style={styles.text}>Well as an adjective: healthy.</Text>
                    <Text style={styles.text}>Well as an adverb: in a good way.</Text>
                </View>

                <View style={{ display: 'flex', gap: 5, marginTop: 15, marginBottom: 15, marginLeft: 20 }}>
                    <Text style={styles.text}>• The patient looks well today. (adjective)</Text>
                    <Text style={styles.text}>•  The hospital feeds its patients well. (adverb)</Text>
                </View>

                <Text style={[styles.text, { fontStyle: 'italic' }]}>Don’t confuse the adjective ‘well’ with the adjective ‘good’.</Text>

                <View style={{ display: 'flex', gap: 5, marginTop: 15, marginLeft: 20 }}>
                    <Text style={styles.text}>• You look good in your new dress.</Text>

                    <View style={{ display: 'flex', gap: 5, marginLeft: 20 }}>
                        <Text style={styles.text}>Look = verb = linking verb, you = pronoun = subject and good = adjective</Text>
                    </View>
                </View>

                <View style={{ display: 'flex', gap: 5, marginTop: 15, marginLeft: 20 }}>
                    <Text style={styles.text}>• You look well in your new dress. (Incorrect ‘ because well means healthy)</Text>
                </View>

                <Text style={[styles.heading_md, { marginBottom: 10, marginTop: 30, color: '#01636a' }]}>Using Badly as an Adjective or an Adverb…</Text>
                <Text style={styles.text}>‘Badly’ is an adverb, meaning “in a bad way.“ Use it only with an action verb.</Text>

                <View style={{ display: 'flex', gap: 5, marginTop: 15, marginLeft: 20 }}>
                    <Text style={styles.text}>• The accident damaged the car badly.</Text>
                    <Text style={styles.text}>• I feel badly about the accident. (Incorrect)</Text>
                    <Text style={styles.text}>• I feel bad about the accident. (Correct)</Text>
                </View>

                <View style={{ display: 'flex', gap: 5, marginTop: 15, marginLeft: 20 }}>
                    <Text style={styles.text}>You look well in your new dress. (Incorrect ‘ because well means healthy)</Text>
                </View>

                <Divider marginTop={20} marginBottom={20} />

                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>Misplaced and Dangling Modifiers</Text>
                <Text style={styles.text}>Sometimes a group of words works as a modifier in a sentence, like phrases and clauses. Both phrases and clauses often used as modifiers in sentences, they give more information about something else that appears in the sentence.</Text>

                <View style={{ display: 'flex', gap: 5, marginTop: 15, marginLeft: 20 }}>
                    <Text style={styles.text}>• Running to catch the bus, I tripped on my untied shoelace.</Text>
                    <View style={{ display: 'flex', gap: 5, marginLeft: 20 }}>
                        <Text style={styles.text}>(Main verb in the sentence ‘tripped’ and ‘I’ is the subject, ‘running to catch the bus’ is a phrase which gives more information about the subject ‘I’).</Text>
                    </View>
                </View>

                <View style={{ display: 'flex', gap: 5, marginTop: 15, marginLeft: 20 }}>
                    <Text style={styles.text}>• The food was spoiled because it had been left on the table overnight.</Text>
                    <View style={{ display: 'flex', gap: 5, marginLeft: 20 }}>
                        <Text style={styles.text}>(‘The food was spoiled’ is an independent clause, and ‘because it had…….overnight’ is a subordinate clause it cant stand as sentence alone, here the subordinate act as a modifier which gives information about the first clause).</Text>
                    </View>
                </View>

                <Divider marginTop={20} marginBottom={20} />


                <Text style={[styles.heading_md, { marginBottom: 10 }]}>Note:</Text>
                <Text style={styles.text}>We see that a group of word can function as a modifier, but it can create a problem if a modifying phrase or clause is not placed in proper relationship to the rest of the sentence. There are two basic problems mentioned below:</Text>

                <View style={{ display: 'flex', gap: 5, marginTop: 15 }}>
                    <Text style={styles.text}>1. When a modifiers is separated from the word or words it modifies, causing confusion, it is called a misplaced modifier. A modifying phrase or clause should be close to the word or words it modifies.</Text>

                    <View style={{ display: 'flex', gap: 5, marginTop: 8, marginLeft: 20 }}>
                        <Text style={styles.text}>• Painted bright yellow, the decorator selected a new cabinet for the kitchen.</Text>

                        <View style={{ display: 'flex', gap: 5, marginLeft: 20, marginBottom: 10 }}>
                            <Text style={styles.text}>(‘Painted bright yellow’, is a modifying phrase and is a misplaced modifier in the sentence, the simple way to correct the sentence is to move the modifier next to the clause or words that it modifies as below)</Text>
                        </View>

                        <Text style={styles.text}>• The decorator selected a new cabinet painted bright yellow for the kitchen. (Correct)</Text>
                    </View>
                </View>

                <View style={{ display: 'flex', gap: 5, marginTop: 25 }}>
                    <Text style={styles.text}>2. When a modifier has no word or words to modify, it is called a dangling modifier.</Text>

                    <View style={{ display: 'flex', gap: 5, marginTop: 8, marginLeft: 20 }}>
                        <Text style={styles.text}>• While driving to work yesterday morning, an accident delayed traffic on the highway.</Text>

                        <View style={{ display: 'flex', gap: 5, marginTop: 5, marginLeft: 20, marginBottom: 10 }}>
                            <Text style={styles.text}>(‘While driving to work yesterday morning’ is a modifying phrase which is not linked to any word in the sentence, or does not modify any clause or words. There are two ways fixing this particular sentence)</Text>

                            <Text style={styles.text}>(1) While I was driving to work yesterday morning, an accident delayed traffic on the highway.
                                (Turn the modifying into a clause, it would clear the meaning of the sentence)</Text>
                            <Text style={styles.text}>(2) While driving to work yesterday, I was delayed by an accident on the highway.
                                (put the word or clause next to the modifying phrase or clause it modifies.)</Text>
                        </View>

                        <Text style={styles.text}>• The decorator selected a new cabinet painted bright yellow for the kitchen. (Correct)</Text>
                    </View>
                </View>

                <Divider marginTop={20} marginBottom={20} />

                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>Conclusion</Text>
                <Text style={styles.text}>Now you are expert in using adjectives and adverbs as modifiers, so you should be able to go out and sprinkle your writing with all kinds of lively vivid interesting description using these modifiers correctly and you can do it without fear of making grammatical errors. </Text>
            </View>
        </ScrollView>
            : <PreLoader />
    )
}



export default Modifiers