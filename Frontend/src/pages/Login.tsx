import React from 'react';
import logo from '../logo.svg';
import '../App.css';

export function Login() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p  className='Frontlayer'>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <h1>
          Login enzo
        </h1>
        <a
          className="App-link"
          href="https://minecraft.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          Minecraft
        </a>
      </header>
    </div>
  );
}