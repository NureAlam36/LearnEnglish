import React from 'react'
import { View, Text, Image } from 'react-native'
import { COLORS, FONT } from "@/constants";

import ContentHeader from '@/components/Headers/ContentHeader'

import { useColorSchemeContext } from "@/context/ColorSchemeContext";

const Notification = () => {
    const { colorScheme } = useColorSchemeContext();

    return (
        <React.Fragment>
            <ContentHeader title="Notification" />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colorScheme === "light" ? "#fff" : COLORS.darkPrimary, padding: 20 }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: -100 }}>
                    <Image style={{ width: 300, height: 300 }} source={require('@/assets/images/no-notification.jpg')} />
                    <Text style={{ fontFamily: FONT.bold, fontSize: 24, color: colorScheme === "light" ? COLORS.darkText : COLORS.lightText, marginBottom: 10 }}>No Notification Yet</Text>
                    <Text style={{ fontFamily: FONT.regular, fontSize: 17, color: colorScheme === "light" ? COLORS.gray : COLORS.lightText, textAlign: 'center' }}>You have no notification right now. Stay tuned for updates.</Text>
                </View>
            </View>
        </React.Fragment>
    )
}

export default Notification