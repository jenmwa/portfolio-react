import { useEffect } from "react";

interface IClickOutsideProps {
  menuRef: React.MutableRefObject<HTMLDivElement | null>;
  onClickOutside: () => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

// export function useClickOutside({ ref, onClickOutside }: IClickOutsideProps) {
//   useEffect(() => {
//     function handleClickOutside(event: Event) {
//       if (ref.current && !ref.current.contains(event.target as Node)) {
//         onClickOutside();
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);
//     console.log('click outside')
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [ref, onClickOutside]);
// }
export function useClickOutside ( {menuRef, setIsOpen }: IClickOutsideProps) {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent): void {
          if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsOpen(false);
            console.log('click outside');
          }
        }
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      });
}
