import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Comments({ postId }) {

  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [showComments, setShowComments] = useState(true);

  const {id}=useParams()

  const loadComments = async () => {
    try {
      // Fetch comments for post Flask API
      const response = await fetch(`/comment/${id}`);
      if (response.ok) {
        const data = await response.json();
        setComments(data);
      }
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  useEffect(() => {
    loadComments();
  }, [postId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!commentText) return;

    try {
      // Submit the comment to Flask API
      const response = await fetch(`/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ comment_body: commentText }),
      });

      if (response.ok) {
        const newComment = await response.json();
        setComments([...comments, newComment]);
        setCommentText('');
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  return (
    <div>
      <h3>Comments</h3>
      <button onClick={() => setShowComments(!showComments)}>
        {showComments ? 'Hide Comments' : 'View Comments'}
      </button>
      {showComments && (
        <div className="comments-list">
          
            <div key={comments.id}>
              <p>{comments.comment_body}</p>
            </div>
          
          
          <form onSubmit={handleSubmit}>
            <textarea
              placeholder="Add a comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <button type="submit">Submit Comment</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Comments;