import React from "react";
import "../css/style.css";
import "../css/bootstrap.min.css";

export default function ContactPage() {
  return (
    <div className="container">
      <div>
        <h2 className="mt-5 mb-5 text-center">Contact us</h2>
      </div>
      <div className="mb-5">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 col-md-offset-2 mb-4">
            <div className="form-bg">
              <form className="form">
                <div className="form-group"> <label className="sr-only">Name</label> <input type="text" className="form-control" required="" id="nameNine" placeholder="Your Name" /> </div>
                <div className="form-group"> <label className="sr-only">Email</label> <input type="email" className="form-control" required="" id="emailNine" placeholder="Email Address" /> </div>
                <div className="form-group"> <label className="sr-only">Name</label> <textarea className="form-control" required="" rows="7" id="messageNine" placeholder="Write message"></textarea> </div>
                <button type="submit" className="btn text-center btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}