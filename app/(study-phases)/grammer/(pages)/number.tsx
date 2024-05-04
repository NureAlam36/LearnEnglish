import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
// @ts-ignore
import { Table, Row } from 'react-native-table-component';
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

const NumberOfRules = ({ rule = '০' }) => {
    return (
        <Text style={{ color: '#01636a', fontWeight: 'bold' }}>নিয়ম {rule + 'ঃ'}</Text>
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
        },
        tableHead: { height: 40, backgroundColor: '#f1f8ff', fontFamily: FONT.bold },
        tableData: { height: 20, margin: 6, fontFamily: FONT.medium },
        evenRow: { backgroundColor: '#f2f2f2' }
    })


    return (
        <React.Fragment>
            <Stack.Screen
                options={{
                    headerTitle: () => <Text style={{ fontSize: 18, color: 'white', fontFamily: FONT.medium, }}>Number</Text>,
                    headerStyle: { backgroundColor: '#5495fb' }
                }}
            />
            <ScrollView style={[styles.container, { backgroundColor: colorScheme === 'light' ? '#fff' : COLORS.darkSecondary }]}>
                <View style={{ padding: 15 }}>
                    <Text style={[styles.heading_xl, { marginBottom: 10 }]}>Number কাকে বলে?</Text>
                    <Text style={styles.text}>Number অর্থ সংখ্যার ধারণা। যেকোনো ব্যক্তি, বস্তু বা প্রাণীর সংখ্যাকে Number বা বচন বলা হয়। অর্থাৎ ব্যক্তি বা বস্তুর সংখ্যাকে ইংরেজিতে বলা হয় Number.</Text >

                    <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24' }]}>উদাহরণ:</Text>
                    <Text style={styles.text}>Book: একটি সংখ্যা নির্দেশ করে (একটি বই)।</Text>
                    <Text style={styles.text}>Books: একের অধিক সংখ্যা নির্দেশ করে (অনেকগুলো বই)।</Text>

                    <Text style={[styles.text, { marginTop: 10 }]}>অর্থাৎ Number সব সময় একটি Sentence-এ থাকা কোনো না কোনো Person এর সংখ্যাকে নির্দেশ করে।</Text>

                    {/* <View style={{ backgroundColor: '#d8efef', padding: 10, marginTop: 20 }}>
                <Text style={styles.text}>Note: Person সব সময় কোনো প্রাণী বা বস্তুকে নির্দেশ করবে। আর Person-এর Parts of Speech হবে Noun অথবা Pronoun.</Text>
            </View> */}

                    <Divider marginTop={20} marginBottom={20} />

                    <Text style={[styles.heading_xl, { marginBottom: 10 }]}>Number কত প্রকার?</Text>
                    <Text style={styles.text}>Number দুই প্রকার। যথা:</Text>

                    <View style={{ display: 'flex', gap: 5, marginTop: 10 }}>
                        <Text style={styles.text}>1. Singular Number (একবচন)</Text>
                        <Text style={styles.text}>2. Second Person (মধ্যম পুরুষ)</Text>
                        <Text style={styles.text}>3. Plural Number (বহুবচন)</Text>
                    </View>

                    <Divider marginTop={20} marginBottom={20} />

                    <Text style={[styles.heading_xl, { marginBottom: 10 }]}>1. Singular Number কাকে বলে?</Text>
                    <Text style={styles.text}>যে Word/শব্দ দ্বারা কোনো ব্যক্তি, প্রাণী বা বস্তুর একটি মাত্র সংখ্যা প্রকাশ করে তখন তাকে Singular Number বলে। অর্থাৎ Singular Number দিয়ে শুধু একটি ব্যক্তি, বস্তু বা প্রাণীকে বুঝানো হয়।</Text>

                    <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>

                    <View style={{ display: 'flex', gap: 5 }}>
                        <Text style={styles.text}>- I (আমি)</Text>
                        <Text style={styles.text}>- Me (আমাকে)</Text>
                        <Text style={styles.text}>- He (সে)</Text>
                        <Text style={styles.text}>- She (সে)</Text>
                        <Text style={styles.text}>- It (এটা)</Text>
                        <Text style={styles.text}>- Boy (ছেলে)</Text>
                        <Text style={styles.text}>- Girl (মেয়ে)</Text>
                        <Text style={styles.text}>- Book (বই)</Text>
                        <Text style={styles.text}>- Pen (কলম) ইত্যাদি।</Text>
                    </View>

                    <Divider marginTop={20} marginBottom={20} />

                    <Text style={[styles.heading_xl, { marginBottom: 10 }]}>1. Plural Number কাকে বলে?</Text>
                    <Text style={styles.text}>যে Word/শব্দ দ্বারা কোনো ব্যক্তি, প্রাণী বা বস্তুর একাধীক সংখ্যা প্রকাশ করে তখন তাকে Plural Number বলে। অর্থাৎ Plural Number দিয়ে দুই বা ততোধিক ব্যক্তি, বস্তু বা প্রাণীকে বুঝিয়ে থাকে।</Text>

                    <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>

                    <View style={{ display: 'flex', gap: 5 }}>
                        <Text style={styles.text}>- We (আমরা)</Text>
                        <Text style={styles.text}>- Us (আমাদের)</Text>
                        <Text style={styles.text}>- They (তারা)</Text>
                        <Text style={styles.text}>- Them (তাদের)</Text>
                        <Text style={styles.text}>- Boys (ছেলেরা)</Text>
                        <Text style={styles.text}>- Girls (মেয়েরা)</Text>
                        <Text style={styles.text}>- Books (বইগুলো)</Text>
                        <Text style={styles.text}>- Pens (কলমগুলো) ইত্যাদি।</Text>
                    </View>

                    <Divider marginTop={20} marginBottom={20} />

                    <Text style={[styles.heading_lg, { marginBottom: 10 }]}>Singular number থেকে plural number এ পরিবর্তন করার নিয়মসমূহ:</Text>

                    {/* Rule 1 */}
                    <Text style={styles.text}><NumberOfRules rule={'১'} /> সাধারনত Singular number এর শব্দের শেষে “s” যুক্ত করে থেকে plural number এ পরিবর্তন করা যায়।</Text>

                    <Text style={[styles.text, { marginTop: 10, marginBottom: 10 }]}>যেমন:</Text>
                    <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                        <Row data={['Singular', 'plural']} style={styles.tableHead} textStyle={styles.tableData} />
                        <Row key={1} data={['Teacher', 'Teachers']} textStyle={styles.tableData} />
                        <Row key={2} data={['Apple', 'Apples']} style={styles.evenRow} textStyle={styles.tableData} />
                        <Row key={3} data={['Book', 'Books']} textStyle={styles.tableData} />
                        <Row key={4} data={['Boy', 'Boys']} style={styles.evenRow} textStyle={styles.tableData} />
                        <Row key={5} data={['Girl', 'Girls']} textStyle={styles.tableData} />
                        <Row key={6} data={['Table', 'Tables']} style={styles.evenRow} textStyle={styles.tableData} />
                        <Row key={7} data={['Pen', 'Pens']} textStyle={styles.tableData} />
                        <Row key={8} data={['Eye', 'Eyes']} style={styles.evenRow} textStyle={styles.tableData} />
                        <Row key={9} data={['Shirt', 'Shirts']} textStyle={styles.tableData} />
                        <Row key={10} data={['Doll', 'Dolls']} style={styles.evenRow} textStyle={styles.tableData} />
                    </Table>

                    {/* Rule 2 */}
                    <Text style={[styles.text, { marginTop: 30, marginBottom: 10 }]}><NumberOfRules rule={'২'} /> যে সকল Singular number এর শেষে s, ss, sh, ch, z বা x থাকে তাদেরকে Plural করার সময় তাদের শেষে es যুক্ত করতে হয়।</Text>

                    <Text style={[styles.text, { marginTop: 10, marginBottom: 10 }]}>যেমন:</Text>
                    <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                        <Row data={['Singular', 'plural']} style={styles.tableHead} textStyle={styles.tableData} />
                        <Row key={1} data={['Fox', 'Foxes']} textStyle={styles.tableData} />
                        <Row key={2} data={['Princess', 'Princesses']} style={styles.evenRow} textStyle={styles.tableData} />
                        <Row key={3} data={['Gas', 'Gases']} textStyle={styles.tableData} />
                        <Row key={4} data={['Box', 'Boxes']} style={styles.evenRow} textStyle={styles.tableData} />
                        <Row key={5} data={['Ass', 'Assess']} textStyle={styles.tableData} />
                        <Row key={6} data={['Bush', 'Bushes']} style={styles.evenRow} textStyle={styles.tableData} />
                        <Row key={7} data={['Dish', 'Dishes']} textStyle={styles.tableData} />
                        <Row key={8} data={['Bench', 'Benches']} style={styles.evenRow} textStyle={styles.tableData} />
                        <Row key={9} data={['Tax', 'Taxes']} textStyle={styles.tableData} />
                    </Table>

                    {/* Rule 3 */}
                    <Text style={[styles.text, { marginTop: 30, marginBottom: 10 }]}><NumberOfRules rule={'৩'} /> Noun এর পরে যদি Y হয় এবং এর আগে/পূর্বে যদি একটি Consonant থাকে তাহলে  Y এর স্থানে ‘ies’ যোগ করে Plural করতে হয়।</Text>

                    <Text style={[styles.text, { marginTop: 10, marginBottom: 10 }]}>যেমন:</Text>
                    <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                        <Row data={['Singular', 'plural']} style={styles.tableHead} textStyle={styles.tableData} />
                        <Row key={1} data={['Disconformity', 'Disconformities']} textStyle={styles.tableData} />
                        <Row key={2} data={['Fairy', 'Fairies']} style={styles.evenRow} textStyle={styles.tableData} />
                        <Row key={3} data={['Berry', 'Berries']} textStyle={styles.tableData} />
                        <Row key={4} data={['City', 'Cities']} style={styles.evenRow} textStyle={styles.tableData} />
                        <Row key={5} data={['Spy', 'Spies']} textStyle={styles.tableData} />
                        <Row key={6} data={['Party', 'Parties']} style={styles.evenRow} textStyle={styles.tableData} />
                        <Row key={7} data={['Family', 'Families']} textStyle={styles.tableData} />
                        <Row key={8} data={['Daisy', 'Daisies']} style={styles.evenRow} textStyle={styles.tableData} />
                        <Row key={9} data={['Penny', 'Pennies']} textStyle={styles.tableData} />
                    </Table>

                    {/* Rule 4 */}
                    <Text style={[styles.text, { marginTop: 30, marginBottom: 10 }]}><NumberOfRules rule={'৪'} /> কিন্তু Noun এর পরে যদি Y হয় এবং এর আগে/পূর্বে যদি একটি Vowel থাকে তাহলে  Y উঠবে না এবং Y এর সাথে শুধু ‘s’ যোগ করে Plural করতে হবে।</Text>

                    <Text style={[styles.text, { marginTop: 10, marginBottom: 10 }]}>যেমন:</Text>
                    <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                        <Row data={['Singular', 'plural']} style={styles.tableHead} textStyle={styles.tableData} />
                        <Row key={1} data={['Straightaway', 'Straightaways']} textStyle={styles.tableData} />
                        <Row key={2} data={['Schoolboy', 'Schoolboys']} style={styles.evenRow} textStyle={styles.tableData} />
                        <Row key={3} data={['Birthday', 'Birthdays']} textStyle={styles.tableData} />
                        <Row key={4} data={['Monkey', 'Monkeys']} style={styles.evenRow} textStyle={styles.tableData} />
                        <Row key={5} data={['Play', 'Plays']} textStyle={styles.tableData} />
                        <Row key={6} data={['Boy', 'Boys']} style={styles.evenRow} textStyle={styles.tableData} />
                        <Row key={7} data={['Day', 'Days']} textStyle={styles.tableData} />
                        <Row key={8} data={['Joy', 'Joys']} style={styles.evenRow} textStyle={styles.tableData} />
                        <Row key={9} data={['Lay', 'Lays']} textStyle={styles.tableData} />
                    </Table>

                    {/* Rule 5 */}
                    <Text style={[styles.text, { marginTop: 30, marginBottom: 10 }]}><NumberOfRules rule={'৫'} /> NOUN এর পরে যদি ‘F’ বা ‘FE’ থাকে তাহলে PLURAL করার সময় ‘F’ বা’FE’ এর জায়গায় ‘VES’ হবে।</Text>

                    <Text style={[styles.text, { marginTop: 10, marginBottom: 10 }]}>যেমন:</Text>
                    <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                        <Row data={['Singular', 'Plural']} style={styles.tableHead} textStyle={styles.tableData} />
                        <Row key={1} data={['Knife', 'Knives']} textStyle={styles.tableData} />
                        <Row key={2} data={['Leaf', 'Leaves']} style={styles.evenRow} textStyle={styles.tableData} />
                        <Row key={3} data={['Leaf', 'Loaves']} textStyle={styles.tableData} />
                        <Row key={4} data={['Life', 'Lives']} style={styles.evenRow} textStyle={styles.tableData} />
                        <Row key={5} data={['Wife', 'Wives']} textStyle={styles.tableData} />
                        <Row key={6} data={['Yourself', 'Yourselves']} style={styles.evenRow} textStyle={styles.tableData} />
                        <Row key={7} data={['Wolf', 'Wolves']} textStyle={styles.tableData} />
                        <Row key={8} data={['Shelf', 'Shelves']} style={styles.evenRow} textStyle={styles.tableData} />
                        <Row key={9} data={['Thief', 'Thieves']} textStyle={styles.tableData} />
                    </Table>

                    {/* Rule 6 */}
                    <Text style={[styles.text, { marginTop: 30, marginBottom: 10 }]}><NumberOfRules rule={'৬'} /> কিন্তু যদি Noun এর শেষে ief, iff, oof, ulf, eef ইত্যাদি থাকে তবে তখন শুধু s লাগিয়ে Plural করবো।</Text>

                    <Text style={[styles.text, { marginTop: 10, marginBottom: 10 }]}>যেমন:</Text>
                    <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                        <Row data={['Singular', 'Plural']} style={styles.tableHead} textStyle={styles.tableData} />
                        <Row key={1} data={['Cliff', 'Cliffs']} textStyle={styles.tableData} />
                        <Row key={2} data={['Roof', 'Roofs']} style={styles.evenRow} textStyle={styles.tableData} />
                        <Row key={3} data={['Reef', 'Reefs']} textStyle={styles.tableData} />
                        <Row key={4} data={['Hoof', 'Hoofs']} style={styles.evenRow} textStyle={styles.tableData} />
                        <Row key={5} data={['Proof', 'Proofs']} textStyle={styles.tableData} />
                        <Row key={6} data={['Gulf', 'Gulfs']} style={styles.evenRow} textStyle={styles.tableData} />
                        <Row key={7} data={['Kief', 'Kiefs']} textStyle={styles.tableData} />
                        <Row key={8} data={['Chief', 'Chiefs']} style={styles.evenRow} textStyle={styles.tableData} />
                        <Row key={9} data={['Grief', 'Griefs']} textStyle={styles.tableData} />
                    </Table>

                    {/* Rule 7 */}
                    <Text style={[styles.text, { marginTop: 30, marginBottom: 10 }]}><NumberOfRules rule={'৭'} /> NOUN এর শেষে ‘O’ থাকলে এবং ‘O’ এর পূর্বে একটি CONSONANT থাকলে তখন শব্দের শেষে ES যোগ করে PLURAL করতে হয়।</Text>

                    <Text style={[styles.text, { marginTop: 10, marginBottom: 10 }]}>যেমন:</Text>
                    <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                        <Row data={['Singular', 'Plural']} style={styles.tableHead} textStyle={styles.tableData} />
                        <Row key={1} data={['Bravo', 'Bravoes']} textStyle={styles.tableData} />
                        <Row key={2} data={['Hero', 'Heroes']} style={styles.evenRow} textStyle={styles.tableData} />
                        <Row key={3} data={['Echo', 'Echoes']} textStyle={styles.tableData} />
                        <Row key={4} data={['Negro', 'Negroes']} style={styles.evenRow} textStyle={styles.tableData} />
                        <Row key={5} data={['Potato', 'Potatoes']} textStyle={styles.tableData} />
                        <Row key={6} data={['Mango', 'Mangoes']} style={styles.evenRow} textStyle={styles.tableData} />
                        <Row key={7} data={['Domino', 'Dominoes']} textStyle={styles.tableData} />
                        <Row key={8} data={['Beefalo', 'Beefaloes']} style={styles.evenRow} textStyle={styles.tableData} />
                        <Row key={9} data={['Volcano', 'Volcanoes']} textStyle={styles.tableData} />
                    </Table>

                    {/* Rule 8 */}
                    <Text style={[styles.text, { marginTop: 30, marginBottom: 10 }]}><NumberOfRules rule={'৮'} /> কিন্তু ‘O’ এর পূর্বে যদি Vowel থাকে তাহলে শুধু S যোগ করে Plural করতে হয়।</Text>

                    <Text style={[styles.text, { marginTop: 10, marginBottom: 10 }]}>যেমন:</Text>
                    <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                        <Row data={['Singular', 'Plural']} style={styles.tableHead} textStyle={styles.tableData} />
                        <Row key={1} data={['Bamboo', 'Bamboos']} textStyle={styles.tableData} />
                        <Row key={2} data={['Radio', 'Radios']} style={styles.evenRow} textStyle={styles.tableData} />
                        <Row key={3} data={['Cuckoo', 'Cuckoos']} textStyle={styles.tableData} />
                        <Row key={4} data={['Tattoo', 'Tattoos']} style={styles.evenRow} textStyle={styles.tableData} />
                        <Row key={5} data={['Kazoo', 'Kazoos']} textStyle={styles.tableData} />
                        <Row key={6} data={['Yahoo', 'Yahoos']} style={styles.evenRow} textStyle={styles.tableData} />
                        <Row key={7} data={['Hoodoo', 'Hoodoos']} textStyle={styles.tableData} />
                        <Row key={8} data={['Shampoo', 'Shampoos']} style={styles.evenRow} textStyle={styles.tableData} />
                        <Row key={9} data={['Waterloo', 'Waterloos']} textStyle={styles.tableData} />
                    </Table>

                    {/* Rule 9 */}
                    <Text style={[styles.text, { marginTop: 30, marginBottom: 10 }]}><NumberOfRules rule={'৯'} /> Noun এর শেষে ‘ful’ থাকলে তখন শব্দের শেষে শুধু ‘s’ যোগ করে Plural করা হয়।</Text>

                    <Text style={[styles.text, { marginTop: 10, marginBottom: 10 }]}>যেমন:</Text>
                    <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                        <Row data={['Singular', 'Plural']} style={styles.tableHead} textStyle={styles.tableData} />
                        <Row key={1} data={['Houseful', 'Housefuls']} textStyle={styles.tableData} />
                        <Row key={2} data={['Bellyful', 'Bellyfuls']} style={styles.evenRow} textStyle={styles.tableData} />
                        <Row key={3} data={['Armful', 'Armfuls']} textStyle={styles.tableData} />
                        <Row key={4} data={['Cupful', 'Cupfuls']} style={styles.evenRow} textStyle={styles.tableData} />
                        <Row key={5} data={['Spoonful', 'Spoonfuls']} textStyle={styles.tableData} />
                        <Row key={6} data={['Mouthful', 'Mouthfuls']} style={styles.evenRow} textStyle={styles.tableData} />
                    </Table>

                    {/* Rule 10 */}
                    <Text style={[styles.text, { marginTop: 30, marginBottom: 10 }]}><NumberOfRules rule={'১০'} /> কিছু Noun এর মধ্যে Vowel পরিবর্তন করে Plural করতে হয়।</Text>

                    <Text style={[styles.text, { marginTop: 10, marginBottom: 10 }]}>যেমন:</Text>
                    <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                        <Row data={['Singular', 'Plural']} style={styles.tableHead} textStyle={styles.tableData} />
                        <Row key={1} data={['Woman', 'Women']} textStyle={styles.tableData} />
                        <Row key={2} data={['Man', 'Men']} style={styles.evenRow} textStyle={styles.tableData} />
                        <Row key={3} data={['Foot', 'Feet']} textStyle={styles.tableData} />
                        <Row key={4} data={['Tooth', 'Teeth']} style={styles.evenRow} textStyle={styles.tableData} />
                        <Row key={5} data={['Mouse', 'Mice']} textStyle={styles.tableData} />
                        <Row key={6} data={['Louse', 'Lice']} style={styles.evenRow} textStyle={styles.tableData} />
                    </Table>

                    {/* Rule 11 */}
                    <Text style={[styles.text, { marginTop: 30, marginBottom: 10 }]}><NumberOfRules rule={'১১'} /> কিছু Compound Noun এর শেষে শুধু ‘s’ যোগ করে Plural করতে হয়।</Text>

                    <Text style={[styles.text, { marginTop: 10, marginBottom: 10 }]}>যেমন:</Text>
                    <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                        <Row data={['Singular', 'Plural']} style={styles.tableHead} textStyle={styles.tableData} />
                        <Row key={1} data={['Book-case', 'Book-cases']} textStyle={styles.tableData} />
                        <Row key={2} data={['Major-general', 'Major-generals']} style={styles.evenRow} textStyle={styles.tableData} />
                        <Row key={3} data={['Poet-laureate', 'Poet-laureates']} textStyle={styles.tableData} />
                        <Row key={4} data={['Forget-me-not', 'Forget-me-nots']} style={styles.evenRow} textStyle={styles.tableData} />
                    </Table>

                    {/* Rule 12 */}
                    <Text style={[styles.text, { marginTop: 30, marginBottom: 10 }]}><NumberOfRules rule={'১২'} /> কিছু Compound Noun এর প্রধান শব্দটির শেষে ’s’ যোগ করে Plural করত হয় এবং  Noun দুটি যদি প্রধান হয় তাহলে প্রথম শব্দটির মধ্যে Vowel পরিবর্তন করতে হবে আর দ্বীতৃয় শব্দটির শেষে ‘s’ যোগ করে Plural করতে হয়।</Text>

                    <Text style={[styles.text, { marginTop: 10, marginBottom: 10 }]}>যেমন:</Text>
                    <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                        <Row data={['Singular', 'Plural']} style={styles.tableHead} textStyle={styles.tableData} />
                        <Row key={1} data={['Sister-in-law', 'Sisters-in-law']} textStyle={styles.tableData} />
                        <Row key={2} data={['Passer-by', 'Passers-by']} style={styles.evenRow} textStyle={styles.tableData} />
                        <Row key={3} data={['Step-sister', 'Step-sisters']} textStyle={styles.tableData} />
                        <Row key={4} data={['Woman-servant', 'Women-servants']} style={styles.evenRow} textStyle={styles.tableData} />
                        <Row key={5} data={['Man-servant', 'Man-servants']} textStyle={styles.tableData} />
                    </Table>
                </View>
            </ScrollView>
        </React.Fragment>
    )
}



export default person