import React, { Component } from 'react';
import axios from 'axios';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: '',
      email: '',
      content: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeContent = this.handleChangeContent.bind(this);
  }

  handleChangeName(event) {
    this.setState({fullname: event.target.value});
  }

  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }

  handleChangeContent(event) {
    this.setState({content: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const { fullname, email, content } = this.state;
    if(!fullname || !email || !content) {
      alert('You must fill in all the fields.')
      return;
    }

    debugger;

    const contact = {
      customer: {
        name: fullname,
        email: email
      },
      content
    }
    
    axios.post("http://localhost:4000/api/contacts", contact)
      .then((response) => {
        alert('Your message has been received.');
      })
      .catch((error) => {
        alert('Error');
      });
    
    this.setState({
      fullname: '',
      email: '',
      content: ''
    });
  }

  render() {
    return (
      <form className="form" onSubmit={ this.handleSubmit }>
        <div className="form-group"> <label className="sr-only">Name</label> 
          <input type="text" className="form-control" required="" 
            id="nameNine" placeholder="Your Name" 
            onChange={this.handleChangeName} /> 
        </div>
        <div className="form-group"> <label className="sr-only">Email</label> 
          <input type="email" className="form-control" required="" 
            id="emailNine" placeholder="Email Address"
            onChange={this.handleChangeEmail} /> 
        </div>
        <div className="form-group"> <label className="sr-only">Name</label> 
          <textarea className="form-control" required="" rows="7"
            id="messageNine" placeholder="Write message"
            value={this.state.content}
            onChange={this.handleChangeContent} />
        </div>
        <button type="submit" className="btn text-center btn-primary">Send Message</button>
      </form>
    );
  }
}