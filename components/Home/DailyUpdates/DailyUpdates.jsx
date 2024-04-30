import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
} from "react-native";
import { FONT, COLORS } from "../../../constants";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Daily Test",
    image: "https://cdn-icons-png.flaticon.com/512/3068/3068553.png",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "PDF Library",
    image:
      "https://icons.veryicon.com/png/o/file-type/file-type-1/pdf-icon.png",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f64",
    title: "Quizzes",
    image: "https://cdn-icons-png.freepik.com/512/8586/8586919.png",
  },
];

const Item = ({ item }) => (
  <TouchableOpacity style={styles.item} activeOpacity={0.7}>
    <View style={styles.imageContainer}>
      <Image source={{ uri: item.image }} style={{ width: 45, height: 45 }} />
    </View>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

const DailyUpdates = () => {
  return (
    <View style={styles.sectionContainer}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ margin: 0, padding: 0 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: "flex-start",
  },
  item: {
    marginHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 20,
    gap: 20,
    borderRadius: 10,
    marginLeft: 8,
    marginRight: 8,
    width: 120,
  },
  imageContainer: {},
  title: {
    fontSize: 14,
    textAlign: "center",
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  flatListContent: {},
});

export default DailyUpdates;
