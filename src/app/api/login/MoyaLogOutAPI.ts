import axios from "axios";
const MoyaLogOutAPI = (session: string) => {
  axios.create({
    method: "delete",
    url: "/auth/login",
    headers: {
      Authorization: `Bearer ${session}`
    },
    withCredentials: true
  });
};

export default MoyaLogOutAPI;
