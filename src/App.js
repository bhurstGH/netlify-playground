import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Netlify Form Test</h1>
      <form name="formtest" data-netlify="true" method="POST">
        <input type="text"></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default App;
