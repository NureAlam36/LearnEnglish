import {
    View,
    Text,
    Image,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { COLORS, FONT } from "../../constants";
import { LinearGradient } from "expo-linear-gradient";
import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import { useNetwork } from "@/context/NetworkContext";

import NoInternetScreen from "@/app/screens/no-internet";
import { useAuth } from "@/context/AuthContext";

import CustomHeader from "@/components/Headers/CustomHeader";
import LoginSignUpScreen from '@/app/screens/login'

const Leaderboard = ({ navigation }: any) => {
    const { colorScheme, theme } = useColorSchemeContext();
    const { isAuthenticated } = useAuth();
    const { isConnected } = useNetwork();

    if (!isConnected) {
        return <NoInternetScreen />
    }

    if (!isAuthenticated) {
        return <LoginSignUpScreen />
    }

    const users = [
        { id: '1', name: 'Alice', score: 100 },
        { id: '2', name: 'Bob', score: 90 },
        { id: '3', name: 'Charlie', score: 85 },
        { id: '4', name: 'David', score: 80 },
        { id: '5', name: 'Eve', score: 75 }
    ];

    return (
        <View style={[styles.sectionContainer, { backgroundColor: theme.mainBg }]}>
            <LinearGradient
                colors={[COLORS.bgPrimary, COLORS.bgSecondary]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{ paddingTop: 10 }}
            >
                <CustomHeader title="Leaderboard" paddingTop={1} />

                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 45, paddingTop: 20, paddingBottom: 50 }}>
                    <View style={{ display: 'flex', alignItems: 'center', }}>
                        {/* <Text style={[styles.text, { fontSize: 22, color: 'white' }]}>2</Text> */}
                        <Image source={require('@/assets/images/rank/rank-2-2.png')} style={{ width: 35, height: 35, opacity: 0.9 }} />

                        <LinearGradient
                            colors={['#43e97b', '#38f9d7']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={{ padding: 5, borderRadius: 50, marginBottom: 10, marginTop: 5 }}
                        >
                            <Image style={{ width: 60, height: 60, borderRadius: 50 }} source={{ uri: 'https://st3.depositphotos.com/1158045/15590/i/450/depositphotos_155909994-stock-photo-young-beautiful-woman-smiling.jpg' }} />
                        </LinearGradient>
                        <Text style={styles.toper_rank}>100</Text>
                        <Text style={styles.toper_name}>Nure Alam</Text>
                    </View>
                    <View style={{ display: 'flex', alignItems: 'center' }}>
                        <Image source={require('@/assets/images/rank/rank-2-1.png')} style={{ width: 45, height: 45 }} />
                        <LinearGradient
                            colors={['#43e97b', '#38f9d7']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={{ padding: 7, borderRadius: 50, marginBottom: 10, marginTop: 5 }}
                        >
                            <Image style={{ width: 80, height: 80, borderRadius: 50 }} source={{ uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
                        </LinearGradient>
                        <Text style={styles.toper_rank}>100</Text>
                        <Text style={styles.toper_name}>Nure Alam</Text>
                    </View>
                    <View style={{ display: 'flex', alignItems: 'center' }}>
                        <Image source={require('@/assets/images/rank/rank-2-3.png')} style={{ width: 35, height: 35, opacity: 0.9 }} />
                        <LinearGradient
                            colors={['#43e97b', '#38f9d7']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={{ padding: 5, borderRadius: 50, marginBottom: 10, marginTop: 5 }}
                        >
                            <Image style={{ width: 60, height: 60, borderRadius: 50 }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9AInPad7rX_i79xRsSd0BRQDiHyGY3peGxeyrJqyPEG_1vDb1SM6hxHCUZWEyxjeK3V8&usqp=CAU' }} />
                        </LinearGradient>
                        <Text style={styles.toper_rank}>100</Text>
                        <Text style={styles.toper_name}>Nure Alam</Text>
                    </View>
                </View>

            </LinearGradient>
            <View style={{ flex: 1, backgroundColor: theme.mainBg, borderTopStartRadius: 20, borderTopEndRadius: 20, marginTop: -20, overflow: 'hidden' }}>
                <View style={{}}>
                    <FlatList
                        data={users}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity style={[styles.item, { backgroundColor: theme.bgSecondary, paddingHorizontal: 15, paddingVertical: 10, borderRadius: 10 }]} activeOpacity={0.8}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ width: 40 }}>
                                        <Text style={[styles.text, { color: theme.textSecondary, opacity: 0.6 }]}>#{index}</Text>
                                    </View>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
                                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                            <Image
                                                source={{ uri: 'https://st3.depositphotos.com/1158045/15590/i/450/depositphotos_155909994-stock-photo-yougirl-smiling.jpg' }}
                                                style={{ width: 40, height: 40, borderRadius: 50 }}
                                            />
                                            <Text style={[styles.text, { color: theme.textSecondary }]}>{item.name}</Text>
                                        </View>
                                        <Text style={[styles.text, { color: theme.textSecondary }]}>100</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                        numColumns={1}
                        contentContainerStyle={{ gap: 10, padding: 15, }}
                        showsVerticalScrollIndicator={false}
                    // ListHeaderComponent={() => (
                    //     <View style={{ padding: 10, paddingBottom: 5 }}>
                    //         <Text style={[styles.sectionTitle, { color: theme.text, color: theme.textSecondary }]}>Leaderboard</Text>
                    //     </View>
                    // )}
                    />
                </View>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
    },
    sectionTitle: {
        fontSize: 18,
        fontFamily: FONT.bold,
    },
    item: {
        alignItems: "center",
        gap: 10,
    },
    imageContainer: {
        backgroundColor: "#ccdfffb8",
        padding: 18,
        borderRadius: 10,
    },
    text: {
        fontSize: 14,
        fontFamily: FONT.medium,
        color: COLORS.gray,
    },
    toper_rank: {
        fontSize: 16,
        fontFamily: FONT.bold,
        color: 'white'
    },
    toper_name: {
        fontSize: 14,
        fontFamily: FONT.bold,
        color: 'white',
        opacity: 0.9
    }
});

export default Leaderboard;
