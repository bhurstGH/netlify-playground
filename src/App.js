import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Netlify Form</h1>
      <form name="formtest" netlify method="POST">
        <input type="text"></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default App;
