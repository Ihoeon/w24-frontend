import React from 'react';
export default function PostCard({ post }) {
    return (
      <div className="post-card">
        {post.image && (
          <div className="post-image">
            <img src={post.image} alt={post.title} />
          </div>
        )}
        <div className="post-content">
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <span className="post-date">{post.date}</span>
        </div>
      </div>
    );
  }
  

  