import React from "react";
import GuessForm from "../components/GuessForm";
import CheckoutCartItem from "../components/CheckOutCartItem";

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
            <span className="badge badge-secondary badge-pill">3</span>
          </h4>
          <ul className="list-group mb-3">
            <CheckoutCartItem />
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>$20</strong>
            </li>
          </ul>
        </div>
        <GuessForm />
      </div>
    </div>
  )
}