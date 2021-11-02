import React, { useEffect, useState } from 'react'
import {Link,Redirect} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import { useCookies } from 'react-cookie';
const Login = () =>{
    const [cookies, setCookie] = useCookies(['token']);
    const [username,setUsername] = useState()
    const [password,setPassword] = useState()
    const [message,setMessage] = useState()
    function handleSubmit(event){
        event.preventDefault()
        requestLogin(username,password)
    }
    const handleUsername = (e) =>{
        const value = e.target.value
        setUsername(value)
    }
    const handlePassword = (e) =>{
        const value = e.target.value
        setPassword(value)
    }
    async function requestLogin(username,password){
        const response = await fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify({
                username: username,
                password: password
            })
        })
        const token = await response.json()
        if(token.msg){
            setMessage(token.msg)
        }
        else{
            setCookie('token',token,{path:'/'})
            setMessage(undefined)
        }
    }
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col-12 col-lg-6">
                    <div className="title-login">ĐĂNG NHẬP</div>
                    <form className="login-form">
                        <div className={message? "message-error":"message-error display-none"}>{message}</div>
                        <div>
                        <input className="account" name="account" onChange={handleUsername} placeholder="ĐỊA CHỈ EMAIL HOẶC SĐT"></input>
                        </div>
                        <div>
                        <input type="password" className="password" name="password" onChange={handlePassword}  placeholder="MẬT KHẨU"></input>
                        </div>
                        <Link to="#" className="btn-forgot-password"><span>Bạn đã quên mật khẩu?</span></Link>
                        <div>
                            <button className="btn-basic" onClick={handleSubmit} className="btn-basic btn-login">ĐĂNG NHẬP</button>
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