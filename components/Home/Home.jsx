import React from "react";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Tabs } from "expo-router";

import DailyUpdates from "./DailyUpdates/DailyUpdates";
import StudyPhases from "./StudyPhases/StudyPhases";
import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import { COLORS, FONT } from "@/constants";
import AntDesign from "@expo/vector-icons/AntDesign";

import MainPageHeader from "@/components/Headers/MainPageHeader";

const JobPreparationCard = ({ navigation }) => {
  const { theme } = useColorSchemeContext();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("job_solution_screen")}
      activeOpacity={0.8}
      style={[
        styles.cardContainer,
        {
          backgroundColor: theme.bgSecondary,
          borderWidth: 1,
          borderColor: theme.borderColor,
        },
      ]}
    >
      <View style={styles.textContainer}>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, { color: theme.headingSecondary }]}>
            Job Solution
          </Text>
          <AntDesign name="arrowright" size={22} color={COLORS.primary} />
        </View>
        <Text style={[styles.description, { color: theme.textSecondary }]}>
          Prepare for job exams with complete MCQ and past questions.
        </Text>
      </View>
      <Image
        source={{
          uri: "https://www.nicepng.com/png/full/415-4154786_when-interviewing-for-your-first-ot-job-be.png",
        }}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

const Home = ({ navigation }) => {
  const { colorScheme } = useColorSchemeContext();

  return (
    <React.Fragment>
      <MainPageHeader navigation={navigation} />

      <SafeAreaView
        style={[
          styles.container,
          {
            backgroundColor:
              colorScheme === "light" ? "#f2f2f2" : COLORS.darkPrimary,
          },
        ]}
      >
        <FlatList
          data={["daily", "study", "job-solution"]}
          renderItem={({ item }) => {
            switch (item) {
              case "daily":
                return <DailyUpdates navigation={navigation} />;
              case "study":
                return <StudyPhases navigation={navigation} />;
              case "job-solution":
                return <JobPreparationCard navigation={navigation} />;
              default:
                return null;
            }
          }}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 10,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  cardContainer: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 12,
    borderRadius: 10,
    gap: 30,
  },
  textContainer: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    gap: 10,
  },
  title: {
    fontSize: 19,
    fontFamily: FONT.bold,
  },
  description: {
    fontSize: 14,
    fontFamily: FONT.regular,
  },
  image: {
    width: 55,
    height: 55,
  },
});

export default Home;
