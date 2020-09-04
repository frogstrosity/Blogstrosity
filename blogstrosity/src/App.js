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

function Post(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <h3>{props.tagline}</h3>
      <p>{props.text}</p>
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
  const title = "How (Not) to Blog", 
        tagline ="There are a lot of good reasons to blog, this is not one of them",
        text="For a while now I have wanted to come up with a project to learn code in my spare time, I also always wanted to come up with a reason to blog. If I learn to crate my own blog and write about that I might fulfill both these goals. It also might just end up being a monstrosity. Either way I hope to learn someting on the way";
  return (
    <div>
      <Header/>
      <Post title = {title} tagline = {tagline} text={text}/>
      <PlaceholderCrap/>
    </div>
  );
}

export default App;
