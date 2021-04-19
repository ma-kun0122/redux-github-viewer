import React, { useState } from "react";
import styled from "styled-components";
import { IssueHeader } from "../organisms/Issue/IssueHeader";
import IssueTable from "../organisms/Issue/IssueTable";

const IssueParents = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 80px 50px;
`;

// export const UserCount = React.createContext();

function IssueContainer() {
  //検索フィルターのためのuseState Haederとtableで共通のものを使うため、ここで定義
  const [filterText, setFilterText] = useState("");

  const onChangeFilterText = (e) => {
    setFilterText(e.target.value);
    //文字が入るたび再レンダリングされる
  };

  return (
    <IssueParents>
      <IssueHeader //以下、上で定義したものをpropsとして子に渡している
        filterText={filterText}
        onChangeFilterText={onChangeFilterText}
      />
      <IssueTable
        //以下、上で定義したものをpropsとして子に渡している
        filterText={filterText}
      />
    </IssueParents>
  );
}

export default IssueContainer;
