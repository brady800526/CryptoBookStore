import React from "react";

let RecommendBook = () => {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src="https://picsum.photos/100"
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">字型散步 走在台灣：路上的文字觀察</h5>
        <p className="card-text">
          <small className="text-muted">⭐⭐⭐⭐</small>
        </p>
      </div>
    </div>
  );
};

export default RecommendBook;
