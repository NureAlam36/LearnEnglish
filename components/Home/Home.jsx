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

import Tools from "./Tools/Tools";
import DailyUpdates from "./DailyUpdates/DailyUpdates";
import StudyPhases from "./StudyPhases/StudyPhases";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={["daily", "study", "tools"]}
        renderItem={({ item }) => {
          switch (item) {
            case "daily":
              return <DailyUpdates />;
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
    padding: 10,
    backgroundColor: "#f2f2f2",
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
