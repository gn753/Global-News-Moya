import { useEffect, useMemo, useState } from "react";
import { useFetchSearchKeywordList } from "@src/features/SearchForm/hooks/useFetchSearchKeywordList";
import KeywordList from "@src/features/SearchForm/components/KeywordList";
import Searchbar from "@src/features/SearchForm/components/Searchbar";
import Container from "@material-ui/core/Container";
import styled from "@emotion/styled";
import { atom, useRecoilState } from "recoil";

export const openKeywordListState = atom({
  key: "openKeywordListState",
  default: false,
});

export default function SearchForm() {
  const { data } = useFetchSearchKeywordList();
  const [isOpen, setIsOpen] = useRecoilState<boolean>(openKeywordListState);

  const keywordList = useMemo(() => {
    return data;
  }, [data]);

  return (
    <Section>
      <Container maxWidth="lg">
        <KeywordListClose>
          <span onClick={() => setIsOpen(!isOpen)}>맞춤뉴스 보기</span>
        </KeywordListClose>
        <Searchbar />
        {isOpen && keywordList && <KeywordList data={keywordList} />}
      </Container>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
`;
const KeywordListClose = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
  span {
    padding: 0px 12px;
    border: 1px solid #707070;
    border-radius: 2px;
    display: inline-flex;
    align-items: center;
    height: 34px;
    font-weight: 600;
    text-decoration: none;
    border-radius: 16px;
    cursor: pointer;
    color: #707070;
    transition: 0.3s;
    &:hover {
      background-color: #fff;
    }
  }
`;
