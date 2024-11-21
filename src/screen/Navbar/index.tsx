import React from 'react'
import Logo from '../../assets/logofit.png'


const Navbar = () => {
    const flexBetween = 'flex items-center justify-between';

  return (
    <div className={`${flexBetween} fixed w-full top-0 z-20 py-6`}>
       <div className={`${flexBetween} mx-auto w-5/6`}>
           <div className={`${flexBetween} w-full gap-16`}>
                 <img src={Logo} alt="" />

            </div>

        </div>

    </div>
  )
}

export default Navbar;