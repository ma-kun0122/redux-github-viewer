const initialState = {
  issues: [
    {
      id: 0,
      outline: "A bug in Top Page",
      status: "open",
      username: "1太郎",
      createDate: "03-21-2021",
      updateDate: "03-21-2021",
    },
    {
      id: 1,
      outline: "A problem of performance in Top Page",
      status: "open",
      username: "2太郎",
      createDate: "03-21-2021",
      updateDate: "03-21-2021",
    },
    {
      id: 2,
      outline: "fix layout",
      status: "close",
      username: "3太郎",
      createDate: "03-21-2021",
      updateDate: "03-21-2021",
    },
  ],

  checkbox: {
    isChecked: false,
  },

  profile: {
    userpicture: `${process.env.PUBLIC_URL}/tbsradio_alco.png`, //画像のURLを記載？
    username: "masashi",
    mailadress: "hoge@example.com",
  },
};

export default initialState;
