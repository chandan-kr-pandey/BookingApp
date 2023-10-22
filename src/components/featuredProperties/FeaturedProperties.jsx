
import "./featuredProperties.css";



const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/247341570.jpg?k=690f9d62770471167db2dab140d57ed05afadfa6e611c2408ffacab06514a7c3&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Kairali Tourist Home</span>
        <span className="fpCity">Guruvayoor</span>
        <span className="fpPrice">Starting from Rs. 1800</span>
        <div className="fpRating">
          <button>4.2</button>
          <span>Superb</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/442316232.jpg?k=dd12117848baf2770f20e31796cb8b66cae1ad07fb1cfc657bc0b86d254a12dc&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hotel Radhika</span>
        <span className="fpCity">Manali</span>
        <span className="fpPrice">Starting from Rs. 2000</span>
        <div className="fpRating">
          <button>4.5</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/239953356.jpg?k=651ff9e5895d24f4d0d824e726a26e63017593ca9af80dd687d6d6ad4c1cb496&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Sky Beach View </span>
        <span className="fpCity">Baga</span>
        <span className="fpPrice">Starting from Rs. 1500</span>
        <div className="fpRating">
          <button>4.0</button>
          <span>Good</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/422583002.jpg?k=bf3ee46145d73a79b0daf13cebeed68c8afbd166246b14b59bb3e94dfd257b85&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Ashok Villa</span>
        <span className="fpCity">Jaipur</span>
        <span className="fpPrice">Starting from Rs. 1200</span>
        <div className="fpRating">
          <button>4.4</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;