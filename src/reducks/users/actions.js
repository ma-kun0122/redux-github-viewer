// Action typeを定義してexport
export const CREATE_ISSUE = 'CREATE_ISSUE'
export const DELETE_ISSUE = 'DELETE_ISSUE'
export const UPDATE_ISSUE = 'UPDATE_ISSUE'

export const CreateIssueAction = (userState) => {
  return {
    type: 'CREATE_ISSUE',
    payload: {
      outline: userState.outline,
      status: userState.status,
      username: userState.username,
      createDate: userState.createDate,
      updateDate: userState.updateDate,
    },
  }
}

export const DeleteIssueAction = () => {
  return {
    type: 'DELETE_ISSUE',
    payload: {
      outline: '',
      status: '',
      username: '',
      createDate: '',
      updateDate: '',
    },
  }
}

export const UpDateIssueAction = (userState) => {
  return {
    type: 'UPDATE_ISSUE',
    payload: {
      outline: userState.outline,
      status: '',
      username: '',
      createDate: '',
      updateDate: '',
    },
  }
}
