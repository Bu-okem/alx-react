import React from 'react';
import './Login.css';

function Login() {
  return (
    <>
      <div className="app-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">
            Email:
            <input type="email" name="email" />
          </label>
          <label htmlFor="password">
            Password:
            <input type="password" name="password" />
          </label>
          <button>OK</button>
        </form>
      </div>
    </>
  );
}

export default Login;
