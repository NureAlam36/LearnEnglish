import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { COLORS, FONT } from '@/constants'

import ContentHeader from '@/components/Headers/ContentHeader';
import { useColorSchemeContext } from '@/context/ColorSchemeContext';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

const DATA: any = {
    "id": 1,
    "title": "Weakly exam",
    "description": "Advanced Mathematics Exam",
    "image": "https://i.ibb.co/0B8TwS4/kindpng-1971599.png",
    "status": "active",
    "questions_count": 50,
    "duration_minutes": 120,
    "examinees_count": 75,
    "start_time": "2021-09-10T10:00:00Z",
    "end_time": "2021-09-10T12:00:00Z",
    "settings": {
        "shuffle_questions": true,
        "shuffle_answers": true,
        "allow_back_navigation": false,
        "show_results_immediately": false,
        "passing_percentage": 60
    }
}

const CountdownTimer = ({ hours, minutes, seconds }: any) => {
    const { colorScheme, theme } = useColorSchemeContext();

    return (
        <View style={{ flexDirection: 'row' }}>
            <View style={{ alignItems: 'center', gap: 4 }}>
                <View style={styles.timerBox}>
                    <Text style={styles.timerText}>{hours.toString().padStart(2, '0')}</Text>
                </View>
                <Text style={styles.labelText}>Days</Text>
            </View>

            <Text style={styles.colon}>:</Text>

            <View style={{ alignItems: 'center', gap: 4 }}>
                <View style={styles.timerBox}>
                    <Text style={styles.timerText}>{minutes.toString().padStart(2, '0')}</Text>
                </View>
                <Text style={styles.labelText}>Hours</Text>
            </View>

            <Text style={styles.colon}>:</Text>
            <View style={{ alignItems: 'center', gap: 4 }}>
                <View style={styles.timerBox}>
                    <Text style={styles.timerText}>{seconds.toString().padStart(2, '0')}</Text>
                </View>
                <Text style={styles.labelText}>Minutes</Text>
            </View>
        </View>
    );
};

