// Action typeを定義してexport
export const CURRENT_ISSUE = "CURRENT_ISSUE";
export const ADD_ISSUE = "ADD_ISSUE";
export const DELETE_ISSUE = "DELETE_ISSUE";
export const UPDATE_ISSUE = "UPDATE_ISSUE";
export const CREATE_PROFILE = "CREATE_PROFILE";

export const addIssueAction = () => {
  return {
    type: "ADD_ISSUE",
    payload: [
      {
        outline: "A bug in Top Page",
        status: "open",
        username: "1太郎",
        createDate: "03-21-2021",
        updateDate: "03-21-2021",
      },
      {
        outline: "A problem of performance in Top Page",
        status: "open",
        username: "2太郎",
        createDate: "03-21-2021",
        updateDate: "03-21-2021",
      },
      {
        outline: "A fix layout",
        status: "close",
        username: "3太郎",
        createDate: "03-21-2021",
        updateDate: "03-21-2021",
      },
    ],
  };
};

const TabActionTypes = {
  SELECT_TAB: "SELECT_TAB",
  RESET_TABS: "RESET_TABS",
};

export default TabActionTypes;
