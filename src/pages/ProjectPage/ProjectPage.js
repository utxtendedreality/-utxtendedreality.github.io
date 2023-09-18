import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PostHeader from '../../components/PostHeader';
import Post from '../../components/SinglePost.js'
import '../EventPage/Event.css'


function ProjectPage() {

  const [posts,setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  }, []);
  
  return (
    <div>
      <Header />
      <PostHeader type="Projects"/>
        <div className="event-posts-container">
        {posts.length > 0 && posts.map(post => 
          post.type === 'project' && (
            <Post key={post.id} {...post} />
          )      
        )}      
      </div>
      <Footer/>
    </div>
  );
}

export default ProjectPage;




