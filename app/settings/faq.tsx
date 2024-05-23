import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { COLORS, FONT } from "@/constants";

import ContentHeader from '@/components/Headers/ContentHeader';

import { useColorSchemeContext } from "@/context/ColorSchemeContext";

const FAQ = () => {
    const { colorScheme } = useColorSchemeContext();

    const styles = StyleSheet.create({
        heading: {
            paddingTop: 20,
            fontSize: 16,
            marginBottom: 20,
            fontFamily: FONT.regular,
            color: colorScheme === 'light' ? COLORS.gray : COLORS.lightText
        },
        question: {
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 10,
            color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText
        },
        answer: {
            fontSize: 16,
            marginBottom: 20,
            fontFamily: FONT.regular,
            color: colorScheme === 'light' ? COLORS.gray : COLORS.lightText
        },
        paragraph: {
            fontSize: 17,
            marginBottom: 20,
            fontFamily: FONT.regular,
            color: colorScheme === 'light' ? COLORS.gray : COLORS.lightText
        }
    });

    return (
        <React.Fragment>
            <ContentHeader title="FAQ" />

            <View style={{ flex: 1, backgroundColor: colorScheme === "light" ? "#fff" : COLORS.darkPrimary, paddingHorizontal: 15 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.heading}>Here you'll find answers to commonly asked questions about our app and language learning resources. If you have a question that isn't addressed below, please don't hesitate to contact our customer support team for assistance.</Text>

                    <Text style={styles.question}>1. What is "Learn English Fast and Easy Way"?</Text>
                    <Text style={styles.answer}>"Learn English Fast and Easy Way" is a mobile app designed to help users learn and master the English language quickly and efficiently. Our app offers a comprehensive curriculum covering grammar, vocabulary, speaking, listening, and writing skills.</Text>

                    <Text style={styles.question}>2. Who can benefit from using the app?</Text>
                    <Text style={styles.answer}>Our app is suitable for learners of all levels, from beginners to advanced speakers. Whether you're a student, a professional, or someone looking to improve their English language skills for personal enrichment, our app provides resources tailored to your individual needs.</Text>

                    <Text style={styles.question}>3. Is the app suitable for children?</Text>
                    <Text style={styles.answer}>While our app is designed with adult learners in mind, older children and teenagers may also find it helpful in their English language studies. However, parental guidance is recommended, as some content may be more challenging for younger learners.</Text>

                    <Text style={styles.question}>4. How does the app work?</Text>
                    <Text style={styles.answer}>The app features interactive lessons, activities, and exercises that cover various aspects of English language learning. Users can access lessons on grammar rules, vocabulary expansion, conversational skills, and more. The app also includes features such as personalized study plans, progress tracking, and feedback from instructors.</Text>

                    <Text style={styles.question}>5. Is the app free to download?</Text>
                    <Text style={styles.answer}>Yes, "Learn English Fast and Easy Way" is free to download from the App Store and Google Play Store. However, certain premium features may require a subscription or one-time purchase to unlock full access.</Text>

                    <Text style={styles.question}>6. Can I use the app offline?</Text>
                    <Text style={styles.answer}>Yes, many of the app's features are available offline, allowing users to continue their language learning even without an internet connection. However, some features, such as live instructor feedback and online community interactions, may require internet access.</Text>

                    <Text style={styles.question}>7. How can I track my progress with the app?</Text>
                    <Text style={styles.answer}>The app includes built-in progress tracking features that allow users to monitor their performance over time. Users can view their quiz scores, completion rates, and overall proficiency levels to gauge their progress and identify areas for improvement.</Text>

                    <Text style={styles.question}>8. What if I encounter technical issues with the app?</Text>
                    <Text style={styles.answer}>If you experience any technical issues while using the app, please contact our customer support team at support@learnenglishfastandeasyway.com. Our team will work diligently to resolve any issues and ensure that you can continue your language learning without interruption.</Text>

                    <Text style={styles.question}>9. How often is the app updated?</Text>
                    <Text style={styles.answer}>We strive to regularly update the app with new content, features, and improvements based on user feedback and the latest developments in language learning technology. Be sure to enable automatic updates on your device to ensure you're always using the latest version of the app.</Text>

                    <Text style={styles.question}>10. How can I provide feedback or suggestions for the app?</Text>
                    <Text style={styles.answer}>We value your feedback and suggestions for improving the app. Please email us at feedback@learnenglishfastandeasyway.com with any comments, ideas, or suggestions you may have. Your input helps us continually enhance our app to better serve our users' needs.</Text>

                    <Text style={styles.paragraph}>We hope this FAQ has addressed any questions you may have about "Learn English Fast and Easy Way." If you have any further inquiries, please don't hesitate to reach out to us. Happy learning!</Text>
                </ScrollView>
            </View>
        </React.Fragment>
    )
}

export default FAQ;
