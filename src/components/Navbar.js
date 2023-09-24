import React from 'react'
import logo from './img/airbnb.svg'

export default function Navbar() {
    return (
        <nav>
            <img src={logo} className='logo' alt='AirBnb logo'/>
        </nav>
    )
}