import ReactPlayer from "react-player";
import "./App.css";
import logo from "./assets/logo.png";
import { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import RatingList from "./components/RatingList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [rating, setRating] = useState(0);

  const ratings = [
    { number: 5, total: 10 },
    { number: 4, total: 8 },
    { number: 3, total: 6 },
    { number: 2, total: 0 },
    { number: 1, total: 0 },
  ];

  const calculateAverage = (ratings) => {
    const totalSum = ratings.reduce((acc, rating) => acc + rating.total, 0);
    const numberOfRatings = ratings.reduce(
      (acc, rating) => acc + rating.number * rating.total,
      0
    );

    if (totalSum === 0) {
      return 0;
    }

    return (numberOfRatings / totalSum).toFixed(2);
  };

  return (
    <div className="container">
      <div>
        <img src={logo} alt="" width={176} height={100} />
      </div>
      <div className="video-player">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=Qya-Q_RSDvg&list=RDFlQzREZMSWo&index=7"
          controls={true}
          width="100%"
          height="100%"
        />
      </div>

      <div className="evaluate">
        <div className="rating">
          <h2>
            Đánh giá ({calculateAverage(ratings)}
            <FontAwesomeIcon icon={faStar} color="#F1B557" />)
          </h2>
          <Rating
            style={{ maxWidth: 250 }}
            value={rating}
            onChange={setRating}
          />
          <div className="rating-list">
            {ratings.map((item, index) => (
              <span key={index} className="rating-item">
                <RatingList rating={item.number} />
                <span>{item.total}</span>
              </span>
            ))}
          </div>
        </div>
        <div className="comment">
          <h2>Bình luận</h2>
          <div className="comment-list">
            <div className="comment-item">
              <div className="name">Nguyen van a</div>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                ullam voluptates molestiae
              </span>
            </div>
            <div className="comment-item">
              <div className="name">Nguyen van a</div>

              <span>
                unde placeat aut tenetur corporis laboriosam, libero sunt
                aspernatur vitae asperiores dolore veniam nostrum atque
                dignissimos, ut tempore.
              </span>
            </div>
          </div>
          <div className="input-group">
            <input
              type="text"
              className="comment-input"
              placeholder="Nhập bình luận..."
            />
            <FontAwesomeIcon
              icon={faPaperPlane}
              color="gray"
              style={{ cursor: "pointer", width: "80px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
