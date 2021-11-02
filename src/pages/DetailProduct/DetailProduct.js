import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router'
const DetailProduct = () =>{
    const [product,setProduct] = useState()
    const {id} = useParams()
    console.log("id",id);
    async function requestProductById(id){
        const response = await fetch('https://fakestoreapi.com/products/'+id,{
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const data = await response.json()
        console.log(data);
        setProduct(data)
    } 
    useEffect(()=>{
        requestProductById(id)
    },[])
    return (
        <>  
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-8">
                        <div className="detail-img-div">
                            <img src={product?.image}></img>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 detail-product-div">
                        <div className="title-detai-product-div">
                            {product?.title}
                        </div>
                        <div className="price-detai-product-div">{product?.price}</div>
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
                            <div>
                                <span>{product?.description}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailProduct