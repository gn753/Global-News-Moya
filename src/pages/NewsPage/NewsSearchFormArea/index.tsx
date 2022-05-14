import styled from "@emotion/styled";
import SearchForm from "@src/components/SearchForm";
import NewsTabList from "@src/pages/NewsPage/NewsTabList";
import { useEffect, useState,useCallback} from "react";


export default function NewsSearchFormArea() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!scrolled && window.scrollY > 390) {
        setScrolled(true);
      } else if (scrolled && window.scrollY < 390) {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <Wrap className={scrolled ? "fix-wrap mb-100" : "fix-wrap"}>
      <Area className={scrolled ? "fix-container scrolled" : "fix-container"}>
        <Padding>
          {!scrolled && <SearchForm />}
          <NewsTabList />
        </Padding>
      </Area>
    </Wrap>
  );
}

const Wrap = styled.section`
  position: relative;
  height: 345px;
  &.fix-wrap.mb-100 {
    margin-bottom: 100px;
  }
`;
const Area = styled.div`
  &.fix-container {
    height: 345px;
    background: linear-gradient(
      210.25deg,
      #ffffff -118.14%,
      #dff8f4 22.93%,
      #fdddd2 141.11%
    );
    box-sizing: border-box;
    z-index: 400;
  }
  &.fix-container.scrolled {
    position: fixed;
    right: 0;
    left: 0;
    z-index: 300;
    height: 60px;
    background: #fff;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
  }
`;

const TabAddBtn = styled.button`
  position: absolute;
  bottom: 0;
  background: none;
  outline: none;
  border: none;
  padding: 0;
  height: 60px;
  div {
    display: flex;
    align-items: center;
    width: 166px;
    height: 60px;
    font-family: NotoSans-Display;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #fff;
    outline: none;
    border: none;
    background-color: ${(props) => props.theme.primaryColor};
    box-sizing: border-box;
    border-radius: 5px 5px 0px 0px;
    padding-left: 14px;
  }
  cursor: pointer;
  i {
    width: 40px;
    height: 40px;
    background-image: url("/images/icon-add-white.svg");
    background-size: contain;
    background-repeat: no-repeat;
    font-size: 0;
    box-sizing: border-box;
  }
`;
const Padding = styled.div`
  padding-top: 108px;
`;
