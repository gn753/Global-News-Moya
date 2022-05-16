import { useMutation, useQuery } from "react-query";
import api from "@src/app/Api";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "@src/features/Spinner";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface Props {
  email: string;
  password: string;
}

export default function LoginSubmit({ email, password }: Props) {
  const { mutate, isLoading, isSuccess, data } = useMutation(handleLoginSubmit);

  const navigate = useNavigate();

  async function handleLoginSubmit({ email, password }: Props) {
    let params = new URLSearchParams();
    params.append("userId", email);
    params.append("password", password);
    const response = await api.post("/api/auth/login", params);
    if ((await response.data) === "login success!!") {
      return response;
    } else {
      return false;
    }
  }
  if (isSuccess) {
    setTimeout(() => navigate("/"), 500);
  }
  return (
    <>
      <div
        css={button}
        role="button"
        onClick={() => {
          mutate({ email, password });
        }}
      >
        {isLoading ? <Spinner /> : "로그인"}
      </div>
      <footer css={footer}>
        Don’t have an account? <Link to="/">Sign up</Link>
      </footer>
    </>
  );
}

const button = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  background-color: var(--color-main);
  color: #fff;
  border: none;
  margin-top: 50px;
  cursor: pointer;
`;
const footer = css`
  margin-top: 36px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  a {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height, or 129% */

    text-decoration-line: underline;

    color: #006eff;
  }
`;
const Footer = styled.footer``;
