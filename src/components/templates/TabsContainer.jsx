import React, { useState } from "react";
import styled from "styled-components";
import IssueContainer from "./IssueContainer";
import PullRequestContainer from "./PullRequestCotainer";

const TabDiv = styled.div`
  text-align: center;
  margin-top: 40px;
`;

const TabUl = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

const FocusTab = styled.li`
  border-radius: 6px 6px 0 0;
  border: 1px solid rgb(225, 228, 232);
  border-bottom: none;
  list-style: none;
  text-align: center;
  width: 400px;
  height: 60px;
`;

const OutOfFocusTab = styled.li`
  border-bottom: 1px solid rgb(225, 228, 232);
  list-style: none;
  text-align: center;
  width: 400px;
  height: 60px;
`;

const TabBtn = styled.button`
  outline-style: none;
  border-radius: 6px;
  background-color: white;
  color: rgb(88, 96, 105);
  width: 100%;
  height: 100%;
  border: none;
  font-weight: bold;
  font-size: 1.2rem;
`;

function TabsContainer() {
  const [tabChosen, TabChange] = useState(true);

  const IssueTab = () => {
    return (
      <>
        <TabUl>
          <FocusTab>
            <TabBtn>Issue</TabBtn>
          </FocusTab>
          <OutOfFocusTab>
            <TabBtn onClick={() => TabChange(false)}>PullRequest</TabBtn>
          </OutOfFocusTab>
        </TabUl>
        <IssueContainer />
      </>
    );
  };

  const PullRequestTab = () => {
    return (
      <>
        <TabUl>
          <OutOfFocusTab>
            <TabBtn onClick={() => TabChange(true)}>Issue</TabBtn>
          </OutOfFocusTab>
          <FocusTab>
            <TabBtn>PullRequest</TabBtn>
          </FocusTab>
        </TabUl>
        <PullRequestContainer />
      </>
    );
  };

  const chosenTab = tabChosen ? <IssueTab /> : <PullRequestTab />;

  return <TabDiv>{chosenTab}</TabDiv>;
}

export default TabsContainer;
