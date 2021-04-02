const initialState = {
  issues: [
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
  profile: [
    {
      userpicture: "url", //画像のURLを記載？
      username: "masashi",
      mailadress: "hoge@example.com",
    },
  ],
};

export default initialState;
