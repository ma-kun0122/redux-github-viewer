import initialState from "../store/initialState";
import * as Actions from "./actions"; //actionsファイルの中身全てを「Actions」としてインポート
import { VisibilityFilters } from "./actions";

export const IssuesReducer = (state = initialState.issues, action) => {
  //↑第一引数にstate,第二引数にactionがreturnした値を受け取るようになっている
  switch (
    action.type //Actionのtypeに応じて、stateをどのように変更するのか決める
  ) {
    case Actions.CURRENT_ISSUE:
      return state;

    case Actions.ADD_ISSUE:
      return [...state, action.payload];

    case Actions.DELETE_ISSUE:
      return [...state.filter((t) => t.id !== action.payload)];
    //選択したidを持たない＝残っているものだけをfilter(抽出)して再描画するアクション

    default:
      return state;
  }
};

export const visibilityFilter = (
  state = VisibilityFilters.SHOW_ALL, //初期値をSHOW_ALLにしておく
  action
) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export const CheckBoxReducer = (state = initialState.checkbox, action) => {
  switch (action.type) {
    case Actions.DELETE_ISSUE:
      return [...state.filter((t) => t.id !== action.payload)];
  }
};

export const ProfileReducer = (state = initialState.profile, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
