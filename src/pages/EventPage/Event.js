import React from "react";
import { useState, useEffect } from "react";
import Post from '../../components/SinglePost.js'
import './Event.css'

export default function Event() {
  const [posts,setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <div className="event-posts-container">
      {posts.length > 0 && posts.map(post => 
        post.type === 'event' && (
          <Post key={post.id} {...post} />
        )      
      )}      
    </div>
);

}