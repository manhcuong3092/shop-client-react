import React, { Component } from 'react';

export const CartContext = React.createContext();

export class CartProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: [],
      totalItem: 0,
      totalPrice: 0
    };

    this.addToCart = this.addToCart.bind(this);
    this.setChangeCart = this.setChangeCart.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.resetCart = this.resetCart.bind(this);
  }

  addToCart(product, quantity, size, color) {
    if(!size || !color) {
      alert('Choose size and color');
      return;
    }
    quantity = parseInt(quantity);
    let { cartItems, totalItem } = this.state;
    let duplicatedItemIndex = this.findDuplicatedItem(product, size, color);
    if (duplicatedItemIndex === -1) {
      this.setState({
        cartItems: cartItems.concat({product, quantity, size, color}),
        totalItem: totalItem + quantity
      }, () => {
        this.calculateTotalPrice();
      });
    } else {
      cartItems[duplicatedItemIndex].quantity += quantity;
      this.setState({
        cartItems: cartItems,
        totalItem: totalItem + quantity
      }, () => {
        this.calculateTotalPrice();
      });
    }
  }

  setChangeCart(product, quantity, size, color) {
    quantity = parseInt(quantity);
    let { cartItems, totalItem } = this.state;
    let duplicatedItemIndex = this.findDuplicatedItem(product, size, color);
    if (duplicatedItemIndex === -1) {
      this.setState({
        cartItems: cartItems.concat({product, quantity, size, color}),
        totalItem: totalItem + quantity
      }, () => {
        this.calculateTotalPrice();
      });
    } else {
      totalItem = totalItem - cartItems[duplicatedItemIndex].quantity + quantity
      cartItems[duplicatedItemIndex].quantity = quantity;
      this.setState({
        cartItems: cartItems,
        totalItem: totalItem
      }, () => {
        this.calculateTotalPrice();
      });
    }
    
  }

  deleteItem(product, size, color) {
    let { cartItems, totalItem } = this.state;
    let duplicatedItemIndex = this.findDuplicatedItem(product, size, color);
    if (duplicatedItemIndex === -1) {
      return;
    } else {
      totalItem = totalItem - cartItems[duplicatedItemIndex].quantity
      cartItems.splice(duplicatedItemIndex, 1);
      this.setState({
        cartItems: cartItems,
        totalItem: totalItem
      }, () => {
        this.calculateTotalPrice();
      });
    }
  }

  resetCart() {
    this.setState({
      cartItems: [],
      totalItem: 0,
      totalPrice: 0
    })
  }

  findDuplicatedItem(product, size, color) {
    let { cartItems } = this.state;
    let duplicatedItemIndex = -1;
    cartItems.forEach((item, index) => {
      console.log(index);
      if (item.product._id === product._id && item.size === size && item.color === color) {
        duplicatedItemIndex = index;
      }
    });
    return duplicatedItemIndex;
  }

  calculateTotalPrice() {
    const { cartItems } = this.state;
    let total = 0;
    cartItems.forEach(item => {
      total += item.product.price*item.quantity;
    });
    this.setState({
      totalPrice: total
    });
  }

  render() {
    return (
      <CartContext.Provider
        value={{
          cartItems: this.state.cartItems,
          addToCart: this.addToCart,
          totalItem: this.state.totalItem,
          totalPrice: this.state.totalPrice,
          setChangeCart: this.setChangeCart,
          deleteItem: this.deleteItem,
          resetCart: this.resetCart
        }}>
          { this.props.children }
        </CartContext.Provider>
    )
  }
}