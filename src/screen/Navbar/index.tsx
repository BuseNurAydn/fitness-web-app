import Logo from '../../assets/logofit.png'
import { useState } from "react";
import { SelectedPage } from '../../shared/types';
import Link from './Link';
import media from '../../hooks/media'
import { Bars3Icon } from '@heroicons/react/20/solid';
import { XMarkIcon } from '@heroicons/react/24/solid'
import ActionButton from '../../shared/ActionButton';

type Props = {
    isTopOfPage: boolean;
}

const Navbar = ({ isTopOfPage }: Props) => {
    const flexBetween = 'flex items-center justify-between';
    const isDesktop = media("(min-width:1060px)");// Ekran genişliği 1060px'den büyük mü?
    const navBarBackGround = isTopOfPage ? "" : "bg-pink-300 drop-shadow shadow-lg"
    const [isMenuToggle, setIsMenuToggle] = useState<boolean>(false);

    // `SelectedPage` değerini takip eden state
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(
        SelectedPage.Home //varsayılan olarak
    );

    return (
        <nav>
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
                                <div className={`${flexBetween} gap-8 mt-4`}>
                                    <button>Sign In</button>
                                    <ActionButton setSelectedPage={setSelectedPage}>Sign Up</ActionButton>
                                </div>


                            </div>
                        ) : (  //değilsek bunu yap
                            <button className='rounded-full bg-amber-400 p-2'>
                                <Bars3Icon
                                    onClick={() => setIsMenuToggle(!isMenuToggle)}
                                    className='w-6 h-6 text-pink-700'></Bars3Icon>
                            </button>
                        )

                        }
                    </div>
                </div>

            </div>
            {!isDesktop && isMenuToggle &&
                (
                    <div className='fixed right-0 bottom-0 z-40 h-full w-72 bg-pink-300 drop-shadow shadow-lg' >

                        <div className='flex justify-end p-10'>
                            <button className='rounded-full '>
                                <XMarkIcon
                                    onClick={() => setIsMenuToggle(!isMenuToggle)}
                                    className='w-8 h-8'></XMarkIcon>

                            </button>
                        </div>

                        <div className='ml-11 text-xl flex flex-col gap-10'>

                            <Link
                                page='Home'
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            >
                            </Link>

                            <Link
                                page='Benefits'
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            >
                            </Link>


                            <Link
                                page='Our Classes'
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            >
                            </Link>


                            <Link
                                page='Contact Us'
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            >
                            </Link>

                        </div>

                    </div>

                )}
        </nav>

    )
}

export default Navbar;