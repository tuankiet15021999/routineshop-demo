import React from 'react'
const Products = () =>{
    return (
        <div>
            <div className="small-container">
                <div className="row">
                    <div className="col-lg-4">
                        <nav aria-label="breadcrumb">
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#">TRANG CHỦ</a></li>
                                <li class="breadcrumb-item active" aria-current="page">THỜI TRANG NAM</li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-6 sort-div">
                        <select class="form-select select-sort" aria-label="Default select example">
                            <option selected>Tất cả</option>
                            <option value="1">Thứ tự từ A-Z</option>
                            <option value="2">Thứ tự từ Z-A</option>
                            <option value="3">Giá tăng dần</option>
                            <option value="2">Giá giảm dần</option>
                            <option value="3">Sản phẩm mới nhất</option>
                        </select>
                    </div>
                    <div className="col-lg-2 sort-tags">
                        <a href=""><span>+ Lọc sản phẩm</span></a>
                    </div>
                </div>
            </div>
            <div className="small-container">
                <div className="products-list-div">
                    <ul className="products-list">
                        <li>
                            <div className="relative">
                                <a href="#">
                                <img src="https://routine.vn/media/catalog/product/cache/a2fcefb561dcc03dd69ce08e688653ae/1/0/10s21pol016.4_1.jpg"></img>
                                </a>
                                <div className="detail-products-div">
                                    <span className="title-product">ÁO THUN TAY NGẮN. COTTON. FITTED FORM - 10F20TSH001</span>
                                    <span className="price-discount-product">420.000 ₫</span>
                                    <span className="price-product">269.000 ₫</span>
                                </div>
                                <div className="discount-div">
                                    -36%
                                </div>
                            </div>
                            
                        </li>
                        <li>
                            <div className="relative">
                                <a href="#">
                                <img src="https://routine.vn/media/catalog/product/cache/a2fcefb561dcc03dd69ce08e688653ae/1/0/10f21jac001-brown-1_1.jpg"></img>
                                </a>
                                <div className="detail-products-div">
                                    <span className="title-product">ÁO KHOÁC BOMBER QUILTING TAY CONG.REGULAR - 10F21JAC001</span>
                                    <span className="price-discount-product"></span>
                                    <span className="price-product">1.150.000 ₫</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="relative">
                                <a href="#">
                                <img src="https://routine.vn/media/catalog/product/cache/a2fcefb561dcc03dd69ce08e688653ae/d/s/dsc01165_8.jpg"></img>
                                </a>
                                <div className="detail-products-div">
                                    <span className="title-product">SET LEISUREWEAR - KLG - FEATHER GRAY</span>
                                    <span className="price-discount-product"></span>
                                    <span className="price-product">700.000 ₫</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="relative">
                                <a href="#">
                                <img src="https://routine.vn/media/catalog/product/cache/a2fcefb561dcc03dd69ce08e688653ae/d/s/dsc01384_2.jpg"></img>
                                </a>
                                <div className="detail-products-div">
                                    <span className="title-product">SET LEISUREWEAR - KLG - BLACK</span>
                                    <span className="price-discount-product"></span>
                                    <span className="price-product">700.000 ₫</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="relative">
                                <a href="#">
                                <img src="https://routine.vn/media/catalog/product/cache/a2fcefb561dcc03dd69ce08e688653ae/1/0/10f20tsh001.1_1.jpg"></img>
                                </a>
                                <div className="detail-products-div">
                                    <span className="title-product">ÁO THUN TAY NGẮN. COTTON. FITTED FORM - 10F20TSH001</span>
                                    <span className="price-discount-product">190.000 ₫</span>
                                    <span className="price-product">95.000 ₫</span>
                                </div>
                                <div className="discount-div">
                                    -50%
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="relative">
                                <a href="#">
                                <img src="https://routine.vn/media/catalog/product/cache/a2fcefb561dcc03dd69ce08e688653ae/m/a/mausac_black_10s21dpa038_1__1.jpg"></img>
                                </a>
                                <div className="detail-products-div">
                                    <span className="title-product">QUẦN JEAN RÁCH GỐI. SLIM CROP FORM - 10S21DPA038</span>
                                    <span className="price-product">360.000 ₫</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="pagination-div">
                <div class="pagination">
                    <a href="#">&laquo;</a>
                    <a href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">5</a>
                    <a href="#">6</a>
                    <a href="#">&raquo;</a>
                </div>
            </div>
        </div>
    )
}

export default Products