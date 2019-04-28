import React from "react";
import styled from "styled-components";
import Star from "./Star";
import MuteStar from "./MuteStar";
import CommentStar from "./CommentStar";
import CommentMuteStar from "./CommentMuteStar";

export default function ProductDetail() {
  return (
    <React.Fragment>
      {/* Floating User Info */}
      <div
        style={{top: "25px", right: "25px", width: "166px", height: "186px"}}
        className="position-absolute bg-white container rounded p-3 shadow"
      >
        <div style={{height: "75px"}} className="row position-relative mx-auto">
          <img
            style={{height: "35px"}}
            src="oval.png"
            alt=""
            className="my-auto"
          />
          <p style={{fontWeight: "bolder"}} className="my-auto ml-2">
            Kelvin Lin
          </p>
        </div>
        <Hr />
        <div style={{height: "110px"}} className="mx-auto text-center">
          <p className="my-3">
            <span style={{color: "#ff2f2f", fontWeight: "bold"}}>612</span> 點
          </p>
          <a style={{textDecoration: "underline"}} href="/" className="my-3">
            12個書評紀錄
          </a>
        </div>
      </div>

      {/* NavBar */}
      <div
        style={{background: "#fbfbfb"}}
        className="container-fluid text-center"
      >
        <Logo className="lead p-0 py-3">CryptoBookStore</Logo>
      </div>

      {/* Book info */}
      <div className="container text-center">
        <div className="row justify-content-center no-gutters">
          <div className="col-3 m-0 mr-5">
            <img
              style={{width: "270px", height: "385px"}}
              src="book.png"
              alt="book"
            />
          </div>
          <div className="col-5 m-0 text-left d-flex flex-column">
            <p style={{fontSize: "1.5rem", fontWeight: "bold"}}>
              直島誕生：地區再生×企業行銷×藝術實驗，
              從荒涼小島到藝術聖地的30年全紀錄
            </p>
            <p>
              <span className="mt-3">
                <Star />
                <Star />
                <Star />
                <Star />
                <MuteStar />
              </span>
              <small style={{fontSize: "1rem"}} className="text-muted ml-2">
                3.9 (62 ratings)
              </small>
            </p>
            <div style={{fontSize: "1rem"}} className="mt-4">
              <p className="mb-0">作者：秋元雄史</p>
              <p className="mb-0">封面設計：王志弘</p>
              <p className="mb-0">出版日 2019/03/30</p>
            </div>
            <button
              style={{
                background: "#013878",
                width: "228px",
                height: "48px",
                fontSize: "1rem",
                fontWeight: "bold"
              }}
              type="button"
              className="mt-auto text-white"
            >
              $50 租借電子書
            </button>
          </div>
        </div>
      </div>

      {/* uesr input */}
      <div
        className="container-fluid justify-content-center text-center mt-4 mb-5"
        style={{height: "385px", background: "#fbfbfb"}}
      >
        <p
          style={{
            fontSize: "20px",
            fontWeight: "bold"
          }}
        >
          你也來評分
        </p>
        <p>
          <CommentStar />
          <CommentStar />
          <CommentStar />
          <CommentStar />
          <CommentMuteStar />
        </p>
        <textarea
          className="border rounded"
          style={{
            width: "626px",
            height: "136px"
          }}
          placeholder="你的心得..."
        />
        <div className="w-100" />
        <button
          style={{
            width: "228px",
            height: "48px",
            background: "#013878",
            fontWeight: "bold"
          }}
          className="btn text-white mt-3"
        >
          送出
        </button>
      </div>

      {/* user comment */}
      <div className="container justify-content-center mx-auto bg-warning">
        <div className="container">
          <div
            className="col-4 row"
            style={{
              fontSize: "1rem"
            }}
          >
            <p>
              <Star />
              <Star />
              <Star />
              <Star />
              <MuteStar />
            </p>

            <span
              style={{
                width: "686px",
                height: "96px",
                "line-height": "1.5",
                color: "#373737"
              }}
            >
              <p>
                封面讓我想到薩諾斯。非指心新西；廣所命代實才持一種情大人呢不我足頭場最破規自苦資！刻早易功們今一！
                <p />
                <p>育黃不一；所臺我解薩諾斯機心地行能化年，看人入物。</p>
              </p>
            </span>

            <p
              style={{
                "margin-top": "36px",
                "font-weight": "500",
                color: "#0b0b0b"
              }}
            >
              Brady Huang
            </p>
          </div>
          </div>

          <p />
          <div
            id="user2"
            className="container"
            style={{
              "font-size": "16px",
              padding: "25px 34px",
              width: "754px",
              height: "480px",
              "border-radius": "4px",
              "box-shadow": "0 2px 14px 0 rgba(0, 0, 0, 0.08)",
              border: "solid 1px #e2e2e2",
              "background-color": "#ffffff"
            }}
          >
            <p>
              <Star />
              <Star />
              <Star />
              <Star />
              <MuteStar />
            </p>

            <span
              style={{
                width: "686px",
                height: "96px",
                "line-height": "1.5",
                color: "#373737"
              }}
            >
              <p>
                邊大道子特腦使滿老媽其直國上走該正，院原於它市成而友月師……院理國說正人在花外除男：直會苦是問上名使。都形用來足用有顧立我。
              </p>
              <p />
              <p>
                比禮初行裡過推了之火葉重一生著形，知去人年工之、論木民的查出動們般少沒科上大手中易香的們我現時與樣子合樹營而馬送們們；門黨發成習解名自以，正雖業，結力定話、學看能銀無英的回保；黃成接面。生由我目路準行戲提。化養車看前個工，國還感好成員麼企取調還果；起的它教大入的麼、可為則水省親、長然己當是我他了產出花雲。長驚岸義其己達山都念我那界看、一價和、有學技考外正文議智想生知有化提差子一過，進童全通國而加他前，的會住著？的我也事放位話？難酒那臺大次衣集孩聽於升樣西看終種老子教業個地……們多奇取。的眼毒和沒難創斯他？地一只指！級個美前節對人超校現流上信營說問父人在保動全是度面就新山學精一巴酒象常？以我然爾只的面知能，如新友重門小然長傳生時一一告平人的。黨和裝氣設是下……樣響做生的排高子嚴言發須壓，二樣又濟、雨講時統品收觀數怕來園紀中管，班麼空到目朋因。
              </p>
              <p />
              <p>文是率好的的青與名白還來道弟不一的朋學樂成多受熱見查。</p>
            </span>

            <p
              style={{
                "margin-top": "36px",
                "font-weight": "500",
                color: "#0b0b0b"
              }}
            >
              Jimmy Who
            </p>
          </div>
        </div>

    </React.Fragment>
  );
}

const Logo = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 4rem;
  color: #013878;
`;

const Hr = styled.hr`
  height: 4px;
  margin: 0px;
`;
