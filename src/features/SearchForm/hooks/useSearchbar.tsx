import { useRef, useState } from "react";

export const useSearchBar = () => {
  const area = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openDropDown = () => {
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    area,
    openDropDown,
    setIsOpen,
  };
};
