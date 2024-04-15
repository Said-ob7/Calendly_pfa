import React from "react";

type LoginButtonProps = {
  onClick: () => void;
};

const LoginButton: React.FC<LoginButtonProps> = ({ onClick }) => {
  return (
    <button className="fancy" onClick={onClick}>
      <span className="top-key"></span>
      <span className="text">Login</span>
      <span className="bottom-key-1"></span>
      <span className="bottom-key-2"></span>
    </button>
  );
};

export default LoginButton;
