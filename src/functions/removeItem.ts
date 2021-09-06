import api from "../service/http";

// eslint-disable-next-line require-jsdoc
function removeItem(password: string): boolean {
  api
    .post("/alorcamentos/user/password", { password })
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });

  return false;
}

export default removeItem;
