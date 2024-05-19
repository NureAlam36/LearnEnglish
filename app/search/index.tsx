import React from 'react'
import { View, Text, FlatList } from 'react-native'

import { COLORS, FONT } from "@/constants";

import MCQComponent from '@/components/MCQComponent'
import CustomHeader from '@/components/Headers/ContentHeader'
import { useColorSchemeContext } from '@/context/ColorSchemeContext';

const DATA = [{
    "id": 1,
    "question": "I _____ him three months ago.",
    "options": ["see", "sees", "saw", "seen"],
    "answer": "saw"
},
{
    "id": 2,
    "question": "We _____ in 1965.",
    "options": ["met", "meets", "meet", "meeting"],
    "answer": "met"
},
{
    "id": 3,
    "question": "Princess Diana _____ in 1997.",
    "options": ["die", "died", "dies", "dye"],
    "answer": "died"
},
{
    "id": 4,
    "question": "Alice _____ back from America last month.",
    "options": ["come", "came", "comes", "coming"],
    "answer": "came"
},
{
    "id": 5,
    "question": "Their son _____ born at 2 o’clock this morning.",
    "options": ["were", "is", "was", "are"],
    "answer": "was"
},
{
    "id": 6,
    "question": "I _____ have a shower yesterday evening.",
    "options": ["don’t", "didn’t", "doesn’t", "haven’t"],
    "answer": "didn’t"
},
{
    "id": 7,
    "question": "I _____ the answer now.",
    "options": ["know", "known", "knows", "knew"],
    "answer": "know"
},
{
    "id": 8,
    "question": "I _____ bread this morning.",
    "options": ["buy", "bought", "sell", "buying"],
    "answer": "bought"
},
{
    "id": 9,
    "question": "He was born _____ 1955.",
    "options": ["on", "at", "of", "in"],
    "answer": "in"
},
{
    "id": 10,
    "question": "130 __________",
    "options": [
        "one hundred and thirty",
        "one hundred and fifteen",
        "one hundred and fifty",
        "one hundred and thirteen"
    ],
    "answer": "one hundred and thirty"
},
{
    "id": 11,
    "question": "862 __________",
    "options": [
        "eight hundred and forty-two",
        "eight hundred and sixty-two",
        "eight hundred and sixty",
        "eight hundred and sixteen"
    ],
    "answer": "eight hundred and sixty-two"
},
{
    "id": 12,
    "question": "999 __________",
    "options": [
        "nine hundred and nineteen–nine",
        "nine hundred and ninety-six",
        "one thousand and ninety-nine",
        "nine hundred and ninety-nine"
    ],
    "answer": "nine hundred and ninety-nine"
},
{
    "id": 13,
    "question": "603 __________",
    "options": [
        "six hundred and thirteen",
        "six hundred and thirty",
        "six hundred and three",
        "six hundred and nine"
    ],
    "answer": "six hundred and three"
},
{
    "id": 14,
    "question": "387 __________",
    "options": [
        "three hundred and eighty-seven",
        "three hundred and eighteen",
        "three hundred and eighty",
        "three hundred and eighty-eight"
    ],
    "answer": "three hundred and eighty-seven"
},
{
    "id": 15,
    "question": "I liked the movie _____ I didn’t like the book.",
    "options": ["until", "but", "so", "when"],
    "answer": "but"
},
{
    "id": 16,
    "question": "I went to university, _____ Sandy didn’t.",
    "options": ["until", "so", "but", "and"],
    "answer": "but"
},
{
    "id": 17,
    "question": "She married _____ she was just eighteen.",
    "options": ["when", "until", "but", "and"],
    "answer": "when"
},
{
    "id": 18,
    "question": "We were together nearly every day _____ we left school twelve years later.",
    "options": ["when", "until", "so", "and"],
    "answer": "until"
},
{
    "id": 19,
    "question": "I didn’t see Sandy very often _____ we talked on the telephone.",
    "options": ["and", "but", "until", "when"],
    "answer": "until"
},
{
    "id": 20,
    "question": "We stopped for three-quarters of an hour _____ New York Airport.",
    "options": ["at", "in", "over", "on"],
    "answer": "at"
}]

const Search = ({ route }: any) => {
    const { key } = route.params;
    const { colorScheme, theme } = useColorSchemeContext();

    return (
        <React.Fragment>
            <CustomHeader title="Search" />

            <View style={{ flex: 1, backgroundColor: theme.mainBg }}>
                <View style={{}}>
                    <FlatList
                        data={DATA}
                        renderItem={({ item, index }) => (
                            <React.Fragment>
                                {
                                    index === 0 && <View style={{ display: 'flex', gap: 8, padding: 10, marginBottom: 10, borderRadius: 2, backgroundColor: '#57c9a957', borderWidth: 1, borderColor: '#1bb28582' }}>
                                        <Text style={{ fontFamily: FONT.medium, color: theme.textSecondary }}>Search result for "{key}"</Text>
                                        <Text style={{ fontFamily: FONT.regular, color: theme.textSecondary }}>সার্চ ফলাফলঃ {DATA.length} টি</Text>
                                    </View>
                                }
                                <MCQComponent item={item} index={index} />
                            </React.Fragment>
                        )}
                        keyExtractor={(item) => item.id.toString()}
                        contentContainerStyle={{ gap: 10, padding: 10 }}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        </React.Fragment>
    )
}

export default Search