import React from 'react';
import styles from './TodoList.module.scss';

interface TodoListProps {
  tasks: string[];
  deleteTask: (index: number) => void;
  editTask: (index: number, newTask: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ tasks, deleteTask, editTask }) => {
  return (
    <ul className={styles.todoList}>
      {tasks.map((task, index) => (
        <li className={styles.todoItem} key={index}>
          <span>{task}</span>
          <button
            className={styles.deleteButton}
            onClick={() => deleteTask(index)}
          >
            Delete
          </button>
          <button
            className={styles.editButton}
            onClick={() => editTask(index, task)}
          >
            Edit
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
