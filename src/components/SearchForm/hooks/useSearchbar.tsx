import { useRef, useState, useEffect } from "react";

export const useSearchBar = () => {
  const area = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openDropDown = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return {
    isOpen,
    area,
    openDropDown,
    setIsOpen,
  };
};
