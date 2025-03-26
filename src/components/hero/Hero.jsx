import './hero.css'
import hero1 from '../../assets/hero-carousel-1.jpg'
import hero2 from '../../assets/hero-carousel-2.jpg'
import hero3 from '../../assets/hero-carousel-3.jpg'
import Button from '../../utility/button/Button'

const Hero = () =>{
    return (
        <>
        <section className="hero-section">
            <div className="hero-item">
                <img src={hero1} alt="" />
                <div className="hero-item-text">
                    <h2>Welcome to Medicio</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <Button name="Read More"/>
                </div>
            </div>
        </section>


        {/* features section */}

        <section className="features"></section>


        {/* call to action section */}

        <section className="action common-padding">
            <div className="action-container">
                <h3>In an emergency? Need help now?</h3>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button className='action-btn'>Make an Appointment</button>
            </div>
        </section>
        
        </>
    )
};

export default Hero;