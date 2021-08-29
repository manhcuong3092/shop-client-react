export default function CheckoutCartItem(props) {
  const { product, size, color, quantity } = props.item;
  return (
    <li className="list-group-item d-flex justify-content-between lh-condensed">
      <div>
        <h6 className="my-0">{ product.name } (x { quantity })</h6>
        <p className="my-0">
          <span className="text-uppercase">{ size } - </span>
          <span className="text-capitalize">{ color }</span>
        </p>
        <small className="text-muted">{ product.shortDescription }</small>
      </div>
      <span className="text-muted">${ product.price*quantity }</span>
    </li>
  )
}