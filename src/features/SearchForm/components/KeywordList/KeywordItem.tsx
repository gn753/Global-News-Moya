import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetNewsQuery } from "@src/features/SearchForm/hooks/useGetNewsQuery";
import { useSearchBar } from "@src/features/SearchForm/hooks/useSearchbar";

interface Props {
  children: string;
  paramValue: string;
  exchange?: string;
}

export default function KeywordItem({ children, props, keyType }: any) {
  const [skip, setSkip] = useState<boolean>(true);
  const { getKeywordParams, setIsActive } = useGetNewsQuery();
  const navigate = useNavigate();
  const { paramValue, exchange } = props;
  const { setIsOpen } = useSearchBar();
  // function moveNewsPage() {
  //   console.log(keyType, paramValue);

  //   var id = new URLSearchParams();
  //   id.append("keyType", keyType);
  //   id.append("paramValue", paramValue);
  //   navigate(`/news?${id}`);
  // }

  return (
    <div onClick={() => setIsActive(true)}>
      <Keyword>
        <Item
          onClick={() => {
            getKeywordParams({ keyType, paramValue, exchange });
          }}
        >
          {children}
        </Item>
      </Keyword>
    </div>
  );
}
const Keyword = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  padding: 10px;
  border-radius: 10px;
`;
const Item = styled.p`
  display: flex;
  align-items: center;
  font-family: "Noto Sans";
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  color: #000;
  cursor: pointer;
  margin: 0;
  padding-left: 20px;
  text-align: center;
`;
