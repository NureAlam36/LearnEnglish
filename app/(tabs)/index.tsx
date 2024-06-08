import React, { useState, useEffect } from 'react';
import { StyleSheet, View, StatusBar, Text, TouchableOpacity, Platform, Image } from 'react-native';
import { useColorSchemeContext } from '@/context/ColorSchemeContext';
import { useCountryContext } from '@/context/CountryContext';

import { COLORS, FONT } from "@/constants";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import { Feather } from '@expo/vector-icons';

// screen components
import HomeScreen from '@/components/Home/Home';
import NotificationScreen from '@/app/screens/notification';

// Job Solution
import BcsSolution from '@/app/(job-solution)/bcs-solution/index';
import BcsPreparation from '@/app/(job-solution)/bcs-preliminary/index';

// Study Phases
import BnVocabularyScreen from '@/app/(study-phases)/vocabulary/bn/index';
import EnVocabularyScreen from '@/app/(study-phases)/vocabulary/en/index';

import GrammerScreen from '@/app/(study-phases)/grammer/index';
import DusScreen from '@/app/(study-phases)/daily-use-sentences/index';
import StoryScreen from '@/app/(study-phases)/story/index';
import PhrasesScreen from '@/app/(study-phases)/idioms-and-phrases/index';
import ConversationScreen from '@/app/(study-phases)/common-conversations/index';
import ProverbsScreen from '@/app/(study-phases)/proverbs/index';
import QuotationScreen from '@/app/(study-phases)/famous-quotations/index';
import ExamDetails from '@/app/live-exam/exam-details';
import ExamScreen from '@/app/live-exam/exam'
import ExamLeaderboardScreen from '@/app/live-exam/exam-leaderboard';
import ReviewQuestions from '../live-exam/review-questions';

import DailyTest from '@/app/(daily-updates)/daily-test/index';
import Tools from '@/app/tools/';

import ContentHeader from '@/components/Headers/ContentHeader';
import Search from '@/app/search/index';
import JobSolution from '@/app/screens/job-solution';
import Profile from '@/app/profile';
import Settings from "@/app/settings/";

// Create a stack navigator
const Stack = createStackNavigator();

