import React from 'react'
import { Text, View } from 'react-native'

import { WaveIndicator, } from 'react-native-indicators';
import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import { FONT, COLORS } from "@/constants";

const PreLoader = () => {
    const { colorScheme } = useColorSchemeContext();

    return (
        // <WaveIndicator color='black' />
        <View style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', backgroundColor: colorScheme === 'light' ? '#fff' : COLORS.darkSecondary }}>
            <WaveIndicator size={80} color='#5495fb' />
        </View>
    )
}

export default PreLoader;