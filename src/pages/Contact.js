import React from "react";
import "../css/style.css";
import "../css/bootstrap.min.css";
import ContactForm from "../components/ContactForm";

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
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}