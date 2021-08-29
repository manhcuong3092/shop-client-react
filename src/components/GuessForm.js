import React, { Component } from "react"
import axios from "axios";
import { CartContext } from "../contexts/Cart";

export default class GuessForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: '',
      email: '',
      phone: '',
      address: ''
    }

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({fullname: event.target.value});
  }

  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }

  handleChangeAddress(event) {
    this.setState({address: event.target.value});
  }

  handleChangePhone(event) {
    this.setState({phone: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.props);
    
    let { cartItems, totalPrice } = this.props;
    if(cartItems.length === 0) {
      alert('Your cart is empty.');
      return;
    }

    cartItems.forEach(item => {
      item.product = item.product._id;
    });
    const { fullname, email, phone, address } = this.state;

    if(!fullname || !email || !phone || !address) {
      alert('Fill in all the fields of the form.');
      return;
    }
    
    const order = {
      customer: {
        fullname,
        address,
        email,
        phoneNumber: phone
      },
      items: cartItems,
      totalPrice
    }
    

    axios.post("http://localhost:4000/api/orders", order)
      .then((response) => {
        alert("Your order has been received!");
      })
      .catch((error) => {
        alert("Error.");
    });

    this.props.resetCart();
    this.setState({
      fullname: '',
      email: '',
      address: '',
      phone: ''
    });
  }

  render() {
    const { fullname, email, phone, address } = this.state;
    return (
      <div className="col-md-8 order-md-1">
        <h4 className="mb-3">Billing address</h4>
        <form className="needs-validation" novalidate="" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-12">
              <label for="firstName">Full name<span className="text-muted">(Required)</span></label>
              <input type="text" className="form-control" id="firstName" placeholder="" value={fullname} 
                required="" onChange={this.handleChangeName} />
              <div className="invalid-feedback">
                Valid name is required.
              </div>
            </div>
          </div>
  
          <div className="mb-3">
            <label for="email">Email <span className="text-muted">(Required)</span></label>
            <input type="email" className="form-control" id="email" placeholder="you@example.com" 
              value={email} required="" onChange={this.handleChangeEmail} />
            <div className="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>
  
          <div className="mb-3">
            <label for="phone">Phone <span className="text-muted">(Required)</span></label>
            <input type="tel" className="form-control" id="phone" placeholder="0123456789" 
              value={phone} required="" onChange={this.handleChangePhone} />
            <div className="invalid-feedback">
              Please enter a valid phone number for shipping updates.
            </div>
          </div>
  
          <div className="mb-3">
            <label for="address">Address</label>
            <input type="text" className="form-control" id="address" placeholder="1234 Main St"
              value={address} required="" onChange={this.handleChangeAddress} />
            <div className="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>
          <hr className="mb-4" />
          <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
        </form>
      </div>
    )
  }
}