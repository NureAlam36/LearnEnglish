import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Stack from 'expo-router/stack';

import { FONT, COLORS } from "@/constants";
import PreLoader from '@/components/PreLoader';
import { useColorSchemeContext } from '@/context/ColorSchemeContext';

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

const LineBreaker = ({ height = '10' }) => {
    return (
        <View style={{ height: parseInt(height) }} />
    )
}

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
                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>Present Tense (বর্তমান কাল)</Text>
                <Text style={styles.text}>বর্তমানে কোন কাজ হয় বা হইতেছে এরূপ বুঝালে Verb এর Present Tense হয়।</Text >

                <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>যেমনঃ</Text>

                <View style={{ display: 'flex', gap: 5 }}>
                    <Text style={styles.text}>-  I eat rice - আমি ভাত খাই।</Text>
                    <Text style={styles.text}>- Tania goes to School- তানিয়া স্কুলে যায়।</Text>
                    <Text style={styles.text}>- Robin is playing in the field with his friends- রবিন তার বন্ধুদের সাথে মাঠে খেলিতেছে।</Text>
                </View>

                <Divider marginTop={20} marginBottom={20} />

                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>Present Tense এর প্রকারভেদ</Text>
                <Text style={styles.text}>Present Tense (বর্তমান কাল) চার প্রকার। যথা:</Text>

                <View style={{ display: 'flex', gap: 5, marginTop: 10 }}>
                    <Text style={styles.text}>1. Present Indefinite Tense</Text>
                    <Text style={styles.text}>2. Present Continuous Tense</Text>
                    <Text style={styles.text}>3. Present Perfect Tense</Text>
                    <Text style={styles.text}>4. Present Perfect Continuous Tense</Text>
                </View>

                <Divider marginTop={20} marginBottom={20} />

                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>1. Present Indefinite Tense কাকে বলে?</Text>
                <Text style={styles.text}>বর্তমান কালে কোন কাজ করা হয়ে থাকে, অথবা অভ্যাসগতভাবে করা হয়, অথবা চির সত্য কোন কাজ বোঝালে তাকে Present Indefinite Tense ব্যবহার করা হয়।</Text>

                <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#01636a', fontWeight: 'bold' }]}>বাংলায় চিনার উপায়:</Text>
                <Text style={styles.text}>বাংলা ক্রিয়ার শেষে এ, অ, আ, ই, ও, এন, এস, আন, আয় ইত্যাদি থাকে।</Text>

                <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#01636a', fontWeight: 'bold' }]}>শব্দ দেখে Present Indifinte Tense চেনার উপায়: </Text>
                <Text style={styles.text}>Always (সর্বদা) , Regularly (নিয়মিত) , Sometimes (মাঝেমাঝে), Often (প্রায়ই, খুবই নিয়মিত) , Generally (সাধারণত), Daily (দৈনিক) , Everyday (প্রতিদিন), Occasionally (মাঝে মাঝে, নিয়মিত নয়), Usually (সাধারণত) , Normally (সাধরণত) শব্দগুলো কোন বাক্যে থাকলে তা Present Indifinte Tense হবে।</Text>

                <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#01636a', fontWeight: 'bold' }]}>Structure:</Text>
                <Text style={styles.text}>Subject + Main Verb + Object.</Text>

                <View style={{ backgroundColor: '#d8efef', padding: 10, marginTop: 20 }}>
                    <Text style={styles.noteText}>Note: Person সব সময় কোনো প্রাণী বা বস্তুকে নির্দেশ করবে। আর Person-এর Parts of Speech হবে Noun অথবা Pronoun.</Text>
                </View>

                <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>

                <View style={{ display: 'flex', gap: 10 }}>
                    <Text style={styles.text}>- আমি ভাত খাই – I eat rice.</Text>
                    <Text style={styles.text}>- আমি স্কুলে যাই – I go to school.</Text>
                    <Text style={styles.text}>- সে প্রতিদিন স্কুলে যায় – He goes to school every day.</Text>
                    <Text style={styles.text}>- তুমি বই পড় – You read a book.</Text>
                    <Text style={styles.text}>- সে প্রতিদিন রাত দশ টায় ঘুমাতে যায় – He goes to bed at ten pm every day.</Text>
                    <Text style={styles.text}>- সূর্য পূর্ব দিকে উদিত হয় – The sun rises in the East.</Text>
                    <Text style={styles.text}> পানি শূন্য ডিগ্রি সেন্ট্রিগ্রেডে জমাট বাধে – Water freezes at 0° centegrade.</Text>
                </View>


                <View style={{ backgroundColor: '#d8efef', padding: 10, marginTop: 20 }}>
                    <Text style={styles.noteText}>Note: মূল verb-এর present form ব্যবহৃত হয়। তবে subject (কর্তা) যদি Third Person Singular number হয় তাহলে মূল verb-এর শেষে s বা es যোগ করতে হয়। যে সকল verb-এর শেষে Sh, SS, Ch, X এবং O থাকে তাদের শেষে es যোগ হয়। verb-এর শেষে যদি Y এবং তার আগে Consonant থাকে তবে Y এর স্থলে i বসে এবং শেষে es যোগ হয়। তবে Y এর আগে যদি Vowel থাকে তাহলে Y উঠবে না। শুধু শেষে es যোগ হবে। (A,E,I,O,U এই পাঁচটি Vowel বাকি ২১ টি Consonant)</Text>

                    <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                    <View style={{ display: 'flex', gap: 5 }}>
                        <Text style={styles.noteText}>- সে স্কুলে যায়- He goes to school. (Go-O+es=Goes)</Text>
                        <Text style={styles.noteText}>- পাখিটি আকাশে উড়ে- The bird flies in the sky. (Fly-Flies)</Text>
                        <Text style={styles.noteText}>- সে প্রার্থনা করে-He prays. (Pray-Prays)</Text>
                    </View>
                </View>

                <Divider marginTop={20} marginBottom={20} />

                <Text style={[styles.heading_xl, { marginBottom: 10, fontWeight: 'bold' }]}>সহজ কৌশল</Text>

                <View style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
                    <View>
                        <Text style={[styles.text, { fontFamily: FONT.bold, color: '#01636a' }]}>Affirmative <Text style={{ fontWeight: 'bold' }}>বাক্য হলেঃ</Text></Text>
                        <Text style={styles.text}>Sub + Main Verb  + Extension.</Text>
                    </View>
                    <View>
                        <Text style={[styles.text, { fontFamily: FONT.bold, color: '#01636a' }]}>Negative <Text style={{ fontWeight: 'bold' }}>বাক্য হলেঃ</Text></Text>
                        <View style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                            <Text style={styles.text}>Sub + Au.V not/ do not / does not + Main Verb + Extension.</Text>
                            <Text style={styles.text}>( Au.V- Auxiliary Verb- Am,Is,Are,Was,Were)</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={[styles.text, { fontFamily: FONT.bold, color: '#01636a' }]}>Interrogative <Text style={{ fontWeight: 'bold' }}>বাক্য হলেঃ</Text></Text>
                        <Text style={styles.text}>Do / Does/Au.V + Sub +Main  Verb + Extension + ?</Text>
                    </View>
                    <View>
                        <Text style={[styles.text, { fontFamily: FONT.bold, color: '#01636a' }]}>Neg-Int <Text style={{ fontWeight: 'bold' }}>বাক্য হলেঃ</Text></Text>
                        <View style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                            <Text style={styles.text}>Don’t / Doesn’t/Au.Vn’t + Sub + Main Verb + Extension + ?</Text>
                            <Text style={styles.text}>(Au.Vn’t- Auxiliary Verb- Amn’t,Isn’t,Aren;t,Wasn’t,Weren’t)</Text>
                        </View>
                    </View>
                </View>

                <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                <View style={{ display: 'flex', gap: 5 }}>
                    <Text style={styles.text}>- আমি ভাত খাই – I eat rice.</Text>
                    <Text style={styles.text}>- সে ভাত খায়-He eats rice.</Text>
                    <Text style={styles.text}>- আমি ভাত খাই না – I do not eat rice.</Text>
                    <Text style={styles.text}>- আমি কি ভাত খাই? Do I eat rice?</Text>
                    <Text style={styles.text}>- আমি কি ভাত খাই না? Don’t I eat rice?</Text>
                    <Text style={styles.text}>- আমার একটা গাভি আছে-I have a cow.</Text>
                    <Text style={styles.text}>- আমি অসুস্থ- I am ill.</Text>
                    <Text style={styles.text}>- আমি অসুস্থ নই- I am not ill.</Text>
                    <Text style={styles.text}>- আমি কি অসুস্থ?- Am I ill?</Text>
                    <Text style={styles.text}>- আমি কি অসুস্থ নই?-Amn’t I ill?</Text>
                    <Text style={styles.text}>- আমি চা পান করি- I drink tea. Or I take tea.</Text>
                </View>

                <View style={{ backgroundColor: '#d8efef', padding: 10, marginTop: 20, marginBottom: 15 }}>
                    <Text style={styles.text}>NOTE: am, is, are, have, has এদের পরে অন্য কোন Verb না থাকলে এ গুলো Main Verb হিসেবে ব্যবহৃত হবে। তখন এ জাতীয় বাক্য Present Indefinite Tense এর হবে।</Text>
                </View>

                <View style={{ display: 'flex', gap: 5 }}>
                    <Text style={styles.text}>- আমি স্কুলে যাই – I go to school.</Text>
                    <Text style={styles.text}>- সে প্রতিদিন স্কুলে যায় – He goes to school every day.</Text>
                    <Text style={styles.text}>- তুমি বই পড় – You read a book.</Text>
                    <Text style={styles.text}>- সে প্রতিদিন রাত দশ টায় ঘুমাতে যায় – He goes to bed at ten pm every day.</Text>
                    <Text style={styles.text}>- সূর্য পূর্ব দিকে উদিত হয় – The sun rises in the East.</Text>
                    <Text style={styles.text}>- পানি শূন্য ডিগ্রি সেন্ট্রিগ্রেডে জমাট বাধে – Water freezes at 0° centegrade.</Text>
                </View>

                <View style={{ backgroundColor: '#d8efef', padding: 10, marginTop: 20 }}>
                    <Text style={styles.noteText}>Note – Subject third person singular number (he, she, it, কোন ব্যক্তি, বস্তু, জায়গা বা প্রাণীর নাম বোঝালে verb এর শেষে s বা es বসে।</Text>
                </View>

                <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#01636a', fontWeight: 'bold' }]}>মনে রেখো –</Text>
                <View style={{ display: 'flex', gap: 5 }}>
                    <Text style={styles.text}>-  I/we – First Person</Text>
                    <Text style={styles.text}>- You/your – Second person</Text>
                    <Text style={styles.text}>- He/she ,it, they সমস্ত নাম – Third Person অর্থাৎ আমি তুমি বাদে বাকি সবই Third Person.</Text>
                </View>

                <Divider marginTop={20} marginBottom={20} />
                <Text style={[styles.heading_md, { marginBottom: 30 }]}>Present  Indefinite Tense এর  Negative/ Interrogative/ Negative-Interrogative বাক্য গঠন করার নিয়মঃ</Text>

                <View style={{ marginBottom: 10 }}>
                    <Text style={[styles.heading_md, { marginBottom: 10 }]}>1. Negative বাক্য গঠন করার নিয়ম:</Text>
                    <Text style={styles.text}>কোন Subject এর পরে যদি Am, Is, Are, Was, Were, Shall, Will, Have, Has, Had, Can, Could, Should, Would, May, Might ইত্যাদি থাকে তাহলে Negative বাক্য গঠন করার সময় এদের পরে Not বসাতে হবে। যেমন:</Text>
                </View>
                <View style={{ display: 'flex', gap: 10 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                        <Text style={styles.text}>- I am not good.</Text>
                        <Text style={styles.text}>Ans-I am not good.</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                        <Text style={styles.text}>- I have a cow.</Text>
                        <Text style={styles.text}>Ans- I have not a cow. Or I have no cow.</Text>
                    </View>
                </View>

                <LineBreaker height='10' />

                <Text style={styles.text}>এখানে উল্লেখ্য যে, have এর পরে not বসালে a থাকবে। আর যদি no বসানো হয় তাহলে a থাকবে না।</Text>

                <LineBreaker height='20' />

                <Text style={styles.text}>কিন্তু Subject এর পরে যদি Am, Is, Are, Was, Were, Shall, Will, Have, Has, Had, Can, Could, Should, Would, May, Might ইত্যাদি না থাকে তাহলে এদের পরে Do not বা Does not বসাতে হবে। Verb এর সাথে যদি s বা es থাকে তাহলে Subject এর পরে Does not বসবে। তখন মূল Verb এর s বা es উঠে যাবে। যেমন:</Text>
                <LineBreaker height='10' />
                <View style={{ display: 'flex', gap: 10 }}>
                    <View>
                        <Text style={styles.text}>- He goes to school</Text>
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Ans:</Text> He does not go to school. এখানে goes এর es উঠে গিয়ে go হয়েছে।</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>- You do the work.</Text>
                        <Text style={styles.text}>Ans- You do not do the work.</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>- He does the work.</Text>
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Ans:</Text> He does no do the work. এখানে do বা does মূল Verb। তাই do not বা does not এর পরেও do থাকবে।</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>- They write a letter.</Text>
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Ans:</Text> They do not write a letter.</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>- I have a cow</Text>
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Ans:</Text> I do not have a cow.</Text>
                    </View>
                </View>


                <View style={{ marginBottom: 10, marginTop: 30 }}>
                    <Text style={[styles.heading_md, { marginBottom: 10 }]}>2. Interrogative বাক্য গঠন করার নিয়ম:</Text>
                    <Text style={styles.text}>কোন Subject এর পরে যদি Am, Is, Are, Was, Were, Shall, Will, Have, Has, Had, Can, Could, Should, Would, May, Might ইত্যাদি থাকে তাহলে Interrogative বাক্য গঠন করার সময় Subject পূর্বে ঐ Verb বসাতে হবে এবং বাক্যের শেষে প্রশ্ন বোধক চিহ্ন বসবে। যেমন:</Text>
                </View>
                <View style={{ display: 'flex', gap: 8 }}>
                    <View>
                        <Text style={styles.text}>- I am good.</Text>
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Ans:</Text> Am I good?</Text>
                    </View>
                </View>

                <LineBreaker height='20' />

                <Text style={styles.text}>কিন্তু Subject এর পরে যদি Am, Is, Are, Was, Were, Shall, Will, Have, Has, Had, Can, Could, Should, Would, May, Might ইত্যাদি না থাকে তাহলে Interrogative বাক্য গঠন করার সময়  Subject পূর্বে Do বা Does বসাতে হবে এবং বাক্যের শেষে প্রশ্ন বোধক চিহ্ন বসবে।  যেমন:</Text>
                <LineBreaker height='10' />
                <View style={{ display: 'flex', gap: 10 }}>
                    <View>
                        <Text style={styles.text}>- They read the books.</Text>
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Ans:</Text> Do they read the books?</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>- He goes to school.</Text>
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Ans:</Text> Does he go to school?</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>- I do the work.</Text>
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Ans:</Text> Do I do the work?</Text>
                    </View>
                </View>

                <View style={{ marginBottom: 10, marginTop: 30 }}>
                    <Text style={[styles.heading_md, { marginBottom: 10 }]}>3. Negative-Interrogative বাক্য গঠন করার নিয়ম:</Text>
                    <Text style={styles.text}>Negative-Interrogative বাক্য গঠন করার সময় বাক্যটিকে আগে Interrogative বাক্যে পরিনত করতে হবে। তারপর Subject যদি Noun হয় তাহলে তার আগে Not বসবে আর Subject যদি Pronoun তাহলে তারপরে Not বসবে। মনে রাখতে হবে, Noun এর আগে Pronoun এর পরে Not বসে।যেমন:</Text>
                </View>
                <View style={{ display: 'flex', gap: 10 }}>
                    <View>
                        <Text style={styles.text}>- I am good.</Text>
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Ans:</Text> Am I not good?</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>- Rahim reads the books.</Text>
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Ans:</Text> Does not Rahim read the books?</Text>
                    </View>
                </View>

                <LineBreaker height='20' />

                <Text style={styles.text}>তবে Subject, Noun বা Pronoun যাই হোক না কেন, Not কে যদি সংক্ষিপ্তাকারে অর্থাৎ Amn’t, Isn’t, Don’t, Doesn’t ইত্যাদিভাবে লিখে সকল Subject এর পূর্বে বসিয়ে Negative-Interrogative বাক্য গঠন করা যায়। যেমন:</Text>
                <LineBreaker height='10' />
                <View style={{ display: 'flex', gap: 10 }}>
                    <View>
                        <Text style={styles.text}>- He goes to school.</Text>
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Ans:</Text>Doesn’t he go to school?</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>- Sharif is a good student.</Text>
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>Ans:</Text> Isn’t Sharif a good student?</Text>
                    </View>
                </View>

                <Text style={[styles.text, { marginTop: 20 }]}>এভাবে বাক্য গঠন করতে চাইলে বাক্যটিকে প্রথমে Negative এ পরিনত করতে হবে। তারপর Negative করার অংশটি অর্থাৎ Amn’t, Isn’t, Don’t, Doesn’t ইত্যাদি Subject এর পূর্বে বসালেই Negative-Interrogative বাক্য গঠিত হবে।</Text>

                <LineBreaker height='10' />

                <Text style={styles.text}>উপরোক্ত বাক্যগুলো Present Indefinite Tense এর অন্তর্ভুক্ত বলে এখানে আলোচনা করা হলো।</Text>

                <Divider marginTop={20} marginBottom={20} />

                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>2. Present Continuous Tense কাকে বলে?</Text>
                <Text style={styles.text}>বর্তমানে কোন কাজ চলছে বা নিকট ভবিষ্যতে চলবে এরূপ বোঝালে present continuous tense হয়।</Text>

                <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#01636a', fontWeight: 'bold' }]}>বাংলায় চিনার উপায়:</Text>
                <Text style={styles.text}>বাংলায় ক্রিয়া বা verb এর শেষে তেছি, তেছ, তেছে, তেছেন, চ্ছ, চ্ছি, চ্ছে, চ্ছেন, ছি, ছেন, ইত্যাদি থাকে।</Text>

                <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#01636a', fontWeight: 'bold' }]}>Main Structure:</Text>
                <Text style={styles.text}>Subject + be verb বা Am/is/are (number ও person অনুযায়ী বসবে) + verb + ing + Extension.</Text>
                <Text style={styles.text}>Subject-এর পর person ও number অনুসারে am, is, are বসে এবং মূল verb-এর শেষে ing যোগ হয়।</Text>

                <Text style={[styles.text, { marginTop: 15 }]}>Subject এর পরে Am/is/are  বসানোর সহজ নিয়ম: শুধু I এর পরে Am বসবে। বাকি Subject যদি এক বচন হয় তাহলে is বসবে আর Subject যদি বহু বচন হয় তাহলে are বসবে। is হচ্ছে এক বচন verb। are হচ্ছে বহু বচন verb। মনে রাখতে হবে এক বচনের সাথে এক বচন আর বহু বচনের সাথে বহু বচন বসবে।</Text>

                {/* <View style={{ backgroundColor: '#d8efef', padding: 10, marginTop: 20 }}>
                        <Text style={styles.text}>Note: Person সব সময় কোনো প্রাণী বা বস্তুকে নির্দেশ করবে। আর Person-এর Parts of Speech হবে Noun অথবা Pronoun.</Text>
                    </View> */}

                <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>অন্যান্য বাক্যের জন্য সহজ Structure:</Text>

                <View style={{ display: 'flex', gap: 5 }}>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>Affirmative:</Text>   Sub + am / is / are + Verb + ing + Extension.</Text>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>Negative:</Text>      Sub + ( am / is / are ) not + Verb + ing + extension.</Text>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>Interrogative:</Text> Am/ Is / Are + Sub + Verb + ing + Entension + ?</Text>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>Neg-Int:</Text>       ( Am/ Is / Are )n’t + Sub+ Verb + ing + Entension + ?</Text>
                </View>

                <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>

                <View style={{ display: 'flex', gap: 10 }}>
                    <Text style={styles.text}>- আমি ভাত খাইতেছি বা খাচ্ছি – I am eating rice.</Text>
                    <Text style={styles.text}>- আমি স্কুলে যাইতেছি বা যাচ্ছি – I am going to school.</Text>
                    <Text style={styles.text}>- সে স্কুলে যাইতেছে বা যাচ্ছে– He is going to school.</Text>
                    <Text style={styles.text}>- তুমি/ তোমরা বই পড়িতেছ বা পড়ছ – You are reading book.</Text>
                    <Text style={styles.text}>- আমি আজ রাতে ঢাকা যাব – I am going to Dhaka tonight. (Near future বা নিকট ভবিষ্যত) বা I shall go to Dhaka tonight.</Text>
                    <Text style={styles.text}>- আমি আগামীকাল বাড়ী যাব-I am going to home tomorrow. বা I shall go home tomorrow.</Text>
                    <Text style={styles.text}>- আপনি কি আজ বিকালে মীটিং এ আসছেন – Are you coming to the meeting this afternoon? (Near future)</Text>
                </View>


                <View style={{ backgroundColor: '#d8efef', padding: 10, marginTop: 20 }}>
                    <Text style={styles.noteText}>Note: Near future বা নিকটতম ভবিষ্যত বাক্যটিতে তেছি/তেছ নাই। এই বাক্যটি Future Indefinite Tense এর। তবে এ জাতীয় বাক্য উপরোক্ত দুইভাবে করা যায়।</Text>
                </View>

                <Text style={[styles.text, { marginTop: 20 }]}>কিছু কিছু শব্দ আছে যেগুলোর বাক্য Present Continuous Tense এর মতো হলেও বাক্যটি Present Indefinite Tense এর নিয়মে করতে হয়। যেমন: Love, Feel, Hope, Think, See এদের সাথে Ing যোগ হয় না। এগুলো মুখস্থ রাখতে হবে। </Text>

                <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>

                <View style={{ display: 'flex', gap: 10 }}>
                    <Text style={styles.text}>- আমি একটা পাখি দেখতেছি-I am seeing a bird. না হয়ে হবে- I see a bird.</Text>
                    <Text style={styles.text}>- আমি তোমাকে ভালবাসতেছি-I am loving you. না হয়ে হবে- I love you.</Text>
                </View>

                <Divider marginTop={20} marginBottom={20} />

                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>3. Present Perfect Tense কাকে বলে?</Text>
                <Text style={styles.text}>কোন কাজ শেষ হয়েছে অথচ তার ফল এখনও বর্তমান আছে (অপ্রকাশিত), এরূপ বোঝালে Present perfect tense হয়।</Text>

                <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#01636a', fontWeight: 'bold' }]}>বাংলায় চিনার উপায়:</Text>
                <Text style={styles.text}>বাংলায় ক্রিয়ার শেষে য়াছ, য়াছে, য়াছি, য়াছে, য়াছেন, য়েছ, ইয়াছ, ইয়াছি, ইয়াছে, ইয়েছ, ইয়াছেন ইত্যাদি বসে। এছাড়া করিনি, করি নাই, খাইনি, খাই নাই, বোঝালে Present Perfect Tense হয়।</Text>

                <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#01636a', fontWeight: 'bold' }]}>Main Structure:</Text>
                <Text style={styles.text}>Subject + have/has + Verb এর  past participle (VPP)+ extension. ( VPP- Verb Past Participle)</Text>

                <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>অন্যান্য বাক্যের জন্য সহজ Structure:</Text>

                <View style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>Affirmative:</Text>    Sub + has / have + vpp + Extension .</Text>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>Negative:</Text>      Sub + ( has / have ) not + vpp + Extension .</Text>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>Interrogative:</Text> Have / Has + Sub + vpp + Extension + ?</Text>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>Neg-Int:</Text>        ( Have / Has )n’t + Sub + vpp+ Extension + ?</Text>
                </View>

                <Text style={[styles.text, { marginTop: 10 }]}><Text style={[styles.text, { fontWeight: 'bold' }]}>Subject এর পরে Have/Has বসানোর সহজ নিয়ম:</Text> I ও you এর পরে Have বসবে এট ব্যতিক্রম। বাকি Subject যদি এক বচন হয় তাহলে Has বসবে আর Subject যদি বহু বচন হয় তাহলে Have বসবে। Has হচ্ছে এক বচন verb। Have হচ্ছে বহু বচন verb। মনে রাখতে হবে এক বচনের সাথে এক বচন আর বহু বচনের সাথে বহু বচন বসবে।</Text>


                <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>

                <View style={{ display: 'flex', gap: 5 }}>
                    <Text style={styles.text}>- আমি ভাত খাইয়াছি – I have eaten rice.</Text>
                    <Text style={styles.text}>- আমি স্কুলে গিয়েছি – I have gone to school.</Text>
                    <Text style={styles.text}>- সে স্কুলে গিয়েছি – He has gone to school.</Text>
                    <Text style={styles.text}>- আমি ভাত খাইনি – I have not eaten rice.</Text>
                    <Text style={styles.text}>- তারা/তাহারা কাজটি করিয়াছে – They have done the work.</Text>
                    <Text style={styles.text}>- সে ঘণ্টার পর ঘণ্টা পড়েছে – He/she has studied for hours.</Text>
                    <Text style={styles.text}>- তারা এইমাত্র ফুটবল খেলিয়াছে – They have just played football.</Text>
                    <Text style={styles.text}>- সে এইমাত্র ফুটবল খেলিয়াছে – He has just played football.</Text>
                </View>

                <Divider marginTop={20} marginBottom={20} />

                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>2. Present Perfect Continuous Tense কাকে বলে?</Text>
                <Text style={styles.text}>কোন কাজ পূর্বে আরম্ভ হয়ে এখনও চলছে এরূপ বোঝালে Present Perfect Continuous Tense হয়।</Text>

                <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#01636a', fontWeight: 'bold' }]}>বাংলায় চিনার উপায়:</Text>
                <Text style={styles.text}>বাংলায় ক্রিয়ার শেষে তেছ, তেছি,তেছে, তেছেন, চ্ছ, চ্ছি, চ্ছে, চ্ছেন, ছ্, ছি্, ছে্, ছে্ন ইত্যাদি উল্লেখ থাকে এবং তার সাথে সময়ের উল্লেখ থাকে।</Text>

                <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#01636a', fontWeight: 'bold' }]}>Main Structure:</Text>
                <Text style={styles.text}>Subject + has been/have been + main verb + ing + since/from/for + Extension .</Text>

                <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>অন্যান্য বাক্যের জন্য সহজ Structure:</Text>

                <View style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>Affirmative:</Text>    have been / has been +Verb +ing +Extension .</Text>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>Negative:</Text>      (have/ has ) not +been +Verb + ing + Extension.</Text>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>Interrogative:</Text> Have / Has + Sub + been +Verb + ing + Extension + ?</Text>
                    <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>Neg-Int:</Text>        Have / Has )n’t + Sub + been +Verb+ ing + Extension + ?</Text>
                </View>

                <Text style={[styles.text, { marginTop: 10 }]}><Text style={{ fontFamily: FONT.medium, color: theme.textPrimary, fontWeight: 'bold' }}>Subject এর পরে Have been/Has been বসানোর সহজ নিয়ম:</Text> I ও you এর পরে Have been বসবে এট ব্যতিক্রম। বাকি Subject যদি এক বচন হয় তাহলে Has been বসবে আর Subject যদি বহু বচন হয় তাহলে Have been বসবে। Has been হচ্ছে এক বচন verb। Have been  হচ্ছে বহু বচন verb। মনে রাখতে হবে এক বচনের সাথে এক বচন আর বহু বচনের সাথে বহু বচন বসবে।</Text>

                <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>

                <View style={{ display: 'flex', gap: 10 }}>
                    <Text style={styles.text}>- আমি দুই দিন ধরে কাজটি করিতেছি – I have been doing this work for two days.</Text>
                    <Text style={styles.text}>- সে দুই ঘণ্টা যাবৎ পড়িতেছে – He has been reading for two hours.</Text>
                    <Text style={styles.text}>- সে সকাল থেকে পড়িতেছে– He has been reading since morning.</Text>
                    <Text style={styles.text}>- সে তিন বছর যাবৎ এই স্কুলে পড়িতেছে – He/She has been reading in this school for three years.</Text>
                    <Text style={styles.text}>- ছেলেবেলা হতে সে এখানে বাস করিতেছে – He has been living here from his boyhood.</Text>
                    <Text style={styles.text}>- ফাহিম গত সোমবার হইতে জ্বরে ভুগিতেছে – Fahim has been suffering from fever since sunday last.</Text>
                </View>

                <View style={{ backgroundColor: '#d8efef', padding: 10, marginTop: 20 }}>
                    <Text style={[styles.noteText, { marginBottom: 15 }]}>Note: Since ব্যবহৃত হবে শুধুমাত্র Point of Time  এর ক্ষেত্রে অর্থাৎ নির্দিষ্ট সময়ের ক্ষেত্রে।Period of Time এর ক্ষেত্রে অর্থাৎ কোন নির্দিষ্ট সময়ের ব্যাপ্তি বোঝাতে for ব্যাবহার  করা হয়। অনেক বেশি সময় এর ক্ষেত্রে বা কোন ব্যক্তিগত ক্ষেত্রে যেমন ছেলেবেলা হতে/শৈশবকাল হতে এরুপ বুঝাতে  from ব্যবহৃত হয়।সব Tense এর ক্ষেত্রে from ব্যবহার করা যায়।</Text>
                    <Text style={styles.noteText}>আরো সহজভাবে বলা যায়: বারের নাম যেমন-Saturday, Sunday, Monday ইত্যাদি, মাসের নাম যেমন-January, February ইত্যাদি, Morning, Noon, Afternoon, Evening, সাল যেমন- 1971, তারিখ যেমন-10th ইত্যাদির আগে since বসে। ব্যাপক সময় যেমন- এক ঘন্টা, ২ দিন, সাত দিন, ১ বছর ইত্যাদির আগে for বসে। ছেলেবেলা হতে/শৈশবকাল হতে এরুপ বুঝাতে  from ব্যবহৃত হয়।</Text>
                </View>
            </View>
        </ScrollView>
            : <PreLoader />
    )
}

export default PresentTense