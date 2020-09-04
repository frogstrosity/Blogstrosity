import React from 'react';
import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <div>
      <h1>blogstrosity</h1>
    </div>
  );
}
function PlaceholderCrap() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>code</code> and save to blog.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header/>
      <PlaceholderCrap/>
    </div>
  );
}

export default App;
