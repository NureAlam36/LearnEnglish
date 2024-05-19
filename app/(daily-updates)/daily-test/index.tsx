import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { COLORS, FONT } from "@/constants";
import ContentHeader from '@/components/Headers/ContentHeader';
import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';

import TestPage from './test_page';

import Categories from './categories';

const Stack = createStackNavigator();

// Define your stack navigator with screens
const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                ...TransitionPresets.SlideFromRightIOS,
                headerShown: false
            }}>
            <Stack.Screen name="test_level_screen" component={DailyText} options={{ headerShown: false }} />
            <Stack.Screen name="Categories_screen" component={Categories} options={{ headerShown: false }} />
            <Stack.Screen name="test_page_screen" component={TestPage} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}



const DailyText = ({ navigation }: any) => {
    const { colorScheme, theme } = useColorSchemeContext();

    return (
        <React.Fragment>
            <ContentHeader title="Daily Test" />

            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: theme.mainBg }}>
                <View style={{ alignItems: 'center', marginBottom: 30 }}>
                    <Text style={{ fontFamily: FONT.bold, fontSize: 22, color: theme.headingSecondary }}>Select your level</Text>
                </View>
                <View style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
                    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Categories_screen', { level: 'beginner' })} activeOpacity={0.7}>
                        <Text style={styles.text}>Beginner</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Categories_screen', { level: 'intermediate' })} activeOpacity={0.7}>
                        <Text style={styles.text}>Intermediate</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Categories_screen', { level: 'advanced' })} activeOpacity={0.7}>
                        <Text style={styles.text}>Advanced</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Categories_screen', { level: 'expert' })} activeOpacity={0.7}>
                        <Text style={styles.text}>Expert</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Categories_screen', { level: 'professional' })} activeOpacity={0.7}>
                        <Text style={styles.text}>Professional</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Categories_screen', { level: 'master' })} activeOpacity={0.7}>
                        <Text style={styles.text}>Master</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        backgroundColor: COLORS.primary,
        width: '80%',
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',

    },
    text: {
        fontSize: 16,
        fontFamily: FONT.medium,
        color: '#fff',
    }
})

export default StackNavigator;