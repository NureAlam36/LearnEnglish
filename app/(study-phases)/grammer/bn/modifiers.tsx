import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import { FONT, COLORS } from "@/constants";

import PreLoader from '@/components/PreLoader';

const Divider = ({ marginTop = 0, marginBottom = 0, borderColor = '#cccccc' }) => {
    return (
        <View style={{
            height: 1,
            backgroundColor: borderColor,
            alignSelf: 'stretch',
            marginTop: marginTop,
            marginBottom: marginBottom,
        }} />
    )
}

const Modifiers = () => {
    const [loading, setLoading] = useState(true);
    const { colorScheme, theme } = useColorSchemeContext();

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
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
        }
    })

    return (
        !loading ? <ScrollView style={[styles.container, { backgroundColor: theme.bgPrimary }]} showsVerticalScrollIndicator={false}>
            <View style={{ padding: 15 }}>
                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>Modifier কাকে বলে? </Text>
                <Text style={styles.text}>যে সকল word/group of words কোনো noun/noun phrase কে describe করে অথবা noun/noun phrase এর meaning কে কোন না কোন ভাবে restrict করে তাদেরকে modifier বলে।</Text >

                <Text style={[styles.text, { marginTop: 20, marginBottom: 5 }]}><Text style={{ fontWeight: 'bold', color: '#01636a' }}>সহজ ভাষায় modifier:</Text> যে সকল word/group of words কোন noun/noun phrase কে modify করে/বিশেষায়িত করে তাদেরকে modifier বলে।</Text>

                <Text style={[styles.heading_lg, { marginTop: 20, marginBottom: 5, color: '#01636a' }]}>What is the definition of a modifier in English grammar?</Text>
                <Text style={styles.text}>✓ Modifier = A word or group of words that describes a noun phrase or restricts its meaning in some way. (Oxford Advanced Learner’s Dictionary)</Text>
                <Text style={styles.text}>✓ Modifier = A word or phrase that is used with another word or phrase to limit or add to its meaning. (Cambridge Advanced Learner’s Dictionary)</Text>

                <Text style={[styles.heading_lg, { marginTop: 20, marginBottom: 5, color: '#01636a' }]}>What parts of speech is modifier in grammar?</Text>
                <Text style={styles.text}>✓ A modifier can be both adjective and adverb.</Text>

                <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24' }]}>Modifier এর উদাহরণ:</Text>

                <View style={{ display: 'flex', gap: 5 }}>
                    <Text style={styles.text}>• A <Text style={{ textDecorationLine: 'underline' }}>barking</Text> dog seldom bites. (Dog কে modify করেছে)</Text>
                    <Text style={styles.text}>• The <Text style={{ textDecorationLine: 'underline' }}>up</Text> train is late today. (Train কে modify করেছে) </Text>
                    <Text style={styles.text}>• The house <Text style={{ textDecorationLine: 'underline' }}>on the corner</Text> is red in colour. (The house কে modify করেছে)</Text>
                    <Text style={styles.text}>• The man <Text style={{ textDecorationLine: 'underline' }}>speaking in English</Text> is the scholar of English. (The man কে modify করেছে)</Text>
                    <Text style={styles.text}>• She is a <Text style={{ textDecorationLine: 'underline' }}>beautiful</Text> lady. (lady কে modify করেছে)</Text>
                    <Text style={styles.text}>• The mobile <Text style={{ textDecorationLine: 'underline' }}>with a multi keyboard</Text> is very expensive. (The mobile কে modify করেছে)</Text>
                    <Text style={styles.text}>• I saw a boy <Text style={{ textDecorationLine: 'underline' }}>crying</Text>. (Boy কে modify করেছে)</Text>
                    <Text style={styles.text}>• It was a <Text style={{ textDecorationLine: 'underline' }}>nice</Text> journey. (Journey কে modify করেছে)</Text>
                    <Text style={styles.text}>• The <Text style={{ textDecorationLine: 'underline' }}>pretty</Text> girl is my cousin. (Girl কে modify করেছে)</Text>
                    <Text style={styles.text}>• The crown <Text style={{ textDecorationLine: 'underline' }}>made of gold</Text> is a symbol of aristocracy. (The crown কে modify করেছে)</Text>
                </View>

                <Text style={[styles.text, { marginTop: 15 }]}>✓ সুতরাং দেখা যাচ্ছে যে modifier যে noun/noun phrase কে modify করে/বিশেষায়িত করে তার পূর্বে অথবা পরে যে কোন স্থানে ব্যবহৃত হতে পারে।</Text>

                <Divider marginTop={20} marginBottom={20} />

                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>Classification of Modifiers: Modifier কত প্রকার ও কি কি?</Text>
                <Text style={styles.text}>Modifier দুই প্রকারঃ-</Text>

                <View style={{ display: 'flex', gap: 5, marginTop: 10 }}>
                    <Text style={styles.text}>1. Premodifier</Text>
                    <Text style={styles.text}>2. Postmodifier</Text>
                </View>

                <Divider marginTop={20} marginBottom={20} />

                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>1.  Premodifier কী:-</Text>
                <Text style={styles.text}>যে সকল modifier “noun/noun phrase” এর পূর্বে ব্যবহৃত হয় তাদেরকে premodifier বলা হয়। Premodifier এর উদাহরণসমূহ দেখুনঃ-</Text>

                <View style={{ display: 'flex', gap: 5, marginTop: 15 }}>
                    <Text style={styles.text}>• Look at the <Text style={{ textDecorationLine: 'underline' }}>above</Text> word.</Text>
                    <Text style={styles.text}>•  I need a <Text style={{ textDecorationLine: 'underline' }}>colour</Text> television.</Text>
                    <Text style={styles.text}>• It is an <Text style={{ textDecorationLine: 'underline' }}>up-to-date</Text> edition of the book.</Text>
                    <Text style={styles.text}>• The <Text style={{ textDecorationLine: 'underline' }}>disabled</Text> man has come here.</Text>
                    <Text style={styles.text}>• It was a <Text style={{ textDecorationLine: 'underline' }}>paper</Text> boat.</Text>
                    <Text style={styles.text}>• The <Text style={{ textDecorationLine: 'underline' }}>defeated</Text> soldiers will be kept in prison.</Text>
                    <Text style={styles.text}>• It is a <Text style={{ textDecorationLine: 'underline' }}>forbidden</Text> tree.</Text>
                    <Text style={styles.text}>• My <Text style={{ textDecorationLine: 'underline' }}>new</Text> book has been published.</Text>
                    <Text style={styles.text}>• I bought an <Text style={{ textDecorationLine: 'underline' }}>expensive</Text> mobile yesterday.</Text>
                    <Text style={styles.text}>• A <Text style={{ textDecorationLine: 'underline' }}>rolling</Text> stone gathers no moss.</Text>
                    <Text style={styles.text}>• A <Text style={{ textDecorationLine: 'underline' }}>barking</Text> dog seldom bites.</Text>
                    <Text style={styles.text}>• I need a <Text style={{ textDecorationLine: 'underline' }}>new</Text> edition of this book.</Text>
                </View>

                <Text style={[styles.heading_xl, { marginTop: 30, marginBottom: 10 }]}>Different Types of Premodifiers:</Text>

                <Text style={[styles.heading_lg, { marginBottom: 10, color: '#01636a' }]}>How many types of Premodifiers are used?</Text>
                <Text style={styles.text}>ইংরেজি গ্রামারে সাধারণত ৫ ধরণের Premodifier ব্যবহৃত হয়। এগুলো হলো:-</Text>

                <Text style={[styles.heading_lg, { marginTop: 20, marginBottom: 5 }]}>1) Adjective as premodifier:-</Text>
                <View style={{ display: 'flex', gap: 5 }}>
                    <Text style={styles.text}>• Tom has a <Text style={{ textDecorationLine: 'underline' }}>pleasant</Text> holiday this year.</Text>
                    <Text style={styles.text}>• I watched a <Text style={{ textDecorationLine: 'underline' }}>western</Text> movie.</Text>
                    <Text style={styles.text}>• Joe is a <Text style={{ textDecorationLine: 'underline' }}>meritorious</Text> student who wants to meet me.</Text>
                    <Text style={styles.text}>• The girl has a <Text style={{ textDecorationLine: 'underline' }}>bright</Text> future.</Text>
                    <Text style={styles.text}>• My father is a <Text style={{ textDecorationLine: 'underline' }}>retired</Text> officer.</Text>
                </View>

                <Text style={[styles.heading_lg, { marginTop: 20, marginBottom: 5 }]}>2) -ing participles as premodifier:-</Text>
                <View style={{ display: 'flex', gap: 5 }}>
                    <Text style={styles.text}>• Prime minister went to a <Text style={{ textDecorationLine: 'underline' }}>developing</Text> country.</Text>
                    <Text style={styles.text}>• It is a <Text style={{ textDecorationLine: 'underline' }}>barking</Text> dog.</Text>
                    <Text style={styles.text}>• The <Text style={{ textDecorationLine: 'underline' }}>waiting</Text> guests become tired.</Text>
                    <Text style={styles.text}>• David Russel is a <Text style={{ textDecorationLine: 'underline' }}>beginning</Text> student.</Text>
                    <Text style={styles.text}>• The <Text style={{ textDecorationLine: 'underline' }}>working</Text> labour is always ignored in Bangladesh.</Text>
                </View>

                <Text style={[styles.heading_lg, { marginTop: 20, marginBottom: 5 }]}>3) -ed participles as premodifier:-</Text>
                <View style={{ display: 'flex', gap: 5 }}>
                    <Text style={styles.text}>• He is a r<Text style={{ textDecorationLine: 'underline' }}>etired</Text> teacher.</Text>
                    <Text style={styles.text}>• They need a <Text style={{ textDecorationLine: 'underline' }}>reduced</Text> price.</Text>
                    <Text style={styles.text}>• They were <Text style={{ textDecorationLine: 'underline' }}>tired</Text> students.</Text>
                    <Text style={styles.text}>• Joe is a<Text style={{ textDecorationLine: 'underline' }}> wanted</Text> criminal.</Text>
                    <Text style={styles.text}>• It is a <Text style={{ textDecorationLine: 'underline' }}>developed</Text> thesis.</Text>
                </View>

                <Text style={[styles.heading_lg, { marginTop: 20, marginBottom: 5 }]}>4) Noun as premodifier:-</Text>
                <View style={{ display: 'flex', gap: 5 }}>
                    <Text style={styles.text}>• It is our <Text style={{ textDecorationLine: 'underline' }}>college</Text> magazine.</Text>
                    <Text style={styles.text}>• Are the <Text style={{ textDecorationLine: 'underline' }}>removal</Text> expenses paid by your company?</Text>
                    <Text style={styles.text}>• The <Text style={{ textDecorationLine: 'underline' }}>school</Text> bus is now moving.</Text>
                    <Text style={styles.text}>• I have no <Text style={{ textDecorationLine: 'underline' }}>college</Text> friends here.</Text>
                    <Text style={styles.text}>• She want to know about <Text style={{ textDecorationLine: 'underline' }}>London</Text> transport.</Text>
                </View>

                <Text style={[styles.heading_lg, { marginTop: 20, marginBottom: 5 }]}>5) Compounds as premodifier:-</Text>
                <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#01636a' }]}>What is a Compound word?</Text>
                <Text style={styles.text}>Compound word হল একাধিক word এর সমষ্টি যা single noun/adjective হিসেবে ব্যবহৃত হয়।</Text>

                <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#01636a' }]}>Now study the following lines:</Text>
                <Text style={styles.text}>a) I need a first-class ticket. (First class একাধিক word এর সমষ্টি । অতএব, এটি একটি Compound যা noun এর পূর্বে ব্যবহৃত হয়ে premodifier হিসেবে ব্যবহৃত হয়েছে।</Text>

                <Text style={styles.text}>একইভাবে Compounds as premodifier এর আরও উদাহরণ,</Text>
                <View style={{ display: 'flex', gap: 5 }}>
                    <Text style={styles.text}>b) The book has an <Text style={{ textDecorationLine: 'underline' }}>up-to-date</Text> edition.</Text>
                    <Text style={styles.text}>c) It is a <Text style={{ textDecorationLine: 'underline' }}>ready-to-wear</Text> suit.</Text>
                    <Text style={styles.text}>d) I live in a <Text style={{ textDecorationLine: 'underline' }}>twenty-storied</Text> building.</Text>
                    <Text style={styles.text}>e) He is <Text style={{ textDecorationLine: 'underline' }}>8-year</Text> old.</Text>
                </View>

                <Divider marginTop={20} marginBottom={20} />

                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>2. Postmodifier কী:-</Text>
                <Text style={styles.text}>যে সকল modifier “noun/noun phrase” এর পরে ব্যবহৃত হয় তাদেরকে Postmodifier বলা হয়।</Text>

                <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24' }]}>উদাহরণ:</Text>

                <View style={{ display: 'flex', gap: 5 }}>
                    <Text style={styles.text}>• A nice young woman <Text style={{ textDecorationLine: 'underline' }}>in jeans</Text> was watching me.</Text>
                    <Text style={styles.text}>• There is nothing <Text style={{ textDecorationLine: 'underline' }}>new</Text> about these techniques.</Text>
                    <Text style={styles.text}>• They wanted to meet the boy <Text style={{ textDecorationLine: 'underline' }}>going out with their daughter</Text>.</Text>
                    <Text style={styles.text}>• Many dogs <Text style={{ textDecorationLine: 'underline' }}>roaming unleashed</Text> are killed by automobiles.</Text>
                    <Text style={styles.text}>• We visited the place <Text style={{ textDecorationLine: 'underline' }}>where my uncle lived</Text>.</Text>
                    <Text style={styles.text}>• The boy <Text style={{ textDecorationLine: 'underline' }}>standing</Text> on the street is known to me.</Text>
                    <Text style={styles.text}>• He is a man <Text style={{ textDecorationLine: 'underline' }}>of innocence</Text>.</Text>
                    <Text style={styles.text}>• The fox <Text style={{ textDecorationLine: 'underline' }}>with a long tail</Text> is coming.</Text>
                    <Text style={styles.text}>• My mother <Text style={{ textDecorationLine: 'underline' }}>wearing a red shari</Text> went to the party.</Text>
                    <Text style={styles.text}>• Jonathan <Text style={{ textDecorationLine: 'underline' }}>who speaks in English</Text> has become a president of the party.</Text>
                </View>

                <Text style={[styles.heading_xl, { marginTop: 30, marginBottom: 10 }]}>Different Types of postmodifiers:</Text>

                <Text style={[styles.heading_lg, { marginBottom: 10, color: '#01636a' }]}>How many types of Postmodifiers are used?</Text>
                <Text style={styles.text}>ইংরেজি গ্রামারে সাধারণত ৩ ধরণের Postmodifier ব্যবহৃত হয়। এগুলো হলো:</Text>

                <Text style={[styles.heading_lg, { marginTop: 20, marginBottom: 5 }]}>1) Prepositional phrase as postmodifier:-</Text>
                <View style={{ display: 'flex', gap: 5 }}>
                    <Text style={styles.text}>• It was a week <Text style={{ textDecorationLine: 'underline' }}>of hard work</Text>.</Text>
                    <Text style={styles.text}>• John Keats was a man <Text style={{ textDecorationLine: 'underline' }}>of medicine</Text>.</Text>
                    <Text style={styles.text}>• The fox <Text style={{ textDecorationLine: 'underline' }}>with a long tail</Text> is clever.</Text>
                    <Text style={styles.text}>• This message is scarcely a cause <Text style={{ textDecorationLine: 'underline' }}>for regret</Text>.</Text>
                    <Text style={styles.text}>• The book <Text style={{ textDecorationLine: 'underline' }}>on the table</Text> is written by Shakespeare.</Text>
                </View>

                <Text style={[styles.heading_lg, { marginTop: 20, marginBottom: 5 }]}>2) -ing participles as postmodifier:-</Text>
                <View style={{ display: 'flex', gap: 5 }}>
                    <Text style={styles.text}>• The boy <Text style={{ textDecorationLine: 'underline' }}>coming towards</Text> me is sick.</Text>
                    <Text style={styles.text}>• I love the child <Text style={{ textDecorationLine: 'underline' }}>crying</Text> loudly.</Text>
                    <Text style={styles.text}>• The president <Text style={{ textDecorationLine: 'underline' }}>speaking in English</Text> is known to me. </Text>
                    <Text style={styles.text}>• A man <Text style={{ textDecorationLine: 'underline' }}>wearing a grey suit</Text> left the office.</Text>
                    <Text style={styles.text}>• Last Friday, I got a letter <Text style={{ textDecorationLine: 'underline' }}>saying that there was a trouble of robbery in the area</Text>.</Text>
                </View>

                <Text style={[styles.heading_lg, { marginTop: 20, marginBottom: 5 }]}>3) -Ed participle as postmodifier:–</Text>
                <View style={{ display: 'flex', gap: 5 }}>
                    <Text style={styles.text}>• The question <Text style={{ textDecorationLine: 'underline' }}>debated in parliament yesterday</Text> was about the new tax.</Text>
                    <Text style={styles.text}>• We have seen the damage to the pie <Text style={{ textDecorationLine: 'underline' }}>done by the deer</Text>.</Text>
                    <Text style={styles.text}>• The property <Text style={{ textDecorationLine: 'underline' }}>belonged to my sister</Text> had been sold.</Text>
                    <Text style={styles.text}>• The tale <Text style={{ textDecorationLine: 'underline' }}>stated by my Grandfather</Text> was very interesting.</Text>
                    <Text style={styles.text}>• The work <Text style={{ textDecorationLine: 'underline' }}>done by my family</Text> was highly criticised.</Text>
                </View>
            </View>
        </ScrollView>
            : <PreLoader />
    )
}



export default Modifiers