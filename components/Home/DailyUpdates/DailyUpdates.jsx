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
import { useColorSchemeContext } from "@/context/ColorSchemeContext";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Daily Test",
    image:
      "https://cdn4.iconfinder.com/data/icons/popicon-bluetone-education/256/14-512.png",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "PDF Library",
    image:
      "https://w7.pngwing.com/pngs/616/366/png-transparent-book-design-creativity-creative-design-three-books-blue-angle-text-thumbnail.png",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f64",
    title: "Quizzes",
    image: "https://cdn-icons-png.freepik.com/512/8586/8586919.png",
  },
];

const DailyUpdates = () => {
  const { colorScheme } = useColorSchemeContext();

  return (
    <View style={styles.sectionContainer}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.item,
              {
                backgroundColor:
                  colorScheme === "light" ? "#fff" : COLORS.darkSecondary,
              },
            ]}
            activeOpacity={0.7}
          >
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: item.image }}
                style={{ width: 45, height: 45 }}
              />
            </View>
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
        contentContainerStyle={{ gap: 15 }}
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
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 15,
    borderRadius: 10,
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
