import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import { COLORS, FONT } from "@/constants";

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

// Create a stack navigator
const Stack = createStackNavigator();

import Exercise from './exercise'
import ContentHeader from '@/components/Headers/ContentHeader';

import RearrangeSentences from '@/data/rearrange-sentences.json';
import { Ionicons } from '@expo/vector-icons';

const Index = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                ...TransitionPresets.SlideFromRightIOS,
                headerShown: false
            }}>

            <Stack.Screen name="rearrangeCategory_screen" component={Categories} options={{ header: () => <ContentHeader title="Rearrange" />, headerShown: true }} />
            <Stack.Screen name="rearrange_screen" component={Exercise} />
        </Stack.Navigator>
    );
}

const Categories = ({ route, navigation }: any) => {
    // const route = useRoute();
    const { colorScheme } = useColorSchemeContext();
    const [lesion, setLesion] = useState<any>('');
    const [exercises, setExercises] = useState<any>([]);
    const [topicLink, setTopicLink] = useState<any>('');

    useEffect(() => {
        RearrangeSentences.forEach((exercise) => {
            setExercises((exercises: any) => [...exercises, {
                id: exercise.id,
                category: exercise.category,
                length: exercise.exercises.length,
            }]);
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
                        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('rearrange_screen', { categoryId: item.id })} style={[styles.itemContainer, { backgroundColor: colorScheme === 'light' ? '#f7f9fc' : COLORS.darkSecondary }]}>
                            <View style={styles.item}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                    <View style={styles.item_icon_wraper}>
                                        <Image style={styles.item_icon} source={{ uri: "https://www.kindpng.com/picc/m/650-6503253_transparent-manual-icon-hd-png-download.png" }} />
                                    </View>
                                    <View>
                                        <Text style={[styles.title, { color: colorScheme === 'light' ? COLORS.gray : COLORS.lightText }]}>Exercise {index + 1}</Text>
                                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                            <Ionicons name="reader-outline" size={18} color={COLORS.gray2} />
                                            <Text style={{ color: COLORS.gray2, textAlign: 'center', fontSize: 14, fontFamily: FONT.medium }}>{item.length} Exercise</Text>
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


export default Index