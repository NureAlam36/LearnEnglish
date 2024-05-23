import React from 'react'
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { COLORS, FONT } from "@/constants";

import ContentHeader from '@/components/Headers/ContentHeader';

import { useColorSchemeContext } from "@/context/ColorSchemeContext";

const PrivacyPolicy = () => {
    const { colorScheme } = useColorSchemeContext();

    const styles = StyleSheet.create({
        heading: {
            paddingTop: 15,
            fontSize: 24,
            marginBottom: 10,
            fontFamily: FONT.bold,
            color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText
        },
        subHeading: {
            fontSize: 20,
            marginBottom: 5,
            fontFamily: FONT.bold,
            color: colorScheme === 'light' ? COLORS.darkText : COLORS.lightText
        },
        paragraph: {
            fontSize: 17,
            fontFamily: FONT.regular,
            marginBottom: 20,
            color: colorScheme === 'light' ? COLORS.gray : COLORS.lightText
        },
        bold: {
            fontFamily: FONT.bold
        },
    });

    return (
        <React.Fragment>
            <ContentHeader title="Privacy Policy" />

            <View style={{ flex: 1, backgroundColor: colorScheme === "light" ? "#fff" : COLORS.darkPrimary, paddingHorizontal: 15 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* <Text style={styles.heading}>About Us</Text> */}
                    <Text style={[styles.paragraph, { paddingTop: 20 }]}>At Learn English Fast and Easy Way, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose information about you when you use our mobile application and website.</Text>

                    <Text style={styles.subHeading}>Information We Collect:</Text>
                    <Text style={styles.paragraph}>We collect information you provide directly to us, such as when you create an account, participate in interactive features of our services, or contact us for support. The types of information we may collect include your name, email address, profile picture, and any other information you choose to provide.</Text>
                    <Text style={styles.paragraph}>We also automatically collect certain information when you use our services, such as your IP address, device information, and usage data. This information helps us improve our services and provide a better user experience.</Text>

                    <Text style={styles.subHeading}>How We Use Your Information:</Text>
                    <Text style={styles.paragraph}>We may use the information we collect for various purposes, including:</Text>
                    <View style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
                        <Text style={[styles.paragraph, { margin: 0 }]}>➣ Providing, maintaining, and improving our services</Text>
                        <Text style={[styles.paragraph, { margin: 0 }]}>➣ Personalizing your experience</Text>
                        <Text style={[styles.paragraph, { margin: 0 }]}>➣ Analyzing and improving our services</Text>
                        <Text style={[styles.paragraph, { margin: 0 }]}>➣ Communicating with you about our services</Text>
                        <Text style={[styles.paragraph, { margin: 0 }]}>➣ Protecting our users and our services</Text>
                    </View>


                    <Text style={styles.subHeading}>Information Sharing:</Text>
                    <Text style={styles.paragraph}>We may share your information with third parties for various purposes, such as service providers, business partners, or as required by law. We take steps to ensure that your information is protected and only shared in accordance with this Privacy Policy.</Text>


                    <Text style={styles.subHeading}>Your Choices:</Text>
                    <Text style={styles.paragraph}>You can choose not to provide certain information or opt-out of certain data collection practices. However, this may limit your ability to use certain features of our services.</Text>

                    <Text style={styles.subHeading}>Security:</Text>
                    <Text style={styles.paragraph}>We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.</Text>

                    <Text style={styles.subHeading}>Changes to This Policy:</Text>
                    <Text style={styles.paragraph}>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</Text>

                    <Text style={styles.subHeading}>Contact Us</Text>
                    <Text style={styles.paragraph}>If you have any questions about this Privacy Policy, please contact us at privacy@learnenglishfastandeasyway.com.</Text>
                </ScrollView>
            </View>
        </React.Fragment>
    )
}

export default PrivacyPolicy