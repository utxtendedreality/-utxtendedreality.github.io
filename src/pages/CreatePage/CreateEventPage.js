import {React, useState} from "react";
import "./Create.css";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import { Navigate } from "react-router-dom";
import Editor from "../../Editor";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PostHeader from '../../components/PostHeader';



export default function CreateEventPage() {

  const [title,setTitle] = useState('');
  const [summary,setSummary] = useState('');
  const [content,setContent] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function checkIfEditor() {
    const response = await fetch('http://localhost:4000/editors', {
      credentials: 'include',
    });
    return response.ok;
  }

  async function createPost() {
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('type','event');
    const response = await fetch('http://localhost:4000/post', {
      method: 'POST',
      body: data,
      credentials: 'include',
    });
    return response.ok;
  }

  async function createNewPost(ev) {
    ev.preventDefault();
    try {
      const isEditor = await checkIfEditor();
      if (!isEditor) {
        alert('Access Denied');
        setRedirect('/home');
        return;
      }
      const postCreated = await createPost();
      if (postCreated) {
        alert("Successfully created post.");
        setRedirect('/event');
      } else {
        alert("Failed to create post.");
      }
    } catch (err) {
      alert('Failed to parse server response'); 
    }
  }

  return (
    <>
      {redirect && <Navigate to={redirect} replace={true} />}
      <Header />
      <PostHeader type="Events"/>
        <div className="create-container">
        <h2 className="create-title"> Create a New Post </h2>
        <form onSubmit={createNewPost}>
          <label>Title of the Post:</label>
          <input type="title"
                value={title}
                onChange={ev => setTitle(ev.target.value)} 
                className="create-input"
                required/>
          <label>Brief Summary (less than 50 words):</label>
          <input type="summary"
                value={summary}
                onChange={ev => setSummary(ev.target.value)} 
                className="create-input"
                required/>
          <label>Full Post:</label>
          <Editor value={content} onChange={setContent} />
          <button className="create-button">Create post</button>
        </form>
        </div>
        <Footer />
      </>
    );
}