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

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Translator",
    image:
      "https://static-00.iconduck.com/assets.00/google-translate-icon-2048x2035-36xcbzp3.png",
    link: "translator",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Dictionary",
    image: "https://cdn-icons-png.flaticon.com/512/8750/8750741.png",
    link: "dictionary",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f64",
    title: "Text To Speech",
    image:
      "https://cdn-icons-png.freepik.com/256/3069/3069810.png?semt=ais_hybrid",
    link: "text-to-speech",
  },
];

const Item = ({ item }) => (
  <Link href={`/${item.link}`} style={styles.itemContainer} asChild>
    <TouchableOpacity style={styles.item} activeOpacity={0.7}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={{ width: 35, height: 35 }} />
      </View>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  </Link>
);

const Tools = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Tools</Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
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
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 14,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
});

export default Tools;
