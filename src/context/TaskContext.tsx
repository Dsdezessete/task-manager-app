import React, { createContext, useState, ReactNode } from 'react';

type Task = {
  id: string;
  name: string;
  description: string;
};

interface TaskContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
}

export const TaskContext = createContext<TaskContextType>({
  tasks: [],
  addTask: () => {},
});

interface TaskProviderProps {
  children: ReactNode;
}

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks((prevTasks) => [...prevTasks, task]); // Garantir que seja baseado no estado anterior
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};
