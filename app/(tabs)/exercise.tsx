// HomeScreen.js
import React from 'react';
import { View, Image, Text, FlatList, StyleSheet, TouchableOpacity, Button } from 'react-native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';


// import rearrangeSentences from '@/data/rearrange-sentences.json';
import { useColorSchemeContext } from "@/context/ColorSchemeContext";

import { COLORS, FONT } from "@/constants";

import FillInTheBlankScreen from '@/app/screens/exercise/fill_in_the_blank';
import RearrangeScreen from '@/app/screens/exercise/rearrange';

// Define stack navigator for nested screens within HomeScreen
const Stack = createStackNavigator();

import ContentHeader from "@/components/Headers/ContentHeader";
import { Feather } from '@expo/vector-icons';

const HomeScreen = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                ...TransitionPresets.SlideFromRightIOS
            }}
        >
            <Stack.Screen name="Exercises" component={MainHomeScreen} />
            <Stack.Screen name="FillInTheBlank" component={FillInTheBlankScreen} options={{
                headerShown: false
            }} />
            <Stack.Screen name="Rearrange" component={RearrangeScreen} options={{
                title: 'Rearrange',
                headerStyle: { backgroundColor: '#5495fb' },
                headerTitleStyle: { color: '#fff', fontFamily: FONT.medium },
                headerShown: false
            }} />
        </Stack.Navigator>
    );
};

const MainHomeScreen = ({ navigation }: any) => {
    const { colorScheme, theme } = useColorSchemeContext();

    return (
        <React.Fragment>
            <ContentHeader title="Exercise" />
            <View style={[styles.sectionContainer, { backgroundColor: colorScheme === 'light' ? '#f2f2f2' : COLORS.darkPrimary }]}>
                <TouchableOpacity onPress={() => navigation.navigate('FillInTheBlank')} activeOpacity={0.7} style={[styles.itemContainer, { backgroundColor: colorScheme === 'light' ? '#fff' : COLORS.darkSecondary, borderWidth: 1, borderColor: theme.borderColor }]}>
                    <View style={styles.item}>
                        <View style={styles.item_icon_wraper}>
                            <Image style={styles.item_icon} source={{ uri: 'https://image.winudf.com/v2/image/YXN1Lm1jcV9pY29uXzBfYzVkMzhmYzE/icon.png?w=&fakeurl=1' }} />
                        </View>
                        <Text style={[styles.title, { color: theme.textSecondary }]}>Fill In The Blank</Text>
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
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Rearrange')} activeOpacity={0.7} style={[styles.itemContainer, { backgroundColor: colorScheme === 'light' ? '#fff' : COLORS.darkSecondary, borderWidth: 1, borderColor: theme.borderColor }]}>
                    <View style={styles.item}>
                        <View style={styles.item_icon_wraper}>
                            <Image style={styles.item_icon} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1127/1127749.png' }} />
                        </View>
                        <Text style={[styles.title, { color: theme.textSecondary }]}>Rearrange</Text>
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
                </TouchableOpacity>
            </View>
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        gap: 10,
        padding: 10,
        // flexDirection: 'row',
        // flexWrap: 'wrap'
    },
    sectionTitle: {
        fontSize: 18,
        marginTop: 5,
        marginBottom: 10,
        fontFamily: FONT.bold,
    },
    itemContainer: {
        borderRadius: 5,
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    item: {
        flexDirection: 'row',
        alignItems: "center",
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
        fontFamily: FONT.medium,
    },
});


export default HomeScreen;
