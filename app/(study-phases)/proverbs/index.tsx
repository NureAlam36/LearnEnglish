import React from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { Stack } from 'expo-router'

import { COLORS, FONT } from "@/constants";
import { useColorSchemeContext } from "@/context/ColorSchemeContext";

import proverbs from '@/data/proverbs.json'

const index = () => {
    const { colorScheme } = useColorSchemeContext();

    return (
        <React.Fragment>
            <Stack.Screen
                options={{
                    title: 'Proverbs',
                    headerTitle: () => <Text style={{ fontSize: 18, color: 'white', fontFamily: FONT.medium, }}>Proverbs</Text>,
                    headerStyle: { backgroundColor: '#5495fb' }
                }}
            />
            <View style={{ flex: 1, backgroundColor: colorScheme === 'light' ? '#fff' : COLORS.darkSecondary }}>
                <FlatList
                    data={proverbs}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity style={[styles.item, { backgroundColor: index % 2 === 0 ? (colorScheme === 'light' ? '#f6f6f6' : COLORS.darkPrimary) : '' }]} activeOpacity={0.6}>
                            <Text style={{ fontSize: 16, fontFamily: FONT.regular, marginBottom: 10, color: colorScheme === 'light' ? COLORS.gray : COLORS.lightText }}>{item.bangla}</Text>
                            <Text style={{ fontSize: 17, fontFamily: FONT.regular, color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText }}>{item.english}</Text>
                        </TouchableOpacity>
                    )}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </React.Fragment >
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 15,
        // borderBottomWidth: 1,
        // borderBottomColor: '#e1e1e1'
    }
})

export default index