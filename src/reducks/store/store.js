import { connectRouter, routerMiddleware } from "connected-react-router";
import {
  applyMiddleware,
  combineReducers,
  createStore as reduxCreateStore,
} from "redux";
import { IssuesReducer, ProfileReducer } from "../users/reducers";

export default function createStore(history) {
  return reduxCreateStore(
    //reduxのcreateScoreで別名インポートしたもの
    combineReducers({
      //複数のReducersを統合する
      router: connectRouter(history),
      issues: IssuesReducer,
      profile: ProfileReducer,
    }),
    applyMiddleware(routerMiddleware(history))
  );
}
