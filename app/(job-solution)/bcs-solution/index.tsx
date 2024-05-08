import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { Link } from "expo-router";
import { COLORS, FONT } from "@/constants";

import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import famousQuotations from '@/data/famous-quotations.json'

import ContentHeader from "@/components/Headers/ContentHeader";

const StudyPhases = () => {
    const { colorScheme } = useColorSchemeContext();
    const [categories, setCategories] = useState<any>([]);

    useEffect(() => {
        famousQuotations.forEach((quotations) => {
            const category = {
                name: quotations.category,
                link: quotations.link,
                image: quotations.image || 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
            }

            setCategories((categories: any) => [...categories, category]);
        })
    }, [])

    return (
        <React.Fragment>
            <ContentHeader title="BCS 10th - 45th" />

            <View style={{ flex: 1, backgroundColor: colorScheme === 'light' ? '#f2f2f2' : COLORS.darkPrimary }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        Array.from({ length: 36 }, (_, index) => (
                            <Link href={`/bcs-solution/${index + 10}`} key={index} style={[styles.itemContainer, { backgroundColor: colorScheme === 'light' ? '#fff' : COLORS.darkSecondary }]} asChild>
                                <TouchableOpacity activeOpacity={0.7}>
                                    <View style={styles.item}>
                                        <View style={styles.imageWraper}>
                                            <Image
                                                style={styles.image}
                                                source={{ uri: "https://smartstore.beijerelectronics.com/-/media/inRiver/1/0/4/7/8/10478-1123.ashx?as=0&h=458&la=en&w=458&hash=8C51FFFFE43A1FEA225C1DB2F2DBC87D3F751AD0 " }}
                                                resizeMode="contain"
                                            />
                                        </View>
                                        <View>
                                            <Text style={[styles.title, { color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText }]}>{index + 10}th BCS Preliminary</Text>
                                            <Text style={[styles.title, { color: COLORS.gray2, marginTop: 3 }]}>English</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </Link>
                        ))
                    }
                </ScrollView>
            </View>
        </React.Fragment >
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        margin: 5,
        borderRadius: 5,
        padding: 5,
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        margin: 5,
        gap: 10,
    },
    imageWraper: {
        width: 50,
        height: 50,
        backgroundColor: '#e5f5ff',
        padding: 8,
        borderRadius: 10,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    title: {
        fontSize: 14,
        fontFamily: FONT.medium,
        color: "#1f1f1f",
    }
});

export default StudyPhases;
