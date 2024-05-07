import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import { FONT, COLORS } from "@/constants";

import { Table, Row } from 'react-native-table-component';

import PreLoader from '@/components/PreLoader';
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
        },
        tableHead: { minHeight: 40, backgroundColor: '#f1f8ff', fontFamily: FONT.bold },
        tableData: { minHeight: 20, margin: 6, fontFamily: FONT.medium },
        evenRow: { backgroundColor: '#f2f2f2' }
    })

    return (
        <React.Fragment>
            <Stack.Screen
                options={{
                    headerTitle: () => <Text style={{ fontSize: 18, color: 'white', fontFamily: FONT.medium, }}>Narration</Text>,
                    headerStyle: { backgroundColor: '#5495fb' }
                }}
            />
            {
                !loading ? <ScrollView style={[styles.container, { backgroundColor: colorScheme === 'light' ? '#fff' : COLORS.darkSecondary }]}>
                    <View style={{ padding: 15 }}>
                        <Text style={[styles.heading_xl, { marginBottom: 10 }]}>Narration কাকে বলে?</Text>
                        <Text style={styles.text}>Speech শব্দের অর্থ “বক্তৃতা”। আর Narration শব্দের অর্থ “বর্ণনা”। এই দুটি শব্দ একই অর্থ নির্দেশ করে।</Text >
                        <Text style={[styles.text, { marginTop: 10 }]}>অর্থাৎ কোনো ব্যক্তি কথা বলার সময় যা যা বলে তাই মূলত Speech/Narration. </Text >
                        <Text style={[styles.text, { marginTop: 10 }]}>সুতরাং বক্তা যা বলে তাকে Speech বা Narration বলে।</Text >

                        <Divider marginTop={20} marginBottom={20} />

                        <Text style={[styles.heading_xl, { marginBottom: 10 }]}>Speech/Narration কত প্রকার?</Text>
                        <Text style={styles.text}>Speech দুই প্রকার। যথা:</Text>

                        <View style={{ display: 'flex', gap: 5, marginTop: 10 }}>
                            <Text style={styles.text}>1. Direct Speech (প্রত্যক্ষ উক্তি)</Text>
                            <Text style={styles.text}>2. Indirect Speech (পরোক্ষ উক্তি)</Text>
                        </View>

                        <Divider marginTop={20} marginBottom={20} />

                        <Text style={[styles.heading_xl, { marginBottom: 10 }]}>1. Direct Speech কাকে বলে?</Text>
                        <Text style={styles.text}>যখন কোনো কথাকে পরিবর্তন না করে অবিকল সে ভাষায় বলা হয় তখন তাকে Direct Speech/Narration বলে।</Text>

                        <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24' }]}>উদাহরণ:</Text>

                        <Text style={styles.text}>• <Text style={{ fontFamily: FONT.medium }}>Direct Speech:</Text> Jamil said to me, “I am a good student.”</Text>

                        <Text style={[styles.text, { marginTop: 10 }]}>এখানে Jamil তার নিজের ব্যাপারে বলছে যে “I am a good student.” আমরা চাইলে পরিবর্তন করে বলতে পারতাম “He was a student.”</Text >

                        <Text style={[styles.text, { marginTop: 10 }]}>কিন্তু এখানে পরিবর্তন করা হয়নি। অবিকল Jamil এর ভাষায় বলা হয়েছে। তাই এটি Direct Speech.</Text >

                        <Text style={[styles.heading_md, { marginTop: 20, color: '#a72a24' }]}>Direct Speech দুটি অংশ থাকে। যথা:</Text>
                        <Image source={{ uri: 'https://yasinclassroom.com/wp-content/uploads/2024/04/direct-speech-com.webp' }} style={{ width: '100%', height: 200, resizeMode: 'contain' }} />

                        <View style={{ display: 'flex', gap: 5 }}>
                            <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>1. Reporting Verb:</Text> Inverted Comma (“  ”) এর ভিতের অংশকে Reported Speech বলে। (উপরে “I am a good student.” হলো Reported Speech.)</Text>
                            <Text style={styles.text}><Text style={{ fontFamily: FONT.medium }}>2. Reported Speech:</Text> যে Verb দ্বারা বক্তব্য প্রকাশ করা হয় তাকে Reporting Verb বলে। (এখানে said হলো Reporting Verb.)</Text>
                        </View>

                        <Divider marginTop={20} marginBottom={20} />

                        <Text style={[styles.heading_xl, { marginBottom: 10 }]}>2. Indirect Speech কাকে বলে?</Text>
                        <Text style={styles.text}>যখন কোনো কথাকে পরিবর্তন করে ব্যক্ত করা হয় তখন তাকে Indirect Speech/Narration বলে।</Text>
                        <Text style={[styles.text, { marginTop: 10 }]}>অর্থাৎ যে বা যারা আমাদের সামনে উপস্থিত থাকে এবং যাদেরকে উদ্দেশ্য করে কিছু বলা হয় তারাই হচ্ছে Second Person. </Text>
                        <Text style={[styles.text, { marginTop: 10 }]}>যেমন “You are a teacher.” এই বাক্যে You নামক Person-কে উদ্দেশ্য করে বলা হচ্ছে যে “তুমি একজন শিক্ষক।” তাই এখানে “You” হলো Second Person.</Text>

                        <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24' }]}>উদাহরণ:</Text>

                        <Text style={styles.text}>• <Text style={{ fontFamily: FONT.medium }}>Indirect Speech:</Text> Jamil said to me that he was a good student.</Text>

                        <Text style={[styles.text, { marginTop: 10 }]}>পূর্বের Direct Speech-এর উদাহরণে আমারা দেখেছিলাম যে, Jamil তার নিজের ব্যাপারে বলেছিল যে “I am a good student.”</Text >

                        <Text style={[styles.text, { marginTop: 10 }]}>কিন্তু উপরের উদাহরণে আমারা দেখতে পাচ্ছি যে, Jamail এর কথা পরিবর্তিত হয়ে বলা হয়েছে ‘he was a good student.’</Text >
                        <Text style={[styles.text, { marginTop: 10 }]}>সুতরাং Jamil এর কথা পরিবর্তন করে ব্যক্ত করায় আমারা এটিকে Indirect Speech বলতে পারি।</Text >

                        <Divider marginTop={20} marginBottom={20} />

                        {/* Rule 1 */}
                        <Text style={[styles.heading_lg, { marginTop: 20, marginBottom: 5 }]}>Rule 1: Reporting Verb ও Inverted Comma-এর পরিবর্তনঃ</Text>
                        <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                            <Row data={['Sentence', 'Reporting Verb (Said) এর পরিবর্তে বসে', 'Inverted Comma-এর পরিবর্তে বসে']} style={styles.tableHead} textStyle={styles.tableData} />
                            <Row key={1} data={['Assertive', 'said/told', 'if/wh-word']} textStyle={styles.tableData} />
                            <Row key={2} data={['Interrogative', 'asked', 'Apples']} style={styles.evenRow} textStyle={styles.tableData} />
                            <Row key={3} data={['Imperative', 'ordered (আদেশ), advised (উপদেশ), forbade (নিষেধ), requested (অনুরোধ), proposed (প্রস্তাব)', 'to/not to/that']} textStyle={styles.tableData} />
                            <Row key={4} data={['Optative', 'wished (ইচ্ছা), prayed (প্রার্থনা)', 'that']} style={styles.evenRow} textStyle={styles.tableData} />
                            <Row key={5} data={['Exclamatory', 'exclaimed with joy/sorrow', 'that']} textStyle={styles.tableData} />
                        </Table>

                        <Divider marginTop={20} marginBottom={20} />

                        {/* Rule 2 */}
                        <Text style={[styles.heading_lg, { marginTop: 20, marginBottom: 15 }]}>Rule 2: Person পরিবর্তনের নিয়মঃ</Text>
                        <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5 }]}>1. First Person পরিবর্তন হয় Subject অনুযায়ীঃ</Text>
                        <Text style={[styles.heading_md, { marginTop: 20, color: '#a72a24' }]}>উদাহরণ:</Text>
                        <Image source={{ uri: 'https://yasinclassroom.com/wp-content/uploads/2024/04/narration-first-person-1.webp' }} style={{ width: '100%', height: 200, resizeMode: 'contain' }} />

                        <Text style={styles.text}>এখানে First Person (I) থাকায় Reporting verb-এর Subject (Rafiq) কে অনুসরণ করে। আর Rafiq একজন ছেলে। তাই “I” এর পরিবর্তে “he” বসেছে।</Text>
                        <Text style={styles.text}>• <Text style={{ fontFamily: FONT.medium }}>ব্যতিক্রম:</Text>“We” দ্বারা মানবজাতি বুঝালে বা  “We” যদি বক্তা ও যাকে উদ্দেশ্য করে উভয়কে বুঝায় তবে Indirect Speech-এ “We” পরিবর্তন হয় না। যেমন:</Text>

                        <View style={{ display: 'flex', gap: 10, marginTop: 15 }}>
                            <View>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Direct:</Text> The teacher said, “We are mortal.”</Text>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Indirect:</Text> The teacher said that we are mortal.</Text>
                            </View>
                            <View>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Direct:</Text> He said to me, ” We should do our duty.”</Text>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Indirect:</Text> He said to me that we should do our duty.</Text>
                            </View>
                        </View>

                        <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5 }]}>2. Second Person পরিবর্তন হয় Object অনুযায়ীঃ</Text>
                        <Text style={[styles.heading_md, { marginTop: 20, color: '#a72a24' }]}>উদাহরণ:</Text>
                        <Image source={{ uri: 'https://yasinclassroom.com/wp-content/uploads/2024/04/narration-second-person-1.webp' }} style={{ width: '100%', height: 200, resizeMode: 'contain' }} />

                        <Text style={styles.text}>উপরে Second Person (You) থাকায় Reporting verb-এর Object (me) কে অনুসরণ করে। আর “me” এর Subjective Form হচ্ছে “I”। তাই এখানে “You” এর পরিবর্তে “I” বসেছে।</Text>


                        <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5 }]}>3. Third Person পরিবর্তন হয় না -</Text>
                        <Text style={[styles.heading_md, { marginTop: 20, color: '#a72a24' }]}>উদাহরণ:</Text>
                        <Image source={{ uri: 'https://yasinclassroom.com/wp-content/uploads/2024/04/narration-third-person.webp' }} style={{ width: '100%', height: 200, resizeMode: 'contain' }} />

                        <Text style={styles.text}>এখানে Third Person (He) এর পরিবর্তে he বসেছে। অর্থাৎ Narration এর নিয়মে Third Person এর কোনো পরিবর্তন হয় না।</Text>

                        <Divider marginTop={20} marginBottom={20} />

                        {/* Rule 3 */}
                        <Text style={[styles.heading_lg, { marginTop: 20, marginBottom: 5 }]}>Rules 3: Narration এর Tense পরিবর্তনের নিয়মঃ</Text>
                        <Text style={styles.text}>Narration এর নিয়ম অনুয়ায়ী নিম্নোক্ত পদ্ধতিতে Tense পরিবর্তন করতে হয়। তবে তুমি চাইলে পরের টেবিল থাকে শর্টকাট পদ্ধতি দেখে নিতে পারো।</Text>

                        <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                            <Row data={['Direct', 'Indirect']} style={styles.tableHead} textStyle={styles.tableData} />
                            <Row key={1} data={['Present Indefinite', 'Past Indefinite']} textStyle={styles.tableData} />
                            <Row key={2} data={['Present Continuous', 'Past Continuous']} style={styles.evenRow} textStyle={styles.tableData} />
                            <Row key={3} data={['Present Perfect', 'Past Perfect']} textStyle={styles.tableData} />
                            <Row key={4} data={['Present Perfect Continuous', 'Past Perfect Continuous']} style={styles.evenRow} textStyle={styles.tableData} />
                            <Row key={5} data={['Past Indefinite', 'Past Perfect']} textStyle={styles.tableData} />
                            <Row key={6} data={['Past Continuous', 'Past Perfect Continuous']} textStyle={styles.tableData} />
                        </Table>

                        <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5 }]}>Tense পরিবর্তনের শর্টকাট নিয়মঃ</Text>
                        <Text style={styles.text}>Tense সম্পর্কে স্পষ্ট ধারনা না থাকলেও নিম্নের Verb গুলো পরিবর্তন করলেই Tense পরিবর্তন হয়ে যাবে।</Text>

                        <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                            <Row data={['Direct', 'Indirect']} style={styles.tableHead} textStyle={styles.tableData} />
                            <Row key={1} data={['am/is', 'was']} textStyle={styles.tableData} />
                            <Row key={2} data={['are', 'were']} style={styles.evenRow} textStyle={styles.tableData} />
                            <Row key={3} data={['was/were', 'had been']} textStyle={styles.tableData} />
                            <Row key={4} data={['have/has', 'had']} style={styles.evenRow} textStyle={styles.tableData} />
                            <Row key={5} data={['V1 (Present Form)', 'V2 (Past Form)']} textStyle={styles.tableData} />
                            <Row key={6} data={['V2 (Past Form)', 'had + V3']} textStyle={styles.tableData} />
                            <Row key={7} data={['did', 'had + V3']} style={styles.evenRow} textStyle={styles.tableData} />
                            <Row key={8} data={['shall/will', 'would']} style={styles.evenRow} textStyle={styles.tableData} />
                            <Row key={9} data={['can', 'could']} style={styles.evenRow} textStyle={styles.tableData} />
                            <Row key={10} data={['may', 'might']} style={styles.evenRow} textStyle={styles.tableData} />
                            <Row key={11} data={['must', 'had to']} style={styles.evenRow} textStyle={styles.tableData} />
                        </Table>

                        <View style={{ backgroundColor: '#d8efef', padding: 10, marginTop: 20 }}>
                            <Text style={styles.text}>Note: সাধারণত must থাকলে had to বসে। তবে কোনো কাজ চিরকালীন বাধ্যবাধকতা বোঝালে must এর কোনো পরিবর্তন হবে না। যেমন “You must obey your parents.” (আপনাকে অবশ্যই আপনার পিতামাতাকে মান্য করতে হবে।) এই বাক্যে must চিরকালীন বাধ্যবাধকতা বোঝায়। কেননা আমাদের সব সময় বাবা-মাকে মান্য করতে হয়। তাই এই বাক্যে must এর কোনো পরিবর্তন হবে না।</Text>
                        </View>

                        <Divider marginTop={20} marginBottom={20} />

                        {/* Rule 4 */}
                        <Text style={[styles.heading_lg, { marginTop: 20, marginBottom: 5 }]}>Rule 4: নিকটবর্তী Word সমূহের পরিবর্তনঃ</Text>

                        <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                            <Row data={['Direct', 'Indirect', 'Direct', 'Indirect']} style={styles.tableHead} textStyle={styles.tableData} />
                            <Row key={1} data={['Now', 'Then', 'This', 'That']} textStyle={styles.tableData} />
                            <Row key={2} data={['Today', 'That day', 'These', 'Those']} style={styles.evenRow} textStyle={styles.tableData} />
                            <Row key={3} data={['To night', 'That night', 'Here', 'There']} textStyle={styles.tableData} />
                            <Row key={4} data={['Tomorrow', 'The next day', 'Ago', 'Before']} style={styles.evenRow} textStyle={styles.tableData} />
                            <Row key={5} data={['Yesterday', 'The previous day', 'Come', 'Go']} textStyle={styles.tableData} />
                            <Row key={6} data={['Last night', 'The previous night', 'Thus', 'So']} textStyle={styles.tableData} />
                            <Row key={7} data={['Next week', 'The following week', 'Hither', 'Thither']} style={styles.evenRow} textStyle={styles.tableData} />
                            <Row key={8} data={['Sir/Madam', 'respectfully', 'Here', 'There']} style={styles.evenRow} textStyle={styles.tableData} />
                            <Row key={9} data={['Yes/OK/Sure etc.', 'eplied in the affirmative and said that', 'No', 'replied in the negative and said that']} style={styles.evenRow} textStyle={styles.tableData} />
                        </Table>

                        <Divider marginTop={20} marginBottom={20} />

                        {/* Rule 5 */}
                        <Text style={[styles.heading_lg, { marginTop: 20, marginBottom: 5 }]}>Rule 5: Sentence Narration এর নিয়মঃ</Text>
                        <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, textAlign: 'center', color: '#a72a24' }]}>Assertive Sentence</Text>

                        <View style={{ backgroundColor: '#d8efef', padding: 10, marginVertical: 20 }}>
                            <Text style={styles.text}>গঠন: Subject+ told/said+ Object+ that+ Subject(RS)+ Verb(RS)+ বাকী অংশ।</Text>
                        </View>

                        <View style={{ display: 'flex', gap: 15 }}>
                            <View>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Direct:</Text> Samira said to me, “I am reading a novel.”</Text>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Indirect:</Text> Samira told me that she was reading a novel.</Text>
                            </View>
                            <View>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Direct:</Text> The teacher said to me, “You are wrong”.</Text>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Indirect:</Text> The teacher told me that I was wrong. </Text>
                            </View>
                            <View>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Direct:</Text> Hasan said to me, “I lived many years in Dhaka.”</Text>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Indirect:</Text> Hasan told me that he had lived many years in Dhaka.</Text>
                            </View>
                            <View>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Direct:</Text> He said, “I will do my homework”.</Text>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Indirect:</Text> He said that he would do his homework.</Text>
                            </View>
                            <View>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Direct:</Text> Ruma said, “My father will go home tomorrow.”</Text>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Indirect:</Text> Ruma said that her father would go home the next day.</Text>
                            </View>

                            <View>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Direct:</Text> Kamal said to Sabbir, “I went to your home.”</Text>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Indirect:</Text> Kamal told Sabbir that he(Kamal) had gone to his(Sabbir) home.”</Text>
                            </View>
                        </View>

                        {/*  */}
                        <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, textAlign: 'center', color: '#a72a24' }]}>Interrogative Sentence </Text>

                        <View style={{ backgroundColor: '#d8efef', padding: 10, marginVertical: 20 }}>
                            <Text style={styles.text}>গঠন 01: Subject+ asked+ Object+ Wh-word+ Verb+ Subject(RS)+ Verb(RS)+ বাকী অংশ। [ Wh-word দ্বারা শুরু হলে।]</Text>
                        </View>

                        <View style={{ display: 'flex', gap: 15 }}>
                            <View>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Direct:</Text> He said to his father, “What are you doing?”</Text>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Indirect:</Text> He asked his father what he (f) was doing.</Text>
                            </View>
                            <View>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Direct:</Text> He said to me, “Where do you live?”</Text>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Indirect:</Text> He asked me where I lived.</Text>
                            </View>
                            <View>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Direct:</Text> Sohel said to Rasel, “What are you doing?”</Text>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Indirect:</Text> Sohel asked Rasel what he(R) was doing.</Text>
                            </View>
                            <View>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Direct:</Text> The teacher said to the boys, “Why are you making a noise?”</Text>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Indirect:</Text> The teacher asked the boys why they were making a noise.</Text>
                            </View>
                        </View>

                        <View style={{ backgroundColor: '#d8efef', padding: 10, marginVertical: 20 }}>
                            <Text style={styles.text}>গঠন 02: Subject+ asked+ Object+ if+ Subject(RS)+ Verb(RS)+ বাকী অংশ। [ Auxiliary Verb  দ্বারা শুরু হলে]</Text>
                        </View>

                        <View style={{ display: 'flex', gap: 15 }}>
                            <View>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Direct:</Text> Premul said to his sister, “Will you go to school?”</Text>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Indirect:</Text> Premul asked his sister if she would go to school.</Text>
                            </View>
                            <View>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Direct:</Text> Mohammad said to Imran, “Do you like to read poetry?</Text>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Indirect:</Text> Mohammad asked Imran if he(M) liked to read poetry.</Text>
                            </View>
                            <View>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Direct:</Text> He said to me, “Are you reading my book?”</Text>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Indirect:</Text> He asked me if I was reading his book.</Text>
                            </View>
                            <View>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Direct:</Text> Najma said to him, “Have you taken my pen.”</Text>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Indirect:</Text> Najma asked him if he had taken her pen.</Text>
                            </View>
                            <View>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Direct:</Text> Runa said to Sumi, “Will you meet me tomorrow?”</Text>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Indirect:</Text> Runa asked Sumi if she(S) would meet her(R) the next day.</Text>
                            </View>
                        </View>

                        {/*  */}
                        <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, textAlign: 'center', color: '#a72a24' }]}>Imperative Sentence</Text>
                        <View style={{ backgroundColor: '#d8efef', padding: 10, marginVertical: 20 }}>
                            <Text style={styles.text}>গঠন 01: Subject + ordered(আদেশ)/ advised(উপদেশ)/ forbade(নিষেধ)/ requested (অনুরোধ)+ Object+ to/not to+ Verb(RS)+ বাকী অংশ। [Main Verb দ্বারা শুরু হলে।]</Text>
                        </View>

                        <View style={{ display: 'flex', gap: 15 }}>
                            <View>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Direct:</Text> The teacher said to the student, “Get out of the classroom.”</Text>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Indirect:</Text> The teacher ordered the student to get out of the classroom.</Text>
                            </View>
                            <View>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Direct:</Text> He said to me, “Please give me a glass of water.”</Text>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Indirect:</Text> He requested me to give him a glass of water.</Text>
                            </View>
                            <View>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Direct:</Text> Mother said to me, “Always speak the truth.”</Text>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Indirect:</Text> Mother advised me to speak the truth always.</Text>
                            </View>
                            <View>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Direct:</Text> The teacher said to the student, “Don’t miss the class.”</Text>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Indirect:</Text> The teacher forbade the student not to miss the class.</Text>
                            </View>
                        </View>

                        <View style={{ backgroundColor: '#d8efef', padding: 10, marginVertical: 15 }}>
                            <Text style={styles.text}>গঠন 02: Subject+ proposed/suggested + Object + that+ Subject(RS) + should + Verb(RS)+ বাকি অংশ। [Let দ্বারা শুরু হলে।]</Text>
                        </View>

                        <View style={{ display: 'flex', gap: 15 }}>
                            <View>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Direct:</Text> He said to me, “Let us go out for a walk.”</Text>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Indirect:</Text> He proposed to me that we should go out for a walk.</Text>
                            </View>
                            <View>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Direct:</Text> He said to me, “Let them play football.”</Text>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Indirect:</Text> He proposed to me that they should play football.</Text>
                            </View>
                        </View>

                        {/*  */}
                        <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, textAlign: 'center', color: '#a72a24' }]}>Optative Sentence</Text>
                        <View style={{ backgroundColor: '#d8efef', padding: 10, marginVertical: 15 }}>
                            <Text style={styles.text}>গঠন: Subject + wished/prayed + that + Subject(RS) + may/might + Verb (RS) + বাকি অংশ।</Text>
                        </View>

                        <View style={{ display: 'flex', gap: 15 }}>
                            <View>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Direct:</Text> Father said to me, “May you pass the examination.”</Text>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Indirect:</Text> Father prayed that I might pass the examination.</Text>
                            </View>
                            <View>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Direct:</Text> The teacher said to the students, “May Allah bless you.”</Text>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Indirect:</Text> The teacher wished that Allah might bless the students.</Text>
                            </View>
                        </View>

                        {/*  */}
                        <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, textAlign: 'center', color: '#a72a24' }]}>Exclamatory Sentence</Text>
                        <View style={{ backgroundColor: '#d8efef', padding: 10, marginVertical: 20 }}>
                            <Text style={styles.text}>গঠন: Subject + exclaimed with joy/exclaimed with sorrow + that + Subject(RS) + Verb(RS) + very/great( যদি How বা What দ্বারা শুরু হয়) + বাকী অংশ।</Text>
                        </View>

                        <View style={{ display: 'flex', gap: 15 }}>
                            <View>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Direct:</Text> The students said, “Hurrah! Our team has won the game.”</Text>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Indirect:</Text> The students exclaimed with joy that their team had won the game.</Text>
                            </View>
                            <View>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Direct:</Text> The man said, “Alas! I am undone.”</Text>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Indirect:</Text> The man exclaimed with sorrow that he was undone.</Text>
                            </View>
                            <View>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Direct:</Text> Silvia said, “What a fine bird it is.”</Text>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Indirect:</Text> Silvia exclaimed with joy that it was a very fine bird.</Text>
                            </View>
                        </View>

                        <Divider marginTop={20} marginBottom={20} />

                        {/* Rule 6 */}
                        <Text style={[styles.heading_lg, { marginTop: 20, marginBottom: 5 }]}>Rule 6: Passage Narration এর নিয়মঃ</Text>
                        <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5 }]}>1. “Thank” যুক্ত বাক্যের পরিবর্তনঃ</Text>

                        <View style={{ backgroundColor: '#d8efef', padding: 10, marginVertical: 20 }}>
                            <Text style={styles.text}>গঠন: Subject+ thanked+ Object.</Text>
                        </View>

                        <View style={{ display: 'flex', gap: 15 }}>
                            <View>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Direct:</Text> Rahim said to Imran, “Thank you.”</Text>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Indirect:</Text> Rahim thanked Imran.</Text>
                            </View>
                        </View>

                        {/*  */}
                        <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5 }]}>2. Good-bye এর পরিবর্তনঃ</Text>

                        <View style={{ backgroundColor: '#d8efef', padding: 10, marginVertical: 20 }}>
                            <Text style={styles.text}>গঠন: Subject+ bade+ Object+ good-bye.</Text>
                        </View>

                        <View style={{ display: 'flex', gap: 15 }}>
                            <View>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Direct:</Text> He said to me, “Good-bye.”</Text>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Indirect:</Text> He bade me good-bye.</Text>
                            </View>
                        </View>

                        {/*  */}
                        <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5 }]}>3. Good morning/evening/night এর পরিবর্তনঃ</Text>

                        <View style={{ backgroundColor: '#d8efef', padding: 10, marginVertical: 20 }}>
                            <Text style={styles.text}>গঠন: Subject+ wished+ Object+ good morning/evening/night ইত্যাদি।</Text>
                        </View>

                        <View style={{ display: 'flex', gap: 15 }}>
                            <View>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Direct:</Text> He said to me, “Good morning.”</Text>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Indirect:</Text> He wished me good morning.</Text>
                            </View>
                        </View>

                        {/*  */}
                        <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5 }]}>4. সম্বোধন সূচক শব্দ থাকলেঃ</Text>

                        <View style={{ backgroundColor: '#d8efef', padding: 10, marginVertical: 20 }}>
                            <Text style={styles.text}>গঠন: Addressing me/him/her/them as+ সম্বোধন সূচক শব্দ+ Sentence অনুয়াযী গঠন।</Text>
                        </View>

                        <View style={{ display: 'flex', gap: 15 }}>
                            <View>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Direct:</Text> Rahim said, “Friends, I have read a book.”</Text>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Indirect:</Text> Addressing them as friends, Rahim said that he had read a book.</Text>
                            </View>
                        </View>

                        {/*  */}
                        <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5 }]}>5. একাধিক বাক্য একসাথে হলেঃ</Text>

                        <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24' }]}>Assertive Sentence:</Text>
                        <View style={{ display: 'flex', gap: 5, marginTop: 10 }}>
                            <Text style={styles.text}>1. প্রথম বাক্যে – said/told</Text>
                            <Text style={styles.text}>2. দ্বিতীয় বাক্যে –  added that/also said that</Text>
                            <Text style={styles.text}>2. তৃতীয় বাক্যে – further added that</Text>
                        </View>

                        <View style={{ display: 'flex', gap: 15 }}>
                            <View>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Direct:</Text> Jamal said to Raihan, “You are very honest. I will trust you forever.”</Text>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Indirect:</Text> Jamal said to Raihan that he(R) was very honest and added that he(K) would trust him(R) forever.</Text>
                            </View>
                        </View>


                        <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24' }]}>Interrogative Sentence:</Text>
                        <View style={{ display: 'flex', gap: 5, marginTop: 10 }}>
                            <Text style={styles.text}>1. প্রথম বাক্যে – asked</Text>
                            <Text style={styles.text}>2. দ্বিতীয় বাক্যে – also asked</Text>
                            <Text style={styles.text}>2. পুনরায় প্রশ্ন করলে – again asked</Text>
                        </View>

                        <View style={{ display: 'flex', gap: 15 }}>
                            <View>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Direct:</Text> The teacher said to me, “What is your problem? Are you trying to solve the math?</Text>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Indirect:</Text> The teacher asked me what my problem was. He(T) also asked if I was trying to solve the math.</Text>
                            </View>
                        </View>

                        {/*  */}
                        <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5 }]}>6. By Allah/ By Good এর পরিবর্তনঃ</Text>

                        <View style={{ display: 'flex', gap: 5, marginTop: 10 }}>
                            <Text style={styles.text}>By Allah/ By God এর পরিবর্তে Swearing by Allah বসে</Text>
                            <Text style={styles.text}>পরের অংশ Sentence অনুযায়ী হয়।</Text>
                        </View>

                        <View style={{ display: 'flex', gap: 15 }}>
                            <View>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Direct:</Text> By Allah, he said to me, “He will do the work.”</Text>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Indirect:</Text> Swearing by Allah, he told me that he would do the work.</Text>
                            </View>
                        </View>

                        {/*  */}
                        <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5 }]}>5. একাধিক বাক্য একসাথে হলেঃ</Text>

                        <View style={{ display: 'flex', gap: 15 }}>
                            <View>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Direct:</Text> He said to me, “Honesty is the best policy.”</Text>
                                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Indirect:</Text> He told me that honesty is the best policy.</Text>
                            </View>
                        </View>

                        <View style={{ backgroundColor: '#d8efef', padding: 10, marginTop: 20 }}>
                            <Text style={styles.text}>Note: কথার প্রেক্ষাপটে মাঝে মধ্যে then এবং প্রশ্নের উত্তরে said that এর জায়গায় replied that ব্যবহার করতে হবে।</Text>
                        </View>
                    </View>
                </ScrollView>
                    : <PreLoader />
            }
        </React.Fragment>
    )
}



export default person