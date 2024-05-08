import React from "react";
import { SafeAreaView, FlatList, StyleSheet } from "react-native";

import DailyUpdates from "./DailyUpdates/DailyUpdates";
import JobSolution from "./JobSolution/JobSolution";
import StudyPhases from "./StudyPhases/StudyPhases";
import Tools from "./Tools/Tools";
import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import { COLORS } from "@/constants";

import MainPageHeader from "@/components/Headers/MainPageHeader";

const Home = ({ navigation }) => {
  const { colorScheme } = useColorSchemeContext();

  return (
    <React.Fragment>
      <MainPageHeader />
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
                return <DailyUpdates navigation={navigation} />;
              case "job-solution":
                return <JobSolution navigation={navigation} />;
              case "study":
                return <StudyPhases navigation={navigation} />;
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
  title: {
    fontSize: 32,
  },
});

export default Home;
