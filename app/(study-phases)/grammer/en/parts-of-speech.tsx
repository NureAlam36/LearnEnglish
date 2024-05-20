import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { useColorSchemeContext } from "@/context/ColorSchemeContext";

import PreLoader from '@/components/PreLoader';
import { FONT, COLORS } from "@/constants";

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

// https://www.twinkl.com/teaching-wiki/parts-of-speech-in-english
// // https://www.papertrue.com/blog/parts-of-speech/
// // // https://www.researchgate.net/publication/359843201_Parts_of_Speech_in_English_Grammar

const PartsOfSpeech = () => {
    const [loading, setLoading] = useState(true);
    const { colorScheme, theme } = useColorSchemeContext();

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 100);
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
        },
        heading_sm: {
            fontSize: 17,
            fontFamily: FONT.bold,
            color: theme.headingPrimary
        }
    })

    return (
        !loading ? <ScrollView style={[styles.container, { backgroundColor: theme.bgPrimary }]} showsVerticalScrollIndicator={false}>
            <View style={{ padding: 15 }}>
                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>What are parts of speech?</Text>
                <Text style={styles.text}>Parts of speech are the categories that we put words into according to how they function. They’re sometimes known as word classes. There are nine parts of speech that make up English grammar:</Text >

                <View style={{ display: 'flex', gap: 5, marginTop: 10 }}>
                    <Text style={styles.text}>1. Noun</Text>
                    <Text style={styles.text}>2. Pronoun</Text>
                    <Text style={styles.text}>3. Adjective</Text>
                    <Text style={styles.text}>4. Verb</Text>
                    <Text style={styles.text}>5. Adverb</Text>
                    <Text style={styles.text}>6. Preposition</Text>
                    <Text style={styles.text}>7. Conjunction</Text>
                    <Text style={styles.text}>8. Interjection</Text>
                </View>

                <View style={{ display: 'flex', gap: 12, marginTop: 20 }}>
                    <Text style={styles.text}>Each one of these parts of speech has its own special function within the English language. In fact, we use one or more of them in every sentence we say or write. We can look at parts of speech as the foundations that English grammar is built on.</Text>
                    <Text style={styles.text}>The vast majority of words belong to one of these parts of speech. However, some words can function in different ways, so they can belong to several different word classes. And, while these categories are set in stone, some of their contents can change.</Text>
                    <Text style={styles.text}>Let’s take a look at the nine parts of speech and how we use them</Text>
                </View>

                <Divider marginTop={20} marginBottom={20} />

                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>1. Noun</Text>
                <Text style={styles.text}>Nouns are naming words. We use nouns to refer to people, animals, objects, places and even feelings. There are several different types of noun:</Text>

                <View style={{ display: 'flex', gap: 12, marginTop: 15 }}>
                    <Text style={styles.text}>• <Text style={{ fontFamily: FONT.bold }}>Proper nouns:</Text> These are names of people or places. They should always start with a capital letter. In the sentence ‘David lives in Brisbane’, David and Brisbane are proper nouns. The days of the week and months of the year are also proper nouns, so we always capitalise them (‘David went to Brisbane on a Saturday in May’).</Text>
                    <Text style={styles.text}>• <Text style={{ fontFamily: FONT.bold }}>Common nouns:</Text> A common noun is a noun that describes an everyday thing (‘boy’, ‘dog’, ‘cup’, ‘paper’, ‘orange’, ‘nine’). Most nouns fall into this category.</Text>
                    <Text style={styles.text}>• <Text style={{ fontFamily: FONT.bold }}>Collective nouns:</Text> As their name suggests, collective nouns describe a collection of things (‘group’, ‘team’, ‘class’).</Text>
                    <Text style={styles.text}>• <Text style={{ fontFamily: FONT.bold }}>Concrete nouns:</Text> Concrete nouns are the names of actual physical things (‘woman’, ‘cat’, ‘chair’, ‘plate’, ‘London’). As you can see, concrete nouns can be common or proper nouns.</Text>
                    <Text style={styles.text}>• <Text style={{ fontFamily: FONT.bold }}>Abstract nouns:</Text> Abstract nouns are the names of concepts or feelings, such as ‘love’, ‘happiness’, ‘knowledge’ or ‘friendship’. These are things that we can’t physically see or touch, but we still need names to describe them.</Text>
                </View>

                <Divider marginTop={20} marginBottom={20} />


                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>2. Pronoun</Text>
                <Text style={styles.text}>Pronouns are words that can replace a noun in a sentence. They enable us to write and speak more concisely, and they fall into seven different categories. These are:</Text>

                <View style={{ display: 'flex', gap: 12, marginTop: 15 }}>
                    <Text style={styles.text}>• <Text style={{ fontFamily: FONT.bold }}>Personal pronouns</Text> We use personal pronouns to refer to ourselves, other people and things. For example, ‘I’, ‘you’, ‘he’, ‘she’, ‘they’, ‘it’. Personal pronouns help to prevent our writing becoming too repetitive, as we don’t need to repeat the noun. We can say, ‘Maria is a great musician. She plays the piano.’</Text>
                    <Text style={styles.text}>• <Text style={{ fontFamily: FONT.bold }}>Possessive pronouns</Text> These show ownership, for example, ‘mine’, ‘yours’, ‘theirs’.</Text>
                    <Text style={styles.text}>• <Text style={{ fontFamily: FONT.bold }}>Demonstrative pronouns</Text> We use these to help us identify a noun (‘this’, ‘that’, ‘those’).</Text>
                    <Text style={styles.text}>• <Text style={{ fontFamily: FONT.bold }}>Relative pronouns</Text> These are used to link one clause or phrase to another in a sentence. Examples include ‘that’, ‘who’ and ‘which’. We can see how these can be used in this sentence: ‘I met the boy who just moved into our road.’</Text>
                    <Text style={styles.text}>• <Text style={{ fontFamily: FONT.bold }}>Indefinite pronouns</Text> When we want to describe an unspecified quantity, we use indefinite pronouns. They include ‘all’, ‘some’ and ‘any’.</Text>
                    <Text style={styles.text}>• <Text style={{ fontFamily: FONT.bold }}>Reflexive pronouns</Text> These are pronouns that refer back to us when we’re talking about ourselves. In fact, ‘ourselves’ is an example of a reflexive pronoun, along with ‘myself’, ‘yourself’, ‘himself’, ‘herself’, ‘itself’ and ‘themselves’.</Text>
                    <Text style={styles.text}>• <Text style={{ fontFamily: FONT.bold }}>Interrogative pronouns</Text> Need to ask someone a question? Use an interrogative pronoun! ‘Which’, ‘what’, ‘who’ and ‘whom’ all fall into this category.</Text>
                </View>

                <Divider marginTop={20} marginBottom={20} />


                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>3. Adjective</Text>
                <Text style={styles.text}>Adjectives are describing words that are used to describe a noun. They’re usually positioned directly before the noun in a sentence, to give us more detail about it. For example, in the sentence ‘It was a lovely day’, the adjective ‘lovely’ is used to give us more detail about the noun ‘day’.</Text>
                <Text style={[styles.text, { marginTop: 10 }]}>There are several different types of adjectives, and we need to be able to recognise all of them when we’re looking at parts of speech. They are:</Text>

                <View style={{ display: 'flex', gap: 12, marginTop: 15 }}>
                    <Text style={styles.text}>• <Text style={{ fontFamily: FONT.bold }}>Descriptive adjectives</Text> Most adjectives fall into this category. An example of a descriptive adjective is ‘happy’, as in ‘She had a happy face’; or ‘little’ - ‘I played with the little dog’. A descriptive adjective simply gives us more information about the noun or pronoun it’s describing.</Text>
                    <Text style={styles.text}>• <Text style={{ fontFamily: FONT.bold }}>Quantitative adjectives</Text> These adjectives tell us how many of something there are. For example, ‘I ate two biscuits’. ‘Two’ is the quantitative adjective here.</Text>
                    <Text style={styles.text}>• <Text style={{ fontFamily: FONT.bold }}>Comparative adjectives</Text> These compare one noun to another, as in the sentence ‘Manuel is taller than Peter.’ Comparative adjectives often have the suffix ‘-er’.</Text>
                    <Text style={styles.text}>• <Text style={{ fontFamily: FONT.bold }}>Superlative adjectives</Text> We use a superlative adjective when something can’t be compared to anything else - for example, ‘Charlotte is the fastest runner in her class.’ These adjectives usually end in ‘-est’.</Text>
                </View>

                <Divider marginTop={20} marginBottom={20} />

                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>4. Verb</Text>
                <Text style={styles.text}>Verbs are doing words - they describe actions. They can be tricky to learn, as they can change form depending on whether they’re being used in the present or past tense. Verbs are particularly important parts of speech, as you can’t have a complete sentence without a verb.</Text>
                <Text style={[styles.text, { marginTop: 10 }]}>Some verbs describe actions we can experience physically (for example, ‘run’, ‘jump’, ‘dance’, ‘shout’, ‘write’, ‘learn’). Other verbs tell us about a state of being (‘feel’, ‘become’, ‘know’, ‘belong’).</Text>
                <Text style={[styles.text, { marginTop: 10 }]}>Some verbs are auxiliary verbs, also known as helping verbs. These are verbs which define the tenses, voices and moods of other verbs. There are three primary auxiliary verbs in English:</Text>

                <View style={{ display: 'flex', gap: 12, marginTop: 15 }}>
                    <Text style={styles.text}>• To be</Text>
                    <Text style={styles.text}>• To do</Text>
                    <Text style={styles.text}>• To have</Text>
                </View>


                <View style={{ display: 'flex', gap: 12, marginTop: 20 }}>
                    <Text style={styles.text}>For example, in the sentence ‘Sarah was going to school’, ‘was’ (the past tense of ‘to be’) is an auxiliary verb. It tells us the tense of the verb ‘going’.</Text>
                    <Text style={styles.text}>Modal verbs, such as ‘will’, ‘can’, ‘might’ and ‘should’, are also classed as auxiliary verbs. Modal verbs show intent or possibility, and are also used to make requests, give permission, or show that someone is capable of something.</Text>
                    <Text style={styles.text}>We can also use some verbs as linking verbs. These link the subject of a sentence to information about it; for example, ‘The dog was brown and white.’ The verb ‘was’ is being used as a linking verb here.</Text>
                </View>

                <Divider marginTop={20} marginBottom={20} />


                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>5. Adverb</Text>
                <Text style={styles.text}>Adverbs are also describing words, but instead of describing nouns, they describe verbs, adjectives or even other adverbs. We use them to show us how an action is carried out. There are five main types of adverbs:</Text>

                <View style={{ display: 'flex', gap: 12, marginTop: 15 }}>
                    <Text style={styles.text}>• <Text style={{ fontFamily: FONT.bold }}>Adverbs of time:</Text> These tell us when something is done - for example, ‘today’, ‘soon’, ‘later’, ‘eventually’.</Text>
                    <Text style={styles.text}>• <Text style={{ fontFamily: FONT.bold }}>Adverbs of place:</Text> These show us where something is happening (‘here’, ‘there’, ‘somewhere’, ‘left’, ‘right’).</Text>
                    <Text style={styles.text}>• <Text style={{ fontFamily: FONT.bold }}>Adverbs of manner:</Text> Adverbs of manner show us how something is done (‘quickly’, ‘carefully’, ‘happily’, ‘loudly’).</Text>
                    <Text style={styles.text}>• <Text style={{ fontFamily: FONT.bold }}>Adverbs of degree:</Text> These tell us ‘how much’. For example, ‘very’, ‘extremely’, ‘most’, ‘least’.</Text>
                    <Text style={styles.text}>• <Text style={{ fontFamily: FONT.bold }}>Adverbs of frequency</Text> These adverbs tell us how frequently something happens (‘daily’, ‘usually’, ‘occasionally’, ‘never’, ‘always’).</Text>
                </View>

                <Divider marginTop={20} marginBottom={20} />

                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>6. Preposition</Text>
                <View style={{ display: 'flex', gap: 12, marginTop: 20 }}>
                    <Text style={styles.text}>We use prepositions to tell us the place, time or direction of something in relation to something else. All prepositions relate to one of these three things. For example:</Text>
                    <Text style={styles.text}>‘The cat is inside the cardboard box.’ ‘Inside’ is a preposition of place.</Text>
                    <Text style={styles.text}>‘I’m going home after Christmas.’ ‘After’ is a preposition of time.</Text>
                    <Text style={styles.text}>‘Let’s walk through the park.’ ‘Through’ is a preposition of direction.</Text>
                    <Text style={styles.text}>Some other common examples of prepositions include ‘before’, ‘during’, ‘into’, ‘across’ and ‘between’.</Text>
                </View>

                <Divider marginTop={20} marginBottom={20} />


                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>6. Conjunction</Text>
                <Text style={styles.text}>As you might have guessed from its name, a conjunction is a word that joins two parts of a sentence together. Conjunctions can connect words, phrases or clauses.</Text>
                <Text style={[styles.text, { marginTop: 10 }]}>We can categorise conjunctions in three different ways.</Text>

                <View style={{ display: 'flex', gap: 12, marginTop: 15 }}>
                    <Text style={styles.text}>• <Text style={{ fontFamily: FONT.bold }}>Coordinating conjunctions</Text> connect two words, phrases or clauses in a sentence that are both of equal value. For example, ‘I went shopping and bought some shoes.’ Examples of coordinating conjunctions include ‘and’, ‘or’, ‘but’ and ‘so’.</Text>
                    <Text style={styles.text}>• <Text style={{ fontFamily: FONT.bold }}>Subordinating conjunctions</Text> are used to link a main clause to a subordinate clause, as in the sentence, ‘I’m tired because I had to work late.’ ‘Because’ is a good example of a subordinating conjunction. Others include ‘although’, ‘since’, ‘as’ and ‘while’.</Text>
                    <Text style={styles.text}>• <Text style={{ fontFamily: FONT.bold }}>Correlating conjunctions</Text> always come in pairs, such as ‘either / or’ and ‘not only / but also’. They’re used to define a relationship between words or clauses in a sentence.</Text>
                </View>

                <Text style={[styles.text, { marginTop: 10 }]}>In addition, some adverbs can also act as conjunctions. These are known as conjunctive adverbs. We use them to connect two independent clauses or complete sentences, so they bring two separate ideas together. Examples include ‘however’, ‘although’ and ‘meanwhile’.</Text>

                <Divider marginTop={20} marginBottom={20} />

                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>8. Interjection</Text>
                <Text style={styles.text}>Interjections are exclamations that form a separate part of the sentence. They are used to indicate emotions such as awe, joy, pain, or hesitation. They can also be used as a command or a greeting. Here are some example sentences with interjections:</Text>

                <View style={{ display: 'flex', gap: 12, marginTop: 20 }}>
                    <Text style={styles.text}>We use prepositions to tell us the place, time or direction of something in relation to something else. All prepositions relate to one of these three things. For example:</Text>
                    <Text style={styles.text}>‘The cat is inside the cardboard box.’ ‘Inside’ is a preposition of place.</Text>
                    <Text style={styles.text}>‘I’m going home after Christmas.’ ‘After’ is a preposition of time.</Text>
                    <Text style={styles.text}>‘Let’s walk through the park.’ ‘Through’ is a preposition of direction.</Text>
                    <Text style={styles.text}>Some other common examples of prepositions include ‘before’, ‘during’, ‘into’, ‘across’ and ‘between’.</Text>
                </View>
            </View>
        </ScrollView>
            : <PreLoader />
    )
}



export default PartsOfSpeech