import React from 'react'
import { View, Image, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { Stack } from 'expo-router'
import { Link } from "expo-router";
import { COLORS, FONT } from "@/constants";
import { useColorSchemeContext } from "@/context/ColorSchemeContext";

import rearrangeSentences from '@/data/rearrange-sentences.json';

const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "Fill In The Blank",
        link: "fill_in_the_blank",
        image: "https://image.winudf.com/v2/image/YXN1Lm1jcV9pY29uXzBfYzVkMzhmYzE/icon.png?w=&fakeurl=1"
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f61",
        title: "Rearrange",
        link: "rearrange",
        image: "https://cdn-icons-png.flaticon.com/512/1127/1127749.png"
    }
];

const index = () => {
    const { colorScheme } = useColorSchemeContext();

    return (
        <React.Fragment>
            <Stack.Screen
                options={{
                    headerTitle: () => <Text style={{ fontSize: 18, color: 'white', fontFamily: FONT.medium, }}>Exercise</Text>,
                    headerStyle: { backgroundColor: '#5495fb' }
                }}
            />
            <View style={[styles.sectionContainer, { backgroundColor: colorScheme === 'light' ? '#f2f2f2' : COLORS.darkPrimary }]}>
                <FlatList
                    data={rearrangeSentences}
                    renderItem={({ item }) => (
                        //@ts-ignore
                        <Link href={`/exercise/${item.link}`} style={[styles.itemContainer, { backgroundColor: colorScheme === 'light' ? '#fff' : COLORS.darkSecondary }]} asChild>
                            <TouchableOpacity activeOpacity={0.7}>
                                <View style={styles.item}>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                        <View style={styles.item_icon_wraper}>
                                            <Image style={styles.item_icon} source={{ uri: item.image }} />
                                        </View>
                                        <View>
                                            <Text style={[styles.title, { color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText }]}>{item.title}</Text>
                                        </View>
                                    </View>
                                    {/* <FontAwesome name="arrow-circle-right" size={24} color={COLORS.primary} /> */}
                                </View>
                            </TouchableOpacity>
                        </Link>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        padding: 5
    },
    sectionTitle: {
        fontSize: 18,
        marginTop: 5,
        marginBottom: 10,
        fontFamily: FONT.bold,
    },
    itemContainer: {
        flexDirection: "row",
        margin: 5,
        borderRadius: 5,
        padding: 10,
    },
    item: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 5,
        gap: 10,
    },
    item_icon_wraper: {
        width: 50,
        height: 50,
        backgroundColor: '#e5f5ff',
        padding: 8,
        borderRadius: 10,
    },
    item_icon: {
        width: 30,
        height: 30,
    },
    title: {
        fontSize: 15,
        fontFamily: FONT.medium
    },
});

export default index