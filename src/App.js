import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect,} from "react-router-dom";
import Home from "./pages/home"
import { AboutUs } from './pages/aboutus';
import { Product } from './pages/product';
import { ProductDetails } from './pages/productdetails';
import { Receipt } from './pages/receipt';
import { Shipping } from './pages/shipping';
import { ContactUs } from './pages/contactus';
import { Profile } from './pages/profile';
import { UpdateProfile } from './pages/updateprofile';
import { Cart } from './pages/cart';
import { Deletecart } from './pages/deletecart';
import { Checkout } from './pages/checkout';
import { DeleteCheckout } from './pages/deletecheckout';
import { PaymentMethod } from './pages/paymentmethod';
import { EWallet } from './pages/e-wallet';
import { LoadingPayment } from './pages/loadingpayment';
import { PurchaseSuccess } from './pages/purchasesuccess';
import { ReceiptNo } from './pages/receiptno';





function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/aboutus" component={AboutUs}/>
        <Route exact path="/product" component={Product}/>
        <Route exact path="/productdetails" component={ProductDetails}/>
        <Route exact path="/receipt" component={Receipt}/>
        <Route exact path="/shipping" component={Shipping}/>
        <Route exact path="/contactus" component={ContactUs}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/updateprofile" component={UpdateProfile}/>
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/deletecart" component={Deletecart}/>
        <Route exact path="/checkout" component={Checkout}/>
        <Route exact path="/deletecheckout" component={DeleteCheckout}/>
        <Route exact path="/paymentmethod" component={PaymentMethod}/>
        <Route exact path="/e-wallet" component={EWallet}/>
        <Route exact path="/loadingpayment" component={LoadingPayment}/>
        <Route exact path="/purchasesuccess" component={PurchaseSuccess}/>
        <Route exact path="/receiptno" component={ReceiptNo}/>
      </Switch>
    </Router>
  );
}

export default App;



