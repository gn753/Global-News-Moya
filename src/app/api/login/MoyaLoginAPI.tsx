import api from "../../Api";

const MoyaLoginAPI = async ({ email, password }: any) => {
  let params = new URLSearchParams();
  params.append("userId", email);
  params.append("password", password);

  const response = await api.post("/auth/login", params);
  return response;
};

export default MoyaLoginAPI;
