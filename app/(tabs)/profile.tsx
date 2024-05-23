import { StyleSheet, Text, View, Platform, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import { COLORS, FONT } from "@/constants";
import LoginModal from '@/app/screens/login'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import { LinearGradient } from "expo-linear-gradient";

import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import CustomHeader from "@/components/Headers/CustomHeader";


const profile = () => {
  const { colorScheme, theme } = useColorSchemeContext();

  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  }

  const Profile = () => {
    return <React.Fragment>
      <View style={{ backgroundColor: COLORS.primary }}>
        <LinearGradient
          colors={[COLORS.bgPrimary, COLORS.bgSecondary]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ paddingTop: 10 }}
        >

          <CustomHeader title="Profile" paddingTop={1} />
          <View style={{ display: 'flex', flexDirection: 'row', gap: 20, alignItems: 'center', paddingHorizontal: 20, marginTop: 20, paddingBottom: 70 }}>
            <View>
              <LinearGradient
                colors={['#43e97b', '#38f9d7']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{ padding: 4, borderRadius: 50, marginBottom: 10, marginTop: 5 }}
              >
                <Image style={{ width: 65, height: 65, borderRadius: 50 }} source={{ uri: 'https://pics.craiyon.com/2023-06-20/89f79a8dee744596981e7417b8a7ea1d.webp' }} />
              </LinearGradient>
              {/* <Image source={{ uri: 'https://pics.craiyon.com/2023-06-20/89f79a8dee744596981e7417b8a7ea1d.webp' }} style={{ width: 65, height: 65, borderRadius: 50 }} /> */}
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ display: 'flex', }}>
                <Text style={{ fontFamily: FONT.bold, fontSize: 20, color: 'white' }}>Nure Alam S.</Text>
                <Text style={{ fontFamily: FONT.regular, color: 'white' }}>ID: 368547</Text>
                <Text style={{ fontFamily: FONT.regular, color: 'white' }}>mdnurealamsiddiq36@gmail.com</Text>
              </View>
              <View>
                <AntDesign name="edit" size={20} color="white" />
              </View>
            </View>
          </View>
        </LinearGradient>

      </View>
      <View style={{ backgroundColor: '#2a5298', display: 'flex', flexDirection: 'row', height: 100, marginTop: -50, margin: 20, padding: 10, borderRadius: 20 }}>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <View style={{ display: 'flex', alignItems: 'center', gap: 5, flex: 1, borderRightWidth: 1, borderRightColor: theme.borderColor }}>
            <Text style={{ color: 'white', fontFamily: FONT.medium }}>Total Exam</Text>
            <Text style={{ fontFamily: FONT.medium, fontSize: 20, color: 'white' }}>10</Text>
          </View>
          <View style={{ display: 'flex', alignItems: 'center', gap: 5, flex: 1, borderRightWidth: 1, borderRightColor: theme.borderColor }}>
            <Text style={{ color: 'white', fontFamily: FONT.medium }}>Passed</Text>
            <Text style={{ fontFamily: FONT.medium, fontSize: 20, color: '#00c47d' }}>10</Text>
          </View>
          <View style={{ display: 'flex', alignItems: 'center', gap: 5, flex: 1, }}>
            <Text style={{ color: 'white', fontFamily: FONT.medium }}>Failed</Text>
            <Text style={{ fontFamily: FONT.medium, fontSize: 20, color: 'red' }}>10</Text>
          </View>
        </View>
      </View>

      <View>

      </View>
    </React.Fragment>
  }

  return (
    <Profile />

  )
}

export default profile

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
  }
})