import "./searchItem.css";

const SearchItem2 = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/345556576.jpg?k=4cf11b2f4dc3bde679fd2b2d2308f85357859a3e2a2619048c07b79cbcb0700e&o=&hp=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Hotel Triple Tree - Karol Bagh New Delhi</h1>
        <span className="siDistance">400m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>4.4</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">Rs. 1200</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
       
        
      </div>
    </div>
  );
};

export default SearchItem2;