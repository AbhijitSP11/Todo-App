import React from 'react';
import styles from './TodoList.module.scss';
import {MdDeleteOutline} from 'react-icons/md';
import {RiEditBoxLine} from 'react-icons/ri';


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
            <MdDeleteOutline size={20}/>
          </button>
          <button
            className={styles.editButton}
            onClick={() => editTask(index, task)}
          >
            <RiEditBoxLine size={20}/>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
