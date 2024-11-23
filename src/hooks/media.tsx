import { useEffect, useState } from 'react'

type Props = {}

const media = (query: string) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const usemedia= window.matchMedia(query); //tarayıcıdaki ekran boyutu kontrol edildi
        if(usemedia.matches != matches){
            setMatches(usemedia.matches);
        }
        const listener=()=>setMatches(usemedia.matches);
        window.addEventListener("resize", listener);  //ekran boyutu değiştiğinde resize olay dinleyicisi tetiklendi
        return()=>window.removeEventListener("resize", listener);



    },[matches, query]);

  return matches;
};

export default media