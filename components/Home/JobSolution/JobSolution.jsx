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
import { LinearGradient } from "expo-linear-gradient";
import { useColorSchemeContext } from "@/context/ColorSchemeContext";

const DATA = [
  {
    id: 1,
    title: "BCS \n10th - 45th",
    screen: "bcs_solution_screen",
    background: ["#22E1FF", "#1D8FE1", "#625EB1"],
    image: require("@/assets/images/bcs-solutions.png"),
  },
  {
    id: 2,
    title: "BCS \nPreparation",
    screen: "bcs_preliminary_screen",
    background: ["#4481eb", "#04befe"],
    image: require("@/assets/images/bcs_preliminary.png"),
  },
  {
    id: 3,
    title: "NTRCA \nPreparation",
    screen: "ntrca_preliminary_screen",
    background: ["#B7F8DB", "#B7F8DB", "#50A7C2"],
    image: require("@/assets/images/ntrca-preparation.png"),
  },
  {
    id: 4,
    title: "Bank \nPreparation",
    screen: "bank_preliminary_screen",
    background: ["#2CD8D5", "#6B8DD6", "#8E37D7"],
    image: require("@/assets/images/bank_preparation.png"),
  },
];

const JobSolution = ({ navigation }) => {
  const { colorScheme } = useColorSchemeContext();

  return (
    <View
      style={[
        styles.sectionContainer,
        {
          backgroundColor:
            colorScheme === "light" ? "#fff" : COLORS.darkSecondary,
        },
      ]}
    >
      <Text
        style={[
          styles.sectionTitle,
          {
            color: colorScheme === "light" ? COLORS.darkText : COLORS.lightText,
          },
        ]}
      >
        Job Solution
      </Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.screen)}
            activeOpacity={0.7}
            style={styles.itemContainer}
          >
            <View style={styles.item}>
              <LinearGradient
                colors={item.background}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.imageWraper}
              >
                <Image
                  style={styles.image}
                  source={item.image}
                  resizeMode="contain"
                />
              </LinearGradient>
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
        contentContainerStyle={{ gap: 25 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginVertical: 10,
    padding: 15,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 15,
    fontFamily: FONT.bold,
  },
  itemContainer: {},
  item: {
    flex: 1,
    alignItems: "center",
    gap: 10,
  },
  imageWraper: {
    marginRight: 10,
    padding: 12,
    backgroundColor: "#53a5ff",
    borderRadius: 50,
  },
  image: {
    width: 35,
    height: 35,
  },
  title: {
    fontSize: 14,
    fontFamily: FONT.medium,
    color: COLORS.gray,
    textAlign: "center",
  },
});

export default JobSolution;
