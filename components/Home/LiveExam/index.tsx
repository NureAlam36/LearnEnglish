import React from "react";
import {
    View,
    Image,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { COLORS, FONT } from "../../../constants";
import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import { FontAwesome, FontAwesome5, Octicons } from "@expo/vector-icons";

const DATA: any = [
    {
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
        },

    },
    {
        "id": 2,
        "title": "Monthly exam",
        "description": "Advanced English Exam",
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
        },

    }
]

const LiveExam = ({ navigation }: any) => {
    const { colorScheme, theme } = useColorSchemeContext();

    return (
        <View style={{ flex: 1, marginVertical: 15 }}>
            <View>
                <Text style={[styles.sectionTitle, { color: theme.headingPrimary }]}>
                    Live Exam
                </Text>
            </View>

            <FlatList
                data={DATA}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('exam_details_screen', { id: item.id })}
                        activeOpacity={0.7}
                        style={[
                            styles.itemContainer,
                            {
                                backgroundColor:
                                    colorScheme === "light" ? "#fff" : COLORS.darkSecondary,
                                // borderWidth: 1,
                                // borderColor: theme.borderColor,
                                shadowColor: COLORS.primary,
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,
                                elevation: 1,
                            },
                        ]}
                    >
                        <View style={styles.item}>
                            <View style={{ flexDirection: "row", alignItems: "center", padding: 10, borderBottomWidth: 0.2, borderBottomColor: theme.borderPrimary, paddingBottom: 10 }}>
                                <View style={styles.imageWraper}>
                                    <Image
                                        style={styles.image}
                                        source={{ uri: item.image }}
                                        resizeMode="contain"
                                    />
                                </View>
                                <View>
                                    <Text style={[styles.title, { color: theme.textPrimary, fontFamily: FONT.medium, marginBottom: 3 }]}>{item.description}</Text>
                                    <Text style={[styles.title, { color: COLORS.primary, fontFamily: FONT.regular, fontSize: 13 }]}>{item.title}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between' }}>
                                <View style={{ flex: 1, borderRightWidth: 0.2, borderRightColor: theme.borderPrimary, padding: 10, gap: 10 }}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', gap: 20 }}>
                                        <View style={{ flex: 0.5, flexDirection: "row", alignItems: "center", gap: 8 }}>
                                            <FontAwesome name="list-alt" size={15} color={theme.textSecondary} style={{ opacity: 0.9 }} />
                                            <Text style={{ color: theme.textSecondary, fontFamily: FONT.regular, fontSize: 12 }}>20 Questions</Text>
                                        </View>
                                        <View style={{ flex: 0.5, flexDirection: "row", alignItems: "center", gap: 8 }}>
                                            <FontAwesome5 name="users" size={15} color={theme.textSecondary} style={{ opacity: 0.9 }} />
                                            <Text style={{ color: theme.textSecondary, fontFamily: FONT.regular, fontSize: 12 }}>66 Partcipated</Text>
                                        </View>
                                    </View>

                                    <View style={{ flex: 0.5, flexDirection: "row", alignItems: "center", gap: 8 }}>
                                        <FontAwesome5 name="clock" size={15} color={theme.textSecondary} style={{ opacity: 0.9 }} />
                                        <Text style={{ color: theme.textSecondary, fontFamily: FONT.regular, fontSize: 12 }}>Time Left: 18:10:30</Text>
                                    </View>

                                    {/* <View style={{ marginTop: 10 }}>
                                        <CountdownTimer hours={0} minutes={59} seconds={55} />
                                    </View> */}
                                </View>

                                <View style={{ width: 80, display: 'flex', alignItems: 'center' }}>
                                    <TouchableOpacity style={{ width: 50, backgroundColor: COLORS.primary, paddingHorizontal: 8, paddingVertical: 5, borderRadius: 5 }}>
                                        <View >
                                            <Text style={{ color: COLORS.lightText }}>Start</Text>
                                            {/* <Octicons name="arrow-right" size={24} color="black" /> */}
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
                style={{ gap: 10 }}
            />
        </View>
    )
}

export default LiveExam

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
    timerBox: {
        backgroundColor: '#ffffff',
        paddingVertical: 2,
        paddingHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    timerText: {
        fontSize: 12,
        fontFamily: FONT.bold,
        color: COLORS.gray
    },
    colon: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000000',
        marginHorizontal: 5,
    },
    labelContainer: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
    },
    labelText: {
        fontSize: 12,
        color: '#ffffff',
    }
});