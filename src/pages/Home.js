import Base from "../components/Base";
import '../CSS/Home.css';
const Home=()=> {
    return(
        <Base>
          <div className="home-container">
      <div className="overlay">
        <div className="content">
          <h1>Welcome to My Blog</h1>
          <h3>Connect, Share, and Grow</h3>
          <p>Share your stories, connect with others, and grow together in our supportive and engaging community.</p>
          
        </div>
      </div>
    </div>
        </Base>
    )
}
export default Home;