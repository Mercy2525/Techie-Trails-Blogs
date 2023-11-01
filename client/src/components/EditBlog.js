import React, { useState } from 'react';

function EditBlogForm({ blog, updateBlog, deleteBlog }) {
  const [title, setTitle] = useState(blog.title);
  const [content, setContent] = useState(blog.content);
  const [author, setAuthor] = useState(blog.author);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBlog(blog.id, { title, content, author });
  };

  return (
    <div>
      <h2>Edit Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <label>Author:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit">Update</button>
        <button onClick={() => deleteBlog(blog.id)}>Delete</button>
      </form>
    </div>
  );
}

export default EditBlogForm;