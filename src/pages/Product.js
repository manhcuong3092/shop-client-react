import React from "react";
import axios from "axios";
import "../css/style.css";
import "../css/bootstrap.min.css";
import FilterGroup from "../components/FilterGroup";
import Product from "../components/Product";


export default class ProductDetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: null
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/api/products/' + this.props.match.params.productId)
         .then( response => { this.setState({ product: response.data }) });
  };

  render() {
    const { product } = this.state;
    return (
      <div className="container">
        <div className="row">
          <FilterGroup />
          { product ? <Product product={ product } /> : ''}
        </div>
      </div>
    );
  }
}