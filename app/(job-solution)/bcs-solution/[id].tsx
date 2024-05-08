import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { COLORS, FONT } from "@/constants";

import { useColorSchemeContext } from "@/context/ColorSchemeContext";

import ContentHeader from '@/components/Headers/ContentHeader';

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
import bcs36th from '@/data/36th-bcs.json';
import bcs37th from '@/data/37th-bcs.json';
import bcs38th from '@/data/38th-bcs.json';
import bcs39th from '@/data/39th-bcs.json';
import bcs40th from '@/data/40th-bcs.json';
import bcs41st from '@/data/41th-bcs.json';
import bcs42nd from '@/data/42th-bcs.json';
import bcs43rd from '@/data/43th-bcs.json';
import bcs44th from '@/data/44th-bcs.json';
import bcs45th from '@/data/45th-bcs.json';

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
    36: bcs36th,
    37: bcs37th,
    38: bcs38th,
    39: bcs39th,
    40: bcs40th,
    41: bcs41st,
    42: bcs42nd,
    43: bcs43rd,
    44: bcs44th,
    45: bcs45th
};

const MCQs = () => {
    const route = useRoute();
    const { id } = route.params as any;
    const { colorScheme } = useColorSchemeContext();

    // State to store the selected data
    const [selectedData, setSelectedData] = useState<any>(null);

    useEffect(() => {
        // Retrieve the selected data from the mapping object
        const data = dataMap[id];
        if (data) {
            setSelectedData(data);
        } else {
            console.error(`Data not found for id: ${id}`);
        }
    }, [id]);

    const optionKeys = ['A', 'B', 'C', 'D', 'E'];

    return (
        <React.Fragment>
            <ContentHeader title={`${id}th BCS Preliminary`} />

            <View style={[styles.sectionContainer, { backgroundColor: colorScheme === 'light' ? '#f2f2f2' : COLORS.darkPrimary }]}>
                <FlatList
                    data={selectedData}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity style={{}} activeOpacity={0.7}>
                            <View style={[styles.item, { backgroundColor: colorScheme === 'light' ? '#fff' : COLORS.darkSecondary }]}>
                                <Text style={[styles.title, styles.fontMedium, { marginBottom: 8, fontSize: 17, color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText }]}><Text style={styles.fontBold}>{index + 1}.</Text> {item.question}</Text>
                                <FlatList
                                    data={item.options}
                                    renderItem={({ item, index }) => (
                                        <Text style={[styles.title, { color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText }]}><Text style={styles.fontBold}>{optionKeys[index]})</Text> {item}</Text>
                                    )}
                                    keyExtractor={(item) => item}
                                    style={{ gap: 8 }}
                                    showsVerticalScrollIndicator={false}
                                />

                                <Text style={[styles.title, { marginTop: 15, color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText }]}><Text style={[styles.fontMedium, { color: '#28a745' }]}>Correct Answer:</Text> {item.answer}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{ gap: 10 }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        padding: 10,
    },
    item: {
        padding: 15,
        borderRadius: 10
    },
    title: {
        fontSize: 16,
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
