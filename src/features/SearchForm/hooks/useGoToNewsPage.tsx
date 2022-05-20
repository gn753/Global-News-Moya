import { searchParamsState } from "@src/features/SearchForm/components/DropDown/DropDownList";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { createSearchParams } from "react-router-dom";
import { openKeywordListState } from "@src/features/SearchForm";

interface State {
  keyType: string | null | undefined;
  paramValue: string | null | undefined;
  exchange?: string | null | undefined;
}

export const useGoToNewsPage = () => {
  // 뉴스 옵션 선택
  const [keywordQuery, setKeywordQuery] = useState<State>({
    keyType: null,
    paramValue: null,
    exchange: null,
  });

  const [isActive, setIsActive] = useState<boolean>(false);
  const [params] = useRecoilState(searchParamsState);
  const [isOpen, setisOpen] = useRecoilState(openKeywordListState);
  const navigate = useNavigate();
  //미디어 타입 가져오기
  // 받은 Query, parameter로 해당 page 이동
  const getKeywordParams = ({ keyType, paramValue, exchange }: State) => {
    setKeywordQuery({
      keyType,
      paramValue,
      exchange,
    });
  };

  useEffect(() => {
    if (isActive) {
      console.log(keywordQuery, "키워드쿼리");
      const id = createSearchParams({
        ...keywordQuery,
        ...params,
      });
      const movePage = setTimeout(() => {
        navigate(`/news?${id}`);
      }, 1000);
      const closeKeywordList = setTimeout(() => {
        setisOpen(false);
      }, 1000);
      Promise.all([movePage, closeKeywordList]);
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
