import { motion } from "framer-motion";

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
}

const BenefitCards = ({ icon, title, description }: Props) => {
  return (
    <motion.div
      className="mt-5 rounded-lg border-red-100 border-2 p-4 bg-red-50"
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }} // Animasyon bir kez çalışmaz, %50 göründüğünde tetiklenir
      transition={{ duration: 0.6 }}
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full bg-rose-200 p-2 border-1">
          {icon}
        </div>
      </div>
      <h4 className="font-semibold">{title}</h4>
      <p className="my-2">{description}</p>
    </motion.div>

  )
}
export default BenefitCards;