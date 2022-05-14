import styled from "@emotion/styled";
import { useState } from "react";
const BookMarkIcon = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <EventButton
      onClick={() => setIsActive(!isActive)}
      role="button"
      iconActive={isActive}
    />
  );
};

export default BookMarkIcon;
type Props = {
  iconActive: boolean;
};
const EventButton = styled.i<Props>`
  display: block;
  width: 40px;
  height: 40px;
  background-size: cover;
  cursor: pointer;
  background: ${({ iconActive }) =>
      iconActive
        ? "url(/images/icon-Bookmark-filled.svg)"
        : "url(/images/icon-Bookmark-outline.svg)"}
    no-repeat 4.5%;
`;
