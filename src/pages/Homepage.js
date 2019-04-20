import React, {Component} from "react";
import Header from "../components/Header";
import RecommendBooks from "../components/RecommendBooks";

class Homepage extends Component {
  render() {
    return (
      <main>
        <Header />
        <RecommendBooks />
      </main>
    );
  }
}

export default Homepage;
