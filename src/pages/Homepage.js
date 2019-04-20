import React, {Component} from "react";
import Header from "../components/Header";
import RecommendBooks from "../components/RecommendBooks";
import PopularBooks from "../components/PopularBooks";

class Homepage extends Component {
  render() {
    return (
      <main>
        <Header />
        <RecommendBooks />
        <PopularBooks />
      </main>
    );
  }
}

export default Homepage;