const ExamDetails = ({ route, navigation }: any) => {
    const { id } = route.params;
    const { colorScheme, theme } = useColorSchemeContext();
    const [timeRemaining, setTimeRemaining] = useState<string>('');

    return (
        <React.Fragment>
            <ContentHeader title="Exam Details" />

            <View style={{ flex: 1, backgroundColor: theme.mainBg }}>
                <View style={{ flex: 1, backgroundColor: theme.bgGraySecondary, margin: 10, padding: 15, borderRadius: 10 }}>
                    <View style={{ flex: 1 }}>
                        <View style={{ marginBottom: 20 }}>
                            <Text style={[styles.title, { color: COLORS.primary, fontFamily: FONT.regular, fontSize: 13 }]}>{DATA.title}</Text>
                            <Text style={[styles.title, { color: theme.textPrimary, fontFamily: FONT.regular, marginTop: 3, fontSize: 18 }]}>{DATA.description}</Text>
                        </View>

                        <View style={[styles.headerContainer, { backgroundColor: '#2a5298', marginBottom: 20 }]}>
                            <View style={{}}>
                                <Text style={[styles.title, { color: COLORS.lightText, fontSize: 16, fontFamily: FONT.medium }]}>Time {'\n'}Remaining</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', alignSelf: 'center', gap: 15 }}>
                                <CountdownTimer hours={0} minutes={59} seconds={55} />
                            </View>
                        </View>

                        <View style={{ gap: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', gap: 10 }}>
                                <View style={{ flex: 1, backgroundColor: theme.bgSecondary, padding: 15, flexDirection: 'row', alignItems: 'center', gap: 15, borderRadius: 10, borderWidth: 1, borderColor: theme.borderPrimary }}>
                                    <View style={styles.imageWraper}>
                                        <Image
                                            style={styles.image}
                                            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/8161/8161879.png' }}
                                            resizeMode="contain"
                                        />
                                    </View>
                                    <View style={{ alignItems: 'center', gap: 2 }}>
                                        <Text style={{ fontSize: 17, fontFamily: FONT.medium, color: theme.textSecondary }}>{DATA.questions_count}</Text>
                                        <Text style={{ fontFamily: FONT.regular, color: COLORS.primary, fontSize: 13, opacity: 0.7 }}>Questions</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 1, backgroundColor: theme.bgSecondary, padding: 15, flexDirection: 'row', alignItems: 'center', gap: 15, borderRadius: 10, borderWidth: 1, borderColor: theme.borderPrimary }}>
                                    <View style={styles.imageWraper}>
                                        <Image
                                            style={styles.image}
                                            source={require('@/assets/images/workforce-icon-513x443.png')}
                                            resizeMode="contain"
                                        />
                                    </View>
                                    <View style={{ alignItems: 'center', gap: 2 }}>
                                        <Text style={{ fontSize: 17, fontFamily: FONT.medium, color: theme.textSecondary }}>{DATA.questions_count}</Text>
                                        <Text style={{ fontFamily: FONT.regular, color: COLORS.primary, fontSize: 13, opacity: 0.7 }}>Partcipated</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', gap: 10 }}>
                                <View style={{ flex: 1, backgroundColor: theme.bgSecondary, padding: 15, flexDirection: 'row', alignItems: 'center', gap: 15, borderRadius: 10, borderWidth: 1, borderColor: theme.borderPrimary }}>
                                    <View style={styles.imageWraper}>
                                        <Image
                                            style={styles.image}
                                            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3133/3133158.png' }}
                                            resizeMode="contain"
                                        />
                                    </View>
                                    <View style={{ alignItems: 'center', gap: 2 }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ fontSize: 17, fontFamily: FONT.medium, color: theme.textSecondary }}>20</Text>
                                            <Text style={{ fontSize: 11, fontFamily: FONT.regular, color: theme.textSecondary }}>Min</Text>
                                        </View>
                                        <Text style={{ fontFamily: FONT.regular, color: COLORS.primary, fontSize: 13, opacity: 0.7 }}>Time</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 1, backgroundColor: theme.bgSecondary, padding: 15, flexDirection: 'row', alignItems: 'center', gap: 15, borderRadius: 10, borderWidth: 1, borderColor: theme.borderPrimary }}>
                                    <View style={styles.imageWraper}>
                                        <Image
                                            style={styles.image}
                                            source={{ uri: 'https://www.pngkey.com/png/full/370-3700950_clix-values-icon-score-icon.png' }}
                                            resizeMode="contain"
                                        />
                                    </View>
                                    <View style={{ alignItems: 'center', gap: 2 }}>
                                        <Text style={{ fontSize: 17, fontFamily: FONT.medium, color: theme.textSecondary }}>33</Text>
                                        <Text style={{ fontFamily: FONT.regular, color: COLORS.primary, fontSize: 13, opacity: 0.7 }}>Pass %</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{ marginTop: 50 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('exam_leaderboard_screen', { id })} activeOpacity={0.8} style={{
                                height: 50,
                                paddingVertical: 12,
                                borderRadius: 50,
                                alignItems: 'center',
                                marginBottom: 15,
                                justifyContent: 'center',
                                width: '100%',
                                borderWidth: 1,
                                borderColor: theme.borderPrimary,
                                flexDirection: 'row',
                                gap: 8
                            }}>
                                <Text style={{ fontFamily: FONT.regular, fontSize: 16, color: theme.textPrimary }}>See leaderboard</Text>
                                <AntDesign name="arrowright" size={20} color={theme.textPrimary} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{}}>
                        <TouchableOpacity onPress={() => navigation.navigate('exam_screen', { id: DATA.id })} activeOpacity={0.8} style={{
                            backgroundColor: COLORS.primary,
                            height: 50,
                            paddingVertical: 12,
                            borderRadius: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                        }}>
                            <Text style={{ fontFamily: FONT.medium, fontSize: 16, color: '#fff' }} >Start Exam</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </View>
        </React.Fragment>
    )
}

export default ExamDetails

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 10,
        marginBottom: 5,
    },
    sectionTitle: {
        fontSize: 18,
        marginBottom: 10,
        fontFamily: FONT.bold,
    },
    itemContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 5,
    },
    item: {
        flex: 1
    },
    imageWraper: {
        marginRight: 10,
        padding: 8,
        backgroundColor: "#e5f5ff",
        borderRadius: 10,
    },
    image: {
        width: 20,
        height: 20,
    },
    title: {
        fontSize: 14,
        color: COLORS.gray,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        borderRadius: 10,
    },
    timerBox: {
        backgroundColor: '#ffffff',
        paddingVertical: 5,
        paddingHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    timerText: {
        fontSize: 14,
        fontFamily: FONT.bold,
        color: COLORS.gray
    },
    colon: {
        fontSize: 14,
        fontWeight: 'bold',
        color: COLORS.lightText,
        marginHorizontal: 5,
    },
    labelContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
    },
    labelText: {
        fontSize: 12,
        color: COLORS.lightWhite,
        fontFamily: FONT.regular
    }
});