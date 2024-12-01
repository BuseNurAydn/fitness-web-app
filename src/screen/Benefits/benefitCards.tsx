
type Props = {
    icon: JSX.Element;
    title: string;
    description: string;
}

const BenefitCards = ({icon,title,description}: Props) => {
  return (
    <div className="mt-5 rounded-lg border-red-100 border-2 p-4 bg-red-50">
        <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-rose-200 p-2 border-1">
                {icon}
            </div>
          </div>
          <h4 className="font-semibold">{title}</h4>
          <p className="my-2">{description}</p>
    </div>
  )
}
export default BenefitCards;