import {useRef} from "react";

function useNavSearch() {
    const refs = useRef(new Map());

    const addRefs = (name, htmlNode) => {
        refs.current.set(name, htmlNode);
    }


   const scrollCallback = (name) => {
         if (refs.current.get(name)) {
             refs.current.get(name).scrollIntoView({behavior: 'smooth'});
         }
     }

    return{
        addRefs,
        scrollCallback
    }

}


export {useNavSearch};