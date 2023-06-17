import React, { useState } from 'react';
import {AiOutlinePlus} from 'react-icons/ai';
import styles from './TodoInput.module.scss';

interface TodoInputProps {
  addTask: (task: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTask }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      addTask(inputValue);
      setInputValue('');
    }
  };

  return (
    <form className={styles.todoInput} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What's up..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type="submit">
        <AiOutlinePlus />
      </button>
    </form>
  );
};

export default TodoInput;
