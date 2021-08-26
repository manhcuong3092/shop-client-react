import React from "react";
import GuessForm from "../components/GuessForm";
import CheckoutCartItem from "../components/CheckOutCartItem";

export default function CheckoutPage() {
  return (
    <div class="container">
      <div>
        <h2 class="mt-4 mb-4">Check out</h2>
      </div>
      <div class="row mb-4">
        <div class="col-md-4 order-md-2 mb-4">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Your cart</span>
            <span class="badge badge-secondary badge-pill">3</span>
          </h4>
          <ul class="list-group mb-3">
            <CheckoutCartItem />
            <li class="list-group-item d-flex justify-content-between">
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