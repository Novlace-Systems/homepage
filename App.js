import React from 'react';
import { Search, Home, Heart, MessageSquare, User, MessageSquareHeart } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import './App.css';

const Dashboard = () => {
  const communities = [
    {
      name: 'Casa Da Mulher - Itaquaquecetuba',
      imageUrl: '/casadamulher.jpg',
      text: 'Aqui você pode ficar por dentro de tudo o que rola por lá. Espie e participe!',
    },
    {
      name: 'Mulheres na Tecnologia',
      imageUrl: '/tecm.png',
      text: 'Conheça mulheres incríveis que estão mudando o mundo da tecnologia!',
    },
    {
      name: 'Abraços',
      imageUrl: '/abrazo.jpg',
      text: 'Um espaço para compartilhar e receber abraços virtuais!',
    },
  ];

  const newsArticles = [
    {
      title: 'O empoderamento feminino na sociedade atual',
      imageUrl: '/empodera.png',
    },
    {
      title: 'A importância da autodefesa',
      imageUrl: '/mulheres.jpg',
    },
    {
      title: 'GirlPower',
      imageUrl: '/luta.png',
    },
    {
      title: 'Liderança feminina no mundo dos negócios',
      imageUrl: '/mulheres.jpg',
    },
    {
      title: 'Mulheres na ciência e tecnologia',
      imageUrl: '/empodera.png',
    },
    {
      title: 'Desigualdade de gênero: como combater?',
      imageUrl: '/luta.png',
    },
  ];

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="logo-container">
          <img src="/logoaelin.png" alt="logo" className="logo" />
        </div>
        <nav className="sidebar-nav">
          <Home className="sidebar-icon" />
          <MessageSquareHeart className="sidebar-icon" />
          <MessageSquare className="sidebar-icon" />
          <User className="sidebar-icon" />
        </nav>
      </aside>

      <div className="dashboard-wrapper">
        <div className="dashboard-content">
          <header className="header">
            <div className="search-container">
              <input
                type="text"
                placeholder="Pesquise aqui"
                className="search-input"
              />
              <Search className="search-icon" size={20} />
            </div>
          </header>

          <section className="mood-section">
  <h2 className="mood-title">Como você está se sentindo, Anna?</h2>
  <div className="emoji-container">
    <input type="radio" id="emoji1" name="emoji" className="emoji-button" />
    <label htmlFor="emoji1">😊</label>

    <input type="radio" id="emoji2" name="emoji" className="emoji-button" />
    <label htmlFor="emoji2">😂</label>

    <input type="radio" id="emoji4" name="emoji" className="emoji-button" />
    <label htmlFor="emoji4">😢</label>

    <input type="radio" id="emoji5" name="emoji" className="emoji-button" />
    <label htmlFor="emoji5">😡</label>

    <input type="radio" id="emoji6" name="emoji" className="emoji-button" />
    <label htmlFor="emoji6">😴</label>

    <input type="radio" id="emoji7" name="emoji" className="emoji-button" />
    <label htmlFor="emoji7">🤔</label>

    <input type="radio" id="emoji9" name="emoji" className="emoji-button" />
    <label htmlFor="emoji9">🤩</label>

    <input type="radio" id="emoji10" name="emoji" className="emoji-button" />
    <label htmlFor="emoji10">😜</label>
  </div>
</section>

<section className="community-section">
  <h2 className="community-title">Comunidades</h2>
  <Carousel interval={3000} wrap className="community-carousel">
    {communities.map((community, index) => (
      <Carousel.Item key={index}>
        <div className="community-card">
          <img
            src={community.imageUrl}
            alt={community.name}
            className="community-image"
          />
          <div className="community-info">
            <h3 className="community-name">{community.name}</h3>
            <p className="community-text">{community.text}</p>
            <div className="button-container-like">
              <div className="con-like">
                <input className="like" type="checkbox" title="like" />
                <div className="checkmark">
                  <svg xmlns="http://www.w3.org/2000/svg" className="outline" viewBox="0 0 24 24">
                    <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="filled" viewBox="0 0 24 24">
                    <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
    ))}
  </Carousel>
</section>

<section className="news-section">
  <h2 className="news-title">Notícias e Artigos</h2>
  <Carousel interval={4000} wrap={true} controls={true} className="news-carousel">
  {[0, 1, 2].map((index) => (
    <Carousel.Item key={index}>
      <div className="news-cards d-flex justify-content-between">
        {newsArticles.slice(index * 3, index * 3 + 3).map((news, i) => (
          <div key={i} className="news-card">
            <img
              src={news.imageUrl}
              alt={news.title}
              className="news-image"
            />
            <p className="news-description">{news.title}</p>

            <div className="button-container-like">
              <div className="con-like">
                <input className="like" type="checkbox" title="like" />
                <div className="checkmark">
                  <svg xmlns="http://www.w3.org/2000/svg" className="outline" viewBox="0 0 24 24">
                    <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="filled" viewBox="0 0 24 24">
                    <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Carousel.Item>
  ))}
</Carousel>
</section>
        </div>
      </div>

      <div className="additional-container">
        {/* Novo conteúdo ao lado do dashboard-wrapper */}
        <div className="additional-content">
        <div className="dashboard-content">

<div className="sidebar-right">
  <div className="favorites-card">
    <h3 className="favorites-title">Comunidades Favoritas</h3>
    <ul className="favorites-list">
      {['Casa Da Mulher', 'Mulheres na Tecnologia', 'Abraços'].map((community, index) => (
        <li key={index} className="favorite-item">
          <Heart size={16} className="favorite-icon" />
          <span>{community}</span>
        </li>
      ))}
    </ul>
  </div>

  <div className="psychologists-card">
<h3 className="psychologists-title">Psicólogos</h3>
<ul className="psychologists-list">
  {[
    { name: 'Dra. Andressa Martins', imageUrl: '/m1.png' },
    { name: 'Dra. Monica Andrade', imageUrl: '/m2.png' },
    { name: 'Dra. Vanessa Lopes', imageUrl: '/m3.png' },
    { name: 'Dra. Ana Julia Moraes', imageUrl: '/m4.png' }
  ].map((psychologist, index) => (
    <li key={index} className="psychologist-item">
      <img src={psychologist.imageUrl} alt={psychologist.name} className="psychologist-image" />
      <span>{psychologist.name}</span>
      <MessageSquare size={16} className="psychologist-icon" />
    </li>
  ))}
</ul>
</div>
        </div>
      </div>
    </div>
  </div>
    </div>


  );
};

export default Dashboard;
