import React, { Component } from "react";
import Header from "./header";

class Cart extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Header />
        <section className="main">
          <div className="shopping-cart">
            {this.props.products.map((p) => (
              <div key={p.id} className="items-conatiner">
                <img
                  
                  className="img-cart"
                  src={p.imgSrc}
                  alt={p.imgAlt}
                  width="200px"
                  height="200px"
                />
                <div>
                  <p>{p.name}</p>
                  <p className="price">Price: {p.price}</p>
                </div>
                <i className="far fa-times-circle"></i>
              </div>
            ))}
            <button className="btn">check out</button>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Cart;
