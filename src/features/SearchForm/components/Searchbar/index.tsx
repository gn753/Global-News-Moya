import styled from "@emotion/styled";
import React from "react";
import { css } from "@emotion/react";
import DropDownList from "@src/features/SearchForm/components/DropDown/DropDownList";

interface Props {
  handleKeywordOpen: () => void;
}

function Searchbar({ handleKeywordOpen }: Props) {
  return (
    <>
      <KeywordListClose>
        <span onClick={handleKeywordOpen}>맞춤뉴스 보기</span>
      </KeywordListClose>
      <Form>
        <DropDownList />
        <div css={styles.Input}>
          <i className="search-icon">검색 아이콘</i>
          <input placeholder="AutoComplete기능은 개발중" />
        </div>
      </Form>
    </>
  );
}
export default React.memo(Searchbar);

const styles = {
  dropWrap: css`
    position: relative;
    width: 181px;
    height: 80px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    box-sizing: border-box;
    padding-left: 20px;
    padding-right: 20px;
    border-right: 1px solid #c4c4c4;
  `,
  Input: css`
    display: flex;
    align-items: center;
    max-width: 350px;
    width: 100%;
    max-height: 120px;
    .search-icon {
      display: block;
      width: 40px;
      height: 40px;
      background: url("/images/search.svg");
      background-repeat: no-repeat;
      margin-right: 10px;
      font-size: 0;
      background-position: 50%;
    }
    input {
      display: block;
      width: 100%;
      height: 25px;
      margin: auto 0;
      border: none;
    }
  `,
};

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
const Form = styled.section`
  display: flex;
  border-radius: 5px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  background-color: #fff;
`;
