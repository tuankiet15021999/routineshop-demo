import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Loading from '../../helpers/components/Loading'
const Products = () =>{
    const [products,setProducts] = useState()
    async function requestProducts(){
        const response = await fetch('https://fakestoreapi.com/products',{
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const data = await response.json()
        setProducts(data)
    }
    useEffect(()=>{
        requestProducts()
    },[])
    return (
        <div>
            <div className="small-container">
                <div className="row">
                    <div className="col-lg-4">
                        <nav aria-label="breadcrumb">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/home">TRANG CHỦ</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">THỜI TRANG NAM</li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-6 sort-div">
                        <select className="form-select select-sort" aria-label="Default select example">
                            <option selected>Tất cả</option>
                            <option defaultValue="1">Thứ tự từ Link-Z</option>
                            <option defaultValue="2">Thứ tự từ Z-Link</option>
                            <option defaultValue="3">Giá tăng dần</option>
                            <option defaultValue="2">Giá giảm dần</option>
                            <option defaultValue="3">Sản phẩm mới nhất</option>
                        </select>
                    </div>
                    <div className="col-lg-2 sort-tags">
                        <Link href=""><span>+ Lọc sản phẩm</span></Link>
                    </div>
                </div>
            </div>
            <Loading display={products ? "display-none" : ""}></Loading>
            <div className="small-container">
                <div className="products-list-div">
                    <ul className="products-list">
                        {products?.map((item,index)=>{
                            return(
                            <li key={index}>
                                <div className="relative">
                                    <Link to={'product/'+item?.id}>
                                    <img src={item?.image}></img>
                                    </Link>
                                    <div className="detail-products-div">
                                        <span className="title-product">{item?.title}</span>
                                        <span className="price-discount-product"></span>
                                        <span className="price-product">{item?.price}</span>
                                    </div>
                                    <div className="discount-div">
                                    </div>
                                </div>
                            </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className="pagination-div">
                <div className="pagination">
                    <Link to="/home">&laquo;</Link>
                    <Link to="/home">1</Link>
                    <Link to="/home">2</Link>
                    <Link to="/home">3</Link>
                    <Link to="/home">4</Link>
                    <Link to="/home">5</Link>
                    <Link to="/home">6</Link>
                    <Link to="/home">&raquo;</Link>
                </div>
            </div>
        </div>
    )
}

export default Products