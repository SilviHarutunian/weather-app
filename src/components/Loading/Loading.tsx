import React from "react";

import spinner from "../../assets/images/spinner.gif";

import { Styled } from "./styled";

function Loading(props: any) {
  const { open } = props;

  if (!open) {
    return null;
  }

  return (
    <Styled.Container>
      <img src={spinner} alt="Loading..." />
    </Styled.Container>
  );
}

export default Loading;
