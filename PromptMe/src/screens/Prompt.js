import { StatusBar } from "expo-status-bar";
import * as React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { theme } from '../themes/sign-in-theme'
import { useState } from "react";
import Prompt from "../components/prompt";
import Header from "../components/header";
import Background from "../components/Background_Prompt";

export default function Dashboard() {
  const [data, setData] = useState([
    { data: "Dummy Data 1", key: 1 },
    { data: "Dummy Data 2", key: 2 },
    { data: "Dummy Data 3", key: 3 },
    { data: "Dummy Data 4", key: 4 },
    { data: "Dummy Data 5", key: 5 },
    { data: "Dummy Data 6", key: 6 },
    { data: "Dummy Data 7", key: 7 },
    { data: "Dummy Data 8", key: 8 },
    { data: "Dummy Data 9", key: 9 },
    { data: "Dummy Data 10", key: 10 },
  ]);

  return (
      <View style={styles.container}>
        <ScrollView>
        <Header />
          <View>
            {data.map((item) => {
              return (
                <View key={item.key}>
                  <Text style={styles.item}>{item.data}</Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    top: "5%",
    alignItems: "center",
  },

  item: {
    marginTop: 24,
    padding: 30,
    width: "100%",
    backgroundColor: "#9300ff",
    fontSize: 24,
  },

  promptHolder: {
    backgroundColor: "white",
    width: "70%",
    flexGrow: 1,
    top: "10%",
  },
  promptOutterContainer: {
    backgroundColor: "white",
    borderRadius: "20",
    height: "15%",
    shadowColor: "grey",
    marginBottom: "5%",
    shadowOpacity: "0.7",
    shadowOffset: { width: -2, height: 4 },
  },
  promptInnerContainer: {
    backgroundColor: "#9300ff",
    height: "20%",
    borderTopLeftRadius: "20",
    borderTopRightRadius: "20",
  },
});