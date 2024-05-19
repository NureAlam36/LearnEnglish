import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { COLORS, FONT } from "@/constants";

import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import famousQuotations from '@/data/famous-quotations.json'

import ContentHeader from "@/components/Headers/ContentHeader";
import { Feather } from "@expo/vector-icons";

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import Content from './content'

// Create a stack navigator
const Stack = createStackNavigator();

const Index = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                ...TransitionPresets.SlideFromRightIOS,
                headerShown: false
            }}>

            <Stack.Screen name="bcs_solution_categories" component={Categories} options={{ header: () => <ContentHeader title="Daily Use Sentences" />, headerShown: true }} />
            <Stack.Screen name="bcs_solution_content_screen" component={Content} />
        </Stack.Navigator>
    );
}

const Categories = ({ navigation }: any) => {
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

            <View style={{ flex: 1, backgroundColor: colorScheme === 'light' ? '#f2f2f2' : COLORS.darkPrimary, padding: 10 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        Array.from({ length: 36 }, (_, index) => (
                            <TouchableOpacity onPress={() => navigation.navigate('bcs_solution_content_screen', { id: index + 10 })} activeOpacity={0.7} key={index} style={[styles.itemContainer, { backgroundColor: colorScheme === 'light' ? '#fff' : COLORS.darkSecondary }]}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
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

                                            {/* <View style={{ display: 'flex', flexDirection: 'row', gap: 15, marginTop: 5, alignItems: 'center' }}>
                                                <View style={{ display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                                                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/8548/8548039.png' }} style={{ width: 15, height: 15 }} />
                                                    <Text style={[styles.title, { color: COLORS.gray2, marginTop: 3 }]}>English</Text>
                                                </View>
                                                <View style={{ display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                                                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/7828/7828023.png' }} style={{ width: 15, height: 15 }} />
                                                    <Text style={[styles.title, { color: COLORS.gray2, marginTop: 3 }]}>English</Text>
                                                </View>
                                            </View> */}
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            backgroundColor: "#e5f5ff",
                                            width: 30,
                                            height: 30,
                                            borderRadius: 50,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Feather name="chevron-right" size={20} color={COLORS.primary} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
            </View>
        </React.Fragment >
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
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

export default Index;
