import { FC, ReactNode, createContext, useContext, useState } from "react";

// Define the shape of a Todo item
interface Todo {
  id: number;
  title: string;
  text: string;
  completed: boolean;
}

// Define the context type
interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string, title: string) => void;
  toggleTodo: (id: number) => void;
}

// Create the context with a default value
const todoContext = createContext<TodoContextType | undefined>(undefined);

interface PrividerProps {
  children: ReactNode;
}

// Provider
export const TodoProvider: FC<PrividerProps> = ({ children }) => {
  const [ToDos, setToDos] = useState<Todo[]>([]);

  function addTodo(text: string, title: string) {
    
  }

  const data: any = { ToDos, setToDos };

  return <todoContext.Provider value={data}>{children}</todoContext.Provider>;
};

export const useToDo = () => useContext(todoContext);
