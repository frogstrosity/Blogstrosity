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

function Posts(props) {
  return (
    <div>
      {props.posts.map(p => (
         <Post post={p}/>        
      ))}
    </div>
  );
}

function Post(props) {
  let post = props.post;
  return (
    <div>
      <h2>{post.title}</h2>
      <h3>{post.tagline}</h3>
      <p>{post.text.substring(0, 100).concat('...')}</p>
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
  const data = [
    { title: "How (not) to Blog", tagline: "There are a lot of good reasons to blog, this is not one of them", text: "For a while now I have wanted to come up with a project to learn code in my spare time, I also always wanted to come up with a reason to blog. If I learn to crate my own blog and write about that I might fulfill both these goals. It also might just end up being a monstrosity. Either way I hope to learn someting on the way" },
    { title: "How (not) to Learn React", tagline: "doing the frontends", text: "adding basic static layout using components"}
  ];

  return (
    <div>
      <Header/>
      <Posts posts={data}/>
      <PlaceholderCrap/>
    </div>
  );
}

export default App;
