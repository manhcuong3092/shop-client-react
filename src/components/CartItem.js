import productImg from "../img/700x400.png";
import React, { useState } from "react";
import { CartContext } from "../contexts/Cart";

export default function CartItem(props) {
  const { product, size, color, quantity } = props.item;
  const [ amountInCart, setAmountInCart] = useState(quantity);

  return (
    <tr>
      <td>
        <img src={ "http://localhost:4000/" + product.avatar } style={{ width: '200px', height: '200px' }} />
      </td>
      <td className="mt-2">{ product.name }</td>
      <td className="mt-2">{ size }</td>
      <td className="mt-2">{ color }</td>
      <td className="mt-2">{ product.price }$</td>
      <td>
        <CartContext.Consumer>
          {({ setChangeCart }) => 
            <input type="number" classNameName="form-control" value={ amountInCart }
            onChange={(e) => {
                const amount = e.target.value;
                setAmountInCart(amount);
                setChangeCart(product, amount, size, color);
              }}
            />
          }
        </CartContext.Consumer>
      </td>
      <td className="mt-2">{ product.price*amountInCart }$</td>
      <td>
        <CartContext.Consumer>
          {({ deleteItem }) => 
            <button className="btn btn-danger"
              onClick={(e) => {
                deleteItem(product, size, color);
              }}
            >X</button>
          }
        </CartContext.Consumer>
      </td>
    </tr>
  )
}