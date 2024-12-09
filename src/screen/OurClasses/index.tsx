import { ClassType } from "../../shared/types";
import foto1 from "../../assets/jpg/Foto-1.jpg"
import Htext from "../../shared/Htext";
import Class from "./Class";
import Slider from "react-slick";
import { motion } from 'framer-motion' //animasyon için //framer animation

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
const Arrow = (props: any) => {
  const { className, style, onClick } = props;

  return (
    <div
      className={`${className} custom-arrow ${
        className.includes("slick-next") ? "next-arrow" : "prev-arrow"
      }`}
      style={{
        ...style,
        position: "absolute", 
        top: "40%",          
        transform: "translateY(-50%)",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {className.includes("slick-next") ? (
    <span style={{ fontSize: "40px", color: "pink" }}>›</span>
  ) : (
    <span style={{ fontSize: "40px", color: "pink", paddingRight:"70px" }}>‹</span>
  )} 
    </div>
  );
};

const OurClasses = (props: Props) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: true,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1024, // Tablet için üst sınır (1024px ve altı)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: true, // Tabletlerde oklar görünsün
        },
      },
      {
        breakpoint: 768, // Mobil üst sınır (768px ve altı)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Mobilde oklar gizlensin
        },
      },
    ],
  };
  
  return (
    <section id="ourclasses" className="w-full md:py-20">
      <div className="mx-auto w-5/6">
        <div className="">
          <Htext>Our Classes</Htext>
          <p className="mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi et perferendis quis, laudantium, enim doloremque ratione nemo libero cumque quos aut, velit laboriosam assumenda qui ab facilis accusamus deleniti sit.</p>
        </div>
        <motion.div
            animate={{ opacity: 1 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.2 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
        <Slider {...settings}>
          {classes.map((item: ClassType) => (
            <div key={item.name} className="pr-4">
              <Class
                name={item.name}
                description={item.description}
                image={item.image}
              />
            </div>
          ))}
        </Slider>
        </motion.div>

      </div>
    </section>
   
  
  )
  
}

export default OurClasses;

