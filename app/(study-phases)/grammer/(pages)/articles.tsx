import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import { FONT, COLORS } from "@/constants";

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

const ExampleComponent = () => {
    return (
        <Text style={[styles.heading_md, { marginTop: 10, marginBottom: 5, color: '#a72a24', fontStyle: 'italic' }]}>যেমন:</Text>
    )
}

const person = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={[styles.heading_xl, { marginBottom: 10 }]}>Article কাকে বলে?</Text>
            <Text style={styles.text}>A, An এবং The কে Article বলে। কোনো Noun(ব্যক্তি বা বস্তু) এর নির্দিষ্টতা বা অনির্দিষ্টতা বুঝাতে Noun টির পূর্বে Article ব্যবহৃত হয়।</Text >

            <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24' }]}>যেমন:</Text>
            <Text style={styles.text}>This is <Text style={{ fontFamily: FONT.bold }}>a</Text> cat.</Text>
            <Text style={styles.text}>She is <Text style={{ fontFamily: FONT.bold }}>a</Text> nurse.</Text>
            <Text style={styles.text}>He is <Text style={{ fontFamily: FONT.bold }}>a</Text> European.</Text>
            <Text style={styles.text}>He took <Text style={{ fontFamily: FONT.bold }}>an</Text> apple.</Text>
            <Text style={styles.text}>She is <Text style={{ fontFamily: FONT.bold }}>an</Text> honest lady.</Text>
            <Text style={styles.text}>He runs 10 miles <Text style={{ fontFamily: FONT.bold }}>an</Text> hour.</Text>
            <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>The</Text> gold of this ring is pure.</Text>
            <Text style={styles.text}>Kabir is <Text style={{ fontFamily: FONT.bold }}>the</Text> bravest man in our village.</Text>
            <Text style={styles.text}><Text style={{ fontFamily: FONT.bold }}>The</Text> boy standing in front of you is a student.</Text>

            {/* <View style={{ backgroundColor: '#d8efef', padding: 10, marginTop: 20 }}>
                <Text style={styles.text}>Note: Person সব সময় কোনো প্রাণী বা বস্তুকে নির্দেশ করবে। আর Person-এর Parts of Speech হবে Noun অথবা Pronoun.</Text>
            </View> */}

            <Divider marginTop={20} marginBottom={20} />

            <Text style={[styles.heading_xl, { marginBottom: 10 }]}>Article কত প্রকার ও কি কি?</Text>
            <Text style={styles.text}>Article ২ প্রকার। যথা:</Text>

            <View style={{ display: 'flex', gap: 5, marginTop: 10 }}>
                <Text style={styles.text}>1. Indefinite Article (অনির্দিষ্টতা বুঝাতে এটি ব্যবহার করা হয়।)</Text>
                <Text style={styles.text}>2. Definite Article (নির্দিষ্টতা বুঝাতে এটি ব্যবহার করা হয়।)</Text>
            </View>

            <Divider marginTop={20} marginBottom={20} />

            <Text style={[styles.heading_xl, { marginBottom: 10 }]}>1. Indefinite Article</Text>
            <Text style={styles.text}>যে Article দ্বারা কোন ব্যক্তি বা বস্তুকে অনির্দিষ্ট ভাবে বুঝায় তাকে Indefinite Article বলে। A, An দিয়ে কোনো অনির্দিষ্ট ব্যক্তি বা বস্তুকে বুঝিয়ে থাকে তাই তারা Indefinite Article.</Text>

            <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24' }]}>যেমন:</Text>

            <View style={{ display: 'flex', gap: 5 }}>
                <Text style={styles.text}>• A book. ( এখানে একটি বইকে নির্দেশ করছে কিন্তু কোন বই বা বইয়ের নাম অজানা তাই এটি অনির্দিষ্টতা বুঝায়। )</Text>
                <Text style={styles.text}>• An egg. ( এখানেও একটি ডিমকে নির্দেশ করছে কিন্তু কোন ডিমটি বা ডিমের রং অজানা তাই এটি অনির্দিষ্টতা বুঝায়। )</Text>
            </View>

            <Text style={[styles.text, { marginTop: 10 }]}>সুতরাং, কোনো কিছুর অনির্দিষ্টতা বুঝাতে আমরা Indefinite Article ব্যবহার করব।</Text>

            <Divider marginTop={20} marginBottom={20} />

            <Text style={[styles.heading_xl, { marginBottom: 10 }]}>2. Definite Article</Text>
            <Text style={styles.text}>যে Article দ্বারা নির্দিষ্ট কোনো ব্যক্তি, বস্তু বা প্রাণীকে নির্দেশ করা হলে তখন তাকে Definite Article বলে। অর্থাৎ নির্দিষ্ট করে যখন কোনো ব্যক্তি বা বস্তুকে নির্দেশ করবো তখন Definite Article ব্যবহার করবে।</Text>

            <Text style={[styles.heading_md, { marginTop: 20, marginBottom: 5, color: '#a72a24' }]}>যেমন:</Text>

            <View style={{ display: 'flex', gap: 5 }}>
                <Text style={styles.text}>• The cow is red. ( এখানে একটি গরুকে নির্দিষ্ট করে বুঝিয়েছে। যেমন: গরুটি লাল অর্থাৎ লাল গরুটিকে নির্দিষ্ট করে বুঝানো হয়েছে।)</Text>
                <Text style={styles.text}>• The girl is brilliant. ( এখানে একটি মেয়েকে নির্দিষ্ট করে বুঝিয়েছে। যেমন: মেয়েটি মেধাবী। অর্থাৎ মেধাবী মেয়েটিকে নির্দিষ্ট করে বুঝিয়েছে।</Text>
            </View>

            <Text style={[styles.text, { marginTop: 10 }]}>সুতরাং, কোনো কিছুর নির্দিষ্টতা বুঝাতে আমরা Definite Article ব্যবহার করবো।</Text>

            <Divider marginTop={20} marginBottom={20} />

            <Text style={[styles.heading_lg, { marginBottom: 10 }]}>Use of Articles ‘A & An’</Text>

            {/* Rule 1 */}
            <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>১.</Text> কোনো শব্দের শুরুতে Consonant থাকলে তার পূর্বে A ব্যবহৃত হয়।</Text>

            <ExampleComponent />
            <View style={{ display: 'flex', gap: 5, marginBottom: 15 }}>
                <Text style={styles.text}>- This is <Text style={{ fontFamily: FONT.bold }}>a</Text> hen.</Text>
                <Text style={styles.text}>- It is <Text style={{ fontFamily: FONT.bold }}>a</Text> pen.</Text>
            </View>

            <View style={{ backgroundColor: '#d8efef', padding: 10, marginBottom: 30, }}>
                <Text style={styles.text}>Consonant সমূহঃ B, C, D, F, G, H, J, K, L, M, N, P, Q, R, S, T, V, W, X, Y, Z. অর্থাৎ (A, E, I, O, U) ব্যাতীত বাকি সবগুলোই Consonant.</Text>
            </View>

            {/* Rule 2 */}
            <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>২.</Text> কোনো শব্দের শুরুতে Vowel (A, E, I, O, U) থাকলে তার পূর্বে An বসে।</Text>

            <ExampleComponent />
            <View style={{ display: 'flex', gap: 5, marginBottom: 15 }}>
                <Text style={styles.text}>- This is <Text style={{ fontFamily: FONT.bold }}>an</Text> egg.</Text>
                <Text style={styles.text}>- This is <Text style={{ fontFamily: FONT.bold }}>an</Text> apple.</Text>
            </View>

            <View style={{ backgroundColor: '#d8efef', padding: 10, marginBottom: 30, }}>
                <Text style={styles.text}>Vowel সমূহঃ A, E, I, O, U. অর্থাৎ ইংরেজি alphabet =A, E, I, O, U কে Vowel বলা হয়।</Text>
            </View>

            {/* Rule 3 */}
            <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>২.</Text> কোনো শব্দের প্রথমে যদি h থাকে এবং তা যদি h এর মতো উচ্চারিত হয় তাহলে a বসে।</Text>

            <ExampleComponent />
            <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                <Text style={styles.text}>- This is <Text style={{ fontFamily: FONT.bold }}>a</Text> horse.</Text>
                <Text style={styles.text}>- He is <Text style={{ fontFamily: FONT.bold }}>a</Text> historian.</Text>
            </View>

            {/* Rule 4 */}
            <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>৪.</Text> কোনো শব্দের প্রথমে যদি h থাকে এবং তা যদি h এর মতো উচ্চারিত না হয়ে ‘অ’ এর মতো হয় তাহলে an বসে।</Text>

            <ExampleComponent />
            <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                <Text style={styles.text}>- Karim is <Text style={{ fontFamily: FONT.bold }}>an</Text> honest man. (এখানে h এর উচ্চারণ ‘অ’ এর মতো হয়েছে। যেমন: অনেস্ট (honest)।</Text>
                <Text style={styles.text}>- <Text style={{ fontFamily: FONT.bold }}>An</Text> honorable person will visit our school tomorrow. (এখানে h এর উচ্চারণ ‘অ’ এর মতো হয়েছে। যেমন: অনারেবল (honorable)।</Text>
            </View>

            {/* Rule 5 */}
            <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>৫.</Text> শব্দের প্রথমে যদি VOWEL থকে এবং তা যদি ‘ইউ’ এর মতো উচ্চারণ হয় তাহলে তার পূর্বে A বসবে।</Text>

            <ExampleComponent />
            <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                <Text style={styles.text}>- He is <Text style={{ fontFamily: FONT.bold }}>a</Text> European.</Text>
                <Text style={styles.text}>- Kabir is <Text style={{ fontFamily: FONT.bold }}>a</Text> university student.</Text>
            </View>

            {/* Rule 6 */}
            <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>৬.</Text> O দিয়ে গঠিত সকল শব্দের পূর্বে an বসে। শুধুমাত্র one যুক্ত শব্দের পূর্বে a বসে। অর্থাৎ O যখন ‘ওয়া’ -র মতো উচ্চারিত হবে তখন তার পূর্বে a বসে।</Text>

            <ExampleComponent />
            <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                <Text style={styles.text}>- I saw <Text style={{ fontFamily: FONT.bold }}>a</Text> one-eyed man.</Text>
                <Text style={styles.text}>- This is <Text style={{ fontFamily: FONT.bold }}>a</Text> one-taka note.</Text>
                <Text style={styles.text}>- She is eating <Text style={{ fontFamily: FONT.bold }}>an</Text> orange.</Text>
                <Text style={styles.text}>- <Text style={{ fontFamily: FONT.bold }}>An</Text> open-heart surgery.</Text>
            </View>

            {/* Rule 7 */}
            <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>৭.</Text> Abbreviation বা সংক্ষিপ্ত শব্দের প্রথম অক্ষর Vowel এর মতো উচ্চারিত হলে তার পূর্বে an বসে। অর্থাৎ Consonant দিয়ে কোনো শব্দ শুরু হলে যদি তার উচ্চারণ Vowel এর মতো হয় তাহলে তার পূর্বে an বসবে।</Text>

            <ExampleComponent />
            <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                <Text style={styles.text}>- Mr. Zamil is <Text style={{ fontFamily: FONT.bold }}>an</Text> M.P.</Text>
                <Text style={styles.text}>- Mubarak is <Text style={{ fontFamily: FONT.bold }}>an</Text> LL.B.</Text>
                <Text style={styles.text}>- Sabina is <Text style={{ fontFamily: FONT.bold }}>an</Text> F.C.P.S.</Text>
            </View>

            {/* Rule 8 */}
            <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>৮.</Text> Abbreviation বা সংক্ষিপ্ত শব্দের প্রথম অক্ষর যদি Consonant এর মতো উচ্চারণ হয় তখন তার পূর্বে a বসে।</Text>

            <ExampleComponent />
            <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                <Text style={styles.text}>- Kamal is <Text style={{ fontFamily: FONT.bold }}>a</Text> B.A student.</Text>
                <Text style={styles.text}>- Shakib is <Text style={{ fontFamily: FONT.bold }}>a</Text> B. Sc student.</Text>
            </View>

            {/* Rule 9 */}
            <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>৯.</Text> সংখ্যা বা পরিমাণবাচক শব্দ বুঝাতে যেমন: score, couple, dozen, hundred, million ইত্যাদি শব্দসমূহের পূর্বে a বসে।</Text>

            <ExampleComponent />
            <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                <Text style={styles.text}>- Amena bought <Text style={{ fontFamily: FONT.bold }}>a</Text> dozen oranges.</Text>
                <Text style={styles.text}>- Robin earns <Text style={{ fontFamily: FONT.bold }}>a</Text> hundred taka a day.</Text>
                <Text style={styles.text}>- At least <Text style={{ fontFamily: FONT.bold }}>a</Text> million people attended the protest.</Text>
            </View>

            {/* Rule 10 */}
            <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>১০.</Text> পেশা বা ব্যবসা বুঝাতে a ব্যবহৃত হয়। যেমন:</Text>

            <ExampleComponent />
            <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                <Text style={styles.text}>- I am <Text style={{ fontFamily: FONT.bold }}>a</Text> doctor.</Text>
                <Text style={styles.text}>- She is <Text style={{ fontFamily: FONT.bold }}>a</Text> nurse.</Text>
                <Text style={styles.text}>- Karim is <Text style={{ fontFamily: FONT.bold }}>a</Text> physician.</Text>
            </View>

            {/* Rule 11 */}
            <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>১১.</Text> কখনো  কখনো Preposition অর্থে a ব্যবহৃত হয়। তখন সেই ‘ a  কে Disguised Preposition বলে। </Text>

            <ExampleComponent />
            <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                <Text style={styles.text}>- The king went <Text style={{ fontFamily: FONT.bold }}>a</Text> (on) hunting.</Text>
            </View>

            {/* Rule 12 */}
            <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>১২.</Text> Plural Noun এর পূর্বে few, little, good many, lot of, great many, good deal ইত্যাদি ব্যবহৃত হলে সে সকল Noun এর পূর্বে a বসে।</Text>

            <ExampleComponent />
            <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                <Text style={styles.text}>- Ramiz has <Text style={{ fontFamily: FONT.bold }}>a</Text> lot of mony.</Text>
                <Text style={styles.text}>- There is <Text style={{ fontFamily: FONT.bold }}>a</Text> little water in the glass.</Text>
                <Text style={styles.text}>- Selina has read <Text style={{ fontFamily: FONT.bold }}>a</Text> good deal of books.</Text>
                <Text style={styles.text}>- There are <Text style={{ fontFamily: FONT.bold }}>a</Text> few mangoes on the table.</Text>
            </View>

            {/* Rule 13 */}
            <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>১৩.</Text> Mr / Mrs / Miss এর পূর্বে a বসে।</Text>

            <ExampleComponent />
            <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                <Text style={styles.text}>- <Text style={{ fontFamily: FONT.bold }}>A</Text> Mr. Akbar called at my office.</Text>
                <Text style={styles.text}>- <Text style={{ fontFamily: FONT.bold }}>A</Text> Mrs. Shabrina sought his help.</Text>
            </View>

            {/* Rule 14 */}
            <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>১৪.</Text> তুলনা অর্থে Proper Noun যখন Common Noun হিসাবে ব্যবহৃত হয় তখন তার পূর্বে a বসে। </Text>

            <ExampleComponent />
            <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                <Text style={styles.text}>- You are <Text style={{ fontFamily: FONT.bold }}>a</Text> Nazrul.</Text>
                <Text style={styles.text}>- I see you are <Text style={{ fontFamily: FONT.bold }}>a</Text> Bangabandhu.</Text>
            </View>

            {/* Rule 15 */}
            <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>১৫.</Text> Exclamation বুঝাতে what, how, such ইত্যাদির পরে a/an বসে। </Text>

            <ExampleComponent />
            <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                <Text style={styles.text}>- How nice <Text style={{ fontFamily: FONT.bold }}>a</Text> bird.</Text>
                <Text style={styles.text}>- What <Text style={{ fontFamily: FONT.bold }}>a</Text> pretty girl.</Text>
                <Text style={styles.text}>- Such <Text style={{ fontFamily: FONT.bold }}>a</Text> long queue.</Text>
                <Text style={styles.text}>- what <Text style={{ fontFamily: FONT.bold }}>an</Text> unhappy man he is!</Text>
            </View>

            {/* Rule 16 */}
            <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>১৬.</Text> অনির্দিষ্ট কোনো Countable singular noun বা noun phrase এর প্রথম অক্ষর Vowel (A, E, I, O, U) হলে এবং তার উচ্চারণ যদি ‘ইউ’ / ‘ওয়া’ এর মতো না হয় তাহলে তাদের পূর্বে an বসে।</Text>

            <ExampleComponent />
            <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                <Text style={styles.text}>- Riya took <Text style={{ fontFamily: FONT.bold }}>an</Text> apple.</Text>
                <Text style={styles.text}>- Shakil carried <Text style={{ fontFamily: FONT.bold }}>an</Text> umbrella.</Text>
            </View>

            {/* Rule 17 */}
            <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>১৭.</Text> সমগ্র জাতি বা শ্রেণি বুঝাতে countable noun এর পূর্বে a/an ব্যবহৃত হয়।</Text>

            <ExampleComponent />
            <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                <Text style={styles.text}>- A cow is <Text style={{ fontFamily: FONT.bold }}>a</Text> domestic animal.</Text>
                <Text style={styles.text}>- <Text style={{ fontFamily: FONT.bold }}>An</Text> owl is ugly to look at.</Text>
            </View>

            {/* Rule 18 */}
            <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>২.</Text> মূল্য / দাম, গতি, অনুপাত ইত্যাদি বুঝাতে a/an বসে।</Text>

            <ExampleComponent />
            <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                <Text style={styles.text}>- Potato sells taka 40 <Text style={{ fontFamily: FONT.bold }}>a</Text> kilo.</Text>
                <Text style={styles.text}>- Maruf runs ten miles <Text style={{ fontFamily: FONT.bold }}>an</Text> hour.</Text>
            </View>






            <Text style={[styles.heading_lg, { marginBottom: 10 }]}>Use of Article ‘The’</Text>

            {/* Rule 1 */}
            <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>২.</Text> নির্দিষ্ট কোনো ব্যক্তি, বস্তু বা বিষয়কে বুঝাতে ‘The’ বসে।</Text>

            <ExampleComponent />
            <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                <Text style={styles.text}>- <Text style={{ fontFamily: FONT.bold }}>The</Text> girl standing in front of you is a nurse.</Text>
                <Text style={styles.text}>- <Text style={{ fontFamily: FONT.bold }}>The</Text> water of this pond is dirty.</Text>
            </View>

            {/* Rule 2 */}
            <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>২.</Text> এক জাতীয় সকলকে বা সমগ্র শ্রেনি / জাতিকে বুঝাতে Singular Common Noun এর পূর্বে ‘The’ বসে। </Text>

            <ExampleComponent />
            <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                <Text style={styles.text}>- <Text style={{ fontFamily: FONT.bold }}>The</Text> cow is a useful animal.</Text>
                <Text style={styles.text}>- <Text style={{ fontFamily: FONT.bold }}>The</Text> rose is a nice flower.</Text>
                <Text style={styles.text}>- <Text style={{ fontFamily: FONT.bold }}>The</Text> cheetah is the fastest animal.</Text>
            </View>

            {/* Rule 3 */}
            <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>৩.</Text>  নদী, সাগর, উপসাগর, মহাসাগর, পর্বতমালা, দ্বীপপুঞ্জ, বনভূমি, মরুভূমি, জাহাজ ইত্যাদি নামের পূর্বে ‘The’ বসে।</Text>

            <ExampleComponent />
            <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                <Text style={styles.text}>- <Text style={{ fontFamily: FONT.bold }}>The</Text> Padma is a large river.</Text>
                <Text style={styles.text}>- <Text style={{ fontFamily: FONT.bold }}>The</Text> Sahara is a desert.</Text>
                <Text style={styles.text}>- <Text style={{ fontFamily: FONT.bold }}>The</Text>y crossed the Atlantic Ocean.</Text>
                <Text style={styles.text}>- <Text style={{ fontFamily: FONT.bold }}>The</Text> Himalayas are covered with ice.</Text>
            </View>

            {/* Rule 4 */}
            <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>৪.</Text> মহাকাব্য, ধর্মগ্রন্থ এবং সংবাদপত্রের নামের পূর্বে ‘The’ বসে। </Text>

            <ExampleComponent />
            <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                <Text style={styles.text}>- Amena recites <Text style={{ fontFamily: FONT.bold }}>the</Text> holy Quran.</Text>
                <Text style={styles.text}>- <Text style={{ fontFamily: FONT.bold }}>The</Text> Prothom Alo is a daily newspaper.</Text>
                <Text style={styles.text}>- <Text style={{ fontFamily: FONT.bold }}>The</Text> Shahanama was written by the great poet Ferdousi.</Text>
            </View>

            {/* Rule 5 */}
            <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>৫.</Text> একক বস্তু যেমন: পৃথিবী, চন্দ্র, সূর্য ইত্যাদি নামের পূর্বে ‘The’ বসে।</Text>

            <ExampleComponent />
            <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                <Text style={styles.text}>- <Text style={{ fontFamily: FONT.bold }}>The</Text> Earth moves around the Sun.</Text>
                <Text style={styles.text}>- <Text style={{ fontFamily: FONT.bold }}>The</Text> Moon moves around the Earth.</Text>
            </View>

            {/* Rule 6 */}
            <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>৬.</Text> দিক বুঝাতে যেমন: পূর্ব, পশ্চিম, উত্তর, দক্ষিন এর পূর্বে ‘The’ বসে। </Text>

            <ExampleComponent />
            <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                <Text style={styles.text}>- <Text style={{ fontFamily: FONT.bold }}>The</Text> sun sets in the west.</Text>
                <Text style={styles.text}>- Warmer weather is coming from <Text style={{ fontFamily: FONT.bold }}>the</Text> south.</Text>
            </View>

            {/* Rule 7 */}
            <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>৭.</Text> বিখ্যাত স্থান, অট্টালিকা, রাজনৈতিক দল এবং সম্প্রদায় এর নামের পূর্বে ‘The’ বসে।</Text>

            <ExampleComponent />
            <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                <Text style={styles.text}>- <Text style={{ fontFamily: FONT.bold }}>The</Text> Taj Mahal is a mausoleum complex in Agra.</Text>
                <Text style={styles.text}>- <Text style={{ fontFamily: FONT.bold }}>The</Text> Republican is a political party in the USA. </Text>
            </View>

            {/* Rule 8 */}
            <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>৮.</Text> জাহাজ, উড়োজাহাজ, ট্রেন ইত্যাদির নামরে পূর্বে ‘The’ বসে। </Text>

            <ExampleComponent />
            <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                <Text style={styles.text}>- <Text style={{ fontFamily: FONT.bold }}>The</Text> Titanic sank forever.</Text>
                <Text style={styles.text}>- <Text style={{ fontFamily: FONT.bold }}>The</Text> Godhuli Express reached Dhaka.</Text>
            </View>

            {/* Rule 9 */}
            <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>৯.</Text> বর্ণনামূলক বা অর্থপূর্ণ ভৌগোলিক নামের পূর্বে ‘The’ বসে। </Text>

            <ExampleComponent />
            <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                <Text style={styles.text}>- <Text style={{ fontFamily: FONT.bold }}>The </Text>Punjab.</Text>
                <Text style={styles.text}>- <Text style={{ fontFamily: FONT.bold }}>The</Text> U.S.A.</Text>
            </View>

            {/* Rule 10 */}
            <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>১০.</Text> তারিখের নামের পূর্বে ‘The’ বসে।</Text>

            <ExampleComponent />
            <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                <Text style={styles.text}>- <Text style={{ fontFamily: FONT.bold }}>The</Text> 21st of February.</Text>
                <Text style={styles.text}>- <Text style={{ fontFamily: FONT.bold }}>The</Text> 26th March.</Text>
            </View>

            {/* Rule 11 */}
            <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>১১.</Text> ক্রমবাচক সংখ্যা (Ordinal Number) পূর্বে ‘The’ বসে।</Text>

            <ExampleComponent />
            <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                <Text style={styles.text}>- Sayma secured <Text style={{ fontFamily: FONT.bold }}>the</Text> first position in this examination.</Text>
                <Text style={styles.text}>- Bangladesh is <Text style={{ fontFamily: FONT.bold }}>the</Text> eighth-most populated country in the world.</Text>
            </View>

            {/* Rule 12 */}
            <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>১২.</Text>  জাতি ও সম্প্রদায়ের নামের পূর্বে ‘The’ বসে। </Text>

            <ExampleComponent />
            <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                <Text style={styles.text}>- <Text style={{ fontFamily: FONT.bold }}>The</Text> rich</Text>
                <Text style={styles.text}>- <Text style={{ fontFamily: FONT.bold }}>The</Text> poor</Text>
                <Text style={styles.text}>- <Text style={{ fontFamily: FONT.bold }}>The</Text> English</Text>
                <Text style={styles.text}>- <Text style={{ fontFamily: FONT.bold }}>The</Text> Muslims</Text>
            </View>

            {/* Rule 13 */}
            <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>১৩.</Text> গুরুত্বপূর্ণ ঐতিহাসিক ঘটনার নামের পূর্বে ‘The’ বসে।</Text>

            <ExampleComponent />
            <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                <Text style={styles.text}>- Samson withnessed <Text style={{ fontFamily: FONT.bold }}>the</Text> Second World War.</Text>
                <Text style={styles.text}>- <Text style={{ fontFamily: FONT.bold }}>The</Text> French Revolution changed the appearance of France.</Text>
            </View>

            {/* Rule 14 */}
            <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>১৪.</Text> Superlative Degree এর Adjective এর পূর্বে ‘The’ বসে।</Text>

            <ExampleComponent />
            <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                <Text style={styles.text}>- Amir is <Text style={{ fontFamily: FONT.bold }}>the</Text> best boy in the class.</Text>
                <Text style={styles.text}>- Sabbir is <Text style={{ fontFamily: FONT.bold }}>the</Text> bravest man in our locality.</Text>
            </View>

            {/* Rule 15 */}
            <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>১৫.</Text> একই গুনসম্পন্ন ব্যক্তি বা বস্তুর সাথে তুলনা করা হলে যার সাথে তুলনা করা হয় তার নামের পূর্বে ‘The’ বসে।</Text>

            <ExampleComponent />
            <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                <Text style={styles.text}>- Sylhet is <Text style={{ fontFamily: FONT.bold }}>the</Text> London of Bangladesh.</Text>
                <Text style={styles.text}>- Nazrul is <Text style={{ fontFamily: FONT.bold }}>the</Text> Byron of Bangladesh.</Text>
            </View>

            {/* Rule 16 */}
            <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>১৭.</Text> দুইয়ের মধ্যে তুলনা বুঝাতে Adjective এর Comparative এর পূর্বে ‘The’ বসে।</Text>

            <ExampleComponent />
            <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                <Text style={styles.text}>- Sabuj is the better of <Text style={{ fontFamily: FONT.bold }}>the</Text> two boys.</Text>
                <Text style={styles.text}>- Selim is the younger of <Text style={{ fontFamily: FONT.bold }}>the</Text> two brothers.</Text>
            </View>

            {/* Rule 17 */}
            <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>১৬.</Text> কোনো নির্দিষ্ট ব্যক্তি বা বস্তুর গুণ বুঝাতে Abstract Noun এর পূর্বে ‘The’ বসে।</Text>

            <ExampleComponent />
            <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                <Text style={styles.text}>- <Text style={{ fontFamily: FONT.bold }}>The</Text> fame of Muhammad is known to all.</Text>
                <Text style={styles.text}>- <Text style={{ fontFamily: FONT.bold }}>The</Text> kindness of Mohsin is known to all.</Text>
            </View>

            {/* Rule 18 */}
            <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>১৮.</Text> Choir, Orchestra এবং pop group এর পূর্বে ‘The’ বসে।</Text>

            <ExampleComponent />
            <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                <Text style={styles.text}>- She is a vocal of <Text style={{ fontFamily: FONT.bold }}>the</Text> miles.</Text>
            </View>

            {/* Rule 19 */}
            <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>১৯.</Text> কতিপয় Collective noun এর পূর্বে ‘The’ বসে। </Text>

            <ExampleComponent />
            <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                <Text style={styles.text}>- <Text style={{ fontFamily: FONT.bold }}>The</Text> elite.</Text>
                <Text style={styles.text}>- <Text style={{ fontFamily: FONT.bold }}>The</Text> peasantry.</Text>
            </View>

            {/* Rule 20 */}
            <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>২০.</Text> Musical Instrument এর পূর্বে ‘The’ বসে। </Text>

            <ExampleComponent />
            <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                <Text style={styles.text}>- Robina plays <Text style={{ fontFamily: FONT.bold }}>the</Text> Piano.</Text>
            </View>

            {/* Rule 21 */}
            <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>২১.</Text> যে সকল Noun দ্বারা বৃত্তি বা পেশা বুঝায় সে সকল Noun এর পূর্বে ‘The’ বসে।</Text>

            <ExampleComponent />
            <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                <Text style={styles.text}>- Fahim joined <Text style={{ fontFamily: FONT.bold }}>the</Text> army.</Text>
                <Text style={styles.text}>- He joined <Text style={{ fontFamily: FONT.bold }}>the</Text> Navy.</Text>
            </View>

            {/* Rule 22 */}
            <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>২২.</Text> সংখ্যা প্রকাশক যে Word একটা Unit অর্থে বসে তার পূর্বে ‘The’ বসে।</Text>

            <ExampleComponent />
            <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                <Text style={styles.text}>- Abir buys eggs by <Text style={{ fontFamily: FONT.bold }}>the</Text> score.</Text>
                <Text style={styles.text}>- Sohel sells mangoes by <Text style={{ fontFamily: FONT.bold }}>the</Text> hundred.</Text>
            </View>

            {/* Rule 23 */}
            <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>২৩.</Text> Singular designation (পদবী / উপাধি) এর পূর্বে ‘The’ বসে।</Text>

            <ExampleComponent />
            <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                <Text style={styles.text}>- <Text style={{ fontFamily: FONT.bold }}>The</Text> prime Minister.</Text>
                <Text style={styles.text}>- <Text style={{ fontFamily: FONT.bold }}>The</Text> President.</Text>
                <Text style={styles.text}>- <Text style={{ fontFamily: FONT.bold }}>The</Text> headmaster.</Text>
            </View>

            {/* Rule 24 */}
            <Text style={styles.text}><Text style={{ fontFamily: FONT.bold, color: '#01636a' }}>২৪.</Text> Proper Noun এর পূর্বে Adjective থাকলে উক্ত Adjective এর পূর্বে ‘The’ বসে।</Text>

            <ExampleComponent />
            <View style={{ display: 'flex', gap: 5, marginBottom: 30 }}>
                <Text style={styles.text}>- <Text style={{ fontFamily: FONT.bold }}>The</Text> great Alam was the second Caliph of Islam.</Text>
            </View>
        </ScrollView>
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

export default person