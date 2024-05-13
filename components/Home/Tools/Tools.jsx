import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import { COLORS, FONT, icons, images, SIZES } from "../../../constants";
import { LinearGradient } from "expo-linear-gradient";
import { useColorSchemeContext } from "@/context/ColorSchemeContext";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Translator",
    background: ["#4481eb", "#04befe"],
    link: "translator",
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
    link: "text-to-speech",
  },
];

const Tools = () => {
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
        Tools
      </Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Link href={`/${item.link}`} asChild>
            <TouchableOpacity style={styles.item} activeOpacity={0.7}>
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
          </Link>
        )}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 15 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    alignItems: "flex-start",
    marginTop: 10,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: FONT.bold,
    marginBottom: 10,
  },
  item: {
    marginHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
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

export default Tools;
