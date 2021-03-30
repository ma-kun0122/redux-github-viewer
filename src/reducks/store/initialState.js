export const initialData = {
  1: { outline: 'A fix layout', status: 'open', username: 'test', createDate: '03-21-2021', updateDate: '03-21-2021' },
  2: { outline: 'A fix layout', status: 'open', username: 'test', createDate: '03-21-2021', updateDate: '03-21-2021' },
}

const initialState = {
  issues: {
    outline: '',
    status: '',
    username: '',
    createDate: '',
    updateDate: '',
  },
  users: {
    userpicture: '', //画像のURLを記載？
    username: 'masashi',
    mailadress: 'hoge@example.com',
  },
}

export default initialState
