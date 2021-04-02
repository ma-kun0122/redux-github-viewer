import React from "react";
import styled from "styled-components";
import { IssueHeader } from "../organisms/Issue/IssueHeader";
import IssueTable from "../organisms/Issue/IssueTable";

const IssueParents = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 80px 50px;
`;

function IssueContainer() {
  return (
    <IssueParents>
      <IssueHeader />
      <IssueTable />
    </IssueParents>
  );
}

export default IssueContainer;
