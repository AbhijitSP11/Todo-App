import React, { useState } from 'react';

interface TodoItemProps {
  task: string;
  deleteTask: () => void;
  editTask: (newTask: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleDelete = (): void => {
    deleteTask();
  };

  const handleEdit = (): void => {
    setIsEditing(true);
  };

  const handleSave = (): void => {
    if (editedTask.trim() !== '') {
      editTask(editedTask);
      setIsEditing(false);
    }
  };

  const handleCancel = (): void => {
    setIsEditing(false);
    setEditedTask(task);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input type="text" value={editedTask} onChange={(e) => setEditedTask(e.target.value)} />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <span>{task}</span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
};

export default TodoItem;
