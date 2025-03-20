import './navbar.css'
import logo from '../../assests/logo.png';

const Navbar = () =>{
    return(
        <>
        <div className="top-nav common-padding">
            Monday - Saturady, 8AM to 10PM
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
                    <li>Dropdrown</li>
                    <li>Contact</li>
                </ul>

                <button className="btn">Make an Appointment</button>
            </div>
        </div>
        </>
    )
};

export default Navbar;