import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import { FONT, COLORS } from "@/constants";
import { Table, Row } from 'react-native-table-component';

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

const ExampleComponent = () => {
    return (
        <Text style={[styles.heading_md, { marginTop: 10, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>যেমন:</Text>
    )
}

// https://www.careerpower.in/articles-in-english-grammar.html

const Articles = () => {
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
        tableHead: { height: 40, backgroundColor: COLORS.primary, fontFamily: FONT.bold },
        tableData: { margin: 6, fontFamily: FONT.regular, color: theme.textSecondary },
        evenRow: { backgroundColor: '#f2f2f2' }
    })


    return (
        !loading ? <ScrollView style={[styles.container, { backgroundColor: theme.bgPrimary }]} showsVerticalScrollIndicator={false}>
            <View style={{ padding: 15 }}>
                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>Definition of Articles:</Text>
                <Text style={styles.text}>Articles are very important words in English and so is their knowledge. Articles in English are used before the noun to limit or define the uses of the noun in the context of the sentences. They impart effectiveness and accuracy to the nouns. In fact, articles are used as demonstrative adjectives and determiners before nouns. Articles also help indicate whether a noun is definite (referring to a specific or known item) or indefinite (referring to a non-specific or generic item).</Text >

                {/* <View style={{ backgroundColor: '#d8efef', padding: 10, marginTop: 20 }}>
                <Text style={styles.text}>Note: Person সব সময় কোনো প্রাণী বা বস্তুকে নির্দেশ করবে। আর Person-এর Parts of Speech হবে Noun অথবা Pronoun.</Text>
            </View> */}

                <Divider marginTop={20} marginBottom={20} />

                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>Types of Articles:</Text>
                <Text style={styles.text}>In English Grammar, Articles are of two types:</Text>

                <View style={{ display: 'flex', gap: 5, marginTop: 10 }}>
                    <Text style={styles.text}>1. Indefinite Article (A, An)</Text>
                    <Text style={styles.text}>2. Definite Article (The)</Text>
                </View>

                <Divider marginTop={20} marginBottom={20} />

                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>1. Indefinite Article</Text>
                <Text style={styles.text}>Indefinite articles are articles as the name suggests denote something which not definite or specific. “A or An” is the Indefinite Articles, they are called indefinite articles because it usually leaves indefinite the person or thing is spoken of, such as A doctor (which means any doctor). </Text>

                <Text style={[styles.text, { marginTop: 10 }]}>The indefinite article is used before singular countable nouns, for eg, A book, An orange, and A girl.</Text>

                <Text style={[styles.heading_xl, { marginBottom: 10, marginTop: 20 }]}>2. Definite Article</Text>
                <Text style={styles.text}>Definite articles are articles that denote something which is definite or specific. “The” is the definite articles, they are called definite articles because it normally points out some particular person or thing, For e.g., He saw the doctor (that means he saw some particular doctor.)</Text>

                <Text style={[styles.text, { marginVertical: 10 }]}>The definite article is used before singular countable nouns, plural countable nouns, and uncountable nouns, e.g., The book, the books, the milk.</Text>

                <Table borderStyle={{ borderWidth: 1, borderColor: colorScheme === 'light' ? '#C1C0B9' : theme.borderColor }}>
                    <Row data={['Indefinite Article	', 'Definite Article']} style={styles.tableHead} textStyle={[styles.tableData, { fontFamily: FONT.medium }]} />
                    <Row key={1} data={['Indefinite articles are articles as the name suggests denote something which not definite or specific.', 'Definite articles are the articles that denote something which is definite or specific.']} style={{ backgroundColor: theme.bgSecondary, alignItems: 'flex-start' }} textStyle={styles.tableData} />
                    <Row key={2} data={['“A or An” is the Indefinite article.', '“The” is the definite article.']} style={{ backgroundColor: theme.bgSecondary, alignItems: 'flex-start' }} textStyle={styles.tableData} />
                    <Row key={3} data={['The indefinite article is used before singular countable nouns.', 'The definite article is used before singular countable nouns, plural countable nouns, and uncountable nouns.']} style={{ backgroundColor: theme.bgSecondary, alignItems: 'flex-start' }} textStyle={styles.tableData} />
                </Table>

                <Divider marginTop={20} marginBottom={20} />

                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>Uses of ‘A’ and ‘An’ </Text>
                <Text style={styles.text}>The Indefinite Articles ‘A’ and ‘And’ are used -</Text>

                <View style={{ display: 'flex', gap: 10, marginBottom: 15, marginTop: 10 }}>
                    <Text style={styles.text}>1. ‘A’ is used before a word beginning with a consonant and with a vowel giving the sound of a consonant whereas the indefinite article ‘An’ is used before a word beginning with a vowel and with a mute ‘h’.</Text>
                    <Text style={styles.text}>2. When we talk of a thing or a person that is indefinite or that is mentioned for the first time we use indefinite articles</Text>
                    <Text style={styles.text}>3. Used to express class(in the sense of ‘any’).</Text>
                    <Text style={styles.text}>4. Help to make a common noun a proper noun to express quality.</Text>
                    <Text style={styles.text}>5. Used in the certain expression of quantity with certain numbers and expressions of ‘Price/Rate, speed, ratio’.</Text>
                    <Text style={styles.text}>6. Used for exclamation with ‘What’ or ‘How’ before singular countable nouns.</Text>
                    <Text style={styles.text}>7. Used before a person not known to the speaker.</Text>
                    <Text style={styles.text}>8. Usually used in the following adverbs: ‘Rather, very, much, quite, so, too, such, as’.</Text>
                    <Text style={styles.text}>9. Used before the verbs used as nouns.</Text>
                    <Text style={styles.text}>10. Used before adjectives ‘little’ and ‘few’ to give a sense of ‘some’.</Text>
                </View>

                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>Examples of ‘A’ and ‘An’</Text>
                <Text style={styles.text}>Examples of Indefinite Articles are:</Text>

                <Text style={[styles.text, { marginTop: 15, marginBottom: 10 }]}>1. Indefinite Article ‘A’ is used before a word beginning with a consonant and with a vowel giving the sound of a consonant whereas the indefinite article ‘An’ is used before a word beginning with a vowel, with a mute ‘h’, with a consonant pronounced with the sound of a vowel.</Text>
                <Text style={styles.text}>You must note that ‘A’ and ‘An, is primarily determined by the sound.</Text>

                <View style={{ borderWidth: 1, borderColor: colorScheme === 'light' ? '#C1C0B9' : theme.borderColor, marginTop: 10 }}>
                    <View style={{ backgroundColor: COLORS.primary, padding: 10 }}>
                        <Text style={styles.text}>‘A’ is used before a word beginning	</Text>
                    </View>
                    <View style={{ padding: 10, display: 'flex', gap: 15 }}>
                        <Text style={styles.text}>• <Text style={{ fontFamily: FONT.bold }}>With a consonant,</Text> For Example- A boy, A child, A student, A book etc.</Text>
                        <Text style={styles.text}>• <Text style={{ fontFamily: FONT.bold }}>With a vowel giving the sound of a consonant,</Text> For Example- a one-eyed man, a university student,</Text>
                    </View>
                </View>

                <View style={{ borderWidth: 1, borderColor: colorScheme === 'light' ? '#C1C0B9' : theme.borderColor, marginTop: 10, marginBottom: 30 }}>
                    <View style={{ backgroundColor: COLORS.primary, padding: 10 }}>
                        <Text style={styles.text}> ‘An’ is used before a word beginning</Text>
                    </View>
                    <View style={{ padding: 10, display: 'flex', gap: 15 }}>
                        <Text style={styles.text}>• <Text style={{ fontFamily: FONT.bold }}>With a vowel,</Text> For Example- an elephant, an apple, an ass, an umbrella, etc.</Text>
                        <Text style={styles.text}>• <Text style={{ fontFamily: FONT.bold }}>With a mute ‘h’,</Text> For Example- an hour, an heir, an honorable person, an honest man, etc.</Text>
                        <Text style={styles.text}>• <Text style={{ fontFamily: FONT.bold }}>With a consonant pronounced with the sound of a vowel,</Text> For Example- An LL.B. student, An M.P., An M.L.A., An S.P., etc.</Text>
                    </View>
                </View>

                <Text style={styles.text}>2. Indefinite articles are used when we talk of a thing or a person that is indefinite or that is mentioned for the first time.</Text>

                <Text style={[styles.heading_md, { marginTop: 10, marginBottom: 5, color: '#01636a' }]}>For Example-</Text>
                <View style={{ display: 'flex', gap: 5, marginLeft: 20, marginBottom: 30 }}>
                    <Text style={styles.text}>• Twelve inches make a foot.</Text>
                    <Text style={styles.text}>• Not a word was said.</Text>
                    <Text style={styles.text}>• A bird in the hands is worth two in the bush.</Text>
                </View>

                <Text style={styles.text}>3. Indefinite articles are also used to express class(in the sense of ‘any’).</Text>

                <Text style={[styles.heading_md, { marginTop: 10, marginBottom: 5, color: '#01636a' }]}>For Example-</Text>
                <View style={{ display: 'flex', gap: 5, marginLeft: 20, marginBottom: 30 }}>
                    <Text style={styles.text}>• A cow is a useful animal.</Text>
                    <Text style={styles.text}>• A beggar cannot be a chooser.</Text>
                    <Text style={styles.text}>• A rose is a beautiful flower.</Text>
                </View>


                <Text style={styles.text}>4. Indefinite articles are also used to make a common noun a proper noun to express quality.</Text>

                <Text style={[styles.heading_md, { marginTop: 10, marginBottom: 5, color: '#01636a' }]}>For Example-</Text>
                <View style={{ display: 'flex', gap: 5, marginLeft: 20, marginBottom: 30 }}>
                    <Text style={styles.text}>• A Shylock is living in my neighborhood. (a cruel miser)</Text>
                    <Text style={styles.text}>• He is a Vikramaditya known for his fairness. (a just man)</Text>
                    <Text style={styles.text}>• A Daniel comes to judgment (a very wise man)</Text>
                </View>


                <Text style={styles.text}>5. Indefinite articles are also used in the certain expression of quantity with certain numbers and expressions of ‘Price/Rate, speed, ratio’.</Text>

                <Text style={[styles.heading_md, { marginTop: 10, marginBottom: 5, color: '#01636a' }]}>For Example-</Text>
                <View style={{ display: 'flex', gap: 5, marginLeft: 20, marginBottom: 30 }}>
                    <Text style={styles.text}>• Rupees ten a kilo.</Text>
                    <Text style={styles.text}>• A dozen of mangoes.</Text>
                    <Text style={styles.text}>• Half a dozen.</Text>
                </View>


                <Text style={styles.text}>6. Indefinite articles are also used for exclamation with ‘What’ or ‘How’ before singular countable nouns.</Text>

                <Text style={[styles.heading_md, { marginTop: 10, marginBottom: 5, color: '#01636a' }]}>For Example-</Text>
                <View style={{ display: 'flex', gap: 5, marginLeft: 20, marginBottom: 30 }}>
                    <Text style={styles.text}>• What a hot day!</Text>
                    <Text style={styles.text}>• What a pretty girl!</Text>
                    <Text style={styles.text}>• What a naughty child!</Text>
                    <Text style={styles.text}>• How fine a day!</Text>
                </View>


                <Text style={styles.text}>7. Indefinite articles are also used before a person is not known to the speaker.</Text>

                <Text style={[styles.heading_md, { marginTop: 10, marginBottom: 5, color: '#01636a' }]}>For Example-</Text>
                <View style={{ display: 'flex', gap: 5, marginLeft: 20, marginBottom: 30 }}>
                    <Text style={styles.text}>• A Mr. Gupta = Some Mr. Gupta</Text>
                    <Text style={styles.text}>• A Mrs. Sharma = Some Mrs. Sharma</Text>
                </View>


                <Text style={styles.text}>8. Indefinite articles are also used in the following adverbs: ‘Rather, very, much, quite, so, too, such, as’. </Text>

                <Text style={[styles.heading_md, { marginTop: 10, marginBottom: 5, color: '#01636a' }]}>For Example-</Text>
                <View style={{ display: 'flex', gap: 5, marginLeft: 20, marginBottom: 30 }}>
                    <Text style={styles.text}>• It is rather a nuisance.</Text>
                    <Text style={styles.text}>• It is rather a good step.</Text>
                    <Text style={styles.text}>• He is a very good person.</Text>
                    <Text style={styles.text}>• He is a much-hated character.</Text>
                    <Text style={styles.text}>• He is such a nice man that everybody like him.</Text>
                </View>

                <Text style={styles.text}>9. Indefinite articles are also used before the verbs used as nouns.</Text>

                <Text style={[styles.heading_md, { marginTop: 10, marginBottom: 5, color: '#01636a' }]}>For Example-</Text>
                <View style={{ display: 'flex', gap: 5, marginLeft: 20, marginBottom: 30 }}>
                    <Text style={styles.text}>• For a swim.</Text>
                    <Text style={styles.text}>• For a talk.</Text>
                    <Text style={styles.text}>• For a visit.</Text>
                    <Text style={styles.text}>• For a walk.</Text>
                    <Text style={styles.text}>• For a rest.</Text>
                </View>

                <Text style={styles.text}>10. Indefinite articles are also used before adjectives ‘little’ and ‘few’ to give a sense of ‘some’.</Text>

                <Text style={[styles.text, { marginTop: 15, marginBottom: 5 }]}>A little- Some(Quantity) and A few- Some (Number)</Text>

                <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#01636a' }]}>For Example-</Text>
                <View style={{ display: 'flex', gap: 5, marginLeft: 20 }}>
                    <Text style={styles.text}>• I have little money to buy a house.</Text>
                    <Text style={styles.text}>• There are few boys in the class.</Text>
                    <Text style={styles.text}>• I met a few students at the university.</Text>
                    <Text style={styles.text}>• Please give me a little sugar.</Text>
                </View>



                <Divider marginTop={20} marginBottom={20} />

                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>Uses of ‘The’</Text>
                <Text style={styles.text}>The Definite Article is used -</Text>

                <View style={{ display: 'flex', gap: 10, marginBottom: 15, marginTop: 10 }}>
                    <Text style={styles.text}>1. When we talk about a particular person or thing, or one already referred to.</Text>
                    <Text style={styles.text}>2.When a singular noun is meant to represent a whole class.</Text>
                    <Text style={styles.text}>3. Before some proper names.</Text>
                    <Text style={styles.text}>4. Before the names of certain books.</Text>
                    <Text style={styles.text}>5. Before names of thing unique of their kinds.</Text>
                    <Text style={styles.text}>6. Before a proper noun when it is qualified by an adjective or a defining adjectival.</Text>
                    <Text style={styles.text}>7. With superlatives.</Text>
                    <Text style={styles.text}>8. With ordinals.</Text>
                    <Text style={styles.text}>9. Before musical instruments.</Text>
                    <Text style={styles.text}>10. Before an adjective when the noun is understood.</Text>
                </View>

                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>Examples of ‘The’</Text>
                <Text style={styles.text}>The examples of definite article are-</Text>



                <Text style={styles.text}>1. When we talk about a particular person or thing, or one already referred to.</Text>

                <Text style={[styles.heading_md, { marginTop: 10, marginBottom: 5, color: '#01636a' }]}>For Example-</Text>
                <View style={{ display: 'flex', gap: 5, marginLeft: 20, marginBottom: 30 }}>
                    <Text style={styles.text}>• The book you want is out of print.</Text>
                    <Text style={styles.text}>• Let's go to the park.</Text>
                    <Text style={styles.text}>• The girl cried.</Text>
                </View>


                <Text style={styles.text}>2. When a singular noun is meant to represent a whole class.</Text>

                <Text style={[styles.heading_md, { marginTop: 10, marginBottom: 5, color: '#01636a' }]}>For Example-</Text>
                <View style={{ display: 'flex', gap: 5, marginLeft: 20, marginBottom: 30 }}>
                    <Text style={styles.text}>• The cow is a useful animal.</Text>
                    <Text style={styles.text}>• The horse is a Noble animal.</Text>
                    <Text style={styles.text}>• The cat loves comfort.</Text>
                    <Text style={styles.text}>• The rose is the sweetest of all flowers.</Text>
                </View>


                <Text style={styles.text}>3. Before some proper names.</Text>

                <Text style={[styles.heading_md, { marginTop: 10, marginBottom: 5, color: '#01636a' }]}>For Example-</Text>
                <View style={{ display: 'flex', gap: 5, marginLeft: 20, marginBottom: 30 }}>
                    <Text style={styles.text}>• Oceans and seas e.g. The pacific, The black sea.</Text>
                    <Text style={styles.text}>• Rivers e.g. The ganga, The Nile</Text>
                    <Text style={styles.text}>• Canals, e.g. The Suez Canal.</Text>
                    <Text style={styles.text}>• Deserts, e.g. The Sahara</Text>
                    <Text style={styles.text}>• The group of Islands e.g. The West Indies</Text>
                    <Text style={styles.text}>• Mountain ranges e.g. The Himalayas, The Alps</Text>
                </View>


                <Text style={styles.text}>4. Before the names of certain books.</Text>
                <Text style={[styles.text, { marginTop: 15, marginBottom: 5 }]}>For example-The Vedas, The Puranas, The Ramayana.</Text>


                <Text style={styles.text}>5. Before names of things unique of their kinds.</Text>
                <Text style={[styles.text, { marginTop: 15, marginBottom: 5 }]}>For example- The Sun, The Sky, The Ocean, The Sea, The earth.</Text>


                <Text style={styles.text}>6. Before a proper noun when it is qualified by an adjective or a defining adjectival.</Text>

                <Text style={[styles.heading_md, { marginTop: 10, marginBottom: 5, color: '#01636a' }]}>For Example-</Text>
                <View style={{ display: 'flex', gap: 5, marginLeft: 20, marginBottom: 30 }}>
                    <Text style={styles.text}>• The great Caesar: the immortal Shakespeare.</Text>
                    <Text style={styles.text}>• The Mr. Roy whom you met last night is my uncle.</Text>
                </View>


                <Text style={styles.text}>7. With superlatives.</Text>

                <Text style={[styles.heading_md, { marginTop: 10, marginBottom: 5, color: '#01636a' }]}>For Example-</Text>
                <View style={{ display: 'flex', gap: 5, marginLeft: 20, marginBottom: 30 }}>
                    <Text style={styles.text}>• The darkest cloud has a silver lining.</Text>
                    <Text style={styles.text}>• This is the best book on elementary chemistry.</Text>
                </View>


                <Text style={styles.text}>8. With ordinals.</Text>

                <Text style={[styles.heading_md, { marginTop: 10, marginBottom: 5, color: '#01636a' }]}>For Example-</Text>
                <View style={{ display: 'flex', gap: 5, marginLeft: 20, marginBottom: 30 }}>
                    <Text style={styles.text}>• He was the first man to arrive.</Text>
                    <Text style={styles.text}>• The ninth chapter of the book is very interesting.</Text>
                </View>


                <Text style={styles.text}>9. Before musical instruments.</Text>

                <Text style={[styles.heading_md, { marginTop: 10, marginBottom: 5, color: '#01636a' }]}>For Example-</Text>
                <View style={{ display: 'flex', gap: 5, marginLeft: 20, marginBottom: 30 }}>
                    <Text style={styles.text}>• He can play the flute.</Text>
                </View>


                <Text style={styles.text}>10. Before an adjective when the noun is understood.</Text>

                <Text style={[styles.heading_md, { marginTop: 10, marginBottom: 5, color: '#01636a' }]}>For Example-</Text>
                <View style={{ display: 'flex', gap: 5, marginLeft: 20, marginBottom: 30 }}>
                    <Text style={styles.text}>• The poor are always with us.</Text>
                </View>
            </View>
        </ScrollView>
            : <PreLoader />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        marginBottom: 50
    },
    text: {
        fontSize: 17,
        fontFamily: FONT.regular,
        color: '#242424'
    },
    heading_xl: {
        fontSize: 22,
        fontFamily: FONT.bold,
        color: COLORS.black
    },
    heading_lg: {
        fontSize: 20,
        fontFamily: FONT.bold,
        color: COLORS.black
    },
    heading_md: {
        fontSize: 18,
        fontFamily: FONT.bold,
        color: COLORS.black
    }
})

export default Articles