import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native'
// @ts-ignore
import { Table, Row } from 'react-native-table-component';
import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import { FONT, COLORS } from "@/constants";

import PreLoader from '@/components/PreLoader';

const Divider = ({ marginTop = 0, marginBottom = 0, borderColor = '#cccccc' }) => {
    const { colorScheme, theme } = useColorSchemeContext();

    return (
        <View style={{
            height: 1,
            backgroundColor: colorScheme === 'light' ? borderColor : theme.borderColor,
            alignSelf: 'stretch',
            marginTop: marginTop,
            marginBottom: marginBottom,
        }} />
    )
}

const NumberOfRules = ({ rule = '০' }) => {
    return (
        <Text style={{ color: '#01636a', fontWeight: 'bold' }}>Rule {rule + ':'}</Text>
    )
}

// https://www.learngrammar.net/english-grammar/number

const Number = () => {
    const [loading, setLoading] = useState(true);
    const { colorScheme, theme } = useColorSchemeContext();

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 0);
    }, []);

    const styles = StyleSheet.create({
        container: {
            flex: 1
        },
        text: {
            fontSize: 17,
            fontFamily: FONT.regular,
            color: theme.textPrimary
        },
        heading_xl: {
            fontSize: 22,
            fontFamily: FONT.bold,
            color: theme.headingPrimary
        },
        heading_lg: {
            fontSize: 20,
            fontFamily: FONT.bold,
            color: theme.headingPrimary
        },
        heading_md: {
            fontSize: 18,
            fontFamily: FONT.bold,
            color: theme.headingPrimary
        },
        tableHead: { height: 40, backgroundColor: '#f1f8ff', fontFamily: FONT.bold },
        tableData: { height: 20, margin: 6, fontFamily: FONT.medium },
        evenRow: { backgroundColor: '#f2f2f2' }
    })


    return (
        !loading ? <ScrollView style={[styles.container, { backgroundColor: theme.bgPrimary }]} showsVerticalScrollIndicator={false}>
            <View style={{ padding: 15 }}>
                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>Number in English Grammar</Text>
                <Text style={styles.text}>Numbers in grammar refers to the singular and plural contrast between verbs, nouns, pronouns, and determiners. All of the states can be represented in the singular as well as plural form with the help of numbers. The examples and rules given below in the article will give you more appropriate knowledge about the number functions.</Text >
                <Text style={[styles.text, { marginTop: 10 }]}>Numbers in grammar refers to the singular and plural contrast between verbs, nouns, pronouns, and determiners. All of the states can be represented in the singular as well as plural form with the help of numbers. The examples and rules given below in the article will give you more appropriate knowledge about the number functions.</Text >

                <Divider marginTop={20} marginBottom={20} />

                <Text style={[styles.heading_lg, { marginBottom: 10 }]}>Types of Number are:</Text>

                <View style={{ display: 'flex', gap: 5, marginTop: 10 }}>
                    <Text style={styles.text}>1. Singular Number</Text>
                    <Text style={styles.text}>3. Plural Number</Text>
                </View>

                <Divider marginTop={20} marginBottom={20} />

                <Text style={[styles.heading_md, { marginBottom: 10 }]}>1. Singular Number:</Text>
                <Text style={styles.text}>It refers to the count of only one of a noun or pronoun.</Text>
                <Text style={[styles.text, { marginTop: 5 }]}><Text style={{ fontFamily: FONT.bold }}>Example:</Text> pen, table, aunt, father, goose, etc.</Text>


                <Text style={[styles.heading_md, { marginBottom: 10, marginTop: 20 }]}>2. Plural Number:</Text>
                <Text style={styles.text}>It refers to the count of more than one of a noun or pronoun.</Text>
                <Text style={[styles.text, { marginTop: 5 }]}><Text style={{ fontFamily: FONT.bold }}>Example:</Text> pens, tables, aunts, fathers, geese, etc.</Text>

                <Divider marginTop={20} marginBottom={20} />


                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>How to change number</Text>
                <Text style={[styles.text, { marginBottom: 20 }]}>Numerous RULES are there to change the number from singular to plural. They are as follows-</Text>

                {/* Rule 1 */}
                <Text style={styles.text}><NumberOfRules rule={'1'} /> In general “s” is used at the end of a singular noun to make it plural</Text>

                <Text style={[styles.text, { marginTop: 10, marginBottom: 10 }]}>Example:</Text>
                <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                    <Row data={['Singular', 'plural']} style={styles.tableHead} textStyle={styles.tableData} />
                    <Row key={1} data={['Pencil', 'Pencils']} textStyle={styles.tableData} />
                    <Row key={2} data={['Cow', 'Cows']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={3} data={['House', 'Houses']} textStyle={styles.tableData} />
                    <Row key={4} data={['Dog', 'Dogs']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={5} data={['Mobile', 'Mobiles']} textStyle={styles.tableData} />
                    <Row key={6} data={['Table', 'Tables']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={7} data={['Pen', 'Pens']} textStyle={styles.tableData} />
                </Table>

                {/* Rule 2 */}
                <Text style={[styles.text, { marginTop: 30, marginBottom: 10 }]}><NumberOfRules rule={'2'} /> If  there exist s, sh, ch, x and z in the end, “es” gets to be used.</Text>

                <Text style={[styles.text, { marginTop: 10, marginBottom: 10 }]}>Example:</Text>
                <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                    <Row data={['Singular', 'plural']} style={styles.tableHead} textStyle={styles.tableData} />
                    <Row key={1} data={['Bus', 'Buses']} textStyle={styles.tableData} />
                    <Row key={2} data={['Dish', 'Dishes']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={3} data={['Branch', 'Branches']} textStyle={styles.tableData} />
                    <Row key={4} data={['Fox', 'Foxes']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={5} data={['Fez', 'Fezes']} textStyle={styles.tableData} />
                </Table>

                {/* Rule 3 */}
                <Text style={[styles.text, { marginTop: 30, marginBottom: 10 }]}><NumberOfRules rule={'3'} /> While  pronunciation of ch is like “k”, just “s” is added at the end.</Text>

                <Text style={[styles.text, { marginTop: 10, marginBottom: 10 }]}>Example:</Text>
                <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                    <Row data={['Singular', 'plural']} style={styles.tableHead} textStyle={styles.tableData} />
                    <Row key={1} data={['Monarch', 'Monarchs']} textStyle={styles.tableData} />
                    <Row key={2} data={['Patriarch', 'Patriarchs']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={3} data={['Matriarch', 'Matriarchs']} textStyle={styles.tableData} />
                    <Row key={4} data={['Stomach', 'Stomachs']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={5} data={['Hierarch', 'Hierarchs']} textStyle={styles.tableData} />
                </Table>

                <Text style={[styles.text, { marginTop: 15, marginBottom: 10 }]}><Text style={{ fontFamily: FONT.bold }}>Part 1:</Text> when there’s a “y” in the end  and a Consonant before that “y”, “i” substitutes it  and an “es” thereafter.</Text>

                <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                    <Row data={['Singular', 'plural']} style={styles.tableHead} textStyle={styles.tableData} />
                    <Row key={1} data={['Story', 'Stories']} textStyle={styles.tableData} />
                    <Row key={2} data={['Hobby', 'Hobbies']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={3} data={['Army', 'Armies']} textStyle={styles.tableData} />
                    <Row key={4} data={['Fly', 'Flies']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={5} data={['Baby', 'Babies']} textStyle={styles.tableData} />
                </Table>

                <Text style={[styles.text, { marginTop: 15, marginBottom: 10 }]}><Text style={{ fontFamily: FONT.bold }}>Part 2:</Text> but if there’s a vowel ahead of  that “y”, no need to change it, only “s” to add.</Text>

                <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                    <Row data={['Singular', 'plural']} style={styles.tableHead} textStyle={styles.tableData} />
                    <Row key={1} data={['Donkey', 'Donkeys']} textStyle={styles.tableData} />
                    <Row key={2} data={['Toy', 'Toys']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={3} data={['Day', 'Days']} textStyle={styles.tableData} />
                    <Row key={4} data={['Joy', 'Joys']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={5} data={['Play', 'Plays']} textStyle={styles.tableData} />
                </Table>


                {/* Rule 4 */}
                <Text style={[styles.text, { marginTop: 30, marginBottom: 10 }]}><NumberOfRules rule={'4'} /> “v” replaces f or fe and then adds an “es” to finish it.</Text>

                <Text style={[styles.text, { marginTop: 10, marginBottom: 10 }]}>Example:</Text>
                <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                    <Row data={['Singular', 'plural']} style={styles.tableHead} textStyle={styles.tableData} />
                    <Row key={1} data={['thief', 'Thieves']} textStyle={styles.tableData} />
                    <Row key={2} data={['Wife', 'Wives']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={3} data={['Knife', 'Knives']} textStyle={styles.tableData} />
                    <Row key={4} data={['Wolf', 'Wolves']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={5} data={['Leaf', 'Leaves']} textStyle={styles.tableData} />
                </Table>

                <Text style={[styles.text, { marginTop: 15, marginBottom: 10 }]}><Text style={{ fontFamily: FONT.bold }}>Part 1:</Text> “es” to be added if the noun is finished by “o” and a consonant places ahead.</Text>

                <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                    <Row data={['Singular', 'plural']} style={styles.tableHead} textStyle={styles.tableData} />
                    <Row key={1} data={['Hero', 'Heroes']} textStyle={styles.tableData} />
                    <Row key={2} data={['Mango', 'Mangoes']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={3} data={['Zero', 'Zeroes']} textStyle={styles.tableData} />
                    <Row key={4} data={['Potato', 'Potatoes']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={5} data={['Echo', 'Echoes']} textStyle={styles.tableData} />
                </Table>

                <Text style={[styles.text, { marginTop: 15, marginBottom: 10 }]}><Text style={{ fontFamily: FONT.bold }}>Part 2:</Text> but when there’s a vowel before that “o”, only “s” is enough.</Text>

                <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                    <Row data={['Singular', 'plural']} style={styles.tableHead} textStyle={styles.tableData} />
                    <Row key={1} data={['Cuckoo', 'Cuckoos']} textStyle={styles.tableData} />
                    <Row key={2} data={['Bamboo', 'Bamboos']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={3} data={['Studio', 'Studios']} textStyle={styles.tableData} />
                    <Row key={4} data={['Portfolio', 'Portfolios']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={5} data={['Cameo', 'Cameos']} textStyle={styles.tableData} />
                </Table>

                <Text style={[styles.text, { marginTop: 15, marginBottom: 10 }]}><Text style={{ fontFamily: FONT.bold }}>Exception 1:</Text>  though there’s an “o” and a consonant ahead of  it, some nouns use only “s”.</Text>

                <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                    <Row data={['Singular', 'plural']} style={styles.tableHead} textStyle={styles.tableData} />
                    <Row key={1} data={['Photo', 'Photos']} textStyle={styles.tableData} />
                    <Row key={2} data={['Piano', 'Pianos']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={3} data={['Radio', 'Radios']} textStyle={styles.tableData} />
                    <Row key={4} data={['Canto', 'Cantos']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={5} data={['Memo', 'Memos']} textStyle={styles.tableData} />
                </Table>

                <Text style={[styles.text, { marginTop: 15, marginBottom: 10 }]}><Text style={{ fontFamily: FONT.bold }}>Exception 2:</Text> for some, “s” and “es” both are correct.</Text>

                <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                    <Row data={['Singular', 'plural']} style={styles.tableHead} textStyle={styles.tableData} />
                    <Row key={1} data={['Mosquito', 'Mosquitos/mosquitoes']} textStyle={styles.tableData} />
                    <Row key={2} data={['Commando', 'Commandos/commandoes']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={3} data={['Portico', 'Porticos/porticoes']} textStyle={styles.tableData} />
                    <Row key={4} data={['Calico', 'Calicos/calicoes']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={5} data={['Memento', 'Mementos/mementoes']} textStyle={styles.tableData} />
                </Table>

                {/* Rule 5 */}
                <Text style={[styles.text, { marginTop: 30, marginBottom: 10 }]}><NumberOfRules rule={'5'} /> Some require changing the middle-vowel of the word to make it plural.</Text>

                <Text style={[styles.text, { marginTop: 10, marginBottom: 10 }]}>Example:</Text>
                <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                    <Row data={['Singular', 'Plural']} style={styles.tableHead} textStyle={styles.tableData} />
                    <Row key={1} data={['Man', 'Men']} textStyle={styles.tableData} />
                    <Row key={2} data={['Woman', 'Women']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={3} data={['Foot', 'Feet']} textStyle={styles.tableData} />
                    <Row key={4} data={['Mouse', 'Mice']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={5} data={['Tooth', 'Teeth']} textStyle={styles.tableData} />
                </Table>

                {/* Rule 6 */}
                <Text style={[styles.text, { marginTop: 30, marginBottom: 10 }]}><NumberOfRules rule={'7'} /> Some  require en, ren and ne to add at last.</Text>

                <Text style={[styles.text, { marginTop: 10, marginBottom: 10 }]}>Example:</Text>
                <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                    <Row data={['Singular', 'Plural']} style={styles.tableHead} textStyle={styles.tableData} />
                    <Row key={1} data={['Ox', 'Oxen']} textStyle={styles.tableData} />
                    <Row key={2} data={['Child', 'Children']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={3} data={['Brother', 'Brethren (brothers also correct)']} textStyle={styles.tableData} />
                    <Row key={4} data={['Cow', 'Kine (cows also correct)']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={5} data={['Sister', 'Sistren (sisters also correct)']} textStyle={styles.tableData} />
                </Table>

                <Text style={[styles.text, { marginTop: 15, marginBottom: 10 }]}><Text style={{ fontFamily: FONT.bold }}>Part 1:</Text>  if “man” means human being in a compound noun(a  noun that contains two or more words that jointly make a single noun), “men”replaces that “man”.</Text>

                <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                    <Row data={['Singular', 'plural']} style={styles.tableHead} textStyle={styles.tableData} />
                    <Row key={1} data={['Fisherman', 'Fishermen']} textStyle={styles.tableData} />
                    <Row key={2} data={['Workman', 'Workmen']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={3} data={['Boatman', 'Boatmen']} textStyle={styles.tableData} />
                    <Row key={4} data={['Man-of-war', 'Men-of-war']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={5} data={['Salesman', 'salesmen']} textStyle={styles.tableData} />
                </Table>

                <Text style={[styles.text, { marginTop: 15, marginBottom: 10 }]}><Text style={{ fontFamily: FONT.bold }}>Part 2:</Text> but when “man” is just a part of the word, or it  refers to any ethnic group, race or civilian, there comes “s”.</Text>

                <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                    <Row data={['Singular', 'plural']} style={styles.tableHead} textStyle={styles.tableData} />
                    <Row key={1} data={['Mussalman', 'Mussalmans']} textStyle={styles.tableData} />
                    <Row key={2} data={['Brahman', 'Brahmans']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={3} data={['German', 'Germans']} textStyle={styles.tableData} />
                    <Row key={5} data={['Norman', 'Normans']} style={styles.evenRow} textStyle={styles.tableData} />
                </Table>


                {/* Rule 7 */}
                <Text style={[styles.text, { marginTop: 30, marginBottom: 10 }]}><NumberOfRules rule={'7'} /> “s” to be added when there’s a “ful” in the end.</Text>

                <Text style={[styles.text, { marginTop: 10, marginBottom: 10 }]}>Example:</Text>
                <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                    <Row data={['Singular', 'Plural']} style={styles.tableHead} textStyle={styles.tableData} />
                    <Row key={1} data={['Handful', 'Handfuls']} textStyle={styles.tableData} />
                    <Row key={2} data={['Mouthful', 'mouthfuls']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={3} data={['Spoonful', 'Spoonfuls']} textStyle={styles.tableData} />
                    <Row key={4} data={['Armful', 'Armfuls']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={5} data={['cupful', 'cupfuls']} textStyle={styles.tableData} />
                </Table>

                <Text style={[styles.text, { marginTop: 15, marginBottom: 10 }]}><Text style={{ fontFamily: FONT.bold }}>Part 1:</Text> If compound noun contains several words,  “s” comes to join  with the main part of that noun.</Text>

                <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                    <Row data={['Singular', 'plural']} style={styles.tableHead} textStyle={styles.tableData} />
                    <Row key={1} data={['Brother-in-law', 'Brothers-in-law']} textStyle={styles.tableData} />
                    <Row key={2} data={['Passers-by', 'Passers-by']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={3} data={['Step-brother', 'Step-brothers']} textStyle={styles.tableData} />
                    <Row key={5} data={['Commander-in-chief', 'Commanders-in-chief']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={6} data={['Maid-servant', 'Maid-servants']} textStyle={styles.tableData} />
                </Table>

                <Text style={[styles.text, { marginTop: 15, marginBottom: 10 }]}><Text style={{ fontFamily: FONT.bold }}>Part 2:</Text> in some cases,“s”comes in every part to make it so.</Text>

                <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                    <Row data={['Singular', 'plural']} style={styles.tableHead} textStyle={styles.tableData} />
                    <Row key={1} data={['Lord-justice', 'Lords-justices']} textStyle={styles.tableData} />
                    <Row key={2} data={['Man-servant', 'Men-servants']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={3} data={['Woman-servant', 'Women-servants']} textStyle={styles.tableData} />
                </Table>

                {/* Rule 8 */}
                <Text style={[styles.text, { marginTop: 30, marginBottom: 10 }]}><NumberOfRules rule={'8'} /> Besides, adding “s” only  in the end gets it done for few.</Text>

                <Text style={[styles.text, { marginTop: 10, marginBottom: 10 }]}>Example:</Text>
                <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                    <Row data={['Singular', 'Plural']} style={styles.tableHead} textStyle={styles.tableData} />
                    <Row key={1} data={['Book-shelf', 'Book-shelves']} textStyle={styles.tableData} />
                    <Row key={2} data={['Book-case', 'Book-cases']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={3} data={['Major-general', 'Major-generals']} textStyle={styles.tableData} />
                    <Row key={4} data={['Poet-laurete', 'Poet-lauretes']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={5} data={['Forget-me-not', 'Forget-me-nots']} textStyle={styles.tableData} />
                </Table>

                {/* Rule 9 */}
                <Text style={[styles.text, { marginTop: 30, marginBottom: 10 }]}><NumberOfRules rule={'9'} /> Some singular nouns have no plural form, only used in singular.</Text>

                <Text style={[styles.text, { marginTop: 10, marginBottom: 10 }]}>Example:</Text>
                <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                    <Row key={1} data={['Furniture']} textStyle={styles.tableData} />
                    <Row key={2} data={['Scenery']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={3} data={['Issue']} textStyle={styles.tableData} />
                    <Row key={4} data={['Bread']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={5} data={['expenditure']} textStyle={styles.tableData} />
                </Table>

                {/* Rule 10 */}
                <Text style={[styles.text, { marginTop: 30, marginBottom: 10 }]}><NumberOfRules rule={'10'} /> Adversely, some  are always used as a plural form.</Text>

                <Text style={[styles.text, { marginTop: 10, marginBottom: 10 }]}>Example:</Text>
                <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                    <Row key={1} data={['Mumps']} textStyle={styles.tableData} />
                    <Row key={2} data={['Scissors']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={3} data={['Trousers']} textStyle={styles.tableData} />
                    <Row key={4} data={['Spectacles']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={5} data={['Assets']} textStyle={styles.tableData} />
                </Table>

                {/* Rule 11 */}
                <Text style={[styles.text, { marginTop: 30, marginBottom: 10 }]}><NumberOfRules rule={'11'} /> Though some nouns seem like singular, but actually they are plural.</Text>

                <Text style={[styles.text, { marginTop: 10, marginBottom: 10 }]}>Example:</Text>
                <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                    <Row key={1} data={['Government']} textStyle={styles.tableData} />
                    <Row key={2} data={['Peasantry']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={3} data={['People']} textStyle={styles.tableData} />
                    <Row key={4} data={['Cattle']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={5} data={['Mankind']} textStyle={styles.tableData} />
                </Table>

                {/* Rule 12 */}
                <Text style={[styles.text, { marginTop: 30, marginBottom: 10 }]}><NumberOfRules rule={'12'} /> Similarly, some nouns seem like plural though they are singular.</Text>

                <Text style={[styles.text, { marginTop: 10, marginBottom: 10 }]}>Example:</Text>
                <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                    <Row key={1} data={['Physics']} textStyle={styles.tableData} />
                    <Row key={2} data={['Politics']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={3} data={['Ethics']} textStyle={styles.tableData} />
                    <Row key={4} data={['News']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={5} data={['Wages']} textStyle={styles.tableData} />
                </Table>

                {/* Rule 13 */}
                <Text style={[styles.text, { marginTop: 30, marginBottom: 10 }]}><NumberOfRules rule={'13'} /> Some have the same singular and plural form.</Text>

                <Text style={[styles.text, { marginTop: 10, marginBottom: 10 }]}>Example:</Text>
                <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                    <Row key={1} data={['Deer']} textStyle={styles.tableData} />
                    <Row key={2} data={['Sheep']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={3} data={['Species']} textStyle={styles.tableData} />
                    <Row key={4} data={['Corps']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={5} data={['Canon']} textStyle={styles.tableData} />
                </Table>

                {/* Rule 14 */}
                <Text style={[styles.text, { marginTop: 30, marginBottom: 10 }]}><NumberOfRules rule={'14'} /> In case of letters, numbers and other symbols, it takes an apostrophe and s to change it.</Text>

                <Text style={[styles.text, { marginTop: 10, marginBottom: 10 }]}>Example:</Text>
                <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                    <Row key={1} data={['Sam, write your g’s and y’s clearly.']} textStyle={styles.tableData} />
                    <Row key={2} data={['John, add two 5’s and three 8’s.']} style={styles.evenRow} textStyle={styles.tableData} />
                </Table>

                {/* Rule 15 */}
                <Text style={[styles.text, { marginTop: 30, marginBottom: 10 }]}><NumberOfRules rule={'15'} /> There is no specific rule for changing the number of pronouns. It’s all about memorizing.</Text>

                <Text style={[styles.text, { marginTop: 10, marginBottom: 10 }]}>Example:</Text>
                <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                    <Row data={['Singular', 'Plural', 'Singular', 'Plural']} style={styles.tableHead} textStyle={styles.tableData} />
                    <Row key={1} data={['I', 'We', 'Him/her', 'Them']} textStyle={styles.tableData} />
                    <Row key={2} data={['My', 'Our', 'Your', 'Your']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={3} data={['Mine', 'Ours', 'This', 'These']} textStyle={styles.tableData} />
                    <Row key={4} data={['Me', 'Us', 'That', 'Those']} style={styles.evenRow} textStyle={styles.tableData} />
                    <Row key={5} data={['You', 'You', 'It', 'They']} textStyle={styles.tableData} />
                    <Row key={6} data={['He/she', 'they', 'His/her', 'their']} style={styles.evenRow} textStyle={styles.tableData} />
                </Table>
            </View>
        </ScrollView>
            : <PreLoader />
    )
}



export default Number