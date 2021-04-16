import { connectRouter } from "connected-react-router";
import {
  applyMiddleware,
  combineReducers,
  createStore as reduxCreateStore,
} from "redux";
import {
  IssuesReducer,
  ProfileReducer,
  visibilityFilter,
} from "../users/reducers";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function createStore(history) {
  return reduxCreateStore(
    //reduxのcreateScoreで別名インポートしたもの
    combineReducers({
      //複数のReducersを統合する
      router: connectRouter(history),
      issues: IssuesReducer,
      // checkbox: CheckBoxReducer,
      profile: ProfileReducer,
      visibilityFilter,
    }),
    composeEnhancers(
      applyMiddleware()
      //thunk,
    )
  );
}
