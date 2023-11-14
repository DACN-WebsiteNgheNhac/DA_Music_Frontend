import { useEffect, RefObject } from 'react';

const useOutSide = <T extends HTMLElement>(ref: RefObject<T>, cb: (event: MouseEvent) => void) => {
   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (ref.current && !ref.current.contains(event.target as Node)) {
            cb(event);
         }
      };

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, [ref, cb]);
};

export default useOutSide;
