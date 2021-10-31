import React from 'react'
import {Link,Redirect} from 'react-router-dom'
const Home = () =>{
    return (
        <div>
            <div className="relative">
                <Link className="btn-xemthem" to="/products">XEM THÊM</Link>
                <img src="https://routine.vn/media/wysiwyg/slider/NAM_-_DESKTOP.jpg" className="caro d-block w-100" alt="..."/>
            </div>
            <div className="container">
                <div className="row" id="qc"> 
                    <div className="col-lg-4">
                        <Link to="/"><img src="https://sss-dashboard.leanservices.work/upload/8-2021/1628222381862.jpeg"></img></Link>
                    </div>
                    <div className="col-lg-4">
                        <Link to="/"><img src="https://sss-dashboard.leanservices.work/upload/8-2021/1627977914514.jpeg"></img></Link>
                    </div>
                    <div className="col-lg-4">
                        <Link to="/"><img src="https://sss-dashboard.leanservices.work/upload/8-2021/1627977967767.jpeg"></img></Link>
                    </div>
                </div>
            </div>
            <div>
                <img src="https://routine.vn/media/wysiwyg/slider/1900.jpg" className="caro d-block w-100" alt="..."/>
            </div>           
            <div className="container">
            <div className="title-tabs">
                <h2 className="h2-title"><i className="fa fa-star star" aria-hidden="true"></i></h2>
                <ul class="nav nav-tabs" role="tablist">
                    <li className="tag-tabs" role="presentation"><Link to="" aria-controls="messages" role="tab" data-toggle="tab">THỜI TRANG</Link></li>
                    <li className="tag-tabs" role="presentation"><Link to="" aria-controls="messages2" role="tab" data-toggle="tab">PHỤ KIỆN</Link></li>
				</ul>
            </div>
        </div>
            <div className="container">
                <div className="tab-content">
                    <div className="thumbnail">
                        <div className="row"> 
                            <div className="col-lg-3 tab-items">
                                <div className="box">
                                    <div className="box-inner">
                                        <div className="face">
                                            <img src="https://routine.vn/media/catalog/product/cache/e78fcb931fd36e972f6051c94f188557/1/0/10f21jac001-brown-1_1.jpg"></img>
                                            
                                        </div>
                                        <div className="back">
                                            <img src="https://routine.vn/media/catalog/product/cache/e78fcb931fd36e972f6051c94f188557/1/0/10f21jac001-brown-3_1.jpg"></img>
                                        </div>
                                    </div>
                                    <div className="opa-back">
                                    </div>
                                    <div className="detail">
                                        <div className="equal-detail">
                                            <span className="name-pro-home">ÁO KHOÁC BOMBER QUILTING TAY CONG.REGULAR - 10F21JAC001</span>
                                            <span className="price-name-home">1.203.489đ</span>
                                            <span className="pay-home-div"><Link to="" className="btn-pay-home">Mua hàng</Link></span>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                            <div className="col-lg-3 tab-items">
                                <div className="box">
                                    <div className="box-inner">
                                        <div className="face">
                                            <img src="https://routine.vn/media/catalog/product/cache/e78fcb931fd36e972f6051c94f188557/1/0/10f20dpaw002.1_2.jpg"></img>
                                            
                                        </div>
                                        <div className="back">
                                            <img src="https://routine.vn/media/catalog/product/cache/e78fcb931fd36e972f6051c94f188557/1/0/10f20dpaw002.4_1.jpg"></img>
                                        </div>
                                    </div>
                                    <div className="opa-back">
                                    </div>
                                    <div className="detail">
                                        <div className="equal-detail">
                                            <span className="name-pro-home">ÁO KHOÁC BOMBER QUILTING TAY CONG.REGULAR - 10F21JAC001</span>
                                            <span className="price-name-home">1.203.489đ</span>
                                            <span className="pay-home-div"><Link to="" className="btn-pay-home">Mua hàng</Link></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 tab-items">
                                <div className="box">
                                    <div className="box-inner">
                                        <div className="face">
                                            <img src="https://routine.vn/media/catalog/product/cache/e78fcb931fd36e972f6051c94f188557/d/s/dsc01165_8.jpg"></img>
                                            
                                        </div>
                                        <div className="back">
                                            <img src="https://routine.vn/media/catalog/product/cache/e78fcb931fd36e972f6051c94f188557/d/s/dsc01174_6.jpg"></img>
                                        </div>
                                    </div>
                                    <div className="opa-back">
                                    </div>
                                    <div className="detail">
                                        <div className="equal-detail">
                                            <span className="name-pro-home">SET LEISUREWEAR - KLG - FEATHER GRAY</span>
                                            <span className="price-name-home">700.000đ</span>
                                            <span className="pay-home-div"><Link to="" className="btn-pay-home">Mua hàng</Link></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 tab-items">
                                <div className="box">
                                    <div className="box-inner">
                                        <div className="face">
                                            <img src="https://routine.vn/media/catalog/product/cache/e78fcb931fd36e972f6051c94f188557/d/s/dsc01394_8.jpg"></img>
                                            
                                        </div>
                                        <div className="back">
                                            <img src="https://routine.vn/media/catalog/product/cache/e78fcb931fd36e972f6051c94f188557/d/s/dsc01384_2.jpg"></img>
                                        </div>
                                    </div>
                                    <div className="opa-back">
                                    </div>
                                    <div className="detail">
                                        <div className="equal-detail">
                                            <span className="name-pro-home">SET LEISUREWEAR - KLG - BLACK</span>
                                            <span className="price-name-home">700.000đ</span>
                                            <span className="pay-home-div"><Link to="" className="btn-pay-home">Mua hàng</Link></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="hot-items">
                    <div class="owl-carousel owl-theme">
                        <div class="item"> <img src="//bizweb.dktcdn.net/100/113/556/themes/161811/assets/brand_1.png?1628829517964" alt="image" /> </div>
                        <div class="item"> <img src="//bizweb.dktcdn.net/100/113/556/themes/161811/assets/brand_4.png?1628829517964" alt="image" /> </div>
                        <div class="item"> <img src="//bizweb.dktcdn.net/100/113/556/themes/161811/assets/brand_3.png?1628829517964" alt="image" /> </div>
                        <div class="item"> <img src="//bizweb.dktcdn.net/100/113/556/themes/161811/assets/brand_1.png?1628829517964" alt="image" /> </div>
                        <div class="item"> <img src="//bizweb.dktcdn.net/100/113/556/themes/161811/assets/brand_4.png?1628829517964" alt="image" /> </div>
                        <div class="item"> <img src="//bizweb.dktcdn.net/100/113/556/themes/161811/assets/brand_3.png?1628829517964" alt="image" /> </div>
                        <div class="item"> <img src="//bizweb.dktcdn.net/100/113/556/themes/161811/assets/brand_1.png?1628829517964" alt="image" /> </div>
                        <div class="item"> <img src="//bizweb.dktcdn.net/100/113/556/themes/161811/assets/brand_4.png?1628829517964" alt="image" /> </div>
                        <div class="item"> <img src="//bizweb.dktcdn.net/100/113/556/themes/161811/assets/brand_3.png?1628829517964" alt="image" /> </div>
                    </div>
                </div>
            </div>      
        </div>
    )
}

export default Home