import React from "react";
import SHOP_DATA from "./shop-data.js";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collection: SHOP_DATA
    };
  }
  render() {
    return (
      <div>
        <h1>Hello from shop</h1>
      </div>
    );
  }
}

export default ShopPage;
