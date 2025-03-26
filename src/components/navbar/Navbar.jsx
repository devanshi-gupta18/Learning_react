import './navbar.css'
import logo from '../../assets/logo.png';
import Button from '../../utility/button/Button';
import React from 'react';
import { GoClock } from "react-icons/go";
import { IoIosPhonePortrait } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () =>{
    return(
        <>
        <nav className='navbar'>
        <div className="top-nav common-padding">
            <div className="top-nav-left"><GoClock className='custom-icon'/>Monday - Saturday, 8AM to 10 PM</div>
            <div className="top-nav-right"><IoIosPhonePortrait className='custom-icon'/>Call us now +1 5589 55488 55</div>
        </div>
        <div className="bottom-nav common-padding">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="nav-links">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Department</li>
                    <li>Doctors</li>
                    <li>Dropdown<RiArrowDropDownLine className='custom-icon'/></li>
                    <li>Contact</li>
                </ul>

                <Button name='Make an Appointment'/>
            </div>
        </div>
        </nav>
        </>
    )
};

export default Navbar;