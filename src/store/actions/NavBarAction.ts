/* eslint-disable require-jsdoc */
export interface INavBar {
  type: string;
  payload: boolean;
}

function NavBarAction(data: boolean): INavBar {
  return {
    type: "navbar",
    payload: data,
  };
}

export default NavBarAction;
