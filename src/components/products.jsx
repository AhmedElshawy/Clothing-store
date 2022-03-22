import React, { Component } from "react";
class Products extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <h1 className="products-head">Our latest products</h1>
        <section className="pics-gallary">
          {this.props.products.map((x) => (
            <div key={x.id} className="img-div">
              <img src={x.imgSrc} alt={x.imgAlt} />
              <p className="img-description">{x.name}</p>
              <p className="img-description">
                <b>{x.price}</b>
              </p>
              <button onClick={()=>{this.props.onAdd(x)}} className="add-to-cart">
                Add to cart <i className="fas fa-shopping-cart"></i>
              </button>
            </div>
          ))}
        </section>
      </React.Fragment>
    );
  }
}

export default Products;
