import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Platform, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import { COLORS, FONT } from "@/constants";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import RNPickerSelect from 'react-native-picker-select';

import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-date-picker';

import CustomHeader from "@/components/Headers/CustomHeader";
import { useUser } from '@/context/UserContext';

import countries from '@/data/countries.json';
import { useToast } from 'react-native-toast-notifications';
import { useAuth } from '@/context/AuthContext';

const EditProfile = () => {
  const toast = useToast();
  const { colorScheme, theme } = useColorSchemeContext();
  const { userData } = useUser();
  const { userAuthToken } = useAuth();
  const [name, setName] = useState(userData?.name);
  const [mobile, setMobile] = useState(userData?.mobile);

  const [selectedCountry, setSelectedCountry] = useState<any>([]);
  const [date, setDate] = useState<any>('');
  const [show, setShow] = useState(false);

  const showMode = () => {
    setShow(true);
  };

  useEffect(() => {
    const userCountry = userData?.country;
    // console.log(userData);

    if (userCountry) {
      const country = countries.find((country) => country.name === userCountry);
      // console.log(country);
      setSelectedCountry(country);

    }
  }, [userData]);

  const handleCountryChange = (value: string) => {
    const country = countries.find((country) => country.code === value);

    setSelectedCountry(country);
  }


  const onChange = (event: any, selectedDate: any) => {
    setShow(Platform.OS === 'ios');
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const handleUpdate = async () => {
    if (!name) {
      toast.show("Please enter your name.", {
        type: 'danger',
        placement: 'bottom',
      });
    }

    if (!selectedCountry) {
      toast.show("Please select your country.", {
        type: 'danger',
        placement: 'bottom',
      });

      return false;
    }




    const country_name = selectedCountry ? selectedCountry.name : '';
    // const dial_code = selectedCountry ? selectedCountry.dial_code : '';
    // const mobile_number = dial_code + mobile;

    try {
      const response = await axios.post('http://192.168.0.117/web/english_go_pro/edit_profile.php', {
        action: 'edit_profile', email: userData.email, token: userAuthToken, name, country: country_name, mobile, dob: date
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      });

      // console.log(response.data);

      if (response.data.status === 'success') {

      } else {
        toast.show(response.data.message, {
          type: 'danger',
          placement: 'bottom',
        });
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  }

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
      fontFamily: FONT.regular,
      fontSize: 13,
    }
  })

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

  const countryItems = countries.map((country) => ({
    label: country.name,
    value: country.code,
  }));

  const mobileItems = countries.map((country) => ({
    label: country.dial_code,
    value: country.code,
  }));

  return <View style={{ backgroundColor: theme.bgPrimary, flex: 1 }}>
    <View style={{ backgroundColor: COLORS.primary }}>
      <LinearGradient
        colors={[COLORS.bgPrimary, COLORS.bgSecondary]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ paddingTop: 10, borderBottomStartRadius: 25, borderBottomEndRadius: 25 }}
      >

        <CustomHeader title="Edit Profile" paddingTop={1} />
        <View style={{ display: 'flex', gap: 10, alignItems: 'center', paddingHorizontal: 20, marginTop: 15, paddingBottom: 40 }}>
          <View>
            <LinearGradient
              colors={['#43e97b', '#38f9d7']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{ padding: 4, borderRadius: 50, marginTop: 5 }}
            >
              <Image style={{ width: 100, height: 100, borderRadius: 50 }} source={{ uri: 'https://image.lexica.art/full_jpg/19f280a2-2b97-4be2-b782-1fd5c70b84f4' }} />

              <View style={{ position: 'absolute', bottom: 0, right: 0, backgroundColor: '#fff', padding: 8, borderRadius: 50, borderWidth: 1, borderColor: theme.borderColor }}>
                <MaterialCommunityIcons name="camera-plus-outline" size={20} color={COLORS.gray} />
              </View>
            </LinearGradient>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontFamily: FONT.bold, fontSize: 20, color: 'white' }}>{userData?.name}</Text>
          </View>
        </View>
      </LinearGradient>
    </View>

    <View style={{ flex: 1, borderRadius: 20, marginTop: -15, backgroundColor: theme.bgPrimary }}>
      <ScrollView style={{ padding: 20, }} showsVerticalScrollIndicator={false}>
        {/* <Text style={styles.sectionTitle}>Personal Details</Text> */}
        <View style={{ display: 'flex', gap: 15, paddingBottom: 50 }}>
          <View style={{ borderWidth: 1, borderColor: theme.borderPrimary, borderRadius: 5 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15, padding: 10 }}>
              <View style={{ borderRightWidth: 1, paddingRight: 10, borderColor: theme.borderPrimary }}>
                <FontAwesome5 name="user" size={24} color={theme.textSecondary} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.labelText}>Full Name</Text>
                <TextInput style={{ width: '100%', borderColor: '#e1e1e1', fontFamily: FONT.medium, color: theme.textPrimary }} placeholder="Enter your full name" value={userData?.name} onChangeText={(text) => setName(text)} />
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
                <TextInput style={{ width: '100%', borderColor: '#e1e1e1', fontFamily: FONT.medium, color: theme.textPrimary }} value={userData?.email} readOnly />
              </View>
            </View>
          </View>
          <View style={{ borderWidth: 1, borderColor: theme.borderPrimary, borderRadius: 5 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15, padding: 10 }}>
              <View style={{ borderRightWidth: 1, paddingRight: 10, borderColor: theme.borderPrimary }}>
                <MaterialIcons name="outlined-flag" size={24} color={theme.textSecondary} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.labelText}>Country</Text>
                {/* <TextInput style={{ width: '100%', borderColor: '#e1e1e1', fontFamily: FONT.medium, color: theme.textPrimary }} placeholder="+880" /> */}
                <RNPickerSelect
                  value={selectedCountry?.code}
                  onValueChange={(value) => handleCountryChange(value)}
                  placeholder={{ label: 'Select Country', value: null, disabled: true, color: COLORS.gray2 }}
                  items={countryItems.map((item) => ({
                    ...item,
                    color: item.value === selectedCountry?.code ? pickerSelectStyles.selectedItem.color : pickerSelectStyles.itemStyle.color
                  }))}
                  style={{
                    ...pickerSelectStyles,
                    inputIOS: pickerSelectStyles.inputIOS,
                    inputAndroid: pickerSelectStyles.inputAndroid,
                  }}
                  useNativeAndroidPickerStyle={false} // Disable native style for Android
                  Icon={() => {
                    return null; // This will hide the arrow
                  }}
                />
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
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                  {
                    selectedCountry?.flag ? <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5, marginRight: 5 }}>
                      <Text style={{ fontSize: 20 }}>{selectedCountry?.flag}</Text>
                      <Text style={{ fontFamily: FONT.medium, color: theme.textSecondary, marginTop: 2.5 }}>{selectedCountry?.dial_code}</Text>
                    </View>
                      : <View style={{ backgroundColor: theme.borderPrimary, width: 50, height: 1.5, paddingHorizontal: 8, marginTop: 5 }}></View>
                  }

                  <TextInput style={{ width: '100%', borderColor: '#e1e1e1', fontFamily: FONT.medium, color: theme.textPrimary, marginTop: 5 }} placeholder="-- --- -- --" placeholderTextColor={theme.textSecondary} value={mobile} onChangeText={(text) => setMobile(text)} />
                </View>
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

                {Platform.OS === 'android' && (
                  <TouchableOpacity onPress={showMode}>
                    <View pointerEvents="none">
                      <TextInput
                        style={{ fontFamily: FONT.medium, color: theme.textPrimary }}
                        placeholder="Select Date"
                        value={date ? date.toDateString() : ''}
                      />
                    </View>
                  </TouchableOpacity>
                )}

                {Platform.OS === 'ios' && (
                  <>
                    <TouchableOpacity onPress={() => setShow(true)}>
                      <View pointerEvents="none">
                        <TextInput
                          style={{ fontFamily: FONT.medium, color: theme.textPrimary }}
                          placeholder="Select Date"
                          value={date ? date.toDateString() : ''}
                        />
                      </View>
                    </TouchableOpacity>
                    <DatePicker
                      modal
                      open={show}
                      date={date || new Date()}
                      onConfirm={(date) => {
                        setShow(false);
                        setDate(date);
                      }}
                      onCancel={() => {
                        setShow(false);
                      }}
                    />
                  </>
                )}

                {show && Platform.OS === 'android' && (
                  <DateTimePicker
                    value={date || new Date()}
                    mode="date"
                    display="default"
                    onChange={onChange}
                  />
                )}
              </View>
            </View>
          </View>


          <TouchableOpacity activeOpacity={0.8} onPress={() => handleUpdate()}>
            <View style={{ backgroundColor: COLORS.primary, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
              <Text style={{ fontFamily: FONT.bold, fontSize: 14, color: 'white' }}>Update</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  </View>
}

export default EditProfile