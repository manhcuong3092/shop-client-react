import './css/style.css';
import './css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavbarMenu from './components/Navbar';
import Footer from './components/Footer';

import Index from './pages/Index';
import CartPage from './pages/Cart';
import ContactPage from './pages/Contact';
import CheckoutPage from './pages/Checkout';
import ProductDetailPage from './pages/Product';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarMenu/>
        <Route path="/" exact>
          <Index />
        </Route>
        <Route path="/product/">
          <ProductDetailPage />
        </Route>
        <Route path="/cart/">
          <CartPage />
        </Route>
        <Route path="/contact/">
          <ContactPage />
        </Route>
        <Route path="/checkout/">
          <CheckoutPage />
        </Route>
        <Footer/>
        <div>
          <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
        </div>
      </div>
    </Router>
  );
}

export default App;
