import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useTodo } from "../Context/todoContext";

function AddToDo() {
  const [title, setTitle] = useState<string>("");

  const [text, setText] = useState<string>("");

  const { addTodo } = useTodo();

  function handlePress(title: string, text: string) {
    if (!title && !text) {
      alert("Please, fill all inputs!");
      return;
    }
    addTodo(text, title);
  }

  return (
    <>
      <View style={styles.container}>
        <TextInput style={styles.Input} value={title} onChangeText={setTitle} />
        <TextInput style={styles.Input} value={text} onChangeText={setText} />
        <TouchableOpacity
          onPressOut={() => {
            handlePress(title, text);
          }}
          style={styles.createBtn}
        >
          <Text>Create ToDo</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "salmon",
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  Input: {
    backgroundColor: "khaki",
    width: "100%",
    marginTop: 10,
    paddingVertical: 10,
    fontSize: 20,
  },
  createBtn: {
    marginTop: 10,
    backgroundColor: "gold",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
});

export default AddToDo;
