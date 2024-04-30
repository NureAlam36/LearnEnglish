import React from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { Stack } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons';

import { COLORS, FONT, icons, images, SIZES } from "@/constants";

import proverbs from '@/data/proverbs.json'

const index = () => {


    return (
        <React.Fragment>
            <Stack.Screen
                options={{
                    title: 'Proverbs',
                    headerTitle: () => <Text style={{ fontSize: 18, color: 'white', fontFamily: FONT.medium, }}>Proverbs</Text>,
                    headerStyle: { backgroundColor: '#5495fb' }
                }}
            />
            <View>
                <FlatList
                    data={proverbs}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity style={[styles.item, index % 2 === 0 ? styles.itemEven : null]} activeOpacity={0.6}>
                            <Text style={{ fontSize: 16, fontFamily: FONT.regular, color: COLORS.gray, marginBottom: 10 }}>{item.bangla}</Text>
                            <Text style={{ fontSize: 17, fontFamily: FONT.regular, color: COLORS.black }}>{item.english}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </React.Fragment >
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1'
    },

    itemEven: {
        backgroundColor: '#f6f6f6',
    }
})

export default index