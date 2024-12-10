import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './screen/Navbar';
import Benefits from './screen/Benefits';
import Home from './screen/Home';
import OurClasses from './screen/OurClasses';
import ContactUs from './screen/ContactUs';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";




function App() {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(()=>{
      const handleScroll= () =>{
        if(window.scrollY ===0){
          setIsTopOfPage(true);
        }
        if(window.scrollY !==0){
          setIsTopOfPage(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return ()=>window.removeEventListener("scroll", handleScroll);
  },[]);

  return (
    <div className='app bg-pink-100'>
       <Navbar isTopOfPage={isTopOfPage}/>
        <Home/>
        <Benefits/>
        <OurClasses/>
        <ContactUs/> 
    </div>
  )
}

export default App
