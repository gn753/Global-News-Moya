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
        <TypeAhead />
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
};

const Form = styled.section`
  display: flex;
  border-radius: 5px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  background-color: #fff;
`;
