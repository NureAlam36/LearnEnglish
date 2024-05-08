import React from 'react'
import { View, Text } from 'react-native'
import { Stack } from 'expo-router'

import { COLORS, FONT } from "@/constants";

import ContentHeader from "@/components/Headers/ContentHeader";

const Index = () => {
    return (
        <React.Fragment>
            <ContentHeader title="Story" />
            <Text>Story</Text>
        </React.Fragment>
    )
}

export default Index