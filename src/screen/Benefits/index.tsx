import { HomeIcon, UserIcon } from "@heroicons/react/20/solid";
import Htext from "../../shared/Htext";
import { BenefitTypes } from "../../shared/types";
import { PhoneIcon } from "@heroicons/react/24/solid";
import BenefitCards from "./benefitCards";


type Props = {}

const benefits: Array<BenefitTypes>=[
        {
          icon:<HomeIcon className="text-black w-6 h-6"/>,
          title:'What is lorem ipsum?',
          description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, maiores!'
        },
        {
          icon:<UserIcon className="text-black w-6 h-6"/>,
          title: 'Lorem ipsum dolor sit?',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, a.'
        },
        {
          icon:<PhoneIcon className="text-black w-6 h-6"/>,
          title: 'Lorem ipsum amet consectetur?',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, quam!'
        }

]
const Benefits= (props: Props) => {
  return (
    <section id="benefits" className="mx-auto py-20 w-5/6 min-h-full">
      
     <div className="md:w-3/5">
       <Htext>More than gym</Htext>
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, nostrum quod tempora non maiores fuga.</p> 
     </div>

     <div className="md:flex gap-x-2">
      {benefits.map((benefit:BenefitTypes)=>(
          <BenefitCards
             key= {benefit.title}
             icon= {benefit.icon}
             title= {benefit.title}
             description= {benefit.description}
           >
           </BenefitCards>
      ))}
     </div>

     </section>
  )
}

export default Benefits;