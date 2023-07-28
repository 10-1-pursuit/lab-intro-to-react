import React from 'react';
import Post from "./Post.jsx";
const Posts = () => {
    
  
    return (
      <div>
        <h3>Blog Posts</h3>
        <ul>
          {Post.map((post) => (
            <li key={post.id}>
              <h4>{post.title}</h4>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  


export default Posts;