import Filter from './Filter';
import { CartContext } from "../contexts/Cart";

export default function FilterGroup(props) {
  const sizes = ['s', 'm', 'l', 'xl'];
  const colors = ['black', 'white', 'red'];
  const categories = ['category 1', 'category 2', 'category 3'];
  const prices = ['Lower than 50$', '50$ - 200$', '200$ - 500$', 'Greater than 50'];
  
  return (
    <div className="col-lg-3">
      <h1 className="my-4">Shop Name</h1>
      <h5 className="mb-4">Hello <span>User</span></h5>
        <h5 className="mb-4">
          <a href="#">Cart</a>
          <CartContext.Consumer>
            { ({totalItem}) => <span>({ totalItem })</span> }
          </CartContext.Consumer>
        </h5>
      <div className="mb-3">
        Search product
        <input type="text" />
        <button className="btn-primary border-primary">Search</button>
      </div>
      <div className="m-2">Category</div>
      <Filter filter={'category'} items={ categories } />
      <div className="m-2">Price</div>
      <Filter filter={'price'} items={ prices } />
      <div className="m-2">Size</div>
      <Filter filter={'size'} horizontal={true} items={ sizes } />
      <div className="m-2">Color</div>
      <Filter filter={'color'} items={ colors } />
    </div>
  )
}