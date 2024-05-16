import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import { FONT, COLORS } from "@/constants";

import Stack from 'expo-router/stack';
import PreLoader from '@/components/PreLoader';

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
        }, 0);
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
        }
    })

    return (
        <React.Fragment>
            {
                !loading ? <ScrollView style={[styles.container, { backgroundColor: colorScheme === 'light' ? '#fff' : COLORS.darkSecondary }]}>
                    <View style={{ padding: 15 }}>
                        <Text style={[styles.heading_lg, { marginBottom: 10 }]}>Right Form of Verbs বলতে কি বুঝায়?</Text>
                        <Text style={styles.text}>Right Form of verbs: কোন sentence-এর verb বা verb গুলোর সঠিক রুপ (form) কি হবে, তা যে রুলস (rules) বা নিয়মের মাধ্যমে জানা যায়, সে নিয়মগুলোকেই সাধারণভাবে right form of verbs বলে।</Text >

                        <Divider marginTop={20} marginBottom={20} />

                        <Text style={[styles.heading_lg, { marginBottom: 10 }]}>Why is the Right Form of Verbs important?</Text>
                        <Text style={styles.text}>Right Form of Verbs সঠিকভাবে ইংরেজি বাক্য লিখা ও বলার জন্য খুবই গুরুত্বপূর্ণ। এতদ্ব্যতীত, আমাদের স্কুল কলেজের ইংরেজি পরীক্ষায় কোন বাক্যের একটি verb-কে bracket-এর মধ্যে রেখে verb-টির সঠিক রুপ কি হবে, তা bracket উঠিয়ে দিয়ে verb–এর সঠিক রুপসহ পূর্ণ বাক্য লিখতে বলা হয়। এ কারনেই বাক্যে verb-এর সঠিক ব্যবহারের নিয়মগুলি জানা খুবই জরুরী। এরই আলোকে নিম্নে Right Form of Verbs বিষয়ে গুরুত্বপূর্ন কয়েকটি রুলস, যা সাধারনত: পরীক্ষায় আসে, তা নিয়ে আলোচনা করা হলো। উল্লেখ্য, Right Form of Verbs-কে ভালভাবে জানার জন্য verb সম্পর্কিত (verb related) প্রায় সকল grammatical rules গুলি জানতে হয়।</Text >

                        <Divider marginTop={20} marginBottom={20} />

                        <Text style={[styles.heading_lg, { marginBottom: 10 }]}>Right forms of verbs গুরুত্বপূর্ণ নিয়মগুলো নিচে বর্ণনা করা হলোঃ</Text>

                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 1:</Text> Present Indefinite Tense এর subject যদি third person singular number হয় তাহলে verb এর শেষে s, es যোগ হবে। কিন্তু অন্য কোন tense এর ক্ষেত্রে হবে না।</Text>

                        {/* Rule 1 */}
                        <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                        <View style={{ display: 'flex', gap: 5, marginBottom: 15 }}>
                            <Text style={styles.text}>- He eats rice.</Text>
                            <Text style={styles.text}>- He plays football.</Text>
                        </View>

                        <View style={{ backgroundColor: '#d8efef', padding: 10 }}>
                            <Text style={styles.text}>Present Indefinite Tense এর subject যদি plural number হয় তাহলে verb এর শেষে s/es যোগ হবে না।</Text>
                        </View>

                        <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                        <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                            <Text style={styles.text}>- They play football.</Text>
                            <Text style={styles.text}>- They eat rice.</Text>
                        </View>

                        {/* Rule 2 */}
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 2:</Text> Present Indefinite Tense এর subject, third person singular number হলেও সেটি যদি negative sentence হয় তাহলে does not ব্যবহৃত হবে। তখন verb এর শেষে s/es যোগ হবেনা।</Text>

                        <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                        <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                            <Text style={styles.text}>- He does not go to school.</Text>
                            <Text style={styles.text}>- Ashish does not eat rice.</Text>
                        </View>

                        {/* Rule 3 */}
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 3:</Text> Past tense or future tense হলে verb এর শেষে s/es যোগ হবে না। তখন সেই tense এর structure অনুযায়ী verb বসবে।</Text>

                        <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                        <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                            <Text style={styles.text}>- He went to school.</Text>
                            <Text style={styles.text}>- He went to school.</Text>
                        </View>

                        {/* Rule 4 */}
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 4:</Text> Modal Auxiliary verb (যেমন: can, could, may, might, shall, should, will, would, ought to, need, dare, have to, must etc.) এর পরে verb এর present form বসে এবং verb এর সাথে কোন কিছু যোগ হয় না।</Text>

                        <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                        <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                            <Text style={styles.text}>- He can do the work.</Text>
                            <Text style={styles.text}>- I shall go to the school.</Text>
                            <Text style={styles.text}>- You must come home.</Text>
                            <Text style={styles.text}>- He should study hard.</Text>
                        </View>

                        {/* Rule 5 */}
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 5:</Text> বাক্যটি যদি universal truth (চিরন্তন সত্য) হয়, habitual fact (অভ্যাসগত কাজ) বোঝায় তাহলে present indefinite tense হবে।</Text>

                        <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                        <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                            <Text style={styles.text}>- The sun rises in the east.</Text>
                            <Text style={styles.text}>- Ice floats on water.</Text>
                        </View>

                        {/* Rule 6 */}
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 6:</Text> Sentence টি passive voice হলে এবং modal auxiliary verb (can, could, may, might, shall, should, will, would, ought to, need, dare, have to, must etc.) এর পরে be + past participle form of verb বসে।</Text>

                        <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                        <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                            <Text style={styles.text}>- It can be done by you.</Text>
                            <Text style={styles.text}>- All the fruits could be taken.</Text>
                        </View>

                        {/* Rule 7 */}
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 7:</Text> Had, rather, let, would better, had better, need not, do not, does not, did not, did never, ইত্যাদি এর পর present form of verb বসে।</Text>

                        <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                        <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                            <Text style={styles.text}>- I let them use my shoes.</Text>
                            <Text style={styles.text}>- I had better go to the market by this time.</Text>
                            <Text style={styles.text}>- I need not do the work.</Text>
                        </View>

                        {/* Rule 8 */}
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 8:</Text> বাক্যে have/has থাকলে সেটি present perfect tense হবে।</Text>

                        <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                        <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                            <Text style={styles.text}>- He has done the work.</Text>
                            <Text style={styles.text}>- They have eaten rice.</Text>
                        </View>

                        {/* Rule 9 */}
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 9:</Text> Sentence এ yet, just, just now, recently, already, lately, ever ইত্যাদি থাকলে present perfect tense হবে।</Text>

                        <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                        <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                            <Text style={styles.text}>- He has taken his lunch just now.</Text>
                            <Text style={styles.text}>- They have already come home.</Text>
                            <Text style={styles.text}>- I have met him recently.</Text>
                        </View>

                        {/* Rule 10 */}
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 10:</Text> Sentence এ yesterday, ago, long ago, last year, last week, last month, that day, day before, ইত্যাদি থাকলে past indefinite tense হবে।</Text>

                        <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                        <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                            <Text style={styles.text}>- He came home</Text>
                            <Text style={styles.text}>- I went to Cox's Bazar last month.</Text>
                            <Text style={styles.text}>- A long time ago, there lived a poor farmer.</Text>
                        </View>

                        {/* Rule 11 */}
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 11:</Text> To এর পরে সবসময় verb এর present form বসে।</Text>

                        <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                        <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                            <Text style={styles.text}>- You need to do the work in time.</Text>
                            <Text style={styles.text}>- He went to the market to buy a shirt.</Text>
                        </View>

                        {/* Rule 12 */}
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 12:</Text> Since বা for এর পর সময়ের উল্লেখ থাকলে সেটি present perfect continuous tense হবে।</Text>

                        <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                        <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                            <Text style={styles.text}>- He has been doing the work since the morning.</Text>
                            <Text style={styles.text}>- It has been raining for two hours.</Text>
                        </View>

                        {/* Rule 13 */}
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 13:</Text> if দ্বারা যুক্ত clause টি যদি present indefinite tense হয় তাহলে পরের clause টি future indefinite tense হবে।</Text>

                        <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                        <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                            <Text style={styles.text}>- If he comes, I’ll go.</Text>
                            <Text style={styles.text}>- If you work hard, you’ll shine in life.</Text>
                        </View>

                        {/* Rule 14 */}
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 14:</Text> With a view to/look forward to এর পর verb এর সাথে ing যোগ হবে।</Text>

                        <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                        <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                            <Text style={styles.text}>- I’m looking forward to getting a job.</Text>
                            <Text style={styles.text}>- I went shopping with a view to buying a shirt.</Text>
                        </View>

                        {/* Rule 15 */}
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 15:</Text> By এর পর verb এর সাথে ing যোগ হবে।</Text>

                        <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                        <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                            <Text style={styles.text}>- She expressed her feelings by crying.</Text>
                            <Text style={styles.text}>- By digging the land, she planted trees.</Text>
                        </View>

                        {/* Rule 16 */}
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 16:</Text> For, of, in, without, with, before, after ইত্যাদি preposition এর পরে verb এর সাথে ing যোগ হয়।</Text>

                        <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                        <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                            <Text style={styles.text}>- I’ve never been tired of going there.</Text>
                            <Text style={styles.text}>- She can’t go without waiting for me.</Text>
                        </View>

                        {/* Rule 17 */}
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 17:</Text> Mind, would you mind, past, worth, could not help, cannot help এর পরে verb এর সাথে ing যোগ হয়।</Text>

                        <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                        <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                            <Text style={styles.text}>- Would you mind giving me the book?</Text>
                            <Text style={styles.text}>- He cannot help doing the assignment.</Text>
                        </View>

                        {/* Rule 18 */}
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 18:</Text> Sentence এর শুরুতে যদি would that থাকে তাহলে subject এর পর could বসে এবং এরপর verb এর present form বসে।</Text>

                        <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                        <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                            <Text style={styles.text}>- Would that I could be a writer like Humayun Ahmed.</Text>
                            <Text style={styles.text}>- Would that I could buy a Toyota car.</Text>
                        </View>

                        {/* Rule 19 */}
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 19:</Text> To be/having/got থাকলে verb এর past participle form হয়।</Text>

                        <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                        <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                            <Text style={styles.text}>- The assignment is to be completed immediately.</Text>
                            <Text style={styles.text}>- The thief ran away having seen the police.</Text>
                            <Text style={styles.text}>- I got the certificates sent by the Headmaster.</Text>
                        </View>

                        {/* Rule 20 */}
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 20:</Text> ব্র্যাকেটে (be) থাকলে person, number এবং tense অনুযায়ী am/is/are/was/were/been হবে।</Text>

                        <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                        <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                            <Text style={styles.text}>- It (be) two years ago.</Text>
                            <Text style={styles.text}>- It was two years ago.</Text>
                            <Text style={styles.text}>- Allah (be) everywhere.</Text>
                            <Text style={styles.text}>- Allah is everywhere.</Text>
                            <Text style={styles.text}>- One of my friends (be) an honest person.</Text>
                            <Text style={styles.text}>- One of my friends is/was an honest person.</Text>
                        </View>

                        {/* Rule 21 */}
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 21:</Text> বর্তমান কালে চলছে এমন কোন কাজ বোঝালে present continuous tense হয়। (এসব ক্ষেত্রে সাধারণত at present/now/at the moment ইত্যাদি adverb ব্যবহৃত হয়।)</Text>

                        <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                        <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                            <Text style={styles.text}>- He is watching the Television at this moment.</Text>
                            <Text style={styles.text}>- They are playing football.</Text>
                            <Text style={styles.text}>- Now, they are doing their assignment.</Text>
                        </View>

                        {/* Rule 22 */}
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 22:</Text> If + Present Indefinite + Future Indefinite (if যুক্ত clause টি present indefinite tense হলে পরের clause টি হবে future indefinite)</Text>

                        <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                        <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                            <Text style={styles.text}>- If you come, I’ll go.</Text>
                            <Text style={styles.text}>- If you drink milk, you will be healthy.</Text>
                        </View>

                        {/* Rule 23 */}
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 23:</Text> যদি had/if যুক্ত clause টি past indefinite tense হয় তাহলে পরের clause টি তে subject এর পর would/could/might বসে এবং verb এর present form হয়।</Text>

                        <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                        <View style={{ display: 'flex', gap: 5 }}>
                            <Text style={styles.text}>- If he came, I would go to the market.</Text>
                            <Text style={styles.text}>- If I were rich enough, I would help the poor.</Text>
                        </View>

                        <View style={{ backgroundColor: '#d8efef', padding: 10, marginTop: 15, marginBottom: 15 }}>
                            <Text style={styles.text}>যদি had/if যুক্ত clause টি past perfect tense হয় তাহলে পরের clause টি তে subject এর পর would have/could have/might have বসে এবং verb এর past participle form হয়।</Text>
                        </View>

                        <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                            <Text style={styles.text}>- If he had come, I would have gone to the market.</Text>
                            <Text style={styles.text}>- If you had walked fast, you could have reached the station.</Text>
                        </View>

                        {/* Rule 24 */}
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 24:</Text> Wish/fancy/it is time/it is high time ইত্যাদি থাকলে verb এর past tense হবে।</Text>

                        <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                        <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                            <Text style={styles.text}>- I wish I won the first prize.</Text>
                            <Text style={styles.text}>- It is high time you changed your bad habits.</Text>
                            <Text style={styles.text}>- I fancy I flew in the sky.</Text>
                        </View>

                        {/* Rule 25 */}
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 25:</Text> As if/as though থাকলে were বসে।</Text>

                        <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                        <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                            <Text style={styles.text}>- He speaks as if he were the leader.</Text>
                            <Text style={styles.text}>- He acts as though he were a hero.</Text>
                        </View>

                        {/* Rule 26 */}
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 26:</Text> Each, every, everyone, any, anyone, many a, everybody, everything, anybody, nobody, no one, nothing, anything, someone, something, one of, either, neither ইত্যাদি থাকলে verb এর singular number ব্যবহৃত হয়।</Text>

                        <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                        <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                            <Text style={styles.text}>- Each of the students was present.</Text>
                            <Text style={styles.text}>- Every father dedicates his life to his children.</Text>
                            <Text style={styles.text}>- One of the students was very talented.</Text>
                            <Text style={styles.text}>- Neither of the two brothers was present in the class.</Text>
                        </View>

                        {/* Rule 27 */}
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 27:</Text> While এর পর verb থাকলে সেটির সাথে ing যোগ হয়। কিন্তু while এর পর subject থাকলে এর অংশটি past continuous tense হয়।</Text>

                        <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                        <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                            <Text style={styles.text}>- While walking through the zoo, I saw a</Text>
                            <Text style={styles.text}>- While it was raining, I was watching a movie.</Text>
                        </View>

                        {/* Rule 28 */}
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 28:</Text> অনেক সময় একই স্থান, দৈর্ঘ্য বা পরিমাপ বোঝালে subject দেখতে plural মনে হলেও verb টি singular form হয়।</Text>

                        <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                        <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                            <Text style={styles.text}>- Twenty miles was a long way.</Text>
                            <Text style={styles.text}>- Two hundred miles is not a long distance in this modern era.</Text>
                        </View>

                        {/* Rule 29 */}
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 29:</Text> Main clause এর verb টি past tense হলে ও পরের অংশে next day, next week, next month, next year ইত্যাদি উল্লেখ থাকলে subject এর পরে should/would বসে।</Text>

                        <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                        <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                            <Text style={styles.text}>- He told that he would go home the next week.</Text>
                            <Text style={styles.text}>- She said that she would buy land next year.</Text>
                        </View>

                        {/* Rule 30 */}
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 30:</Text> After এর পরের এবং before এর আগের clause টি past perfect tense হবে এবং অন্য clause টি past indefinite tense হবে।</Text>

                        <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                        <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                            <Text style={styles.text}>- The train had left the station before we reached.</Text>
                            <Text style={styles.text}>- The doctor came after the patient had died.</Text>
                        </View>

                        {/* Rule 31 */}
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 31:</Text> Passive voice এর সময় tense ও person অনুযায়ী auxiliary verb ও verb এর past participle form বসে।</Text>

                        <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                        <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                            <Text style={styles.text}>- English is spoken all over the world.</Text>
                            <Text style={styles.text}>- We are taught English by</Text>
                        </View>

                        {/* Rule 32 */}
                        <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 32:</Text> ব্যতিক্রমগুলো ছাড়া Principle clause এর verb যদি past tense হয় তাহলে subordinate clause এর verb ও past tense হবে এবং একটি present tense হলে অন্যটিও present tense হবে।</Text>

                        <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                        <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                            <Text style={styles.text}>- He was so ill that he would not go to the school.</Text>
                            <Text style={styles.text}>- They understood that he would not come.</Text>
                        </View>
                    </View>
                </ScrollView>
                    : <PreLoader />
            }
        </React.Fragment>
    )
}



export default person