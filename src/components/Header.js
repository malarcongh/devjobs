import React from "react";
import Toggle from "./Toggle";

function Header(){

  return (
    <header className="header">
      <h1>{'devjobs</>'}</h1>
      <Toggle />
    </header>
  );
}

export default Header;