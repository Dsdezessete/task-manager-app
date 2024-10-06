import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import TaskManager from './components/TaskManager';
import TaskForm from './components/TaskForm';
import { TaskProvider } from './context/TaskContext';
import App from './App';  // Esta é a importação do seu componente App
import GlobalStyle from './styles/GlobalStyle';

const isAuthenticated = () => {
  return !!localStorage.getItem('authToken');
};

function MainApp() { // Renomeando a função para MainApp
  return (
    <TaskProvider>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/tasks"
            element={isAuthenticated() ? <TaskManager /> : <Navigate to="/login" />} />
          <Route
            path="/add-task"
            element={isAuthenticated() ? <TaskForm /> : <Navigate to="/login" />} />
        </Routes>
      </Router>
    </TaskProvider>
  );
}

export default MainApp; // Exporte a nova função
