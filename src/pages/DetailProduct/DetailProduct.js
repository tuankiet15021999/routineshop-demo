import React,{useState} from 'react'
import {Link} from 'react-router-dom'
const DetailProduct = () =>{
    return (
        <>  
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-8">
                        <div className="detail-img-div">
                            <img src="https://routine.vn/media/catalog/product/cache/e78fcb931fd36e972f6051c94f188557/1/0/10f21jac001-brown-1_1.jpg"></img>
                            <img src="https://routine.vn/media/catalog/product/cache/e78fcb931fd36e972f6051c94f188557/1/0/10f21jac001-brown-4_1.jpg"></img>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 detail-product-div">
                        <div className="title-detai-product-div">
                            ÁO KHOÁC. CARO. REGULAR FORM - 10F20JAC001
                        </div>
                        <div className="price-detai-product-div">1.150.000 ₫</div>
                        <div>CHỌN MÀU<span></span></div>
                        <div className="select-color-product">
                            <button><img src="https://routine.vn/media/catalog/product/cache/d75ea623e8701d00cb50e7baa81187bb/d/s/dsc_0886_2_1.jpg"></img></button>
                            <button><img src="https://routine.vn/media/catalog/product/cache/d75ea623e8701d00cb50e7baa81187bb/d/s/dsc_0936_2_1.jpg"></img></button>
                        </div>
                        <div>KÍCH CỠ</div>
                        <div className="select-size-product">
                            <button><span>S</span></button>
                            <button><span>M</span></button>
                            <button><span>L</span></button>
                            <button><span>XL</span></button>
                        </div>
                        <div>
                            <button className="btn-basic btn-add-cart">THÊM VÀO GIỎ HÀNG</button>
                        </div>
                        <div>
                            <span>THÔNG TIN SẢN PHẨM</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailProduct