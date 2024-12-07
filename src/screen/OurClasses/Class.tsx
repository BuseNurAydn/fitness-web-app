
type Props = {
  image: string;
  name: string;
  description: string;
}

const Class = ({ image, name, description }: Props) => {
  return (
    <div className=" text-center mb-4">
      <img src={image} alt="" className="rounded-2xl w-full h-auto opacity-75 hover:opacity-100 transition duration-500 cursor-pointer" />
      <div className="mt-4">
        <h2 className="font-semibold">{name}</h2>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  )
}

export default Class;