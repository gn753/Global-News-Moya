import { useState } from "react";
import { css } from "@emotion/react";
import LoginSubmit from "@src/features/auth/LoginSubmit";
import Container from "@mui/material/Container";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handlePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleIdInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <main>
      <Container maxWidth="lg">
        <div css={styles}>
          <div className="form__wrap">
            <div className="form__wrap__inner">
              <h1>로그인</h1>
              <p>글로벌 경제 금융 정보검색 서비스 모야입니다.</p>
              <form>
                <fieldset>로그인</fieldset>
                <label htmlFor="email">이메일</label>
                <input
                  type="text"
                  name="email"
                  placeholder="이메일을 입력하세요"
                  onChange={handleIdInput}
                />
                <label htmlFor="password">비밀번호</label>
                <input
                  type="text"
                  name="password"
                  placeholder="비밀번호를 입력하세요"
                  onChange={handlePasswordInput}
                />
                <LoginSubmit email={email} password={password} />
              </form>
            </div>
          </div>
          <div className="bg-image" />
        </div>
      </Container>
    </main>
  );
}

const styles = css`
  main {
    background: linear-gradient(
      253.41deg,
      rgba(255, 255, 255, 0.25) -1.86%,
      rgba(228, 249, 243, 0.25) 62.27%,
      rgba(248, 220, 210, 0.25) 97.33%
    );
  }
  display: flex;

  .form__wrap {
    width: 50%;
    height: 100%;
    background: #fff;
    border-right: 1px solid gray;
    min-height: calc(100vh - 198px);
    height: 100%;
  }
  .bg-image {
    width: 50%;
    background-image: url("/images/loginBackground.svg");
    background-position: 50% 50%;
    background-repeat: no-repeat;
  }
  .form__wrap__inner {
    max-width: 319px;
    width: 100%;
    height: 100%;
    margin-top: 90px;
    box-sizing: border-box;
    h1 {
      font-weight: 600;
      font-size: 28px;
      line-height: 45px;
      color: #546e7a;
    }
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 45px;
      letter-spacing: -0.450202px;
      color: #90a4ae;
    }
    label {
      font-weight: 600;
      font-size: 12px;
      line-height: 45px;
      display: block;
      color: #546e7a;
    }
    input {
      width: 100%;
      height: 43px;
      border: 0.643145px solid rgba(95, 182, 173, 0.4);
      border-radius: 3.21573px;
      padding-left: 12px;
      outline: none;
    }
    input::placeholder {
      color: rgba(95, 182, 173, 0.4);
    }
  }
  fieldset {
    font-size: 0;
  }
`;
