import React, { useState } from 'react';
import Feed from './components/Feed';
import CreatePostForm from './components/CreatePostForm';

function App() {
  const [posts, setPosts] = useState([]);

  const handleCreatePost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div>
      <h1>Fakebook!</h1>
      <CreatePostForm onCreatePost={handleCreatePost} />
      <Feed posts={posts} />
    </div>
  );
}

export default App;