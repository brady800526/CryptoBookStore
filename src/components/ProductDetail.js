import React from 'react'

export default function ProductDetail() {
  return (
    <React.Fragment>

      <div className="card position-fixed" style={{
        "right" : "5px",
        "text-align" : "center",
        "margin-right" : "26px",
        "display" : "inline-block",
        "width" : "166px",
        "height" : "186px",
        "border-radius" : "8px",
        "box-shadow" : "0 2px 14px 0 rgba(0, 0, 0, 0.06)",
        "border" : "solid 1px #e6e6e6"}}>
          
          <span style={{"padding" : "26px"}}>

            <p>
            <img src="img/oval.png" srcset="img/oval@2x.png, img/oval@3x.png" style={{"width" : "35px", "height" : "35px", "margin-right" : "9px"}}></img>
              Kelvin Lin</p>
          
            <p style={{
              "width" : "152px",
              "height" : "1px",
              "background-color" : "#e6e6e6"}}></p>

            <p><span style={{"color" : "#ff2f2f"}}>612</span> 點</p>
            
            <p style={{
              "color" : "#0862eb",
              "text-decoration" : "underline"}}>
              12個書評紀錄
            </p>
        
          </span>
      </div>



      <div className="navbar-expand mx-auto fixed-top"
      style={{
      "background-color": "#fbfbfb",
      "height" : "72px",
      "margin" : "auto",
      "text-align" : "center",
      "padding-top" : "23px",
      "font-size" : "22px",
      "font-weight" : "bold",
      "letter-spacing" : "-0.3px",
      "color" : "#013878"}}>CryptoBookStore</div>


      <div id="bookInfo" className="container d-flex justify-content-center" style={{"margin-top" : "100px"}}>
        <div>
          <img className="d-flex flex-wrap"
                id="bookImage" 
                style={{
                  "width" : "270px",
                  "height" : "385px",
                  "object-fit" : "contain"
                }}          
                src="img/get-image.png" 
                srcset="img/get-image@2x.png 2x, img/get-image@3x.png 3x"
                alt="image"></img>
        </div>
        
        <div className="px-3" style={{
          "font-weight" : "normal",
          "font-style" : "normal",
          "font-stretch" : "normal",
          "line-height" : "normal",
          "letter-spacing" : "normal",
          "color" : "#373737"}}>

              <p id="bookTitle" className="align-self-start"
                  style={{
                  "font-size" : "22px",
                  "font-weight" : "600"}}>
                  直島誕生：地區再生×企業行銷×藝術實驗，
                  <br/>從荒涼小島到藝術聖地的30年全紀錄
              </p>
              <p style={{"margin-top" : "30px", "font-size" : "16px"}}>
                <span id="bookStarRating"
                      style={{
                      "margin-right" : "1em",
                      "width" : "120px",
                      "height" : "18px"}}>
                      <img style={{"height" : "18px"}} src="img/filled-star-s.png" srcset="img/filled-star-s@2x.png, img/filled-star-s@3x.png"></img>
                      <img style={{"height" : "18px"}} src="img/filled-star-s.png" srcset="img/filled-star-s@2x.png, img/filled-star-s@3x.png"></img>
                      <img style={{"height" : "18px"}} src="img/filled-star-s.png" srcset="img/filled-star-s@2x.png, img/filled-star-s@3x.png"></img>
                      <img style={{"height" : "18px"}} src="img/filled-star-s.png" srcset="img/filled-star-s@2x.png, img/filled-star-s@3x.png"></img>
                      <img style={{"height" : "18px"}} src="img/empty-star-s.png" srcset="img/empty-star-s@2x.png, img/empty-star-s@3x.png"></img>
                      </span>
                <span id="numericRating"
                      style={{
                      "margin" : "auto",
                      "width" : "115px",
                      "height" : "19px"}}>
                      4.1 (52 ratings)</span>
              </p>
              <p style={{
                  "width" : "321px",
                  "height" : "72px",
                  "font-size" : "16px"}}>
                    <br/><span id="bookAuthor">作者：秋元雄史</span>
                    <br/><span id="coverDesigner">封面設計：王志弘</span>
                    <br/><span id="bookbrublish">出版日 2019/03/30</span>
              </p>
          
            <button type="button" class="btn btn-primary" id="rentBook"
                    style={{
                      "margin-top" : "128px",
                      "background-color" : "#013878",
                      "width" : "228px",
                      "height" : "48px",
                      "border-radius" : "3px"}}>
                    $50 租借電子書
            </button>
        </div>
      </div>


      <div id="youRate" className="d-flex flex-column mx-auto justify-content-center" 
            style={{"height" : "385px", "background-color" : "#fbfbfb"}}>
        <p className="d-flex justify-content-center"
            style={{
              "font-size": "20px",
              "font-weight" : "600"}}>你也來評分</p>
        <p className="d-flex justify-content-center">
        <img src="img/empty-star-s.png" srcset="img/empty-star-s@2x.png, img/empty-star-s@3x.png"></img>
        <img src="img/empty-star-s.png" srcset="img/empty-star-s@2x.png, img/empty-star-s@3x.png"></img>
        <img src="img/empty-star-s.png" srcset="img/empty-star-s@2x.png, img/empty-star-s@3x.png"></img>
        <img src="img/empty-star-s.png" srcset="img/empty-star-s@2x.png, img/empty-star-s@3x.png"></img>
        <img src="img/empty-star-s.png" srcset="img/empty-star-s@2x.png, img/empty-star-s@3x.png"></img>
        </p>
        <p className="mx-auto">
        {/* need to move placeholder to top */}
          <input type="text"
                  style={{
                    "width" : "626px",
                    "height" : "136px",
                    "border-radius" : "8px",
                    "border" : "solid 1px #bdbdbd",
                    "background-color" : "#ffffff"}}
                  placeholder="你的心得...">
          </input>
        </p>
        <input className="btn btn-primary align-self-center" type="submit" value="送出" 
                style={{
                  "background-color" : "#013878",
                  "width" : "228px",
                  "height" : "48px",
                  "border-radius" : "3px"}}></input>
      </div>

      <div id="allReviews" className="container pt-3">

      <div id="user1" className="container"
        style={{
          "font-size" : "16px",
          "padding" : "25px 34px",
          "width" : "754px",
          "height" : "234px",
          "border-radius" : "4px",
          "box-shadow" : "0 2px 14px 0 rgba(0, 0, 0, 0.08)",
          "border" : "solid 1px #e2e2e2",
          "background-color" : "#ffffff"}}>

        <p id="userStarRating">
        <img style={{"height" : "12px"}} src="img/filled-star-s.png" srcset="img/filled-star-s@2x.png, img/filled-star-s@3x.png"></img>
        <img style={{"height" : "12px"}} src="img/filled-star-s.png" srcset="img/filled-star-s@2x.png, img/filled-star-s@3x.png"></img>
        <img style={{"height" : "12px"}} src="img/filled-star-s.png" srcset="img/filled-star-s@2x.png, img/filled-star-s@3x.png"></img>
        <img style={{"height" : "12px"}} src="img/filled-star-s.png" srcset="img/filled-star-s@2x.png, img/filled-star-s@3x.png"></img>
        <img style={{"height" : "12px"}} src="img/empty-star-s.png" srcset="img/empty-star-s@2x.png, img/empty-star-s@3x.png"></img>
        </p>

        <span style={{
          "width" : "686px",
          "height" : "96px",
          "line-height" : "1.5",
          "color" : "#373737"}}>
        <p>封面讓我想到薩諾斯。非指心新西；廣所命代實才持一種情大人呢不我足頭場最破規自苦資！刻早易功們今一！
        <p></p>
        <p>育黃不一；所臺我解薩諾斯機心地行能化年，看人入物。</p></p></span>

        <p id="userName" 
            style={{
            "margin-top" : "36px",
            "font-weight": "500",
            "color" : "#0b0b0b"}}>
            <img src="img/oval.png" srcset="img/oval@2x.png, img/oval@3x.png" style={{"width" : "25px", "height" : "25px", "margin-right" : "7px"}}></img>
            Brady Huang
        </p>

      </div>

      <p></p>
      <div id="user2" className="container"
        style={{
          "font-size" : "16px",
          "padding" : "25px 34px",
          "width" : "754px",
          "height" : "480px",
          "border-radius" : "4px",
          "box-shadow" : "0 2px 14px 0 rgba(0, 0, 0, 0.08)",
          "border" : "solid 1px #e2e2e2",
          "background-color" : "#ffffff"}}>

        <p id="userStarRating">
        <img style={{"height" : "12px"}} src="img/filled-star-s.png" srcset="img/filled-star-s@2x.png, img/filled-star-s@3x.png"></img>
        <img style={{"height" : "12px"}} src="img/filled-star-s.png" srcset="img/filled-star-s@2x.png, img/filled-star-s@3x.png"></img>
        <img style={{"height" : "12px"}} src="img/filled-star-s.png" srcset="img/filled-star-s@2x.png, img/filled-star-s@3x.png"></img>
        <img style={{"height" : "12px"}} src="img/filled-star-s.png" srcset="img/filled-star-s@2x.png, img/filled-star-s@3x.png"></img>
        <img style={{"height" : "12px"}} src="img/filled-star-s.png" srcset="img/filled-star-s@2x.png, img/filled-star-s@3x.png"></img>
        </p>

        <span style={{
          "width" : "686px",
          "height" : "96px",
          "line-height" : "1.5",
          "color" : "#373737"}}>
          <p>邊大道子特腦使滿老媽其直國上走該正，院原於它市成而友月師……院理國說正人在花外除男：直會苦是問上名使。都形用來足用有顧立我。</p>
          <p></p>
          <p>比禮初行裡過推了之火葉重一生著形，知去人年工之、論木民的查出動們般少沒科上大手中易香的們我現時與樣子合樹營而馬送們們；門黨發成習解名自以，正雖業，結力定話、學看能銀無英的回保；黃成接面。生由我目路準行戲提。化養車看前個工，國還感好成員麼企取調還果；起的它教大入的麼、可為則水省親、長然己當是我他了產出花雲。長驚岸義其己達山都念我那界看、一價和、有學技考外正文議智想生知有化提差子一過，進童全通國而加他前，的會住著？的我也事放位話？難酒那臺大次衣集孩聽於升樣西看終種老子教業個地……們多奇取。的眼毒和沒難創斯他？地一只指！級個美前節對人超校現流上信營說問父人在保動全是度面就新山學精一巴酒象常？以我然爾只的面知能，如新友重門小然長傳生時一一告平人的。黨和裝氣設是下……樣響做生的排高子嚴言發須壓，二樣又濟、雨講時統品收觀數怕來園紀中管，班麼空到目朋因。</p>
          <p></p>
          <p>文是率好的的青與名白還來道弟不一的朋學樂成多受熱見查。</p>
       </span>

        <p id="userName" 
            style={{
            "margin-top" : "36px",
            "font-weight": "500",
            "color" : "#0b0b0b"}}>
            <img src="img/oval.png" srcset="img/oval@2x.png, img/oval@3x.png" style={{"width" : "25px", "height" : "25px", "margin-right" : "7px"}}></img>
            Jimmy Who
        </p>

      </div>

      </div>

    </React.Fragment>
  )
}
