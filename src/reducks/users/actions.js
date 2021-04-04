// Action typeを定義してexport
export const CREATE_ISSUE = "CREATE_ISSUE";
export const DELETE_ISSUE = "DELETE_ISSUE";
export const UPDATE_ISSUE = "UPDATE_ISSUE";
export const CREATE_PROFILE = "CREATE_PROFILE";

export const CreateIssueAction = (userState) => {
  return {
    type: "CREATE_ISSUE",
    payload: {
      outline: userState.outline,
      status: userState.status,
      username: userState.username,
      createDate: userState.createDate,
      updateDate: userState.updateDate,
    },
  };
};
