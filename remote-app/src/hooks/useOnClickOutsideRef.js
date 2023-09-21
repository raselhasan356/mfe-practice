import { useEffect, useRef } from "react";

export default function useOnClickOutsideRef(callback, initialValue = null) {
  const elementRef = useRef(initialValue);
  useEffect(() => {
    function handler(event) {
      if (!elementRef.current?.contains(event.target)) {
        callback();
      }
    }
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, [callback]);
  return elementRef;
}
