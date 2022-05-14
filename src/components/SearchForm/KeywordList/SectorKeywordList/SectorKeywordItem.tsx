import styled from "@emotion/styled";
import { useGetNewsQuery } from "@src/components/SearchForm/hooks/useGetNewsQuery";


interface Props {
  children: any;
  props: {
    paramValue: string;
    exchange: string;
  };
  keyType: string;
}

export default function SecotrKeywordItem({ children, props, keyType }: Props) {
  const { getKeywordParams, setIsActive } = useGetNewsQuery();
  const { paramValue, exchange } = props;

  return (
    <div onClick={() => setIsActive(true)}>
      <Item
        onClick={() => {
          getKeywordParams({ keyType, paramValue, exchange });
        }}
      >
        {children}
      </Item>
    </div>
  );
}

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
  padding-top: 10px;
  padding-bottom: 10px;
  box-sizing: border-box;
  border-right: 1px solid #c4c4c4;
`;
