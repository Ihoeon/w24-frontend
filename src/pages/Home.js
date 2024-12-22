import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
//import CategoryNav from '../components/CategoryNav';
//import PostCard from '../components/PostCard';
import '../styles/styles.css';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('Games');

  // 샘플 데이터
  const samplePosts = [
    {
      id: 1,
      category: 'Games',
      title: 'League Of Legend',
      description: '고등학생 때 부터 즐겨했던 게임. 스타 다음으로 한국을 포함한 세계에서 유명한 게임(시간 철부)',
      date: 'Dec 12',
      image: '/images/lol-image.jpg'
    },
    {
      id: 2,
      category: 'Games',
      title: '롤렉스-서브마리너',
      description: '시계를 좋아해서 고등학생 때 티소를 착용했고, 아직 돈이 없어서 나중에 든든 부모 직장인이 되면(시간 철부)',
      date: 'Dec 10',
      image: '/images/rolex-image.jpg'
    }
    // 더 많은 샘플 데이터 추가 가능
  ];

  useEffect(() => {
    // 실제 API 호출 대신 샘플 데이터 사용
    const filteredPosts = samplePosts.filter(
      post => post.category === activeCategory
    );
    setPosts(filteredPosts);
  }, [activeCategory]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="container">
      <Header />
      
      <nav className="category-nav">
        <button onClick={() => setActiveCategory('Games')}>Games</button>
        <button onClick={() => setActiveCategory('Watches')}>Watches</button>
        <button onClick={() => setActiveCategory('Movies')}>Movies</button>
      </nav>

      {/* 회색 박스 부분 */}
      <div className="hero-section">
        <h2>내가 좋아하는 것들로 채운 블로그</h2>
        <p>평소에 내가 좋아하는 영화, 시계, 게임들로 구성되고 간단히 소개하는 블로그</p>
      </div>

      {/* 포스트 그리드 */}
      <div className="posts-grid">
        <div className="post-card">
          <h3>League Of Legend</h3>
          <p>고등학생 때 부터 즐겨했던 게임, 스타 다음으로 한국을 포함한 세계에서 유명한 게임(시간 철부)</p>
          <span className="date">Dec 12</span>
        </div>

        <div className="post-card">
          <h3>롤렉스-서브마리너</h3>
          <p>시계를 좋아해서 고등학생 때 티소를 착용했고, 아직 돈이 없어서 나중에 든든 부모 직장인이 되면(시간 철부)</p>
          <span className="date">Dec 10</span>
        </div>
      </div>
    </div>
  );
}
