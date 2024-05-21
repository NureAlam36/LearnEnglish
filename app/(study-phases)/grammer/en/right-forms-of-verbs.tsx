import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import { FONT, COLORS } from "@/constants";

import PreLoader from '@/components/PreLoader';
import Divider from '@/components/Divider';

// https://www.ebookbou.edu.bd/Books/Text/OS/SSC/ssc_2652/Unit-07.pdf

const RightFormsOfVerbs = () => {
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
        }
    })

    return (
        !loading ? <ScrollView style={[styles.container, { backgroundColor: theme.bgPrimary }]} showsVerticalScrollIndicator={false}>
            <View style={{ padding: 15 }}>
                <Text style={[styles.heading_lg, { marginBottom: 10 }]}>Right Forms of Verb</Text>
                <Text style={styles.text}>The verb is the most important component of a sentence. It is found that the verb may take
                    different forms, such as present simple, past simple, present participle, past participle, bare
                    infinitive, to infinitive, gerund, etc. From among these various forms of verbs, it is very
                    important to choose the right one in the appropriate place to make the sentence meaningful. In
                    order to choose the right forms of verbs, certain rules should be remembered. Following are
                    some of the important rules for using the right forms of verbs: </Text >

                <Divider marginTop={20} marginBottom={20} />

                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 1:</Text> If a sentence contains always, regularly, sometimes, often, generally, daily, everyday,
                    occasionally, usually, normally, etc. without any mention of time, then the verbs will be in
                    the present indefinite tense.</Text>

                {/* Rule 1 */}
                <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>For example -</Text>
                <View style={{ display: 'flex', gap: 5, marginBottom: 15 }}>
                    <Text style={styles.text}>- He always speaks in the class. </Text>
                    <Text style={styles.text}>- She takes fast food daily. </Text>
                    <Text style={styles.text}>- My father reads the Daily Star every morning</Text>
                    <Text style={styles.text}>- I take exercise regularly. </Text>
                </View>

                {/* Rule 2 */}
                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 2:</Text> If a sentence expresses universal truth, habitual fact, the verb will be in the present indefinite tense.</Text>

                <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                    <Text style={styles.text}>- The sun sets in the west.</Text>
                    <Text style={styles.text}>- Light removes darkness.</Text>
                    <Text style={styles.text}>- Everybody fears death.</Text>
                    <Text style={styles.text}>- Ill news spreads fast</Text>
                </View>

                {/* Rule 3 */}
                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 3:</Text> If any work is continuing at present, then the verb becomes present continuous. The words
                    now, at present, at this moment, etc. may be present in the sentence.</Text>

                <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                    <Text style={styles.text}>- She is singing now.</Text>
                    <Text style={styles.text}>- They are watching television at this momen</Text>
                    <Text style={styles.text}>- I am driving at this moment</Text>
                </View>

                {/* Rule 4 */}
                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 4:</Text> If an active sentence contains has, have, had, then the verb will be in the past participle form.</Text>

                <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                    <Text style={styles.text}>- He has finished his M.A. in English.</Text>
                    <Text style={styles.text}>- The teacher has punished the students. </Text>
                    <Text style={styles.text}>- I have visited the national museum.</Text>
                </View>

                {/* Rule 5 */}
                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 5:</Text> . If a sentence contains just, just now, already, yet, ever, lately, recently, etc., then the verb
                    will be in the present perfect tense.</Text>

                <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                    <Text style={styles.text}>- I have visited my village home recently. </Text>
                    <Text style={styles.text}>- He has just left the office. </Text>
                    <Text style={styles.text}>- I have not taken my breakfast yet. </Text>
                    <Text style={styles.text}>- His father has died recently. </Text>
                </View>

                {/* Rule 6 */}
                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 6:</Text> If a sentence contains the words indicating past time, such as yesterday, ago, long since, last
                    night, etc., then the verb will be in the past form.</Text>

                <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                    <Text style={styles.text}>- I went to my village home last week</Text>
                    <Text style={styles.text}>- They lived here long since. </Text>
                    <Text style={styles.text}>- The man came here yesterday. </Text>
                    <Text style={styles.text}>- The police arrested the criminal last night. </Text>
                </View>

                {/* Rule 7 */}
                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 7:</Text> If any action was continuing in the past, the verb will be in the past continuous tense. </Text>

                <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                    <Text style={styles.text}>- He was then eating</Text>
                    <Text style={styles.text}>- I was reading at that time. </Text>
                </View>

                {/* Rule 8 */}
                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 8:</Text> If a sentence contains No sooner had …. than, scarcely had when, hardly had before, etc.,
                    then the first verb will be in the past participle form and the second verb will be in the past
                    form.</Text>

                <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                    <Text style={styles.text}>- No sooner had he seen the police than he ran away. </Text>
                    <Text style={styles.text}>- No sooner had we reached the station than the train ran away. </Text>
                </View>

                {/* Rule 9 */}
                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 9:</Text> A sentence containing ‘since’: If the first part of ‘since’ is present indefinite or present
                    perfect tense, then the next part will be past indefinite.</Text>

                <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                    <Text style={styles.text}>- It is many years since I came to Dhaka. </Text>
                    <Text style={styles.text}>- Many years have passed since his father died. </Text>
                </View>

                {/* Rule 10 */}
                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 10:</Text> If the first part of ‘since’ is past indefinite tense, then the next part becomes past perfect. </Text>

                <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                    <Text style={styles.text}>- It was many years since they had first met. </Text>
                    <Text style={styles.text}>- It was long since I had seen her last. </Text>
                </View>

                {/* Rule 11 */}
                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 11:</Text> A sentence containing ‘before’: If the first part of ‘before’ is past perfect, then the next part
                    becomes past indefinite.</Text>

                <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                    <Text style={styles.text}>- The teacher had started the class before I came.</Text>
                    <Text style={styles.text}>- The patient had died before the doctor came. </Text>
                    <Text style={styles.text}>- I had finished my home work before father came home. </Text>
                </View>

                {/* Rule 12 */}
                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 12:</Text> A sentence containing ‘after’: If the first part of ‘after’ is past indefinite tense, then the next
                    part will be past perfect.</Text>

                <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                    <Text style={styles.text}>- The teacher started the class after I had come. </Text>
                    <Text style={styles.text}>- The patient died after the doctor had come. </Text>
                </View>

                {/* Rule 13 */}
                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 13:</Text> If verb comes just after ‘while’, then the verb will take ‘ing’ with it. But if verb comes after
                    ‘while + subject’, then the verb will be in the past continuous tense.</Text>

                <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                    <Text style={styles.text}>- While going to school, I saw a snake. </Text>
                    <Text style={styles.text}>- Don’t gossip while reading</Text>
                    <Text style={styles.text}>- While he was walking along the road, a snake bit him</Text>
                </View>
                {/* Rule 14 */}
                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 14:</Text> . The main verb after ‘to be’ and ‘having’ takes past participle form.</Text>

                <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                    <Text style={styles.text}>- He ran away having taken the money. </Text>
                    <Text style={styles.text}>- The chairman ordered the notice to be hung</Text>
                </View>

                {/* Rule 15 */}
                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 15:</Text> If a sentence contains by this time, by morning, by Sunday, etc., then the verb of the sentence
                    will be in the future perfect tense.</Text>

                <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                    <Text style={styles.text}>- They will have reached by this time.</Text>
                    <Text style={styles.text}>- He will have returned by Monday next.</Text>
                    <Text style={styles.text}>- I will have finished the book by June 2017</Text>
                </View>


                {/* Rule 16 */}
                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 16:</Text> If a sentence contains tomorrow, next month, coming year, etc., then the verb of the sentence
                    will be in the future indefinite tense.</Text>

                <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                    <Text style={styles.text}>- I shall leave for Dhaka tomorrow.</Text>
                    <Text style={styles.text}>- We shall visit the zoo next week.</Text>
                    <Text style={styles.text}>- Our final examination will begin tomorrow.</Text>
                </View>


                {/* Rule 17 */}
                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 17:</Text> If a simple sentence contains two verbs, then the 2nd verb will take ‘ing’ or ‘to’ before it or
                    will take the past participle form.</Text>

                <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                    <Text style={styles.text}>- I saw him running. </Text>
                    <Text style={styles.text}>- I want to go now</Text>
                    <Text style={styles.text}>- He got the work done</Text>
                </View>

                {/* Rule 18 */}
                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 18:</Text> Had better, had rather, would better, would rather, let, must, need, dare, etc. are followed by
                    the present forms of verb and if there is ‘to’ before that verb, then the ‘to’ is omitted.</Text>

                <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                    <Text style={styles.text}>- You had better leave the class</Text>
                    <Text style={styles.text}>- I won’t let you go now. </Text>
                    <Text style={styles.text}>- You need not help me. </Text>
                    <Text style={styles.text}>- We would rather follow the direction of our teacher. </Text>
                </View>

                {/* Rule 19 */}
                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 19:</Text> . The verb after it is high time, it is time, wish, fancy, etc. will be in the past form.</Text>

                <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                    <Text style={styles.text}>- It is high time we did the work. </Text>
                    <Text style={styles.text}>- I wish I went there. </Text>
                    <Text style={styles.text}>- I fancy I got a car. </Text>
                    <Text style={styles.text}>- It is time you studied hard. </Text>
                </View>

                {/* Rule 20 */}
                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 20:</Text> After as though, as if, wish, etc. the ‘to be verb’ transforms into ‘were’.</Text>

                <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                    <Text style={styles.text}>- I wish I were a king. </Text>
                    <Text style={styles.text}>- She talks as if she were a mad. </Text>
                    <Text style={styles.text}>- He speaks as though he were president. </Text>
                </View>

                {/* Rule 21 */}
                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 21:</Text> If the first part of ‘as though/as if’ is present indefinite, then the next part will be past
                    indefinite. But if the first part is past indefinite, the next part will be past perfect. </Text>

                <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                    <Text style={styles.text}>- He speaks as though he knew everything. </Text>
                    <Text style={styles.text}>- She behaved as though she had not learned any manner. </Text>
                </View>

                {/* Rule 22 */}
                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 22:</Text> The principal verbs take present forms after modal auxiliaries.</Text>

                <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                    <Text style={styles.text}>- One should not waste one’s time. </Text>
                    <Text style={styles.text}>- He could run fast. </Text>
                    <Text style={styles.text}>- I would help the poor. </Text>
                </View>

                {/* Rule 23 */}
                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 23:</Text> If have, has, had, got, etc. work as causative verb in sentence, then the verb after them will
                    be past participle.</Text>

                <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                <View style={{ display: 'flex', gap: 5 }}>
                    <Text style={styles.text}>- I got the work done. </Text>
                    <Text style={styles.text}>- I had my house painted. </Text>
                    <Text style={styles.text}>- I have my clothes washed by the boy. </Text>
                </View>

                {/* Rule 24 */}
                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 24:</Text> The verb after am, is, are, was, were takes ‘ing’ in active form, but it will be in the past
                    participle in passive form.</Text>

                <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                    <Text style={styles.text}>- He is doing the work. </Text>
                    <Text style={styles.text}>- The work is done by him. </Text>
                    <Text style={styles.text}>- The boys were playing football. </Text>
                    <Text style={styles.text}>- The letter was written by his friend. </Text>
                </View>

                {/* Rule 25 */}
                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 25:</Text> If a sentence contains ‘lest’, then the subject takes should/might after it.</Text>

                <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                    <Text style={styles.text}>- He ran fast lest he should miss the train. </Text>
                    <Text style={styles.text}>- She studied hard lest she might fail in the examination. </Text>
                </View>

                {/* Rule 26 */}
                <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>Rule 26:</Text> A given verb takes ‘ing’ form after the following words: mind, worth, without, past, cannot
                    help, could not help, with a view to, look forward to, would you mind, get used to, etc.</Text>

                <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>উদাহরণ:</Text>
                <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                    <Text style={styles.text}>- I went to Dhaka with a view to meeting one of my friends. </Text>
                    <Text style={styles.text}>- The idea is worth considering. </Text>
                    <Text style={styles.text}>- I am looking forward to hearing from you. </Text>
                    <Text style={styles.text}>- I believe you would not mind visiting your home. </Text>
                </View>
            </View>
        </ScrollView>
            : <PreLoader />
    )
}



export default RightFormsOfVerbs