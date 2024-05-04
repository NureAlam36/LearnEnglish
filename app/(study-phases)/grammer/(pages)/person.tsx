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
                    headerTitle: () => <Text style={{ fontSize: 18, color: 'white', fontFamily: FONT.medium, }}>Person</Text>,
                    headerStyle: { backgroundColor: '#5495fb' }
                }}
            />
            <ScrollView style={[styles.container, { backgroundColor: colorScheme === 'light' ? '#fff' : COLORS.darkSecondary }]}>
                <View style={{ padding: 15 }}>
                    <Text style={[styles.heading_xl, { marginBottom: 10 }]}>Person কাকে বলে?</Text>
                    <Text style={styles.text}>বাক্যে (Sentence) ব্যবহৃত যে সকল Noun বা Pronoun দ্বারা কোনো প্রাণী বা বস্তুকে বোঝায় তাকে Person বলে। যেমন: I, we, you, he, she, it, they, chair, table ইত্যাদি।</Text >

                    <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24' }]}>উদাহরণ:</Text>
                    <Text style={styles.text}>I go to school. – এই বাক্যে I(আমি) দ্বারা একটি প্রাণী বোঝায়। একইভাবে It is a very beautiful flower. – বাক্যে It(এটা) দ্বারা একটি বস্তুকে বোঝায়। </Text>
                    <Text style={[styles.text, { marginTop: 10 }]}>এখানে I ও It দ্বারা প্রাণী বা বস্তুকে বোঝায় বলে এই শব্দগুলোকে আমারা Person বলতে পারি।</Text>

                    <View style={{ backgroundColor: '#d8efef', padding: 10, marginTop: 20 }}>
                        <Text style={styles.text}>Note: Person সব সময় কোনো প্রাণী বা বস্তুকে নির্দেশ করবে। আর Person-এর Parts of Speech হবে Noun অথবা Pronoun.</Text>
                    </View>

                    <Text style={[styles.text, { marginTop: 15 }]}>ইংরেজি গ্রামারে Person বিষয়টি Number-এর সাথে সম্পর্কিত। তাই উপরে Number-এর সাথে প্রায় সকল Person-এর উদাহারণ দেওয়া হলো।</Text>

                    <Divider marginTop={20} marginBottom={20} />

                    <Text style={[styles.heading_xl, { marginBottom: 10 }]}>Person কত প্রকার?</Text>
                    <Text style={styles.text}>Person (পুরুষ) তিন প্রকার। যথা:</Text>

                    <View style={{ display: 'flex', gap: 5, marginTop: 10 }}>
                        <Text style={styles.text}>1. First Person (উত্তম পুরুষ)</Text>
                        <Text style={styles.text}>2. Second Person (মধ্যম পুরুষ)</Text>
                        <Text style={styles.text}>3. Third Person (নাম পুরুষ)</Text>
                    </View>

                    <Divider marginTop={20} marginBottom={20} />

                    <Text style={[styles.heading_xl, { marginBottom: 10 }]}>1. First Person কাকে বলে?</Text>
                    <Text style={styles.text}>কোনো বাক্যে যে বা যারা কথা বলে তাকে First Person বলে। যেমন: I, me, my, mine, we, us, our, ours ইত্যাদি।</Text>
                    <Text style={[styles.text, { marginTop: 10 }]}>অর্থাৎ First Person এমন একটি শব্দ হবে,  যা বাক্যের মধ্যে থাকা ঐ ব্যক্তির নিজের সম্পর্কে কিছু বলতেছে এমন বোঝাবে।</Text>
                    <Text style={[styles.text, { marginTop: 10 }]}>যেমন “I am Bangladeshi.” এই বাক্যে Person হচ্ছে: I (আমি)। আর এই বাক্যে বক্তা তার নিজের সম্পর্কে বলতেছে যে, “আমি একজন বাংলাদেশী “। তাই এখানে “I” হলো First Person.</Text>

                    <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24' }]}>উদাহরণ:</Text>

                    <View style={{ display: 'flex', gap: 5 }}>
                        <Text style={styles.text}>• I (আমি): I am a student.</Text>
                        <Text style={styles.text}>• Me (আমাকে): He helps me.</Text>
                        <Text style={styles.text}>• My (আমার): My favorite food is Biryani.</Text>
                        <Text style={styles.text}>• Mine (আমার): The red pen is mine.</Text>
                        <Text style={styles.text}>• We (আমরা): We should help the poor.</Text>
                        <Text style={styles.text}>• Us (আমাদের): The festival brings us together.</Text>
                        <Text style={styles.text}>• Our (আমাদের): Our traditions are rich and diverse.</Text>
                    </View>

                    <Divider marginTop={20} marginBottom={20} />

                    <Text style={[styles.heading_xl, { marginBottom: 10 }]}>2. Second Person কাকে বলে?</Text>
                    <Text style={styles.text}>কোনো বাক্যে যাকে বা যাদেরকে সম্বোধন করে কিছু বলা হয় তাকে Second Person বলে। যেমন: You, your, thou ইত্যাদি।</Text>
                    <Text style={[styles.text, { marginTop: 10 }]}>অর্থাৎ যে বা যারা আমাদের সামনে উপস্থিত থাকে এবং যাদেরকে উদ্দেশ্য করে কিছু বলা হয় তারাই হচ্ছে Second Person. </Text>
                    <Text style={[styles.text, { marginTop: 10 }]}>যেমন “You are a teacher.” এই বাক্যে You নামক Person-কে উদ্দেশ্য করে বলা হচ্ছে যে “তুমি একজন শিক্ষক।” তাই এখানে “You” হলো Second Person.</Text>

                    <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24' }]}>উদাহরণ:</Text>

                    <View style={{ display: 'flex', gap: 5 }}>
                        <Text style={styles.text}>• You (তুমি): You are very sweet.</Text>
                        <Text style={styles.text}>• Your (তোমাকে): – Your book is on the table.</Text>
                    </View>

                    <View style={{ backgroundColor: '#d8efef', padding: 10, marginTop: 20 }}>
                        <Text style={styles.text}>Note: সাধারণত ইংরেজি গ্রামারে You, Your, Thou (তুমি) এই তিনটি Second Person রয়েছে।</Text>
                    </View>

                    <Divider marginTop={20} marginBottom={20} />

                    <Text style={[styles.heading_xl, { marginBottom: 10 }]}>3. Third Person কাকে বলে?</Text>
                    <Text style={styles.text}>কোনো বাক্যে যে বা যাদের সম্পর্কে কোনো কিছু বলা হয় তাকে Third Person বলে। যেমন: He, she, him, her, it, they, them, their এবং যে কোনো প্রাণী বা বস্তুর নাম (Rahim, flower, chair, table) ইত্যাদি।</Text>
                    <Text style={[styles.text, { marginTop: 10 }]}>First Person ও Second Person ছাড়া, যে সব ব্যক্তিদের সম্পর্কে কিছু বলা হয় সে বা তারাই হচ্ছে Third Person. </Text>

                    <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24' }]}>উদাহরণ:</Text>

                    <View style={{ display: 'flex', gap: 5 }}>
                        <Text style={styles.text}>• He (সে): He is going to the market.</Text>
                        <Text style={styles.text}>• She (সে): She is reading a book.</Text>
                        <Text style={styles.text}>• Him (তাকে): I gave the book to him.</Text>
                        <Text style={styles.text}>• Her (তাকে): I called her yesterday.</Text>
                        <Text style={styles.text}>• It (এটা): It is raining outside.</Text>
                        <Text style={styles.text}>• They (তারা): They are playing football.</Text>
                        <Text style={styles.text}>• Them (তাদের): I will help them.</Text>
                        <Text style={styles.text}>• Their (তাদেরকে): Their house is big.</Text>
                        <Text style={styles.text}>• My friend (আমার বন্ধু): My friend is coming over for dinner.</Text>
                        <Text style={styles.text}>• Rahim (রহিম): Rahim is a good student.</Text>
                    </View>

                    <View style={{ backgroundColor: '#d8efef', padding: 10, marginTop: 20 }}>
                        <Text style={styles.text}>Note: সাধারণত ইংরেজি গ্রামারে You, Your, Thou (তুমি) এই তিনটি Second Person রয়েছে।</Text>
                    </View>

                    <Divider marginTop={20} marginBottom={20} />


                    <Text style={[styles.heading_xl, { marginBottom: 10 }]}>Person চেনার উপায়</Text>
                    <Text style={styles.text}>Person চেনার জন্য নিচের বাক্য সমূহ মনে রাখা যেতে পারে:</Text >

                    <View style={{ display: 'flex', gap: 5 }}>
                        <Text style={styles.text}>1. First Person: “আ” দ্বারা বাংলা অর্থ শুরু হবে। (I=আমি, We=আমরা)</Text>
                        <Text style={styles.text}>2. Second Person: মাত্র তিনটি। (You, Your, Thou)</Text>
                        <Text style={styles.text}>3. Third Person: আমি, তুমি ছাড়া, ভবে (পৃথিবীতে) আছে যারা Third Person তারা। অর্থাৎ First Person ও Third Person ছাড়া বাকিসব Third Person.</Text>
                    </View>

                    <Divider marginTop={20} marginBottom={20} />

                    <Text style={[styles.heading_xl, { marginBottom: 10 }]}>সকল Number ও Person একসাথে</Text>

                </View>
            </ScrollView>
        </React.Fragment>
    )
}



export default person