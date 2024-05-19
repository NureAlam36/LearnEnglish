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
    id: 1,
    title: "Daily Test",
    screen: "daily_test_screen",
    image: require("@/assets/images/education.png"),
  },
  {
    id: 2,
    title: "PDF Library",
    screen: "pdf_library_screen",
    image: require("@/assets/images/books-blue.png"),
  },
];

const DailyUpdates = ({ navigation }) => {
  const { colorScheme, theme } = useColorSchemeContext();

  return (
    <View style={styles.sectionContainer}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.screen)}
            style={[
              styles.item,
              {
                backgroundColor:
                  colorScheme === "light" ? "#a2e7d6de" : COLORS.darkSecondary,
                borderWidth: 1,
                borderColor: theme.borderColor,
              },
            ]}
            activeOpacity={0.7}
          >
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={item.image} />
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
    marginTop: 15,
    marginBottom: 10,
    alignItems: "flex-start",
  },
  item: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 15,
    borderRadius: 10,
    width: 150,
    flexDirection: "row",
  },
  imageContainer: {},
  image: {
    width: 36,
    height: 36,
  },
  title: {
    fontSize: 14,
    textAlign: "center",
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  flatListContent: {},
});

export default DailyUpdates;
