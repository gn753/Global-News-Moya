import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Container } from '@mui/material';

const Footer = () => {
  return (
    <Wrap>
      <Container maxWidth="lg">
        <FooterInner>
          <Logo />
          <MoyaCompanyInfo>
            <p>
              주식회사 시스메틱 <br />
              사업자 등록번호 : 711-86-00050 <br />
              통신판매업신고 : 제2020-서울영등포-2864호 서울시 영등포구
              당산로41길 11, E동 1202호(당산동 4가, 당산 SK V1 center) <br />
              +82-2-6338-1880 ㅣ E-mail : help@moya.ai
            </p>
          </MoyaCompanyInfo>
          <Service>
            <Link to="/">공지사항</Link>
            <Link to="/">교육안내</Link>
            <Link to="/">자주 묻는 질문</Link>
          </Service>
          <Service>
            <Link to="/">개인정보 취급 방침</Link>
            <Link to="/">서비스 이용약관</Link>
            <Link to="/">Partners</Link>
          </Service>
          <Sns>
            <a
              href="https://www.facebook.com/MOYAAI/"
              target="_blank"
              rel="noreferrer"
            >
              FaceBook
            </a>
            <a
              href="https://www.instagram.com/moya.ai/?hl=ko"
              target="_blank"
              rel="noreferrer"
            >
              Instagram{" "}
            </a>
            <a
              href="https://pf.kakao.com/_sRNkxl"
              target="_blank"
              rel="noreferrer"
            >
              KakaoTalk
            </a>
          </Sns>
        </FooterInner>
      </Container>
    </Wrap>
  );
};

export default Footer;

const Wrap = styled.footer`
  height: 198px;
  background-color: #405261;
`;

const FooterInner = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding-top: 46px;
`;

const Logo = styled.div`
  width: 62.6px;
  height: 24px;
  background-image: url("/images/footer-logo.svg");
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const MoyaCompanyInfo = styled.div`
  p {
    margin: 0;
    font-family: NotoSans;
    font-size: 12px;
    font-weight: normal;
    font-style: normal;
    line-height: 1.5rem;
    color: #fff;
  }
`;

const Service = styled.div`
  a {
    display: block;
    font-family: NotoSans;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.86;
    text-decoration: none;
    color: #fff;
    margin-bottom: 5px;
  }
  a:last-child {
    margin-bottom: 0x;
  }
`;

const Sns = styled.div`
  margin-top: -23px;
  a {
    display: inline-block;
    width: 36px;
    height: 36px;
    font-size: 0;
    background-size: cover;
  }
  a:nth-of-type(1) {
    background-image: url("/images/icon-sns-facebook.svg");
  }
  a:nth-of-type(2) {
    background-image: url("/images/icon-sns-instagram.svg");
  }
  a:nth-of-type(3) {
    background-image: url("/images/icon-sns-kakaotalk.svg");
  }
`;
