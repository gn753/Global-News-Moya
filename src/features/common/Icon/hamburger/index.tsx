import styled from "@emotion/styled";
import { useState } from "react";
const HamBurger = () => {
  const [isActive, setIsActive] = useState<boolean>(true);
  return (
    <EventButton
      onClick={() => setIsActive(!isActive)}
      role="button"
      iconActive={isActive}
    ></EventButton>
  );
};

export default HamBurger;

type Props = {
  iconActive: boolean;
};
const EventButton = styled.i<Props>`
  display: block;
  width: 40px;
  height: 40px;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  background: ${({ iconActive }) =>
      iconActive
        ? "url(/images/icon-Grid-filled.svg)"
        : "url(/images/icon-Grid.svg)"}
    no-repeat 4.5%;
`;
