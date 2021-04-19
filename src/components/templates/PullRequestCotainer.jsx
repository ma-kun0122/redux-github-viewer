import React from "react";
import styled from "styled-components";

const PullRequestMessage = styled.h1`
  position: relative;
  text-align: center;
  top: 100px;
`;

const PullRequestContainer = () => {
  return (
    <>
      <PullRequestMessage>PullRequest</PullRequestMessage>
    </>
  );
};

export default PullRequestContainer;
