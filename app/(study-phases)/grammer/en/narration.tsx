import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import { FONT, COLORS } from "@/constants";

// @ts-ignore
import { Table, Row } from 'react-native-table-component';

import PreLoader from '@/components/PreLoader';
import Divider from '@/components/Divider';

// https://www.vedantu.com/content-files-downloadable/cbse/class-7-english-grammar-ncert-solutions-narration.pdf

const Narration = () => {
    const [loading, setLoading] = useState(true);
    const { colorScheme, theme } = useColorSchemeContext();

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 0);
    }, []);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.mainBg,
        },
        text: {
            fontSize: 17,
            fontFamily: FONT.regular,
            // color: '#242424'
            color: theme.textSecondary
        },
        noteText: {
            fontSize: 17,
            fontFamily: FONT.regular,
            color: '#242424'
        },
        heading_xl: {
            fontSize: 22,
            fontFamily: FONT.bold,
            color: theme.textPrimary
        },
        heading_lg: {
            fontSize: 20,
            fontFamily: FONT.bold,
            color: theme.textPrimary
        },
        heading_md: {
            fontSize: 18,
            fontFamily: FONT.bold,
            color: theme.textPrimary
        },
        tableHead: { minHeight: 40, backgroundColor: '#f1f8ff', fontFamily: FONT.bold },
        tableData: { minHeight: 20, margin: 6, fontFamily: FONT.medium },
        evenRow: { backgroundColor: '#f2f2f2' }
    })

    return (
        !loading ? <ScrollView style={[styles.container, { backgroundColor: theme.bgPrimary }]} showsVerticalScrollIndicator={false}>
            <View style={{ padding: 15 }}>
                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>What is narration?</Text>
                <Text style={styles.text}>As the name suggests narration refers to the narrating of the story, it’s simply
                    the narration of the story. We basically use narration to explain what has
                    happened to you, we put our thoughts forward.</Text >

                <Divider marginTop={20} marginBottom={20} />

                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>Parts of Narration sentence</Text>

                <View style={{ display: 'flex', gap: 5, marginTop: 10 }}>
                    <Text style={styles.text}>1. Reported verb</Text>
                    <Text style={styles.text}>2. Reported speech</Text>
                </View>

                <View style={{ display: 'flex', gap: 10, marginTop: 10 }}>
                    <Text style={styles.text}>For example, Rahim said to me,” he wants to eat pizza”.</Text>
                    <Text style={styles.text}>Here in the sentence, Rahim said to me is the reporting verb,</Text>
                    <Text style={styles.text}>And the sentence in inverted commas “he wants to eat pizza” is the reported
                        speech. The reported verb refers to the simple sentence at the starting of the
                        sentence and reported speech refers to the sentence in inverted commas that
                        defines someone else.</Text>
                </View>

                <Divider marginTop={20} marginBottom={20} />

                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>1. Reporting Verb</Text>
                <Text style={styles.text}>The part of the sentence which is not in the inverted commas is called the
                    reported verb.</Text>
                <Text style={[styles.text, { marginTop: 10 }]}>When we change a direct speech into indirect speech then there are 3 types/
                    forms of changes that take place.</Text>

                <View style={{ display: 'flex', gap: 5, marginTop: 10 }}>
                    <Text style={styles.text}>• Change of person</Text>
                    <Text style={styles.text}>• Change of tense and</Text>
                    <Text style={styles.text}>• Change of other parts of speech</Text>
                </View>

                <View style={{ display: 'flex', gap: 10, marginTop: 10 }}>
                    <Text style={styles.text}>For example, He said to me,” he is going to the park”.</Text>
                    <Text style={styles.text}>Here he said to me is reporting verb.</Text>
                </View>

                <Divider marginTop={20} marginBottom={20} />

                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>2. Reporting Speech</Text>
                <Text style={styles.text}>The part of the sentence which is under inverted commas is called reporting speech.</Text>
                <Text style={[styles.text, { marginTop: 10 }]}>The second part of the sentence refers to some other person, universal facts, imaginary parts, historical facts, happening events, etc.</Text>

                <Text style={[styles.text, { marginTop: 10 }]}>For example, Sobuj said to rahim” the sun rises from the east”</Text>

                <Text style={[styles.text, { marginTop: 10 }]}>Here, in the sentence “ sun rises from the east” is the reported speech.</Text>


                <Text style={[styles.text, { marginTop: 20 }]}>Basically, there are two types of speech.</Text>
                <View style={{ display: 'flex', gap: 5, marginTop: 10 }}>
                    <Text style={styles.text}>• Direct speech</Text>
                    <Text style={styles.text}>• Indirect speech</Text>
                </View>

                <Divider marginTop={20} marginBottom={20} />

                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>Direct speech</Text>
                <Text style={styles.text}>It refers to reporting the exact words spoken by the speaker. There is no change in the verb or the sentence.</Text>
                <Text style={[styles.text, { marginTop: 10 }]}>For example, Rahim said to Riya, “go to school”</Text>
                <Text style={[styles.text, { marginTop: 10 }]}>Priya asked Rahim, “where is her bag”?</Text>
                <Text style={[styles.text, { marginTop: 10 }]}>Ratan enquired Raman,” why was he not picking up her call”?</Text>

                <Text style={[styles.heading_lg, { marginTop: 20, marginBottom: 5 }]}>Rules of Direct Speech</Text>
                <View style={{ display: 'flex', gap: 5, marginTop: 10 }}>
                    <Text style={styles.text}>1. Speech should be opened with quotations or inverted commas.</Text>
                    <Text style={styles.text}>2. The word said is used to connect two sentences.</Text>
                    <Text style={styles.text}>3. Reporting clause should be used at the end of the sentence.</Text>
                    <Text style={styles.text}>4. At the end of the sentence full stop should be placed.</Text>
                </View>

                <Divider marginTop={20} marginBottom={20} />

                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>Indirect speech</Text>
                <Text style={styles.text}>It is the speech that tells what someone has said but it does not explain the actual words spoken by the person. It just conveys the basic narration of what is being said.</Text>
                <Text style={[styles.text, { marginTop: 10 }]}>For example, Rahim asked Riya to go to school.</Text>
                <Text style={[styles.text, { marginTop: 10 }]}>Priya asked Rahim where was her bag.</Text>
                <Text style={[styles.text, { marginTop: 10 }]}>Ratan enquired Raman why was he not picking up her call.</Text>

                <Text style={[styles.heading_lg, { marginTop: 20, marginBottom: 5 }]}>Rules of Indirect Speech</Text>
                <View style={{ display: 'flex', gap: 5, marginTop: 10 }}>
                    <Text style={styles.text}>1. Past tense is used when the situation is uncertain</Text>
                    <Text style={styles.text}>2. The present tense of the sentence is changed to the past tense in indirect speech.</Text>
                    <Text style={styles.text}>3. Universal facts tense remains the same.</Text>
                    <Text style={styles.text}>4. The use of the word “that” connects the reported verb and reported speech.</Text>
                </View>

                <Divider marginTop={20} marginBottom={20} />

                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>Difference between Direct Speech and Indirect Speech:</Text>
                <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                    <Row data={['Basic', 'Direct speech', 'Indirect speech']} style={styles.tableHead} textStyle={styles.tableData} />
                    <Row key={1} data={['Definition', 'Direct speech basically refers to what someone has said i.e. the actual words and we also use quotation marks in this.', 'In indirect speech we don\'t use quotation marks rather we use the conjunction “that”.']} textStyle={styles.tableData} />
                    <Row key={2} data={['Examples', 'She said, “ she must go”. \n \n Her mother said, “70 per cent of the earth is covered with water”.', 'She said she should go \n \n Her mother said that seventy per cent of the earth is covered with water.']} style={styles.evenRow} textStyle={styles.tableData} />
                </Table>

                <Divider marginTop={20} marginBottom={20} />

                {/* Rule 2 */}
                <Text style={[styles.heading_lg, { marginBottom: 15 }]}>Summary</Text>
                <Text style={styles.text}>A narrative is told through narration, usually in some sort of chronological
                    order. An example of narration is making up a terrifying ghost story and telling
                    it around a campfire. In general, narration refers to any type of explanation or
                    account of something. Typically, it is used in connection with the narrative.
                    Direct and indirect speech of narration is used to define the words of the speaker
                    to the listener. Just the difference between the two lies in conveying actual
                    words and pirated words, wherein, the actual words are described in direct
                    speech and reporting words in indirect speech. The sentence in inverted commas
                    is direct speech and the sentence not in inverted commas and added with the
                    conjunction is considered indirect speech.</Text>

                <Divider marginTop={20} marginBottom={20} />

                <Text style={[styles.heading_xl, { marginBottom: 15 }]}>Practice Questions:</Text>
                <Text style={styles.heading_md}>Rewrite the following sentence converting from direct speech to indirect speech.</Text>

                <View style={{ display: 'flex', gap: 10, marginTop: 10 }}>
                    <Text style={styles.text}>1. He said to me, “What is your father’s name?”</Text>
                    <Text style={styles.text}>2. Riya said to the shopkeeper, “ What is the price of the item?”</Text>
                    <Text style={styles.text}>3. Rahim said, “How is the weather?”</Text>
                    <Text style={styles.text}>4. Commander said to militarians, “practice well”.</Text>
                    <Text style={styles.text}>5. Honey told her mother, “I am not feeling well”.</Text>
                    <Text style={styles.text}>6. The Doctor said, “Health is wealth”.</Text>
                    <Text style={styles.text}>7. Traffic police said, “Don't rush”.</Text>
                </View>

                <Text style={[styles.heading_lg, { marginTop: 30, marginBottom: 5 }]}>Answers:</Text>
                <View style={{ display: 'flex', gap: 10, marginTop: 10 }}>
                    <Text style={styles.text}>1. He asked me my father’s name.</Text>
                    <Text style={styles.text}>2. Riya asked the shopkeeper about the price of the items.</Text>
                    <Text style={styles.text}>3. Rahim enquired about the weather</Text>
                    <Text style={styles.text}>4. Commander ordered militarians to practice well.</Text>
                    <Text style={styles.text}>5. Honey told to mother that he was not feeling well.</Text>
                    <Text style={styles.text}>6. The Doctor told that health is wealth.</Text>
                    <Text style={styles.text}>7. Traffic police advised the public to not rush.</Text>
                </View>
            </View>
        </ScrollView >
            : <PreLoader />
    )
}



export default Narration