import React, { useEffect } from 'react';
import '../styles/styles.css';

export default function Home() {
  const [posts, setPosts] = React.useState([]);
  const [activeCategory, setActiveCategory] = React.useState('Games');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`/api/posts?category=${activeCategory}`);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [activeCategory]);

  return (
    <div className="container">
      <h1>A Things What I like</h1>
      
    
    <nav className="category-nav">
  <button 
    className={activeCategory === 'Games' ? 'active' : ''} 
    onClick={() => setActiveCategory('Games')}
  >
    Games
  </button>
  <button 
    className={activeCategory === 'Watches' ? 'active' : ''} 
    onClick={() => setActiveCategory('Watches')}
  >
    Watches
  </button>
  <button 
    className={activeCategory === 'Movies' ? 'active' : ''} 
    onClick={() => setActiveCategory('Movies')}
  >
    Movies
  </button>
</nav>

      <div className="hero-section">
        <h2>내가 좋아하는 것들로 채운 블로그</h2>
        <p>평소에 내가 좋아하는 영화, 시계, 게임들로 구성되고 간단히 소개하는 블로그</p>
      </div>

      <div className="posts-grid">
        {posts.map(post => (
          <div key={post.id} className="post-card">
            <h3>{post.title}</h3>

            <p>{post.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
