import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Service from './components/service/Service'

const App=() =>{
  return (
    <>
        <Navbar/>
        <Hero/>
        <About/>
        <Service/>
        <Footer/>
    </>
  )
};

export default App;