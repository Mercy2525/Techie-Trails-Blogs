import React, { useState, useEffect } from 'react';

function Comments({ postId }) {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [showComments, setShowComments] = useState(false);

  const loadComments = async () => {
    try {
      // Fetch comments for post Flask API
      const response = await fetch(`/comment/${postId}/comments`);
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
      const response = await fetch(`/api/posts/${postId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: commentText }),
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
          {comments.map((comment) => (
            <div key={comment.id}>
              <p>{comment.text}</p>
            </div>
          ))}
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