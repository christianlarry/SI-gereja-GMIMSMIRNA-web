import './NewsCard.css'

const NewsCard = () => (
  <div className="swiper-slide news">
    <div className="news-image-wrapper">
      <img alt="gambar_<%= news.news_title %>" loading="lazy" className="news-image" />
    </div>
    <div className="wrapper">
      <a href="/berita/<%= news.id %>" className="news-title" title="<%= news.news_title %>">news.news_title</a>
      <div className="news-data">
        <span className="date">
          <i className="fa-regular fa-clock"></i>
          news.post_date
        </span>
        <span className="author">
          <i className="fa-regular fa-user"></i>
          news.author
        </span>
      </div>
      <div className="news-content">
        <p>news.news_content</p>
      </div>
      <a href="/" className="news-read-more">Baca Selengkapnya</a>
    </div>
  </div>
)

export default NewsCard