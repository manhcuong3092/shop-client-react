import React from "react";
import GuessForm from "../components/GuessForm";
import CheckoutCartItem from "../components/CheckOutCartItem";
import { CartContext } from "../contexts/Cart";

export default function CheckoutPage() {
  return (
    <div className="container">
      <div>
        <h2 className="mt-4 mb-4">Check out</h2>
      </div>
      <div className="row mb-4">
        <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Your cart</span>
            <CartContext.Consumer>
              { ({totalItem}) => <span className="badge badge-secondary badge-pill">{ totalItem }</span> }
            </CartContext.Consumer>
          </h4>
          <ul className="list-group mb-3">
            <CartContext.Consumer>
              { ({cartItems}) => ( cartItems.map(item => <CheckoutCartItem item={item} />)) }
            </CartContext.Consumer>
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <CartContext.Consumer>
                  {({totalPrice}) => <strong>${ totalPrice }</strong>}
              </CartContext.Consumer>
            </li>
          </ul>
        </div>
        <CartContext.Consumer>
          {({cartItems, totalPrice, resetCart}) => <GuessForm cartItems={cartItems} totalPrice={totalPrice} resetCart={resetCart} />}
        </CartContext.Consumer>
      </div>
    </div>
  )
}