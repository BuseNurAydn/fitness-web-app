import { HomeIcon, UserIcon } from "@heroicons/react/20/solid";
import Htext from "../../shared/Htext";
import { BenefitTypes } from "../../shared/types";
import { PhoneIcon } from "@heroicons/react/24/solid";
import BenefitCards from "./benefitCards";
import { motion } from 'framer-motion' //animasyon için //framer animation
import BenefitFoto from '../../assets/BenefitFoto.png'
import PinkButton from "../../shared/PinkButton";


type Props = {}

const benefits: Array<BenefitTypes> = [
  {
    icon: <HomeIcon className="text-black w-6 h-6" />,
    title: 'What is lorem ipsum?',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, maiores!'
  },
  {
    icon: <UserIcon className="text-black w-6 h-6" />,
    title: 'Lorem ipsum dolor sit?',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, a.'
  },
  {
    icon: <PhoneIcon className="text-black w-6 h-6" />,
    title: 'Lorem ipsum amet consectetur?',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, quam!'
  }

]
const Benefits = (props: Props) => {
  return (
    <section id="benefits" className="mx-auto py-20 w-5/6 min-h-full overflow-x-hidden">
      <motion.div
        animate={{ opacity: 1 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="md:w-4/5">
          <Htext>More than gym</Htext>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, nostrum quod tempora non maiores fuga.</p>
        </div>
      </motion.div>

      <div className="md:flex gap-x-2">
        {benefits.map((benefit: BenefitTypes) => (
          <BenefitCards
            key={benefit.title}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
          >
          </BenefitCards>
        ))}
      </div>
      <div className="md:flex justify-between items-center mt-16 gap-10" >
        {/* Resim */}
        <motion.img
          src={BenefitFoto}
          alt=""
          className="sm:w-2/6"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.2 }} // %20 göründüğünde tetiklenmesini sağlar
        />
        {/* Yazılar */}
        <motion.div
          className="relative"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2 className="font-bold uppercase text-lg mb-8 text-zinc-600"> Million of member very happy getting </h2>
          <div className="font-semibold text-gray-100 my-8">
            <PinkButton>Fit</PinkButton>
            <PinkButton>Fitness</PinkButton>         
            <PinkButton>Gym</PinkButton>         
            <PinkButton>Healthy</PinkButton>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia impedit natus aut perferendis molestias adipisci quibusdam et at laborum aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sequi veniam distinctio illo quo quos quasi quibusdam tempora tenetur corporis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, quasi.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Benefits;