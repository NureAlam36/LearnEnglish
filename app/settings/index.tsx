import React, { useState, useEffect } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { COLORS, FONT } from "@/constants";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import Fontisto from '@expo/vector-icons/Fontisto';
import { useColorSchemeContext } from '@/context/ColorSchemeContext';
import { useCountryContext } from '@/context/CountryContext';
import RNPickerSelect from 'react-native-picker-select';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import FAQ from '@/app/settings/faq';
import PrivecyPolicy from '@/app/settings/privacy-policy';
import AboutUs from '@/app/settings/about-us';
import ContactUs from '@/app/settings/contact-us';
import TermsAndConditions from './terms-and-conditions';

import ContentHeader from '@/components/Headers/ContentHeader';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS
      }}
    >
      <Stack.Screen name="setting_screen" component={SettingsScreen} options={{ headerShown: false }} />

      {/* Settings */}
      <Stack.Screen name="faq_screen" component={FAQ} options={{ headerShown: false }} />
      <Stack.Screen name="privacy_policy_screen" component={PrivecyPolicy} options={{ headerShown: false }} />
      <Stack.Screen name="about_us_screen" component={AboutUs} options={{ headerShown: false }} />
      <Stack.Screen name="contact_us_screen" component={ContactUs} options={{ headerShown: false }} />
      <Stack.Screen name="terms_and_conditions_screen" component={TermsAndConditions} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const Divider = ({ marginTop = 0, marginBottom = 0, borderColor = '#ededed' }) => {
  const { colorScheme, theme } = useColorSchemeContext();

  return (
    <View style={{
      height: 1,
      backgroundColor: colorScheme === 'light' ? '#ebebeb' : borderColor,
      alignSelf: 'stretch',
      marginTop: marginTop,
      marginBottom: marginBottom,
    }} />
  )
}

