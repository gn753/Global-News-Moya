import React from "react";
import { Global, css } from "@emotion/react";

const style = css`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@100;300;500;600;700&display=swap");
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  html {
    position: relative;
    height: 100%;
  }
  #root {
    height: 100%;
  }
  body {
    height: 100%;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  body {
    margin: 0;
  }
  //style-guide
  .h1 {
    //styleName: H1;
    font-family: Noto Sans;
    font-size: 40px;
    font-weight: 700;
    line-height: 64px;
    letter-spacing: 0em;
    text-align: left;
    margin: 0;
  }
  .h2 {
    //styleName: H1;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
  }
  .h3 {
    font-family: Noto Sans;
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
  }
  .h4 {
    //styleName: subtitle 1;
    font-family: Noto Sans;
    font-size: 16px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: -0.03em;
    text-align: left;
  }
  .h5 {
    //styleName: subtitle 2;
    font-family: Noto Sans;
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
  }
  .body-1 {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
  }
  .body-2 {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */
    letter-spacing: -0.01em;
  }
  .body-3 {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;
    /* identical to box height, or 188% */
  }
  .body-4 {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
  }
  .button-1 {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
  }
  .button-2 {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
