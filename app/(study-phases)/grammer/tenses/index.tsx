import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { Stack } from 'expo-router'
import { Link } from "expo-router";
import { COLORS, FONT, icons, images, SIZES } from "@/constants";
import { FontAwesome } from '@expo/vector-icons';


const DATA = [
    {
        id: 1,
        title: "Present Tense",
        link: "present-tense",
    },
    {
        id: 2,
        title: "Past Tense",
        link: "past-tense",
    },
    {
        id: 3,
        title: "Future Tense",
        link: "future-tense",
    }
];

const index = () => {
    return (
        <React.Fragment>
            <Stack.Screen
                options={{
                    headerTitle: () => <Text style={{ fontSize: 18, color: 'white', fontFamily: FONT.medium, }}>Tenses</Text>,
                    headerStyle: { backgroundColor: '#5495fb' }
                }}
            />
            <View style={[styles.container, { backgroundColor: '#f2f2f2', flex: 1 }]}>
                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>Tense বা কাল কাকে বলে?</Text>
                <Text style={styles.text}>ক্রিয়ার কাল কে Tense বলা হয়৷ অর্থাৎ কোন কাজ সম্পাদনের সময়কে Tense বা কাল বলে। Tense দ্বারা সময়কে উল্লেখ করা হয় এবং যা বর্তমান, অতীত কিংবা ভবিষ্যত হতে পারে।</Text>

                <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24' }]}>উদাহরণঃ</Text>

                <View style={{ display: 'flex', gap: 5 }}>
                    <Text style={styles.text}>• I eat rice. (Present) আমি ভাত খাই ৷ (বর্তমান)</Text>
                    <Text style={styles.text}>• I ate rice. (Past) আমি ভাত খেয়েছিলাম৷ (অতীত)</Text>
                    <Text style={styles.text}>• I will eat rice. (Future) আমি ভাত খাবো৷ (ভবিষ্যত)</Text>
                </View>

                <View style={{ backgroundColor: '#d8efef', padding: 10, marginTop: 20, marginBottom: 30, borderRadius: 5 }}>
                    <Text style={styles.text}>Note: এখানে উপরের বাক্য গুলোতে যথাক্রমে বর্তমান, অতীত ও ভবিষ্যৎ কাজের কথা নির্দেশ করে।</Text>
                </View>

                <Text style={[styles.heading_lg, { marginBottom: 10 }]}>Types of Tense: (Tense এর প্রকার)</Text>

                <FlatList
                    data={DATA}
                    renderItem={({ item }) => (
                        //@ts-ignore
                        <Link href={`/grammer/tenses/${item.link}`} style={styles.itemContainer} asChild>
                            <TouchableOpacity activeOpacity={0.7} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 15, paddingRight: 10 }}>
                                <View style={styles.item}>
                                    <Text style={styles.item_icon}>{item.title.charAt(0)}</Text>
                                    <Text style={styles.title}>{item.title}</Text>
                                </View>
                                <FontAwesome name="arrow-circle-right" size={24} color={COLORS.primary} />
                            </TouchableOpacity>
                        </Link>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={{ paddingBottom: 20 }}
                />
            </View>
        </React.Fragment >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    itemContainer: {
        flexDirection: "row",
        backgroundColor: "#fff",
        marginVertical: 5,
        borderRadius: 5,
        padding: 5,
    },
    item: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        margin: 5,
        gap: 10,
    },
    item_icon: {
        width: 38,
        height: 37,
        backgroundColor: '#5495fb',
        borderRadius: 50,
        textAlign: 'center',
        paddingTop: 10,
        color: '#fff',
        fontFamily: FONT.medium,
    },
    title: {
        fontSize: 14,
        fontFamily: FONT.medium,
        color: "#1f1f1f",
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
});

export default index