import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import { FONT, COLORS } from "@/constants";

import Stack from 'expo-router/stack';

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
    const { colorScheme } = useColorSchemeContext();

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
            <Stack.Screen
                options={{
                    headerTitle: () => <Text style={{ fontSize: 18, color: 'white', fontFamily: FONT.medium, }}>Sentences</Text>,
                    headerStyle: { backgroundColor: '#5495fb' }
                }}
            />
            <ScrollView style={[styles.container, { backgroundColor: colorScheme === 'light' ? '#fff' : COLORS.darkSecondary }]}>
                <View style={{ padding: 15 }}>
                    <Text style={[styles.heading_xl, { marginBottom: 10 }]}>Sentence কাকে বলে?</Text>
                    <Text style={styles.text}>যখন দুটি বা ততোধিক শব্দ বা শব্দসমষ্টি একসাথে বসে বক্তার ভাব সম্পূর্ণভাবে প্রকাশ করে, তখন সেই শব্দ বা শব্দসমষ্টিকে Sentence বাক্য বলে। অন্যভাবে বললে বাক্য Sentence হলো এমন একাধিক শব্দের সমষ্টি যা একটি সম্পূর্ণ ভাব প্রকাশ করে।</Text >

                    <Text style={[styles.text, { marginTop: 10 }]}>যেমন: we speak English Everyday. এখানে We হলো (subject) speak হলো(Verb) English হলো (object) এবংEveryday হলো (Adverb)</Text>

                    <Divider marginTop={20} marginBottom={20} />

                    <Text style={[styles.heading_xl, { marginBottom: 10 }]}>Sentence প্রধান অংশ কয়টি?</Text>
                    <Text style={styles.text}>আমরা জানি সাধারণত Sentence এর প্রধান অংশ দুইটি যথা:</Text>

                    <View style={{ display: 'flex', gap: 5, marginTop: 10 }}>
                        <Text style={styles.text}>1. Subject (উদ্দেশ্য)</Text>
                        <Text style={styles.text}>2. Predicate (বিধেয়)</Text>
                    </View>

                    <Divider marginTop={20} marginBottom={20} />

                    <Text style={[styles.heading_xl, { marginBottom: 10 }]}>অর্থ অনুসারে Sentence:</Text>
                    <Text style={styles.text}>সাধারণত অর্থ অনুসারে Sentence কে “৫” ভাগে ভাগ করা হয়। যথা:</Text>

                    <View style={{ display: 'flex', gap: 5, marginTop: 10 }}>
                        <Text style={styles.text}>1. Assertive Sentence (বর্ণনামূলক বাক্য)</Text>
                        <Text style={styles.text}>2. Interrogative Sentence (প্রশ্নবোধক বাক্য)</Text>
                        <Text style={styles.text}>3. Imperative Sentence (অনুজ্ঞাসূচক বাক্য)</Text>
                        <Text style={styles.text}>4. Optative Sentence  (ইচ্ছা বা প্রার্থনাসূচক বাক্য)</Text>
                        <Text style={styles.text}>5. Exclamatory Sentence (বিস্ময়সূচক বাক্য)</Text>
                    </View>

                    <Divider marginTop={20} marginBottom={20} />

                    <Text style={[styles.heading_xl, { marginBottom: 10 }]}>1. Assertive Sentence (বর্ণনামূলক বাক্য)</Text>
                    <Text style={styles.text}>যে Sentence দ্বারা কোন কিছুর বর্ণনা  বিবৃতি ঘটনা অভিজ্ঞতা চিন্তা এগুলো নির্দেশ করা হয় তাকে Assertive Sentence বলে।</Text>

                    <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24' }]}>যেমনঃ</Text>

                    <View style={{ display: 'flex', gap: 5 }}>
                        <Text style={styles.text}>• Rimi is a good girl. (রিমি একটি ভাল মেয়ে)</Text>
                        <Text style={styles.text}>• have not a mobile. (আমার একটি মোবাইল নাই)</Text>
                        <Text style={styles.text}>• He did not get the book. (সে বইটি পায়নি)</Text>
                    </View>

                    <Text style={[styles.heading_md, { marginTop: 15 }]}>গঠনঃ subject + verb + object + Extension</Text>

                    <View style={{ backgroundColor: '#d8efef', padding: 10, marginTop: 20 }}>
                        <Text style={styles.text}>Note: প্রত্যেক Sentence এর Affirmative (হ্যাঁ বোধক) বা Negative (না বোধক) দিক আছে।</Text>
                    </View>

                    <Divider marginTop={20} marginBottom={20} />

                    <Text style={[styles.heading_xl, { marginBottom: 10 }]}>2. Interrogative Sentence (প্রশ্নবোধক বাক্য)</Text>
                    <Text style={styles.text}>যে Sentence দ্বারা কোন প্রশ্ন করা হয় বা যে বাক্য দ্বারা যেকোনো মাধ্যমে কোন প্রশ্ন করা হয় তাকে Interrogative Sentence বলে।</Text>

                    <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24' }]}>যেমনঃ</Text>

                    <View style={{ display: 'flex', gap: 5 }}>
                        <Text style={styles.text}>• What is your name? (তোমার নাম কি?)</Text>
                        <Text style={styles.text}>• Where are you going? (তুমি কোথায় যাচ্ছ ?)</Text>
                        <Text style={styles.text}>• How much does it cost? (এটার দাম কত?)</Text>
                    </View>

                    <Text style={[styles.heading_md, { marginTop: 15 }]}>গঠনঃ Auxiliary verb + subject + মূল verb + object + extension</Text>

                    <View style={{ backgroundColor: '#d8efef', padding: 10, marginTop: 20, marginBottom: 15 }}>
                        <Text style={styles.text}>Note: Interrogative Sentence এ দুই ধরনের Auxiliary verb ব্যবহার করা হয় </Text>
                    </View>

                    <View style={{ display: 'flex', gap: 5 }}>
                        <Text style={styles.text}>• সাধারণ  Auxiliary verb : ( am, is, are, shall, should, can, may, do, did, dose, etc )</Text>
                        <Text style={styles.text}>• WH word auxiliary verb: (What, Which, Who, whom, Where, When, How, How long, Why, etc)</Text>
                    </View>

                    <Divider marginTop={20} marginBottom={20} />

                    <Text style={[styles.heading_xl, { marginBottom: 10 }]}>3. Imperative Sentence (অনুজ্ঞাসূচক বাক্য)</Text>
                    <Text style={styles.text}>যে Sentence দ্বারা কোন আদেশ, উপদেশ, নিষেধ, অনুরোধ ইত্যাদি বোঝায় তাকেই Imperative sentence বা অনুজ্ঞাসূচক বাক্য বলে।</Text>

                    <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24' }]}>যেমনঃ</Text>

                    <View style={{ display: 'flex', gap: 5 }}>
                        <Text style={styles.text}>• Do the sum.- অংকটি কর।</Text>
                        <Text style={styles.text}>• Please give me a glass of water. – অনুগ্রহ করে আমাকে এক গ্লাস পানি দাও।</Text>
                        <Text style={styles.text}>• Would you please not smoke beside me? – দয়া করে আমার পাশে ধুমপান করবেন না?</Text>
                    </View>

                    <Text style={[styles.heading_md, { marginTop: 15 }]}>গঠনঃ verb + বাকি অংশ বা please + verb+ বাকি অংশ বা would you please + verb + বাকি অংশ</Text>

                    <View style={{ backgroundColor: '#d8efef', padding: 10, marginTop: 20 }}>
                        <Text style={styles.text}>Note: Imperative sentence চেনার উপায় হল বাক্যে শুরুতে verb থাকবে বা বাক্যটি আদেশ, উপদেশ, অনুরোধ, দ্বারা শুরু হবে। বাক্যের সর্বদা “you” উহ্য থাকে</Text>
                    </View>

                    <Divider marginTop={20} marginBottom={20} />

                    <Text style={[styles.heading_xl, { marginBottom: 10 }]}>4. Optative Sentence  (ইচ্ছা বা প্রার্থনাসূচক বাক্য)</Text>
                    <Text style={styles.text}>যে বাক্য দ্বারা  কোন কিছুর ইচ্ছা, আকাঙ্ক্ষা, প্রার্থনা, ইত্যাদি প্রকাশ পায় তাকে Optative Sentence বলে।</Text>

                    <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24' }]}>যেমনঃ</Text>

                    <View style={{ display: 'flex', gap: 5 }}>
                        <Text style={styles.text}>• তুমি সুখী হও- May you be happy.</Text>
                        <Text style={styles.text}>• আল্লাহ তোমার মঙ্গল করুক- May Allah bless you.</Text>
                        <Text style={styles.text}>• তুমি দীর্ঘজীবী হও-May you long live.</Text>
                    </View>

                    <Text style={[styles.heading_md, { marginTop: 15 }]}>গঠনঃ May +subject+ verb + বাকি অংশ/ I wish +object + বাকি অংশ </Text>

                    <View style={{ backgroundColor: '#d8efef', padding: 10, marginTop: 20 }}>
                        <Text style={styles.text}>Note: বাক্যের শুরুতে” May/ I wish  ব্যবহৃত হয়ে sentence তৈরি হবে</Text>
                    </View>

                    <Divider marginTop={20} marginBottom={20} />

                    <Text style={[styles.heading_xl, { marginBottom: 10 }]}>5. Exclamatory Sentence (বিস্ময়সূচক বাক্য)</Text>
                    <Text style={styles.text}>যে বাক্য দ্বারা মনের আকস্মিক ভাব/আবেগ, বিস্ময়, আনন্দ, বেদনা বা দুঃখ প্রকাশ পায় বা বুঝা যায় তাকে Exclamatory Sentence-(বিস্ময়কর সূচক বাক্য) বলে।</Text>

                    <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24' }]}>যেমনঃ</Text>

                    <View style={{ display: 'flex', gap: 5 }}>
                        <Text style={styles.text}>• What a beautiful bird it is !-পাখিটি  কি সুন্দর!</Text>
                        <Text style={styles.text}>• Alas! How helpless the old man is !-হায়! বৃদ্ধটি কত অসহায়!</Text>
                        <Text style={styles.text}>• Bravo/Hurrah! Our team has won the match !-সাবাস ! আমাদের দল খেলায় জিতেছে!</Text>
                    </View>

                    <Text style={[styles.heading_md, { marginTop: 15 }]}>গঠনঃ  what/Alas/ Bravo/Hurrah +a+ Adjective+ ব্যক্তি বা বস্তু+ verb + !</Text>

                    <View style={{ backgroundColor: '#d8efef', padding: 10, marginTop: 20 }}>
                        <Text style={styles.text}>Note: বাক্যের শুরুতে what/Alas/ Bravo/Hurrah দিয়ে শুরু হবে এবং শেষে !(বিস্ময় সূচক চিহ্ন) ব্যবহৃত হবে।</Text>
                    </View>



                    <Divider marginTop={20} marginBottom={20} />

                    <Text style={[styles.heading_xl, { marginBottom: 10 }]}>গঠন অনুসারে Sentence:</Text>
                    <Text style={styles.text}>গঠন অনুসারে Sentence কে তিন (৩) ভাগে ভাগ করা হয় যথাঃ</Text>

                    <View style={{ display: 'flex', gap: 5, marginTop: 10 }}>
                        <Text style={styles.text}>1. Simple sentence (সরল বাক্য)</Text>
                        <Text style={styles.text}>2. Complex sentence (জটিল বাক্য)</Text>
                        <Text style={styles.text}>3. Compound Sentence (যৌগিক বাক্য)</Text>
                    </View>

                    <Divider marginTop={20} marginBottom={20} />

                    <Text style={[styles.heading_xl, { marginBottom: 10 }]}>1. Simple sentence (সরল বাক্য)</Text>
                    <Text style={styles.text}>যে সকল বাক্যে একটিমাত্র subject থাকে অথবা একটি মাত্র object থাকে এবং একটি সমাপিকা ক্রিয়া (Finite verb ) থাকে তাকে Simple sentence বলে।</Text>

                    <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24' }]}>যেমনঃ</Text>

                    <View style={{ display: 'flex', gap: 5 }}>
                        <Text style={styles.text}>• Cox’s Bazar is the largest sea-beach in the world.</Text>
                        <Text style={styles.text}>• She wrote an application to the principal.</Text>
                        <Text style={styles.text}>• Bangladesh is a developing country.</Text>
                    </View>

                    <Text style={[styles.heading_md, { marginTop: 15 }]}>গঠনঃ subject + Finite verb + object </Text>

                    <View style={{ backgroundColor: '#d8efef', padding: 10, marginTop: 20 }}>
                        <Text style={styles.text}>Note: প্রত্যেকটি বাক্যে একটি করে Finite verb থাকবে।</Text>
                    </View>

                    <Divider marginTop={20} marginBottom={20} />

                    <Text style={[styles.heading_xl, { marginBottom: 10 }]}>2. Complex sentence (জটিল বাক্য)</Text>
                    <Text style={styles.text}>যে Sentence একটি Principle Clause এবং এক বা একাধিক Subordinate Clause দিয়ে গঠিত হয়, তখন তাকে  Complex Sentence বলে।</Text>

                    <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24' }]}>যেমনঃ</Text>

                    <View style={{ display: 'flex', gap: 5 }}>
                        <Text style={styles.text}>• His brother died when he was seven years old. -(যখন তার 7 বছর তখন তার ভাই মারা গিয়েছিল)</Text>
                        <Text style={styles.text}>• If you read regularly, you will do well in the exam.-(যদি তুমি প্রতিদিন পড়াশোনা করো তাহলে তুমি পরীক্ষায় ভালো করবে.)</Text>
                    </View>

                    <View style={{ backgroundColor: '#d8efef', padding: 10, marginTop: 20 }}>
                        <Text style={styles.text}>Note: দুইটি clause মিলে complex sentence তৈরি হয়</Text>
                    </View>

                    <Divider marginTop={20} marginBottom={20} />

                    <Text style={[styles.heading_xl, { marginBottom: 10 }]}>3. Compound Sentence (যৌগিক বাক্য)</Text>
                    <Text style={styles.text}>যে Sentence এ একাধিক Principle Clause, Coordinating Conjunction দ্বারা যুক্ত হয় তখন তাকে Compound Sentence বলা হয়।</Text>

                    <Text style={[styles.text, { marginTop: 10 }]}>Coordinating Conjunction গুলি হলোঃ (And, But, Or, Yet, Therefore, So, Otherwise, Not only ….. but also)</Text>

                    <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24' }]}>যেমনঃ</Text>

                    <View style={{ display: 'flex', gap: 5 }}>
                        <Text style={styles.text}>• She is poor but happy.</Text>
                        <Text style={styles.text}>• I am weak but you are strong.</Text>
                        <Text style={styles.text}>• The boys sang and the girls danced</Text>
                    </View>

                    <View style={{ backgroundColor: '#d8efef', padding: 10, marginTop: 20 }}>
                        <Text style={styles.text}>Note: compound sentence সর্বদা coordinating conjunction থাকবেই।</Text>
                    </View>
                </View>
            </ScrollView>
        </React.Fragment>
    )
}



export default person