import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Stack from 'expo-router/stack';

import { FONT, COLORS } from "@/constants";
import PreLoader from '@/components/PreLoader';

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

const person = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 0);
    }, []);

    return (
        <React.Fragment>
            <Stack.Screen
                options={{
                    headerTitle: () => <Text style={{ fontSize: 18, color: 'white', fontFamily: FONT.medium, }}>Future Tense</Text>,
                    headerStyle: { backgroundColor: '#5495fb' }
                }}
            />
            {
                !loading ? <ScrollView style={styles.container}>
                    <Text style={[styles.heading_xl, { marginBottom: 10 }]}>Future Tense (ভবিষ্যৎ কাল)</Text>
                    <Text style={styles.text}>যে কাজ পরে বা ভবিষ্যতে ঘটবে বুঝায় তাঁর কালকে Future Tense বলে।</Text >

                    <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>যেমনঃ</Text>

                    <View style={{ display: 'flex', gap: 5 }}>
                        <Text style={styles.text}>-  I ate - আমি খেয়েছি।</Text>
                        <Text style={styles.text}>- He went- সে গিয়েছিলো।</Text>
                        <Text style={styles.text}>- They were playing - তাহারা খেলেছিল/ খেলিতেছিলো ।</Text>
                        <Text style={styles.text}>- The patient had died before the doctor came - ডাক্তার আসার পূর্বেই রোগী মারা গিয়েছিলেন।</Text>
                    </View>

                    <Divider marginTop={20} marginBottom={20} />

                    <Text style={[styles.heading_xl, { marginBottom: 10 }]}>Future Tense এর প্রকারভেদ</Text>
                    <Text style={styles.text}>Future Tense (ভবিষ্যৎ কাল) চার প্রকার। যথা:</Text>

                    <View style={{ display: 'flex', gap: 5, marginTop: 10 }}>
                        <Text style={styles.text}>1. Future Indefinite Tense </Text>
                        <Text style={styles.text}>2. Future Continuous Tense</Text>
                        <Text style={styles.text}>3. Future Perfect Tense</Text>
                        <Text style={styles.text}>4. Future Perfect Continuous Tense</Text>
                    </View>

                    <Divider marginTop={20} marginBottom={20} />

                    <Text style={[styles.heading_xl, { marginBottom: 10 }]}>1. Future Indefinite Tense কাকে বলে?</Text>
                    <Text style={styles.text}>ভবিষ্যতে কোন কাজ ঘটবে এরূপ বোঝালে Future indefinite tense হয়।</Text>

                    <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#01636a', fontWeight: 'bold' }]}>বাংলায় চিনার উপায়:</Text>
                    <Text style={styles.text}>বাংলায় ক্রিয়ার শেষে বে, ব, বা, বি, বেন এদের যে কোন একটি উল্লেখ থাকে।</Text>

                    <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#01636a', fontWeight: 'bold' }]}>Structure:</Text>
                    <Text style={styles.text}>Subject + shall/will + verb + Extension</Text>

                    <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>

                    <View style={{ display: 'flex', gap: 5 }}>
                        <Text style={styles.text}>- আমি কাজটি করব- I shall do the work.</Text>
                        <Text style={styles.text}>- তারা কাজটি করবে- They will do the work.</Text>
                        <Text style={styles.text}>- আমি বিদ্যালয়ে যাব- I shall go to the school.</Text>
                        <Text style={styles.text}>- সে বিদ্যালয়ে যাবে- He will go to the school.</Text>
                        <Text style={styles.text}>- তারা বাজারে যাবে – They will go to the market.</Text>
                    </View>


                    <View style={{ backgroundColor: '#d8efef', padding: 10, marginTop: 20 }}>
                        <Text style={styles.text}>Note: 1st person  তথা I ও We এর পর shall বসে। এছাড়া অন্য সব ক্ষেত্রে will বসবে।কোন কাজ যদি জোড় দিয়ে করা বুঝায় বা বক্তার ইচ্ছে, আদেশ, উপদেশ, দৃঢ় সংকল্প বুঝায় তাহলে I ও We এর পর will। এছাড়া অন্য সব ক্ষেত্রে shall বসবে।</Text>

                        <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                        <View style={{ display: 'flex', gap: 5 }}>
                            <Text style={styles.text}>- সে বিদ্যালয়ে যাবেই (জোড় দেয়া বুঝায়)- He shall go to the school.</Text>
                            <Text style={styles.text}>- আমি কাজটি করিবই(জোড় দেয়া বুঝায়)- I will do the work. Or I must do the work.</Text>
                            <Text style={styles.text}>- আমি আর একবার ভাগ্য পরীক্ষা করব (ইচ্ছা বুঝায়)-I will try my luck again.</Text>
                            <Text style={styles.text}>- তোমরা মহত ব্যক্তিদের পদাংক অনুসরন করবে(উপদেশ)-You shall follow the footsteps of great men.</Text>
                        </View>
                    </View>

                    <View style={{ backgroundColor: '#d8efef', padding: 10, marginTop: 20 }}>
                        <Text style={styles.text}>Note: কোন কাজ যদি Near Future বুঝায় তাহলে বাক্যটি Future indefinite tense এর নিয়মানুসারে করা যাবে আবার Present Continuos Tense এর নিয়মানুসারেও করা যাবে।</Text>

                        <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                        <View style={{ display: 'flex', gap: 5 }}>
                            <Text style={styles.text}>- আমি আগামীকাল বাড়ী যাব- I shall go home tomorrow. বা I am going to home tomorrow.</Text>
                        </View>
                    </View>

                    <Divider marginTop={20} marginBottom={20} />

                    <Text style={[styles.heading_xl, { marginBottom: 10 }]}>2. Future Continuous Tense কাকে বলে?</Text>
                    <Text style={styles.text}>ভবিষ্যৎ কালে কোন কাজ চলতে থাকবে এরূপ বোঝালে Future Continuous Tense হয়।</Text>

                    <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#01636a', fontWeight: 'bold' }]}>বাংলায় চিনার উপায়:</Text>
                    <Text style={styles.text}>বাংলায় ক্রিয়ার শেষে তে থাকিব, তে থাকিবে, তে থাকিবা, তে থাকিবেন এদের যে কোন একটি যুক্ত থাকে।</Text>

                    <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#01636a', fontWeight: 'bold' }]}>Main Structure:</Text>
                    <Text style={styles.text}>Subject + shall be/will be + main verb + ing + Extension.</Text>
                    <Text style={[styles.text, { marginTop: 15 }]}>Subject-এর পর person ও number অনুসারে shall be বা will be বসে এবং মূল verb-এর শেষে ing যোগ হয়।</Text>

                    <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>

                    <View style={{ display: 'flex', gap: 5 }}>
                        <Text style={styles.text}>- আমি বইটি পড়িতে থাকিব – I shall be reading the book.</Text>
                        <Text style={styles.text}>- আমি গান গাইতে থাকিব- I shall be singing the song.</Text>
                        <Text style={styles.text}>- তারা ফুটবল খেলিতে থাকিবে- They will be playing football.</Text>
                        <Text style={styles.text}>- সে কাজটি করিতে থাকিবে- He will be doing the work.</Text>
                        <Text style={styles.text}>- তুমি/ তোমরা স্কুলে যাইতে থাকিবে- they will be going to school.</Text>
                        <Text style={styles.text}>- তিনি অফিসে যাইতে থাকিবেন- He will be going to office.</Text>
                    </View>

                    <Divider marginTop={20} marginBottom={20} />

                    <Text style={[styles.heading_xl, { marginBottom: 10 }]}>3. Future Perfect Tense কাকে বলে?</Text>
                    <Text style={styles.text}>ভবিষ্যৎ কালে কোন নির্দিষ্ট সময়ের মধ্যে কোন কাজ হয়ে যাবে বোঝালে বা দুটি কাজের মধ্যে একটি আগে হবে বোঝালে Future Perfect Tense হয়।</Text>
                    <Text style={[styles.text, { marginTop: 15 }]}>ভবিষ্যৎ কালে কোন নির্দিষ্ট সময়ের মধ্যে কোন কাজ হয়ে যাবে বোঝালে বা দুটি কাজের মধ্যে একটি আগে হবে বোঝালে Future Perfect Tense হয়।</Text>

                    <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#01636a', fontWeight: 'bold' }]}>বাংলায় চিনার উপায়:</Text>
                    <Text style={styles.text}>বাংলায় ক্রিয়ার শেষে য়া থাকিব, য়া থাকিবা, য়া থাকিবে, য়া থাকিবেন, এদের যে কোন একটি যোগ থাকলে  Future perfect tense হয়।</Text>

                    <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#01636a', fontWeight: 'bold' }]}>Main Structure:</Text>
                    <Text style={styles.text}>1- ( Before থাকলে) 1st subject + shall have/will have + verb এর past participle + Extension + before/ + 2nd subject + main verb + Extension</Text>
                    <Text style={styles.text}>2- ( After থাকলে) 1st subject + main verb + Extension + After + 2nd subject + shall have/will have + verb এর past participle + Extension.</Text>

                    <Text style={[styles.text, { marginTop: 15 }]}>Subject-এর পর person ও number অনুসারে shall have বা will have বসে এবং মূল verb-এর past participle form ব্যবহৃত হয়।</Text>

                    <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>

                    <View style={{ display: 'flex', gap: 5 }}>
                        <Text style={styles.text}>- বাবা আসার আগে আমি কাজটি করিয়া থাকিব – I shall have done the work before my father comes.</Text>
                        <Text style={styles.text}>- আমি বিকাল চারটার মধ্যে বইটি পড়িয়া থাকিব – I shall have finished reading the book by 4. P. m.</Text>
                        <Text style={styles.text}>- তুমি যাওয়ার পূর্বে আমি গান গাইয়া থাকিব- I shall have sang a song before you leave.</Text>
                        <Text style={styles.text}>- তারা আসার পূর্বে আমি পড়া শেষ করিব – I shall have finished my lesson before they come.</Text>
                        <Text style={styles.text}>- সে আসার পরে আমি পড়া শেষ করব- He comes after I finish my lesson after he will have come.</Text>
                    </View>


                    <View style={{ backgroundColor: '#d8efef', padding: 10, marginTop: 20 }}>
                        <Text style={styles.text}>Note: এখানে মনে রাখদত হবে before এর আগে after এর পরে Future Perfect Tense হবে । অন্যটি simple present tense এর হবে।</Text>
                    </View>

                    <Divider marginTop={20} marginBottom={20} />

                    <Text style={[styles.heading_xl, { marginBottom: 10 }]}>4. Future Perfect Continuous Tense কাকে বলে?</Text>
                    <Text style={styles.text}>ভবিষ্যৎ কালে কোন সময়ের মধ্যে কোন কাজ চলতে থাকবে এরূপ বোঝালে future perfect tense হয়।</Text>
                    <Text style={[styles.text, { marginTop: 15 }]}>ভবিষ্যৎ কালে দুটি কাজের মধ্যে যে কাজটি আগে চলতে থাকবে তা future perfect tense হয় যে কাজটি পরে হবে তা simple present tense হয়।</Text>

                    <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#01636a', fontWeight: 'bold' }]}>বাংলায় চিনার উপায়:</Text>
                    <Text style={styles.text}>বাংলায় ক্রিয়ার শেষে তে থাকিব, তে থাকিবে, তে থাকিবা, তে থাকিবেন এদের যে কোন একটি উল্লেখ থাকে।</Text>

                    <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#01636a', fontWeight: 'bold' }]}>Main Structure:</Text>
                    <Text style={styles.text}>1st subject + shall have been/will have been + main verb + ing + Extension+ 2nd subject + main verb + Extension.</Text>

                    <View style={{ backgroundColor: '#d8efef', padding: 10, marginTop: 20 }}>
                        <Text style={styles.text}>Note: Subject-এর পর shall have been বা will have been বসে এবং মূল verb-এর শেষে ing যোগ হয়।দুইটি বাক্য থাকলে Befor/When বা After/That থাকবে।</Text>
                    </View>

                    <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>

                    <View style={{ display: 'flex', gap: 5 }}>
                        <Text style={styles.text}>- তুমি ফিরে না আসা পর্যন্ত আমরা তোমার জন্য অপেক্ষা করতে থাকব- we shall have been waiting for you until you come back.</Text>
                        <Text style={styles.text}>- বাবা আসার আগে আমি কাজটি করিতে থাকিব- I shall have been doing the work before my father comes.</Text>
                        <Text style={styles.text}>- তারা আসার আগে আমি খেলিতে থাকিব- I shall have been playing before they come.</Text>
                        <Text style={styles.text}>- সে ডিগ্রি পাওয়ার পূর্বে চার বছর রবীন্দ্রভারতি বিশ্ববিদ্যালয়ে পড়তে থাকবে – he will have been studying at Rabindrabharati university for four years before he gets degree.</Text>
                    </View>

                    <View style={{ backgroundColor: '#d8efef', padding: 10, marginTop: 20 }}>
                        <Text style={styles.text}>Note:  ভবিষ্যৎ কালে দুটি কাজের মধ্যে যে কাজটি আগে চলতে থাকবে তা future perfect tense হয় যে কাজটি পরে হবে তা simple present tense হবে, তবে বাক্যের ধরন অনুযায়ী Simple Present Tense এর পরিবর্ত Future Indefinite Tense হবে।</Text>

                        <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                        <View style={{ display: 'flex', gap: 5 }}>
                            <Text style={styles.text}>- এক ঘন্টা কাজ করতে থাকার পর তারা বিশ্রাম করবে- They will take rest when they will have been working for an hour.</Text>
                        </View>
                    </View>
                </ScrollView>
                    : <PreLoader />
            }
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    text: {
        fontSize: 17,
        fontFamily: FONT.regular,
        color: '#242424'
    },
    heading_xl: {
        fontSize: 22,
        fontFamily: FONT.bold,
        color: COLORS.black
    },
    heading_lg: {
        fontSize: 20,
        fontFamily: FONT.bold,
        color: COLORS.black
    },
    heading_md: {
        fontSize: 18,
        fontFamily: FONT.bold,
        color: COLORS.black
    }
})

export default person