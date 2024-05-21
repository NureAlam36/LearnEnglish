import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useColorSchemeContext } from '@/context/ColorSchemeContext';

const Divider = ({ marginTop = 0, marginBottom = 0, borderColor = '#cccccc' }) => {
    const { colorScheme, theme } = useColorSchemeContext();

    return (
        <View style={{
            height: 1,
            backgroundColor: colorScheme === 'light' ? borderColor : theme.borderColor,
            alignSelf: 'stretch',
            marginTop: marginTop,
            marginBottom: marginBottom,
        }} />
    )
}

export default Divider

const styles = StyleSheet.create({})