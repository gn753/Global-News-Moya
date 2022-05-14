import React from "react";
import { useState } from "react";
import { useLoginMutation } from "@src/app/api/auth/authApiSlice";

export default function ExamplePage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [login] = useLoginMutation();

  function handlePasswordInput(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  const handleIdInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  async function handleLogin(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    const params: any = new URLSearchParams();
    params.append("userId", email);
    params.append("password", password);
    await login(params);
  }

  return (
    <>
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
        <button onClick={handleLogin}>sdsdsd sfsffsfsss</button>;
      </form>
    </>
  );
}
