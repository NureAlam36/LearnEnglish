import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Stack from 'expo-router/stack';

import { FONT, COLORS } from "@/constants";
import PreLoader from '@/components/PreLoader';
import { useColorSchemeContext } from '@/context/ColorSchemeContext';
import Divider from '@/components/Divider';


const LineBreaker = ({ height = '10' }) => {
    return (
        <View style={{ height: parseInt(height) }} />
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
                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>Past Tense (অতীত কাল)</Text>
                <Text style={styles.text}>কোনো কাজ যদি আগে বা অতীতে কোনো সময়ে হয়েছিলো এরকম বুঝায় তখন তা Past Tense বা অতীত কাল হয়।</Text >

                <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>যেমনঃ</Text>

                <View style={{ display: 'flex', gap: 5 }}>
                    <Text style={styles.text}>-  I ate - আমি খেয়েছি।</Text>
                    <Text style={styles.text}>- He went- সে গিয়েছিলো।</Text>
                    <Text style={styles.text}>- They were playing - তাহারা খেলেছিল/ খেলিতেছিলো ।</Text>
                    <Text style={styles.text}>- The patient had died before the doctor came - ডাক্তার আসার পূর্বেই রোগী মারা গিয়েছিলেন।</Text>
                </View>

                <Divider marginTop={20} marginBottom={20} />

                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>Past Tense এর প্রকারভেদ</Text>
                <Text style={styles.text}>Past Tense (অতীত কাল) চার প্রকার। যথা:</Text>

                <View style={{ display: 'flex', gap: 5, marginTop: 10 }}>
                    <Text style={styles.text}>1. Past Indefinite Tense</Text>
                    <Text style={styles.text}>2. Past Continuous Tense</Text>
                    <Text style={styles.text}>3. Past Perfect Tense</Text>
                    <Text style={styles.text}>4. Past Perfect Continuous Tense</Text>
                </View>

                <Divider marginTop={20} marginBottom={20} />

                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>1. Past Indefinite Tense কাকে বলে?</Text>
                <Text style={styles.text}>অতীত কালের কোন কাজ বোঝাতে বা অতীতের কোন অভ্যাস বোঝাতে, যার ফল বিদ্যমান নেই তাকে Past Indefinite Tense বা Simple Past Tense বলে।</Text>

                <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#01636a', fontWeight: 'bold' }]}>বাংলায় চিনার উপায়:</Text>
                <Text style={styles.text}>বাংলায় ক্রিয়ার শেষে ল, লাম, ত, তাম, তে, তেন এদের যে কোন একটি যোগ থাকে।</Text>
                <Text style={[styles.text, { marginTop: 10 }]}><Text style={{ color: '#a72a24', fontWeight: 'bold' }}>যেমনঃ</Text> করেছিল, করিয়াছিল, করেছিলাম, করিয়াছিলাম, করেছিলে, করিয়া ছিলে, করেছিলেন, করিয়াছিলেন, পড়িল, পড়িলাম, পড়িলেন, পড়িত, পরিতেন।</Text>

                <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#01636a', fontWeight: 'bold' }]}>Structure:</Text>
                <Text style={styles.text}>Subject + past form of main verb + Extension</Text>

                {/* <View style={{ backgroundColor: '#d8efef', padding: 10, marginTop: 20 }}>
                        <Text style={styles.text}>Note: Person সব সময় কোনো প্রাণী বা বস্তুকে নির্দেশ করবে। আর Person-এর Parts of Speech হবে Noun অথবা Pronoun.</Text>
                    </View> */}

                <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>অন্যান্য বাক্যের জন্য সহজ Structure:</Text>

                <View style={{ display: 'flex', gap: 10 }}>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>1. Affirmative:</Text> Sub +Verb এর Past Form+ Extension.</Text>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>2. Negative:</Text> Sub +did not/ Au.V not +Verb এর Present Form + Extension . (Au.V- Auxiliary Verb- Was/Were)</Text>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>3. Interrogative:</Text> Did/Au.V + Sub +Verb এর Present Form + Extension + ?</Text>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>4. Neg-Int:</Text> Didn’t /Au.Vn’t+ Sub +Verb এর Present Form +Extension + ?</Text>
                </View>

                <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>

                <View style={{ display: 'flex', gap: 10 }}>
                    <Text style={styles.text}>- আমি ভাত খাইয়াছিলাম/খেয়েছিলাম – I ate rice.</Text>
                    <Text style={styles.text}>- আমি স্কুলে গিয়েছিলাম – I went to school.</Text>
                    <Text style={styles.text}>- সে স্কুলে গিয়েছিল – He went to school.</Text>
                    <Text style={styles.text}>- তুমি/ তোমরা কাজটি করেছিলে/করিয়াছিলে- You did the work.</Text>
                    <Text style={styles.text}>- তার ছেলেবেলা লন্ডন কেটেছিল – He spent his boyhood in London.</Text>
                    <Text style={styles.text}>- লুনা একটি গান গেয়েছিল – Luna sang a song.</Text>
                    <Text style={styles.text}>- সে ফুটবল খেলেছিল – He played football.</Text>
                    <Text style={styles.text}>- সে কাজটি করত-He did the work.</Text>
                    <Text style={styles.text}>- আমি একটা পাখি দেখলাম/দেখেছিলাম- I saw a bird.</Text>
                    <Text style={styles.text}>- আমার একটা গাভি ছিল-I had a cow.</Text>
                    <Text style={styles.text}>- আমাদের একটা বাগান ছিল-We had a garden.</Text>
                </View>


                <View style={{ backgroundColor: '#d8efef', padding: 10, marginTop: 20 }}>
                    <Text style={styles.noteText}>Note: Past indefinite Tense যুক্ত কোন sentence এ যদি main verb না থাকে তাহলে সেখানে be verb (Am,Is,Are,Was,Were) ই main verb হিসেবে ব্যবহৃত হবে।</Text>

                    <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                    <View style={{ display: 'flex', gap: 5 }}>
                        <Text style={styles.noteText}>- I was ill.</Text>
                        <Text style={styles.noteText}>- He was good.</Text>
                    </View>
                </View>

                <View style={{ backgroundColor: '#d8efef', padding: 10, marginTop: 20 }}>
                    <Text style={styles.noteText}>Note: কিছু কিছু বাক্য আছে যা দেখতে Present Perfect Tense এর মতো কিন্তু ইংরেজিতে অনুবাদ করতে হচ্ছে Past Indefinite Tense এর নিয়মানুসারে।এটা তখনই হবে যখন সুনির্দিষ্ট করে কোন সাল বা তারিখ বা দিন উল্লেখ থাকবে যা অতীত হয়ে গেছে।</Text>

                    <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                    <View style={{ display: 'flex', gap: 5 }}>
                        <Text style={styles.noteText}>- সে ১৯৭১ সালে এসএসসি পাশ করিয়াছে- He has passed the SSC in 1971. না হয়ে হবে He passed the SSC in 1971.</Text>
                        <Text style={styles.noteText}>- সে গতকাল বাড়ি আসিয়াছে- He has come home yesterday. না হয়ে হবে  He came home yesterday.</Text>
                    </View>

                    <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}> (এই ধরনের বাক্যগুলো Right Form of Verbs এ এসে থাকে।)</Text>
                </View>

                <Divider marginTop={20} marginBottom={20} />
                <Text style={[styles.heading_md, { marginBottom: 30 }]}>Past  Indefinite Tense এর  Negative/ Interrogative/ Negative-Interrogative বাক্য গঠন করার নিয়মঃ</Text>

                <View style={{ marginBottom: 10 }}>
                    <Text style={[styles.heading_md, { marginBottom: 10 }]}>1. Negative বাক্য গঠন করার নিয়ম:</Text>
                    <Text style={styles.text}>কোন Subject এর পরে যদি Was, Were, Had, Could, Should, Would, Might ইত্যাদি থাকে তাহলে Negative বাক্য গঠন করার সময় এদের পরে Not বসাতে হবে। যেমন:</Text>
                </View>
                <View style={{ display: 'flex', gap: 5 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                        <Text style={styles.text}>- I was good.</Text>
                        <Text style={styles.text}>Ans-I was not good.</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                        <Text style={styles.text}>- I had a cow.</Text>
                        <Text style={styles.text}>Ans- I had not a cow. Or I had no cow.</Text>
                    </View>
                </View>

                <LineBreaker height='10' />

                <Text style={styles.text}>এখানে উল্লেখ্য যে, had এর পরে not বসালে a থাকবে। আর যদি no বসানো হয় তাহলে a থাকবে না।</Text>

                <LineBreaker height='20' />

                <Text style={styles.text}>কিন্তু Subject এর পরে যদি Was, Were,Had Could, Should, Would, Might ইত্যাদি না থাকে তাহলে এদের পরে Did not বসাতে হবে।তখন মূল Verbটি Present Form এর হবে। যেমন:</Text>
                <LineBreaker height='10' />
                <View style={{ display: 'flex', gap: 10 }}>
                    <View>
                        <Text style={styles.text}>- He went to school</Text>
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Ans:</Text> He did not go to school. এখানে went এর Present Form go হয়েছে।</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>- You did the work.</Text>
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Ans:</Text> You did not do the work.</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>- He did the work.</Text>
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Ans:</Text> He did not do the work. এখানে প্রথম বাক্যের did মূল Verb। তাই সূত্রের did not বসানোর পরে প্রথম বাক্যের did এর Present Form do হয়েছে।</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>- They wrote a letter.</Text>
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Ans:</Text> They did not write a letter.</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>- I had a cow</Text>
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Ans:</Text> I did not have a cow.</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>- He had a cow.</Text>
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Ans:</Text> He did not have a cow. এখানে Had এর পরে no/ not না বসিয়ে did not বসিয়েও Negative বাক্য গঠন করার যায়। তখন did not এর পরে had এর Present Form Have বসবে।</Text>
                    </View>
                </View>


                <View style={{ marginBottom: 10, marginTop: 30 }}>
                    <Text style={[styles.heading_md, { marginBottom: 10 }]}>2. Interrogative বাক্য গঠন করার নিয়ম:</Text>
                    <Text style={styles.text}>কোন Subject এর পরে যদি Was, Were, Had,Could, Should, Would,Might ইত্যাদি থাকে তাহলে Interrogative বাক্য গঠন করার সময় Subject পূর্বে ঐ Verb বসাতে হবে এবং বাক্যের শেষে প্রশ্ন বোধক চিহ্ন বসবে। যেমন:</Text>
                </View>
                <View style={{ display: 'flex', gap: 8 }}>
                    <View>
                        <Text style={styles.text}>- I was good.</Text>
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Ans:</Text> Was I good?</Text>
                    </View>
                </View>

                <LineBreaker height='20' />

                <Text style={styles.text}>কিন্তু Subject এর পরে যদি Was, Were, Had, Could, Should, Would, Might ইত্যাদি না থাকে তাহলে Interrogative বাক্য গঠন করার সময়  Subject পূর্বে Did বসাতে হবে তখন মূল Verb এর Present Form বসবে এবং বাক্যের শেষে প্রশ্ন বোধক চিহ্ন বসবে।  যেমন:</Text>
                <LineBreaker height='10' />
                <View style={{ display: 'flex', gap: 8 }}>
                    <View>
                        <Text style={styles.text}>- They read the books.</Text>
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Ans:</Text> Did they read the books?</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>- He went to school.</Text>
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Ans:</Text> Did he go to school?</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>- I did the work.</Text>
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Ans:</Text> Did I do the work?</Text>
                    </View>
                </View>

                <View style={{ marginBottom: 10, marginTop: 30 }}>
                    <Text style={[styles.heading_md, { marginBottom: 10 }]}>3. Negative-Interrogative বাক্য গঠন করার নিয়ম:</Text>
                    <Text style={styles.text}>Negative-Interrogative বাক্য গঠন করার সময় বাক্যটিকে আগে Interrogative বাক্যে পরিনত করতে হবে। তারপর Subject যদি Noun হয় তাহলে তার আগে Not বসবে আর Subject যদি Pronoun তাহলে তারপরে Not বসবে। মনে রাখতে হবে, Noun এর আগে Pronoun এর পরে Not বসে। যেমন:</Text>
                </View>
                <View style={{ display: 'flex', gap: 8 }}>
                    <View>
                        <Text style={styles.text}>- I was good..</Text>
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Ans:</Text> Was I not good?</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>- Rahim read the books.</Text>
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Ans:</Text> Did not Rahim read the books?</Text>
                    </View>
                </View>

                <LineBreaker height='20' />

                <Text style={styles.text}>তবে Subject, Noun বা Pronoun যাই হোক না কেন, Not কে যদি সংক্ষিপ্তাকারে অর্থাৎ Wasn’t, Weren’t, Didn’t, ইত্যাদিভাবে লিখে সকল Subject এর পূর্বে বসিয়ে Negative-Interrogative বাক্য গঠন করা যায়। যেমন:</Text>
                <LineBreaker height='10' />
                <View style={{ display: 'flex', gap: 5 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                        <Text style={styles.text}>- He went to school.</Text>
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Ans:</Text> Didn’t he go to school?</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                        <Text style={styles.text}>- Sharif was a good student.</Text>
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Ans:</Text> Wasn’t Sharif a good student?</Text>
                    </View>
                </View>

                <LineBreaker height='20' />

                <Text style={styles.text}>এভাবে বাক্য গঠন করতে চাইলে বাক্যটিকে প্রথমে Negative এ পরিনত করতে হবে। তারপর Negative করার অংশটি অর্থাৎ Wasn’t, Weren’t, Didn’t ইত্যাদি Subject এর পূর্বে বসালেই Negative-Interrogative বাক্য গঠিত হবে।</Text>

                <Divider marginTop={20} marginBottom={20} />

                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>2. Past Continuous Tense কাকে বলে?</Text>
                <Text style={styles.text}>অতীতকালে কোন কাজ কিছুক্ষণ ধরে চলছিল এরূপ বোঝালে Past Continuous Tense হয়।</Text>

                <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#01636a', fontWeight: 'bold' }]}>বাংলায় চিনার উপায়:</Text>
                <Text style={styles.text}>বাংলায় ক্রিয়ার শেষে তেছিল, তেছিলাম, তেছিলে, তেছিলেন, চ্ছিল, চ্ছিলে, চ্ছিলেন, ছিল, ছিলাম, ছিলে, ছিলেন, এদের যে কোন একটি যোগ থাকে।</Text>

                <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#01636a', fontWeight: 'bold' }]}>Main Structure:</Text>
                <Text style={styles.text}>Subject + was/were + main verb + ing + Extension বা বাড়তি অংশ।</Text>
                <Text style={styles.text}>Subject-এর পর person ও number অনুসারে was বা were বসে এবং মূল verb-এর শেষে ing যোগ হয়।</Text>

                {/* <View style={{ backgroundColor: '#d8efef', padding: 10, marginTop: 20 }}>
                        <Text style={styles.text}>Note: Person সব সময় কোনো প্রাণী বা বস্তুকে নির্দেশ করবে। আর Person-এর Parts of Speech হবে Noun অথবা Pronoun.</Text>
                    </View> */}

                <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>অন্যান্য বাক্যের জন্য সহজ Structure:</Text>

                <View style={{ display: 'flex', gap: 5 }}>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>Affirmative:</Text> Sub + was / were +Verb + ing + Extension.</Text>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>Negative:</Text> Sub +( was / were ) not + verb + ing + Extension .</Text>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>Interrogative:</Text> Was/Were + Sub +Verb+ ing + Extension + ?</Text>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>Neg-Int:</Text> ( Was /Were ) n’t + Sub +Verb + ing + Extension + ?</Text>
                </View>

                <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>

                <View style={{ display: 'flex', gap: 5 }}>
                    <Text style={styles.text}>- আমি ভাত খাইতেছিলাম/খাচ্ছিলাম – I was eating rice.</Text>
                    <Text style={styles.text}>- সে স্কুলে যাইতেছিল/যাচ্ছিল – He was going to school.</Text>
                    <Text style={styles.text}>- তারা ফুটবল খেলিতেছিল/খেলছিল – They were playing football.</Text>
                    <Text style={styles.text}>- গতকাল সন্ধায় সে ঢাকা যাইতেছিল – He was going to Dhaka last evening.</Text>
                    <Text style={styles.text}>- আমি একা একা গান গাইতেছিলাম – I was singing song alone.</Text>
                </View>


                <View style={{ backgroundColor: '#d8efef', padding: 10, marginTop: 20 }}>
                    <Text style={styles.noteText}>Note: subject first person and third person singular number হলে was বসবে। we, you, they এবং অন্যান্য plural number এর শেষে were বসবে। অর্থাৎ I এর পরে was এবং you এর পরে were ব্যতীত subject এক বচন হলে was এবং subject বহু বচন হলে were বসবে।</Text>
                </View>

                <Divider marginTop={20} marginBottom={20} />

                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>3. Past Perfect Tense কাকে বলে?</Text>
                <Text style={styles.text}>অতীত কালে দুটি কাজ সম্পন্ন হয়ে থাকলে তাদের মধ্যে যেটি আগে ঘটেছিল তা Past Perfect Tense হয় এবং যেটি পরে হয়েছিল তা simple বা  Past Indefinite Tense হয়।</Text>

                <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#01636a', fontWeight: 'bold' }]}>বাংলায় চিনার উপায়:</Text>
                <Text style={styles.text}>বাংলায় ক্রিয়ার শেষে কোন নির্দিষ্ট অতীত ঘটনার পূর্বে, ছিল, ছিলাম, ছিলে, ছিলেন, ল, লাম, লে, লেন, তাম, তে, তেন এদের যে কোন একটি যোগ থাকে।</Text>

                <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#01636a', fontWeight: 'bold' }]}>Main Structure:</Text>
                <Text style={styles.text}>(Before/When থাকলে) 1st subject + had + verb এর past participle (VPP) + Extension + before/when+ 2nd subject + verb এর past form +Extension.</Text>
                <Text style={styles.text}>(After/That থাকলে) 1st subject + verb এর past form +Extension.+ after/that+  2nd   subject + had + verb এর past participle (VPP) + Extension</Text>

                <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>

                <View style={{ display: 'flex', gap: 10 }}>
                    <Text style={styles.text}>- আমি ভাত খাওয়ার পূর্বে সে বাড়ি আসল – He had come home before I ate rice.</Text>
                    <Text style={styles.text}>- আমি স্কুলে যাওয়ার পূর্বে সে মারা গেল – He had died before I went to school.</Text>
                    <Text style={styles.text}>- ঘণ্টা পড়ার পূর্বে তারা স্টেশনে পৌঁছল – They had reached the station before the bell rang.</Text>
                    <Text style={styles.text}>- ডাক্তার আসিবার পূর্বে রোগীটি মারা গেল – The patient had died before the doctor came.</Text>
                    <Text style={styles.text}>- ডাক্তার আসিবার পরে রোগীটি মারা গেল – The patient died.after the doctor had come.</Text>
                    <Text style={styles.text}>- সে বলল যে, সে লোকটিকে সাহায্য করেছিল- He said that he had helped the man.</Text>
                    <Text style={styles.text}>- অধিক দূরে যেতে না যেতেই তার ছড়িটা ভেঙ্গে গেল-He had not gone far when his stick broke.</Text>
                </View>


                <View style={{ backgroundColor: '#d8efef', padding: 10, marginTop: 20 }}>
                    <Text style={styles.noteText}>Note: দুইটি বাক্যের মধ্যে যে বাক্যটি before/when এর আগে বসে সেই বাক্যটি Past perfect tense এর হবে অন্যটি Past Indefinite Tense । আবার after/that  এর পরে Past Perfect Tense এরে হবে অন্যটি Past Indefinite Tense । সহজভাবে বলা যায়- before এর আগে after এর পরে Past Perfect Tense হবে।অন্যটি Past Indefinite Tense।</Text>
                </View>

                <Divider marginTop={20} marginBottom={20} />

                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>2. Past Perfect Continuous Tense কাকে বলে?</Text>
                <Text style={styles.text}>অতীতকালে কোন কাজ কোন বিশেষ সময়ের পূর্বে আরম্ভ হয়ে সেই সময় পর্যন্ত চলছিল বোঝালে Past Perfect Continuous Tense হয়। এখানে যদি দুটি ক্রিয়া উল্লেখ থাকে তাহলে যে কাজটি আগে চলছিল তা Past Perfect Continuous Tense হয়।অন্যটি Past Indefinite Tense এর হবে।</Text>

                <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#01636a', fontWeight: 'bold' }]}>বাংলায় চিনার উপায়:</Text>
                <Text style={styles.text}>বাংলায় ক্রিয়ার শেষে তেছিল, তেছিলে, তেছিলাম, তেছিলেন, চ্ছিল, চ্ছিলাম, চ্ছিলে, চ্ছিলেন, এদের যে কোন একটি উল্লেখ থাকলে এবং অতীতের একটি সময় উল্লেখ থাকে। এক্ষেত্রে তিনটি বিষয়ের প্রতি খেয়াল রাখতে হবে –</Text>
                <Text style={styles.text}>ক) অতীতকালে দুটি কাজই হয়েছিল।</Text>
                <Text style={styles.text}>খ) তাদের মধ্যে একটি পূর্বে এবং অপরটি পরে সংগঠিত হয়েছিল।</Text>
                <Text style={styles.text}>গ) যেটি পূর্বে সংগঠিত হয়েছিল সেটি দীর্ঘ সময় ধরে চলিতেছিল।</Text>

                <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#01636a', fontWeight: 'bold' }]}>Main Structure:</Text>
                <Text style={styles.text}>1st subject + had been + main verb + ing + Extension+ 2nd subject + verb এর past form + Extension.</Text>

                <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>

                <View style={{ display: 'flex', gap: 10 }}>
                    <Text style={styles.text}>- সে যখন আসিল তখন আমি ভাত খাইতেছিলাম – I had been eating rice when he came.</Text>
                    <Text style={styles.text}>- ঘণ্টা পড়ার পূর্বে আমরা খেলিতেছিলাম we were playing before the bell rang.</Text>
                    <Text style={styles.text}>- আমি যখন তার সাথে দেখা করতে গেলাম তখন সে বই পরিতেছিল He had been reading book when I went to met with him/her.</Text>
                    <Text style={styles.text}>- তুমি যখন তোমার বন্ধুর বাড়িতে গিয়েছিলে তখন তোমার মা তোমার জন্য অপেক্ষা করিতেছিল - your mother had been waiting for you when you went to your friend's home.</Text>
                    <Text style={styles.text}>- সে যখন খেলা দেখছিল তখন আমি ঘুমিতেছিলাম I had been sleeping when he saw the game.</Text>
                </View>
            </View>
        </ScrollView>
            : <PreLoader />
    )
}

export default PastTense