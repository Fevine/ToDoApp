import React, { ReactNode } from "react";
import {
    GestureResponderEvent,
    StyleSheet,
    Switch,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { useTodo } from "../Context/todoContext";

interface CardProps {
  id: string;
  title?: string;
  completed?: boolean;
  children?: ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
}

function ToDoCard(props: CardProps) {
  const { toggleTodo, removeTodo } = useTodo();

  return (
    <>
      <View style={styles.todoCard}>
        <Text style={styles.todoCardTitle}>{props.title}</Text>
        <View style={styles.buttonContainer}>
          <Switch
            onValueChange={() => toggleTodo(props.id)}
            value={props.completed}
          />
          <TouchableOpacity
            onPress={() => removeTodo(props.id)}
            style={styles.deleteBtn}
          >
            <Text style={styles.deleteText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  todoCard: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "khaki",
    width: "100%",
    marginTop: 10,
  },
  todoCardTitle: {
    fontSize: 30,
    marginLeft: 20,
    paddingVertical: 10,
  },
  buttonContainer: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  deleteBtn: {
    backgroundColor: "#6fa2a3",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
  },
  deleteText: {
    fontSize: 20,
  },
});

export default ToDoCard;
