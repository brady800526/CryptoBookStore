import React from "react";
import Star from "./Star";
import MuteStar from "./MuteStar";

export default function SuggestBook() {
  return (
    <div className="col-3">
      <div style={{width: "191px"}} className="card border-0 ">
        <img
          className="card-img-top shadow-sm rounded"
          src="suggestBooks/1.png"
          alt="book"
        />
        <div className="card-body px-0 pt-3 pb-0 mb-0">
          <h5 style={{fontSize: "1rem"}} className="card-title mb-1">
            字形散步 走在台灣：路上的文字觀察
          </h5>
        </div>
        <div>
          <Star />
          <Star />
          <Star />
          <Star />
          <MuteStar />
          <small style={{fontSize: "12px"}} className="text-muted ml-2">
            3.9 (62 ratings)
          </small>
        </div>
      </div>
    </div>
  );
}
