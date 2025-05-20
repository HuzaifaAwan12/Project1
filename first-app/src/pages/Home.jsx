import bannerImage from '../webbanner.jpg';
import './Home.css';

function Home() {
  return (
    <div>
      <div className="banner">
        <img
          src={bannerImage}
          alt="Banner"
          className="banner-image"
        />
        <div className="banner-text">
          <h1>Welcome to React Application</h1>
          <p>Basics of React including Routing, Forms, and Components!</p>
        </div>
      </div>

      <div style={{ padding: '20px' }}>
        <h2>Home Page</h2>
        <p>This is the homepage of your React project.</p>
      </div>
    </div>
  );
}

export default Home;
