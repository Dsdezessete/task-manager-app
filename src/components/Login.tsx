// src/components/Login.tsx
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    if (!email || !password) {
      alert('Both fields are required');
      return;
    }

    if (email === 'test@example.com' && password === 'password') {
      localStorage.setItem('authToken', 'fake-token');
      history.push('/tasks');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Senha"
      />
      <button onClick={handleLogin}>Login</button>
      <a href="#">Esqueceu sua senha?</a>
    </div>
  );
};

export default Login;
