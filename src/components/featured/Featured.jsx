import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1569758267239-d08deb78bb1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Mumbai</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1627894483216-2138af692e32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmFyYW5hc2l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Varanasi</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1626014303757-6366ef55c4ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Uttarakhand</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;