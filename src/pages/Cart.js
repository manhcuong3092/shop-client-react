import React from "react";
import "../css/style.css";
import "../css/bootstrap.min.css";

import CartItem from '../components/CartItem';

export default function CartPage() {
  return (
      <div className="container">
        <div>
          <h2 className="mt-4 mb-4">Cart</h2>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col" style={{width: "25%"}}>Image</th>
              <th scope="col" style={{width: "30%"}}>Name</th>
              <th scope="col" style={{width: "5%"}}>Size</th>
              <th scope="col" style={{width: "5%"}}>Color</th>
              <th scope="col" style={{width: "10%"}}>Price</th>
              <th scope="col" style={{width: "10%"}}>Quantity</th>
              <th scope="col" style={{width: "15%"}}>Total</th>
            </tr>
          </thead>
          <tbody>
            <CartItem />
            <CartItem />
            <CartItem />
          </tbody>
        </table>

        <div class="card mb-3"  style={{width: "18rem"}}>
          <div className="card-body">
            <h5 className="card-title">Total: <span>1000$</span></h5>
            <a href="#" className="btn btn-primary">Check out</a>
          </div>
        </div>
      </div>
  )
}