const SettingsScreen = ({ navigation }: any) => {
  const { colorScheme, theme, toggleColorScheme } = useColorSchemeContext();
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);
  const { country, updateCountry } = useCountryContext();
  const [selectedValue, setSelectedValue] = useState(country);

  useEffect(() => {
    setDarkModeEnabled(colorScheme === 'dark');
  }, []);


  const toggleDarkMode = () => {
    setDarkModeEnabled(!darkModeEnabled);
    toggleColorScheme();
  };

  const handleChangeLanguage = (value: string) => {
    setSelectedValue(value);
    updateCountry(value);
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 15,
      backgroundColor: '#fff',
    },
    section: {
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 16,
      marginBottom: 10,
      fontFamily: FONT.bold,
      color: colorScheme === 'light' ? COLORS.gray : COLORS.lightText
    },
    sectionWrap: {
      backgroundColor: colorScheme === 'light' ? '#f9f9f9' : COLORS.darkSecondary
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },
    item: {
      height: 50,
      justifyContent: 'center',
      paddingHorizontal: 15,
    },
    text: {
      fontSize: 15,
      fontFamily: FONT.medium,
      color: colorScheme === 'light' ? COLORS.gray : COLORS.lightText
    },
    itemIcon: {
      color: colorScheme === 'light' ? COLORS.darkText : '#d1d1d1'
    }
  });

  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      width: '100%',
      padding: 0,
      margin: 0,
      fontFamily: FONT.medium,
      color: theme.textSecondary,
      borderWidth: 0,
      backgroundColor: 'transparent',
    },
    inputAndroid: {
      width: '100%',
      padding: 0,
      margin: 0,
      fontFamily: FONT.medium,
      color: theme.textSecondary,
      borderWidth: 0,
      backgroundColor: 'transparent',
    },
    itemStyle: {
      fontSize: 16,
      height: 44,
      color: COLORS.gray
    },
    selectedItem: {
      color: COLORS.primary
    },
  });

  const items = [
    { label: 'Bangladesh', value: 'Bangladesh' },
    { label: 'Global', value: 'Global' },
  ];

  return (
    <React.Fragment>
      <ContentHeader title="Settings" />

      <View style={[styles.container, { backgroundColor: colorScheme === 'light' ? '#fff' : COLORS.darkPrimary }]}>
        {/* <Text style={{ fontFamily: FONT.bold, fontSize: 24, marginBottom: 30 }}>Settings</Text> */}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>General</Text>

          <View style={[styles.sectionWrap, { borderWidth: 1, borderColor: colorScheme === 'light' ? '#ebebeb' : theme.borderColor, borderRadius: 10 }]}>
            <Divider borderColor={theme.borderColor} />
            <View style={[styles.item, { display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                <Fontisto name="world" size={20} style={styles.itemIcon} />
                <Text style={styles.text}>Language</Text>
              </View>
              <View style={{ marginRight: 20 }}>
                <RNPickerSelect
                  value={selectedValue}
                  onValueChange={(value) => handleChangeLanguage(value)}
                  placeholder={{}}
                  items={items.map((item) => ({
                    ...item,
                    color: item.value === selectedValue ? pickerSelectStyles.selectedItem.color : pickerSelectStyles.itemStyle.color
                  }))}
                  style={{
                    ...pickerSelectStyles,
                    inputIOS: pickerSelectStyles.inputIOS,
                    inputAndroid: pickerSelectStyles.inputAndroid,
                  }}
                  useNativeAndroidPickerStyle={false}
                  Icon={() => {
                    return <View style={{ position: 'absolute' }}>
                      <MaterialIcons name="arrow-drop-down" size={24} style={styles.itemIcon} />
                    </View>; // This will hide the arrow
                  }}
                />
              </View>
            </View>
            <View style={[styles.item, { display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                <MaterialIcons name="dark-mode" size={24} style={styles.itemIcon} />
                <Text style={styles.text}>Dark Mode</Text>
              </View>
              <Switch value={darkModeEnabled} onValueChange={toggleDarkMode} />
            </View>
            <Divider borderColor={theme.borderColor} />
            <TouchableOpacity onPress={() => navigation.navigate('faq_screen')} activeOpacity={0.7} style={styles.item}>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                <Entypo name="help-with-circle" size={24} style={styles.itemIcon} />
                <Text style={styles.text}>Help and FAQ</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pages</Text>
          <View style={[styles.sectionWrap, { borderWidth: 1, borderColor: colorScheme === 'light' ? '#ebebeb' : theme.borderColor, borderRadius: 10 }]}>
            <TouchableOpacity onPress={() => navigation.navigate('privacy_policy_screen')} activeOpacity={0.7} style={styles.item}>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                <MaterialIcons name="privacy-tip" size={24} style={styles.itemIcon} />
                <Text style={styles.text}>Privacy Policy</Text>
              </View>
            </TouchableOpacity>
            <Divider borderColor={theme.borderColor} />
            <TouchableOpacity onPress={() => navigation.navigate('about_us_screen')} activeOpacity={0.7} style={styles.item}>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                <Ionicons name="reader-outline" size={24} style={styles.itemIcon} />
                <Text style={styles.text}>About Us</Text>
              </View>
            </TouchableOpacity>
            <Divider borderColor={theme.borderColor} />
            <TouchableOpacity onPress={() => navigation.navigate('terms_and_conditions_screen')} activeOpacity={0.7} style={styles.item}>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                <Ionicons name="reader-sharp" size={24} style={styles.itemIcon} />
                <Text style={styles.text}>Terms and Conditions</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <TouchableOpacity>
            <View style={[styles.sectionWrap, { borderWidth: 1, borderColor: colorScheme === 'light' ? '#ebebeb' : theme.borderColor, borderRadius: 10, padding: 15 }]}>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                <Entypo name="google-play" size={24} style={styles.itemIcon} />
                <View>
                  <Text style={[styles.text, { fontSize: 18, fontFamily: FONT.medium, marginBottom: 5 }]}>Leave Feedback</Text>
                  <Text style={[styles.text, { fontStyle: 'italic' }]}>Let us know what you think of the app.</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Version - 1.0.1</Text>
        </View>
      </View>
    </React.Fragment>
  );
};

export default StackNavigator;