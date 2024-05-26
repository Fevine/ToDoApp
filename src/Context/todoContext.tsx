import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useState,
  useMemo,
} from "react";
import uuid from "react-native-uuid";

// Define the shape of a Todo item
export interface Todo {
  id: string;
  title: string;
  text: string;
  completed: boolean;
}

// Define the context type
interface TodoContextType {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  addTodo: (text: string, title: string) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

// Create the context with a default value
const todoContext = createContext<TodoContextType | undefined>(undefined);

interface ProviderProps {
  children: ReactNode;
}

// Provider
export const TodoProvider: FC<ProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(text: string, title: string) {
    const newTodo: Todo = {
      id: uuid.v4() as string,
      title: title.toUpperCase(),
      text: text,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  }

  function removeTodo(id: string) {
    setTodos(todos.filter((x) => x.id !== id));
  }

  function toggleTodo(id: string) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const value = useMemo(
    () => ({
      todos,
      setTodos,
      addTodo,
      removeTodo,
      toggleTodo,
    }),
    [todos]
  );

  return <todoContext.Provider value={value}>{children}</todoContext.Provider>;
};

export const useTodo = () => {
  const context = useContext(todoContext);
  if (context === undefined) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};
