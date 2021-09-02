import { combineReducers } from "redux";
import navBar from "./NavBarReducer";
import productSelect from "./ProducSelectReducer";

const rootReducers = combineReducers({
  navBar,
  productSelect,
});

export type RootState = ReturnType<typeof rootReducers>;
export default rootReducers;
