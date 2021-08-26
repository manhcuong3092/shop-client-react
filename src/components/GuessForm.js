export default function GuessForm() {
  return (
    <div className="col-md-8 order-md-1">
      <h4 className="mb-3">Billing address</h4>
      <form className="needs-validation" novalidate="">
        <div className="row">
          <div className="col-md-12">
            <label for="firstName">Full name</label>
            <input type="text" className="form-control" id="firstName" placeholder="" value="" required="" />
            <div className="invalid-feedback">
              Valid name is required.
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label for="email">Email <span className="text-muted">(Optional)</span></label>
          <input type="email" className="form-control" id="email" placeholder="you@example.com" />
          <div className="invalid-feedback">
            Please enter a valid email address for shipping updates.
          </div>
        </div>

        <div className="mb-3">
          <label for="email">Phone <span className="text-muted">(Optional)</span></label>
          <input type="tel" className="form-control" id="email" placeholder="0123456789" />
          <div className="invalid-feedback">
            Please enter a valid phone number for shipping updates.
          </div>
        </div>

        <div className="mb-3">
          <label for="address">Address</label>
          <input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" />
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