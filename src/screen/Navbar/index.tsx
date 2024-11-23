import Logo from '../../assets/logofit.png'
import { useState } from "react";
import { SelectedPage } from '../../shared/types';
import Link from './Link';
import media from  '../../hooks/media'
import { Bars3Icon } from '@heroicons/react/20/solid';

type Props = {
    isTopOfPage: boolean;
}

const Navbar = ({isTopOfPage}:Props) => {
    const flexBetween = 'flex items-center justify-between';
    const isDesktop = media("(min-width:713px)");// Ekran genişliği 713px'den büyük mü?
    const navBarBackGround = isTopOfPage ? "" : "bg-pink-300 drop-shadow shadow-lg"

     // `SelectedPage` değerini takip eden state
     const [selectedPage, setSelectedPage] = useState<SelectedPage>(
      SelectedPage.Home //varsayılan olarak
  );

  return (
    <div className={`${flexBetween} ${navBarBackGround} fixed w-full top-0 z-20 py-6`}>
       <div className={`${flexBetween} mx-auto w-5/6`}>
           <div className={`${flexBetween} w-full gap-16`}>
                 <img src={Logo} alt="" className='w-52' />
                 {isDesktop ? (  //Bu ekran boyutundaysak bunu yap
                   <div className={`${flexBetween} w-full`}>
                   
                         <div className={`${flexBetween} gap-8 mt-4 text-sm`}>
                            <Link
                                page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Benefits"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Our Classes"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Contact Us"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                          </div>
                          <div className={`${flexBetween} gap-8`}>

                          </div>


                    </div>    
                    ):(  //değilsek bunu yap
                     <button className='rounded-full bg-orange-300 p-2'>
                        <Bars3Icon className='w-6 h-6 text-pink-600'></Bars3Icon>
                     </button>
                    )
                    
                    }
                  </div>
            </div>

        </div>
  )
}

export default Navbar;