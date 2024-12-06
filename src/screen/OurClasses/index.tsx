import { ClassType } from "../../shared/types";
import foto1 from "../../assets/jpg/Foto-1.jpg"
import Htext from "../../shared/Htext";
import Class from "./Class";
//import Slider from "react-slick";

type Props = {}

const classes: Array<ClassType> = [
  {
    image: foto1,
    name: "Treadmill",
    description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. ',
  },
  {
    image: foto1,
    name: "Weight Lifting",
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    image: foto1,
    name: "Pilates Reformer",
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta. ',
  },
  {
    image: foto1,
    name: "Spinning",
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt alteration.',
  },
  {
    image: foto1,
    name: "Rowing",
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.Lorem Ipsum available, but the majority have suffered',
  },
  {
    image: foto1,
    name: "Elliptical Bike",
    description: 'Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.',
  }

]
const OurClasses = (props: Props) => {
  
  return (
    <section id="ourclasses" className="w-full md:py-20">
      <div className="mx-auto w-5/6">
        <div className="">
          <Htext>Our Classes</Htext>
          <p className="mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi et perferendis quis, laudantium, enim doloremque ratione nemo libero cumque quos aut, velit laboriosam assumenda qui ab facilis accusamus deleniti sit.</p>
        </div>
        <div className="flex flex-wrap justify-between items-center text-center">
            {classes.map((item: ClassType) => (
                <Class
                key={item.name} 
                  name={item.name}
                  description={item.description}
                  image={item.image}
                />
             
            ))}
        
        </div>

      </div>

    </section>
  )
}

export default OurClasses;
