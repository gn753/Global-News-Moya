import axios from "axios";
export const MoyaLoginAPI = async ({ email, password }: any) => {
  let params = new URLSearchParams();
  params.append("userId", email);
  params.append("password", password);

  const response = await axios.post("/api/auth/login", params, {
    withCredentials: true,
  });
  return response;
};
export const loginResponse = async () => {
  let params = new URLSearchParams();
  const response = await axios.get("/api/auth/login", {
    withCredentials: true,
  });
  console.log(response,'로그인릿판스')
  return response;
};
