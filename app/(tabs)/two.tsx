import React, { useEffect } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, FONT } from "@/constants";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useColorSchemeContext } from '@/context/ColorSchemeContext';

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

const SettingsScreen = () => {
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
          <View style={styles.item}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
              <Entypo name="help-with-circle" size={24} style={styles.itemIcon} />
              <Text style={styles.text}>Help and FAQ</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pages</Text>
        <View style={[styles.sectionWrap, { borderWidth: 1, borderColor: '#ededed', borderRadius: 10 }]}>
          <View style={styles.item}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
              <MaterialIcons name="privacy-tip" size={24} style={styles.itemIcon} />
              <Text style={styles.text}>Privacy Policy</Text>
            </View>
          </View>
          <Divider />
          <View style={styles.item}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
              <Ionicons name="reader-outline" size={24} style={styles.itemIcon} />
              <Text style={styles.text}>About Us</Text>
            </View>
          </View>
          <Divider />
          <View style={styles.item}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
              <Ionicons name="reader-sharp" size={24} style={styles.itemIcon} />
              <Text style={styles.text}>Terms and Conditions</Text>
            </View>
          </View>
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
    </View>
  );
};

export default SettingsScreen;
