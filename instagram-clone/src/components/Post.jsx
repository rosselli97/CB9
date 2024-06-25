// src/components/Post.jsx
import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="post">
      <img src={post.urls.small} alt={post.alt_description} />
      <p>{post.description || 'No description'}</p>
      <p><strong>{post.user.name}</strong></p>
    </div>
  );
};

export default Post;

