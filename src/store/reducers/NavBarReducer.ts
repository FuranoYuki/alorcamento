/* eslint-disable require-jsdoc */
import { actions } from "../actions";

type Action = {
  type: keyof typeof actions;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
};

const INIT_STATE = true;

function navBar(state: boolean = INIT_STATE, action: Action): boolean {
  switch (action.type) {
    case actions.NAVBAR:
      return !state;

    default:
      return state;
  }
}

export default navBar;
