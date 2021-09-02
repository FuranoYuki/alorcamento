import api from "../service/http";
import { getToken } from "../service/token";

// eslint-disable-next-line require-jsdoc
async function refreshToken(): Promise<string> {
  try {
    const res = await api.post("/alorcamentos/user/refreshToken", {
      token: getToken(),
    });
    return res.data.newToken;
  } catch (error) {
    return "failedRefresh";
  }
}

export default refreshToken;
