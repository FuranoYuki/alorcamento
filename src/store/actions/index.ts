/* eslint-disable require-jsdoc */
export const actions = {
  NAVBAR: "NAVBAR",
};

interface Return {
  type: string;
}

export function navbar(): Return {
  return { type: actions.NAVBAR };
}
