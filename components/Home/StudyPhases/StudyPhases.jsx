import React from "react";
import {
  View,
  Image,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { COLORS, FONT, icons, images, SIZES } from "../../../constants";
import { useColorSchemeContext } from "@/context/ColorSchemeContext";

import { Link } from "expo-router";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Grammar",
    screen: "grammer_screen",
    image:
      "https://cdn.iconscout.com/icon/premium/png-256-thumb/english-book-3465842-2900552.png",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Vocabulary",
    screen: "vocabulary_screen",
    image:
      "https://cdn.iconscout.com/icon/premium/png-256-thumb/vocabulary-3599386-3015185.png?f=webp",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Daily Use \nSentences",
    screen: "dus_screen",
    image: "https://cdn-icons-png.flaticon.com/512/4039/4039248.png",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Story",
    screen: "story_screen",
    image: "https://cdn-icons-png.flaticon.com/512/8750/8750683.png",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f64",
    title: "Idioms and \nPhrases",
    screen: "phrases_screen",
    image: "https://www.southlakebaptist.com/wp-content/uploads/Words-Icon.png",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f65",
    title: "Common \nConversations",
    screen: "conversation_screen",
    image: "https://cdn-icons-png.flaticon.com/512/608/608968.png",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f66",
    title: "Proverbs",
    screen: "proverbs_screen",
    image:
      "https://overviewbible.com/wp-content/uploads/2014/06/proverbs-free-bible-icon.png-300x300.png",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f66",
    title: "Famous \nQuotations",
    screen: "quotation_screen",
    image: "https://cdn-icons-png.flaticon.com/512/6314/6314351.png",
  },
];

const StudyPhases = ({ navigation }) => {
  const { colorScheme } = useColorSchemeContext();

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: colorScheme === "light" ? COLORS.darkText : COLORS.lightText,
          },
        ]}
      >
        Study Phases
      </Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.screen)}
            activeOpacity={0.7}
            style={[
              styles.itemContainer,
              {
                backgroundColor:
                  colorScheme === "light" ? "#fff" : COLORS.darkSecondary,
              },
            ]}
            asChild
          >
            <View style={styles.item}>
              <View style={styles.imageWraper}>
                <Image
                  style={styles.image}
                  source={{ uri: item.image }}
                  resizeMode="contain"
                />
              </View>
              <Text
                style={[
                  styles.title,
                  {
                    color:
                      colorScheme === "light" ? COLORS.gray : COLORS.lightText,
                  },
                ]}
              >
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        style={{ gap: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 10,
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: FONT.bold,
  },
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    padding: 4,
  },
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
  },
  imageWraper: {
    marginRight: 10,
    padding: 8,
    backgroundColor: "#e5f5ff",
    borderRadius: 10,
  },
  image: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 14,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
});

export default StudyPhases;
