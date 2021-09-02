/* eslint-disable require-jsdoc */
import { actions } from "../actions";
import { IProduct } from "../actions/ProductSelectAction";

type Action = {
  type: keyof typeof actions;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
};

const INIT_STATE = {
  name: "",
  value: "",
  finish: "",
};

function productSelect(state: IProduct = INIT_STATE, action: Action): IProduct {
  switch (action.type) {
    case actions.PRODUCTSELECT:
      return Object.assign({}, state, { ...action.payload });

    default:
      return state;
  }
}

export default productSelect;
