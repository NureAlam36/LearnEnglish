import React, { useState, useEffect } from 'react';
import { StyleSheet, View, StatusBar, Text, TouchableOpacity, Platform, Image } from 'react-native';
import { Tabs } from 'expo-router';
import { FontAwesome, FontAwesome5, MaterialIcons, Feather } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { useColorSchemeContext } from '@/context/ColorSchemeContext';
import { COLORS, FONT } from "@/constants";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TabLayout() {
  const { colorScheme, theme } = useColorSchemeContext();
  const [country, setCountry] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      if (!country) {
        AsyncStorage.getItem('country').then((storedCountry: any) => {
          if (storedCountry) {
            setCountry(storedCountry);
            clearInterval(interval);
          }
        });
      }
    }, 0);

    return () => clearInterval(interval);
  }, []);

  // AsyncStorage.setItem('country', '');

  return (
    <View style={{ flex: 1, backgroundColor: theme.mainBg }}>
      {/* Set the content color of the status bar */}
      <StatusBar barStyle="light-content" />

      <Tabs
        screenOptions={{
          tabBarActiveTintColor: colorScheme === 'light' ? COLORS.primary : COLORS.white,
          // Disable the static render of the header on web
          // to prevent a hydration error in React Navigation v6.
          headerShown: true,
          tabBarStyle: { height: 50, backgroundColor: colorScheme === 'light' ? '#fff' : COLORS.darkPrimary, paddingBottom: 8, paddingTop: 5, display: !country ? 'none' : 'flex' },
          tabBarLabelStyle: { fontFamily: FONT.medium }
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <FontAwesome name="home" size={20} color={color} />,
            headerShown: false
          }}
        />
        <Tabs.Screen
          name="exercise"
          options={{
            title: 'Exercise',
            headerShown: false,
            tabBarIcon: ({ color }) => <FontAwesome5 name="book-reader" size={20} color={color} />,
          }}
        />

        <Tabs.Screen
          name="tools"
          options={{
            title: 'Tools',
            tabBarIcon: ({ color }) => <MaterialIcons name="web-stories" size={20} color={color} />,
            headerShown: false,
          }}
        />

        <Tabs.Screen
          name="settings"
          options={{
            title: 'Settings',
            headerShown: false,
            tabBarIcon: ({ color }) => <MaterialCommunityIcons name="view-dashboard-outline" size={20} color={color} />,
          }}
        />
      </Tabs>
    </View >
  );
}