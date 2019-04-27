import React from "react";
import Star from "./Star";
import MuteStar from "./MuteStar";

export default function PopularBook() {
  return (
    <div className="col-6 mb-2">
      <div className="d-flex justify-content-start p-4 rounded shadow">
        <img
          className="mr-3"
          style={{width: "124px", height: "176px"}}
          src="popularBooks/1.png"
          alt="book"
        />
        <div>
          <p style={{fontSize: "1rem"}}>
            <Star />
            <Star />
            <Star />
            <Star />
            <MuteStar />
          </p>
          <p>
            封面讓我想到薩諾斯。非指心新西；廣所命代實才持一種情大人呢不我足頭場最破規自苦資！刻早易功們今一！
            育黃不一；所臺我解薩諾斯機心地行能化年，看人入物...
          </p>
        </div>
      </div>
      <blockquote className="mt-3">
        <img
          className="mr-4"
          style={{width: "35px", height: "35px"}}
          src="oval.png"
          alt=""
        />
        Brady Huang <span className="text-muted">寫了</span>{" "}
        第五風暴：一個失控政府，一場全球災難
      </blockquote>
    </div>
  );
}
