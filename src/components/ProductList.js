import React from "react";
import styled from "styled-components";
import SuggestBook from "./SuggestBook";
import PopularBook from "./PopularBook";

export default function ProductList() {
  return (
    <React.Fragment>
      {/* Floating User Info */}
      <div
        style={{top: "25px", right: "25px", width: "166px", height: "186px"}}
        className="position-absolute bg-white container rounded p-3"
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
      {/* NavBar element */}
      <div
        style={{
          paddingBottom: "4.5rem",
          backgroundImage: "url(bg.svg)",
          backgroundSize: "100%"
        }}
        className="jumbotron jumbotron-fluid pt-0 text-center"
      >
        <div className="container">
          <Logo className="lead p-0 pt-3">CryptoBookStore</Logo>
          <Title className="lead">寫書評，得秘銀幣</Title>
          <div
            style={{height: "54px"}}
            className="bg-white d-inline-flex col-6 justify-content-between nopadding"
          >
            <img
              src="glyph.svg"
              alt="glyph"
              className="align-self-center p-3"
            />
            {/* <div className="bg-danger flex-fill">Flex item 1</div> */}
            <input
              style={{
                fontSize: "1rem",
                display: "block",
                width: "100%",
                height: "100%",
                outline: "none",
                borderColor: "transparent"
              }}
              type="text"
              placeholder="搜尋書名"
            />
            <button
              style={{width: "91px", height: "42px", background: "#013878"}}
              className="border-0 rounded m-1 text-white"
            >
              送出
            </button>
          </div>
        </div>
      </div>

      {/* SuggestBooks */}
      <div className="container mb-5">
        <div className="row">
          <img style={{marginRight: "10px"}} src="s-icon.svg" alt="group" />
          <p
            style={{fontSize: "20px", fontWeight: "bold", marginBottom: "0px"}}
          >
            為您推薦
          </p>
        </div>
        <div className="row mt-3">
          <SuggestBook />
          <SuggestBook />
          <SuggestBook />
          <SuggestBook />
        </div>
      </div>

      {/* PopularBooks */}
      <div className="container pb-5">
        <div className="row">
          <img style={{marginRight: "10px"}} src="p-icon.svg" alt="group" />
          <p
            style={{fontSize: "20px", fontWeight: "bold", marginBottom: "0px"}}
          >
            熱門書評
          </p>
        </div>
        <div className="row mt-3">
          <PopularBook />
          <PopularBook />
          <PopularBook />
          <PopularBook />
        </div>
      </div>
    </React.Fragment>
  );
}

const Logo = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 9.75rem;
  color: #013878;
`;

const Title = styled.h1`
  font-size: 2.75rem;
  font-weight: bold;
  margin-bottom: 3.25rem;
`;

const Hr = styled.hr`
  height: 4px;
  margin: 0px;
`;
