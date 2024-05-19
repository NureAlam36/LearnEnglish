import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { COLORS, FONT } from "@/constants";
import ContentHeader from '@/components/Headers/ContentHeader';
import { useColorSchemeContext } from '@/context/ColorSchemeContext';

const DATA = [
    {
        id: 1
    },
    {
        id: 2
    },
    {
        id: 3
    },
    {
        id: 4
    },
    {
        id: 5
    },
    {
        id: 6
    },
    {
        id: 7
    },
    {
        id: 8
    },
    {
        id: 9
    },
    {
        id: 10
    },
    {
        id: 11
    },
    {
        id: 12
    },
    {
        id: 13
    },
    {
        id: 14
    },
    {
        id: 15
    },
    {
        id: 16
    },
    {
        id: 17
    },
    {
        id: 18
    },
    {
        id: 19
    },
    {
        id: 20
    },
    {
        id: 21
    },
    {
        id: 22
    },
    {
        id: 23
    },
    {
        id: 24
    },
    {
        id: 25
    },
    {
        id: 26
    },
    {
        id: 27
    },
    {
        id: 28
    },
    {
        id: 29
    },
    {
        id: 30
    }
]

const Categories = ({ route, navigation }: any) => {
    const { colorScheme, theme } = useColorSchemeContext();
    const level = route.params.level || {};

    return (
        <React.Fragment>
            <ContentHeader title="Categories" />

            <View style={{ flex: 1, backgroundColor: theme.mainBg }}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={[styles.ctg_item, {}]} onPress={() => navigation.navigate('test_page_screen', { level: level, day: item.id })} activeOpacity={0.7}>
                            <View style={[styles.item_wrap, { borderWidth: 1, borderColor: theme.borderColor }]}>
                                <View style={{
                                    position: 'absolute',
                                    top: 0,
                                    marginLeft: '-3%', // Adjust to center horizontally
                                    width: '100%',

                                    height: 20,
                                    padding: 3
                                }}>
                                    <View style={{
                                        backgroundColor: COLORS.primary, width: '100%', borderTopStartRadius: 50,
                                        borderTopEndRadius: 50, alignItems: 'center', height: 20,
                                        justifyContent: 'center',
                                    }}>
                                        <Text style={{ fontFamily: FONT.medium, color: COLORS.white, fontSize: 11, marginTop: -2 }}>Day</Text>
                                    </View>
                                </View>
                                <Text style={[styles.text, { color: theme.textSecondary }]}>{item.id}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={4}
                    contentContainerStyle={{ gap: 10, padding: 12 }}
                    columnWrapperStyle={{ gap: 10, height: 85 }}
                />
            </View>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    ctg_item: {
        flex: 1,
    },
    item_wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: '#57c9a924',
    },
    text: {
        fontSize: 25,
        fontFamily: FONT.bold,
        marginTop: 15
    }
})

export default Categories