import React from "react";
import "../css/style.css";
import "../css/bootstrap.min.css";
import FilterGroup from "../components/FilterGroup";

export default function ProductDetailPage() {
  return (
    <div className="container">
      <div className="row">
        <FilterGroup />
        <div className="col-lg-9">
          <div className="card mt-4">
            <img className="card-img-top img-fluid" src="http://placehold.it/900x400" alt="" />
            <div className="card-body">
              <h3 className="card-title">Product Name</h3>
              <h4>$24.99</h4>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta. Totam id dolores, sint aperiam sequi pariatur praesentium animi perspiciatis molestias iure, ducimus!</p>
              <span className="text-warning">&#9733; &#9733; &#9733; &#9733; &#9734;</span>
              4.0 stars
              <div className="size">
                <span>Size: </span>
                <input className="ml-2" type="radio" name="size" value="s" /> S
                <input className="ml-2" type="radio" name="size" value="m" /> M
                <input className="ml-2" type="radio" name="size" value="l" /> L
                <input className="ml-2" type="radio" name="size" value="xl" /> XL
              </div>
              <div className="color">
                <span>Color: </span>
                <input className="ml-2" type="radio" name="color" value="black" /> Black
                <input className="ml-2" type="radio" name="color" value="white" /> White
                <input className="ml-2" type="radio" name="color" value="green" /> Green
                <input className="ml-2" type="radio" name="color" value="red" /> Red
              </div>
              <div className="mt-3">
                Quantity:
                <input className="quantity m-2" type="number" min="0" max="10" value="1" />
                <button className="btn btn-primary add-to-cart">Add to cart</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}