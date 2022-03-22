import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./header";
import NavBar from "./navBar";
import Main from "./main";
import Products from "./products";
import Subscribe from "./subscribe";
import Contact from "./contact";
import Cart from "./shoppingCart";
import Footer from "./footer";


class App extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "T-shirt",
        price: "300 LE",
        imgSrc: "../pro1.jpg",
        imgAlt: "pro1",
        isInCart:false

      },
      {
        id: 2,
        name: "T-shirt",
        price: "400 LE",
        imgSrc: "../pro1.jpg",
        imgAlt: "pro2",
        isInCart:false
      },
      {
        id: 3,
        name: "بنطلون",
        price: "300 LE",
        imgSrc: "../pro1.jpg",
        imgAlt: "pro3",
        isInCart:false
      },
      {
        id: 4,
        name: "T-shirt",
        price: "300 LE",
        imgSrc: "../pro1.jpg",
        imgAlt: "pro4",
        isInCart:false
      },
      {
        id: 5,
        name: "T-shirt",
        price: "300 LE",
        imgSrc: "../pro1.jpg",
        imgAlt: "pro5",
        isInCart:false
      },
      {
        id: 6,
        name: "شال",
        price: "250 LE",
        imgSrc: "../pro1.jpg",
        imgAlt: "pro6",
        isInCart:false
      },
      {
        id: 7,
        name: "محمد",
        price: "250 LE",
        imgSrc: "../pro1.jpg",
        imgAlt: "pro7",
        isInCart:false
      },
    ],
  };

  noOfProducts = () => {
    return this.state.products.filter((p)=> p.isInCart===true ).length;
  };

// convert isInCart boolean to true
  addToCart= (product)=>{
     //clone
     let products = [...this.state.products]
     //edit
     let index = products.indexOf(product)
     products[index] = {...products[index], isInCart:true }
     //set state
     this.setState({products})
  }

  render() {
    return (
      <React.Fragment>
        <Switch>
        <Route path="/cart" render={()=> 
        <Cart 
        products={this.state.products.filter((p)=> p.isInCart===true )}
        {...this.props}

        />
      } 
        />
        
        
        <Route path='/home'>
        <Header countingProducts={this.noOfProducts()} />
          <NavBar />
          <Main />
          <Products products={this.state.products} {...this.props} 
          onAdd={this.addToCart}
          />
          <Subscribe />
          <Contact />
          <Footer />
        </Route>
        <Redirect from='/' to='/home' />
          
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
