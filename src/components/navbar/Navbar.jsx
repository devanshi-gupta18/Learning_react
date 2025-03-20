import './navbar.css'
import logo from '../../assests/logo.png';

const Navbar = () =>{
    return(
        <>
        <div className="top-nav">
            topnav
        </div>
        <div className="bottom-nav">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="nav-links">

            </div>
        </div>
        </>
    )
};

export default Navbar;