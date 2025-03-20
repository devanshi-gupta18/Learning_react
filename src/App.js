import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Service from './components/service/Service'
const App=() =>{
  return (
    <>
        <Navbar/>
        <Hero/>
        <Service/>
        <Footer/>
    </>
  )
};

export default App;