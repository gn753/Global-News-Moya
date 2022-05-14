import styled from "@emotion/styled";
const HeaderSeachbar = () => {
  return (
    <SearchWrap>
      <Form>
        <Input placeholder="키워드 검색관리" />
        <i className="search-btn" role="button">
          검색
        </i>
      </Form>
    </SearchWrap>
  );
};
export default HeaderSeachbar;
const SearchWrap = styled.div`
  margin-left: 200px;
`;
const Form = styled.form`
  position: relative;
  width: 435px;
  height: 48px;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  i.search-btn {
    position: absolute;
    top: 50%;
    right: 10px;
    width: 40px;
    height: 40px;
    transform: translateY(-50%);
    background: #48c0b7;
    background-image: url("/images/icon-serach-wh.svg");
    background-repeat: no-repeat;
    background-size: 20px 20px;
    background-position: 50%;
    font-size: 0;
    border-radius: 5px;
  }
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background: #ffffff;
  border: 1px solid #cccccc;
  box-sizing: border-box;
  border-radius: 5px;
  &::placeholder {
    font-weight: 500;
    font-size: 15px;
    color: ${({ theme }) => theme.overLine};
    padding-left: 10px;
  }
`;
