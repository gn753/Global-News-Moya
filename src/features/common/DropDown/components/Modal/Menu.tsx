import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { useState, useRef } from "react";

const Menu = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function ModalOffEvent({ children }: any) {
    function handleClick() {
      if (isOpen === true) setIsOpen(false);
      else setIsOpen(true);
    }
    return <ul onClick={handleClick}>{children}</ul>;
  }

  return (
    <>
      <div className="dropdown-menu">
        <ModalOffEvent>{children}</ModalOffEvent>
      </div>
    </>
  );
};

export default Menu;
