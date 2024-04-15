import React from "react";

type LogoutButtonProps = {
  logout: () => void;
};

const LogoutButton: React.FC<LogoutButtonProps> = ({ logout }) => {
  return (
    <button className="fancy" onClick={logout}>
      <span className="top-key"></span>
      <span className="text">Logout</span>
      <span className="bottom-key-1"></span>
      <span className="bottom-key-2"></span>
    </button>
  );
};

export default LogoutButton;
