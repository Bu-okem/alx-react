import React from 'react';
import './App.css';
import logo from '../assets/holberton-logo.jpg';
import { getFullYear, getFooterCopy } from '../utils/utils';

function App() {
  return (
    <>
      <header className="app-header">
        <img src={logo} alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <main role="main" className="app-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button type="button">OK</button>
      </main>
      <footer className="app-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </footer>
    </>
  );
}

export default App;
