import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ToDoCard from "./src/Components/ToDoCard";
import { TodoProvider } from "./src/Context/todoContext";

export default function App() {
  return (
    <TodoProvider>
      <View style={styles.container}>
        <Text style={styles.appTitle}>ToDo App</Text>
        <ScrollView style={styles.todoContainer}>
          {/* mapping area */}
          <ToDoCard onPress={() => alert("hi")} title="Title1" />
          <ToDoCard title="Title2" />
          <ToDoCard title="Title3" />
          {/* mapping area */}
        </ScrollView>
      </View>
    </TodoProvider>
  );
}

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
