import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function getTitle(title) {
  return title;
}

function App() {

  return (
    <div>
      <h1>Hello React</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

export default App
