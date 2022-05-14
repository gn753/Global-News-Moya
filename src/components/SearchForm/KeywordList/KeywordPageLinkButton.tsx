import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

export const KeywordPageLinkButton = () => {
  return (
    <div>
      <KeywordLinkButton>
        <Link to={"/edit"}>
          키워드 전체보기 <i className="icon-keyword"></i>
        </Link>
      </KeywordLinkButton>
    </div>
  );
};
const KeywordLinkButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  a {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #48c0b7;
    text-decoration: none;
  }
  .icon-keyword {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-left: 3px;
    background-repeat: no-repeat;
    background-image: url("/images/keyword-arrow.svg");
    background-size: contain;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: #48c0b7;
  }
`;
