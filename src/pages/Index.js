import React from "react";
import axios from "axios";
import "../css/style.css";
import "../css/bootstrap.min.css";
import bannerImg from "../img/900x350.png"
import Item from '../components/Item';
import FilterGroup from "../components/FilterGroup";

export default class HomePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      products: [],
      page: 1
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/api/products')
         .then( response => { this.setState({ products: response.data }) });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <FilterGroup />
          <div className="col-lg-9">
            <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <img className="d-block img-fluid" src={bannerImg} alt="First slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block img-fluid" src={bannerImg} alt="Second slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block img-fluid" src={bannerImg} alt="Third slide" />
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>

            <div className="row">
              { this.state.products.map((product) => <Item product={product} />) }
            </div>

            <nav aria-label="...">
              <ul className="pagination">
                <li className="page-item disabled">
                  <a className="page-link" href="#" tabindex="-1">Previous</a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item active">
                  <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
                </li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                  <a className="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>

          </div>

        </div>

      </div>
    );
  }
}