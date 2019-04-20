import React, {Component} from "react";

class Header extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container-fluid">
          <p className="display-5">BookReview</p>
          <h1 className="display-4">寫書評，得 BookCoin</h1>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="搜尋書名"
              aria-label="Book's username"
            />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button">
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
