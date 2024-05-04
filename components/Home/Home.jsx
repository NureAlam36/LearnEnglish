import React from "react";
import {
  SafeAreaView,
  ScrollView,
  FlatList,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { Stack, useRouter } from "expo-router";

import DailyUpdates from "./DailyUpdates/DailyUpdates";
import JobSolution from "./JobSolution/JobSolution";
import StudyPhases from "./StudyPhases/StudyPhases";
import Tools from "./Tools/Tools";
import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import { COLORS } from "@/constants";

const Home = () => {
  const { colorScheme } = useColorSchemeContext();

  return (
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
        data={["daily", "job-solution", "study", "tools"]}
        renderItem={({ item }) => {
          switch (item) {
            case "daily":
              return <DailyUpdates />;
            case "job-solution":
              return <JobSolution />;
            case "study":
              return <StudyPhases />;
            case "tools":
              return <Tools />;
            default:
              return null;
          }
        }}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
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
  title: {
    fontSize: 32,
  },
});

export default Home;
