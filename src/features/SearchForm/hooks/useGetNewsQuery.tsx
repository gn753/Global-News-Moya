import { searchParamsState } from "@src/features/SearchForm/components/DropDown/DropDownList";
import { useDropDown } from "@src/features/SearchForm/hooks/useDropDown";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

interface State {
  keyType: string | null | undefined;
  paramValue: string | null | undefined;
  exchange?: string | null | undefined;
}

export const useGetNewsQuery = () => {
  // 뉴스 옵션 선택
  const [keywordQuery, setKeywordQuery] = useState<State>({
    keyType: null,
    paramValue: null,
    exchange: null,
  });
  const [isActive, setIsActive] = useState<boolean>(false);
  const { keyType, paramValue, exchange } = keywordQuery;
  const [params, setParams] = useRecoilState(searchParamsState);
  const navigate = useNavigate();
  //미디어 타입 가져오기
  const { mediaType, languages, timeFilter, orderBy } = params;
  // 받은 Query, parameter로 해당 page 이동
  const getKeywordParams = ({ keyType, paramValue }: State) => {
    setKeywordQuery({
      keyType,
      paramValue,
    });
  };

  useEffect(() => {
    if (isActive) {
      let id = new URLSearchParams();
      id.append("keyType", keyType);
      id.append("paramValue", paramValue);
      if (exchange === undefined) {
      } else {
        id.append("exchange", exchange);
      }

      id.append("mediaType", mediaType);
      id.append("languages", languages);
      id.append("timeFilter", timeFilter);
      id.append("orderBy", orderBy);

      setTimeout(() => {
        navigate(`/news?${id}`);
      }, 1000);
    }
    return () => {
      setIsActive(false);
    };
  }, [isActive, keywordQuery]);

  return {
    getKeywordParams,
    setIsActive,
    keywordQuery,
  };
};
