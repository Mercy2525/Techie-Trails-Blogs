import React, { useState, useEffect } from 'react';
 
import EditBlogForm from './EditBlog';
import Blog from './BenBlogs'; 

function BenBlogs() {
  const [blogs, setBlogs] = useState([]); // State to store the list of blog posts
  const [selectedBlog, setSelectedBlog] = useState(null); // State to track the selected blog for editing
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Effect to fetch initial blog posts from API when the component mounts
    fetch('/blogs/')
      .then((response) => response.json())
      .then((data) => setBlogs(data)); 
  }, []); // Add 'blogs' to the dependency array to trigger the effect when 'blogs' changes

  // Function to create a new blog post
  const createBlog = (newBlog) => {
    fetch('/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBlog),
    })
      .then((response) => response.json())
      .then((data) => {
        setBlogs([...blogs, data]); // Add the newly created blog to the 'blogs' state
        setSelectedBlog(null); // Deselect the blog post after creation
      });
  };

  // Function to update an existing blog post
  const updateBlog = (blogId, updatedBlog) => {
    fetch(`/api/updateBlog/${blogId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedBlog),
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedBlogs = blogs.map((blog) =>
          blog.id === blogId ? { ...data } : blog
        );
        setBlogs(updatedBlogs); // Update the 'blogs' state with the edited blog
        setSelectedBlog(null); // Deselect the blog post after editing
      });
  };

  // Function to delete a blog post
  const deleteBlog = (blogId) => {
    fetch(`/api/deleteBlog/${blogId}`, {
      method: 'DELETE',
    })
      .then(() => {
        const updatedBlogs = blogs.filter((blog) => blog.id !== blogId);
        setBlogs(updatedBlogs); // Update the 'blogs' state by removing the deleted blog
      });
  };

  return (
    <div>
      {/* {selectedBlog ? (
        <EditBlogForm
          blog={selectedBlog}
          updateBlog={updateBlog}
          deleteBlog={() => {
            deleteBlog(selectedBlog.id);
            setSelectedBlog(null);
          }}
        />
      ) : 
     
      }
      <div>
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            onEdit={() => setSelectedBlog(blog)}
            onDelete={() => deleteBlog(blog.id)}
            canDelete={isLoggedIn}
          />
        ))}
      </div> */}
    </div>
  );
}

export default BenBlogs;