import styled from "@emotion/styled";
import { useGetNewsQuery } from "@src/features/SearchForm/hooks/useGetNewsQuery";

interface Props {
  children: React.ReactChild;
  params: {
    paramValue: string | null | undefined;
    exchange?: string | null | undefined;
  };
  keyType: string | null | undefined;
}

export default function KeywordItem({ children, params, keyType }: Props) {
  const { getKeywordParams, setIsActive } = useGetNewsQuery();
  const { paramValue, exchange } = params;

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
