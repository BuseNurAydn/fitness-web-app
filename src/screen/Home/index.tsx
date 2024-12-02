import { motion } from 'framer-motion' //animasyon için //framer animation
import { SelectedPage } from '../../shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import HomeText from '../../assets/HomeText.png'
import HomeFoto from '../../assets/HomeFoto.png'
import ActionButton from '../../shared/ActionButton';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;

}
const Home = ({ setSelectedPage }: Props) => {
  return (
    <section id="home" className=' bg-rose-100 py-10 md:h-full md:pb-0'>

      <motion.div
        className='mx-auto w-5/6 items-center justify-center md:flex md:h-5/6'>

        <div className='z-10 md:basis-4/5 mt-32'>
          <motion.div
            animate={{ opacity: 1 }}
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
              <div className='before:absolute before:-top-10 before:-z-50 md:before:content-bgtext'>
                <img className='mb-4 mt-4' src={HomeText}></img>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At, necessitatibus tenetur architecto amet doloribus debitis enim vel expedita eius aliquam quasi deleniti, velit error odit cupiditate provident quidem ratione quos. Lorem ipsum dolor, sit amet dolor.
              </p>

              <motion.div className='mt-8 flex items-center gap-x-8'>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Join Now
                  </ActionButton>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <AnchorLink
                    className="cursor-pointer bg-pink-500 py-2 px-6 rounded-lg hover:bg-pink-600"
                  >
                    Learn More
                  </AnchorLink>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className='flex basis-3/5 justify-center md:ml-40 md:mt-32 md:justify-items-end'>
          <motion.img
            className="cursor-pointer"
            src={HomeFoto}
            alt="Home"
            initial={{ scale: 1 }}  //başlangıç
            whileHover={{ scale: 1.1 }}   //resmin üzerine fare ile geldiğimizde resim büyür
            transition={{ duration: 0.4 }} //0.4s de tamamlanır animasyon
          />
        </div>

      </motion.div>
    </section>
  )
}

export default Home;