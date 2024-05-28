import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import { COLORS, FONT } from "@/constants";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import CustomHeader from "@/components/Headers/CustomHeader";

const EditProfile = () => {
  const { colorScheme, theme } = useColorSchemeContext();

  const styles = StyleSheet.create({
    headerContent: {
      paddingVertical: 10,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      marginLeft: 20
    },
    backButton: {
      marginRight: 10,
      borderWidth: 1,
      borderColor: '#e1e1e1',
      borderRadius: 50,
      width: 35,
      height: 35,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
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
    },
    labelText: {
      color: theme.textSecondary,
      opacity: 0.7,
      fontFamily: FONT.medium,
      fontSize: 13,
    }
  })

  return <View style={{ backgroundColor: theme.bgPrimary, flex: 1 }}>
    <View style={{ backgroundColor: COLORS.primary }}>
      <LinearGradient
        colors={[COLORS.bgPrimary, COLORS.bgSecondary]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ paddingTop: 10, borderBottomStartRadius: 25, borderBottomEndRadius: 25 }}
      >

        <CustomHeader title="Edit Profile" paddingTop={1} />
        <View style={{ display: 'flex', gap: 10, alignItems: 'center', paddingHorizontal: 20, marginTop: 15, paddingBottom: 45 }}>
          <View>
            <LinearGradient
              colors={['#43e97b', '#38f9d7']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{ padding: 4, borderRadius: 50, marginTop: 5 }}
            >
              <Image style={{ width: 100, height: 100, borderRadius: 50 }} source={{ uri: 'https://pics.craiyon.com/2023-06-20/89f79a8dee744596981e7417b8a7ea1d.webp' }} />

              <View style={{ position: 'absolute', bottom: 0, right: 0, backgroundColor: '#fff', padding: 8, borderRadius: 50, borderWidth: 1, borderColor: theme.borderColor }}>
                <MaterialCommunityIcons name="camera-plus-outline" size={20} color={COLORS.gray} />
              </View>
            </LinearGradient>
            {/* <Image source={{ uri: 'https://pics.craiyon.com/2023-06-20/89f79a8dee744596981e7417b8a7ea1d.webp' }} style={{ width: 65, height: 65, borderRadius: 50 }} /> */}
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontFamily: FONT.bold, fontSize: 20, color: 'white' }}>Nure Alam S.</Text>
          </View>
        </View>
      </LinearGradient>
    </View>

    <View style={{ flex: 1, padding: 20, borderRadius: 20, marginTop: -15, backgroundColor: theme.bgPrimary }}>
      <Text style={styles.sectionTitle}>Personal Details</Text>
      <View style={{ display: 'flex', gap: 15 }}>
        <View style={{ borderWidth: 1, borderColor: theme.borderPrimary, borderRadius: 5 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15, padding: 10 }}>
            <View style={{ borderRightWidth: 1, paddingRight: 10, borderColor: theme.borderPrimary }}>
              <FontAwesome5 name="user" size={24} color={theme.textSecondary} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.labelText}>Full Name</Text>
              <TextInput style={{ width: '100%', borderColor: '#e1e1e1', fontFamily: FONT.medium, color: theme.textPrimary }} placeholder="Enter your full name" value='Md. Nure Alam' />
            </View>
          </View>
        </View>
        <View style={{ borderWidth: 1, borderColor: theme.borderPrimary, borderRadius: 5 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15, padding: 10 }}>
            <View style={{ borderRightWidth: 1, paddingRight: 10, borderColor: theme.borderPrimary }}>
              <MaterialIcons name="mail-outline" size={24} color={theme.textSecondary} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.labelText}>Email</Text>
              <TextInput style={{ width: '100%', borderColor: '#e1e1e1', fontFamily: FONT.medium, color: theme.textPrimary }} value='mdnurealamsiddiq36@gmail.com' />
            </View>
          </View>
        </View>
        <View style={{ borderWidth: 1, borderColor: theme.borderPrimary, borderRadius: 5 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15, padding: 10 }}>
            <View style={{ borderRightWidth: 1, paddingRight: 10, borderColor: theme.borderPrimary }}>
              <MaterialIcons name="phone-android" size={24} color={theme.textSecondary} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.labelText}>Mobile</Text>
              <TextInput style={{ width: '100%', borderColor: '#e1e1e1', fontFamily: FONT.medium, color: theme.textPrimary }} placeholder="+880" />
            </View>
          </View>
        </View>
        <View style={{ borderWidth: 1, borderColor: theme.borderPrimary, borderRadius: 5 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15, padding: 10 }}>
            <View style={{ borderRightWidth: 1, paddingRight: 10, borderColor: theme.borderPrimary }}>
              <MaterialIcons name="date-range" size={24} color={theme.textSecondary} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.labelText}>Date of birth</Text>
              <TextInput style={{ width: '100%', borderColor: '#e1e1e1', fontFamily: FONT.medium, color: theme.textPrimary }} placeholder="dd/mm/yy" />
            </View>
          </View>
        </View>


        <View style={{ borderWidth: 1, borderColor: theme.borderPrimary, borderRadius: 5 }}>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={{ backgroundColor: COLORS.primary, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
              <Text style={{ fontFamily: FONT.bold, fontSize: 14, color: 'white' }}>Update</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
}

export default EditProfile