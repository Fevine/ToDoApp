import React, { ReactNode } from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

interface CardProps {
  title?: string;
  children?: ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
}

function ToDoCard(props: CardProps) {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.todoCard}>
      <Text style={styles.todoCardTitle}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  todoCard: {
    backgroundColor: "khaki",
    width: "100%",
    marginTop: 10,
  },
  todoCardTitle: {
    fontSize: 30,
    marginLeft: 20,
    paddingVertical: 10,
  },
});

export default ToDoCard;
