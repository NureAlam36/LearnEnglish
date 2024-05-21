import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import { FONT, COLORS } from "@/constants";

import PreLoader from '@/components/PreLoader';
import Divider from '@/components/Divider';

// https://www.taxmann.com/post/blog/what-is-sentence-its-structure-and-types-of-sentence

const Sentence = () => {
    const [loading, setLoading] = useState(true);
    const { colorScheme, theme } = useColorSchemeContext();

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 100);
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
                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>Definition of a Sentence:</Text>
                <Text style={styles.text}>A sentence means a group of words that makes complete sense. It begins with a capital letter and ends with a full stop. It always contains a finite verb. A sentence may be a statement, question, exclamation or command. It consists of a main clause and one or more subordinate clauses. A sentence may be short and simple or long and complex. For example:</Text >

                <View style={{ display: 'flex', gap: 8, marginTop: 15, marginLeft: 15 }}>
                    <Text style={styles.text}>• She likes Sweets</Text>
                    <Text style={styles.text}>• She likes Bengali Sweets</Text>
                    <Text style={styles.text}>• She likes Bengali Sweets which are made of milk</Text>
                    <Text style={styles.text}>• She likes Bengali Sweets which are made of milk and are tasty</Text>
                </View>

                <Divider marginTop={20} marginBottom={20} />

                <Text style={[styles.heading_xl, { marginBottom: 10 }]}>Types of Sentences:</Text>

                <Image source={{ uri: 'https://www.taxmann.com/post/wp-content/uploads/2022/08/Screenshot-2022-08-20-120936.png' }} style={{ width: '100%', height: 200 }} />

                <Text style={[styles.heading_lg, { marginBottom: 10, marginTop: 20 }]}>Classification According to Function:</Text>


                <Text style={[styles.text, { marginTop: 10 }]}><Text style={{ fontFamily: FONT.bold }}>1. Declarative/Assertive Sentences:</Text> These sentences make a declaration in the form of a statement, an opinion, a suggestion, a proverb or a universal truth. These can be positive or negative but always end with a full stop. For example:</Text>
                <View style={{ display: 'flex', gap: 8, marginTop: 10, marginLeft: 15 }}>
                    <Text style={styles.text}>• The teacher is going to the class room (simple statement)</Text>
                    <Text style={styles.text}>• Sunita is a good singer (opinion) (declaration)</Text>
                    <Text style={styles.text}>• The sun rises in the east. (universal truth)</Text>
                    <Text style={styles.text}>• Barking dogs seldom bite (proverb)</Text>
                </View>

                <Text style={[styles.text, { marginTop: 20 }]}><Text style={{ fontFamily: FONT.bold }}>2. Imperative Sentences:</Text> These sentences express an order, command, advice, request, proposal or suggestion. These may end with a full stop or exclamation depending on the imperative word. For example:</Text>
                <View style={{ display: 'flex', gap: 8, marginTop: 10, marginLeft: 15 }}>
                    <Text style={styles.text}>• Get out (Command)</Text>
                    <Text style={styles.text}>• Always Speak the truth (Advice)</Text>
                    <Text style={styles.text}>• Please be patient (request)</Text>
                    <Text style={styles.text}>• Let’s go to the book fair (suggestion)</Text>
                </View>

                <Text style={[styles.text, { marginTop: 20 }]}><Text style={{ fontFamily: FONT.bold }}>3. Interrogative Sentences:</Text> These sentences ask questions. ‘Wh’ and a verb are used to frame an interrogative sentence. A question mark comes after such a question. For example:</Text>
                <View style={{ display: 'flex', gap: 8, marginTop: 10, marginLeft: 15 }}>
                    <Text style={styles.text}>• Who is your father?</Text>
                    <Text style={styles.text}>• When are you going to London?</Text>
                    <Text style={styles.text}>• Do you have any money?</Text>
                    <Text style={styles.text}>• Are you feeling alright?</Text>
                </View>

                <Text style={[styles.text, { marginTop: 20 }]}><Text style={{ fontFamily: FONT.bold }}>4. Exclamatory Sentences:</Text> These sentences express strong emotions or feelings such as joy, surprise, wonder, regret, etc. An exclamatory sentence ends with an exclamation mark. For example :</Text>
                <View style={{ display: 'flex', gap: 8, marginTop: 10, marginLeft: 15 }}>
                    <Text style={styles.text}>• Alas! India lost the match. (regret)</Text>
                    <Text style={styles.text}>• Hurray! My daughter passed the IIT examination (joy)</Text>
                    <Text style={styles.text}>• Oh my God! It is raining. (surprise)</Text>
                    <Text style={styles.text}>• What a shame! (regret)</Text>
                    <Text style={styles.text}>• What a beautiful scene! (wonder)</Text>
                </View>

                <Divider marginTop={20} marginBottom={20} />

                <Text style={[styles.heading_lg, { marginBottom: 10 }]}>Classification According to Structure:</Text>

                <Text style={[styles.text, { marginTop: 20 }]}><Text style={{ fontFamily: FONT.bold }}>5. Simple Sentences:</Text> There is only one subject one predicate and one finite verb in a simple  sentence. It contains only one independent clause. For example :</Text>
                <View style={{ display: 'flex', gap: 8, marginTop: 10, marginLeft: 15 }}>
                    <Text style={styles.text}>• She sings (She is the subject and sings is the predicate)</Text>
                    <Text style={styles.text}>• The dog ran after the ball (Dog is the subject and ran after the ball is the predicate).</Text>
                </View>

                <Text style={[styles.text, { marginTop: 30, marginBottom: 5, fontStyle: 'italic' }]}>Either subject or verb can be compound (meaning two or more), but the key is there always remains only ONE independent clause. For example:</Text>

                <View style={{ display: 'flex', gap: 8, marginTop: 10, marginLeft: 15 }}>
                    <Text style={styles.text}>• Blue is her favourite colour.</Text>
                    <Text style={styles.text}>• Blue and Red are her favourite colours.</Text>
                    <Text style={styles.text}>• Sam loves and hates pink.</Text>
                </View>

                <View style={{ display: 'flex', gap: 10, marginTop: 20 }}>
                    <Text style={styles.text}>The examples above are all simple sentences, though some contain compound elements.</Text>
                    <Text style={styles.text}>Example one has a simple subject (Blue) and a simple verb(is).</Text>
                    <Text style={styles.text}>Example two has a compound subject (Blue and Red) and a simple verb (are).</Text>
                    <Text style={styles.text}>Example three has a simple subject (Sam) and a compound verb (loves and hates). However, they are all still considered simple sentences because there is no dependent clause that can stand alone.</Text>
                </View>

                <Text style={[styles.text, { marginTop: 20 }]}><Text style={{ fontFamily: FONT.bold }}>6. Compound Sentences:</Text> There are two or more independent/main clauses in a compound sentence. A comma, a colon, a semi-colon is used to join these clauses. Conjunctions used to join similar elements (e.g. two nouns, two verbs, two modifiers) are called coordinating conjunctions (Here is a list of co-ordinating conjunctions for future compound sentences you will write: for, and, nor, but, or, yet, so. An easy way to remember these is the acronym FANBOYS.)</Text>
                <View style={{ display: 'flex', gap: 8, marginTop: 10, marginLeft: 15 }}>
                    <Text style={styles.text}>• It rained heavily throughout the day; consequently, the city was flooded</Text>
                    <Text style={styles.text}>• The thief ran to escape but the police caught him</Text>
                    <Text style={styles.text}>• The winter set in, it was cold and we took out woollens from the cupboard</Text>
                    <Text style={styles.text}>• She is neither honest nor sincere.</Text>
                </View>

                <Text style={[styles.text, { marginTop: 30, marginBottom: 5, fontStyle: 'italic' }]}>some more examples</Text>

                <View style={{ display: 'flex', gap: 8, marginTop: 10, marginLeft: 15 }}>
                    <Text style={styles.text}>• I called her twice yet she did not come.</Text>
                    <Text style={styles.text}>• Sam enjoys reading; John prefers sports.</Text>
                    <Text style={styles.text}>• Betty and Joy arrived at the party early, but Sam got the relate.</Text>
                </View>

                <Text style={[styles.text, { marginTop: 20 }]}><Text style={{ fontFamily: FONT.bold }}>7. Complex Sentences:</Text> There is one main clause and one or more subordinate (dependent) clauses in a complex sentence. The subordinating conjunction indicates time, place, manner, reason, conditions or concession and provides a link between the clauses. For example:</Text>
                <View style={{ display: 'flex', gap: 8, marginTop: 10, marginLeft: 15 }}>
                    <Text style={styles.text}>• The robber ran away when he saw the police</Text>
                    <Text style={styles.text}>• When the robber saw the police, he ran away because he was terrified</Text>
                </View>

                <Text style={[styles.text, { marginTop: 15, marginBottom: 10, fontStyle: 'italic' }]}>In the above sentences, italicised words constitute the main clause. The remaining words are subordinate clause (D).</Text>

                <View style={{ display: 'flex', gap: 8, marginTop: 10, marginLeft: 15 }}>
                    <Text style={styles.text}>• She returned the computer after she noticed it was damaged.</Text>
                    <Text style={styles.text}>• When the cost goes up, customers buy less clothing.Since winter is coming I think I’ll knit a warm sweater because I’m always cold.</Text>
                </View>

                <Text style={[styles.text, { marginTop: 15, marginBottom: 10, fontFamily: FONT.bold }]}>In complex sentences, subordinate clauses function within the sentence as adjectives, adverbs, or nouns. For example:</Text>

                <Text style={styles.text}>Rohan was tired.   (Simple sentence)</Text>
                <Text style={styles.text}>Rohan went to bed. (Simple sentence)</Text>

                <View style={{ display: 'flex', gap: 8, marginTop: 10, marginBottom: 10, marginLeft: 15 }}>
                    <Text style={styles.text}>• Rohan went to bed because he was tired.</Text>
                    <Text style={styles.text}>• Because he was tired, Rohan went to bed.</Text>
                    <Text style={styles.text}>• Rohan who was tired went to bed. (noun clause)</Text>
                </View>

                <Text style={styles.text}>Rohan, although he was tired, went to bed late. (adverb clause)</Text>


                <Text style={[styles.text, { marginTop: 20 }]}><Text style={{ fontFamily: FONT.bold }}>8. Complex Compound Sentences:</Text> A Complex compound sentence consist of two or more independent clauses plus one or  more dependent clauses. For example:</Text>
                <View style={{ display: 'flex', gap: 8, marginTop: 10, marginLeft: 15 }}>
                    <Text style={styles.text}>• Smita smiled brightly and laughed delightedly when he saw her new scooty.</Text>
                    <Text style={styles.text}>• Although it was raining, I left my house, as I had to attend an important meeting.</Text>
                </View>

                <Text style={[styles.text, { marginTop: 30, marginBottom: 5, fontStyle: 'italic' }]}>some more examples</Text>

                <View style={{ display: 'flex', gap: 8, marginTop: 10, marginLeft: 15 }}>
                    <Text style={styles.text}>• Jay’s mother went to the store because it’s his birthday, and she bought him a present.</Text>
                    <Text style={styles.text}>• The team captain jumped for joy and the fans cheered because we won the state championship.</Text>
                </View>

                <Divider marginTop={20} marginBottom={20} />

                <Text style={[styles.heading_md, { marginTop: 15, marginBottom: 5 }]}> Key Points:</Text>
                <View style={{ borderWidth: 1, borderColor: theme.borderColor, marginTop: 10, marginBottom: 30, padding: 15 }}>
                    <View style={{ display: 'flex', gap: 15 }}>
                        <Text style={styles.text}>Simple sentence — Independent clause</Text>
                        <Text style={styles.text}>Compound sentence — Independent clause, *Independent clause</Text>
                        <Text style={styles.text}>Complex sentence — Independent clause *(two or more) dependent clause</Text>
                        <Text style={styles.text}>Compound complex — (2 or more) Independent clauses *(2 or more) dependent clauses</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
            : <PreLoader />
    )
}



export default Sentence