export default function TabOneScreen() {
  const { country } = useCountryContext();

  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        headerShown: false
      }}>

      <Stack.Screen name="home_screen" component={TestScreen} options={{ headerShown: false }} />
      <Stack.Screen name="notification_screen" component={NotificationScreen} options={{ headerShown: false }} />
      <Stack.Screen name="search_screen" component={Search} options={{ headerShown: false }} />
      <Stack.Screen name="profile_screen" component={Profile} options={{ headerShown: false }} />
      <Stack.Screen name="settings_screen" component={Settings} options={{ headerShown: false }} />
      <Stack.Screen name="exam_details_screen" component={ExamDetails} options={{ headerShown: false }} />
      <Stack.Screen name="exam_screen" component={ExamScreen} options={{ headerShown: false }} />
      <Stack.Screen name='exam_leaderboard_screen' component={ExamLeaderboardScreen} options={{ headerShown: false }} />
      <Stack.Screen name="review_questions_screen" component={ReviewQuestions} options={{ headerShown: false }} />

      {/* Daily Updates */}
      <Stack.Screen name="daily_test_screen" component={DailyTest} options={{ headerShown: false }} />
      <Stack.Screen name="job_solution_screen" component={JobSolution} options={{ header: () => <ContentHeader title="Job Solution" />, headerShown: true }} />
      <Stack.Screen name="tools_screen" component={Tools} options={{ headerShown: false }} />

      {/* Job Solution */}
      <Stack.Screen name="bcs_solution_screen" component={BcsSolution} options={{ headerShown: false }} />
      <Stack.Screen name="bcs_preliminary_screen" component={BcsPreparation} options={{ headerShown: false }} />
      {/* <Stack.Screen name="ntrca_preliminary_screen" component={BcsPreparation} options={{ headerShown: false }} />
      <Stack.Screen name="bank_preliminary_screen" component={BcsPreparation} options={{ headerShown: false }} /> */}

      {/* Study Phases */}
      <Stack.Screen name="grammer_screen" component={GrammerScreen} options={{ headerShown: false }} />
      <Stack.Screen name="vocabulary_screen" component={country === 'Bangladesh' ? BnVocabularyScreen : EnVocabularyScreen} options={{ headerShown: false }} />
      <Stack.Screen name="dus_screen" component={DusScreen} options={{ headerShown: false }} />
      <Stack.Screen name="story_screen" component={StoryScreen} options={{ headerShown: false }} />
      <Stack.Screen name="phrases_screen" component={PhrasesScreen} options={{ headerShown: false }} />
      <Stack.Screen name="conversation_screen" component={ConversationScreen} options={{ headerShown: false }} />
      <Stack.Screen name="proverbs_screen" component={ProverbsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="quotation_screen" component={QuotationScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const TestScreen = ({ navigation }: any) => {
  const { colorScheme, theme } = useColorSchemeContext();
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    AsyncStorage.getItem('country').then((country) => {
      if (country) {
        setCountry(country);
      }

      setLoading(false);
    });
  }, []);

  const handleCountrySelection = (country: string) => {
    setSelectedCountry(country);
  };

  const handleStart = () => {
    AsyncStorage.setItem('country', selectedCountry);
    setCountry(selectedCountry);

    navigation.navigate('home_screen');
  };

  if (loading) {
    return (
      <Image source={require('@/assets/images/splash.png')} style={{ width: '100%', height: '100%' }} />
    );
  }

  return (
    !country ? <View style={{ flex: 1, backgroundColor: theme.mainBg }}>
      <View style={styles.container}>
        <Text style={[styles.welcomeText, { color: theme.headingPrimary }]}>Welcome</Text>
        <Text style={[styles.chooseText, { color: theme.textSecondary }]}>Please choose your country and language by clicking the options below.</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity activeOpacity={0.8}
            style={[
              styles.countryButton,
              { backgroundColor: selectedCountry === 'Bangladesh' ? COLORS.primary : theme.bgSecondary, borderWidth: 1, borderColor: theme.borderColor }
            ]}
            onPress={() => handleCountrySelection('Bangladesh')}
          >
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <Image source={require('@/assets/images/bd-icon.png')} style={{ width: 30, height: 30 }} />
              <View>
                <Text style={[styles.buttonText, { color: theme.textSecondary }]}>Bangladesh</Text>
                <Text style={{ color: theme.textSecondary, opacity: 0.7 }}>বাংলা</Text>
              </View>
            </View>
            {
              selectedCountry === 'Bangladesh' && <Feather name="check-circle" size={24} color={COLORS.white} />
            }
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}
            style={[
              styles.countryButton,
              { backgroundColor: selectedCountry === 'Global' ? COLORS.primary : theme.bgSecondary, borderWidth: 1, borderColor: theme.borderColor }
            ]}
            onPress={() => handleCountrySelection('Global')}
          >
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <Image source={require('@/assets/images/world-icon.png')} style={{ width: 30, height: 30 }} />
              <View>
                <Text style={[styles.buttonText, { color: theme.textSecondary }]}>Global</Text>
                <Text style={{ color: theme.textSecondary, opacity: 0.7 }}>English</Text>
              </View>
            </View>
            {
              selectedCountry === 'Global' && <Feather name="check-circle" size={24} color={COLORS.white} />
            }
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.startButton}
          onPress={handleStart}
          disabled={!selectedCountry}
        >
          <Text style={styles.startButtonText}>Let's Start</Text>
        </TouchableOpacity>
      </View>
    </View>
      : <HomeScreen navigation={navigation} />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // padding: 16,
    //@ts-ignore
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 50 : 10,
    paddingHorizontal: 20,
    paddingVertical: 50
  },
  welcomeText: {
    fontSize: 24,
    fontFamily: FONT.bold,
    marginBottom: 20,
  },
  chooseText: {
    fontSize: 16,
    marginBottom: 20,
    fontFamily: FONT.regular
  },
  buttonContainer: {
    gap: 10
  },
  countryButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60
  },
  selectedButton: {
    backgroundColor: '#00c47d', // Change to your selected color
  },
  buttonText: {
    fontSize: 17,
    fontFamily: FONT.regular
  },
  startButton: {
    marginTop: 'auto',
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  startButtonText: {
    fontSize: 16,
    color: '#fff',
  },
});