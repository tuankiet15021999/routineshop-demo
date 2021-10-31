import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home'
import Header from './pages/Header/Header'
import Footer from './pages/Footer/Footer'
import Products from './pages/Products/Products'
import Test from './helpers/components/Navbar'
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
            <Route path="/test">
              <Test/>
            </Route>
          </Switch>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
