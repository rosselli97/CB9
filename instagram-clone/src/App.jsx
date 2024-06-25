// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import PostList from './components/PostList';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
      const response = await fetch(`https://api.unsplash.com/photos/?client_id=${accessKey}`);
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <Navbar />
      <PostList posts={posts} />
    </div>
  );
};

export default App;


