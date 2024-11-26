
type Props = {
    children: React.ReactNode;
}

const Htext = ({children}: Props) => {
  return (
    <h1 className="uppercase font-semibold text-xl text-pink-500 mb-4 italic">{children}</h1>
                      //children değerini sayfalarda kullandığımızda alıcaz
  )
}

export default Htext