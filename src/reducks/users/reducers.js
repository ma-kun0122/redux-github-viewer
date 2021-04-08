import initialState from "../store/initialState";
import * as Actions from "./actions"; //actionsファイルの中身全てを「Actions」としてインポート

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
      return [...state.filter((list) => list.outline !== action.payload)];
    //選択したoutlineを持たない＝残っているものだけをfilterして再描画するアクション

    default:
      return state;
  }
};

export const ProfileReducer = (state = initialState.profile, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
