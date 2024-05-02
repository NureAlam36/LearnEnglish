import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { COLORS, FONT } from "@/constants";

import bcs10th from '@/data/10th-bcs.json';
import bcs11th from '@/data/11th-bcs.json';
import bcs12th from '@/data/12th-bcs.json';
import bcs13th from '@/data/13th-bcs.json';
import bcs14th from '@/data/14th-bcs.json';
import bcs15th from '@/data/15th-bcs.json';
import bcs16th from '@/data/16th-bcs.json';
import bcs17th from '@/data/17th-bcs.json';
import bcs18th from '@/data/18th-bcs.json';
import bcs19th from '@/data/20th-bcs.json';
import bcs20th from '@/data/20th-bcs.json';
import bcs21st from '@/data/21th-bcs.json';
import bcs22nd from '@/data/22th-bcs.json';
import bcs23rd from '@/data/23th-bcs.json';
import bcs24th from '@/data/24th-bcs.json';
import bcs25th from '@/data/25th-bcs.json';
import bcs26th from '@/data/26th-bcs.json';
import bcs27th from '@/data/27th-bcs.json';
import bcs28th from '@/data/28th-bcs.json';
import bcs29th from '@/data/29th-bcs.json';
import bcs30th from '@/data/30th-bcs.json';
import bcs31st from '@/data/31th-bcs.json';
import bcs32nd from '@/data/32th-bcs.json';
import bcs33rd from '@/data/33th-bcs.json';
import bcs34th from '@/data/34th-bcs.json';
import bcs35th from '@/data/35th-bcs.json';

// Create a mapping object to map IDs to JSON files
const dataMap: any = {
    10: bcs10th,
    11: bcs11th,
    12: bcs12th,
    13: bcs13th,
    14: bcs14th,
    15: bcs15th,
    16: bcs16th,
    17: bcs17th,
    18: bcs18th,
    19: bcs19th,
    20: bcs20th,
    21: bcs21st,
    22: bcs22nd,
    23: bcs23rd,
    24: bcs24th,
    25: bcs25th,
    26: bcs26th,
    27: bcs27th,
    28: bcs28th,
    29: bcs29th,
    30: bcs30th,
    31: bcs31st,
    32: bcs32nd,
    33: bcs33rd,
    34: bcs34th,
    35: bcs35th,
};

const MCQs = () => {
    const route = useRoute();
    const { id } = route.params as any;

    // State to store the selected data
    const [selectedData, setSelectedData] = useState<any>(null);

    useEffect(() => {
        // Retrieve the selected data from the mapping object
        const data = dataMap[id];
        if (data) {
            setSelectedData(data);
            console.log(data);
        } else {
            console.error(`Data not found for id: ${id}`);
        }
    }, [id]);

    const optionKeys = ['A', 'B', 'C', 'D', 'E'];

    return (
        <View style={styles.sectionContainer}>
            <FlatList
                data={selectedData}
                renderItem={({ item, index }) => (
                    <TouchableOpacity style={{}} activeOpacity={0.7}>
                        <View style={styles.item}>
                            <Text style={[styles.title, styles.fontMedium, { marginBottom: 8, fontSize: 17 }]}><Text style={styles.fontBold}>{index + 1}.</Text> {item.question}</Text>
                            <FlatList
                                data={item.options}
                                renderItem={({ item, index }) => (
                                    <Text style={styles.title}><Text style={styles.fontBold}>{optionKeys[index]})</Text> {item}</Text>
                                )}
                                keyExtractor={(item) => item}
                                style={{ gap: 8 }}
                                showsVerticalScrollIndicator={false}
                            />

                            <Text style={[styles.title, { marginTop: 15 }]}><Text style={[styles.fontMedium, { color: '#28a745' }]}>Correct Answer:</Text> {item.answer}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ gap: 10 }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        padding: 10,
    },
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10
    },
    title: {
        fontSize: 16,
        color: "#1f1f1f",
    },
    fontRegular: {
        fontFamily: FONT.regular,
    },
    fontMedium: {
        fontFamily: FONT.medium,
    },
    fontBold: {
        fontFamily: FONT.bold,
    }
})

export default MCQs;
