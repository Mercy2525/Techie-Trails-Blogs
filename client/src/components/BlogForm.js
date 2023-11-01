import React, { useState } from 'react';
import "../styles/BlogForm.css"



const BlogForm = ({handleAdd}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();


    fetch('/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        blog_title:title,
        blog_body: content,
        author:author
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        handleAdd(data)
      })
      .catch(e=>console.log(e))
    
   
    
  };

  

  return (
    <div className='blog'>
      <h2>Create a New Blog</h2>
      <form onSubmit={handleSubmit} >
        <label>Title:</label>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Content:</label>
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <label>Author:</label>
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BlogForm;
