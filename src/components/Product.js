import { CartContext } from "../contexts/Cart";
import React, { useState } from "react";

export default function Product(props) {
  const { product } = props;
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState();
  const [color, setColor] = useState();

  const handleSizeRadioChange = e => {
    setSize(e.target.value);
  };
  
  const handleColorRadioChange = e => {
    setColor(e.target.value);
  };

  return (
    <div className="col-lg-9">
      <div className="card mt-4">
        <img className="card-img-top img-fluid" src={"http://localhost:4000/" + product.avatar } alt="" />
        <div className="card-body">
          <h3 className="card-title">{ product.name }</h3>
          <h4>{ product.price }$</h4>
          <p className="card-text">{ product.detailDescription }</p>
          <span className="text-warning">&#9733; &#9733; &#9733; &#9733; &#9734;</span>
          4.0 stars
          <div className="size">
            <span>Size: </span>
            { product.sizes.map(size => 
              <span className="text-uppercase mr-2">
                <input 
                  className="ml-2" type="radio" name="size" value={size}
                  onChange={handleSizeRadioChange} /> {size}
              </span> )}
          </div>
          <div className="color">
            <span>Color: </span>
            { product.colors.map(color => 
              <span className="text-capitalize mr-2">
                <input className="ml-2" type="radio" name="color" value={color}
                  onChange={handleColorRadioChange} /> {color}
              </span> )}
          </div>
            <div className="mt-3">
              Quantity:
              <input className="quantity m-2" type="number" min="0" max="10" value={ quantity }
                onChange={(e) => setQuantity(e.target.value)}
              />
              <CartContext.Consumer>
                {({addToCart}) => 
                  <button className="btn btn-primary add-to-cart"
                    onClick={() => addToCart(product, quantity, size, color)}>Add to cart</button>
                }
              </CartContext.Consumer>
            </div>
        </div>
      </div>
    </div>
  );
}