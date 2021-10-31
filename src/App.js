import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home'
import Header from './pages/Header/Header'
import Footer from './pages/Footer/Footer'
import Products from './pages/Products/Products'
import DetailProduct from './pages/DetailProduct/DetailProduct'
import Login from './pages/Login/Login'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import {Link} from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
          <Header/>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/home"/>
            </Route>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/products">
              <Products/>
            </Route>
            <Route path="/product/:id">
              <DetailProduct/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
          </Switch>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
