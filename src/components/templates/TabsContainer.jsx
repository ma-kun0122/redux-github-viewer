import React from "react";
import styled from "styled-components";
import IssueContainer from "./IssueContainer";

const TabDiv = styled.div`
  text-align: center;
`;

const TabUl = styled.ul`
  display: flex;
  margin: 0 auto;
`;

const Tab = styled.li`
  list-style: none;
  width: 400px;
  height: 50px;
`;

const TabBtn = styled.button`
  list-style: none;
  background-color: white;
  color: rgb(88, 96, 105);
  width: 100%;
  height: 100%;
  font-weight: bold;
`;

// const ChosenTab = { ?<IssueContainer> : <Pull>}

function TabsContainer() {
  return (
    <TabDiv>
      <TabUl role="tablist">
        <Tab role="presentation">
          <TabBtn
          // onClick={handleClick}
          >
            Issue
          </TabBtn>
        </Tab>
        <Tab role="presentation">
          <TabBtn
          // onClick={handleClick}
          >
            PullRequest
          </TabBtn>
        </Tab>
      </TabUl>
      <IssueContainer />
    </TabDiv>
  );
}

export default TabsContainer;
