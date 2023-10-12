import { useState } from 'react';
import './App.css';
import { login } from './login';

// Login Form

// Guidelines
// * You have an incomplete login form
// * You are not allowed to add any additional HTML elements
// * You are not alllowed to use refs

// ********************

// Tasks:
// * The login button should trigger the login() action imported above and pass required email and passwords
// * Disable the login button if email is blank OR if password is unedr 6 letters
// * Disable the Login button while login action is being performed
// * Show an error message from the login() if login fails. The error should be cleared the next time User inputs some value
// * Show an alert box if login succeeds.

function App() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    // setError(null);
    try {
      setLoading(true);
      await login({ email, password });
      alert('Login Succesfull');
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }

    console.log(email, password);
  };

  const disabledButton = !email || password.length < 6 || loading;
  return (
    <>
      <div className='wrapper'>
        <div className='row'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='row'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button disabled={disabledButton} onClick={handleLogin}>
          Login
        </button>

        <div style={{ color: 'red' }} className='errorMessage'>
          {error.message}
        </div>
      </div>
    </>
  );
}

export default App;
