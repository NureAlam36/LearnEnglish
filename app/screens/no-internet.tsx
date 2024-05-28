import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import { COLORS, FONT } from "../../constants";
import { useColorSchemeContext } from '@/context/ColorSchemeContext';
import { useNetwork } from '@/context/NetworkContext';

export default function NoInternet() {
    const { theme } = useColorSchemeContext();
    const { refreshNetworkStatus } = useNetwork();

    return (
        <View style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: theme.mainBg }}>
            <View style={{ padding: 30 }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Feather name="wifi-off" size={100} color={COLORS.primary} />
                    <Text style={{ fontSize: 28, fontFamily: FONT.bold, marginBottom: 15, marginTop: 20, color: theme.headingPrimary }}>Whoops!!</Text>
                    <Text style={{ textAlign: 'center', fontFamily: FONT.regular, fontSize: 16, color: theme.textSecondary }}>No Internet connection was found. Check your connection or try again.</Text>
                </View>
                <View style={{ flex: 0 }}>
                    <TouchableOpacity activeOpacity={0.7}>
                        <View style={{ backgroundColor: COLORS.primary, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                            <Text style={{ fontFamily: FONT.bold, fontSize: 14, color: 'white' }} onPress={() => refreshNetworkStatus()}>Try again</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}