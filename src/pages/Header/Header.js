import React from 'react'
import {Link,Redirect} from 'react-router-dom'
import Navbar from '../../helpers/components/Navbar'
const Header = () =>{
    return (
        <div className="header ">
            <div className="site-middle-header sticky">
                    <div className="row">
                        <div className="col-lg-5">
                            <ul className="header-list">
                                <li>
                                    <div className="dropdown-male">
                                        <Link to="/products">NAM</Link>
                                        <div className="dropdownlv1">
                                            <ul className="header-list-male">
                                                <li>
                                                    <div className="dropdown-male-clothe">
                                                        <Link to="#">ÁO NAM</Link>
                                                        <div className="dropdownlv2">
                                                            <ul className="header-list-male-clothes">
                                                                <li><Link to="#">+ Xem tất cả</Link></li>
                                                                <li><Link to="#">+ Áo thun nam</Link></li>
                                                                <li><Link to="#">+ Áo polo nam</Link></li>
                                                                <li><Link to="#">+ Áo vest nam</Link></li>
                                                                <li><Link to="#">+ Áo khoác nam</Link></li>
                                                                <li><Link to="#">+ Áo sơ mi nam</Link></li>
                                                                <li><Link to="#">+ Áo len nam</Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="dropdown-male-clothe">
                                                        <Link to="#">QUẦN NAM</Link>
                                                        <div className="dropdownlv2">
                                                            <ul className="header-list-male-clothes">
                                                                <li><Link to="#">+ Xem tất cả</Link></li>
                                                                <li><Link to="#">+ Quần jean nam</Link></li>
                                                                <li><Link to="#">+ Quần vải nam</Link></li>
                                                                <li><Link to="#">+ Quần kaki nam</Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>    
                                                </li>
                                                <li><Link to="#">GIÀY DÉP NAM</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li><Link to="/products">NỮ</Link></li>
                                <li><Link to="/products">SALE ONLINE</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-2">
                            <div className="logo">
                                <Link to="/home">
                                    <img className="img-logo" src="/asset/img/logo.png"></img>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="row">
                                <div className="col-lg-4">
                                    <form className="search-form">
                                        <input className="form-control input-search" type="text"  placeholder="TÌM KIẾM"/>
                                        <button className="btn btn-danger" type="button" style={{display:"none"}}></button>
                                    </form>
                                </div>
                                <div className="col-lg-4">
                                    <div className="login-div">
                                        <Link to="/login">ĐĂNG NHẬP</Link>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="cart-header">
                                        <img src="//bizweb.dktcdn.net/100/113/556/themes/161811/assets/icon-cart.png?1628829517964"></img>
                                        <span className="cart-total">0</span> Sản phẩm
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="mobile-middle-header">
                <Navbar></Navbar>
            </div>
        </div>
    )
}

export default Header