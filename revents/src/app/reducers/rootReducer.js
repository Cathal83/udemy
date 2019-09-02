import { combineReducers } from "redux";
import testReducer from "../../features/TestArea/TestReducer";

const rootReducer = combineReducers({
  test: testReducer
});

export default rootReducer;
