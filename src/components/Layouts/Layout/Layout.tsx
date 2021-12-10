import React from "react";
import NavBar from "../NavBar/NavBar";

import { Styled } from "./style";

function Layout() {
  return (
    <>
      <Styled.GlobalStyle />
      <NavBar />
    </>
  );
}

export default Layout;
