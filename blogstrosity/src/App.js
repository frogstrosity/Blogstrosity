import React, { useState } from 'react';
import './App.css';
import * as PostService from './Services/PostService';

function App() {
  const [data] = useState(PostService.getPosts());
   
  return (
    <div className="Container">
      <Header/>
      <Posts posts={data}/>
      <Footer/>
    </div>
  );
}

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
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    
    /* To-Do: try to get spread operator working here so we dont need to deconstruct/pass indevidual props */
    <div className="Posts">
      {posts.map((p, index) => 
        (<Post post={p} index = {index} expanded = {activeIndex === index} setActiveIndex = {setActiveIndex}/>))}
    </div>
  );
}

function Post({post, index, expanded, setActiveIndex}) { 
  return (
    <div className="Post">
      <h2 className="Post-Title">{post.title}</h2>
      <h3>{post.tagline}</h3>
      { 
        expanded ? 
        <PostPreview post = {post}/> : 
        <PostContent post = {post} index = {index} setActiveIndex = {setActiveIndex}/>
      }
    </div>
  );
}

function PostContent({post, index, setActiveIndex}) {
  return (
    <div>
      <p>{post.text.substring(0, 100).concat('...')}</p>
      <button onClick={() => setActiveIndex(index)}>Read More...</button>
    </div>
  );
}

function PostPreview({post}) {
  return (
    <div>
      <p>{post.text}</p>
      <p>{post.additionalInfo} </p>
    </div>
  );
}

export default App;
