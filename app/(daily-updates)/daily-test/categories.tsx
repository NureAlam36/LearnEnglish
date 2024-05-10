import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { COLORS, FONT } from "@/constants";
import ContentHeader from '@/components/Headers/ContentHeader';

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
    const level = route.params.level || {};


    return (
        <React.Fragment>
            <ContentHeader title="Categories" />

            <View style={{ flex: 1, padding: 10 }}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.ctg_item} onPress={() => navigation.navigate('test_page_screen', { level: level, day: item.id })} activeOpacity={0.7}>
                            <View style={styles.item_wrap}>
                                <View>
                                    <Text style={{ fontFamily: FONT.medium, color: COLORS.gray, fontSize: 12 }}>Day</Text>
                                </View>
                                <Text style={styles.text}>{item.id}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={4}
                    contentContainerStyle={{ gap: 10 }}
                    columnWrapperStyle={{ gap: 10, height: 85 }}
                />
            </View>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    ctg_item: {
        flex: 1,
        borderRadius: 5,
    },
    item_wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: COLORS.primary,
        backgroundColor: '#57c9a924',
    },
    text: {
        fontSize: 23,
        fontFamily: FONT.bold,
        color: COLORS.gray,
    }
})

export default Categories