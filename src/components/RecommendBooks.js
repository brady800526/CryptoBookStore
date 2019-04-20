import React from "react";

import RecommendBook from "./RecommendBook";

let RecommendBooks = () => {
  return (
    <div>
      <label>
        <span className="badge" role="img" aria-label="recommend books">
          🌟
        </span>{" "}
        為您推薦
      </label>
      <div className="card-deck">
        <RecommendBook />
        <RecommendBook />
        <RecommendBook />
        <RecommendBook />
        <RecommendBook />
      </div>
    </div>
  );
};

export default RecommendBooks;
