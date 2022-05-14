import React, { useRef, useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useDropDown } from "@src/components/SearchForm/hooks/useDropDown";

interface Props {
  optionList: any;
  dropName: string;
  typeMethod: ({}) => void;
}

export default function DropDwon({ optionList, dropName, typeMethod }: Props) {
  const [dropCurrentOption, setDropCurrentOption] = useState<{}>(
    optionList[0].name
  );
  const { area, openDropDown, closeClickOutside, isOpen } = useDropDown();

  const hanldeDropOption = (currentOption: any) => {
    setDropCurrentOption(currentOption);
  };

  useEffect(() => {
    document.addEventListener("click", closeClickOutside);
    return () => document.removeEventListener("click", closeClickOutside);
  }, []);

  return (
    <DropDown>
      <InputLabel>{dropName}</InputLabel>
      <FormControl ref={area} role="button" onClick={openDropDown}>
        <Title>{dropCurrentOption}</Title>
        <i className="nav-bottom"></i>
      </FormControl>
      {isOpen && (
        <SelectList>
          {optionList.map((option: any, index: number) => (
            <MenuItem
              key={`${dropName}-${index}-${option.name}`}
              onClick={() => hanldeDropOption(option.name)}
            >
              <div onClick={openDropDown}>
                <span onClick={() => typeMethod(option)}>{option.name}</span>
              </div>
            </MenuItem>
          ))}
        </SelectList>
      )}
    </DropDown>
  );
}

const DropDown = styled.div`
  position: relative;
  width: 181px;
  z-index: 100;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
`;
const Title = styled.div`
  font-weight: bold;
`;
const InputLabel = styled.p`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 19px;
  color: #717171;
  padding-left: 20px;
  margin: 0;
`;
const FormControl = styled.div`
  width: 181px;
  padding-left: 20px;
  box-sizing: border-box;
  padding-left: 20px;
  margin-right: 20px;
  height: 40px;
  line-height: 40px;
  position: relative;
  background-color: #fff;
  border-radius: 3px;
  cursor: pointer;
  .nav-bottom {
    position: absolute;
    top: 20px;
    right: 10px;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    background-image: url("/images/icon-navi-bottom.svg");
    background-size: cover;
  }
`;
const SelectList = styled.ul`
  position: absolute;
  top: 89px;
  left: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  width: 181px;
  padding-left: 20px;
  border: 1px solid #dadada;
  box-sizing: border-box;
  padding-left: 20px;
  margin-right: 20px;
  margin-top: 3px;
  background: #ffffff;
  box-shadow: 0px 4px 7px rgba(196, 195, 195, 0.25);
  border-radius: 5px;
`;
const MenuItem = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
  height: 40px;
  line-height: 40px;
  span {
    display: block;
  }
`;
