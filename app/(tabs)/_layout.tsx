import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native';
import { Tabs } from 'expo-router';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';

import { COLORS, FONT, icons, images, SIZES } from "@/constants";

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

import AppSidebar from '@/components/Sidebar/Sidebar';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: any) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

const HeaderComponent = ({ toggleSidebar }: any) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10, width: '100%' }}>
      {/* Left component (Sidebar menu icon) */}
      <TouchableOpacity onPress={toggleSidebar}>
        <Ionicons name="menu-outline" size={36} color="white" />
      </TouchableOpacity>

      {/* Center component (App icon/name) */}
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 20, color: 'white', fontFamily: FONT.bold }}>Learn English</Text>
        <Text style={{ fontSize: 13, color: '#e8e8e8', fontFamily: FONT.medium }}>Fast and Easy Way</Text>
      </View>

      {/* Right component (Notification icon) */}
      <TouchableOpacity onPress={() => {/* Handle notification icon press */ }}>
        <Ionicons name="notifications-outline" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const Sidebar = ({ isOpen, onClose }: any) => {
  return (
    <SafeAreaView style={[styles.sidebar, isOpen ? styles.openSidebar : styles.closedSidebar]}>
      <AppSidebar />
    </SafeAreaView>
  );
};

export default function TabLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const colorScheme = useColorScheme();

  return (
    <View style={{ flex: 1 }}>
      {isSidebarOpen && (
        <Pressable onPress={closeSidebar} style={styles.overlay} /> // Add transparent overlay to detect press outside sidebar
      )}
      <Sidebar isOpen={isSidebarOpen} />
      <View style={{ flex: 1 }}>
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
            // Disable the static render of the header on web
            // to prevent a hydration error in React Navigation v6.
            headerShown: useClientOnlyValue(false, true),
            tabBarStyle: { height: 50, backgroundColor: '#fff', paddingBottom: 2, paddingTop: 2 },
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: 'Home',
              headerTitle: () => <HeaderComponent toggleSidebar={toggleSidebar} />,
              headerStyle: { backgroundColor: '#5495fb' },
              tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />
            }}
          />
          <Tabs.Screen
            name="two"
            options={{
              title: 'Contact',
              headerTitle: () => <HeaderComponent toggleSidebar={toggleSidebar} />,
              headerStyle: { backgroundColor: '#5495fb' },
              tabBarIcon: ({ color }) => <AntDesign name="customerservice" size={24} color={color} />,
            }}
          />
        </Tabs>
      </View>
    </View>
  );
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
