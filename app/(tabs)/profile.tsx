import React from 'react'

import LoginSignUpScreen from '@/app/screens/login'
import ProfileContent from '@/app/profile';
import EditProfile from '@/app/profile/edit';
import ChangePassword from '../profile/change-password';

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { useAuth } from '@/context/AuthContext';
import { useNetwork } from '@/context/NetworkContext';

import NoInternetScreen from "@/app/screens/no-internet";

// Define stack navigator for nested screens within HomeScreen
const Stack = createStackNavigator();

const ProfileScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS
      }}
    >
      <Stack.Screen name="profile_screen" component={Profile} options={{ headerShown: false }} />
      <Stack.Screen name="edit_profile_screen" component={EditProfile} options={{ headerShown: false }} />
      <Stack.Screen name="change_password_screen" component={ChangePassword} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const Profile = ({ navigation }: any) => {
  const { isConnected } = useNetwork();
  const { isAuthenticated } = useAuth();

  if (!isConnected) {
    return <NoInternetScreen />
  }

  if (!isAuthenticated) {
    return <LoginSignUpScreen />
  }

  return <ProfileContent navigation={navigation} />
}

export default ProfileScreen