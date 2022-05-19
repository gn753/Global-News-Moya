import { useRef } from "react";
import { useCallback, useEffect, useState } from "react";

interface NewsUrlPrameter {
  mediaType?: string | null | undefined;
  timeFilter?: string | null | undefined;
  languages?: string | null | undefined;
  orderBy?: string | null | undefined;
}

export const useDropDown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [mediaType, setMediaType] = useState<NewsUrlPrameter>({
    mediaType: null,
  });
  const [timeFilter, setTimeFilter] = useState<NewsUrlPrameter>({
    timeFilter: null,
  });
  const [languages, setLanguages] = useState<NewsUrlPrameter>({
    languages: null,
  });
  const [orderBy, setOrderBy] = useState<NewsUrlPrameter>({
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
