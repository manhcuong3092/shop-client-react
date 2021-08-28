import React, { Component } from 'react';

export const CartContext = React.createContext();

export class CartProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: [],
      totalItem: 0
    };

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(product, quantity, size, color) {
    if(!size || !color) {
      alert('Choose size and color');
      return;
    }
    quantity = parseInt(quantity);
    const { cartItems, totalItem } = this.state;
    let duplicatedItemIndex = -1;
    cartItems.forEach((item, index) => {
      if (item.product === product && item.size === size && item.color == color) {
        duplicatedItemIndex = index;
        return;
      }
    });
    if (duplicatedItemIndex === -1) {
      this.setState({
        cartItems: cartItems.concat({product, quantity, size, color}),
        totalItem: totalItem + quantity
      });
    } else {
      cartItems[duplicatedItemIndex].quantity += quantity;
      this.setState({
        cartItems: cartItems,
        totalItem: totalItem + quantity
      });
    }
    console.log(this.state);
  }

  render() {
    return (
      <CartContext.Provider
        value={{
          cartItems: this.state.cartItems,
          addToCart: this.addToCart,
          totalItem: this.state.totalItem
        }}>
          { this.props.children }
        </CartContext.Provider>
    )
  }
}