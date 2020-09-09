import React from 'react';
import './App.css';
import * as PostService from './Services/PostService';

function Header() {
  return (
    <div className="Header">
      <h1>blogstrosity</h1>
    </div>
  );
}

function Posts({posts}) {
  return (
    /* To-Do: try to get spread operator working here so we dont need to deconstruct/pass indevidual props */
    <div className="Posts">
      {posts.map(p => (<Post post={p}/>))}
    </div>
  );
}

function Post({post}) {
  return (
    <div className="Post">
      <h2 className="Post-Title">{post.title}</h2>
      <h3>{post.tagline}</h3>
      <p>{post.text.substring(0, 100).concat('...')}</p>
    </div>
  );
}

function App() {
  const data = PostService.getPosts();

  return (
    <div>
      <Header/>
      <Posts posts={data}/>
    </div>
  );
}

export default App;
