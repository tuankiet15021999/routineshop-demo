import React,{useState,useEffect}  from 'react'
import {Link,Redirect} from 'react-router-dom'
import Loading from '../../helpers/components/Loading'
const Home = () =>{
    const [products,setProducts] = useState()
    async function requestProductsLimit(limit){
        const response = await fetch('https://fakestoreapi.com/products?limit='+limit,{
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json()
        setProducts(data)
    }
    useEffect(()=>{
        requestProductsLimit(4)
    },[])
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
                <ul className="nav nav-tabs" role="tablist">
                    <li className="tag-tabs" role="presentation"><Link to="" aria-controls="messages" role="tab" data-toggle="tab">THỜI TRANG</Link></li>
                    <li className="tag-tabs" role="presentation"><Link to="" aria-controls="messages2" role="tab" data-toggle="tab">PHỤ KIỆN</Link></li>
				</ul>
            </div>
        </div>
            <Loading display={products ? "display-none" : ""}></Loading>
            <div className="container">
                <div className="tab-content">
                    <div className="thumbnail">
                        <div className="row"> 
                            {products?.map((item,index)=>{
                                return(
                                <div key={index} className="col-lg-3 tab-items">
                                <div className="box">
                                    <div className="box-inner">
                                        <div className="face">
                                            <img src={item?.image}></img>
                                            
                                        </div>
                                        <div className="back">
                                            <img src={item?.image}></img>
                                        </div>
                                    </div>
                                    <div className="opa-back">
                                    </div>
                                    <div className="detail">
                                        <div className="equal-detail">
                                            <span className="name-pro-home">{item?.title}</span>
                                            <span className="price-name-home">{item?.price}</span>
                                            <span className="pay-home-div"><Link to={'/product/'+item?.id} className="btn-pay-home">Mua hàng</Link></span>
                                        </div>
                                    </div>
                                </div>
                                </div>  
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="hot-items">
                    <div className="owl-carousel owl-theme">
                        <div className="item"> <img src="//bizweb.dktcdn.net/100/113/556/themes/161811/assets/brand_1.png?1628829517964" alt="image" /> </div>
                        <div className="item"> <img src="//bizweb.dktcdn.net/100/113/556/themes/161811/assets/brand_4.png?1628829517964" alt="image" /> </div>
                        <div className="item"> <img src="//bizweb.dktcdn.net/100/113/556/themes/161811/assets/brand_3.png?1628829517964" alt="image" /> </div>
                        <div className="item"> <img src="//bizweb.dktcdn.net/100/113/556/themes/161811/assets/brand_1.png?1628829517964" alt="image" /> </div>
                        <div className="item"> <img src="//bizweb.dktcdn.net/100/113/556/themes/161811/assets/brand_4.png?1628829517964" alt="image" /> </div>
                        <div className="item"> <img src="//bizweb.dktcdn.net/100/113/556/themes/161811/assets/brand_3.png?1628829517964" alt="image" /> </div>
                        <div className="item"> <img src="//bizweb.dktcdn.net/100/113/556/themes/161811/assets/brand_1.png?1628829517964" alt="image" /> </div>
                        <div className="item"> <img src="//bizweb.dktcdn.net/100/113/556/themes/161811/assets/brand_4.png?1628829517964" alt="image" /> </div>
                        <div className="item"> <img src="//bizweb.dktcdn.net/100/113/556/themes/161811/assets/brand_3.png?1628829517964" alt="image" /> </div>
                    </div>
                </div>
            </div>      
        </div>
    )
}

export default Home