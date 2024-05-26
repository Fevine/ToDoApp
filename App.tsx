import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ToDoCard from "./src/Components/ToDoCard";
import { TodoProvider, useTodo } from "./src/Context/todoContext";
import AddToDo from "./src/Layouts/AddToDo";
import Navbar from "./src/Layouts/Navbar";

const App: React.FC = () => {
  const { todos } = useTodo();

  const [Page, setPage] = useState<string>("Home");

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>ToDo App</Text>
      <Navbar Page={Page} setPage={setPage} />
      {Page === "Home" ? (
        <ScrollView style={styles.todoContainer}>
          {todos.map((todo) => (
            <ToDoCard
              key={todo.id}
              id={todo.id}
              completed={todo.completed}
              title={todo.title}
            />
          ))}
        </ScrollView>
      ) : Page === "Add" ? (
        <AddToDo />
      ) : null}
    </View>
  );
};

const AppWrapper: React.FC = () => (
  <TodoProvider>
    <App />
  </TodoProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    rowGap: 20,
  },
  appTitle: {
    fontSize: 40,
    fontWeight: "500",
    marginTop: 30,
  },
  todoContainer: {
    backgroundColor: "red",
    flex: 1,
    width: "100%",
    height: "auto",
  },
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

export default AppWrapper;
