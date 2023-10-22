import "./searchItem.css";

const SearchItem7 = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/491067977.jpg?k=592b9d22dab420e51aa87f956e0e696e65e915784f9560ca03d19808b67acbcb&o=&hp=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">RiverGrand Hotek Mussorie</h1>
        <span className="siDistance">500m from center</span>
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
          <span>Very Good</span>
          <button>4.0</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">Rs. 1000</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem7;