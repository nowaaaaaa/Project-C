import React from 'react';
import '../App.css';

export function Login() {
  const root = document.getElementsByTagName("html")[0];
  const toggleDarkMode = () => {
    root.setAttribute("class", "dark");
    localStorage.theme = "dark";
  }
  const toggleLightMode = () => {
    root.removeAttribute("class");
    localStorage.theme = "light";
  }
  return (
    <div className="App">
      <header className="App-header">
        <p  className='Frontlayer'>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <h1 className='bg-white '>
          Login enzo
        </h1>
        <a
          className="text-pink-400 dark:text-orange-500 "
          href="https://minecraft.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          Minecraft
        </a>
      
        <div className='bg-white dark:bg-green-800 py-9 px-16 dark:py-2 dark:px-36 '></div>
      </header>
      <button onClick={toggleLightMode}>light</button>
      <button onClick={toggleDarkMode}>dark</button>
    </div>
  );
}