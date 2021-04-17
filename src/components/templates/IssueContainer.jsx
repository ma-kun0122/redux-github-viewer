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
  const [filterText, setFilterText] = useState("");

  const onChangeFilterText = (e) => {
    setFilterText(e.target.value);
  };

  return (
    <IssueParents>
      <IssueHeader
        filterText={filterText}
        onChangeFilterText={onChangeFilterText}
      />
      {/* <UserCount.Provider value={100}> */}
      <IssueTable filterText={filterText} />
      {/* </UserCount.Provider> */}
    </IssueParents>
  );
}

export default IssueContainer;
