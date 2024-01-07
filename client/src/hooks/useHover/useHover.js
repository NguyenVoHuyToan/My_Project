import { useRef, useState, useEffect } from "react";

function useHover() {
 const ref = useRef();
 const [isHovered, setIsHovered] = useState(false);

 const enter = () => setIsHovered(true);
 const leave = () => setIsHovered(false);

 useEffect(() => {
   const refCurrent = ref.current;
   refCurrent.addEventListener("mouseenter", enter);
   refCurrent.addEventListener("mouseleave", leave);

   return () => {
     refCurrent.removeEventListener("mouseenter", enter);
     refCurrent.removeEventListener("mouseleave", leave);
   };
 }, []);

 return [ref, isHovered];
}
