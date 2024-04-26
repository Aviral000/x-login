import React, { useState } from 'react';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cred, setCred] = useState(false);
  const [error, setError] = useState(false);

  const toggleSubmit = () => {
    if (username === 'user' && password === 'password') {
      setCred(true);
      setError(false); // Reset error state
    } else {
      setError(true);
      setCred(false); // Reset cred state
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {cred ? (
        <p>Welcome, user!</p>
      ) : (
        <div>
          {error && <p>Invalid username or password</p>}
          <form>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="button" onClick={toggleSubmit}>
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
