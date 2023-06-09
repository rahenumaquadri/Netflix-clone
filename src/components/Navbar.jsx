import React from 'react'
import "./Navbar.css"
import img from "../img/Netflix_Logo.png"



const Navbar = () => {
    return (
        <div className='navbar'>
            <img
                className='nav_logo'
                src={img}
                alt='netflix logo' />



            <img
                className='nav_avtar'
                src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'
                alt='netflix avtar' />
        </div>
    )
}

export default Navbar;
