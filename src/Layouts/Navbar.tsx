import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  Page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
};

export default function Navbar({ Page, setPage }: Props) {
  return (
    <View style={myCss.container}>
      <Pressable onPressOut={() => setPage("Home")}>
        <Text style={Page === "Home" ? myCss.activeText : myCss.text}>
          Home
        </Text>
      </Pressable>
      <Pressable onPressOut={() => setPage("Add")}>
        <Text style={Page === "Add" ? myCss.activeText : myCss.text}>Add</Text>
      </Pressable>
    </View>
  );
}

const myCss = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: "row",
    columnGap: 20,
    // backgroundColor:'blue',
  },
  text: {
    fontSize: 25,
  },
  activeText: {
    color: "tomato",
    fontSize: 27,
  },
});
