import styled from "@emotion/styled";
import { useRef, useState, useEffect, MouseEvent } from "react";
import Menu from "./Menu";

const Modal = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const area = useRef<HTMLDivElement>(null);

  function hanldeModal(event: MouseEvent<HTMLElement>) {
    setIsOpen(!isOpen);
  }

  function handleClickOutside(event: any) {
    if (area.current && !area.current.contains(event.target)) setIsOpen(false);
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <DropDown ref={area} className="dropDown-modal">
      <i role="button" className="dropdown-toggle" onClick={hanldeModal}>
        드롭다운
      </i>
      {isOpen && (
        <Menu open={isOpen} onOpen={setIsOpen}>
          {children}
        </Menu>
      )}
    </DropDown>
  );
};

export default Modal;
export const DropDown = styled.div`
  &.dropDown-modal {
    position: relative;
  }
  i.dropdown-toggle {
    display: block;
    background-image: url("/images/icon-navi-bottom.svg");
    width: 40px;
    height: 40px;
    background-size: cover;
    cursor: pointer;
    font-size: 0;
  }
  .dropdown-menu {
    position: absolute;
    top: 93%;
    left: -114px;
    width: 183px;
    box-shadow: 0px 4px 7px rgba(196, 195, 195, 0.25);
    border-radius: 5px;
    background-color: #fff;
    z-index: 199;
  }
  ul {
    margin: 0;
    padding: 0;
    text-decoration: none;
    text-align: center;
    width: 100%;
  }
  .dropdown-item {
    padding: 15px 0;
    a {
      display: block;
      width: 100%;
      height: 100%;
      border-bottom: 1px solid #d9d9d9;
      color: #000;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;
      text-decoration: none;
      text-align: center;
    }
    a:last-child {
      border: none;
    }
  }

  .logout-btn {
    width: 100%;
    padding: 15px 0;
    border-bottom: 1px solid #d9d9d9;
    color: #000;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    text-align: center;
  }
`;
