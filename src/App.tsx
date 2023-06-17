
import './App.css'
import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (task: string): void => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index: number): void => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const editTask = (index: number, newTask: string): void => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = newTask;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>✅ Todo App</h1>
      <TodoInput addTask={addTask} />
      <TodoList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
};

export default App;
