import { css } from "@emotion/react";

const Intro = () => {
  return (
    <>
      <div css={styles}>
        <h1 className="title">
          글로벌 경제 금융 <br /> 정보검색 서비스, 모야
        </h1>
        <div className="sub-intro">
          주식(미국, 한국, 중국)과 상품, 인덱스와 채권, 통화, 글로벌 이슈, 토픽,
          섹터 등 전세계 32개국의 12,000개 매체로부터 관련 뉴스를 실시간으로
          수집, 제공합니다.
        </div>
      </div>
      <button css={button}>멤버십 가입하기</button>
    </>
  );
};

export default Intro;

const styles = css`
  margin-bottom: 65px;
  .title {
    width: 538.7px;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 64px;
    margin-top: 0;
  }
  .sub-intro {
    width: 594px;
    height: 84px;
    line-height: 2.25;
    font-size: 16px;
    font-weight: bold;
    color: rgba(20, 64, 86, 0.7);
  }
`;

const button = css`
  width: 241px;
  height: 59px;
  flex-grow: 0;
  font-size: 20px;
  text-align: center;
  border-radius: 5px;
  border: none;
  color: #fff;
  margin-bottom: 145px;
  background-color: var(--color-bluegreen);
`;

// background: ${({ theme }) => theme.blueGreenColor}
/* color: ${({ theme }) => theme.blueGreenColor}; */
