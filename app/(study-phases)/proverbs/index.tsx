import React from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { Stack } from 'expo-router'

import { COLORS, FONT } from "@/constants";
import { useColorSchemeContext } from "@/context/ColorSchemeContext";

import proverbs from '@/data/proverbs.json'

import ContentHeader from "@/components/Headers/ContentHeader";

const Proverbs = () => {
    const { colorScheme, theme } = useColorSchemeContext();

    return (
        <React.Fragment>
            <ContentHeader title="Proverbs" />

            <View style={{ flex: 1, backgroundColor: theme.mainBg }}>
                <FlatList
                    data={proverbs}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity style={[styles.item, { backgroundColor: index % 2 === 0 ? (colorScheme === 'light' ? '#f6f6f6' : theme.bgPrimary) : theme.bgSecondary }]} activeOpacity={0.6}>
                            <Text style={{ fontSize: 16, fontFamily: FONT.regular, marginBottom: 10, color: theme.textSecondary }}>{item.bn}</Text>
                            <Text style={{ fontSize: 17, fontFamily: FONT.regular, color: theme.textPrimary }}>{item.en}</Text>
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

export default Proverbs