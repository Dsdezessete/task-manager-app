import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      setError('Both fields are required');
      return;
    }

    if (email === 'test@example.com' && password === 'password') {
      localStorage.setItem('authToken', 'fake-token');
      navigate('/tasks');
    } else {
      setError('Invalid credentials');
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
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>} {/* Exibir erros diretamente no DOM */}
    </div>
  );
};

export default Login;
