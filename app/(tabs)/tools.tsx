import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { COLORS, FONT } from "../../constants";
import { LinearGradient } from "expo-linear-gradient";
import { useColorSchemeContext } from "@/context/ColorSchemeContext";

import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';

// Create a stack navigator
const Stack = createStackNavigator();

import Translator from "@/app/(tools)/translator"
import TextToSpeech from "@/app/(tools)/text-to-speech"

import ContentHeader from "@/components/Headers/ContentHeader";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Translator",
    background: ["#4481eb", "#04befe"],
    screen: "translator_screen",
    image: require("@/assets/images/translate.png"),
  },
  // {
  //   id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
  //   title: "Dictionary",
  //   background: ["#fbc2eb", "#a6c1ee"],
  //   image: "https://cdn-icons-png.flaticon.com/512/8750/8750741.png",
  //   link: "dictionary",
  // },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f64",
    title: "Text To Speech",
    background: ["#2CD8D5", "#6B8DD6", "#8E37D7"],
    image: require("@/assets/images/text-to-speech.png"),
    screen: "text_to_speech_screen",
  },
];

// Define your stack navigator with screens
const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS
      }}
    >
      <Stack.Screen name="tools_page" component={Tools} options={{ headerShown: true }} />
      <Stack.Screen name="translator_screen" component={Translator} options={{ header: () => <ContentHeader title="Translator" />, headerShown: true }} />
      <Stack.Screen name="text_to_speech_screen" component={TextToSpeech} options={{ header: () => <ContentHeader title="Text To Speech" />, headerShown: true }} />
    </Stack.Navigator>
  );
}

const Tools = ({ navigation }: any) => {
  const { colorScheme, theme } = useColorSchemeContext();

  return (
    <React.Fragment>
      <ContentHeader title="Tools" />
      <View style={[styles.sectionContainer, { backgroundColor: theme.mainBg }]}>
        <View style={{ padding: 15 }}>
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate(item.screen)} style={styles.item} activeOpacity={0.7}>
                <LinearGradient
                  colors={item.background}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.imageContainer}
                >
                  <Image source={item.image} style={{ width: 40, height: 40 }} />
                </LinearGradient>
                <Text
                  style={[
                    styles.title,
                    {
                      color:
                        colorScheme === "light"
                          ? COLORS.darkText
                          : COLORS.lightText,
                    },
                  ]}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 30 }}
          />
        </View>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    alignItems: "flex-start",
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: FONT.bold,
    marginBottom: 10,
  },
  item: {
    alignItems: "center",
    gap: 10,
  },
  imageContainer: {
    backgroundColor: "#ccdfffb8",
    padding: 18,
    borderRadius: 10,
  },
  title: {
    fontSize: 14,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
});

export default StackNavigator;
