import {SelectedPage} from '../shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';



type Props = {
    children: React.ReactNode;
    setSelectedPage: (value:SelectedPage) => void; 
}

const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink
    className='bg-amber-400 px-6 py-2 rounded-lg cursor-pointer hover:bg-amber-500 transition duration-300 hover:duration-500'>
     {children}
    </AnchorLink>
  )
}

export default ActionButton;