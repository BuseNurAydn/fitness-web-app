import {motion} from 'framer-motion'
import {SelectedPage} from '../../shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import HomeText from '../../assets/HomeText.png'
import HomePageGraphic from '../../assets/HomePageGraphic.png'
import ActionButton from '../../shared/ActionButton';

type Props = {
  setSelectedPage:(value:SelectedPage) => void;

}

const Home = ({setSelectedPage}: Props) => {
  return (
    <section id="home" className='gap-2 bg-gray-20 py-10 md:h-full md:pb-0'>

    <motion.div
    className='mx-auto w-5/6 items-center justify-center md:flex md:h-5/6'>

        <div className='z-10 md:basis-4/5'>
            <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.5 }}
               transition={{ duration: 0.5 }}
               variants={{
                 hidden: { opacity: 0, x: -50 },
                 visible: { opacity: 1, x: 0 },
               }}
               >
           
            <div className='relative'>
                <div className='before:absolute before:-top-10 before:ml-4 before:-z-50  md:before:content-sliderbgtext'>
                    <img className='mb-8 mt-20' src={HomeText}></img>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At, necessitatibus tenetur architecto amet doloribus debitis enim vel expedita eius aliquam quasi deleniti, velit error odit cupiditate provident quidem ratione quos.
                </p>

                <motion.div className='mt-8 flex items-center gap-8 '
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                 >
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Join Now
                    </ActionButton>

                    <AnchorLink 
                    className=" cursor-pointer bg-pink-500 py-1 px-6 rounded-lg hover:bg-pink-600">
                        Learn More </AnchorLink>
                </motion.div>
            </div>
            </motion.div>
        </div>

        <div className='flex basis-2/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end'>
            <img src={HomePageGraphic} />
        </div>

    </motion.div>
    </section>
  )
}

export default Home;