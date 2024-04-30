import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native';
import { Ionicons, AntDesign, FontAwesome, FontAwesome6, Feather, Entypo, MaterialIcons } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';

import { COLORS, FONT, icons, images, SIZES } from "@/constants";

const Sidebar = () => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.appInfo}>
                <Image style={styles.appIcon} source={{ uri: 'https://cdn4.vectorstock.com/i/1000x1000/07/68/learn-english-design-vector-8300768.jpg' }} />
                <View>
                    <Text style={styles.appName}>Learn English</Text>
                    <Text style={{ fontSize: 13, color: COLORS.gray, fontFamily: FONT.regular }}>Fast and Easy Way</Text>
                </View>
            </View>

            <View style={{ marginVertical: 20, borderBottomWidth: 1, borderBottomColor: '#e1e1e1' }}></View>

            {/* Menu Items */}
            <View style={styles.sidebarItemsWraper}>
                {/* @ts-ignore */}
                <Link href="/our-advisors" style={styles.sidebarItem} asChild>
                    <TouchableOpacity style={styles.sidebarItem}>
                        <FontAwesome6 style={styles.itemIcon} name="users-line" size={24} color="black" />
                        <Text style={styles.itemName}>Our Advisors</Text>
                    </TouchableOpacity>
                </Link>
                {/* @ts-ignore */}
                <Link href="/about-us" style={styles.sidebarItem} asChild>
                    <TouchableOpacity style={styles.sidebarItem}>
                        <Entypo style={styles.itemIcon} name="info-with-circle" size={24} color="black" />
                        <Text style={styles.itemName}>About Us</Text>
                    </TouchableOpacity>
                </Link>
                {/* @ts-ignore */}
                <Link href="/contact-us" style={styles.sidebarItem} asChild>
                    <TouchableOpacity style={styles.sidebarItem}>
                        <FontAwesome6 style={styles.itemIcon} name="contact-book" size={24} color="black" />
                        <Text style={styles.itemName}>Contact Us</Text>
                    </TouchableOpacity>
                </Link>
                {/* @ts-ignore */}
                <Link href="/faq" style={styles.sidebarItem} asChild>
                    <TouchableOpacity style={styles.sidebarItem}>
                        <FontAwesome style={styles.itemIcon} name="list-alt" size={24} color="black" />
                        <Text style={styles.itemName}>FAQ</Text>
                    </TouchableOpacity>
                </Link>
                {/* @ts-ignore */}
                <Link href="/terms-and-conditions" style={styles.sidebarItem} asChild>
                    <TouchableOpacity style={styles.sidebarItem}>
                        <Entypo style={styles.itemIcon} name="text-document-inverted" size={24} color="black" />
                        <Text style={styles.itemName}>Terms & Conditions</Text>
                    </TouchableOpacity>
                </Link>
                {/* @ts-ignore */}
                <Link href="/settings" style={styles.sidebarItem} asChild>
                    <TouchableOpacity style={styles.sidebarItem}>
                        <Feather style={styles.itemIcon} name="settings" size={24} color="black" />
                        <Text style={styles.itemName}>Settings</Text>
                    </TouchableOpacity>
                </Link>
            </View>

            <View style={{ marginVertical: 20, borderBottomWidth: 1, borderBottomColor: '#e1e1e1' }}></View>

            {/* Feedback Button */}
            {/* @ts-ignore */}
            <Link href="/give-us-feedback" style={styles.sidebarItem} asChild>
                <TouchableOpacity style={styles.feedbackButton} >
                    <MaterialIcons style={styles.itemIcon} name="feedback" size={24} color="black" />
                    <Text style={styles.itemName}>Give us feedback</Text>
                </TouchableOpacity>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    sidebar: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        width: 250,
        backgroundColor: '#fff',
        zIndex: 100,
        elevation: 10,
        borderRightWidth: 1,
        borderColor: '#ccc',
        marginTop: 93,
    },
    openSidebar: {
        transform: [{ translateX: 0 }],
    },
    closedSidebar: {
        transform: [{ translateX: -250 }],
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
        zIndex: 99,
    },
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 20,
    },
    appInfo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    appIcon: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    appName: {
        fontSize: 20,
        fontFamily: FONT.bold,
    },
    sidebarItemsWraper: {
        display: 'flex',
        gap: 20
    },
    sidebarItem: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
    },
    itemIcon: {
        color: COLORS.gray,
    },
    itemName: {
        fontSize: 15,
        color: COLORS.gray,
        fontFamily: FONT.regular,
    },
    feedbackButton: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
    }
});


export default Sidebar