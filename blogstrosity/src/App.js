import React, { useState } from 'react';
import './App.css';
import * as PostService from './Services/PostService';

function Header() {
  return (
    <div className="Header">
      <h1>blogstrosity</h1>
    </div>
  );
}

function Footer() {
  return (
    <div className="Footer">
      <p>2020 GeoTech</p>
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

function App(props) {
  const [data] = useState(PostService.getPosts());

  return (
    <div>
      <Header/>
      <Posts posts={data}/>
      <Footer/>
    </div>
  );
}

export default App;
