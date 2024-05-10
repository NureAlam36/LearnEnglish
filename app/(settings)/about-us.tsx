import React from 'react'
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { COLORS, FONT } from "@/constants";

import CustomHeader from '@/components/Headers/ContentHeader';

import { useColorSchemeContext } from "@/context/ColorSchemeContext";

const AboutUs = () => {
    const { colorScheme } = useColorSchemeContext();

    return (
        <React.Fragment>
            <CustomHeader title="About Us" />

            <View style={{ flex: 1, backgroundColor: colorScheme === "light" ? "#fff" : COLORS.darkPrimary, paddingHorizontal: 15 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* <Text style={styles.heading}>About Us</Text> */}
                    <Text style={[styles.paragraph, { paddingTop: 20 }]}>Welcome to Learn English Fast and Easy Way, where language learning meets convenience and efficiency. Our app is designed to empower users with the tools they need to master the English language quickly and effortlessly.</Text>

                    <Text style={styles.subHeading}>Our Mission:</Text>
                    <Text style={styles.paragraph}>At Learn English Fast and Easy Way, our mission is simple: to make learning English accessible to everyone, regardless of their background or proficiency level. We believe that language learning should be enjoyable, effective, and tailored to individual needs.</Text>

                    <Text style={styles.subHeading}>What Sets Us Apart:</Text>
                    <Text style={styles.paragraph}>
                        <Text style={[styles.bold]}>Comprehensive Curriculum:</Text> Our app offers a comprehensive curriculum that covers all aspects of English language learning, including grammar, vocabulary, speaking, listening, and writing.
                    </Text>
                    <Text style={styles.paragraph}>
                        <Text style={styles.bold}>Interactive Lessons:</Text> Engage with interactive lessons and activities designed to keep you motivated and focused on your learning goals.
                    </Text>
                    <Text style={styles.paragraph}>
                        <Text style={styles.bold}>Personalized Learning:</Text> Tailor your learning experience with customizable study plans and progress tracking features that adapt to your pace and preferences.
                    </Text>
                    <Text style={styles.paragraph}>
                        <Text style={styles.bold}>Real-life Applications:</Text> Practice English in real-life scenarios with dialogues, role-plays, and immersive exercises that simulate everyday situations.
                    </Text>
                    <Text style={styles.paragraph}>
                        <Text style={styles.bold}>Expert Guidance:</Text> Benefit from expert guidance and feedback from qualified English language instructors who are dedicated to helping you succeed.
                    </Text>
                    <Text style={styles.paragraph}>
                        <Text style={styles.bold}>Accessible Anytime, Anywhere:</Text> Learn on the go with our mobile-friendly app, accessible anytime, anywhere, whether you're at home, commuting, or traveling.
                    </Text>

                    <Text style={styles.subHeading}>Our Commitment to Quality:</Text>
                    <Text style={styles.paragraph}>We are committed to providing high-quality educational content that is both engaging and effective. Our team of language experts works tirelessly to ensure that our app remains up-to-date with the latest teaching methodologies and linguistic trends.</Text>

                    <Text style={styles.subHeading}>Join Our Community:</Text>
                    <Text style={styles.paragraph}>Join our growing community of language learners who are passionate about mastering English the fast and easy way. Whether you're a beginner just starting your language journey or an advanced learner looking to refine your skills, we welcome you to explore all that our app has to offer.</Text>

                    <Text style={styles.subHeading}>Start Learning Today:</Text>
                    <Text style={styles.paragraph}>Embark on your English language learning journey with "Learn English Fast and Easy Way." Download our app now and discover the joy of mastering a new language with confidence and ease. Let's learn together!</Text>
                </ScrollView>
            </View>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    heading: {
        paddingTop: 15,
        fontSize: 24,
        marginBottom: 10,
        fontFamily: FONT.bold
    },
    subHeading: {
        fontSize: 20,
        marginBottom: 5,
        fontFamily: FONT.bold
    },
    paragraph: {
        fontSize: 17,
        color: COLORS.gray,
        fontFamily: FONT.regular,
        marginBottom: 20
    },
    bold: {
        fontFamily: FONT.bold
    },
});

export default AboutUs