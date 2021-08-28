import React from "react";
import "../css/style.css";
import "../css/bootstrap.min.css";

import CartItem from '../components/CartItem';
import { CartContext } from '../contexts/Cart';

export default function CartPage() {
  return (
      <div className="container">
        <div>
          <h2 className="mt-4 mb-4">Cart</h2>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col" className="col-cart-avatar">Image</th>
              <th scope="col" className="col-cart-name">Name</th>
              <th scope="col" className="col-cart-size">Size</th>
              <th scope="col" className="col-cart-color">Color</th>
              <th scope="col" className="col-cart-price">Price</th>
              <th scope="col" className="col-cart-quantity">Quantity</th>
              <th scope="col" className="col-cart-total">Total</th>
              <th scope="col" className="col-cart-total">Remove</th>
            </tr>
          </thead>
          <tbody>
            <CartContext.Consumer>
              { ({cartItems}) => ( cartItems.map(item => <CartItem item={item} />)) }
            </CartContext.Consumer>
          </tbody>
        </table>

        <div class="card mb-3"  style={{width: "18rem"}}>
          <div className="card-body">
            <h5 className="card-title">Total: 
              <CartContext.Consumer>
                  {({totalPrice}) => <span> { totalPrice }$</span>}
              </CartContext.Consumer>
            </h5>
            <a href="#" className="btn btn-primary">Check out</a>
          </div>
        </div>
      </div>
  )
}