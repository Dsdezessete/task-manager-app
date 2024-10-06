import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { useNavigate } from 'react-router-dom';

const TaskForm: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const { addTask } = useContext(TaskContext);
  const navigate = useNavigate();

  const handleSave = () => {
    if (!name || name.length > 50) {
      alert('Task name must be less than 50 characters.');
      return;
    }

    if (!description) {
      alert('Task description is required.');
      return;
    }

    const newTask = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      description,
    };

    addTask(newTask);
    setName('');
    setDescription('');
    navigate('/tasks'); // Substituição de history por navigate
  };

  return (
    <div>
      <h2>Add/Edit Task</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name (max 50 chars)"
        maxLength={50} // Validação básica com maxLength
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={() => navigate('/tasks')}>Cancel</button>
    </div>
  );
};

export default TaskForm;
