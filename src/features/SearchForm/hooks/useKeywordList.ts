import { useMemo } from "react";

export const useKeywordList = (data: any) => {
  const sortKeywordListAlphabets = (x: any, y: any) => {
    if (x.name < y.name) {
      return -1;
    }
    if (x.name > y.name) {
      return 1;
    }
    return 0;
  };

  const keywordListSorted = useMemo(() => {
    let copyKeywordList = data;
    copyKeywordList.category.sort(sortKeywordListAlphabets);
    copyKeywordList.sectors.sort(sortKeywordListAlphabets);
    copyKeywordList.startup.sort(sortKeywordListAlphabets);
    return copyKeywordList;
  }, [data]);

  return { keywordListSorted, sortKeywordListAlphabets };
};
