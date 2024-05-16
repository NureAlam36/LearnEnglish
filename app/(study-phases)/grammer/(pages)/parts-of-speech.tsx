import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { useColorSchemeContext } from "@/context/ColorSchemeContext";

import Stack from 'expo-router/stack';

import PreLoader from '@/components/PreLoader';
import { FONT, COLORS } from "@/constants";

import ContentHeader from "@/components/Headers/ContentHeader";

const Divider = ({ marginTop = 0, marginBottom = 0, borderColor = '#cccccc' }) => {
    return (
        <View style={{
            height: 1,
            backgroundColor: borderColor,
            alignSelf: 'stretch',
            marginTop: marginTop,
            marginBottom: marginBottom,
        }} />
    )
}

const person = () => {
    const [loading, setLoading] = useState(true);
    const { colorScheme } = useColorSchemeContext();

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
            color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText
        },
        heading_xl: {
            fontSize: 22,
            fontFamily: FONT.bold,
            color: colorScheme === 'light' ? COLORS.black : '#fff'
        },
        heading_lg: {
            fontSize: 20,
            fontFamily: FONT.bold,
            color: colorScheme === 'light' ? COLORS.black : '#fff'
        },
        heading_md: {
            fontSize: 18,
            fontFamily: FONT.bold,
            color: colorScheme === 'light' ? COLORS.black : '#fff'
        },
        heading_sm: {
            fontSize: 17,
            fontFamily: FONT.bold,
            color: colorScheme === 'light' ? COLORS.black : '#fff'
        }
    })

    return (
        <React.Fragment>
            {
                !loading ? <ScrollView style={[styles.container, { backgroundColor: colorScheme === 'light' ? '#fff' : COLORS.darkSecondary }]}>
                    <View style={{ padding: 15 }}>
                        <Text style={[styles.heading_xl, { marginBottom: 10 }]}>Parts of speech কাকে বলে</Text>
                        <Text style={styles.text}>বাক্যের মধ্যে অন্তর্গত প্রত্যেকটি অর্থবোধক শব্দকেই parts of speech বলে। এখানে part অর্থ হল “অংশ” এবং speech অর্থ হলো ”কথা” অথবা ”বাক্য”। অর্থাৎ parts of speech হল বাক্যের অংশ এক একটি অংশ। একে বাংলা ভাষায় পদ প্রকরণ বলে।</Text >

                        <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24' }]}>Example:</Text>
                        <Text style={styles.text}>• Rahim goes to school</Text>
                        <Text style={[styles.text, { marginTop: 8 }]}>• Karim is working in the field.</Text>
                        <Text style={[styles.text, { marginTop: 8 }]}>• I ate rice.</Text>
                        <Text style={[styles.text, { marginTop: 8 }]}>• Kalam is a good student.</Text>
                        <Text style={[styles.text, { marginTop: 8 }]}>• Where are you living?</Text>

                        <Text style={[styles.text, { marginTop: 15 }]}>উপরের বাক্যগুলোতে Rahim, goes, to, school, Karim, is, working, in, the, field, I ate rice, Kalam, is, a, good, student, Where, are, you, living প্রত্যেকটি শব্দই এক একটি parts of speech।</Text>

                        <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24' }]}>NOTE:</Text>
                        <Text style={styles.text}>• শব্দগুলোকে বাক্যের মধ্যে ব্যবহার না করলে সেগুলোকে Part of Speech বলা যায় না।</Text>
                        <Text style={[styles.text, { marginTop: 8 }]}>• শব্দগুলোকে তাদের কাজের ভিত্তিতে বিভিন্ন শ্রেণীতে ভাগ করা হয়, এই শ্রেণীগুলোকে Part of Speech বলে। কিন্তু</Text>
                        <Text style={[styles.text, { marginTop: 8 }]}>• শব্দগুলোকে বাক্যের মধ্যে ব্যবহার না করলে সেগুলোকে কোন শ্রেণীতে ভাগ করা যায় না।</Text>
                        <Text style={[styles.text, { marginTop: 8 }]}>• শব্দগুলোকে তাদের কাজের ভিত্তিতে বিভিন্ন শ্রেণীতে ভাগ করা হয়, কিন্তু এই শ্রেণীগুলোকে শুধুমাত্র বাক্যের মধ্যে ব্যবহৃত শব্দগুলোর জন্য ব্যবহার করা হয়</Text>

                        <Divider marginTop={20} marginBottom={20} />

                        <Text style={[styles.heading_xl, { marginBottom: 10 }]}>Parts of speech এর প্রকারভেদঃ</Text>
                        <Text style={styles.text}>সাধারণত parts of speech মোট আট প্রকার। যথাঃ</Text>

                        <View style={{ display: 'flex', gap: 5, marginTop: 10 }}>
                            <Text style={styles.text}>1. Noun (বিশেষ্য)</Text>
                            <Text style={styles.text}>2. Pronoun (সর্বনাম)</Text>
                            <Text style={styles.text}>3. Adjective (বিশেষণ)</Text>
                            <Text style={styles.text}>4. Verb (ক্রিয়া)</Text>
                            <Text style={styles.text}>5. Adverb (ভাব বিশেষণ)</Text>
                            <Text style={styles.text}>6. Preposition (পদান্বয়ী অব্যয়)</Text>
                            <Text style={styles.text}>7. Conjunction (সমুচ্চয়ী অব্যয়)</Text>
                            <Text style={styles.text}>8. Interjection (আবেগসূচক অব্যয়)</Text>
                        </View>

                        <Text style={[styles.heading_xl, { marginBottom: 10, marginTop: 30, fontWeight: 'bold' }]}>সংক্ষেপে বাংলায় সংজ্ঞাঃ</Text>
                        <View style={{ display: 'flex', gap: 10 }}>
                            <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>1. Noun</Text> — যে কোন জিনিসের নাম। যেমন — Mahfuj, Chittagong, Poet, etc.</Text>
                            <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>2. Pronoun</Text> — সর্বনাম, নামের পরিবর্তে বেবহৃত হয়। যেমন — He, she, they, them, their, we, our, etc.</Text>
                            <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>3. Adjective</Text> — গুণ, দোষ, অবস্থা প্রকাশক শব্দ। যেমন — Good, bad, nice, beautiful, fat, fine, etc.</Text>
                            <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>4. Verb</Text> — কোন কিছু করা। যেমন — Go, do, sleep, dance, run, fight, etc.</Text>
                            <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>5. Adverb</Text> — ক্রিয়া কিভাবে, কখন কোথায় সম্পন্ন হল তা বোঝায়। যেমন — There, well, nicely, etc.</Text>
                            <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>6. Preposition</Text> — word -এর আগে বসে পূর্ববর্তী word -এর সাথে ঐ word -এর সম্পর্ক স্থাপন করে। যেমন — in, into, from, for, to, off, etc.</Text>
                            <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>7. Conjunction</Text> — দুই বা ততোধিক word/clause -কে যুক্ত করে। যেমন — and, but, as, for, if, yet, unless, because, etc.</Text>
                            <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>8. Interjection</Text> — আনন্দ , দুঃখ, আবেগ, হঠাৎ প্রকাশিত বিস্ময়, ঘৃণা, ভয় ইত্যাদি প্রকাশ করে। যেমন — Hurrah! (কি মজা!), Alas! (হায়!), Hush! (চুপ!), Fie! (ছি!), etc.</Text>
                        </View>


                        <Divider marginTop={20} marginBottom={20} />

                        <Text style={[styles.heading_xl, { marginBottom: 10 }]}>1. Noun কাকে বলে?</Text>
                        <Text style={styles.text}>যে শব্দ দিয়ে কোনো কিছুর নাম বোঝানো হয় তাকে Noun বলে। অথবা, যেসব শব্দ দিয়ে কোনো ব্যক্তি, বস্তু, প্রাণী, স্থান, বা ঘটনার নাম বোঝানো হয় তাকে Noun বলে। আমাদের চোখের সামনে যেসব জিনিস আমরা দেখতে পাই, সেগুলোরও Noun।</Text>

                        <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24' }]}>Example:</Text>

                        <View style={{ display: 'flex', gap: 5 }}>
                            <Text style={styles.text}>• Rahim is a student. (এই বাক্যে Rahim একজন ব্যক্তির নাম )</Text>
                            <Text style={styles.text}>• Dhaka is the capital of Bangladesh. ( এই বাক্যে Dhaka এবং Bangladesh হল স্থানের নাম )</Text>
                            <Text style={styles.text}>• Water is liquid. (এই বাক্যে Water হলো বস্তুর নাম )</Text>
                        </View>

                        <Text style={[styles.heading_lg, { marginBottom: 8, marginTop: 20 }]}>Noun এর প্রকারভেদঃ</Text>
                        <Text style={styles.text}>Noun কে সাধারণত দুই দিক দিয়ে ভাগ করা যায়। যথাঃ</Text>

                        <View style={{ display: 'flex', gap: 5, marginTop: 15 }}>
                            <Text style={styles.text}>1. Concrete Noun(ইন্দ্রিয়গ্রাহ্য বিশেষ্য)</Text>
                            <Text style={styles.text}>2. Abstract Noun(গুণবাচক বিশেষ্য)</Text>
                        </View>

                        <Text style={[styles.heading_sm, { marginTop: 20, color: '#a72a24' }]}>Concrete এর চার প্রকার এবং Abstract Noun মিলে পাঁচ প্রকার হয়। সুতরাং আমরা বলতে পারি Noun মোট পাঁচ প্রকার। যথাঃ</Text>

                        <View style={{ display: 'flex', gap: 5, marginTop: 10 }}>
                            <Text style={styles.text}>1. Proper Noun(নাম বাচক বিশেষ্য)</Text>
                            <Text style={styles.text}>2. Common Noun(জাতিবাচক বিশেষ্য)</Text>
                            <Text style={styles.text}>3. Collective Noun(সমষ্টিবাচক বিশেষ্য)</Text>
                            <Text style={styles.text}>4. Material Noun(বস্তুবাচক বিশেষ্য)</Text>
                            <Text style={styles.text}>5. Abstract Noun(গুণবাচক বিশেষ্য)</Text>
                        </View>

                        <Divider marginTop={20} marginBottom={20} />

                        <Text style={[styles.heading_xl, { marginBottom: 10 }]}>2. Pronoun কাকে বলে?</Text>
                        <Text style={styles.text}>oun এর পরিবর্তে ব্যবহৃত শব্দকে Pronoun বলে। এখানে, pro শব্দের অর্থ পরিবর্তে বা পক্ষে। pronounশব্দের অর্থ Noun পরিবর্তে বা পক্ষে। যেমন, I, We, he, she, you, they, who, it ইত্যাদি।</Text>

                        <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24' }]}>Example:</Text>

                        <View style={{ display: 'flex', gap: 5 }}>
                            <Text style={styles.text}>• Ratul has a book. He reads it.( এখানে, Ratul হল একটি Noun. এই Noun বারবার ব্যবহার না করে দ্বিতীয় বাক্যে এর পরিবর্তে He ব্যবহার করা হয়েছে। He হল একটি pronoun)</Text>
                            <Text style={styles.text}>• She came in the evening.( এখানে she হল একটি pronoun)</Text>
                        </View>

                        <Text style={[styles.heading_lg, { marginBottom: 8, marginTop: 20 }]}>Pronoun এর প্রকারভেদঃ</Text>
                        <Text style={styles.text}>Pronoun কে সাধারণত ৯ ভাগে ভাগ করা যায়। যথাঃ</Text>

                        <View style={{ display: 'flex', gap: 8, marginTop: 15 }}>
                            <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>1. Personal Pronoun:</Text> I, We, she, he, it, my, his, her.</Text>
                            <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>2. Reflexive Pronoun:</Text> Myself, Himself, Themselves.</Text>
                            <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>3. Interrogative Pronoun:</Text> Who, What, Whom, Whose.</Text>
                            <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>4. Relative Pronoun:</Text> Who, What, whom, Which, whose.</Text>
                            <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>5. Indefinite Pronoun:</Text> one, Someone, Anyone.</Text>
                            <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>6. Demonstrative Pronoun:</Text> This, these, that, those.</Text>
                            <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>7. Distributive Pronoun:</Text> Each, Either, Every, Nither.</Text>
                            <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>8. Emphatic Pronoun:</Text> Myself, themself, himself.</Text>
                            <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>9. Reciprocal Pronoun:</Text>  one other, Each other</Text>
                        </View>

                        <Divider marginTop={20} marginBottom={20} />

                        <Text style={[styles.heading_xl, { marginBottom: 10 }]}>3. Adjective কাকে বলে?</Text>
                        <Text style={styles.text}>যে parts of spech দ্বারা noun বা pronoun এর দোষ, গুণ, সংখ্যা, অবস্থা, পরিমাণ ইত্যাদি প্রকাশ করা হয় তাকে Adjective বলে।</Text>

                        <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24' }]}>Example:</Text>

                        <View style={{ display: 'flex', gap: 5 }}>
                            <Text style={styles.text}>• Hasib was weak in English.</Text>
                            <Text style={styles.text}>• shimu was intelligent</Text>
                            <Text style={styles.text}>• She was alone</Text>
                        </View>

                        <Text style={[styles.text, { marginTop: 10 }]}>এখানে প্রথম উদাহরণে ”weak” শব্দ দ্বারা দোষ বুঝাচ্ছে, দ্বিতীয় উদাহরণে ”intelligent” শব্দ দ্বারা গুণ বুঝাচ্ছে এবং তৃতীয় উদাহরণে ”alone” শব্দ দ্বারা অবস্থা বুঝাচ্ছ।</Text>

                        <Divider marginTop={20} marginBottom={20} />

                        <Text style={[styles.heading_xl, { marginBottom: 10 }]}>4. Verb কাকে বলে?</Text>
                        <Text style={styles.text}>যে part of speech দ্বারা কোন প্রকার কাজ করা বা কোন অবস্থাকে বুঝায় তাকে verb বলে। ইংরেজি বাক্যের প্রাণ হল verb. verb ছাড়া একটি sentence অসম্পূর্ণ ও অর্থহীন।</Text>

                        <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24' }]}>Example:</Text>

                        <View style={{ display: 'flex', gap: 5 }}>
                            <Text style={styles.text}>• We play football</Text>
                            <Text style={styles.text}>• He eats rice.</Text>
                            <Text style={styles.text}>• I read Gitanjali.</Text>
                        </View>

                        <Text style={[styles.text, { marginTop: 15 }]}>উপরের বাক্য তিনটিতে play, eat, read হল এক একটি verb যা sentence সম্পূর্ণ এবং অর্থপূর্ণ করে তোলে| এছাড়াও কিছু verb নিচে দেওয়া হল wash, close, die, agree, lie, put, live, place, carry, stop etc.</Text>

                        <Text style={[styles.heading_lg, { marginBottom: 8, marginTop: 20 }]}>verb এর প্রকারভেদঃ</Text>
                        <Text style={styles.text}>ইংরেজি ভাষায় verb প্রধানত দুই ভাগে ভাগ করা হয়। যথাঃ</Text>

                        <View style={{ display: 'flex', gap: 5, marginTop: 10 }}>
                            <Text style={styles.text}>1. Finite Verb (সমাপিকা ক্রিয়া)</Text>
                            <Text style={styles.text}>2. Non-Finite Verb (অসমাপিকা ক্রিয়া)</Text>
                        </View>

                        <Text style={styles.text}>Finite Verb কে আবার দুই ভাগে ভাগ করা হয় যথাঃ</Text>

                        <View style={{ display: 'flex', gap: 5, marginTop: 10 }}>
                            <Text style={styles.text}>1. Principal verb</Text>
                            <Text style={styles.text}>2. Auxiliary verb</Text>
                        </View>

                        <Text style={styles.text}>Non-Finite Verb কে আবার তিন ভাগে ভাগ করা হয় যথাঃ</Text>

                        <View style={{ display: 'flex', gap: 5, marginTop: 10 }}>
                            <Text style={styles.text}>1. Gerund</Text>
                            <Text style={styles.text}>2. Infinitive</Text>
                            <Text style={styles.text}>3. Participle</Text>
                        </View>

                        <Divider marginTop={20} marginBottom={20} />

                        <Text style={[styles.heading_xl, { marginBottom: 10 }]}>5. Adverb কাকে বলে?</Text>
                        <Text style={styles.text}>যে parts of speech দ্বারা সাধারণত verb কোথায়, কিভাবে, কখন, কেন, কতবার কি শর্তে সম্পন্ন হওয়া বোঝায় তাকে Adverb বলে| আবার অন্যভাবে বলা যায় যে, ক্রিয়ার উপর কোথায়, কখন, কিভাবে, কতবার, কেনো, কি শর্তে ইত্যাদি প্রশ্ন করে যে উত্তর পাওয়া যায় তাকে Adverb বলে।</Text>

                        <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24' }]}>Example:</Text>

                        <View style={{ display: 'flex', gap: 5 }}>
                            <Text style={styles.text}>• He comes slowly</Text>
                            <Text style={styles.text}>• Why are you late?</Text>
                            <Text style={styles.text}>• I know the reason why he did it.</Text>
                        </View>

                        <Text style={[styles.heading_lg, { marginBottom: 8, marginTop: 20 }]}>Adverb এর প্রকারভেদঃ</Text>
                        <Text style={styles.text}>ব্যবহার অনুযায়ী Adverb কে প্রধানত তিন ভাগে ভাগ করা যায়। যথাঃ</Text>

                        <View style={{ display: 'flex', gap: 5, marginTop: 10 }}>
                            <Text style={styles.text}>1. Simple Adverb (সময়, স্থান, কারণ, পদ্ধতি, ইত্যাদি প্রকাশ পায়)</Text>
                            <Text style={styles.text}>2. Relative Adverb ( where, when, why, how এই Adverb গুলি যখন বাক্যের মাঝখানে বসে একটি সম্পর্ক সৃষ্টি করে)</Text>
                            <Text style={styles.text}>3. Interrogative Adverb ( where, when, why, how এই Adverb গুলি যখন বাক্যে প্রশ্ন করার কাজে ব্যবহৃত হয়)</Text>
                        </View>

                        <Divider marginTop={20} marginBottom={20} />

                        <Text style={[styles.heading_xl, { marginBottom: 10 }]}>5. Preposition কাকে বলে?</Text>
                        <Text style={styles.text}>Preposition শব্দটি এসেছে দুটি লাতিন শব্দ “pre” (পূর্বে) এবং “position” (অবস্থান) থেকে। যে Parts of speech Noun, Pronoun এর পূর্বে বসে বাক্যে এর অন্য কোন word  এর সাথে উক্ত Noun, Pronoun এর সম্পর্ক প্রকাশ করে তাকে Preposition বলে। অর্থাৎ, preposition শব্দটি এমন একটি শব্দ যা noun বা pronoun এর পূর্বে বসে এবং সেই noun বা pronoun এর অবস্থান বা সম্পর্ক প্রকাশ করে।</Text>

                        <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24' }]}>Example:</Text>

                        <View style={{ display: 'flex', gap: 5 }}>
                            <Text style={styles.text}>• There is a ball on the bench.</Text>
                            <Text style={styles.text}>• There is a cat under the bench.</Text>
                            <Text style={styles.text}>• The cat is walking to the bench.</Text>
                        </View>

                        <Text style={[styles.text, { marginTop: 15 }]}>উপরের বাক্য তিনটিতে on, under,to প্রত্যেকটি preposition যারা দুটি Noun এর মধ্যে সম্পর্ক স্থাপন করেছে। এছাড়াও আরো কিছু গুরুত্বপূর্ণ preposition দেওয়া হল। যেমনঃ at, about, above, across, among, before, by, for, of, to, toward, under, up, with, on, into, out, etc.</Text>

                        <Text style={[styles.heading_lg, { marginBottom: 8, marginTop: 20 }]}>Preposition এর প্রকারভেদঃ</Text>
                        <Text style={styles.text}>সাধারণত Preposition কে সাত ভাগে ভাগ করা হয়েছে। যথাঃ</Text>

                        <View style={{ display: 'flex', gap: 8, marginTop: 10 }}>
                            <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>1. Simple Preposition:</Text> ( in, at, on, by, for, under, after, to ইত্যাদি )</Text>
                            <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>2. Double Preposition:</Text> ( into, upon, within, from ইত্যাদি)</Text>
                            <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>3. Compound Preposition:</Text> ( By+low= below, in+side= inside, by+fore= before ইত্যাদি)</Text>
                            <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>4. Phrase Preposition:</Text> ( in order to, according to, in front of, on brhalf of ইত্যাদি)</Text>
                            <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>5. Participle Preposition:</Text> ( present participle (verb + ing ), regarding, considering ইত্যাদি)</Text>
                            <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>6. Detached Preposition:</Text> (শুরুতে Wh এবং শেষে- preposition বসে)</Text>
                            <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>7. Disguised Preposition:</Text> ( preposition এর সংক্ষিপ্ত আকারে বসে )</Text>
                        </View>

                        <Divider marginTop={20} marginBottom={20} />

                        <Text style={[styles.heading_xl, { marginBottom: 10 }]}>7. Conjunction কাকে বলে?</Text>
                        <Text style={styles.text}>যে Parts of speech word, phrases, clauses, sentence প্রভৃতিকে যুক্ত করে একটি অর্থপূর্ণ বাক্য তৈরি করে তাকে Conjunction বলে।</Text>

                        <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24' }]}>Example:</Text>

                        <View style={{ display: 'flex', gap: 5 }}>
                            <Text style={styles.text}>• Sima and Rima are sister.</Text>
                            <Text style={styles.text}>• Do or die.</Text>
                            <Text style={styles.text}>• If you will come, I go.</Text>
                        </View>

                        <Text style={[styles.heading_lg, { marginBottom: 8, marginTop: 20 }]}>Conjunction এর প্রকারভেদঃ</Text>
                        <Text style={styles.text}>Conjunction কে সাধারণত তিন ভাগে ভাগ করা যায়। যথাঃ</Text>

                        <View style={{ display: 'flex', gap: 5, marginTop: 15 }}>
                            <Text style={styles.text}>1. Coordinating Conjunction ( And, but, or, so, yet, still, therefore, otherwise, however ইত্যাদি Coordinating Conjunction )</Text>
                            <Text style={styles.text}>2. Subordinating Conjunction ( Although, though, if, since, when, as, while, as, while, that, because ইত্যাদি Subordinating Conjunction)</Text>
                            <Text style={styles.text}>3. Correlative Conjunction ( Either—or, neither—nor, both—and, too—to, not only— but also, rather—than ইত্যাদি Correlative Conjunction)</Text>
                        </View>

                        <Divider marginTop={20} marginBottom={20} />

                        <Text style={[styles.heading_xl, { marginBottom: 10 }]}>8. Interjection কাকে বলে?</Text>
                        <Text style={styles.text}>একটি বাক্যে আবেগ, উচ্ছ্বাস, বিস্ময় ইত্যাদি সৃষ্টি করি শব্দ বা শব্দসমষ্টিকে interjection বলে। যেমন hurrah, alas, ah, oh, hush, ha, what ইত্যাদি interjection হিসেবে পরিচিত।</Text>

                        <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24' }]}>Example:</Text>

                        <View style={{ display: 'flex', gap: 5 }}>
                            <Text style={styles.text}>• How pitty!</Text>
                            <Text style={styles.text}>• Alas! I failed.</Text>
                            <Text style={styles.text}>• Hi! hello. </Text>
                        </View>

                        <Text style={[styles.text, { marginTop: 15 }]}>উপরের বাক্যে How, Alas, Hi হল এক একটি interjection, যা বাক্যে আবেগ প্রকাশ করে।</Text>
                    </View>
                </ScrollView>
                    : <PreLoader />
            }
        </React.Fragment>
    )
}



export default person