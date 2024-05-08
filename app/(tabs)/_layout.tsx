import React, { useState } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Tabs } from 'expo-router';
import { FontAwesome, FontAwesome5, MaterialIcons, Feather } from '@expo/vector-icons';

import { COLORS, FONT } from "@/constants";

import { useClientOnlyValue } from '@/components/useClientOnlyValue';


import { useColorSchemeContext } from '@/context/ColorSchemeContext';

export default function TabLayout() {
  const { colorScheme } = useColorSchemeContext();
  // const colorScheme = useColorScheme();

  return (
    <View style={{ flex: 1 }}>
      {/* Set the content color of the status bar */}
      <StatusBar barStyle="light-content" />

      <View style={{ flex: 1 }}>
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: colorScheme === 'light' ? COLORS.primary : COLORS.white,
            // Disable the static render of the header on web
            // to prevent a hydration error in React Navigation v6.
            headerShown: useClientOnlyValue(false, true),
            tabBarStyle: { height: 50, backgroundColor: colorScheme === 'light' ? '#fff' : COLORS.darkPrimary, paddingBottom: 8, paddingTop: 5 },
            tabBarLabelStyle: { fontFamily: FONT.medium }
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: 'Home',
              tabBarIcon: ({ color }) => <FontAwesome name="home" size={20} color={color} />,
              headerShown: false,
            }}
          />
          <Tabs.Screen
            name="exercise"
            options={{
              title: 'Exercise',
              headerShown: false,
              headerStyle: { backgroundColor: '#5495fb' },
              tabBarIcon: ({ color }) => <FontAwesome5 name="book-reader" size={20} color={color} />,
            }}
          />
          <Tabs.Screen
            name="three"
            options={{
              title: 'Translator',
              tabBarIcon: ({ color }) => <MaterialIcons name="g-translate" size={20} color={color} />,
            }}
          />

          <Tabs.Screen
            name="two"
            options={{
              title: 'Settings',
              headerStyle: { backgroundColor: COLORS.primary },
              tabBarIcon: ({ color }) => <Feather name="bar-chart-2" size={20} color={color} />,
              headerTitleStyle: { fontFamily: FONT.medium, color: '#fff' },
            }}
          />
        </Tabs>
      </View>
    </View >
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
    transform: [{ translateX: -251 }],
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
    backgroundColor: 'red',
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
