import { useRef } from "react";
import { useCallback, useEffect, useState } from "react";
export const useDropDown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [mediaType, setMediaType] = useState<any>({
    mediaType: null,
  });
  const [timeFilter, setTimeFilter] = useState<any>({
    timeFilter: null,
  });
  const [languages, setLanguages] = useState<any>({
    languages: null,
  });
  const [orderBy, setOrderBy] = useState<any>({
    orderBy: null,
  });
  // const { mediaType, timeFilter, languages, orderBy } = dropState;

  const getMediaType = useCallback(
    ({ parameter }: any) => {
      const newParameter = { mediaType: parameter };
      setMediaType(() => newParameter);
    },
    [mediaType]
  );
  const getTimeFilter = useCallback(
    ({ parameter }: any) => {
      const newParameter = { timeFilter: parameter };
      setTimeFilter(() => newParameter);
    },
    [timeFilter]
  );

  const getLanguages = useCallback(
    ({ parameter }: any) => {
      const newParameter = { languages: parameter };
      setLanguages(() => newParameter);
    },
    [languages]
  );

  const getOrderBy = useCallback(
    ({ parameter }: any) => {
      const newParameter = { orderBy: parameter };
      setOrderBy(() => newParameter);
    },
    [orderBy]
  );

  const area = useRef<HTMLDivElement>(null);
  const openDropDown = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  const closeClickOutside = (event: any) => {
    if (area.current && !area.current.contains(event.target)) setIsOpen(false);
  };

  return {
    area,
    isOpen,
    openDropDown,
    closeClickOutside,
    getMediaType,
    getTimeFilter,
    getLanguages,
    getOrderBy,
    mediaType,
    timeFilter,
    languages,
    orderBy,
  };
};
