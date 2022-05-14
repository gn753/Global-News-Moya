
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
// import ModalDropDown from "../../dropDown/modalDropDown";

const Member = () => {
  return (
    <>
      <Wrap>
        <span className="MemberShip-join">지금 멤버십 가입</span>
        <Profile>
          <i className="profile-icon"></i>
          <span className="user-name">회원님</span>
          <ModalDropDown>
            <li className="dropdown-item">
              <Link to="/mypage">마이페이지</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/mypage">프로필</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/">로그아웃</Link>
            </li>
          </ModalDropDown>
        </Profile>
      </Wrap>
    </>
  );
};
export default Member;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  color: #575757;
  .MemberShip-join {
    font-size: 14px;
    margin-right: 10px;
    cursor: pointer;
    color: #575757;
  }
  & > span {
    flex-grow: 0;
    font-size: 12px;
    padding: 6px 8px 7px 7px;
    border-radius: 5px;
    border: 1px solid #b5b5b5;
    background-color: #fff;
    color: #575757;
  }
  .user-name {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #575757;
  }
`;

const Profile = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 12px;
  .profile-icon {
    width: 24px;
    height: 24px;
    background-image: url("https://placeimg.com/24/24/any");
    background-size: cover;
    margin-right: 12px;
    margin-top: 2px;
    border-radius: 50%;
    cursor: pointer;
  }
  .icon-arrow-bottom {
    width: 40px;
    height: 40px;
    background-image: url("/images/icon-navi-bottom.svg");
    background-size: cover;
    cursor: pointer;
  }
  .dropdown-menu {
    position: absolute;
    top: 54px;
    width: 183px;
    right: 0;
    box-shadow: 0px 4px 7px rgba(196, 195, 195, 0.25);
    border-radius: 5px;
    background-color: #fff;
    z-index: 199;
  }
  .dropdown-item {
    padding: 15px 0;
    border-bottom: 1px solid #d9d9d9;
    a {
      display: block;
      width: 100%;
      height: 100%;
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
`;
