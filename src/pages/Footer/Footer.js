import React from 'react'
import {Link,Redirect} from 'react-router-dom'
const Footer = () =>{
    return (
        <footer>
            <div className="footer-top">
                <div className="opacity">
                <div className="parallax">
                    <div className="custom-bottom">
                            <h3>BỘ SƯU TẬP 2016</h3>
							<h2>MIỄN PHÍ VẬN CHUYỂN</h2>
							<div class="des-1">CHO ĐƠN HÀNG TRÊN 500K</div>
							<div class="des-2">CHƯƠNG TRÌNH NÀY ĐƯỢC ÁP DỤNG TRÊN MỌI MẶT HÀNG CỦA CHÚNG TÔI</div>
                    </div>
                </div>
                </div>
            </div>
            <div className="footer-content">
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-lg-3 footer-menu">
                            <h4 className="footer-menu-heading">CHÍNH SÁCH</h4>
                            <ul>
                                <li>TRANG CHỦ</li>
                                <li>GIỚI THIỆU</li>
                                <li>SẢN PHẨM</li>
                                <li>HƯỚNG DẪN</li>
                                <li>BLOG</li>
                                <li>LIÊN HỆ</li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-3 footer-menu">
                            <h4 className="footer-menu-heading">HƯỚNG DẪN</h4>
                            <ul>
                                <li>TRANG CHỦ</li>
                                <li>GIỚI THIỆU</li>
                                <li>SẢN PHẨM</li>
                                <li>HƯỚNG DẪN</li>
                                <li>BLOG</li>
                                <li>LIÊN HỆ</li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-3 footer-menu">
                            <h4 className="footer-menu-heading">LIÊN HỆ</h4>
                            <ul>
                                <li>
                                    <i class="fa fa-map-marker"></i>
                                    <span>K94/A3 Côn Lôn, Phụng Tường</span>
                                </li>
                                <li>
                                    <i class="fa fa-phone"></i>
                                    <span>1900190190</span>
                                </li>
                                <li>
                                    <i class="fa fa-envelope"></i>
                                    <span>support@gmail.com</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-3 footer-menu">
                            <h4 className="footer-menu-heading">THEO DÕI BẢN TIN</h4>
                            <ul>
                                <li><span>Nhận được những thông tin mới nhất từ website</span></li>
                                <li>
                                <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Recipient's email"/>
                                <div class="input-group-append">
                                    <button class="btn btn-danger" type="button">Đăng ký</button>
                                </div>
                                </div>
                                </li>
                            </ul>
                            <h4 className="footer-menu-heading">KẾT NỐI</h4>
                            <ul className="lienket">
                                <li><a class="fab fa-facebook" href="#"></a></li>
                                <li><a class="fab fa-twitter" href="#"></a></li>
                                <li><a class="fab fa-google-plus-g" href="#"></a></li>
                                <li><a class="fab fa-pinterest" href="#"></a></li>
                                <li><a class="fas fa-rss" href="#"></a></li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <span className="footer-banquyen">@ Bản quyền thuộc về Gold River Theme & Routine </span>
                        </div>
                        <div className="col-lg-6 footer-end">
                            <img src="//bizweb.dktcdn.net/100/113/556/themes/161811/assets/payments.png?1628829517964"></img>
                        </div>
                    </div>
                </div>      
            </div>
        </footer>
    )
}
export default Footer