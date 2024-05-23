import React from 'react'
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { COLORS, FONT } from "@/constants";

import ContentHeader from '@/components/Headers/ContentHeader';

import { useColorSchemeContext } from "@/context/ColorSchemeContext";

const TermsAndConditions = () => {
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
            <ContentHeader title="Terms of Service" />

            <View style={{ flex: 1, backgroundColor: colorScheme === "light" ? "#fff" : COLORS.darkPrimary, paddingHorizontal: 15 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* <Text style={styles.heading}>About Us</Text> */}
                    <Text style={[styles.paragraph, { paddingTop: 20 }]}>Welcome to Learn English Fast and Easy Way! By accessing or using our mobile application and website, you agree to be bound by these Terms of Service. Please read these terms carefully before using our services.</Text>

                    <Text style={styles.subHeading}>1. Acceptance of Terms:</Text>
                    <Text style={styles.paragraph}>By accessing or using our services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our services.</Text>

                    <Text style={styles.subHeading}>2. Use of Services:</Text>
                    <Text style={styles.paragraph}>You may use our services for personal, non-commercial purposes only. You agree not to use our services for any illegal or unauthorized purpose or in any manner that violates these terms.</Text>

                    <Text style={styles.subHeading}>3. User Accounts:</Text>
                    <Text style={styles.paragraph}>Some features of our services may require you to create a user account. You are responsible for maintaining the confidentiality of your account credentials and for any activity that occurs under your account.</Text>

                    <Text style={styles.subHeading}>4. Intellectual Property:</Text>
                    <Text style={styles.paragraph}>All content and materials available through our services are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works based on our content without our prior written consent.</Text>

                    <Text style={styles.subHeading}>5. Disclaimer of Warranties:</Text>
                    <Text style={styles.paragraph}>Our services are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. We do not guarantee that our services will be error-free or uninterrupted.</Text>

                    <Text style={styles.subHeading}>6. Limitation of Liability</Text>
                    <Text style={styles.paragraph}>We are not liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with your use of our services.</Text>

                    <Text style={styles.subHeading}>7. Changes to Terms</Text>
                    <Text style={styles.paragraph}>We may update these Terms of Service from time to time. We will notify you of any changes by posting the new Terms of Service on this page.</Text>

                    <Text style={styles.subHeading}>Contact Us:</Text>
                    <Text style={styles.paragraph}>If you have any questions about these Terms of Service, please contact us at terms@learnenglishfastandeasyway.com.</Text>
                </ScrollView>
            </View>
        </React.Fragment>
    )
}

export default TermsAndConditions