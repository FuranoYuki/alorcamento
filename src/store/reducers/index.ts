import { combineReducers } from "redux";
import navBar from "./NavBarReducer";

const rootReducers = combineReducers({
  navBar,
});

export type RootState = ReturnType<typeof rootReducers>;
export default rootReducers;
