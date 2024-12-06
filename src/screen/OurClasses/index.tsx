import { ClassType } from "../../shared/types";
import foto1 from "../../assets/jpg/Foto-1.jpg"

type Props = {}

const classes: Array<ClassType> = [
  {
    image: foto1,
    name: "Treadmill",
    description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    image: foto1,
    name: "Weight Lifting",
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    image: foto1,
    name: "Pilates Reformer",
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
  },
  {
    image: foto1,
    name: "Spinning",
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
  },
  {
    image:foto1,
    name: "Rowing",
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.Lorem Ipsum available, but the majority have suffered alteration in some form.',
  },
  {
    image:foto1,
    name: "Elliptical Bike",
    description: 'Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.',
  }

]
const OurClasses = (props: Props) => {
  return (
    <section id="ourclasses"> a
        
    </section>
  )
}

export default OurClasses;