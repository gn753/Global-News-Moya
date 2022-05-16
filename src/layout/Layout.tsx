import React, { ReactChildren, ReactChild } from "react";
import styled from "@emotion/styled";
import Header from "@src/layout/header/index";
import Footer from "@src/layout/footer/index";

interface AuxProps {
  children: ReactChild | ReactChildren;
}

export const Layout: React.FC<AuxProps> = (props: AuxProps) => {
  // const location = useLocation<LocationTypes>();
  // const path = location.pathname.slice(1);

  // if (path === "login") return <Root>{props.children}</Root>;

  return (
    <Root className="layout">
      <Header />
      {props.children}
      <Footer />
    </Root>
  );
};

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
