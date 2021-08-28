import '../css/bootstrap.min.css';
import { BrowserRouter as Router, Link } from "react-router-dom";
import productImg from "../img/700x400.png";

export default function Item(props) {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100">
        <Link to={"/product/" + props.product._id }><img className="card-img-top" src={'http://localhost:4000' + props.product.avatar } alt="" /></Link>
        <div className="card-body">
          <h4 className="card-title">
            <Link to={"/product/" + props.product._id }>{ props.product.name }</Link>
          </h4>
          <h5>{ props.product.price }$</h5>
          <p className="card-text">{ props.product.shortDescription }</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
        </div>
      </div>
    </div>
  )
}