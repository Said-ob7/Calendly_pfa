import React from "react";

interface HeaderProps {
  logoSrc: string;
  pageTitle: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header className="App-header">
      <img src={props.logoSrc} className="App-logo" alt="logo" />
      <div className="App-title">{props.pageTitle}</div>
    </header>
  );
};

export default Header;
