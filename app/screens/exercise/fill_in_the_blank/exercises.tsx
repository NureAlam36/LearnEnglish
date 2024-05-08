import React, { useState, useEffect } from 'react'
import { View, Image, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
// import { Stack } from 'expo-router'
import { Link } from "expo-router";
import { COLORS, FONT } from "@/constants";
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { useColorSchemeContext } from "@/context/ColorSchemeContext";

import FillInTheBlank from '@/data/fill-in-the-blank.json';

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Excercise from './exercise';
import ContentHeader from '@/components/Headers/ContentHeader';

const HomeScreen = ({ route }: any) => {
    const topicLink = route.params.link;

    return (
        <Stack.Navigator
            screenOptions={{
                ...TransitionPresets.SlideFromRightIOS,
            }}
        >
            <Stack.Screen
                name="Exercises"
                component={Topics}
                initialParams={{ links: topicLink }}
                options={{
                    title: 'Exercises',
                    headerStyle: { backgroundColor: '#5495fb' },
                    headerTitleStyle: { color: '#fff', fontFamily: FONT.medium },
                    headerShown: false
                }}
            />
            <Stack.Screen name="ExercisePage" component={Excercise} options={{
                title: 'Fill In The Blank',
                headerStyle: { backgroundColor: '#5495fb' },
                headerTitleStyle: { color: '#fff', fontFamily: FONT.medium },
                headerShown: false
            }} />
        </Stack.Navigator>
    );
};

const Topics = ({ route, navigation }: any) => {
    // const route = useRoute();
    const { colorScheme } = useColorSchemeContext();
    const [lesion, setLesion] = useState<any>('');
    const [exercises, setExercises] = useState<any>([]);
    const [topicLink, setTopicLink] = useState<any>('');

    useEffect(() => {
        setTopicLink(route.params.links);
    }, []);

    useEffect(() => {
        FillInTheBlank.forEach((item) => {
            if (item.link === route.params.links) {
                setLesion(item.category);

                item.lesions.forEach((exercise) => {
                    setExercises((exercises: any) => [...exercises, {
                        id: exercise.id,
                        name: exercise.name,
                        length: exercise.exercises.length,
                    }]);
                })
            }

        })
    }, []);

    return (
        <React.Fragment>
            <ContentHeader title={lesion} />

            <View style={[styles.sectionContainer, { backgroundColor: colorScheme === 'light' ? '#f2f2f2' : COLORS.darkPrimary }]}>
                {/* <View>
                    <Text style={[styles.sectionTitle, { color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText }]}>Categories</Text>
                </View> */}
                <FlatList
                    data={exercises}
                    renderItem={({ item, index }) => (
                        //@ts-ignore
                        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('ExercisePage', { categoryLink: route.params.links, lesionId: item.id })} style={[styles.itemContainer, { backgroundColor: colorScheme === 'light' ? '#f7f9fc' : COLORS.darkSecondary }]}>
                            <View style={styles.item}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                    <View style={styles.item_icon_wraper}>
                                        <Image style={styles.item_icon} source={{ uri: "https://i.pinimg.com/originals/ff/fb/48/fffb481f28a395fb8ad93e7ecd8f2ec7.png" }} />
                                    </View>
                                    <View>
                                        <Text style={[styles.title, { color: colorScheme === 'light' ? COLORS.gray : COLORS.lightText }]}>Exercise {index + 1}</Text>
                                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                            <Ionicons name="reader-outline" size={18} color={COLORS.gray2} />
                                            <Text style={{ color: COLORS.gray2, textAlign: 'center', fontSize: 14, fontFamily: FONT.medium }}>{exercises.length} Exercise</Text>
                                        </View>

                                    </View>
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                                    <View>
                                        <Text style={{ borderWidth: 1, borderColor: COLORS.primary, color: COLORS.gray, paddingVertical: 5, paddingHorizontal: 10, borderRadius: 5 }}>Start</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={{ gap: 10 }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </React.Fragment>
    )
}


const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        padding: 10,
    },
    sectionTitle: {
        fontSize: 18,
        marginTop: 5,
        marginBottom: 10,
        fontFamily: FONT.bold,
    },
    itemContainer: {
        borderRadius: 10,
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

    },
    item_icon: {
        width: 35,
        height: 35,
    },
    title: {
        fontSize: 16,
        fontFamily: FONT.medium,
        marginBottom: 3
    },
});

export default HomeScreen