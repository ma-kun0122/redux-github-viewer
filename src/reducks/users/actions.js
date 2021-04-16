// Action typeを定義してexport
export const CURRENT_ISSUE = "CURRENT_ISSUE";
export const ADD_ISSUE = "ADD_ISSUE";
export const DELETE_ISSUE = "DELETE_ISSUE";
export const FILTER_ISSUE = "FILTER_ISSUE";
export const REMAKE_ISSUE = "REMAKE_ISSUE";
export const UPDATE_ISSUE = "UPDATE_ISSUE";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};

export const setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter: filter,
  };
};
