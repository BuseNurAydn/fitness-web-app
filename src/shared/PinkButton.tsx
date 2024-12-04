
type Props = {
    children: React.ReactNode;
}

const PinkButton = ({children}: Props) => {
  return (
    <a className="mr-4 md:px-5 md:py-2 p-2 bg-pink-400 hover:bg-pink-500 rounded-lg cursor-pointer">{children}</a> 
  )
}

export default PinkButton;