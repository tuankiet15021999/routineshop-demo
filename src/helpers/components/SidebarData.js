import React , {useState} from 'react'
import {Link} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'

export const SidebarData = [
{
    title: 'TRANG CHỦ',
    path:"/home",
    icon: <AiIcons.AiFillHome/>,
    cName: 'nav-text'
},
{
    title: 'NAM',
    path:"/products",
    icon: <BsIcons.BsGenderMale/>,
    cName: 'nav-male-mobile'
},
{
    title: 'NỮ',
    path:"/products",
    icon: <BsIcons.BsGenderFemale/>,
    cName: 'nav-female-mobile'
},
{
    title: 'SALE ONLINE',
    path:"/products",
    icon: <FaIcons.FaMoneyCheckAlt/>,
    cName: 'nav-sale-mobile'
}
]
