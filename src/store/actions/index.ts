/* eslint-disable require-jsdoc */
export const actions = {
  NAVBAR: "NAVBAR",
  PRODUCTSELECT: "PRODUCTSELECT",
};

interface Return {
  type: string;
}

export function navbar(): Return {
  return { type: actions.NAVBAR };
}

export function productSelect(): Return {
  return { type: actions.PRODUCTSELECT };
}
