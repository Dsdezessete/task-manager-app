import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { useNavigate } from 'react-router-dom';

const TaskManager: React.FC = () => {
  const { tasks } = useContext(TaskContext);
  const navigate = useNavigate(); // Substituição de useHistory por useNavigate

  return (
    <div>
      <h2>Task Manager</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
      <button onClick={() => navigate('/add-task')}>Add New Task</button>
    </div>
  );
};

export default TaskManager;
