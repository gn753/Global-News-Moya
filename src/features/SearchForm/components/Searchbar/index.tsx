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

const Form = styled.section`
  display: flex;
  border-radius: 5px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  background-color: #fff;
`;
