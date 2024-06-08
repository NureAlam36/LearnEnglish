import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { COLORS, FONT } from '@/constants'

import ContentHeader from '@/components/Headers/ContentHeader';
import { useColorSchemeContext } from '@/context/ColorSchemeContext';

const ExamLeaderboard = ({ route, navigation }: any) => {
    const { id } = route.params;
    const { colorScheme, theme } = useColorSchemeContext();

    return (
        <React.Fragment>
            <ContentHeader title="Leaderboard" />

            <View style={{ flex: 1, backgroundColor: theme.mainBg }}></View>
        </React.Fragment>
    )
}

export default ExamLeaderboard

const styles = StyleSheet.create({})