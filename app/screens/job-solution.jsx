import React from "react";
import {
  View,
  Image,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { COLORS, FONT, icons, images, SIZES } from "../../constants";
import { LinearGradient } from "expo-linear-gradient";
import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import Feather from "@expo/vector-icons/Feather";

import ContentHeader from "@/components/Headers/ContentHeader";

const DATA = [
  {
    id: 1,
    title: "BCS 10th - 45th",
    screen: "bcs_solution_screen",
    background: ["#22E1FF", "#1D8FE1", "#625EB1"],
    image: require("@/assets/images/bcs-solutions.png"),
  },
  {
    id: 2,
    title: "BCS Preparation",
    screen: "bcs_preliminary_screen",
    background: ["#4481eb", "#04befe"],
    image: require("@/assets/images/bcs_preliminary.png"),
  },
  {
    id: 3,
    title: "NTRCA Preparation",
    screen: "ntrca_preliminary_screen",
    background: ["#B7F8DB", "#B7F8DB", "#50A7C2"],
    image: require("@/assets/images/ntrca-preparation.png"),
  },
  {
    id: 4,
    title: "Bank Preparation",
    screen: "bank_preliminary_screen",
    background: ["#2CD8D5", "#6B8DD6", "#8E37D7"],
    image: require("@/assets/images/bank_preparation.png"),
  },
];

const JobSolution = ({ navigation }) => {
  const { colorScheme, theme } = useColorSchemeContext();

  return (
    <React.Fragment>
      <ContentHeader title="Job Solution" />

      <View
        style={[styles.sectionContainer, { backgroundColor: theme.mainBg }]}
      >
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(item.screen)}
              activeOpacity={0.7}
              style={[
                styles.itemContainer,
                {
                  backgroundColor: theme.bgSecondary,
                  borderWidth: 1,
                  borderColor: theme.borderColor,
                },
              ]}
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
                        colorScheme === "light"
                          ? COLORS.gray
                          : COLORS.lightText,
                    },
                  ]}
                >
                  {item.title}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#e5f5ff",
                  width: 30,
                  height: 30,
                  borderRadius: 50,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Feather
                  name="chevron-right"
                  size={20}
                  color={COLORS.primary}
                />
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ gap: 10 }}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    padding: 10,
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 15,
    fontFamily: FONT.bold,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderRadius: 10,
    gap: 0,
  },
  item: {
    flex: 1,
    flexDirection: "row",
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
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 14,
    fontFamily: FONT.medium,
    color: COLORS.gray,
    textAlign: "center",
  },
});

export default JobSolution;
