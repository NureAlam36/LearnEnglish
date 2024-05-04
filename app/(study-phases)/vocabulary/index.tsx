import React from 'react'
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native'
import { Stack } from 'expo-router'

import { COLORS, FONT, icons, images, SIZES } from "@/constants";
import { useColorSchemeContext } from "@/context/ColorSchemeContext";

import vocabulary from '@/data/vocabulary.json';

const index = () => {
    const { colorScheme } = useColorSchemeContext();

    const screenWidth = Dimensions.get('window').width;
    const adjustedWidth = screenWidth - 50;

    return (
        <React.Fragment>
            <Stack.Screen
                options={{
                    title: 'Vocabulary',
                    headerTitle: () => <Text style={{ fontSize: 18, color: 'white', fontFamily: FONT.medium, }}>Vocabulary</Text>,
                    headerStyle: { backgroundColor: '#5495fb' }
                }}
            />
            <View>
                <FlatList
                    data={vocabulary}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity style={[styles.item, index % 2 === 0 ? (colorScheme === 'light' ? { backgroundColor: '#fff' } : { backgroundColor: COLORS.darkSecondary }) : (colorScheme === 'light' ? { backgroundColor: '#f6f6f6' } : { backgroundColor: COLORS.darkPrimary })]} activeOpacity={0.7}>
                            <View style={{ transform: 'rotate(180deg)' }}>
                                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3298/3298618.png' }} style={{ width: 20, height: 20 }} />
                            </View>
                            <Text style={[styles.text, { width: adjustedWidth, color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText }]}>{item.en} - {item.bn}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    item: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        alignItems: 'flex-start',
        flex: 1,
    },
    text: {
        fontSize: 16,
        fontFamily: FONT.regular,
    },
    itemEven: {
        backgroundColor: '#f6f6f6',
    }
})

export default index