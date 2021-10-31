import React , {useState} from 'react'
import {Link} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import {SidebarData} from './SidebarData'
const Navbar = () =>{
    const [sidebarOpen,setSidebarOpen] = useState(false)
    const onSetSideBarOpen = () =>{
        setSidebarOpen(!sidebarOpen)
    }
    const onPauseSideBar = () => {
        setSidebarOpen(true)
    }
    return (
        <>
            <div className="nav-bar">
                <div className="row header-mobile">
                    <div className="col-5 col-md-5 menu-bars-div">
                        <Link to="#" className="menu-bars">
                            <FaIcons.FaBars onClick={onSetSideBarOpen}/>
                        </Link>
                    </div>
                    <div className="col-3 col-md-3 logo-mobile-div">
                        <Link to="/home">
                            <img className="img-logo" src="/asset/img/logo.png"></img>
                        </Link>
                    </div>
                    <div className="col-4 col-md-4 login-mobile-div">
                        <div className="row">
                            <div className="col-6 col-md-6">
                                <Link to="/login" className="login-mobile-btn"><FaIcons.FaUser size={25}/></Link>
                            </div>
                            <div className="col-6 col-md-6 relative">
                                <AiIcons.AiOutlineShoppingCart size={25}/>
                                <span className="cart-total cart-mobile-total">0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className={sidebarOpen ? "nav-menu active" :"nav-menu"}>
                <ul className="nav-menu-items">
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars-close" onClick={onSetSideBarOpen}>
                            <AiIcons.AiOutlineClose/>
                        </Link>
                    </li>
                    <li>
                        <form className="search-mobile-form">
                            <input className="form-control input-search" type="text"  placeholder="TÌM KIẾM"/>
                            <button className="btn btn-danger" type="button" style={{display:"none"}}></button>
                        </form>
                    </li>
                    {SidebarData.map((item,index)=>{
                        return (
                            <li key={index} className={item.cName} onClick={onSetSideBarOpen}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                                <div className="mobile-dropdown1">
                                    <ul className="">
                                        <li></li>
                                    </ul>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}
export default Navbar