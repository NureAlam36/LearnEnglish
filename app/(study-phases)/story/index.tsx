import React from 'react'
import { View, Text } from 'react-native'
import { Stack } from 'expo-router'

import { COLORS, FONT, icons, images, SIZES } from "@/constants";

const index = () => {
    return (
        <React.Fragment>
            <Stack.Screen
                options={{
                    title: 'Story',
                    headerTitle: () => <Text style={{ fontSize: 18, color: 'white', fontFamily: FONT.medium, }}>Story</Text>,
                    headerStyle: { backgroundColor: '#5495fb' }
                }}
            />
            <Text>Story</Text>
        </React.Fragment>
    )
}

export default index