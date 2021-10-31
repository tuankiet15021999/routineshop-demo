import React from 'react'
import {Link} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
const Login = () =>{
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col-12 col-lg-6">
                    <div className="title-login">ĐĂNG NHẬP</div>
                    <form className="login-form">
                        <div>
                        <input className="account" name="account" placeholder="ĐỊA CHỈ EMAIL HOẶC SĐT"></input>
                        </div>
                        <div>
                        <input className="password" name="password" placeholder="MẬT KHẨU"></input>
                        </div>
                        <Link to="#" className="btn-forgot-password"><span>Bạn đã quên mật khẩu?</span></Link>
                        <div>
                            <button className="btn-basic" className="btn-basic btn-login">ĐĂNG NHẬP</button>
                        </div>
                    </form>
                </div>
                <div className="col-12 col-lg-6 cross-line">
                    <div className="title-login">ĐĂNG NHẬP BẰNG PHƯƠNG THỨC KHÁC</div>
                    <div className="flex-form">
                        <Link to="#" className="btn-login-fb"><FaIcons.FaFacebook style={{marginRight:"10px"}}/> Đăng nhập bằng Facebook</Link>
                    </div>
                    <div className="flex-form">
                        <Link to="#" className="btn-login-gmail"><FaIcons.FaGooglePlusG size={23} style={{marginRight:"10px"}}/> Đăng nhập bằng Gmail</Link>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Login