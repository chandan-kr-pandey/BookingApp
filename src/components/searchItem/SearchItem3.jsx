import "./searchItem.css";

const SearchItem3 = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/315009647.jpg?k=aa85bea9fe6d4ac0c0dce4c6e3bce7363c1091eb0c4adacaba23697bad455907&o=&hp=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Nirvana Hill Resort Goa</h1>
        <span className="siDistance">1.5km from center</span>
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
          <span className="siPrice">Rs. 1100</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem3;