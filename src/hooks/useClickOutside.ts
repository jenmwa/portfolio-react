import { useEffect } from "react";

interface IClickOutsideProps {
    ref: React.MutableRefObject<HTMLUListElement | null>
    onClickOutside: () => void;
  }
  

export function useClickOutside({ref, onClickOutside}: IClickOutsideProps) {
    useEffect(() => {

      function handleClickOutside(event: MouseEvent) {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          onClickOutside();
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, onClickOutside]);
  }