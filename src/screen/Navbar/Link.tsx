import {SelectedPage} from '../../shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';


type Props = {
    page:string,
    selectedPage:SelectedPage,
    setSelectedPage:(value:SelectedPage) => void;
}

const Link = ({ page, selectedPage, setSelectedPage}: Props) => {
    const loverCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
    className={`${selectedPage == loverCasePage ? "text-gray-900": ""} relative group transition duration-300`}
    href={`#${loverCasePage}`}
    onClick={()=>setSelectedPage(loverCasePage)}
    >
    {page}
    <span
    className="absolute bottom-0 left-0 w-0 h-[2px] bg-pink-400 transition-all duration-300 group-hover:w-full"
    ></span>
    </AnchorLink>
  )
}

export default Link;