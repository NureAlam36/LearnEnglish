import React, { useEffect } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, FONT } from "@/constants";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useColorSchemeContext } from '@/context/ColorSchemeContext';

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import FAQ from '@/app/(settings)/faq';
import PrivecyPolicy from '@/app/(settings)/privacy-policy';
import AboutUs from '@/app/(settings)/about-us';
import ContactUs from '@/app/(settings)/contact-us';
import TermsAndConditions from '../(settings)/terms-and-conditions';

import CustomHeader from '@/components/Headers/ContentHeader';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
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

const SettingsScreen = ({ navigation }: any) => {
  const { colorScheme, toggleColorScheme } = useColorSchemeContext();
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);

  useEffect(() => {
    setDarkModeEnabled(colorScheme === 'dark');
  }, []);


  const toggleDarkMode = () => {
    setDarkModeEnabled(!darkModeEnabled);
    toggleColorScheme();
  };

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
      backgroundColor: colorScheme === 'light' ? '#f2f2f2' : COLORS.darkSecondary
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

  return (
    <React.Fragment>
      <CustomHeader title="Settings" />

      <View style={[styles.container, { backgroundColor: colorScheme === 'light' ? '#fff' : COLORS.darkPrimary }]}>
        {/* <Text style={{ fontFamily: FONT.bold, fontSize: 24, marginBottom: 30 }}>Settings</Text> */}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>General</Text>

          <View style={[styles.sectionWrap, { borderWidth: 1, borderColor: '#ededed', borderRadius: 10 }]}>
            <View style={[styles.item, { display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                <MaterialIcons name="dark-mode" size={24} style={styles.itemIcon} />
                <Text style={styles.text}>Dark Mode</Text>
              </View>
              <Switch value={darkModeEnabled} onValueChange={toggleDarkMode} />
            </View>
            <Divider />
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
          <View style={[styles.sectionWrap, { borderWidth: 1, borderColor: '#ededed', borderRadius: 10 }]}>
            <TouchableOpacity onPress={() => navigation.navigate('privacy_policy_screen')} activeOpacity={0.7} style={styles.item}>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                <MaterialIcons name="privacy-tip" size={24} style={styles.itemIcon} />
                <Text style={styles.text}>Privacy Policy</Text>
              </View>
            </TouchableOpacity>
            <Divider />
            <TouchableOpacity onPress={() => navigation.navigate('about_us_screen')} activeOpacity={0.7} style={styles.item}>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                <Ionicons name="reader-outline" size={24} style={styles.itemIcon} />
                <Text style={styles.text}>About Us</Text>
              </View>
            </TouchableOpacity>
            <Divider />
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
            <View style={[styles.sectionWrap, { borderWidth: 1, borderColor: '#ededed', borderRadius: 10, padding: 15 }]}>
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
