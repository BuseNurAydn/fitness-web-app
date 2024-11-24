import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './screen/Navbar'
import Home from './screen/Home';

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
       <Navbar  
       isTopOfPage={isTopOfPage}

        ></Navbar>
        <Home/>
       
    </div>
  )
}

export default App
