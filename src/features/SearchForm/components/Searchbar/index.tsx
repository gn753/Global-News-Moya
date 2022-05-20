import styled from "@emotion/styled";
import React from "react";
import { css } from "@emotion/react";
import DropDownList from "@src/features/SearchForm/components/DropDown/DropDownList";
import TypeAhead from "@src/features/SearchForm/components/TypeAhead";

function Searchbar() {
  return (
    <>
      <Form>
        <DropDownList />
        <div css={styles.Input}>
          <TypeAhead />
          <i
            className="search-icon"
            onClick={() =>
              alert(
                "현재 시스메틱측 보안이슈및 점검으로 지원되는 검색 카테고리는 맞춤뉴스만 가능합니다."
              )
            }
          >
            검색 아이콘
          </i>
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
    position: relative;
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
      cursor: pointer;
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

const Form = styled.section`
  display: flex;
  border-radius: 5px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  background-color: #fff;
`;
